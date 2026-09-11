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
};

const defaultData = {
    coords: "Tọa độ: Đang cập nhật",
    image: "assets/images/gioi_thieu_kinh_doanh_thiet_bi_so.jpg",
    metrics: ["Đang cập nhật", "Phủ sóng rộng khắp", "Đội ngũ chuyên nghiệp"],
    desc: "<p>Nơi đây đánh dấu nhiều chặng đường quan trọng trong sự phát triển của Viettel Store. Với sự nỗ lực không ngừng nghỉ, chúng tôi mang đến dịch vụ tốt nhất cho người dân địa phương.</p><p>Sứ mệnh của chúng tôi là phủ sóng mọi miền Tổ quốc, mang công nghệ đến gần hơn với mọi nhà.</p>"
};

window.addEventListener('load', () => {
    if (typeof gsap === 'undefined') {
        console.error("GSAP chưa được tải.");
        return;
    }

    const mapContainer = document.getElementById('map-container');
    const islandsGroup = document.getElementById('islands-group');
    const heroOverlay = document.querySelector('.map-text-overlay');

    // Bắt thẻ bọc của Hà Nội
    const hanoiWrapper = document.querySelector('.province-wrapper[data-province="ha-noi"]');
    // Bắt toàn bộ các thẻ bao tỉnh khác (loại trừ Hà Nội)
    const allWrappers = Array.from(document.querySelectorAll('#vietnam-map-group .province-wrapper'));
    const otherWrappers = allWrappers.filter(el => el !== hanoiWrapper && !el.contains(hanoiWrapper));

    if (!mapContainer || !hanoiWrapper) return;

    // 1. TÍNH TỌA ĐỘ TÂM HÀ NỘI CHÍNH XÁC
    const hRect = hanoiWrapper.getBoundingClientRect();
    const mRect = mapContainer.getBoundingClientRect();
    const originX = ((hRect.left + hRect.width / 2 - mRect.left) / mRect.width) * 100;
    const originY = ((hRect.top + hRect.height / 2 - mRect.top) / mRect.height) * 100;

    // 2. KHỞI TẠO: Phóng to 3.5 lần tại vị trí Hà Nội
    gsap.set(mapContainer, {
        transformOrigin: `${originX}% ${originY}%`,
        scale: 3.5,
        force3D: true
    });

    // Chỉ hiển thị duy nhất Hà Nội
    gsap.set(hanoiWrapper, { opacity: 1, scale: 1 });

    // Ẩn toàn bộ các tỉnh thành còn lại và các đảo
    const elementsToAssemble = [...otherWrappers];
    if (islandsGroup) elementsToAssemble.push(islandsGroup);

    gsap.set(elementsToAssemble, {
        opacity: 0,
        scale: 0.85,
        transformOrigin: "center center"
    });

    if (heroOverlay) {
        gsap.set(heroOverlay, { opacity: 0, x: 40 });
    }

    // 3. GSAP TIMELINE: ZOOM OUT VỀ KÍCH THƯỚC CHUẨN (SCALE 1)
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl
        // Bước A: Zoom out về kích thước gốc 100% (to rõ, sắc nét)
        .to(mapContainer, {
            scale: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        })
        // Bước B: Các tỉnh thành bay vào lắp ghép từ Bắc vào Nam
        .to(elementsToAssemble, {
            opacity: 1,
            scale: 1,
            duration: 0.55,
            stagger: {
                amount: 0.85,
                from: 'start'
            }
        }, "-=0.3")
        // Bước C: Tiêu đề trượt vào
        .to(heroOverlay, {
            opacity: 1,
            x: 0,
            duration: 0.6
        }, "+=0.1");

    // 4. MODAL & TOOLTIP
    const tooltip = document.getElementById('province-tooltip');
    const modal = document.getElementById('map-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalBackdrop = document.getElementById('modal-backdrop');

    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalMetrics = document.getElementById('modal-metrics');
    const modalDesc = document.getElementById('modal-desc');

    document.querySelectorAll('.province-path').forEach(path => {
        const wrapper = path.closest('.province-wrapper');
        let provId = path.getAttribute('data-province')
            || wrapper?.getAttribute('data-province')
            || path.closest('[data-province]')?.getAttribute('data-province');

        if (!provId) {
            const mask = path.getAttribute('mask');
            if (mask) {
                const m = mask.match(/url\(#mask-([^)]+)\)/);
                if (m) provId = m[1];
            }
        }

        const formatName = (str) => {
            if (!str) return 'Tỉnh Thành';
            return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        };

        const data = (provId && provinceData[provId]) ? provinceData[provId] : defaultData;
        const provName = (provId && provinceData[provId]) ? provinceData[provId].name : formatName(provId);

        path.addEventListener('mousemove', (e) => {
            if (!tooltip) return;
            tooltip.style.opacity = '1';
            tooltip.style.left = e.clientX + 'px';
            tooltip.style.top = e.clientY + 'px';
            tooltip.innerHTML = provName;
        });

        path.addEventListener('mouseleave', () => {
            if (tooltip) tooltip.style.opacity = '0';
        });

        path.addEventListener('click', () => {
            if (tooltip) tooltip.style.opacity = '0';

            if (modalMetrics) modalMetrics.innerHTML = '';
            if (modalTitle) modalTitle.textContent = provName;
            if (modalSubtitle) modalSubtitle.textContent = data.coords;
            if (modalImage) modalImage.src = data.image;
            if (modalDesc) modalDesc.innerHTML = data.desc;

            if (data.metrics && modalMetrics) {
                data.metrics.forEach(metric => {
                    const pill = document.createElement('div');
                    pill.className = 'metric-pill';
                    pill.textContent = metric;
                    modalMetrics.appendChild(pill);
                });
            }

            if (modal) modal.classList.add('is-active');
        });
    });

    const closeModal = () => {
        if (modal) modal.classList.remove('is-active');
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
            closeModal();
        }
    });
});