const headerCSS = `
<style>
.simple-header {
    height: 120px;
    position: sticky;
    top: 0;
    z-index: 50;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 0 4vw;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.simple-logo {
    display: flex;
    align-items: center;
    text-decoration: none;
}
.simple-logo .brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 0.9;
}
.simple-logo .brand-main {
    font-size: 28px;
    font-weight: 850;
    color: #ee0033;
    letter-spacing: -1.5px;
}
.simple-logo .brand-sub {
    font-size: 13px;
    font-weight: 700;
    color: #333333;
    text-transform: uppercase;
    margin-top: 3px;
}
.simple-nav {
    display: flex;
    gap: 50px;
    justify-self: center;
}
.simple-nav a {
    font-family: 'FS Magistral', sans-serif;
    font-size: 22px;
    color: #333333;
    text-decoration: none;
    transition: color 0.2s;
    font-weight: 500;
}
.simple-nav a:hover,
.simple-nav a.active {
    color: #ee0033;
}
.nav-dropdown {
    position: relative;
}
.nav-submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 12px 0;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    min-width: 220px;
    z-index: 60;
}
.nav-dropdown:hover .nav-submenu {
    display: flex;
    flex-direction: column;
}
.nav-submenu a {
    font-size: 16px;
    padding: 10px 24px;
    display: block;
    color: #555555;
    white-space: nowrap;
}
.nav-submenu a:hover {
    background: #fcfcfc;
    color: #ee0033;
}
.simple-actions {
    display: flex;
    gap: 16px;
    justify-self: end;
    align-items: center;
}
.simple-actions button {
    background: transparent;
    border: none;
    font-size: 24px;
    color: #333333;
    cursor: pointer;
    transition: color 0.2s;
}
.simple-actions button:hover {
    color: #ee0033;
}
@media(max-width: 1050px) {
    .simple-nav { display: none; }
}
</style>
`;

const headerHTML = `
    <header class="simple-header">
        <a class="simple-logo" href="index.html">
            <img class="brand-logo" src="assets/images/logo/viettel-commerce-light.svg" alt="Viettel Commerce" width="160" height="92">
        </a>
        <nav class="simple-nav">
            <a href="gioi-thieu.html">GIỚI THIỆU</a>
            <div class="nav-dropdown">
                <a href="hanh-trinh.html">HÀNH TRÌNH</a>
                <div class="nav-submenu">
                    <a href="hanh-trinh.html#modal-khoi-nguon"><b>Khởi Nguồn</b></a>
                    <a href="hanh-trinh.html#modal-troi-day"><b>Trỗi Dậy</b></a>
                    <a href="hanh-trinh.html#modal-tang-toc"><b>Tăng Tốc</b></a>
                    <a href="hanh-trinh.html#modal-vuon-tam"><b>Vươn Tầm</b></a>
                </div>
            </div>
            <div class="nav-dropdown">
                <a href="mo-hinh-to-chuc.html">MÔ HÌNH TỔ CHỨC</a>
                <div class="nav-submenu">
                    <a href="mo-hinh-to-chuc.html#tab-chinh-quyen"><b>Tổ chức chính quyền</b></a>
                    <a href="mo-hinh-to-chuc.html#tab-dang"><b>Tổ chức Đảng và Đoàn thể</b></a>
                </div>
            </div>
            <a href="thanh-tuu-khen-thuong.html">THÀNH TỰU</a>
        </nav>
        <div class="simple-actions">
            <button class="search-open" type="button" aria-label="Tìm kiếm">⌕</button>
            <button class="simple-menu" type="button" aria-label="Mở menu">☰</button>
        </div>
    </header>
`;

document.write(headerCSS + headerHTML);

// Thêm class active cho menu dựa vào URL hiện tại
document.addEventListener("DOMContentLoaded", () => {
    let currentPath = window.location.pathname.split('/').pop();
    if (!currentPath) currentPath = 'index.html';

    const navLinks = document.querySelectorAll('.simple-nav > a, .simple-nav > .nav-dropdown > a');
    navLinks.forEach(link => {
        // Xóa class active cũ
        link.classList.remove('active');

        const linkPath = link.getAttribute('href').split('/').pop().split('#')[0];
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
