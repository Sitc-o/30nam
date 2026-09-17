const footerCSS = `
<style>
/* 1. Nền body */
body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
}

/* 2. Thẻ trang chính */
#page-reveal-wrapper {
    position: relative;
    z-index: 2;
    background-color: #ffffff;
    min-height: 100vh;
    margin-bottom: 70px; /* Chiều cao dải peek bar đáy trang */
    /* QUAN TRỌNG: Neo gốc ở đáy để chiều dài của từng trang không làm lệch vị trí */
    transform-origin: center bottom;
    will-change: transform, border-radius, box-shadow;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.06);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                border-radius 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.6s ease;
}

/* TRẠNG THÁI BÚNG MỞ GIỐNG IOI: Giữ lại đúng 200px thẻ ở mép trên màn hình */
#page-reveal-wrapper.footer-expanded {
    /* Đáy ban đầu cách đáy 70px; nâng lên để mép dưới dừng ở vị trí 200px từ đỉnh */
    transform: translateY(calc(-100vh + 270px)) scale(0.95);
    border-radius: 0 0 32px 32px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
    cursor: pointer;
}

/* Nút mũi tên cuộn ngược lên nằm trên thẻ trắng giống hệt IOI */
.card-restore-btn {
    position: absolute;
    bottom: 24px;
    right: 32px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #111111;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.25);
    opacity: 0;
    pointer-events: none;
    transform: translateY(10px) scale(0.85);
    transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease;
    z-index: 100;
}
.card-restore-btn:hover {
    background: #ee0033;
}
.card-restore-btn svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
}
#page-reveal-wrapper.footer-expanded .card-restore-btn {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0) scale(1);
}

/* 3. Footer toàn màn hình nền đỏ Viettel */
.site-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    background: #ee0033;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* Dành khoảng trống 200px ở trên đỉnh để không bị thẻ trắng che mất chữ */
    padding: 210px 0 0;
    box-sizing: border-box;
    font-family: 'Roboto', Arial, sans-serif;
    overflow: hidden;
}

#footer-wave-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

.footer-center-content {
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    width: 100%;
}

.site-footer .container {
    width: min(1240px, calc(100% - 42px));
    margin: auto;
    position: relative;
    z-index: 1;
}

.footer-top {
    display: grid;
    grid-template-columns: 1.4fr repeat(3, 1fr);
    gap: 40px;
    width: 100%;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-brand .simple-logo img {
    filter: brightness(0) invert(1);
    transition: transform 0.3s ease;
}
.footer-brand .simple-logo:hover img {
    transform: scale(1.04);
}

.footer-brand p, .footer-brand > span, .site-footer p {
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.85);
    display: block;
    margin: 8px 0;
    line-height: 1.6;
}

.site-footer h4 {
    margin: 0 0 16px;
    font-family: 'FS Magistral', sans-serif;
    font-size: 18px;
    color: #ffffff;
    font-weight: 700;
}

.site-footer a {
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.75);
    display: inline-block;
    margin: 7px 0;
    text-decoration: none;
    line-height: 1.6;
    transition: all 0.25s ease;
}

.site-footer a:hover {
    color: #ffffff;
    transform: translateX(6px);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
}

/* 4. Thanh Peek Bar đáy trang */
.footer-bottom-bar {
    height: 70px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 11.5px;
    color: rgba(255, 255, 255, 0.75);
    box-sizing: border-box;
}

.footer-toggle-btn {
    background: rgba(255, 255, 255, 0.15);
    border: none;
    outline: none;
    color: #ffffff;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.4s ease;
}
.footer-toggle-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}
.footer-toggle-btn svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
    transition: transform 0.4s ease;
}
.footer-expanded-active .footer-toggle-btn svg {
    transform: rotate(180deg);
}

/* 5. Responsive */
@media(max-width: 1050px) {
    .footer-top { grid-template-columns: 1fr 1fr; gap: 24px; }
}

@media(max-width: 768px), (max-height: 650px) {
    .site-footer {
        position: static !important;
        height: auto !important;
        padding: 40px 0 20px;
    }
    #page-reveal-wrapper {
        margin-bottom: 0 !important;
        transform: none !important;
        border-radius: 0 !important;
        box-shadow: none !important;
    }
    .footer-top { grid-template-columns: 1fr; gap: 25px; }
    .footer-bottom-bar { height: auto; padding: 20px 0; flex-direction: column; gap: 10px; }
    .footer-toggle-btn, .card-restore-btn { display: none !important; }
}
</style>
`;

