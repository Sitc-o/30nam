import re
def replace_commit():
    with open('f:/Projects/vcm_30y-main/assets/js/flipbook-init.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_str = "function commitPage() {"
    end_str = "currentPage.innerHTML = '';"
    
    start_idx = content.find(start_str)
    end_idx = content.find(end_str, start_idx) + len(end_str)
    
    new_commit = r'''function commitPage() {
            const isRightSide = (pageCount % 2 === 0);
            let extraStyles = 'display: block !important;';
            if (currentPage.childNodes.length === 1 && currentPage.firstChild.nodeType === 1 && currentPage.firstChild.classList.contains('photo-grid-container')) {
                extraStyles = 'display: flex !important; flex-direction: column; justify-content: center;';
            }
            pagesHTML += `
                <div class="page ${isRightSide ? 'scrapbook-right' : 'scrapbook-left'} custom-flow-page">
                    <div class="page-content scrapbook-desc" style="overflow: hidden; width: 100%; height: 100%; text-align: justify; box-sizing:border-box; ${extraStyles}">
                        ${currentPage.innerHTML}
                    </div>
                    <div class="page-number" style="position:absolute; bottom:15px; ${isRightSide ? 'right:20px;' : 'left:20px;'} font-size:0.9rem; color:#888;">${pageCount + 1}</div>
                </div>
            `;
            currentPage.innerHTML = '';'''
            
    content = content[:start_idx] + new_commit + content[end_idx:]
    with open('f:/Projects/vcm_30y-main/assets/js/flipbook-init.js', 'w', encoding='utf-8') as f:
        f.write(content)

replace_commit()
