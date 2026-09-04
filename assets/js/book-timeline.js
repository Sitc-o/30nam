/**
 * Book Timeline Navigation - Fixed bottom panel
 * Hoàn toàn độc lập với layout sách, không làm hỏng giao diện
 */
(function () {
    'use strict';

    const MILESTONES = [
        { year: "Ngày 10 tháng 4 năm 1997",    milestone: "Lịch sử Viettel Commerce bắt đầu" },
        { year: "Tháng 8 năm 1998",  milestone: "Chi bộ Xuất nhập khẩu đầu tiên được thành lập" },
        { year: "Ngày 30 tháng 6 năm 1999",  milestone: "Phòng XNK phát triển thành Trung tâm XNK" },
        { year: "Tháng 3 năm 2000",  milestone: "Nhập khẩu những lô hàng đầu tiên cho Viettel" },
        { year: "Ngày 06 tháng 4 năm 2005",  milestone: "Trung tâm XNK phát triển thành Công ty TM & XNK" },
        { year: "Năm 2006",    milestone: "Hạch toán độc lập theo cơ chế thị trường" },
        { year: "Ngày 03 tháng 5 năm 2006",  milestone: "Khai trương Siêu thị VKO Ngọc Khánh đầu tiên" },
        { year: "Tháng 12 năm 2006", milestone: "Hoàn thành Dự án Khu Hội Nghị Quốc gia" },
        { year: "Ngày 18 tháng 1 năm 2008",  milestone: "Chi bộ XNK phát triển thành Đảng bộ cơ sở 2 cấp" },
        { year: "Tháng 10  năm 2008",    milestone: "Tổng Công ty Viễn thông Quân đội điều chuyển 68 siêu thị" },
        { year: "Ngày 01 tháng 11 năm 2008",    milestone: "Đại hội Đảng bộ Công ty Lần thứ nhất" },
        { year: "Ngày 21 tháng 1 năm 2009",    milestone: "Tổ chức lại Trung tâm kinh doanh điện thoại di động" },
        { year: "Ngày 1 tháng 5 năm 2010",    milestone: "Nhận điều chuyển nguyên trạng bộ phận giao dịch" },
        { year: "Ngày 24 tháng 5 năm 2010",    milestone: "Thành lập Trung tâm Phân phối" },
        { year: "Ngày 25 và 26 tháng 6 năm 2010",    milestone: "Đại hội Đảng bộ Công ty lần thứ Hai" },
        { year: "Năm 2012",    milestone: "Công ty được Đảng, Nhà nước trao tặng Huân chương Lao động Hạng Ba" },
        { year: "Tháng 01 năm 2013",    milestone: "Sáp nhập Công ty Phát triển dịch vụ mới" },
        { year: "Tháng 6 năm 2014",    milestone: "Chính thức tiếp nhận và tổ chức sản xuất kinh doanh ngành in" },
        { year: "Ngày 28 tháng 4 năm 2015",  milestone: "Đại hội đại biểu Đảng bộ Công ty lần thứ III" },
        { year: "Năm 2017",    milestone: "Đảng, Nhà nước trao tặng Huân chương lao động Hạng Nhì" },
        { year: "Ngày 28 và 29 tháng 5 năm 2020",    milestone: "Đại hội đại biểu Đảng bộ Công ty lần thứ IV" },
        { year: "Ngày 12 tháng 8 năm 2020",    milestone: "Thành lập Trung tâm Dịch vụ Công nghệ thông tin" },
        { year: "Ngày 17 tháng 5 năm 2021",    milestone: "Nhận diện thương hiệu mới Viettel Commerce" },
        { year: "Năm 2022",    milestone: "Công ty được Đảng, Nhà nước trao tặng Huân chương Lao động Hạng Nhất" },
        { year: "Năm 2023",   milestone: "Kiên cường vượt bão suy thoái" },
        { year: "Năm 2024",    milestone: "Cuộc đại cải tổ số toàn diện" },
        { year: "Năm 2025",    milestone: "Dấu ấn rực rỡ từ Đại hội Đảng bộ lần thứ V" },
        { year: "Năm 2026",    milestone: "Bước ngoặt vĩ đại vươn mình lên mô hình Tổng công ty" },
        { year: "2026",    milestone: "Đổi mới không ngừng" },
        { year: "2027",    milestone: "30 năm tự hào" },
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
