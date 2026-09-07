/**
 * Book Timeline Navigation - Fixed bottom panel
 * Hoàn toàn độc lập với layout sách, không làm hỏng giao diện
 */
(function () {
    'use strict';

    let MILESTONES = [];

    // Trang bắt đầu của milestone[0] (page-flip 0-indexed)
    // Bìa trước(0) + mặt trong bìa(1) + intro(2) → milestone[0] bắt đầu ở trang 3
    const PAGE_OFFSET = 3;
    const PAGES_PER_MILESTONE = 2;

    document.addEventListener('DOMContentLoaded', () => {
        // Đợi cho biến window.bookMilestones từ file flipbook-init.js được load xong
        let checkInterval = setInterval(() => {
            if (window.bookMilestones) {
                clearInterval(checkInterval);
                MILESTONES = window.bookMilestones.map(m => ({
                    year: m.year,
                    milestone: m.milestone
                }));
                buildTimeline();
            }
        }, 50);
    });

    function buildTimeline() {
        // ---- Tạo toggle button ----
        const btn = document.createElement('button');
        btn.className = 'timeline-toggle-btn';
        btn.innerHTML = '<span class="tl-icon">☰</span> Mục lục';
        document.body.appendChild(btn);

        // ---- Tạo panel ----
        const panel = document.createElement('div');
        panel.className = 'book-timeline-panel';
        panel.innerHTML = `
            <div class="book-timeline-slider">
                <button class="book-timeline-arrow book-timeline-arrow--left" aria-label="Cuộn trái">&#8249;</button>
                <div class="book-timeline" id="bookTimelineScroll">
                    <div class="book-timeline__track" id="bookTimelineTrack"></div>
                </div>
                <button class="book-timeline-arrow book-timeline-arrow--right" aria-label="Cuộn phải">&#8250;</button>
            </div>
        `;
        document.body.appendChild(panel);

        const track = document.getElementById('bookTimelineTrack');
        const scroll = document.getElementById('bookTimelineScroll');
        const arrowLeft = panel.querySelector('.book-timeline-arrow--left');
        const arrowRight = panel.querySelector('.book-timeline-arrow--right');

        // ---- Toggle mở/đóng ----
        let isOpen = false;
        btn.addEventListener('click', function () {
            isOpen = !isOpen;
            panel.classList.toggle('open', isOpen);
            btn.classList.toggle('open', isOpen);
            btn.innerHTML = isOpen
                ? '<span class="tl-icon">✕</span> Đóng'
                : '<span class="tl-icon">☰</span> Mục lục';
            if (isOpen) updateArrows();
        });

        // ---- Tạo nốt timeline ----
        MILESTONES.forEach(function (m, idx) {
            const item = document.createElement('div');
            item.className = 'book-timeline__item';
            item.setAttribute('data-index', idx);
            item.setAttribute('data-milestone', m.milestone);
            item.innerHTML = `
                <div class="book-timeline__dot"></div>
                <div class="book-timeline__year">${m.year}</div>
            `;
            item.addEventListener('click', function () {
                goToMilestone(idx);
                // Tự đóng sau khi chọn
                isOpen = false;
                panel.classList.remove('open');
                btn.classList.remove('open');
                btn.innerHTML = '<span class="tl-icon">☰</span> Mục lục';
            });
            track.appendChild(item);
        });

        // ---- Đồng bộ với PageFlip ----
        function syncActive(pageIndex) {
            const milestoneIdx = Math.floor((pageIndex - PAGE_OFFSET) / PAGES_PER_MILESTONE);
            document.querySelectorAll('.book-timeline__item').forEach(function (el, i) {
                el.classList.toggle('active', i === milestoneIdx);
            });
            // Auto scroll active vào giữa
            const activeEl = track.querySelector('.book-timeline__item.active');
            if (activeEl && isOpen) {
                const offsetLeft = activeEl.offsetLeft + activeEl.offsetWidth / 2 - scroll.clientWidth / 2;
                scroll.scrollTo({ left: offsetLeft, behavior: 'smooth' });
            }
        }

        // Hook vào window.bookPageFlip (được set bởi flipbook-init.js)
        let attempts = 0;
        function tryHook() {
            attempts++;
            if (window.bookPageFlip) {
                window.bookPageFlip.on('flip', function (e) { syncActive(e.data); });
                syncActive(0);
            } else if (attempts < 30) {
                setTimeout(tryHook, 300);
            }
        }
        tryHook();

        function goToMilestone(idx) {
            if (!window.bookPageFlip) return;
            const targetPage = PAGE_OFFSET + idx * PAGES_PER_MILESTONE;
            window.bookPageFlip.flip(targetPage);
        }

        // ---- Arrows ----
        arrowLeft.addEventListener('click', function () {
            scroll.scrollBy({ left: -180, behavior: 'smooth' });
            setTimeout(updateArrows, 350);
        });
        arrowRight.addEventListener('click', function () {
            scroll.scrollBy({ left: 180, behavior: 'smooth' });
            setTimeout(updateArrows, 350);
        });
        scroll.addEventListener('scroll', updateArrows);

        function updateArrows() {
            arrowLeft.classList.toggle('hidden', scroll.scrollLeft <= 4);
            arrowRight.classList.toggle('hidden',
                scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 4);
        }
        
        // ---- Mouse Wheel Scroll ----
        scroll.addEventListener('wheel', function (e) {
            e.preventDefault(); // Ngăn cuộn trang dọc
            // Lăn lên (deltaY < 0) -> cuộn sang phải
            // Lăn xuống (deltaY > 0) -> cuộn sang trái
            if (e.deltaY < 0) {
                scroll.scrollBy({ left: 180, behavior: 'smooth' });
            } else if (e.deltaY > 0) {
                scroll.scrollBy({ left: -180, behavior: 'smooth' });
            }
            setTimeout(updateArrows, 350);
        });

        // ---- Keyboard Arrows Scroll ----
        document.addEventListener('keydown', function (e) {
            if (!isOpen) return; // Chỉ tác dụng khi timeline đang mở
            if (e.key === 'ArrowRight') {
                scroll.scrollBy({ left: 180, behavior: 'smooth' });
                setTimeout(updateArrows, 350);
            } else if (e.key === 'ArrowLeft') {
                scroll.scrollBy({ left: -180, behavior: 'smooth' });
                setTimeout(updateArrows, 350);
            }
        });

        updateArrows();
    }
})();