const footerHTML = `
<footer class="site-footer">
    <canvas id="footer-wave-canvas"></canvas>
    
    <div class="footer-center-content">
        <div class="container footer-top">
            <div class="footer-brand">
                <a href="index.html" class="simple-logo">
                    <img src="assets/images/logo/viettel-commerce-light.svg" alt="Viettel Commerce" width="160" height="92">
                </a>
                <p><strong>Tổng Công ty Thương mại và Xuất nhập khẩu Viettel.</strong></p>
                <span>Vững bước tiên phong – Kiến tạo tương lai.</span>
            </div>
            <div>
                <h4>Hành trình</h4>
                <div><a href="bien-nien-30-nam.html">Biên niên 30 năm</a></div>
                <div><a href="hanh-trinh.html#modal-khoi-nguon">Khởi Nguồn</a></div>
                <div><a href="hanh-trinh.html#modal-troi-day">Trỗi Dậy</a></div>
                <div><a href="hanh-trinh.html#modal-tang-toc">Tăng Tốc</a></div>
                <div><a href="hanh-trinh.html#modal-vuon-tam">Vươn Tầm</a></div>
            </div>
            <div>
                <h4>Nội dung</h4>
                <div><a href="cong-tac-dang.html">Công tác Đảng</a></div>
                <div><a href="thanh-tuu-khen-thuong.html">Thành tựu</a></div>
                <div><a href="nhan-vat-ky-uc.html">Nhân vật – Ký ức</a></div>
                <div><a href="phu-luc.html">Phụ lục tra cứu</a></div>
            </div>
            <div>
                <h4>Thông tin</h4>
                <p>Số 5 Giang Văn Minh, Ba Đình, Hà Nội</p>
                <p>Website số hóa bản thảo lịch sử 1997–2027.</p>
                <div><a href="CONTENT_COVERAGE.html">Báo cáo bao phủ nội dung</a></div>
            </div>
        </div>
    </div>

    <div class="container footer-bottom-bar">
        <span>© 2027 Viettel Commerce. Bản dựng phục vụ giới thiệu lịch sử.</span>
        <span>Hình ảnh minh họa đối soát từ tài liệu gốc.</span>
        <button type="button" class="footer-toggle-btn" aria-label="Mở rộng Footer">
            <svg viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>
        </button>
    </div>
</footer>
`;

document.write(footerCSS + footerHTML);

// 6. Xử lý Logic Gom thẻ, Cử chỉ Snap & Nút phục hồi
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;

    let wrapper = document.getElementById('page-reveal-wrapper');
    if (!wrapper) {
        const existingMain = document.querySelector('main');
        if (existingMain) {
            existingMain.id = 'page-reveal-wrapper';
            wrapper = existingMain;
        } else {
            wrapper = document.createElement('div');
            wrapper.id = 'page-reveal-wrapper';
            const header = document.querySelector('header, .site-header, nav');
            const elementsToMove = [];
            let current = header ? header.nextSibling : document.body.firstChild;
            while (current && current !== footer) {
                const next = current.nextSibling;
                elementsToMove.push(current);
                current = next;
            }
            elementsToMove.forEach(el => wrapper.appendChild(el));
            if (header && header.nextSibling) {
                document.body.insertBefore(wrapper, header.nextSibling);
            } else {
                document.body.insertBefore(wrapper, footer);
            }
        }
    }

    // Chèn nút mũi tên thu hồi giống IOI vào đáy của khối wrapper
    if (!document.querySelector('.card-restore-btn')) {
        const restoreBtn = document.createElement('div');
        restoreBtn.className = 'card-restore-btn';
        restoreBtn.title = 'Thu lại về trang';
        restoreBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>';
        wrapper.appendChild(restoreBtn);
    }

    let isExpanded = false;
    let isLocked = false;

    function openFooter() {
        if (isExpanded || isLocked) return;
        isExpanded = true;
        wrapper.classList.add('footer-expanded');
        document.body.classList.add('footer-expanded-active');
        lockTemporarily();
    }

    function closeFooter() {
        if (!isExpanded || isLocked) return;
        isExpanded = false;
        wrapper.classList.remove('footer-expanded');
        document.body.classList.remove('footer-expanded-active');
        lockTemporarily();
    }

    function lockTemporarily() {
        isLocked = true;
        setTimeout(() => { isLocked = false; }, 400);
    }

    function isAtBottom() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        return scrollY >= maxScroll - 15;
    }

    // Lắng nghe lăn chuột
    window.addEventListener('wheel', (e) => {
        if (window.innerWidth <= 768) return;

        if (!isExpanded) {
            if (isAtBottom() && e.deltaY > 20) {
                openFooter();
            }
        } else {
            if (e.deltaY < -15) {
                closeFooter();
            }
        }
    }, { passive: true });

    // Bấm nút mũi tên hoặc bấm trực tiếp vào dải thẻ ở mép trên để đóng lại
    const toggleBtn = document.querySelector('.footer-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isExpanded ? closeFooter() : openFooter();
        });
    }

    wrapper.addEventListener('click', (e) => {
        if (isExpanded) {
            closeFooter();
        }
    });

    // Vẽ Canvas Sóng Nền
    const canvas = document.getElementById('footer-wave-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, step = 0;

    function resize() {
        width = canvas.width = footer.offsetWidth;
        height = canvas.height = footer.offsetHeight;
    }

    function renderWaves() {
        ctx.clearRect(0, 0, width, height);
        step += 0.012;

        const totalLines = 6;
        for (let i = 0; i < totalLines; i++) {
            ctx.beginPath();
            ctx.lineWidth = 1.2;
            const opacity = 0.07 + (i / totalLines) * 0.18;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;

            const baseY = height * 0.44 + (i * 25);
            ctx.moveTo(0, baseY);

            for (let x = 0; x <= width; x += 16) {
                const waveY = baseY +
                    Math.sin(x * 0.003 + step + i * 0.7) * 26 +
                    Math.cos(x * 0.007 - step * 0.6 + i) * 14;
                ctx.lineTo(x, waveY);
            }
            ctx.stroke();
        }
        requestAnimationFrame(renderWaves);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('load', resize);
    resize();
    renderWaves();
});