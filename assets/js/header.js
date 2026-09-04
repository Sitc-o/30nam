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
                    <a href="hanh-trinh.html#modal-khoi-nguon">Khởi Nguồn</a>
                    <a href="hanh-trinh.html#modal-troi-day">Trỗi Dậy</a>
                    <a href="hanh-trinh.html#modal-tang-toc">Tăng Tốc</a>
                    <a href="hanh-trinh.html#modal-vuon-tam">Vươn Tầm</a>
                </div>
            </div>
            <div class="nav-dropdown">
                <a href="mo-hinh-to-chuc.html">MÔ HÌNH TỔ CHỨC</a>
                <div class="nav-submenu">
                    <a href="mo-hinh-to-chuc.html#tab-chinh-quyen">Tổ chức chính quyền</a>
                    <a href="mo-hinh-to-chuc.html#tab-dang">Tổ chức Đảng và Đoàn thể</a>
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

document.write(headerHTML);

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
