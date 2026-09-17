import re

with open('f:/Projects/vcm_30y-main/assets/js/flipbook-init.js', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace("const finalHTML = <div style=\"margin:15px 0; width:100%; \"></div>;", "const finalHTML = <div class=\"photo-grid-container\" style=\"margin:15px 0; width:100%; \"></div>;")

old_str = '''function commitPage() {
            const isRightSide = (pageCount % 2 === 0);
            pagesHTML += 
                <div class="page  custom-flow-page">
                    <div class="page-content scrapbook-desc" style="padding: 40px 35px 40px 40px !important; overflow: hidden; width: 100%; height: 100%; text-align: justify; box-sizing:border-box; display: block !important;">
                        
                    </div>'''

new_str = '''function commitPage() {
            const isRightSide = (pageCount % 2 === 0);
            
            let extraStyles = 'display: block !important;';
            if (currentPage.childNodes.length === 1 && currentPage.firstChild.nodeType === 1 && currentPage.firstChild.classList.contains('photo-grid-container')) {
                extraStyles = 'display: flex !important; flex-direction: column; justify-content: center;';
            }
            
            pagesHTML += 
                <div class="page  custom-flow-page">
                    <div class="page-content scrapbook-desc" style="padding: 40px 35px 40px 40px !important; overflow: hidden; width: 100%; height: 100%; text-align: justify; box-sizing:border-box; ">
                        
                    </div>'''

# Normalize spaces to match robustly
def normalize(s):
    return re.sub(r'\s+', '', s)

start_idx = -1
for m in re.finditer(r'function commitPage\(\)', text):
    test_str = text[m.start():m.start() + len(old_str) + 50]
    if normalize(old_str) in normalize(test_str):
        # find the exact bounds
        # wait, just reconstruct it
        idx1 = text.find("function commitPage() {")
        idx2 = text.find("", idx1)
        idx3 = text.find("</div>", idx2) + 6
        text = text[:idx1] + new_str + text[idx3:]
        break

with open('f:/Projects/vcm_30y-main/assets/js/flipbook-init.js', 'w', encoding='utf-8') as f:
    f.write(text)
