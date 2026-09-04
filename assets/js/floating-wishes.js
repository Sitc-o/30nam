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
        "Sống chậm lại, yêu thương nhiều hơn"
    ];

    function shuffled(arr){
        return [...arr].sort(()=>Math.random()-.5);
    }

    const moteCount = 40;
    for(let i=0;i<moteCount;i++){
        const m = document.createElement('div');
        m.className = 'mote';
        m.style.left = Math.random()*100 + '%';
        m.style.top = Math.random()*100 + '%';
        m.style.animationDelay = (Math.random()*6) + 's';
        scene.appendChild(m);
    }

    const narrowScreen = window.innerWidth < 640;
    const SLOT_COUNT = narrowScreen ? 6 : 8; // Reduced count to avoid cluttering safe zones
    const SLOT_W = narrowScreen ? 46 : 20;
    const SLOT_H = narrowScreen ? 10 : 13;
    const GROWTH = 1.18;
    const MARGIN = 1.5;
    const MAX_ATTEMPTS = 400;

    const slotsData = [];

    // Define forbidden zones to avoid the book and the "Mở biên niên" area
    function isInForbiddenZone(x, y) {
        // x, y are percentages (0-100)
        
        // 1. Navbar (Top center area)
        if (x > 15 && x < 85 && y < 20) return true;

        // 2. Center zone (Book area)
        if (x > 25 && x < 75 && y >= 20 && y < 85) return true;
        
        // 3. Right side (Mở biên niên and button)
        if (x > 70 && y > 35 && y < 65) return true;

        return false;
    }

    function collidesWith(x, y, excludeIndex){
        return slotsData.some((s, idx)=>{
            if(idx === excludeIndex || !s) return false;
            const w = (SLOT_W * GROWTH);
            const h = (SLOT_H * GROWTH);
            const dx = Math.abs(s.x - x);
            const dy = Math.abs(s.y - y);
            return dx < (SLOT_W*GROWTH)/2 + (w)/2 + MARGIN && dy < (SLOT_H*GROWTH)/2 + (h)/2 + MARGIN;
        });
    }

    function randomPosition(excludeIndex){
        for(let a=0;a<MAX_ATTEMPTS;a++){
            const x = 5 + Math.random()*90;
            const y = 5 + Math.random()*90;
            
            if (isInForbiddenZone(x, y)) continue;

            if(!collidesWith(x, y, excludeIndex)) return { x, y };
        }
        return null;
    }

    slotsData.length = SLOT_COUNT;
    const slotEls = [];

    const pool = shuffled(wishes);
    let cursor = 0;
    function nextWish(){
        if(cursor >= pool.length){
            pool.splice(0, pool.length, ...shuffled(wishes));
            cursor = 0;
        }
        return pool[cursor++];
    }

    for(let i=0;i<SLOT_COUNT;i++){
        const pos = randomPosition(i);
        if (!pos) continue; // Skip if no position found
        slotsData[i] = pos;

        const slotEl = document.createElement('div');
        slotEl.className = 'slot';
        slotEl.style.setProperty('--x', pos.x + '%');
        slotEl.style.setProperty('--y', pos.y + '%');
        slotEl.style.setProperty('--slotW', SLOT_W + 'vw');
        slotEl.style.setProperty('--slotH', SLOT_H + 'vh');
        scene.appendChild(slotEl);
        slotEls.push(slotEl);

        const wishEl = document.createElement('div');
        wishEl.className = 'wish';

        const duration = 10 + Math.random()*6;
        const delay = -(Math.random()*duration);
        const zStart = -(360 + Math.random()*120);
        const sStart = .38 + Math.random()*.12;

        wishEl.style.setProperty('--zStart', zStart + 'px');
        wishEl.style.setProperty('--sStart', sStart);
        wishEl.style.animationDuration = duration + 's';
        wishEl.style.animationDelay = delay + 's';
        wishEl.textContent = nextWish();

        wishEl.addEventListener('animationiteration', ()=>{
            wishEl.textContent = nextWish();

            const newPos = randomPosition(i);
            if(newPos){
                slotsData[i] = newPos;
                slotEl.style.setProperty('--x', newPos.x + '%');
                slotEl.style.setProperty('--y', newPos.y + '%');
            }
        });

        slotEl.appendChild(wishEl);
    }
});
