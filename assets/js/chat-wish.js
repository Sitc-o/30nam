document.addEventListener('DOMContentLoaded', () => {
    // Tạo HTML cho chat widget
    const chatHTML = `
        <div class="chat-wish-container" id="chatWishContainer">
            <button class="chat-wish-btn" id="chatWishBtn" aria-label="Gửi lời chúc">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>

            <div class="chat-wish-popup" id="chatWishPopup">
                <div class="chat-wish-header">
                    <h4>Gửi lời chúc</h4>
                    <button class="chat-wish-close" id="chatWishClose">&times;</button>
                </div>
                <div class="chat-wish-body">
                    <p class="chat-wish-desc">Lời chúc của bạn sẽ được hiển thị trôi nổi trên màn hình!</p>
                    <textarea id="chatWishText" placeholder="Nhập lời chúc của bạn..." rows="3"></textarea>
                    <input type="text" id="chatWishName" placeholder="Tên của bạn (Tùy chọn)">
                    <button class="chat-wish-submit" id="chatWishSubmit">Gửi lên màn hình</button>
                    <p id="chatWishFeedback" class="chat-wish-feedback"></p>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatHTML);

    const btn = document.getElementById('chatWishBtn');
    const popup = document.getElementById('chatWishPopup');
    const closeBtn = document.getElementById('chatWishClose');
    const submitBtn = document.getElementById('chatWishSubmit');
    const textInput = document.getElementById('chatWishText');
    const nameInput = document.getElementById('chatWishName');
    const feedback = document.getElementById('chatWishFeedback');

    btn.addEventListener('click', () => {
        popup.classList.add('open');
        textInput.focus();
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('open');
    });

    submitBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        let name = nameInput.value.trim();
        
        if (!text) {
            textInput.style.borderColor = 'red';
            return;
        }

        let fullWish = text;
        if (name) {
            fullWish += ` - ${name}`;
        }

        // Ném lên màn hình ngay lập tức (phía client)
        if (typeof window.addFloatingWish === 'function') {
            window.addFloatingWish(fullWish);
        }

        // Gửi lên server để lưu vào file json
        fetch('/api/wishes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: fullWish })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Đã lưu lời chúc vào wishes.json");
        })
        .catch(err => console.error("Lỗi khi lưu lời chúc:", err));

        // Feedback
        submitBtn.style.display = 'none';
        feedback.textContent = 'Đã gửi lời chúc thành công!';
        feedback.style.display = 'block';

        setTimeout(() => {
            popup.classList.remove('open');
            setTimeout(() => {
                textInput.value = '';
                nameInput.value = '';
                submitBtn.style.display = 'block';
                feedback.style.display = 'none';
                textInput.style.borderColor = '#ddd';
            }, 300);
        }, 1500);
    });
});
