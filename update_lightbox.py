import re

with open('f:/Projects/vcm_30y-main/assets/js/flipbook-init.js', 'r', encoding='utf-8') as f:
    text = f.read()

old_click = r'''        // Prevent StPageFlip from flipping/dragging when interacting with images
        window.addEventListener('pointerdown', (e) => {
            if (e.target.tagName === 'IMG' && e.target.closest('.custom-flow-page')) {
                e.stopPropagation();
            }
        }, true);

        window.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG' && e.target.closest('.custom-flow-page')) {
                e.stopPropagation();
                e.preventDefault();
                lightboxImg.src = e.target.src;
                lightbox.style.display = "flex";
                setTimeout(() => lightbox.classList.add("active"), 10);
            }
        }, true);'''

new_click = r'''        // Prevent StPageFlip from flipping/dragging when interacting with images
        const stopFlip = (e) => {
            if (e.target.tagName === 'IMG' && e.target.closest('.custom-flow-page')) {
                e.stopPropagation();
            }
        };
        ['mousedown', 'touchstart', 'pointerdown', 'mouseup', 'touchend', 'pointerup'].forEach(evt => {
            window.addEventListener(evt, stopFlip, true);
        });

        window.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG' && e.target.closest('.custom-flow-page')) {
                e.stopPropagation();
                e.preventDefault();
                lightboxImg.src = e.target.src;
                lightbox.style.display = "flex";
                setTimeout(() => lightbox.classList.add("active"), 10);
            }
        }, true);'''

text = text.replace(old_click, new_click)

with open('f:/Projects/vcm_30y-main/assets/js/flipbook-init.js', 'w', encoding='utf-8') as f:
    f.write(text)
