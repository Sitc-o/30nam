document.addEventListener('DOMContentLoaded', () => {
    // Inject the scene container into the DOM if not already present
    let scene = document.getElementById('wishes-scene');
    if (!scene) {
        scene = document.createElement('div');
        scene.id = 'wishes-scene';
        scene.className = 'wishes-scene';

        // Insert right after the body tag or inside the main layout
        const mainLayout = document.querySelector('.flipbook-layout');
        if (mainLayout) {
            mainLayout.appendChild(scene);
        } else {
            document.body.appendChild(scene);
        }
    }

    const wishes = [
        "Chúc bạn một năm mới an khang, vạn sự như ý",
        "Sức khoẻ dồi dào, gia đình hạnh phúc",
        "Công việc hanh thông, tài lộc đầy nhà",
        "Mọi ước mơ đều thành hiện thực",
        "Bình an đi qua từng ngày, hạnh phúc ở lại thật lâu",
        "Chúc bạn luôn giữ được nụ cười như hôm nay",
        "Vạn sự khởi đầu nan, gian nan rồi cũng qua",
        "Chúc mừng năm mới, an vui bên người thương",
        "Mong bạn luôn đủ can đảm để theo đuổi điều mình muốn",
        "Sum vầy bên gia đình, ấm áp suốt bốn mùa",
        "Chúc bạn một năm rực rỡ như ánh đèn lồng",
        "Sống chậm lại, yêu thương nhiều hơn",
        `Thực hiện Chỉ thị số 8G3/A ngày 29 tháng 5 năm 1998 của Đảng ủy Binh chủng Thông tin liên lạc, ngày 14 tháng 8 năm 1998, Đảng ủy Công ty Điện tử Viễn thông Quân đội ra Nghị quyết số 21/NQ-ĐU về việc lãnh đạo chỉ đạo các đơn vị tiến hành đại hội tiến tới đại hội Đảng bộ Công ty lần thứ IV; trong Nghị quyết có nội dung kiện toàn, thành lập mới một số chi bộ cơ sở. Theo đó, Chi bộ Xuất nhập khẩu được thành lập (cùng Quyết định thành lập với Chi bộ Trung tâm Bưu chính); đồng thời chỉ định đồng chí Đỗ Ngọc Cường làm Bí thư chi bộ. Đồng chí Đỗ Ngọc Cường từng cho biết: “Trước đó, một số đảng viên thuộc phòng Xuất nhập khẩu vẫn sinh hoạt ghép với Chi bộ Trung tâm Thương mại và dịch vụ kỹ thuật; và tôi là Phó Bí thư. Chi bộ đầu tiên được thành lập là thể hiện sự quan tâm của Đảng ủy Công ty. Chi bộ lúc đó chỉ có 4 đảng viên. Nghị quyết chi bộ chưa được đánh máy như bây giờ, chỉ ghi chép trong sổ tay, vậy mà vẫn  đoàn kết thống nhất cao, triển khai lãnh đạo, chỉ đạo kịp thời và hoàn thành tốt mọi nhiệm vụ. Từ đó cho đến lúc tôi (Đại tá Đỗ Ngọc Cường) nghỉ hưu, chi bộ và sau này là Đảng bộ năm nào cũng đạt trong sạch vững mạnh”. Đó là dấu ấn đầu tiên về tổ chức Đảng đầu tiên của đơn vị, là tấm gương để Đảng ủy Tổng Công ty và đội ngũ đảng viên của Đảng bộ hôm nay cần phát huy và phát huy truyển thống truyền thống cha anh; luôn giữ gìn sự đoàn kết thống nhất trong Đảng; lãnh đạo đơn vị hoàn thành tốt mọi nhiệm vụ được giao.`
    ];

    function shuffled(arr) {
        return [...arr].sort(() => Math.random() - .5);
    }

    const moteCount = 40;
    for (let i = 0; i < moteCount; i++) {
        const m = document.createElement('div');
        m.className = 'mote';
        m.style.left = Math.random() * 100 + '%';
        m.style.top = Math.random() * 100 + '%';
        m.style.animationDelay = (Math.random() * 6) + 's';
        scene.appendChild(m);
    }

    const narrowScreen = window.innerWidth < 640;
    
    // Define fixed safe positions (percentages for x and y)
    // Using fixed slots guarantees no overlap with the book or UI
    const fixedPositionsDesktop = [
        { x: 12, y: 22 }, // Left Top
        { x: 10, y: 50 }, // Left Middle
        { x: 12, y: 78 }, // Left Bottom
        { x: 88, y: 15 }, // Right Top
        { x: 88, y: 85 }  // Right Bottom
    ];

    const fixedPositionsMobile = [
        { x: 50, y: 12 }, // Top Center
        { x: 25, y: 88 }, // Bottom Left
        { x: 75, y: 88 }  // Bottom Right
    ];

    const slotsData = narrowScreen ? fixedPositionsMobile : fixedPositionsDesktop;
    const SLOT_COUNT = slotsData.length;
    const SLOT_W = narrowScreen ? 46 : 24; // slightly wider for long text
    const SLOT_H = narrowScreen ? 15 : 20;

    const slotEls = [];

    const pool = shuffled(wishes);
    let cursor = 0;
    function nextWish() {
        if (cursor >= pool.length) {
            pool.splice(0, pool.length, ...shuffled(wishes));
            cursor = 0;
        }
        return pool[cursor++];
    }

    for (let i = 0; i < SLOT_COUNT; i++) {
        const pos = slotsData[i];

        const slotEl = document.createElement('div');
        slotEl.className = 'slot';
        
        // Add a slight random jitter (-2% to 2%) so it feels organic, but stays in its zone
        const jitterX = (Math.random() - 0.5) * 4;
        const jitterY = (Math.random() - 0.5) * 4;
        
        slotEl.style.setProperty('--x', (pos.x + jitterX) + '%');
        slotEl.style.setProperty('--y', (pos.y + jitterY) + '%');
        slotEl.style.setProperty('--slotW', SLOT_W + 'vw');
        slotEl.style.setProperty('--slotH', SLOT_H + 'vh');
        scene.appendChild(slotEl);
        slotEls.push(slotEl);

        const wishEl = document.createElement('div');
        wishEl.className = 'wish';

        const duration = 12 + Math.random() * 8; // Slower animation 12s - 20s
        const delay = -(Math.random() * duration);
        const zStart = -(360 + Math.random() * 120);
        const sStart = .38 + Math.random() * .12;

        wishEl.style.setProperty('--zStart', zStart + 'px');
        wishEl.style.setProperty('--sStart', sStart);
        wishEl.style.animationDuration = duration + 's';
        wishEl.style.animationDelay = delay + 's';
        wishEl.textContent = nextWish();

        wishEl.addEventListener('animationiteration', () => {
            wishEl.textContent = nextWish();

            // Slightly adjust position within the fixed zone every loop
            const jX = (Math.random() - 0.5) * 4;
            const jY = (Math.random() - 0.5) * 4;
            slotEl.style.setProperty('--x', (pos.x + jX) + '%');
            slotEl.style.setProperty('--y', (pos.y + jY) + '%');
        });

        slotEl.appendChild(wishEl);
    }
});
