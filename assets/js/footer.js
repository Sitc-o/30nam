const footerCSS = `
<style>
.site-footer {
    background: #ee0033;
    border-top: 1px solid var(--line, #ececec);
    padding: 55px 0 24px;
    font-family: 'Roboto', Arial, sans-serif;
}
.site-footer .container {
    width: min(1240px, calc(100% - 42px));
    margin: auto;
}
.footer-top {
    display: grid;
    grid-template-columns: 1.4fr repeat(3, 1fr);
    gap: 35px;
}
.footer-logo {
    display: inline-grid;
}
.footer-brand .brand {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    align-items: center;
    white-space: nowrap;
}
.footer-brand .brand-main {
    grid-column: 1;
    grid-row: 1;
    font-size: 26px;
    color: #ffffff;
    font-weight: 850;
    letter-spacing: -1.5px;
    line-height: .9;
}
.footer-brand .brand-sub {
    grid-column: 1;
    grid-row: 2;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    margin-top: 3px;
    text-transform: uppercase;
}
.footer-brand p, .footer-brand > span, .site-footer a, .site-footer p {
    font-size: 12px;
    color: rgba(255,255,255,0.8);
    display: block;
    margin: 6px 0;
    text-decoration: none;
}
.site-footer a:hover {
    color: #ffffff;
}
.site-footer h4 {
    margin: 0 0 12px;
    font-family: 'FS Magistral', sans-serif;
    font-size: 16px;
    color: #ffffff;
}
.footer-bottom {
    border-top: 1px solid var(--line, #ececec);
    margin-top: 32px;
    padding-top: 18px;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: rgba(255,255,255,0.8);
}
@media(max-width: 1050px) {
    .footer-top { grid-template-columns: 1fr 1fr; }
}
@media(max-width: 650px) {
    .footer-top { grid-template-columns: 1fr; }
    .footer-bottom { display: flex; flex-direction: column; gap: 8px; }
    .site-footer .container { width: min(1240px, calc(100% - 24px)); }
}
</style>
`;

const footerHTML = `
<footer class="site-footer">
    <div class="container footer-top">
        <div class="footer-brand">
            <div class="brand footer-logo"><span class="brand-main">viettel</span><span class="brand-sub">commerce</span></div>
            <p>Tổng Công ty Thương mại và Xuất nhập khẩu Viettel.</p>
            <span>Vững bước tiên phong – Kiến tạo tương lai.</span>
        </div>
        <div>
            <h4>Hành trình</h4>
            <a href="bien-nien-30-nam.html">Biên niên 30 năm</a>
            <a href="hanh-trinh.html#modal-khoi-nguon">Khởi Nguồn</a>
            <a href="hanh-trinh.html#modal-troi-day">Trỗi Dậy</a>
            <a href="hanh-trinh.html#modal-tang-toc">Tăng Tốc</a>
        </div>
        <div>
            <h4>Nội dung</h4>
            <a href="cong-tac-dang.html">Công tác Đảng</a>
            <a href="thanh-tuu-khen-thuong.html">Thành tựu</a>
            <a href="nhan-vat-ky-uc.html">Nhân vật – Ký ức</a>
            <a href="phu-luc.html">Phụ lục tra cứu</a>
        </div>
        <div>
            <h4>Thông tin</h4>
            <p>Số 5 Giang Văn Minh, Ba Đình, Hà Nội</p>
            <p>Website số hóa bản thảo lịch sử 1997–2027.</p>
            <a href="CONTENT_COVERAGE.html">Báo cáo bao phủ nội dung</a>
        </div>
    </div>
    <div class="container footer-bottom">
        <span>© 2027 Viettel Commerce. Bản dựng phục vụ giới thiệu lịch sử.</span>
        <span>Hình ảnh minh họa được cắt dựng theo thiết kế; nội dung văn bản đối soát từ tài liệu gốc.</span>
    </div>
</footer>
`;

document.write(footerCSS + footerHTML);
