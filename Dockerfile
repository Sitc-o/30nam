FROM python:3.11-slim

WORKDIR /app

COPY requirements-voice.txt .
RUN pip install --no-cache-dir -r requirements-voice.txt

COPY . .

ENV VIETTEL_VOICE_HOST=0.0.0.0
ENV VIETTEL_VOICE_PORT=8765
ENV VIETTEL_NO_BROWSER=1

EXPOSE 8765

CMD ["python", "tools/voice_server.py"]
