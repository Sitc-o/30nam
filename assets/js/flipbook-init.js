document.addEventListener('DOMContentLoaded', async function () {
        function getOpenTags(html) {
            const stack = [];
            const regex = /<\/?([a-z0-9]+)[^>]*>/gi;
            let match;
            while ((match = regex.exec(html)) !== null) {
                const tagFull = match[0];
                const tagName = match[1].toLowerCase();
                if (['br', 'hr', 'img'].includes(tagName)) continue;
                if (tagFull.startsWith('</')) {
                    if (stack.length > 0 && stack[stack.length - 1].tag === tagName) {
                        stack.pop();
                    }
                } else {
                    stack.push({ tag: tagName, full: tagFull });
                }
            }
            return stack.map(s => s.full).join('');
        }

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
        let isFirstParagraph = true; // Theo dõi đoạn văn đầu tiên sau mỗi tiêu đề
        window.bookTOC = [];

        function commitPage() {
            const isRightSide = (pageCount % 2 === 0);
            pagesHTML += `
                <div class="page ${isRightSide ? 'scrapbook-right' : 'scrapbook-left'} custom-flow-page">
                    <div class="page-content scrapbook-desc" style="padding: 40px 35px 40px 40px !important; overflow: hidden; width: 100%; height: 100%; text-align: justify; box-sizing:border-box; display: block !important;">
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

            // KÍCH HOẠT NGẮT TRANG THỦ CÔNG
            if (blockText === '[ngat-trang]' || blockText === '---') {
                if (currentPage.childNodes.length > 0) {
                    commitPage();
                }
                continue;
            }

            // ĐỌC THẺ ĐỊNH DẠNG (Có thể dùng kết hợp nhiều thẻ)
            let isNoIndent = false;
            let isCenter = false;
            let isRight = false;
            let isSignature = false;
            let isDropCap = false;
            
            while (true) {
                if (blockText.startsWith('[sat-le]')) {
                    blockText = blockText.substring(8).trim();
                    isNoIndent = true;
                } else if (blockText.startsWith('[giua]')) {
                    blockText = blockText.substring(6).trim();
                    isCenter = true;
                } else if (blockText.startsWith('[phai]')) {
                    blockText = blockText.substring(6).trim();
                    isRight = true;
                } else if (blockText.startsWith('[ky-ten]')) {
                    blockText = blockText.substring(8).trim();
                    isSignature = true;
                } else if (blockText.startsWith('[chu-to]')) {
                    blockText = blockText.substring(8).trim();
                    isDropCap = true;
                } else {
                    break;
                }
            }

            if (blockText.startsWith('## ') || blockText.startsWith('# ')) {
                isFirstParagraph = true; // Tiêu đề mới -> Đoạn văn tiếp theo sẽ xem xét Drop Cap
                let alignStyle = "";
                if (isCenter) alignStyle = "text-align: center;";
                if (isRight) alignStyle = "text-align: right;";
                
                // Xác định cấp độ tiêu đề
                const isHeading2 = blockText.startsWith('## ');
                const headingText = blockText.replace(isHeading2 ? '## ' : '# ', '').replace(/\n/g, '<br>');
                
                // THÊM VÀO MỤC LỤC
                let rawTitle = headingText.replace(/<br>/g, ' ');
                window.bookTOC.push({ level: isHeading2 ? 2 : 1, title: rawTitle, pageIndex: pageCount + 2 });
                
                // H1 (Phần) to hơn, có gạch đôi. H2 (Chương) nhỏ hơn, không gạch.
                const fontSize = isHeading2 ? "1.4rem" : "1.6rem";
                const dividerHTML = isHeading2 ? "" : `<div class="scrapbook-divider" style="width: 60%; margin: 15px auto 30px auto; border-top: 1px solid #c92a2a; border-bottom: 2px solid #ee0033; height: 4px; background: transparent;"></div>`;
                
                const hHTML = `
                    <div class="scrapbook-year" style="font-size:${fontSize}; line-height:1.4; margin-top:20px; margin-bottom:15px; color:#ee0033; font-weight:bold; font-family:'Times New Roman', Times, serif; ${alignStyle}">
                        ${headingText}
                    </div>
                    ${dividerHTML}
                `;
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
                let lines = [];
                // Nếu có định dạng đặc biệt hoặc là tiểu mục (in đậm), ta gom chung thành 1 đoạn văn chứa <br>
                if (isNoIndent || isCenter || isRight || isSignature || blockText.startsWith('<b>')) {
                    lines = [blockText.replace(/\n/g, '<br>')];
                } else {
                    // Nếu là đoạn văn bình thường, mỗi dòng xuống dòng sẽ tạo thành 1 thẻ <p> riêng để lùi đầu dòng!
                    lines = blockText.split('\n');
                }

                for (let i = 0; i < lines.length; i++) {
                    const pText = lines[i].trim();
                    if (!pText) continue;

                    const pNode = document.createElement('p');
                    // Chỉ cách đoạn (margin-bottom: 12px) nếu đây là dòng cuối cùng của block (nghĩa là sau đó có Enter 2 lần)
                    // Nếu ấn Enter 1 lần (dòng giữa block), margin-bottom sẽ bằng 0
                    let marginBottom = (i === lines.length - 1) ? "12px" : "0px";
                    pNode.style.cssText = `text-indent:1.5rem; margin-top:0px; margin-bottom:${marginBottom}; line-height:1.6; color:#333;`;
                
                if (isNoIndent) pNode.style.textIndent = "0";
                if (isCenter) {
                    pNode.style.textIndent = "0";
                    pNode.style.textAlign = "center";
                }
                if (isRight) {
                    pNode.style.textIndent = "0";
                    pNode.style.textAlign = "right";
                }
                if (isSignature) {
                    pNode.style.textIndent = "0";
                    pNode.style.textAlign = "center";
                    pNode.style.marginTop = "30px";
                    pNode.style.marginBottom = "30px";
                    pNode.style.fontWeight = "500";
                }

                pNode.innerHTML = pText;
                
                let applyDropCap = false;
                
                if (isDropCap && i === 0) {
                    applyDropCap = true;
                } else if (isFirstParagraph) {
                    // Tự động Drop Cap cho đoạn văn đầu tiên sau Tiêu đề
                    if (!isNoIndent && !isCenter && !isRight && !isSignature && !pText.startsWith('<b>') && !pText.startsWith('1.') && !pText.startsWith('2.') && !pText.startsWith('3.')) {
                        applyDropCap = true;
                    }
                    isFirstParagraph = false;
                }

                if (applyDropCap) {
                    pNode.classList.add('drop-cap-p');
                    pNode.style.textIndent = "0"; // Không lùi đầu dòng cho đoạn có drop-cap
                }

                measureBox.appendChild(pNode.cloneNode(true));
                if (measureBox.scrollHeight <= MAX_HEIGHT) {
                    currentPage.appendChild(pNode.cloneNode(true));
                } else {
                    measureBox.removeChild(measureBox.lastChild);
                    
                    let words = pText.split(' ');
                    let currentP_measure = pNode.cloneNode();
                    measureBox.appendChild(currentP_measure);
                    
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
                    
                    // CHỐNG RỚT CHỮ (Orphan) VÀ CẮT NGANG TIỂU MỤC
                    // Lưu ý: isDropCap (thẻ [chu-to]) là đoạn văn dài bình thường, bắt buộc phải cho phép cắt trang!
                    let isSubheading = pText.startsWith('<b>') || isSignature;
                    if ((isSubheading || bestFit < 10) && currentPage.childNodes.length > 0) {
                        measureBox.removeChild(currentP_measure);
                        commitPage();
                        i--; // Lùi lại 1 bước để xử lý lại chính đoạn văn này trên trang giấy mới
                        continue;
                    }

                    if (bestFit === 0) bestFit = 1; 
                    
                    let currentP_real = pNode.cloneNode();
                    currentPage.appendChild(currentP_real);
                    
                    let bestFitText1 = words.slice(0, bestFit).join(' ');
                    currentP_measure.innerHTML = bestFitText1;
                    currentP_real.innerHTML = bestFitText1;
                    commitPage();
                    
                    let remainingWords = words.slice(bestFit);
                    let openTags1 = getOpenTags(bestFitText1);
                    if (remainingWords.length > 0 && openTags1) {
                        remainingWords[0] = openTags1 + remainingWords[0];
                    }
                    while (remainingWords.length > 0) {
                        currentP_measure = pNode.cloneNode();
                        currentP_real = pNode.cloneNode();
                        
                        // Đảm bảo phần chữ bị cắt sang trang sau KHÔNG bị dính drop-cap
                        currentP_measure.classList.remove('drop-cap-p');
                        currentP_real.classList.remove('drop-cap-p');

                        // Bỏ lùi đầu dòng vì đây là đoạn đang viết dở bị vắt sang trang
                        currentP_measure.style.textIndent = "0";
                        currentP_real.style.textIndent = "0";

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
                        if (bestFit === 0) bestFit = 1; 
                        
                        let bestFitText2 = remainingWords.slice(0, bestFit).join(' ');
                        currentP_measure.innerHTML = bestFitText2;
                        currentP_real.innerHTML = bestFitText2;
                        commitPage();
                        
                        let nextRemaining = remainingWords.slice(bestFit);
                        let openTags2 = getOpenTags(bestFitText2);
                        if (nextRemaining.length > 0 && openTags2) {
                            nextRemaining[0] = openTags2 + nextRemaining[0];
                        }
                        remainingWords = nextRemaining;
                    }
                }
                } // Đóng vòng lặp for
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
        // HI?N TH? TOOLBAR SAU KHI LOAD XONG
        const toolbar = document.getElementById('book-toolbar');
        if (toolbar) toolbar.style.opacity = '1';

        // X? L� M?C L?C
        const btnToc = document.getElementById('btn-toc');
        const panelToc = document.getElementById('panel-toc');
        const btnTocClose = document.getElementById('toc-close');
        const tocList = document.getElementById('toc-list');
        const btnSearch = document.getElementById('btn-search');
        const panelSearch = document.getElementById('panel-search');

        function closeAllPanels() {
            panelToc.style.opacity = '0';
            panelToc.style.pointerEvents = 'none';
            panelToc.style.transform = 'translateX(-50%) translateY(20px)';
            panelSearch.style.opacity = '0';
            panelSearch.style.pointerEvents = 'none';
            panelSearch.style.transform = 'translateX(-50%) translateY(20px)';
        }

        btnToc.addEventListener('click', () => {
            if (panelToc.style.opacity === '1') {
                closeAllPanels();
            } else {
                closeAllPanels();
                // Render TOC
                tocList.innerHTML = '';
                window.bookTOC.forEach(item => {
                    let li = document.createElement('li');
                    li.style.padding = '8px 0';
                    li.style.borderBottom = '1px dashed #ddd';
                    li.style.cursor = 'pointer';
                    li.style.display = 'flex';
                    li.style.justifyContent = 'space-between';
                    if (item.level === 1) {
                        li.style.fontWeight = 'bold';
                        li.style.color = '#ee0033';
                    } else {
                        li.style.paddingLeft = '20px';
                        li.style.color = '#333';
                    }
                    li.innerHTML = `<span>${item.title}</span><span style="color:#999; font-size:0.9rem;">Trang ${item.pageIndex + 1}</span>`;
                    li.addEventListener('click', () => {
                        window.bookPageFlip.turnToPage(item.pageIndex);
                        closeAllPanels();
                    });
                    tocList.appendChild(li);
                });
                
                panelToc.style.opacity = '1';
                panelToc.style.pointerEvents = 'auto';
                panelToc.style.transform = 'translateX(-50%) translateY(0)';
            }
        });

        btnTocClose.addEventListener('click', closeAllPanels);

        // X? L� T�M KI?M (VS CODE STYLE)
        const searchInput = document.getElementById('search-input');
        const searchCount = document.getElementById('search-count');
        const btnSearchUp = document.getElementById('search-up');
        const btnSearchDown = document.getElementById('search-down');
        const btnSearchClose = document.getElementById('search-close');
        
        let searchResults = [];
        let currentSearchIndex = -1;

        function clearHighlights() {
            document.querySelectorAll('mark.search-highlight').forEach(mark => {
                const parent = mark.parentNode;
                parent.replaceChild(document.createTextNode(mark.textContent), mark);
                parent.normalize();
            });
            searchResults = [];
            currentSearchIndex = -1;
            searchCount.textContent = '0 / 0';
        }

        function goToMatch(index) {
            if (searchResults.length === 0) return;
            if (currentSearchIndex >= 0 && searchResults[currentSearchIndex]) {
                searchResults[currentSearchIndex].style.backgroundColor = '#ffeb3b'; // yellow
            }
            
            currentSearchIndex = index;
            const target = searchResults[currentSearchIndex];
            target.style.backgroundColor = '#ff9800'; // orange (active)
            searchCount.textContent = `${currentSearchIndex + 1} / ${searchResults.length}`;
            
            let pageIdx = parseInt(target.dataset.page);
            if (window.bookPageFlip) {
                window.bookPageFlip.turnToPage(pageIdx);
            }
        }

        function performSearch(query) {
            clearHighlights();
            if (!query.trim()) return;

            // Lấy tất cả các trang
            const pages = document.querySelectorAll('.page');
            const regex = new RegExp(query, 'gi');

            pages.forEach((page, idx) => {
                // page index trong DOM của .page chính là số trang thật của bookPageFlip!
                let pageIndex = idx; 

                const walker = document.createTreeWalker(page, NodeFilter.SHOW_TEXT, null, false);
                const nodesToReplace = [];
                let node;
                while (node = walker.nextNode()) {
                    if (regex.test(node.nodeValue)) {
                        nodesToReplace.push(node);
                    }
                }

                nodesToReplace.forEach(node => {
                    const matchText = node.nodeValue;
                    const fragment = document.createDocumentFragment();
                    
                    let lastIdx = 0;
                    let m;
                    regex.lastIndex = 0;
                    while ((m = regex.exec(matchText)) !== null) {
                        if (m.index > lastIdx) {
                            fragment.appendChild(document.createTextNode(matchText.substring(lastIdx, m.index)));
                        }
                        const mark = document.createElement('mark');
                        mark.className = 'search-highlight';
                        mark.style.backgroundColor = '#ffeb3b';
                        mark.style.color = 'black';
                        mark.style.padding = '0';
                        mark.textContent = m[0];
                        mark.dataset.page = pageIndex;
                        fragment.appendChild(mark);
                        searchResults.push(mark);
                        lastIdx = regex.lastIndex;
                    }
                    if (lastIdx < matchText.length) {
                        fragment.appendChild(document.createTextNode(matchText.substring(lastIdx)));
                    }
                    node.parentNode.replaceChild(fragment, node);
                });
            });
            
            if (searchResults.length > 0) {
                goToMatch(0);
            } else {
                searchCount.textContent = '0 / 0';
            }
        }

        btnSearch.addEventListener('click', () => {
            if (panelSearch.style.opacity === '1') {
                closeAllPanels();
            } else {
                closeAllPanels();
                panelSearch.style.opacity = '1';
                panelSearch.style.pointerEvents = 'auto';
                panelSearch.style.transform = 'translateX(-50%) translateY(0)';
                searchInput.focus();
            }
        });

        btnSearchClose.addEventListener('click', () => {
            closeAllPanels();
            clearHighlights();
        });

        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value);
            }, 500);
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (searchResults.length > 0) {
                    let nextIdx = (currentSearchIndex + 1) % searchResults.length;
                    if (e.shiftKey) {
                        nextIdx = (currentSearchIndex - 1 + searchResults.length) % searchResults.length;
                    }
                    goToMatch(nextIdx);
                }
            }
        });

        btnSearchDown.addEventListener('click', () => {
            if (searchResults.length > 0) {
                goToMatch((currentSearchIndex + 1) % searchResults.length);
            }
        });

        btnSearchUp.addEventListener('click', () => {
            if (searchResults.length > 0) {
                goToMatch((currentSearchIndex - 1 + searchResults.length) % searchResults.length);
            }
        });

        
        // Hiện sách lên mượt mà sau khi đã dàn trang và setup xong xuôi
        const flipContainerOuter = document.querySelector('.container-flipbook');
        if (flipContainerOuter) {
            flipContainerOuter.style.opacity = '1';
        }

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
