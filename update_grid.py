import re

with open('f:/Projects/vcm_30y-main/assets/js/flipbook-init.js', 'r', encoding='utf-8') as f:
    text = f.read()

start_str = "let photosHTML = '';"
end_str = "await Promise.all(loadPromises);"

start_idx = text.find(start_str)
end_idx = text.find(end_str)

new_code = r'''let photosHTML = '';
                const count = photoBlocks.length;
                
                let gridStyle = '';
                if (count === 1) {
                    gridStyle = 'display:flex; flex-direction:column; align-items:center; justify-content:center;';
                } else if (count === 2) {
                    gridStyle = 'display:flex; flex-direction:column; align-items:center; gap:25px; justify-content:center;';
                } else {
                    gridStyle = 'display:flex; flex-wrap:wrap; gap:15px; justify-content:center; align-items:flex-start;';
                }
                
                const loadPromises = [];

                photoBlocks.forEach(pb => {
                    let src = pb;
                    let caption = '';
                    if (pb.includes('|')) {
                        const parts = pb.split('|');
                        src = parts[0].trim();
                        caption = parts.slice(1).join('|').trim();
                    }
                    
                    let captionHTML = caption ? `<div class="scrapbook-caption" style="font-size:0.9rem; font-style:italic; color:#666; margin-top:10px; font-family:'Times New Roman', serif; text-align:center;">${caption}</div>` : '';
                    
                    let itemWidth = 'auto';
                    let imgMaxHeight = '420px';
                    
                    if (count === 2) {
                        itemWidth = '100%';
                        imgMaxHeight = '275px';
                    } else if (count >= 3) {
                        itemWidth = 'calc(50% - 10px)';
                        imgMaxHeight = '220px';
                    }

                    photosHTML += `<div style="width:${itemWidth}; display:flex; flex-direction:column; align-items:center;">
                        <div class="scrapbook-photo-wrapper" style="margin:0; display:inline-block;">
                            <img src="${src}" style="max-height:${imgMaxHeight}; max-width:100%; border-radius:2px; box-shadow: 0 4px 8px rgba(0,0,0,0.15); display:block;" />
                        </div>
                        ${captionHTML}
                    </div>`;

                    loadPromises.push(new Promise(r => {
                        const img = new Image();
                        img.onload = img.onerror = r;
                        img.src = src;
                    }));
                });

                const finalHTML = `<div style="margin:25px 0; width:100%; ${gridStyle}">${photosHTML}</div>`;
                
                '''

if start_idx != -1 and end_idx != -1:
    text = text[:start_idx] + new_code + text[end_idx:]
    with open('f:/Projects/vcm_30y-main/assets/js/flipbook-init.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Success")
else:
    print("Strings not found")
