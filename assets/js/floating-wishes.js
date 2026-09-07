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

    const wishes = [];

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
    const fixedPositionsDesktop = [
        { x: 12, y: 22 }, { x: 10, y: 50 }, { x: 12, y: 78 },
        { x: 88, y: 15 }, { x: 88, y: 85 }
    ];
    const fixedPositionsMobile = [
        { x: 50, y: 12 }, { x: 25, y: 88 }, { x: 75, y: 88 }
    ];

    const slotsData = narrowScreen ? fixedPositionsMobile : fixedPositionsDesktop;
    const SLOT_COUNT = slotsData.length;
    const SLOT_W = narrowScreen ? 46 : 24;
    const SLOT_H = narrowScreen ? 15 : 20;
    const slotEls = [];
    
    let pool = [];
    let cursor = 0;

    function nextWish() {
        if (wishes.length === 0) return "";
        if (cursor >= pool.length) {
            pool.splice(0, pool.length, ...shuffled(wishes));
            cursor = 0;
        }
        return pool[cursor++];
    }

    window.addFloatingWish = function(text) {
        wishes.push(text);
        if (pool.length === 0) {
            pool.push(text);
        } else {
            pool.splice(cursor, 0, text);
        }
    };

    function initSlots() {
        for (let i = 0; i < SLOT_COUNT; i++) {
            const pos = slotsData[i];
            const slotEl = document.createElement('div');
            slotEl.className = 'slot';

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

            const duration = 12 + Math.random() * 8;
            const delay = -(Math.random() * duration);
            const zStart = -(360 + Math.random() * 120);
            const sStart = .38 + Math.random() * .12;

            wishEl.style.setProperty('--zStart', zStart + 'px');
            wishEl.style.setProperty('--sStart', sStart);
            wishEl.style.animationDuration = duration + 's';
            wishEl.style.animationDelay = delay + 's';

            wishEl.textContent = nextWish();
            slotEl.appendChild(wishEl);

            wishEl.addEventListener('animationiteration', () => {
                wishEl.textContent = nextWish();
            });
        }
    }

    // Nạp các lời chúc đã lưu từ FastAPI backend
    fetch('/api/wishes')
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                wishes.push(...data);
            } else {
                wishes.push("Chào mừng đến với kỷ yếu 30 năm!");
            }
            pool = shuffled(wishes);
            initSlots();
        })
        .catch(err => {
            console.log("Không tải được API Backend (có thể chưa chạy server)");
            wishes.push("Chào mừng đến với kỷ yếu 30 năm!");
            pool = shuffled(wishes);
            initSlots();
        });
});
