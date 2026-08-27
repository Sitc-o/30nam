(() => {
  'use strict';

  const events = [...document.querySelectorAll('.event-list .event')];
  const synth = window.speechSynthesis;
  const audio = document.getElementById('presenterAudio');
  const engineSelect = document.getElementById('voiceEngine');
  const voiceSelect = document.getElementById('presenterVoice');
  const styleSelect = document.getElementById('presenterStyle');
  const rateSelect = document.getElementById('voiceRate');
  const statusEl = document.getElementById('voiceGlobalStatus');
  const qualityEl = document.getElementById('voiceQuality');

  let currentEvent = null;
  let currentSegments = [];
  let segmentIndex = 0;
  let paused = false;
  let sequenceMode = false;
  let sequenceIndex = -1;
  let activeMode = null;
  let currentUtterance = null;
  let keepAliveTimer = null;
  let serverAvailable = false;
  let requestController = null;

  const STYLE = {
    keynote: {
      rate: 0.88,
      titleRate: 0.78,
      quoteRate: 0.83,
      pitch: 0.97,
      titlePitch: 0.94,
      quotePitch: 1.01,
      sentencePause: 320,
      paragraphPause: 650,
      serverRate: '-8%',
      serverPitch: '-2Hz'
    },
    story: {
      rate: 0.9,
      titleRate: 0.8,
      quoteRate: 0.85,
      pitch: 1.02,
      titlePitch: 0.98,
      quotePitch: 1.06,
      sentencePause: 390,
      paragraphPause: 760,
      serverRate: '-6%',
      serverPitch: '+1Hz'
    },
    archive: {
      rate: 0.94,
      titleRate: 0.86,
      quoteRate: 0.9,
      pitch: 0.98,
      titlePitch: 0.96,
      quotePitch: 1,
      sentencePause: 220,
      paragraphPause: 460,
      serverRate: '-2%',
      serverPitch: '-1Hz'
    }
  };

  const NUMBER_WORDS = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
  const SCALE_WORDS = ['', 'nghìn', 'triệu', 'tỷ', 'nghìn tỷ', 'triệu tỷ'];

  const ABBREVIATIONS = [
    [/\bCNTT\b/gi, 'công nghệ thông tin'],
    [/\bXNK\b/gi, 'xuất nhập khẩu'],
    [/\bBQP\b/gi, 'Bộ Quốc phòng'],
    [/\bQĐ\b/g, 'quyết định'],
    [/\bTCT\b/gi, 'Tổng Công ty'],
    [/\bCBNV\b/gi, 'cán bộ, nhân viên'],
    [/\bCBCNV\b/gi, 'cán bộ, công nhân viên'],
    [/\bBTS\b/g, 'B T S'],
    [/\bSDH\b/g, 'S D H'],
    [/\bVKO\b/g, 'V K O'],
    [/\bAPEC\b/g, 'A P E C'],
    [/\bERP\b/g, 'E R P'],
    [/\bCRM\b/g, 'C R M'],
    [/\bAI\b/g, 'A I'],
    [/\bVoIP\b/gi, 'thoại qua giao thức Internet'],
    [/\b2G\b/gi, 'hai G'],
    [/\b3G\b/gi, 'ba G'],
    [/\b4G\b/gi, 'bốn G'],
    [/\b5G\b/gi, 'năm G'],
    [/\bkm\b/gi, 'ki lô mét'],
    [/\bm2\b/gi, 'mét vuông'],
    [/\bTSVM\b/g, 'trong sạch vững mạnh'],
    [/\bCNVTQĐ\b/g, 'Công nghiệp Viễn thông Quân đội'],
    [/\bĐUQSTW\b/g, 'Đảng ủy Quân sự Trung ương'],
    [/\bQNCN\b/g, 'quân nhân chuyên nghiệp'],
    [/\bVNR500\b/gi, 'V N R năm trăm'],
    [/\bUSD\b/g, 'đô la Mỹ'],
    [/\bSOC\b/g, 'S O C'],
    [/\bPSTN\b/g, 'P S T N'],
    [/\blicense\b/gi, 'giấy phép'],
    [/\bnode\b/gi, 'nút mạng']
  ];

  function setStatus(text, kind = '') {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = 'voice-status' + (kind ? ` ${kind}` : '');
  }

  function readThreeDigits(n, full = false) {
    const hundred = Math.floor(n / 100);
    const tens = Math.floor((n % 100) / 10);
    const unit = n % 10;
    const out = [];

    if (hundred > 0 || full) {
      out.push(NUMBER_WORDS[hundred] + ' trăm');
      if (tens === 0 && unit > 0) out.push('lẻ');
    }

    if (tens > 1) {
      out.push(NUMBER_WORDS[tens] + ' mươi');
      if (unit === 1) out.push('mốt');
      else if (unit === 4) out.push('tư');
      else if (unit === 5) out.push('lăm');
      else if (unit > 0) out.push(NUMBER_WORDS[unit]);
    } else if (tens === 1) {
      out.push('mười');
      if (unit === 5) out.push('lăm');
      else if (unit > 0) out.push(NUMBER_WORDS[unit]);
    } else if (unit > 0) {
      out.push(NUMBER_WORDS[unit]);
    }

    return out.join(' ').trim();
  }

  function integerToVietnamese(value) {
    let n = Number(String(value).replace(/\D/g, ''));
    if (!Number.isFinite(n)) return String(value);
    if (n === 0) return 'không';
    const groups = [];
    while (n > 0) {
      groups.push(n % 1000);
      n = Math.floor(n / 1000);
    }
    const out = [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const group = groups[i];
      if (!group) continue;
      const full = i < groups.length - 1 && group < 100;
      const words = readThreeDigits(group, full);
      if (words) out.push(words + (SCALE_WORDS[i] ? ` ${SCALE_WORDS[i]}` : ''));
    }
    return out.join(' ').replace(/\s+/g, ' ').trim();
  }

  function decimalToVietnamese(integerPart, fractionPart) {
    const integerWords = integerToVietnamese(integerPart);
    const fractionWords = String(fractionPart).split('').map(d => NUMBER_WORDS[Number(d)]).join(' ');
    return `${integerWords} phẩy ${fractionWords}`;
  }

  function normalizeForSpeech(input) {
    let text = (input || '')
      .replace(/\s+/g, ' ')
      .replace(/\.{3,}/g, '…')
      .replace(/\s+([,.;:!?])/g, '$1')
      .trim();

    ABBREVIATIONS.forEach(([pattern, replacement]) => {
      text = text.replace(pattern, replacement);
    });

    text = text
      .replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/g, (_, d, m, y) =>
        `ngày ${integerToVietnamese(d)} tháng ${integerToVietnamese(m)} năm ${integerToVietnamese(y)}`)
      .replace(/(\d{1,2})\/(\d{4})/g, (_, m, y) =>
        `tháng ${integerToVietnamese(m)} năm ${integerToVietnamese(y)}`)
      .replace(/\b(\d{4})\s*[–—-]\s*(\d{4})\b/g, (_, a, b) =>
        `từ năm ${integerToVietnamese(a)} đến năm ${integerToVietnamese(b)}`)
      .replace(/\b(\d{1,3}(?:\.\d{3})+)\b/g, value => integerToVietnamese(value))
      .replace(/\b(\d+),(\d+)\s*%/g, (_, a, b) => `${decimalToVietnamese(a, b)} phần trăm`)
      .replace(/\b(\d+)\s*%/g, (_, a) => `${integerToVietnamese(a)} phần trăm`)
      .replace(/\b(\d+),(\d+)\b/g, (_, a, b) => decimalToVietnamese(a, b))
      .replace(/\b\d+\b/g, value => integerToVietnamese(value))
      .replace(/[{}\[\]<>|*_#]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    return text;
  }

  function cleanTitle(title) {
    return (title || '')
      .replace(/^\s*\d+\s*[.:-]?\s*/, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function splitLongSentence(sentence, maxLength = 190) {
    if (sentence.length <= maxLength) return [sentence];
    const parts = sentence.split(/(?<=[,;:])\s+/);
    const result = [];
    let buffer = '';
    parts.forEach(part => {
      const candidate = `${buffer} ${part}`.trim();
      if (candidate.length > maxLength && buffer) {
        result.push(buffer);
        buffer = part;
      } else {
        buffer = candidate;
      }
    });
    if (buffer) result.push(buffer);
    return result.flatMap(part => {
      if (part.length <= maxLength) return [part];
      const words = part.split(' ');
      const chunks = [];
      let chunk = '';
      words.forEach(word => {
        const candidate = `${chunk} ${word}`.trim();
        if (candidate.length > maxLength && chunk) {
          chunks.push(chunk);
          chunk = word;
        } else chunk = candidate;
      });
      if (chunk) chunks.push(chunk);
      return chunks;
    });
  }

  function createPresenterSegments(eventEl) {
    const index = eventEl.dataset.eventIndex || '';
    const year = normalizeForSpeech(eventEl.dataset.voiceYear || '');
    const title = normalizeForSpeech(cleanTitle(eventEl.dataset.voiceTitle || ''));
    const body = normalizeForSpeech(eventEl.dataset.voiceText || '');
    const segments = [];

    segments.push({
      text: `Sự kiện số ${integerToVietnamese(index)}.`,
      role: 'title',
      pause: 520
    });
    if (year) segments.push({ text: year + '.', role: 'title', pause: 680 });
    if (title) segments.push({ text: title + '.', role: 'title', pause: 900 });

    const rawSentences = body.match(/[^.!?…]+[.!?…]?/g) || [body];
    rawSentences.forEach((raw, sentenceNo) => {
      const sentence = raw.trim();
      if (!sentence) return;
      splitLongSentence(sentence).forEach((part, partNo, parts) => {
        const isQuote = /[“”"]/.test(part) || /nhớ lại|chia sẻ|hồi tưởng|cho biết/i.test(part);
        const role = isQuote ? 'quote' : 'body';
        const last = partNo === parts.length - 1;
        segments.push({
          text: part.replace(/[“”]/g, '').trim(),
          role,
          pause: last ? (sentenceNo % 3 === 2 ? 620 : 330) : 150
        });
      });
    });

    segments.push({
      text: 'Đó là một dấu mốc đáng nhớ trong hành trình phát triển của Viettel Commerce.',
      role: 'closing',
      pause: 0
    });
    return segments.filter(segment => segment.text);
  }

  function buildServerNarration(eventEl) {
    const segments = createPresenterSegments(eventEl);
    return segments.map(segment => {
      if (segment.role === 'title') return `${segment.text} …`;
      if (segment.role === 'quote') return `Trích lời nhân chứng. ${segment.text} …`;
      if (segment.role === 'closing') return `… ${segment.text}`;
      return segment.text;
    }).join(' ');
  }

  function getAvailableVietnameseVoices() {
    if (!synth) return [];
    return synth.getVoices().filter(voice =>
      /^vi(?:-|_)/i.test(voice.lang || '') ||
      /Vietnam|Tiếng Việt|HoaiMy|NamMinh|An Online/i.test(voice.name || '')
    );
  }

  function scoreVoice(voice, requested) {
    const name = voice.name || '';
    let score = 0;
    if (/Natural|Neural|Online/i.test(name)) score += 100;
    if (requested.includes('HoaiMy') && /HoaiMy/i.test(name)) score += 120;
    if (requested.includes('NamMinh') && /NamMinh/i.test(name)) score += 120;
    if (/Microsoft/i.test(name)) score += 40;
    if (/Google/i.test(name)) score += 25;
    if (voice.localService === false) score += 12;
    if (/vi-VN/i.test(voice.lang || '')) score += 20;
    return score;
  }

  function selectSystemVoice() {
    const requested = voiceSelect?.value || 'vi-VN-HoaiMyNeural';
    const voices = getAvailableVietnameseVoices();
    return voices.sort((a, b) => scoreVoice(b, requested) - scoreVoice(a, requested))[0] || null;
  }

  function updateQuality(message, state = '') {
    if (!qualityEl) return;
    qualityEl.className = `voice-quality ${state}`.trim();
    const text = qualityEl.querySelector('span:last-child');
    if (text) text.innerHTML = message;
  }

  async function checkVoiceServer() {
    if (location.protocol === 'file:') {
      serverAvailable = false;
      updateQuality('Đang mở trực tiếp HTML. Hãy chạy <b>run-voice-site.bat</b> để kích hoạt giọng AI diễn giả Hoài My hoặc Nam Minh.', 'warning');
      return false;
    }
    try {
      const response = await fetch('/api/health', { cache: 'no-store' });
      if (!response.ok) throw new Error('Voice server unavailable');
      const data = await response.json();
      serverAvailable = Boolean(data.ok);
      updateQuality(
        serverAvailable
          ? 'Máy chủ giọng AI đã sẵn sàng. Audio được tạo bằng giọng Việt neural và lưu vào bộ nhớ đệm để nghe lại nhanh.'
          : 'Máy chủ đang chạy nhưng chưa sẵn sàng tạo giọng AI.',
        serverAvailable ? 'ready' : 'warning'
      );
      return serverAvailable;
    } catch (_) {
      serverAvailable = false;
      updateQuality('Chưa kết nối được máy chủ giọng AI. Chạy <b>run-voice-site.bat</b>; website tạm dùng giọng tiếng Việt trên thiết bị.', 'warning');
      return false;
    }
  }

  function resetEventStyles() {
    events.forEach(eventEl => {
      eventEl.classList.remove('is-speaking', 'is-paused', 'is-error', 'is-generating');
      const state = eventEl.querySelector('.audio-state');
      if (state && eventEl !== currentEvent) state.textContent = 'Chưa phát';
    });
  }

  function markEvent(eventEl, className, label) {
    resetEventStyles();
    if (!eventEl) return;
    if (className) eventEl.classList.add(className);
    const state = eventEl.querySelector('.audio-state');
    if (state) state.textContent = label || '';
  }

  function updateProgress(ratio) {
    if (!currentEvent) return;
    const bar = currentEvent.querySelector('.audio-progress span');
    if (bar) bar.style.width = `${Math.max(0, Math.min(100, Math.round(ratio * 100)))}%`;
  }

  function getStyle() {
    return STYLE[styleSelect?.value] || STYLE.keynote;
  }

  function stopKeepAlive() {
    if (keepAliveTimer) clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }

  function startKeepAlive() {
    stopKeepAlive();
    keepAliveTimer = setInterval(() => {
      if (activeMode === 'system' && synth?.speaking && !paused) synth.resume();
    }, 8000);
  }

  function finishCurrent() {
    stopKeepAlive();
    if (currentEvent) {
      updateProgress(1);
      currentEvent.classList.remove('is-speaking', 'is-paused', 'is-generating');
      const state = currentEvent.querySelector('.audio-state');
      if (state) state.textContent = 'Đã nghe xong';
    }
    currentEvent = null;
    currentSegments = [];
    segmentIndex = 0;
    activeMode = null;

    if (sequenceMode) {
      sequenceIndex += 1;
      if (sequenceIndex < events.length) {
        setTimeout(() => startEvent(events[sequenceIndex], true), 650);
      } else {
        sequenceMode = false;
        sequenceIndex = -1;
        setStatus('Đã nghe hết toàn bộ biên niên.', 'ok');
      }
    } else {
      setStatus('Đã phát xong sự kiện.', 'ok');
    }
  }

  function stopPlayback(clearSequence = true) {
    requestController?.abort();
    requestController = null;
    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
    }
    synth?.cancel();
    stopKeepAlive();
    if (currentEvent) {
      currentEvent.classList.remove('is-speaking', 'is-paused', 'is-error', 'is-generating');
      const state = currentEvent.querySelector('.audio-state');
      if (state) state.textContent = 'Đã dừng';
      const bar = currentEvent.querySelector('.audio-progress span');
      if (bar) bar.style.width = '0%';
    }
    currentEvent = null;
    currentSegments = [];
    segmentIndex = 0;
    paused = false;
    activeMode = null;
    if (clearSequence) {
      sequenceMode = false;
      sequenceIndex = -1;
    }
  }

  function getSegmentSettings(segment) {
    const style = getStyle();
    if (segment.role === 'title') return { rate: style.titleRate, pitch: style.titlePitch };
    if (segment.role === 'quote') return { rate: style.quoteRate, pitch: style.quotePitch };
    if (segment.role === 'closing') return { rate: style.rate * 0.93, pitch: style.pitch };
    return { rate: style.rate, pitch: style.pitch };
  }

  function speakNextSystemSegment() {
    if (!currentEvent || paused) return;
    if (segmentIndex >= currentSegments.length) {
      finishCurrent();
      return;
    }

    const voice = selectSystemVoice();
    if (!voice) {
      markEvent(currentEvent, 'is-error', 'Chưa có giọng vi-VN');
      setStatus('Thiết bị chưa có giọng tiếng Việt tự nhiên. Hãy chạy run-voice-site.bat để dùng giọng AI diễn giả.', 'error');
      return;
    }

    const segment = currentSegments[segmentIndex];
    const settings = getSegmentSettings(segment);
    currentUtterance = new SpeechSynthesisUtterance(segment.text);
    currentUtterance.lang = 'vi-VN';
    currentUtterance.voice = voice;
    currentUtterance.rate = settings.rate;
    currentUtterance.pitch = settings.pitch;
    currentUtterance.volume = 1;
    currentUtterance.onstart = () => {
      markEvent(currentEvent, 'is-speaking', 'Đang đọc như diễn giả');
      updateProgress(segmentIndex / currentSegments.length);
    };
    currentUtterance.onend = () => {
      if (paused) return;
      segmentIndex += 1;
      updateProgress(segmentIndex / currentSegments.length);
      setTimeout(speakNextSystemSegment, segment.pause || getStyle().sentencePause);
    };
    currentUtterance.onerror = event => {
      if (event.error === 'interrupted' || event.error === 'canceled') return;
      markEvent(currentEvent, 'is-error', 'Lỗi giọng đọc');
      setStatus('Trình duyệt không phát được giọng tiếng Việt. Hãy chạy run-voice-site.bat bằng Microsoft Edge.', 'error');
    };
    synth.speak(currentUtterance);
  }

  function playWithSystemVoice(eventEl) {
    activeMode = 'system';
    currentSegments = createPresenterSegments(eventEl);
    segmentIndex = 0;
    paused = false;
    const chosen = selectSystemVoice();
    const voiceName = chosen ? chosen.name : 'không xác định';
    setStatus(`Đang dùng giọng tiếng Việt trên thiết bị: ${voiceName}.`, chosen ? 'ok' : 'error');
    startKeepAlive();
    speakNextSystemSegment();
  }

  async function requestNeuralAudio(eventEl, onlyGenerate = false) {
    if (!serverAvailable && !(await checkVoiceServer())) {
      if (onlyGenerate) throw new Error('Chưa chạy máy chủ giọng AI');
      playWithSystemVoice(eventEl);
      return;
    }

    const index = Number(eventEl.dataset.eventIndex || 0);
    const title = cleanTitle(eventEl.dataset.voiceTitle || '');
    const year = eventEl.dataset.voiceYear || '';
    const text = buildServerNarration(eventEl);
    const style = styleSelect?.value || 'keynote';
    const voice = voiceSelect?.value || 'vi-VN-HoaiMyNeural';

    requestController = new AbortController();
    if (!onlyGenerate) {
      activeMode = 'neural';
      markEvent(eventEl, 'is-generating', 'Đang tạo giọng diễn giả…');
      setStatus(`Đang tạo audio sự kiện ${index} bằng ${voice.includes('HoaiMy') ? 'giọng nữ Hoài My' : 'giọng nam Nam Minh'}…`, 'ok');
    }

    const response = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ index, title, year, text, voice, style }),
      signal: requestController.signal
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.url) {
      throw new Error(result.error || 'Không tạo được audio diễn giả');
    }
    if (onlyGenerate) return result;

    audio.src = `${result.url}?v=${result.cacheKey || Date.now()}`;
    audio.playbackRate = Number(rateSelect?.value || 1);
    await audio.play();
    markEvent(eventEl, 'is-speaking', result.cached ? 'Đang phát audio đã tạo' : 'Đang phát giọng diễn giả');
    setStatus(`Đang phát ${voice.includes('HoaiMy') ? 'giọng nữ Hoài My' : 'giọng nam Nam Minh'} — phong cách ${styleSelect?.selectedOptions[0]?.textContent || ''}.`, 'ok');
  }

  async function startEvent(eventEl, fromSequence = false) {
    stopPlayback(false);
    currentEvent = eventEl;
    paused = false;
    sequenceMode = fromSequence || sequenceMode;
    eventEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    updateProgress(0);

    if (engineSelect?.value === 'system') {
      playWithSystemVoice(eventEl);
      return;
    }

    try {
      await requestNeuralAudio(eventEl);
    } catch (error) {
      if (error.name === 'AbortError') return;
      setStatus(`${error.message}. Đang chuyển sang giọng tiếng Việt trên thiết bị.`, 'warning');
      playWithSystemVoice(eventEl);
    }
  }

  function pausePlayback() {
    if (!currentEvent) return;
    paused = true;
    if (activeMode === 'neural') audio?.pause();
    else synth?.pause();
    markEvent(currentEvent, 'is-paused', 'Đã tạm dừng');
    setStatus('Đã tạm dừng.');
  }

  function resumePlayback() {
    if (!currentEvent) return;
    paused = false;
    markEvent(currentEvent, 'is-speaking', 'Đang phát');
    if (activeMode === 'neural') {
      audio?.play().catch(() => {
        setStatus('Không thể tiếp tục audio. Đang chuyển sang giọng trên thiết bị.', 'warning');
        playWithSystemVoice(currentEvent);
      });
    } else {
      synth?.resume();
      startKeepAlive();
    }
  }

  async function testPresenterVoice() {
    stopPlayback();
    const sample = {
      dataset: {
        eventIndex: '0',
        voiceYear: '1997–2027',
        voiceTitle: 'Ba mươi năm vững bước tiên phong',
        voiceText: 'Kính thưa quý vị. Hành trình ba mươi năm của Viettel Commerce là câu chuyện về bản lĩnh, khát vọng và tinh thần tiên phong. Từ những ngày đầu với lực lượng còn mỏng, các thế hệ cán bộ, nhân viên đã từng bước xây dựng một doanh nghiệp thương mại đa lĩnh vực, vững vàng tiến vào kỷ nguyên số.'
      },
      querySelector: () => null,
      scrollIntoView: () => {},
      classList: { add() {}, remove() {} }
    };

    setStatus('Đang chuẩn bị đoạn đọc thử theo phong cách diễn giả…', 'ok');
    if (engineSelect?.value === 'system') {
      currentEvent = null;
      const segments = createPresenterSegments(sample);
      const voice = selectSystemVoice();
      if (!voice) {
        setStatus('Không tìm thấy giọng vi-VN trên thiết bị. Hãy chạy run-voice-site.bat.', 'error');
        return;
      }
      let i = 0;
      function speakTest() {
        if (i >= segments.length) {
          setStatus('Đã phát xong đoạn thử giọng diễn giả.', 'ok');
          return;
        }
        const segment = segments[i++];
        const settings = getSegmentSettings(segment);
        const utterance = new SpeechSynthesisUtterance(segment.text);
        utterance.lang = 'vi-VN';
        utterance.voice = voice;
        utterance.rate = settings.rate;
        utterance.pitch = settings.pitch;
        utterance.onend = () => setTimeout(speakTest, segment.pause || 300);
        synth.speak(utterance);
      }
      speakTest();
      return;
    }

    try {
      if (!serverAvailable && !(await checkVoiceServer())) throw new Error('Chưa chạy máy chủ giọng AI');
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          index: 0,
          title: sample.dataset.voiceTitle,
          year: sample.dataset.voiceYear,
          text: buildServerNarration(sample),
          voice: voiceSelect?.value || 'vi-VN-HoaiMyNeural',
          style: styleSelect?.value || 'keynote'
        })
      });
      const result = await response.json();
      if (!response.ok || !result.url) throw new Error(result.error || 'Không tạo được đoạn thử');
      audio.src = `${result.url}?v=${result.cacheKey || Date.now()}`;
      audio.playbackRate = Number(rateSelect?.value || 1);
      await audio.play();
      activeMode = 'test';
      setStatus('Đang phát đoạn thử giọng diễn giả.', 'ok');
    } catch (error) {
      setStatus(`${error.message}. Hãy chạy run-voice-site.bat hoặc chuyển sang “Giọng tiếng Việt trên thiết bị”.`, 'error');
    }
  }

  async function preGenerateAll() {
    if (!serverAvailable && !(await checkVoiceServer())) {
      setStatus('Chưa có máy chủ giọng AI. Hãy chạy run-voice-site.bat trước.', 'error');
      return;
    }
    stopPlayback();
    const button = document.getElementById('preGenerateAll');
    if (button) button.disabled = true;
    let completed = 0;
    try {
      for (const eventEl of events) {
        completed += 1;
        setStatus(`Đang tạo audio diễn giả ${completed}/${events.length}: ${cleanTitle(eventEl.dataset.voiceTitle || '').slice(0, 70)}…`, 'ok');
        await requestNeuralAudio(eventEl, true);
      }
      setStatus(`Đã tạo xong ${events.length} audio diễn giả. Các lần nghe sau sẽ phát ngay.`, 'ok');
    } catch (error) {
      setStatus(`Dừng ở audio ${completed}/${events.length}: ${error.message}`, 'error');
    } finally {
      if (button) button.disabled = false;
    }
  }

  events.forEach(eventEl => {
    eventEl.querySelector('[data-action="play"]')?.addEventListener('click', () => {
      if (currentEvent === eventEl) {
        if (paused) resumePlayback();
        else pausePlayback();
      } else startEvent(eventEl);
    });
    eventEl.querySelector('[data-action="pause"]')?.addEventListener('click', pausePlayback);
    eventEl.querySelector('[data-action="stop"]')?.addEventListener('click', () => stopPlayback());
  });

  audio?.addEventListener('timeupdate', () => {
    if (activeMode !== 'neural' || !audio.duration) return;
    updateProgress(audio.currentTime / audio.duration);
  });
  audio?.addEventListener('ended', () => {
    if (activeMode === 'test') {
      activeMode = null;
      setStatus('Đã phát xong đoạn thử giọng diễn giả.', 'ok');
      return;
    }
    if (!paused) finishCurrent();
  });
  audio?.addEventListener('error', () => {
    if (!currentEvent || activeMode !== 'neural') return;
    setStatus('Audio AI bị lỗi. Đang chuyển sang giọng tiếng Việt trên thiết bị.', 'warning');
    playWithSystemVoice(currentEvent);
  });

  document.getElementById('voiceTest')?.addEventListener('click', testPresenterVoice);
  document.getElementById('playAll')?.addEventListener('click', () => {
    stopPlayback(false);
    sequenceMode = true;
    sequenceIndex = 0;
    startEvent(events[0], true);
  });
  document.getElementById('stopAll')?.addEventListener('click', () => {
    stopPlayback();
    setStatus('Đã dừng toàn bộ.');
  });
  document.getElementById('preGenerateAll')?.addEventListener('click', preGenerateAll);
  rateSelect?.addEventListener('change', () => {
    if (audio) audio.playbackRate = Number(rateSelect.value || 1);
  });
  engineSelect?.addEventListener('change', () => {
    stopPlayback();
    setStatus(engineSelect.value === 'neural'
      ? 'Đã chọn giọng AI diễn giả. Chạy run-voice-site.bat để sử dụng.'
      : 'Đã chọn giọng tiếng Việt trên thiết bị.');
  });

  if (synth) {
    synth.onvoiceschanged = () => {
      const voice = selectSystemVoice();
      if (!serverAvailable && voice) {
        updateQuality(`Đã tìm thấy giọng dự phòng trên thiết bị: <b>${voice.name}</b>. Chạy run-voice-site.bat để có giọng AI diễn giả tự nhiên hơn.`, 'warning');
      }
    };
  }

  window.addEventListener('beforeunload', () => stopPlayback());
  checkVoiceServer();
})();
