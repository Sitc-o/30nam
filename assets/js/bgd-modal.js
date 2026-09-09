document.addEventListener('DOMContentLoaded', function() {
    const modalHTML = `
    <!-- BGD Modal -->
    <div class="bgd-modal-overlay" id="bgdModal" role="dialog" aria-modal="true" aria-label="Thông tin lãnh đạo">
        <div class="bgd-modal">
            <div class="bgd-modal__header">
                <div class="bgd-modal__photo">
                    <img id="bgdModalPhoto" src="" alt="">
                </div>
                <div class="bgd-modal__meta">
                    <span class="bgd-modal__rank" id="bgdModalRank"></span>
                    <h2 class="bgd-modal__name" id="bgdModalName"></h2>
                    <p class="bgd-modal__title" id="bgdModalTitle"></p>
                </div>
                <button class="bgd-modal__close" id="bgdModalClose" aria-label="Đóng">×</button>
            </div>
            <div class="bgd-modal__body">
                <p id="bgdModalBio"></p>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const overlay = document.getElementById('bgdModal');
    const photo   = document.getElementById('bgdModalPhoto');
    const rank    = document.getElementById('bgdModalRank');
    const name    = document.getElementById('bgdModalName');
    const title   = document.getElementById('bgdModalTitle');
    const bio     = document.getElementById('bgdModalBio');
    const closeBtn = document.getElementById('bgdModalClose');

    function openModal(el) {
        photo.src = el.dataset.photo || '';
        photo.alt = el.dataset.name || '';
        rank.textContent  = el.dataset.rank  || '';
        name.textContent  = el.dataset.name  || '';
        title.textContent = el.dataset.title || '';
        bio.textContent   = el.dataset.bio   || '';
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Gán sự kiện click cho tất cả trigger
    document.querySelectorAll('[data-bgd-trigger]').forEach(function (el) {
        el.addEventListener('click', function () { openModal(el); });
    });

    // Đóng bằng nút ×
    closeBtn.addEventListener('click', closeModal);

    // Đóng khi click nền
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    // Đóng bằng phím Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });
});
