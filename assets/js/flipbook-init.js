document.addEventListener('DOMContentLoaded', async function () {
    const flipbookEl = document.getElementById('flipbook');
    const PageFlipClass = (typeof StPageFlip !== 'undefined') ? StPageFlip.PageFlip : (typeof St !== 'undefined' ? St.PageFlip : null);
    if (!flipbookEl || !PageFlipClass) return;
    const innerCover = flipbookEl.querySelectorAll('.page-cover-inner')[0];

    try {
        const response = await fetch('assets/content/bien nien su all.txt');
        const rawText = await response.text();
        const blocks = rawText.split(/\n\s*\n/).filter(b => b.trim() !== '');

        const measureBox = document.createElement('div');
        // IMPORTANT: Removed .page-content which might force height: 100% or min-height
        measureBox.style.cssText = 'position:absolute; top:-9999px; left:-9999px; width:475px; height:auto; padding:0; visibility:hidden; font-family:"Times New Roman", Times, serif; font-size:1.05rem; line-height:1.6;';
        document.body.appendChild(measureBox);

        const MAX_HEIGHT = 653;
        let pagesHTML = '';
        let currentPage = document.createElement('div');
        let pageCount = 0;

        function commitPage() {
            const isRightSide = (pageCount % 2 === 0);
            pagesHTML += `
                <div class="page ${isRightSide ? 'scrapbook-right' : 'scrapbook-left'} custom-flow-page">
                    <div class="page-content scrapbook-desc" style="padding: 40px 35px 40px 40px; overflow: hidden; width: 100%; height: 100%; text-align: justify; box-sizing:border-box;">
                        ${currentPage.innerHTML}
                    </div>
                    <div class="page-number" style="position:absolute; bottom:15px; ${isRightSide ? 'right:20px;' : 'left:20px;'} font-size:0.9rem; color:#888;">${pageCount + 1}</div>
                </div>
            `;
            currentPage.innerHTML = '';
            measureBox.innerHTML = '';
            pageCount++;
        }

        for (let blockText of blocks) {
            blockText = blockText.trim();
            if (blockText.startsWith('# ')) {
                const hHTML = `<div class="scrapbook-year" style="font-size:2.2rem; margin-top:20px; margin-bottom:15px; color:#ee0033; font-weight:bold; font-family:sans-serif;">${blockText.replace('# ', '')}</div><div class="scrapbook-divider" style="height:2px; background:#c92a2a; margin-bottom:20px;"></div>`;
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = hHTML;
                Array.from(tempDiv.childNodes).forEach(n => {
                    measureBox.appendChild(n.cloneNode(true));
                    if (measureBox.scrollHeight > MAX_HEIGHT) {
                        measureBox.removeChild(measureBox.lastChild);
                        commitPage();
                        measureBox.appendChild(n.cloneNode(true));
                    }
                    currentPage.appendChild(n.cloneNode(true));
                });
            } else if (blockText.startsWith('[anh:') && blockText.endsWith(']')) {
                const src = blockText.replace('[anh:', '').replace(']', '').trim();
                const imgHTML = `<div class="scrapbook-photo-wrapper" style="margin:20px 0; text-align:center;"><img src="${src}" style="max-height:400px; max-width:100%; border-radius:4px;" /></div>`;
                
                await new Promise(r => {
                    const img = new Image();
                    img.onload = img.onerror = r;
                    img.src = src;
                });
                
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = imgHTML;
                let node = tempDiv.firstChild;
                measureBox.appendChild(node.cloneNode(true));
                if (measureBox.scrollHeight > MAX_HEIGHT) {
                    measureBox.removeChild(measureBox.lastChild);
                    commitPage();
                    measureBox.appendChild(node.cloneNode(true));
                }
                currentPage.appendChild(node.cloneNode(true));
            } else {
                const pText = blockText.replace(/\n/g, '<br>');
                const pNode = document.createElement('p');
                pNode.style.cssText = "text-indent:1.5rem; margin-bottom:12px; line-height:1.6; color:#333;";
                pNode.innerHTML = pText;

                measureBox.appendChild(pNode.cloneNode(true));
                if (measureBox.scrollHeight <= MAX_HEIGHT) {
                    currentPage.appendChild(pNode.cloneNode(true));
                } else {
                    measureBox.removeChild(measureBox.lastChild);
                    let words = pText.split(' ');
                    let currentP_measure = pNode.cloneNode();
                    let currentP_real = pNode.cloneNode();
                    measureBox.appendChild(currentP_measure);
                    currentPage.appendChild(currentP_real);

                    let left = 0, right = words.length - 1, bestFit = 0;
                    while (left <= right) {
                        let mid = Math.floor((left+right)/2);
                        currentP_measure.innerHTML = words.slice(0, mid).join(' ');
                        if (measureBox.scrollHeight <= MAX_HEIGHT) {
                            bestFit = mid;
                            left = mid + 1;
                        } else {
                            right = mid - 1;
                        }
                    }
                    if (bestFit === 0) bestFit = 1; // Prevent infinite loop
                    
                    currentP_measure.innerHTML = words.slice(0, bestFit).join(' ');
                    currentP_real.innerHTML = words.slice(0, bestFit).join(' ');
                    commitPage();
                    
                    let remainingWords = words.slice(bestFit);
                    while (remainingWords.length > 0) {
                        currentP_measure = pNode.cloneNode();
                        currentP_real = pNode.cloneNode();
                        measureBox.appendChild(currentP_measure);
                        currentPage.appendChild(currentP_real);
                        
                        currentP_measure.innerHTML = remainingWords.join(' ');
                        if (measureBox.scrollHeight <= MAX_HEIGHT) {
                            currentP_real.innerHTML = remainingWords.join(' ');
                            break;
                        }
                        
                        left = 0; right = remainingWords.length - 1; bestFit = 0;
                        while (left <= right) {
                            let mid = Math.floor((left+right)/2);
                            currentP_measure.innerHTML = remainingWords.slice(0, mid).join(' ');
                            if (measureBox.scrollHeight <= MAX_HEIGHT) {
                                bestFit = mid;
                                left = mid + 1;
                            } else {
                                right = mid - 1;
                            }
                        }
                        if (bestFit === 0) bestFit = 1; // Prevent infinite loop
                        
                        currentP_measure.innerHTML = remainingWords.slice(0, bestFit).join(' ');
                        currentP_real.innerHTML = remainingWords.slice(0, bestFit).join(' ');
                        commitPage();
                        remainingWords = remainingWords.slice(bestFit);
                    }
                }
            }
        }

        if (currentPage.childNodes.length > 0) commitPage();
        if (pageCount % 2 !== 0) commitPage();

        document.body.removeChild(measureBox);
        innerCover.insertAdjacentHTML('afterend', pagesHTML);

        const pageFlip = new PageFlipClass(flipbookEl, {
            width: 550, height: 733, size: "stretch", minWidth: 300, maxWidth: 550, minHeight: 400, maxHeight: 700, maxShadowOpacity: 0.02, showCover: true, usePortrait: true, mobileScrollSupport: false, flippingTime: 700
        });

        pageFlip.loadFromHTML(document.querySelectorAll('.page'));
        window.bookPageFlip = pageFlip;

        // ==========================================
        // TÍNH NĂNG CINEMATIC CAMERA (TRƯỢT KHUNG ĐỒNG THỜI)
        // ==========================================
        let predictedTarget = null;

        function getShiftAmount() {
            const wrapper = document.querySelector('.stf__wrapper');
            return wrapper ? wrapper.offsetWidth / 4 : 0;
        }

        const flipContainer = document.querySelector('.container-flipbook');
        if (flipContainer) {
            flipContainer.addEventListener('pointerdown', (e) => {
                const pageIndex = pageFlip.getCurrentPageIndex();
                const rect = flipContainer.getBoundingClientRect();
                const isClickLeft = (e.clientX - rect.left) < (rect.width / 2);

                if (pageIndex === 0) {
                    predictedTarget = 'center';
                } else if (pageIndex >= pageFlip.getPageCount() - 1) {
                    predictedTarget = 'center';
                } else if (pageIndex <= 2 && isClickLeft) {
                    predictedTarget = 'left';
                } else if (pageIndex >= pageFlip.getPageCount() - 3 && !isClickLeft) {
                    predictedTarget = 'right';
                } else {
                    predictedTarget = 'center';
                }
            });
        }

        pageFlip.on('changeState', (e) => {
            const state = e.data; 
            const container = document.querySelector('.container-flipbook');
            if (!container) return;
            const shiftAmount = getShiftAmount();

            if (pageFlip.getOrientation() === 'portrait') {
                container.style.transform = `translateX(0px)`;
                return;
            }

            if (state === 'user_fold' || state === 'fold_corner' || state === 'flipping') {
                if (predictedTarget === 'center') {
                    container.style.transform = `translateX(0px)`;
                } else if (predictedTarget === 'left') {
                    container.style.transform = `translateX(-${shiftAmount}px)`;
                } else if (predictedTarget === 'right') {
                    container.style.transform = `translateX(${shiftAmount}px)`;
                }
            }

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

        window.addEventListener('resize', () => {
            setTimeout(() => {
                pageFlip.turnToPage(pageFlip.getCurrentPageIndex());
            }, 100);
        });

        setTimeout(() => {
            const shiftAmount = getShiftAmount();
            const container = document.querySelector('.container-flipbook');
            if (container) {
                container.style.transform = `translateX(-${shiftAmount}px)`;
            }
        }, 50);

        // ==========================================
        // SỰ KIỆN BÀN PHÍM (KEYBOARD NAVIGATION)
        // ==========================================
        document.addEventListener('keydown', (e) => {
            if (document.querySelector('.photo-lightbox.active')) return;
            if (e.key === 'ArrowLeft') {
                pageFlip.flipPrev();
            } else if (e.key === 'ArrowRight') {
                pageFlip.flipNext();
            }
        });

        const lightboxHTML = `<div id="photo-lightbox" class="photo-lightbox"><span class="lightbox-close">&times;</span><img id="lightbox-img" src="" alt=""></div>`;
        document.body.insertAdjacentHTML("beforeend", lightboxHTML);
        const lightbox = document.getElementById("photo-lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        
        document.body.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG' && e.target.closest('.custom-flow-page')) {
                e.stopPropagation();
                lightboxImg.src = e.target.src;
                lightbox.style.display = "flex";
                setTimeout(() => lightbox.classList.add("active"), 10);
            }
        });

        const closeLightbox = () => {
            lightbox.classList.remove("active");
            setTimeout(() => { lightbox.style.display = "none"; }, 300);
        };
        document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
        lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

    } catch (e) {
        console.error("Lỗi dàn trang:", e);
        alert("Lỗi quá trình dàn trang: " + e.message);
    }
});
