document.addEventListener('DOMContentLoaded', () => {
    const btnPlay = document.getElementById('btn-voice-play');
    const btnStop = document.getElementById('btn-voice-stop');
    const voiceText = document.getElementById('voiceText');

    if (btnPlay && voiceText) {
        btnPlay.addEventListener('click', () => {
            const u = new SpeechSynthesisUtterance(voiceText.innerText);
            u.lang = 'vi-VN';
            u.rate = 0.92;
            speechSynthesis.cancel();
            speechSynthesis.speak(u);
        });
    }

    if (btnStop) {
        btnStop.addEventListener('click', () => {
            speechSynthesis.cancel();
        });
    }
});