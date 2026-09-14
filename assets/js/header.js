/* ==========================================================================
   MODERN NAVBAR COMPONENT
   Features: Frosted Glass + Scroll-driven Morphing + Smart Hide/Reveal
   ========================================================================== */

const headerCSS = `
<style>
:root {
    --nav-height-initial: 100px;
    --nav-height-shrunk: 68px;
    --nav-visible-height: 100px;
    --nav-brand-red: #ee0033;
    --nav-text: #1a1a1a;
    --nav-text-muted: #555555;
    --nav-border: rgba(0, 0, 0, 0.06);
    --nav-ease: cubic-bezier(0.16, 1, 0.3, 1);
}

/* 1. Base Navbar & Glassmorphism */
.modern-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height-initial);
    z-index: 1000;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 0 4vw;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--nav-border);
    transition: 
        transform 0.35s var(--nav-ease),
        height 0.35s var(--nav-ease),
        background-color 0.35s ease,
        box-shadow 0.35s ease;
    will-change: transform, height;
}

/* 2. Scroll-driven Morphing (Shrink) State */
.modern-header.is-shrunk {
    height: var(--nav-height-shrunk);
    background: rgba(255, 255, 255, 0.88);
    box-shadow: 0 8px 30px -10px rgba(0, 0, 0, 0.08);
}

/* 3. Smart Hide State */
.modern-header.is-hidden {
    transform: translateY(-100%);
}

/* Logo Styling & Scale Transition */
.modern-logo {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.brand-logo {
    height: 54px;
    width: auto;
    object-fit: contain;
    transition: transform 0.35s var(--nav-ease);
    transform-origin: left center;
}

.modern-header.is-shrunk .brand-logo {
    transform: scale(0.85);
}

/* Navigation Links */
.modern-nav {
    display: flex;
    gap: 40px;
    justify-self: center;
}

.modern-nav a {
    font-family: 'FS Magistral', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 17px;
    color: var(--nav-text);
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.3px;
    transition: color 0.2s ease, opacity 0.2s ease;
    position: relative;
    padding: 8px 0;
}

.modern-nav a:hover,
.modern-nav a.active {
    color: var(--nav-brand-red);
}

/* Animated Underline for Active Menu */
.modern-nav > a::after,
.modern-nav > .nav-dropdown > a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--nav-brand-red);
    transition: width 0.25s ease;
}

.modern-nav > a.active::after,
.modern-nav > .nav-dropdown > a.active::after {
    width: 100%;
}

/* Dropdown Submenu */
.nav-dropdown {
    position: relative;
    display: flex;
    align-items: center;
}

/* Lớp đệm vô hình chống mất hover khi rê chuột vào menu con */
.nav-dropdown::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 12px;
}

.nav-submenu {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%) translateY(8px);
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 8px;
    box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.12);
    min-width: 230px;
    transition: opacity 0.25s ease, transform 0.25s var(--nav-ease), visibility 0.25s;
    z-index: 1010;
}

.nav-dropdown:hover .nav-submenu {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
}

.nav-submenu a {
    font-size: 14.5px;
    padding: 10px 16px;
    display: block;
    color: var(--nav-text-muted);
    white-space: nowrap;
    border-radius: 8px;
    font-weight: 500;
    transition: background-color 0.2s ease, color 0.2s ease;
}

.nav-submenu a::after {
    display: none !important;
}

.nav-submenu a:hover {
    background: rgba(238, 0, 51, 0.06);
    color: var(--nav-brand-red);
}

/* Action Icons */
.modern-actions {
    display: flex;
    gap: 12px;
    justify-self: end;
    align-items: center;
}

.modern-actions button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    font-size: 20px;
    color: var(--nav-text);
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.modern-actions button:hover {
    background: rgba(0, 0, 0, 0.04);
    color: var(--nav-brand-red);
    transform: scale(1.05);
}

@media(max-width: 1050px) {
    .modern-nav { 
        display: none; 
    }
}
</style>
`;

