// ==========================================
// DỮ LIỆU TỈNH THÀNH (PROVINCE DATA)
// BẠN CÓ THỂ SỬA THÔNG SỐ CỦA TỪNG TỈNH Ở ĐÂY
// ==========================================
const provinceData = {
    "ha-noi": {
        name: "Hà Nội",
        coords: "Tọa độ: 21.0285° N, 105.8542° E",
        image: "assets/images/gioi_thieu_kinh_doanh_thiet_bi_so.jpg",
        metrics: ["45 Chi nhánh", "100% Phủ sóng 5G", "300 Kỹ sư"],
        desc: "<p>Hà Nội là một trong những thị trường trọng điểm của Viettel Store. Với sự nỗ lực không ngừng nghỉ, chúng tôi mang đến dịch vụ tốt nhất cho người dân thủ đô.</p><p>Hệ thống cửa hàng phủ sóng khắp các quận huyện đảm bảo khách hàng luôn được phục vụ nhanh chóng và tận tình nhất.</p>"
    },
    "ho-chi-minh": {
        name: "TP. Hồ Chí Minh",
        coords: "Tọa độ: 10.8231° N, 106.6297° E",
        image: "assets/images/gioi_thieu_kinh_doanh_thiet_bi_so.jpg",
        metrics: ["50 Chi nhánh", "100% Phủ sóng 5G", "400 Kỹ sư"],
        desc: "<p>Thành phố Hồ Chí Minh tự hào là trung tâm kinh tế và công nghệ lớn nhất cả nước. Viettel Store tại đây luôn đi đầu trong việc cung cấp các thiết bị và dịch vụ số hiện đại.</p>"
    },
    "da-nang": {
        name: "Đà Nẵng",
        coords: "Tọa độ: 16.0652° N, 108.2022° E",
        image: "assets/images/gioi_thieu_kinh_doanh_thiet_bi_so.jpg",
        metrics: ["15 Chi nhánh", "99% Phủ sóng 5G", "100 Kỹ sư"],
        desc: "<p>Tại Đà Nẵng, Viettel Store không chỉ là điểm đến mua sắm tin cậy mà còn là biểu tượng của sự đổi mới và phục vụ khách hàng tận tâm tại khu vực Miền Trung.</p>"
    }
    // Bạn có thể thêm các tỉnh khác theo cấu trúc tương tự:
    // "ma-tinh-viet-thuong-khong-dau": { name: "...", coords: "...", image: "...", metrics: ["..."], desc: "..." }
};

// Dữ liệu mặc định nếu tỉnh chưa được cấu hình
const defaultData = {
    coords: "Tọa độ: Đang cập nhật",
    image: "assets/images/gioi_thieu_kinh_doanh_thiet_bi_so.jpg",
    metrics: ["Đang cập nhật", "Phủ sóng rộng khắp", "Đội ngũ chuyên nghiệp"],
    desc: "<p>Nơi đây đánh dấu nhiều chặng đường quan trọng trong sự phát triển của Viettel Store. Với sự nỗ lực không ngừng nghỉ, chúng tôi mang đến dịch vụ tốt nhất cho người dân địa phương.</p><p>Sứ mệnh của chúng tôi là phủ sóng mọi miền Tổ quốc, mang công nghệ đến gần hơn với mọi nhà.</p>"
};

document.addEventListener('DOMContentLoaded', () => {
    // Trigger text reveal animation
    setTimeout(() => {
        const hero = document.getElementById('map-hero');
        if (hero) hero.classList.add('is-visible');
    }, 300);

    const tooltip = document.getElementById('province-tooltip');
    const mapContainer = document.getElementById('map-container');
    const modal = document.getElementById('map-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close');
    
    // Nơi hiển thị thông tin modal
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalMetrics = document.getElementById('modal-metrics');
    const modalDesc = document.getElementById('modal-desc');
    
    // Add event listeners to all province paths
    const provincePaths = document.querySelectorAll('.province-path');
    
    provincePaths.forEach(path => {
        let provId = path.getAttribute('data-province');
        if (!provId) {
            const mask = path.getAttribute('mask');
            if (mask) {
                const m = mask.match(/url\(#mask-([^)]+)\)/);
                if (m) provId = m[1];
            }
        }
        
        const formatName = (str) => {
            if(!str) return 'Tỉnh Thành';
            return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        };
        
        // Lấy tên tỉnh thành, ưu tiên tên trong provinceData nếu có
        const data = provinceData[provId] || defaultData;
        const provName = provinceData[provId] ? provinceData[provId].name : formatName(provId);
        
        path.addEventListener('mousemove', (e) => {
            path.style.fill = '#b51016';
            path.style.transform = 'scale(1.02)';
            
            tooltip.style.opacity = '1';
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
            tooltip.innerHTML = provName;
        });
        
        path.addEventListener('mouseleave', () => {
            path.style.fill = '#ED1C24';
            path.style.transform = 'scale(1)';
            tooltip.style.opacity = '0';
        });
        
        path.addEventListener('click', (e) => {
            tooltip.style.opacity = '0';
            path.style.fill = '#ED1C24';
            path.style.transform = 'scale(1)';
            
            // Xóa nội dung cũ để transition mượt hơn
            modalMetrics.innerHTML = '';
            
            // Render nội dung mới vào Modal
            modalTitle.textContent = provName;
            modalSubtitle.textContent = data.coords;
            modalImage.src = data.image;
            modalDesc.innerHTML = data.desc;
            
            data.metrics.forEach(metric => {
                const pill = document.createElement('div');
                pill.className = 'metric-pill';
                pill.textContent = metric;
                modalMetrics.appendChild(pill);
            });
            
            // Xử lý logic zoom
            const rect = path.getBoundingClientRect();
            const mapRect = mapContainer.getBoundingClientRect();
            
            const centerX = rect.left + rect.width / 2 - mapRect.left;
            const centerY = rect.top + rect.height / 2 - mapRect.top;
            
            const originX = (centerX / mapRect.width) * 100;
            const originY = (centerY / mapRect.height) * 100;
            
            mapContainer.style.transformOrigin = `${originX}% ${originY}%`;
            mapContainer.style.transform = 'scale(3)';
            
            setTimeout(() => {
                modal.classList.add('is-active');
            }, 400);
        });
    });
    
    const closeModal = () => {
        modal.classList.remove('is-active');
        setTimeout(() => {
            mapContainer.style.transform = 'scale(1)';
        }, 300);
    };
    
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
});
