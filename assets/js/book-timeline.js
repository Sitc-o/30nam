/**
 * Book Timeline Navigation - Fixed bottom panel
 * Hoàn toàn độc lập với layout sách, không làm hỏng giao diện
 */
(function () {
    'use strict';

    const MILESTONES = [
        { year: "1997",    milestone: "Lịch sử Viettel Commerce bắt đầu" },
        { year: "8/1998",  milestone: "Chi bộ Xuất nhập khẩu đầu tiên được thành lập" },
        { year: "6/1999",  milestone: "Phòng XNK phát triển thành Trung tâm XNK" },
        { year: "3/2000",  milestone: "Nhập khẩu những lô hàng đầu tiên cho Viettel" },
        { year: "4/2005",  milestone: "Trung tâm XNK phát triển thành Công ty TM & XNK" },
        { year: "2006",    milestone: "Hạch toán độc lập theo cơ chế thị trường" },
        { year: "5/2006",  milestone: "Khai trương Siêu thị VKO Ngọc Khánh đầu tiên" },
        { year: "10/2008", milestone: "Tiếp nhận 68 siêu thị từ Viettel Telecom" },
        { year: "1/2008",  milestone: "Chi bộ XNK phát triển thành Đảng bộ cơ sở 2 cấp" },
        { year: "2009",    milestone: "Triển khai chuỗi siêu thị Viettel Store toàn quốc" },
        { year: "2010",    milestone: "Công ty xuất khẩu thiết bị viễn thông ra nước ngoài" },
        { year: "2012",    milestone: "Nhà máy In Viettel ra đời" },
        { year: "2014",    milestone: "Tái cơ cấu mạnh mẽ, tập trung vào cốt lõi" },
        { year: "2016",    milestone: "Viettel Store chuyển đổi số, bứt phá doanh thu" },
        { year: "2017",    milestone: "20 năm thành lập – dấu ấn trưởng thành" },
        { year: "2018",    milestone: "Ra mắt Trung tâm Phân phối hiện đại" },
        { year: "2019",    milestone: "Mở rộng hệ sinh thái sản phẩm & dịch vụ" },
        { year: "2020",    milestone: "Ứng phó COVID: chuyển đổi số thần tốc" },
        { year: "5/2021",  milestone: "Nhận diện thương hiệu mới Viettel Commerce" },
        { year: "2022",    milestone: "Hệ thống bán lẻ #1 về điện thoại di động" },
        { year: "2023",    milestone: "Kiên cường vượt bão suy thoái thị trường" },
        { year: "2024",    milestone: "Đại cải tổ số – kỷ lục lợi nhuận bùng nổ" },
        { year: "2025",    milestone: "Kiêu hãnh bước vào hàng ngũ doanh nghiệp tỷ đô" },
        { year: "2026",    milestone: "Bước ngoặt: vươn lên mô hình Tổng Công ty" },
        { year: "2026★",   milestone: "Đổi mới không ngừng – Đón nhận Huân chương" },
        { year: "2027",    milestone: "30 năm tự hào – Vững bước tiên phong" },
    ];

    // Trang bắt đầu của milestone[0] (page-flip 0-indexed)
    // Bìa trước(0) + mặt trong bìa(1) + intro(2) → milestone[0] bắt đầu ở trang 3
    const PAGE_OFFSET = 3;
    const PAGES_PER_MILESTONE = 2;

    document.addEventListener('DOMContentLoaded', buildTimeline);

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
        updateArrows();
    }
})();
