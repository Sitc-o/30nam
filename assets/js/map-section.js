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

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. TIMELINE ANIMATION BẢN ĐỒ ---
    const mapGroup = document.getElementById('vietnam-map-group');
    const islandsGroup = document.getElementById('islands-group');
    const textHero = document.getElementById('map-hero');

    if (mapGroup && islandsGroup && textHero) {
        const provinceNodes = mapGroup.querySelectorAll('.absolute.province-wrapper');
        const islandNodes = islandsGroup.querySelectorAll('.pointer-events-auto');
        const allPieces = [...provinceNodes, ...islandNodes];

        allPieces.sort((a, b) => {
            const topA = parseFloat(a.style.top || 0);
            const topB = parseFloat(b.style.top || 0);
            return topA - topB;
        });

        allPieces.forEach(piece => {
            piece.classList.add('province-fall-setup');
        });

        setTimeout(() => {
            allPieces.forEach((piece, index) => {
                setTimeout(() => {
                    piece.classList.add('province-dropped');
                }, index * 8);
            });

            const totalDropTime = (allPieces.length * 8) + 400;

            setTimeout(() => {
                mapGroup.classList.add('map-shift-left');
                islandsGroup.classList.add('map-shift-left');

                setTimeout(() => {
                    textHero.classList.add('is-visible');
                }, 600);
            }, totalDropTime + 200);
        }, 200);
    }

    // --- 2. XỬ LÝ TOOLTIP VÀ MODAL ---
    const tooltip = document.getElementById('province-tooltip');
    const mapContainer = document.getElementById('map-container');
    const modal = document.getElementById('map-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalCloseBtn = document.getElementById('modal-close');

    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalMetrics = document.getElementById('modal-metrics');
    const modalDesc = document.getElementById('modal-desc');

    const provincePaths = document.querySelectorAll('.province-path');

    provincePaths.forEach(path => {
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

        // path.addEventListener('mousemove', (e) => {
        //     path.style.fill = '#b51016';
        //     if (tooltip) {
        //         tooltip.style.opacity = '1';
        //         tooltip.style.left = e.clientX + 'px';
        //         tooltip.style.top = e.clientY + 'px';
        //         tooltip.innerHTML = provName;
        //     }
        // });

        path.addEventListener('mousemove', (e) => {
            path.style.fill = '#b51016';
            if (tooltip) {
                tooltip.style.opacity = '1';
                tooltip.style.left = e.clientX + 'px';
                tooltip.style.top = e.clientY + 'px';

                // Lấy tọa độ top/left từ thẻ bọc ngoài để hiện thẳng lên tooltip
                const topVal = wrapper ? wrapper.style.top : '';
                const leftVal = wrapper ? wrapper.style.left : '';

                tooltip.innerHTML = `${provName} <br><small style="color:#ffeb3b;font-size:11px;">top: ${topVal} | left: ${leftVal}</small>`;
            }
        });

        path.addEventListener('mouseleave', () => {
            if (path.getAttribute('fill') !== 'white') {
                path.style.fill = '#ED1C24';
            }
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

            const rect = path.getBoundingClientRect();
            const mapRect = mapContainer.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2 - mapRect.left;
            const centerY = rect.top + rect.height / 2 - mapRect.top;

            const originX = (centerX / mapRect.width) * 100;
            const originY = (centerY / mapRect.height) * 100;

            mapContainer.style.transformOrigin = `${originX}% ${originY}%`;
            mapContainer.style.transform = 'scale(3)';

            setTimeout(() => {
                if (modal) modal.classList.add('is-active');
            }, 400);
        });
    });

    // --- 3. ĐÓNG MODAL ---
    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove('is-active');
        setTimeout(() => {
            if (mapContainer) {
                mapContainer.style.transform = 'scale(1)';
            }
        }, 300);
    };

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
            closeModal();
        }
    });
});