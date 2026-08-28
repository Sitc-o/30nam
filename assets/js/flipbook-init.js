document.addEventListener('DOMContentLoaded', function () {
    const flipbookEl = document.getElementById('flipbook');
    // Thư viện có thể export dưới tên StPageFlip hoặc St
    const PageFlipClass = (typeof StPageFlip !== 'undefined') ? StPageFlip.PageFlip : (typeof St !== 'undefined' ? St.PageFlip : null);

    if (flipbookEl && PageFlipClass) {
        const innerCover = flipbookEl.querySelectorAll('.page-cover-inner')[0];

        let pagesHTML = '';
        // Trang đệm để đẩy mốc thời gian sang trang lẻ (bên trái)
        pagesHTML += ` 
            <div class="page">
                <div class="page-content">
                    <h2 class="year-title" style="font-size: 2.5rem; margin-top: 50%">HÀNH TRÌNH<br>30 NĂM</h2>
                    <p class="year-desc">Vững bước tiên phong<br>Kiến tạo tương lai</p>
                </div>
            </div>
        `;

        for (let year = 1997; year <= 1999; year++) {
            let pageNum = year - 1996;
            // Trang TRÁI (Mô tả)
            pagesHTML += ` 
                <div class="page --left">
                    <div class="page-content">
                        <h2 class="year-title">${year}</h2>
                        <p class="year-desc">Dấu ấn nổi bật và sự kiện quan trọng trong năm ${year}.</p>
                    </div>
                    <div class="page-number">${pageNum * 2 - 1}</div>
                </div>
            `;
            // Trang PHẢI (Ảnh)
            let imgSrc = year === 1997 ? 'assets/images/viettel-1997.jpg' : 'assets/images/people-story-' + ((year % 4) + 1) + '.webp';
            pagesHTML += ` 
                <div class="page --right">
                    <div class="page-content" style="padding: 20px; display: flex; align-items: center; justify-content: center;">
                        <img src="${imgSrc}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" alt="Image ${year}">
                    </div>
                    <                    <div class="page-number">${pageNum * 2}</div>
                </div>
            `;
        }

        // Trang đệm cuối để tổng số trang là SỐ CHẴN (đảm bảo bìa sau nằm bên trái khi đóng sách)
        pagesHTML += ` 
            <div class="page">
                <div class="page-content">
                    <h2 class="year-title" style="font-size: 2rem; margin-top: 50%">VIETTEL<br>Theo cách của bạn</h2>
                </div>
            </div>
        `;
        innerCover.insertAdjacentHTML('afterend', pagesHTML);

        const pageFlip = new PageFlipClass(flipbookEl, {
            width: 550,
            height: 733,
            size: "stretch", // Đổi thành stretch để lấp đầy container
            minWidth: 300,
            maxWidth: 550,   // Khóa cứng chiều rộng 1 trang tối đa (2 trang = 1100px)
            minHeight: 400,
            maxHeight: 700,  // Khóa cứng chiều cao tuyệt đối của sách để không đè navbar
            maxShadowOpacity: 0.02, // Gần như tắt bóng đổ nội bộ vì nó sai logic với ánh sáng God Rays chiếu từ phải sang
            showCover: true,
            usePortrait: true,
            mobileScrollSupport: false,
            flippingTime: 700 // Tăng tốc độ lật trang (0.7s) đồng bộ với Camera
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