const headerHTML = `
    <header class="modern-header" id="site-header">
        <a class="modern-logo" href="index.html">
            <img class="brand-logo" src="assets/images/logo/viettel-commerce-light.svg" alt="Viettel Commerce" width="160" height="92">
        </a>
        <nav class="modern-nav">
            <a href="gioi-thieu.html">GIỚI THIỆU</a>
            <div class="nav-dropdown">
                <a href="hanh-trinh.html">HÀNH TRÌNH</a>
                <div class="nav-submenu">
                    <a href="hanh-trinh.html#khoi-nguon">Khởi Nguồn</a>
                    <a href="hanh-trinh.html#troi-day">Trỗi Dậy</a>
                    <a href="hanh-trinh.html#tang-toc">Tăng Tốc</a>
                    <a href="hanh-trinh.html#vuon-tam">Vươn Tầm</a>
                </div>
            </div>
            <div class="nav-dropdown">
                <a href="mo-hinh-to-chuc.html">MÔ HÌNH TỔ CHỨC</a>
                <div class="nav-submenu">
                    <a href="co-cau-to-chuc.html#tab">Cơ Cấu</a>
                </div>
            </div>
            <a href="thanh-tuu-khen-thuong.html">THÀNH TỰU</a>
        </nav>
        <div class="modern-actions">
            <button class="search-open" type="button" aria-label="Tìm kiếm">⌕</button>
            <button class="simple-menu" type="button" aria-label="Mở menu">☰</button>
        </div>
    </header>
`;

// Chèn CSS và HTML trực tiếp, không dùng document.write
document.head.insertAdjacentHTML('beforeend', headerCSS);
document.body.insertAdjacentHTML('afterbegin', headerHTML);

/* ==========================================================================
   INTERACTION LOGIC
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('site-header');
    if (!header) return;

    // 1. Tự động bù padding-top cho body dựa trên chiều cao thực tế của header ban đầu
    const initialHeight = header.offsetHeight;
    document.body.style.paddingTop = `${initialHeight}px`;

    // 2. Logic Active Link
    let currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = header.querySelectorAll('.modern-nav > a, .modern-nav > .nav-dropdown > a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPath = link.getAttribute('href').split('/').pop().split('#')[0];
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // 3. Logic Smart Hide & Morphing (Shrink)
    let lastScrollY = window.scrollY;
    let isTicking = false;
    const morphOffset = 30;      // Cuộn qua 30px thì bắt đầu co lại (Shrink)
    const scrollTolerance = 8;   // Ngưỡng dịch chuyển tối thiểu để nhận diện cuộn (chống rung)

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // A. Scroll-driven Morphing (Co nhỏ & đổi nền)
        if (currentScrollY > morphOffset) {
            header.classList.add('is-shrunk');
        } else {
            header.classList.remove('is-shrunk');
        }

        // B. Smart Hide & Reveal
        if (currentScrollY <= morphOffset) {
            // Khi ở gần đỉnh trang, luôn luôn mở navbar
            header.classList.remove('is-hidden');
        } else if (Math.abs(currentScrollY - lastScrollY) > scrollTolerance) {
            if (currentScrollY > lastScrollY && currentScrollY > initialHeight) {
                // Cuộn xuống -> Trượt lên để giấu navbar
                header.classList.add('is-hidden');
            } else {
                // Cuộn lên -> Trượt xuống để hiển thị
                header.classList.remove('is-hidden');
            }
            lastScrollY = currentScrollY;
        }

        // C. Update CSS Variable for sticky elements
        let visibleHeight = 0;
        if (!header.classList.contains('is-hidden')) {
            visibleHeight = header.classList.contains('is-shrunk') ? 68 : 100;
        }
        document.documentElement.style.setProperty('--nav-visible-height', visibleHeight + 'px');

        isTicking = false;
    };

    window.addEventListener('scroll', () => {
        if (!isTicking) {
            window.requestAnimationFrame(handleScroll);
            isTicking = true;
        }
    }, { passive: true });
});