#!/usr/bin/env python3
"""Local static server + Vietnamese neural TTS cache for the Viettel Commerce site."""
from __future__ import annotations

import asyncio
import hashlib
import json
import mimetypes
import os
import re
import sys
import threading
import time
import webbrowser
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any

try:
    import edge_tts
except Exception as exc:  # pragma: no cover - displayed to user at runtime
    edge_tts = None
    EDGE_IMPORT_ERROR = str(exc)
else:
    EDGE_IMPORT_ERROR = ""

ROOT = Path(__file__).resolve().parents[1]
AUDIO_DIR = ROOT / "assets" / "audio" / "neural"
AUDIO_DIR.mkdir(parents=True, exist_ok=True)
HOST = os.environ.get("VIETTEL_VOICE_HOST", "127.0.0.1")
PORT = int(os.environ.get("VIETTEL_VOICE_PORT", "8765"))
NO_BROWSER = os.environ.get("VIETTEL_NO_BROWSER", "") != ""
GENERATE_LOCK = threading.Lock()

STYLE_CONFIG: dict[str, dict[str, str]] = {
    "keynote": {"rate": "-8%", "pitch": "-2Hz", "volume": "+0%"},
    "story": {"rate": "-6%", "pitch": "+1Hz", "volume": "+0%"},
    "archive": {"rate": "-2%", "pitch": "-1Hz", "volume": "+0%"},
}
ALLOWED_VOICES = {"vi-VN-HoaiMyNeural", "vi-VN-NamMinhNeural"}


def json_bytes(payload: dict[str, Any]) -> bytes:
    return json.dumps(payload, ensure_ascii=False).encode("utf-8")


def clean_text(value: str) -> str:
    text = re.sub(r"\s+", " ", value or "").strip()
    text = text.replace(";", ". ")
    text = re.sub(r"\.{4,}", "…", text)
    text = re.sub(r"\s+([,.;:!?…])", r"\1", text)
    # Extra rhetorical breathing room for headings and quotations.
    text = text.replace("Trích lời nhân chứng.", "Trích lời nhân chứng…")
    text = re.sub(r"([.!?])\s+", r"\1  ", text)
    return text[:120_000]


def cache_name(index: int, voice: str, style: str, text: str) -> tuple[str, str]:
    digest = hashlib.sha256(f"{voice}|{style}|{text}".encode("utf-8")).hexdigest()[:16]
    voice_tag = "hoai-my" if "HoaiMy" in voice else "nam-minh"
    safe_index = max(0, min(index, 999))
    filename = f"event-{safe_index:02d}-{voice_tag}-{style}-{digest}.mp3"
    return filename, digest


async def synthesize(text: str, voice: str, style: str, output: Path) -> None:
    if edge_tts is None:
        raise RuntimeError(
            "Chưa cài thư viện edge-tts. Hãy chạy lại run-voice-site.bat để cài tự động. "
            + EDGE_IMPORT_ERROR
        )
    config = STYLE_CONFIG.get(style, STYLE_CONFIG["keynote"])
    temp = output.with_suffix(".tmp.mp3")
    if temp.exists():
        temp.unlink()
    communicator = edge_tts.Communicate(
        text=text,
        voice=voice,
        rate=config["rate"],
        volume=config["volume"],
        pitch=config["pitch"],
    )
    await communicator.save(str(temp))
    if not temp.exists() or temp.stat().st_size < 1024:
        raise RuntimeError("Dịch vụ giọng nói không trả về audio hợp lệ.")
    temp.replace(output)


class VoiceHandler(SimpleHTTPRequestHandler):
    server_version = "ViettelVoiceServer/1.0"

    def log_message(self, fmt: str, *args: Any) -> None:
        sys.stdout.write("[voice-site] " + (fmt % args) + "\n")

    def send_json(self, payload: dict[str, Any], status: int = HTTPStatus.OK) -> None:
        body = json_bytes(payload)
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:  # noqa: N802
        if self.path.split("?", 1)[0] == "/api/health":
            self.send_json(
                {
                    "ok": edge_tts is not None,
                    "engine": "Microsoft Edge Neural TTS",
                    "voices": sorted(ALLOWED_VOICES),
                    "cacheDir": "assets/audio/neural",
                    "error": EDGE_IMPORT_ERROR if edge_tts is None else "",
                },
                HTTPStatus.OK if edge_tts is not None else HTTPStatus.SERVICE_UNAVAILABLE,
            )
            return
        super().do_GET()

    def do_POST(self) -> None:  # noqa: N802
        if self.path.split("?", 1)[0] != "/api/tts":
            self.send_json({"error": "Không tìm thấy API."}, HTTPStatus.NOT_FOUND)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length <= 0 or length > 2_000_000:
                raise ValueError("Dữ liệu audio không hợp lệ hoặc quá lớn.")
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
            index = int(payload.get("index", 0))
            voice = str(payload.get("voice", "vi-VN-HoaiMyNeural"))
            style = str(payload.get("style", "keynote"))
            text = clean_text(str(payload.get("text", "")))
            if voice not in ALLOWED_VOICES:
                raise ValueError("Giọng đọc không được hỗ trợ.")
            if style not in STYLE_CONFIG:
                style = "keynote"
            if len(text) < 10:
                raise ValueError("Nội dung đọc quá ngắn.")

            filename, digest = cache_name(index, voice, style, text)
            output = AUDIO_DIR / filename
            cached = output.exists() and output.stat().st_size > 1024
            if not cached:
                with GENERATE_LOCK:
                    cached = output.exists() and output.stat().st_size > 1024
                    if not cached:
                        asyncio.run(synthesize(text, voice, style, output))

            relative_url = "/assets/audio/neural/" + filename
            self.send_json(
                {
                    "ok": True,
                    "url": relative_url,
                    "cached": cached,
                    "cacheKey": digest,
                    "size": output.stat().st_size,
                    "voice": voice,
                    "style": style,
                }
            )
        except (BrokenPipeError, ConnectionResetError):
            return
        except Exception as exc:
            self.send_json(
                {
                    "ok": False,
                    "error": str(exc),
                    "hint": "Kiểm tra kết nối Internet, sau đó chạy lại run-voice-site.bat.",
                },
                HTTPStatus.SERVICE_UNAVAILABLE,
            )


def open_browser() -> None:
    time.sleep(1.2)
    webbrowser.open(f"http://{HOST}:{PORT}/index.html")


def main() -> int:
    mimetypes.add_type("audio/mpeg", ".mp3")
    mimetypes.add_type("image/webp", ".webp")
    handler = partial(VoiceHandler, directory=str(ROOT))
    server = ThreadingHTTPServer((HOST, PORT), handler)
    if not NO_BROWSER:
        threading.Thread(target=open_browser, daemon=True).start()
    print("=" * 72)
    print("VIETTEL COMMERCE — WEBSITE GIỌNG DIỄN GIẢ TIẾNG VIỆT")
    print(f"Địa chỉ: http://{HOST}:{PORT}/bien-nien-30-nam.html")
    print("Giọng: Hoài My Neural / Nam Minh Neural")
    print("Nhấn Ctrl+C để dừng máy chủ.")
    print("=" * 72)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nĐã dừng máy chủ.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
