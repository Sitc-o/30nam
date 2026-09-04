const footerCSS = `
<style>
.site-footer {
    background: #f7f9fc;
    border-top: 1px solid #eaeaea;
    padding: 60px 0 30px;
    font-family: 'Roboto', Arial, sans-serif;
}
.site-footer .container {
    width: min(1240px, calc(100% - 42px));
    margin: auto;
}
.footer-top {
    display: grid;
    grid-template-columns: 1.4fr repeat(3, 1fr);
    gap: 40px;
}
.footer-brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.footer-brand .brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 0.9;
    margin-bottom: 16px;
    text-decoration: none;
}
.footer-brand .brand-main {
    font-size: 32px;
    font-weight: 850;
    color: #ee0033;
    letter-spacing: -1.5px;
}
.footer-brand .brand-sub {
    font-size: 14px;
    font-weight: 700;
    color: #333333;
    text-transform: uppercase;
    margin-top: 4px;
}
.footer-brand p, .footer-brand > span, .site-footer a, .site-footer p {
    font-size: 13px;
    color: #555555;
    display: block;
    margin: 8px 0;
    text-decoration: none;
    line-height: 1.6;
}
.site-footer a {
    transition: color 0.2s;
}
.site-footer a:hover {
    color: #ee0033;
}
.site-footer h4 {
    margin: 0 0 16px;
    font-family: 'FS Magistral', sans-serif;
    font-size: 17px;
    color: #1a1a1a;
    font-weight: 700;
}
.footer-bottom {
    border-top: 1px solid #eaeaea;
    margin-top: 40px;
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: #777777;
}
@media(max-width: 1050px) {
    .footer-top { grid-template-columns: 1fr 1fr; }
}
@media(max-width: 650px) {
    .footer-top { grid-template-columns: 1fr; gap: 30px; }
    .footer-bottom { display: flex; flex-direction: column; gap: 10px; }
    .site-footer .container { width: min(1240px, calc(100% - 24px)); }
}
</style>
`;

const footerHTML = `
<footer class="site-footer">
    <div class="container footer-top">
        <div class="footer-brand">
            <a href="index.html" class="brand">
                <span class="brand-main">viettel</span>
                <span class="brand-sub">commerce</span>
            </a>
            <p><strong>Tổng Công ty Thương mại và Xuất nhập khẩu Viettel.</strong></p>
            <span>Vững bước tiên phong – Kiến tạo tương lai.</span>
        </div>
        <div>
            <h4>Hành trình</h4>
            <a href="bien-nien-30-nam.html">Biên niên 30 năm</a>
            <a href="hanh-trinh.html#modal-khoi-nguon">Khởi Nguồn</a>
            <a href="hanh-trinh.html#modal-troi-day">Trỗi Dậy</a>
            <a href="hanh-trinh.html#modal-tang-toc">Tăng Tốc</a>
            <a href="hanh-trinh.html#modal-vuon-tam">Vươn Tầm</a>
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
