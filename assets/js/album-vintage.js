/**
 * album-vintage.js
 * Giao diện Album Ngang Hoài Cổ — Vanilla JS, không cần thư viện
 */
(function () {
    'use strict';

    // ── DỮ LIỆU CÁC CHƯƠNG ──────────────────────────────────────────────
    const CHAPTERS = [
        {
            id: 0,
            num: '01',
            name: 'Khởi nguồn',
            period: '1997 – 2005',
            thumb: 'assets/images/home-era-1.webp',
            photos: [
                {
                    src: 'assets/images/viettel-1997.jpg',
                    caption: 'Năm 1997, tiền thân của Viettel Commerce ra đời với tên gọi Trung tâm Xuất nhập khẩu — những bước chân đầu tiên trên hành trình kiến tạo.'
                },
                {
                    src: 'assets/images/chapter-1-hero.webp',
                    caption: 'Những năm đầu gian khó nhưng đầy nhiệt huyết. Cán bộ xuất nhập khẩu tìm tòi, học hỏi, kiên trì khai mở các tuyến thương mại quốc tế.'
                },
                {
                    src: 'assets/images/history-hero.webp',
                    caption: 'Ngày 06/4/2005, Trung tâm Xuất nhập khẩu chính thức phát triển thành Công ty Thương mại và Xuất nhập khẩu Viettel — dấu mốc đầu tiên của sự lớn mạnh.'
                }
            ]
        },
        {
            id: 1,
            num: '02',
            name: 'Trỗi dậy',
            period: '2006 – 2014',
            thumb: 'assets/images/home-era-2.webp',
            photos: [
                {
                    src: 'assets/images/chapter-2-hero.webp',
                    caption: 'Giai đoạn 2006–2014: VCM mở rộng mạng lưới phân phối trên toàn quốc, đưa sản phẩm Viettel đến tay hàng triệu người dùng.'
                },
                {
                    src: 'assets/images/field-distribution.webp',
                    caption: 'Hệ thống phân phối được tổ chức bài bản, từng bước chinh phục các vùng xa xôi, hải đảo — nơi mà thương mại thông thường chưa với tới.'
                }
            ]
        },
        {
            id: 2,
            num: '03',
            name: 'Tăng tốc',
            period: '2015 – 2022',
            thumb: 'assets/images/home-era-3.webp',
            photos: [
                {
                    src: 'assets/images/chapter-3-hero.webp',
                    caption: 'Bứt phá giai đoạn 2015–2022: VCM đa dạng hóa lĩnh vực, vươn sang kinh doanh thiết bị số, dịch vụ thương mại và công nghệ in.'
                },
                {
                    src: 'assets/images/field-retail.webp',
                    caption: 'Kinh doanh thiết bị số — lĩnh vực mới mang lại bước nhảy vọt về doanh thu và hình ảnh thương hiệu của Viettel Commerce.'
                },
                {
                    src: 'assets/images/future-hero.webp',
                    caption: 'Những trung tâm bán lẻ hiện đại mọc lên trên khắp cả nước, khẳng định vị thế dẫn đầu trong hệ sinh thái thương mại Viettel.'
                }
            ]
        },
        {
            id: 3,
            num: '04',
            name: 'Vươn tầm',
            period: '2023 – 2027',
            thumb: 'assets/images/home-era-4.webp',
            photos: [
                {
                    src: 'assets/images/future.png',
                    caption: 'Tầm nhìn 2023–2027: Viettel Commerce đặt mục tiêu trở thành doanh nghiệp thương mại số hàng đầu, dẫn dắt chuyển đổi số trong lĩnh vực phân phối.'
                },
                {
                    src: 'assets/images/fields-hero.webp',
                    caption: 'Chiến lược đa ngành — tích hợp bán lẻ, phân phối, dịch vụ thương mại và công nghệ in trong một hệ sinh thái thống nhất, hiệu quả.'
                }
            ]
        },
        {
            id: 4,
            num: '05',
            name: 'Dấu ấn & Thành tựu',
            period: '30 năm',
            thumb: 'assets/images/awards-hero.webp',
            photos: [
                {
                    src: 'assets/images/awards-hero.webp',
                    caption: 'Hàng trăm bằng khen, danh hiệu Anh hùng Lao động, Huân chương — những ghi nhận xứng đáng cho hành trình 30 năm không ngừng nỗ lực của VCM.'
                },
                {
                    src: 'assets/images/party-hero.webp',
                    caption: 'Tổ chức Đảng vững mạnh là nền tảng chính trị giúp VCM vượt qua mọi thách thức, giữ vững định hướng phát triển bền vững.'
                }
            ]
        },
        {
            id: 5,
            num: '06',
            name: 'Nhân vật & Ký ức',
            period: 'Con người VCM',
            thumb: 'assets/images/people.png',
            photos: [
                {
                    src: 'assets/images/people-hero.webp',
                    caption: 'Con người là tài sản quý giá nhất — mỗi cán bộ, nhân viên VCM đều mang trong mình nhiệt huyết và tình yêu với công ty, với thương hiệu Viettel.'
                },
                {
                    src: 'assets/images/people-story-1.webp',
                    caption: 'Ký ức của những người đi trước — những câu chuyện giản dị nhưng đầy tự hào về những tháng năm xây dựng và bảo vệ thương hiệu VCM.'
                },
                {
                    src: 'assets/images/people-story-2.webp',
                    caption: 'Thế hệ tiếp nối kế thừa tinh thần tiên phong, sẵn sàng đưa VCM bước vào kỷ nguyên mới với khát vọng và bản lĩnh Viettel.'
                },
                {
                    src: 'assets/images/people-story-3.webp',
                    caption: 'Ba mươi năm — ba thế hệ cùng chung một nhịp đập, cùng hướng về một tương lai rạng rỡ của Viettel Commerce.'
                }
            ]
        }
    ];

    // ── STATE ────────────────────────────────────────────────────────────
    let currentChapter = 0;
    let currentPhoto   = 0;

    // ── DOM ──────────────────────────────────────────────────────────────
    const tocItems     = document.querySelectorAll('.toc-item');
    const chapterLabel = document.getElementById('chapter-label');
    const chapterTitle = document.getElementById('chapter-title');
    const mainPhoto    = document.getElementById('main-photo');
    const photoCap     = document.getElementById('photo-caption');
    const btnPrev      = document.getElementById('btn-prev');
    const btnNext      = document.getElementById('btn-next');
    const pageCounter  = document.getElementById('page-counter');
    const progressFill = document.getElementById('progress-fill');
    const progressLbl  = document.getElementById('progress-label');

    // ── RENDER ───────────────────────────────────────────────────────────
    function render(chapIdx, photoIdx, animate) {
        const ch  = CHAPTERS[chapIdx];
        const ph  = ch.photos[photoIdx];

        // Cập nhật mục lục active
        tocItems.forEach((el, i) => el.classList.toggle('active', i === chapIdx));

        // Cập nhật trang phải
        chapterLabel.textContent = `${ch.num} · ${ch.period}`;
        chapterTitle.textContent = ch.name;

        if (animate) {
            mainPhoto.classList.add('fade-out');
            photoCap.style.opacity = '0';
            setTimeout(() => {
                mainPhoto.src           = ph.src;
                mainPhoto.alt           = ch.name;
                photoCap.textContent    = ph.caption;
                mainPhoto.classList.remove('fade-out');
                photoCap.style.opacity  = '1';
            }, 300);
        } else {
            mainPhoto.src        = ph.src;
            mainPhoto.alt        = ch.name;
            photoCap.textContent = ph.caption;
        }

        // Cập nhật điều hướng ảnh
        const total  = ch.photos.length;
        pageCounter.textContent = `${String(photoIdx + 1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
        btnPrev.disabled = photoIdx === 0;
        btnNext.disabled = photoIdx === total - 1;

        // Cập nhật progress bar
        const totalPhotos  = CHAPTERS.reduce((s, c) => s + c.photos.length, 0);
        let photoBefore    = CHAPTERS.slice(0, chapIdx).reduce((s, c) => s + c.photos.length, 0);
        photoBefore        += photoIdx;
        const pct          = Math.round((photoBefore / (totalPhotos - 1)) * 100);
        progressFill.style.width   = pct + '%';
        progressLbl.textContent    = `Trang ${photoBefore + 1} / ${totalPhotos}`;
    }

    // ── SỰ KIỆN ──────────────────────────────────────────────────────────
    tocItems.forEach((el, i) => {
        el.addEventListener('click', () => {
            currentChapter = i;
            currentPhoto   = 0;
            render(currentChapter, currentPhoto, true);
        });
    });

    btnPrev.addEventListener('click', () => {
        if (currentPhoto > 0) {
            currentPhoto--;
            render(currentChapter, currentPhoto, true);
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentPhoto < CHAPTERS[currentChapter].photos.length - 1) {
            currentPhoto++;
            render(currentChapter, currentPhoto, true);
        }
    });

    // Phím mũi tên bàn phím
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && !btnNext.disabled) btnNext.click();
        if (e.key === 'ArrowLeft'  && !btnPrev.disabled) btnPrev.click();
    });

    // Chia sẻ — copy link
    const btnCopy = document.getElementById('btn-copy-link');
    if (btnCopy) {
        btnCopy.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const orig = btnCopy.innerHTML;
                btnCopy.innerHTML = '✓';
                btnCopy.style.color = '#6bc96b';
                setTimeout(() => { btnCopy.innerHTML = orig; btnCopy.style.color = ''; }, 1800);
            });
        });
    }

    // ── KHỞI TẠO ─────────────────────────────────────────────────────────
    render(0, 0, false);

})();
