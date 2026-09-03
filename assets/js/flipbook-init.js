document.addEventListener('DOMContentLoaded', function () {
    const flipbookEl = document.getElementById('flipbook');
    // Thư viện có thể export dưới tên StPageFlip hoặc St
    const PageFlipClass = (typeof StPageFlip !== 'undefined') ? StPageFlip.PageFlip : (typeof St !== 'undefined' ? St.PageFlip : null);

    if (flipbookEl && PageFlipClass) {
        const innerCover = flipbookEl.querySelectorAll('.page-cover-inner')[0];

        let pagesHTML = '';

        // Dữ liệu 30 mốc thời gian - mỗi entry: [year, tên mốc, mô tả, ảnh]
        const milestones = [
            { year: 1997, milestone: "Ngày đầu thành lập", desc: "Tổng Công ty Viễn thông Quân đội (Viettel) được thành lập theo Quyết định số 58/QĐ-QP ngày 01/6/1989. Những ngày đầu vô cùng gian khó nhưng đầy nhiệt huyết.", img: "assets/images/viettel-1997.jpg", caption: "Lễ thành lập Viettel, 1997" },
            { year: 1998, milestone: "Xây dựng hạ tầng", desc: "Triển khai tuyến cáp quang đầu tiên, đặt nền móng cho hạ tầng viễn thông hiện đại. Những người lính Viettel vừa cầm súng vừa kéo cáp.", img: "assets/images/viettel-1997.jpg", caption: "Thi công tuyến cáp, 1998" },
            { year: 1999, milestone: "Mở rộng dịch vụ", desc: "Bắt đầu cung cấp dịch vụ điện thoại cố định và internet, mở ra kỷ nguyên kết nối mới cho người dùng Việt Nam.", img: "assets/images/viettel-1997.jpg", caption: "Khai trương dịch vụ, 1999" },
            { year: 2000, milestone: "Vươn tầm thế kỷ", desc: "Bước sang thiên niên kỷ mới, Viettel khẳng định vị thế với những bước tiến vững chắc trong ngành viễn thông Việt Nam.", img: "assets/images/viettel-1997.jpg", caption: "Kỷ nguyên mới, 2000" },
            { year: 2001, milestone: "Liên doanh quốc tế", desc: "Ký kết các hợp đồng hợp tác quốc tế quan trọng, mở ra cánh cửa hội nhập toàn cầu cho Viettel và viễn thông Việt Nam.", img: "assets/images/viettel-1997.jpg", caption: "Hợp tác quốc tế, 2001" },
            { year: 2002, milestone: "Đột phá di động", desc: "Triển khai mạng di động GSM đầu tiên, tạo ra bước nhảy vọt lịch sử trong cung cấp dịch vụ viễn thông di động tại Việt Nam.", img: "assets/images/viettel-1997.jpg", caption: "Ra mắt mạng di động, 2002" },
            { year: 2003, milestone: "Phủ sóng toàn quốc", desc: "Mạng lưới Viettel phủ khắp 64 tỉnh thành trên cả nước, mang tín hiệu kết nối đến cả những vùng sâu vùng xa hẻo lánh.", img: "assets/images/viettel-1997.jpg", caption: "Phủ sóng toàn quốc, 2003" },
            { year: 2004, milestone: "Triệu khách hàng", desc: "Viettel chào đón khách hàng thứ 1 triệu – cột mốc đánh dấu sự tin tưởng tuyệt đối của người dùng Việt Nam.", img: "assets/images/viettel-1997.jpg", caption: "1 triệu khách hàng, 2004" },
            { year: 2005, milestone: "Tiên phong 3G", desc: "Nghiên cứu và thử nghiệm công nghệ 3G, chuẩn bị cho giai đoạn phát triển internet di động tốc độ cao tại Việt Nam.", img: "assets/images/viettel-1997.jpg", caption: "Nghiên cứu 3G, 2005" },
            { year: 2006, milestone: "Vươn ra thế giới", desc: "Bước đầu tiên ra thị trường quốc tế, Viettel đặt nền móng cho chiến lược toàn cầu hóa táo bạo và đầy tham vọng.", img: "assets/images/viettel-1997.jpg", caption: "Hành trình quốc tế, 2006" },
            { year: 2007, milestone: "Cải tổ mô hình", desc: "Chuyển đổi mô hình tổ chức, xây dựng cơ cấu quản trị hiện đại đáp ứng yêu cầu phát triển nhanh và bền vững.", img: "assets/images/viettel-1997.jpg", caption: "Tái cơ cấu tổ chức, 2007" },
            { year: 2008, milestone: "Giải thưởng quốc tế", desc: "Nhận các giải thưởng viễn thông uy tín từ các tổ chức quốc tế, khẳng định chất lượng dịch vụ đẳng cấp thế giới.", img: "assets/images/viettel-1997.jpg", caption: "Nhận giải quốc tế, 2008" },
            { year: 2009, milestone: "Ra mắt 3G chính thức", desc: "Triển khai mạng 3G thương mại, mở ra kỷ nguyên di động băng rộng tại Việt Nam với tốc độ và trải nghiệm hoàn toàn mới.", img: "assets/images/viettel-1997.jpg", caption: "Ra mắt 3G, 2009" },
            { year: 2010, milestone: "Số 1 Việt Nam", desc: "Viettel trở thành mạng di động lớn nhất Việt Nam về thuê bao, doanh thu và hạ tầng – một thành tựu lịch sử đáng tự hào.", img: "assets/images/viettel-1997.jpg", caption: "Mạng di động số 1, 2010" },
            { year: 2011, milestone: "Đầu tư châu Phi", desc: "Triển khai hoạt động tại châu Phi, Viettel tiếp tục mở rộng tầm ảnh hưởng toàn cầu sang lục địa đen đầy tiềm năng.", img: "assets/images/viettel-1997.jpg", caption: "Khai trương tại châu Phi, 2011" },
            { year: 2012, milestone: "Đổi mới sáng tạo", desc: "Thành lập Viện Nghiên cứu và Phát triển, đẩy mạnh hoạt động R&D nội địa để làm chủ công nghệ viễn thông hiện đại.", img: "assets/images/viettel-1997.jpg", caption: "Viện R&D ra đời, 2012" },
            { year: 2013, milestone: "Giải pháp chính phủ số", desc: "Tiên phong cung cấp giải pháp Chính phủ điện tử, đóng góp tích cực vào công cuộc chuyển đổi số của bộ máy nhà nước.", img: "assets/images/viettel-1997.jpg", caption: "Chính phủ điện tử, 2013" },
            { year: 2014, milestone: "100 triệu thuê bao", desc: "Viettel cán mốc 100 triệu thuê bao trên toàn cầu, trở thành tập đoàn viễn thông top đầu khu vực Đông Nam Á.", img: "assets/images/viettel-1997.jpg", caption: "100 triệu thuê bao, 2014" },
            { year: 2015, milestone: "Triển khai 4G", desc: "Thử nghiệm thành công mạng 4G LTE, chuẩn bị cơ sở hạ tầng cho kỷ nguyên internet di động tốc độ siêu cao.", img: "assets/images/viettel-1997.jpg", caption: "Thử nghiệm 4G, 2015" },
            { year: 2016, milestone: "Thương hiệu toàn cầu", desc: "Viettel được vinh danh trong top 500 thương hiệu giá trị nhất toàn cầu theo xếp hạng của Brand Finance.", img: "assets/images/viettel-1997.jpg", caption: "Top 500 thương hiệu toàn cầu, 2016" },
            { year: 2017, milestone: "Ra mắt 4G thương mại", desc: "Chính thức thương mại hóa mạng 4G trên toàn quốc, mang lại trải nghiệm internet di động tốc độ cao cho hàng chục triệu người dùng.", img: "assets/images/viettel-1997.jpg", caption: "Phủ sóng 4G toàn quốc, 2017" },
            { year: 2018, milestone: "Chuyển đổi số", desc: "Chuyển đổi chiến lược từ viễn thông truyền thống sang doanh nghiệp công nghệ số, dẫn dắt hành trình CĐS của Việt Nam.", img: "assets/images/viettel-1997.jpg", caption: "Viettel Digital, 2018" },
            { year: 2019, milestone: "Tiên phong 5G", desc: "Thử nghiệm thành công 5G đầu tiên tại Việt Nam, khẳng định năng lực công nghệ đỉnh cao của tập đoàn trước thế giới.", img: "assets/images/viettel-1997.jpg", caption: "Thử nghiệm 5G, 2019" },
            { year: 2020, milestone: "Vượt qua đại dịch", desc: "Đảm bảo hạ tầng kết nối thông suốt trong dịch COVID-19, Viettel là xương sống của nền kinh tế số trong giai đoạn khủng hoảng.", img: "assets/images/viettel-1997.jpg", caption: "Vững vàng mùa dịch, 2020" },
            { year: 2021, milestone: "Thương mại hóa 5G", desc: "Triển khai thương mại 5G tại các thành phố lớn, đưa Việt Nam vào danh sách các quốc gia đầu tiên có mạng 5G tại Đông Nam Á.", img: "assets/images/viettel-1997.jpg", caption: "5G thương mại hóa, 2021" },
            { year: 2022, milestone: "Hệ sinh thái số", desc: "Ra mắt hệ sinh thái số hoàn chỉnh với hàng chục dịch vụ số toàn diện phục vụ người dùng, doanh nghiệp và chính phủ.", img: "assets/images/viettel-1997.jpg", caption: "Hệ sinh thái số VCM, 2022" },
            { year: 2023, milestone: "Xuất khẩu công nghệ", desc: "Xuất khẩu giải pháp công nghệ và dịch vụ số sang các thị trường quốc tế, khẳng định vị thế công ty công nghệ toàn cầu.", img: "assets/images/viettel-1997.jpg", caption: "Xuất khẩu công nghệ, 2023" },
            { year: 2024, milestone: "AI & Dữ liệu lớn", desc: "Ứng dụng AI và Big Data vào mọi lĩnh vực hoạt động, nâng cao hiệu quả vận hành và tạo ra những trải nghiệm dịch vụ thông minh.", img: "assets/images/viettel-1997.jpg", caption: "AI & Big Data, 2024" },
            { year: 2025, milestone: "Khởi đầu thập kỷ mới", desc: "Bước vào thập kỷ thứ tư với những mục tiêu đầy tham vọng: trở thành tập đoàn công nghệ hàng đầu khu vực Đông Nam Á.", img: "assets/images/viettel-1997.jpg", caption: "Thập kỷ tăng trưởng, 2025" },
            { year: 2026, milestone: "Đổi mới không ngừng", desc: "Tiếp tục đầu tư mạnh vào nghiên cứu phát triển, chuyển đổi số toàn diện và mở rộng thị trường quốc tế.", img: "assets/images/viettel-1997.jpg", caption: "Đổi mới không ngừng, 2026" },
            { year: 2027, milestone: "30 năm tự hào", desc: "Kỷ niệm 30 năm thành lập – 30 năm vững bước tiên phong, kiến tạo tương lai số cho Việt Nam và thế giới.", img: "assets/images/viettel-1997.jpg", caption: "30 năm vững bước tiên phong" },
        ];

        // Trang mở đầu - Lời giới thiệu
        pagesHTML += `
            <div class="page scrapbook-left">
                <div class="page-content">
                    <div class="scrapbook-year" style="font-size:3.5rem;">HÀNH TRÌNH</div>
                    <div class="scrapbook-year" style="font-size:6rem; margin-top:-10px;">30</div>
                    <div class="scrapbook-milestone">Năm vững bước tiên phong</div>
                    <div class="scrapbook-divider"></div>
                    <p class="scrapbook-desc">Từ những ngày đầu gian khó cho đến hôm nay, mỗi trang sách là một dấu ấn, một câu chuyện, một chặng đường đáng nhớ trong hành trình 30 năm của chúng tôi.</p>
                </div>
            </div>
        `;

        // Tạo cặp trang cho từng mốc thời gian
        milestones.forEach((m, i) => {
            // Xoay ảnh ngẫu nhiên nhẹ để tạo cảm giác dán tự nhiên
            const rotations = [-2.5, 1.8, -1.2, 2.1, -3.0, 1.5, -0.8, 2.8, -1.7, 1.1];
            const rot = rotations[i % rotations.length];

            // Trang TRÁI - Mô tả dạng nhật ký
            pagesHTML += `
                <div class="page scrapbook-left">
                    <div class="page-content">
                        <div class="scrapbook-year">${m.year}</div>
                        <div class="scrapbook-milestone">${m.milestone}</div>
                        <div class="scrapbook-divider"></div>
                        <p class="scrapbook-desc">${m.desc}</p>
                    </div>
                    <div class="page-number">${i * 2 + 1}</div>
                </div>
            `;

            // Trang PHẢI - 2 ảnh dán so le kiểu scrapbook album
            const rot2 = rotations[(i + 5) % rotations.length]; // góc xoay khác cho ảnh thứ 2
            pagesHTML += `
                <div class="page scrapbook-right">
                    <div class="page-content scrapbook-two-photos">
                        <!-- Ảnh 1: góc trên trái -->
                        <div class="scrapbook-photo-wrapper photo-slot-top" style="transform: rotate(${rot}deg);">
                            <span class="corner-tr"></span>
                            <span class="corner-bl"></span>
                            <img src="${m.img}" alt="${m.year} - ảnh 1">
                        </div>
                        <!-- Ảnh 2: góc dưới phải (so le) -->
                        <div class="scrapbook-photo-wrapper photo-slot-bottom" style="transform: rotate(${rot2}deg);">
                            <span class="corner-tr"></span>
                            <span class="corner-bl"></span>
                            <img src="${m.img}" alt="${m.year} - ảnh 2">
                        </div>
                    </div>
                    <div class="page-number">${i * 2 + 2}</div>
                </div>
            `;
        });

        // Trang đệm cuối để tổng số trang là SỐ CHẴN (bìa sau đúng vị trí)
        pagesHTML += `
            <div class="page scrapbook-left">
                <div class="page-content">
                    <div class="scrapbook-year" style="font-size:3rem;">VIETTEL</div>
                    <div class="scrapbook-milestone">Theo cách của bạn</div>
                    <div class="scrapbook-divider"></div>
                    <p class="scrapbook-desc">Cảm ơn bạn đã đồng hành cùng chúng tôi suốt hành trình 30 năm ý nghĩa này.</p>
                </div>
            </div>
        `;
        innerCover.insertAdjacentHTML('afterend', pagesHTML);

        const pageFlip = new PageFlipClass(flipbookEl, {
            width: 700,
            height: 490,
            size: "stretch",
            minWidth: 250,
            maxWidth: 700,   // Trang ngang - mỗi trang rộng hơn cao
            minHeight: 200,
            maxHeight: 490,
            maxShadowOpacity: 0.02,
            showCover: true,
            usePortrait: true,
            mobileScrollSupport: false,
            flippingTime: 700
        });

        // Nạp các trang HTML vào thư viện
        pageFlip.loadFromHTML(document.querySelectorAll('.page'));

        // ==========================================
        // TÍNH NĂNG CINEMATIC CAMERA (TRƯỢT KHUNG ĐỒNG THỜI)
        // ==========================================
        let predictedTarget = null;

        function getShiftAmount() {
            const wrapper = document.querySelector('.stf__wrapper');
            return wrapper ? wrapper.offsetWidth / 4 : 0;
        }

        // 1. Phân tích tọa độ Click của người dùng để "tiên tri" hướng lật sách trước khi ảnh ảo bắt đầu bay
        const flipContainer = document.querySelector('.container-flipbook');
        flipContainer.addEventListener('pointerdown', (e) => {
            const pageIndex = pageFlip.getCurrentPageIndex();
            const rect = flipContainer.getBoundingClientRect();
            const isClickLeft = (e.clientX - rect.left) < (rect.width / 2);

            if (pageIndex === 0) {
                predictedTarget = 'center'; // Đang ở bìa trước, chắc chắn là mở ra giữa
            } else if (pageIndex >= pageFlip.getPageCount() - 1) {
                predictedTarget = 'center'; // Đang ở bìa sau, chắc chắn là mở ra giữa
            } else if (pageIndex <= 2 && isClickLeft) {
                predictedTarget = 'left'; // Đang ở trang đầu, bấm bên trái -> Gập lại thành bìa trước
            } else if (pageIndex >= pageFlip.getPageCount() - 3 && !isClickLeft) {
                predictedTarget = 'right'; // Đang ở trang cuối, bấm bên phải -> Gập lại thành bìa sau
            } else {
                predictedTarget = 'center'; // Đang ở lơ lửng giữa sách
            }
        });

        // 2. Kích hoạt trượt Camera NGAY LẬP TỨC khi trạng thái sách chuyển sang "Đang bị giữ" hoặc "Đang lật"
        pageFlip.on('changeState', (e) => {
            const state = e.data; // "user_fold", "fold_corner", "flipping", "read"
            const container = document.querySelector('.container-flipbook');
            const shiftAmount = getShiftAmount();

            if (pageFlip.getOrientation() === 'portrait') {
                container.style.transform = `translateX(0px)`;
                return;
            }

            // Kích hoạt TRƯỢT ĐỒNG THỜI ngay tích tắc người dùng chạm tay vào góc giấy
            if (state === 'user_fold' || state === 'fold_corner' || state === 'flipping') {
                if (predictedTarget === 'center') {
                    container.style.transform = `translateX(0px)`;
                } else if (predictedTarget === 'left') {
                    container.style.transform = `translateX(-${shiftAmount}px)`;
                } else if (predictedTarget === 'right') {
                    container.style.transform = `translateX(${shiftAmount}px)`;
                }
            }

            // Bước kiểm tra an toàn: Đề phòng người dùng giữ giấy nhưng lại đổi ý không lật nữa
            if (state === 'read') {
                const actualPage = pageFlip.getCurrentPageIndex();
                if (actualPage === 0) {
                    container.style.transform = `translateX(-${shiftAmount}px)`;
                } else if (actualPage >= pageFlip.getPageCount() - 1) {
                    container.style.transform = `translateX(${shiftAmount}px)`;
                } else {
                    container.style.transform = `translateX(0px)`;
                }
            }
        });

        // Tự động căn lại khi thu phóng trình duyệt
        window.addEventListener('resize', () => {
            setTimeout(() => {
                // Tái giả lập state 'read' để cập nhật tọa độ
                pageFlip.turnToPage(pageFlip.getCurrentPageIndex());
            }, 100);
        });

        // Khởi tạo tọa độ camera ngay lúc nạp xong
        setTimeout(() => {
            const shiftAmount = getShiftAmount();
            document.querySelector('.container-flipbook').style.transform = `translateX(-${shiftAmount}px)`;
        }, 50);

        // ==========================================
        // ÁNH SÁNG & BÓNG ĐỔ TƯƠNG TÁC THEO CHUỘT (2.5D LIGHTING)
        // ==========================================
        document.addEventListener('mousemove', (e) => {
            // Tính toán phần trăm tọa độ chuột trên màn hình (0.0 đến 1.0)
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            // Cập nhật CSS Variables
            document.documentElement.style.setProperty('--mouse-x', mouseX);
            document.documentElement.style.setProperty('--mouse-y', mouseY);
        });

    } else {
        console.error("Lỗi: Không tìm thấy thư viện StPageFlip hoặc thẻ #flipbook.");
    }
});
