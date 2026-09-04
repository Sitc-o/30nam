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
        "Chúc mừng VCM tròn 30 năm kiến tạo giá trị và khẳng định vị thế dẫn đầu",
        "30 năm một chặng đường tự hào, chúc VCM tiếp tục vươn xa và bứt phá mọi giới hạn",
        "Kỷ niệm 30 năm thành lập, chúc công ty luôn vững bước tiên phong, phát triển bền vững",
        "Tri ân hành trình 3 thập kỷ bản lĩnh, chúc VCM đón tuổi mới với ngàn thành công mới",
        "Chúc đại gia đình VCM luôn đoàn kết, giữ vững nhiệt huyết để chinh phục những đỉnh cao mới",
        "30 năm vững nền tảng, sáng tương lai – chúc VCM ngày càng thịnh vượng và vươn tầm quốc tế",
        "Kính chúc VCM tuổi 30 vững tay chèo, vượt mọi sóng lớn và gặt hái thêm nhiều thắng lợi",
        "Chúc mừng cột mốc 30 năm rực rỡ, mở ra một chương mới đầy bứt phá cho VCM",
        "Cảm ơn hành trình 30 năm cống hiến, chúc VCM luôn là điểm tựa vững chắc cho toàn thể CBNV",
        "Chúc VCM tuổi 30 tràn đầy sinh lực, giữ trọn niềm tin từ khách hàng và đối tác",
        "Hành trình 30 năm dựng xây uy tín – chúc VCM tiếp tục thắp sáng những hoài bão lớn",
        "Chúc mừng kỷ niệm 30 năm ngày thành lập, chúc VCM vạn sự hanh thông, trường tồn và phát triển"
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
