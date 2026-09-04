/**
 * Book Timeline Navigation
 * Sinh ra thanh timeline bên dưới sách từ danh sách milestones trong flipbook-init
 * và đồng bộ trạng thái active khi người dùng lật trang.
 */
(function () {
    'use strict';

    // Danh sách milestones rút gọn cho timeline (chỉ cần year + milestone)
    // Đồng bộ với mảng milestones trong flipbook-init.js
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
        { year: "2021",    milestone: "Phục hồi & tăng tốc hậu đại dịch" },
        { year: "2022",    milestone: "Hệ thống bán lẻ #1 về điện thoại di động" },
        { year: "2023",    milestone: "Xuất khẩu công nghệ & dịch vụ quốc tế" },
        { year: "2024",    milestone: "Đại cải tổ số – kỷ lục lợi nhuận bùng nổ" },
        { year: "2025",    milestone: "Kiêu hãnh bước vào hàng ngũ doanh nghiệp tỷ đô" },
        { year: "2026",    milestone: "Bước ngoặt vĩ đại: vươn lên mô hình Tổng Công ty" },
        { year: "2026★",   milestone: "Đổi mới không ngừng" },
        { year: "2027",    milestone: "30 năm tự hào – Vững bước tiên phong" },
    ];

    // Số trang intro trước milestone đầu tiên: 1 trang intro (Hành trình 30) + 2 trang bìa = 3 trang offset
    // PageFlip đánh số trang từ 0. Bìa trước = 0, mặt trong bìa = 1, intro = 2, milestone 0 = 3, ...
    // Mỗi milestone chiếm 2 trang (trái + phải), intro chiếm 1 trang, cộng thêm 2 trang bìa đầu
    const PAGE_OFFSET = 3; // trang bắt đầu của milestone[0] (0-indexed)
    const PAGES_PER_MILESTONE = 2;

    document.addEventListener('DOMContentLoaded', function () {
        // Đợi flipbook khởi tạo xong
        setTimeout(buildTimeline, 800);
    });

    function buildTimeline() {
        const sceneLayout = document.querySelector('.scene-layout');
        if (!sceneLayout) return;

        // Chèn timeline ngay sau .scene-layout
        const wrapEl = document.createElement('div');
        wrapEl.className = 'book-timeline-wrap';
        wrapEl.innerHTML = `
            <div class="book-timeline-slider">
                <button class="book-timeline-arrow book-timeline-arrow--left" aria-label="Cuộn trái">&#8249;</button>
                <div class="book-timeline" id="bookTimelineScroll">
                    <div class="book-timeline__track" id="bookTimelineTrack"></div>
                </div>
                <button class="book-timeline-arrow book-timeline-arrow--right" aria-label="Cuộn phải">&#8250;</button>
            </div>
        `;
        sceneLayout.insertAdjacentElement('afterend', wrapEl);

        const track = document.getElementById('bookTimelineTrack');
        const scroll = document.getElementById('bookTimelineScroll');
        const arrowLeft = wrapEl.querySelector('.book-timeline-arrow--left');
        const arrowRight = wrapEl.querySelector('.book-timeline-arrow--right');

        // Tạo các nốt timeline
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
            });
            track.appendChild(item);
        });

        // --- Đồng bộ với PageFlip ---
        // Lắng nghe sự kiện flip của thư viện page-flip
        function syncActive(pageIndex) {
            // pageIndex là trang hiện tại (0-indexed)
            // Tính ra milestone index
            const milestoneIdx = Math.floor((pageIndex - PAGE_OFFSET) / PAGES_PER_MILESTONE);
            document.querySelectorAll('.book-timeline__item').forEach(function (el, i) {
                el.classList.toggle('active', i === milestoneIdx);
            });
            // Auto-scroll timeline cho active item vào tầm nhìn
            const activeEl = track.querySelector('.book-timeline__item.active');
            if (activeEl) {
                const trackLeft = track.getBoundingClientRect().left;
                const itemLeft = activeEl.getBoundingClientRect().left;
                const itemCenter = itemLeft - trackLeft + activeEl.offsetWidth / 2;
                const scrollTarget = itemCenter - scroll.clientWidth / 2;
                scroll.scrollTo({ left: scrollTarget, behavior: 'smooth' });
            }
            updateArrows();
        }

        // Hook vào window.bookPageFlip (được set bởi flipbook-init.js sau khi init xong)
        // Nếu chưa có thì polling nhẹ
        let hookAttempts = 0;
        function tryHook() {
            hookAttempts++;
            if (window.bookPageFlip) {
                window.bookPageFlip.on('flip', function (e) {
                    syncActive(e.data);
                });
                window.bookPageFlip.on('changeState', function (e) {
                    syncActive(window.bookPageFlip.getCurrentPageIndex());
                });
                syncActive(0);
            } else if (hookAttempts < 20) {
                setTimeout(tryHook, 300);
            }
        }
        tryHook();

        // --- Chuyển đến milestone ---
        function goToMilestone(idx) {
            if (!window.bookPageFlip) return;
            const targetPage = PAGE_OFFSET + idx * PAGES_PER_MILESTONE;
            window.bookPageFlip.flip(targetPage);
            syncActive(targetPage);
        }

        // --- Arrows cuộn ---
        arrowLeft.addEventListener('click', function () {
            scroll.scrollBy({ left: -160, behavior: 'smooth' });
            setTimeout(updateArrows, 350);
        });
        arrowRight.addEventListener('click', function () {
            scroll.scrollBy({ left: 160, behavior: 'smooth' });
            setTimeout(updateArrows, 350);
        });
        scroll.addEventListener('scroll', updateArrows);

        function updateArrows() {
            arrowLeft.classList.toggle('hidden', scroll.scrollLeft <= 4);
            arrowRight.classList.toggle('hidden', scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 4);
        }
        updateArrows();
    }
})();
