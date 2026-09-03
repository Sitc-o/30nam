import os
import re

dir_path = r"f:\Projects\vcm_30y-main"

files_to_fix = [
    "cong-nghe-in.html",
    "dich-vu-thuong-mai.html",
    "kinh-doanh-thiet-bi-so.html",
    "phan-phoi.html"
]

domain_tabs_css = """<style>
  .domain-stat-tab { cursor: pointer; transition: all 0.3s; }
  .domain-stat-tab:hover { background: #fdfdfd; }
  .domain-stat-tab.active { background: #fff5f6; position: relative; }
  .domain-stat-tab.active::after { content: ""; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--red); }
  .tab-content-pane { display: none; }
  .tab-content-pane.active { display: block; animation: fadeIn 0.4s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
</style>"""

minified_domain_tabs_css = "<style>.domain-stat-tab { cursor: pointer; transition: all 0.3s; }.domain-stat-tab:hover { background: #fdfdfd; }.domain-stat-tab.active { background: #fff5f6; position: relative; }.domain-stat-tab.active::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--red); }.tab-content-pane { display: none; }.tab-content-pane.active { display: block; animation: fadeIn 0.4s ease; }@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }</style>"


domain_tabs_js = """<script>
document.querySelectorAll('.domain-stat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.domain-stat-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content-pane').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
    });
});
</script>"""

minified_domain_tabs_js = "<script>document.addEventListener('DOMContentLoaded',()=>{const tabs=document.querySelectorAll('.domain-stat-tab');const panes=document.querySelectorAll('.tab-content-pane');tabs.forEach(tab=>{tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));panes.forEach(p=>p.classList.remove('active'));tab.classList.add('active');const target=document.getElementById(tab.dataset.target);if(target)target.classList.add('active')})})})</script>"

for filename in files_to_fix:
    filepath = os.path.join(dir_path, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Avoid duplicate tags
    if '<link rel="stylesheet" href="assets/css/domain-tabs.css">' in content:
        continue

    # Replace CSS
    if domain_tabs_css in content:
        content = content.replace(domain_tabs_css, "")
    elif minified_domain_tabs_css in content:
        content = content.replace(minified_domain_tabs_css, "")

    # Replace JS
    if domain_tabs_js in content:
        content = content.replace(domain_tabs_js, "")
    elif minified_domain_tabs_js in content:
        content = content.replace(minified_domain_tabs_js, "")

    # Add external links
    content = content.replace('</head>', '<link rel="stylesheet" href="assets/css/domain-tabs.css"></head>')
    content = content.replace('</body>', '<script src="assets/js/domain-tabs.js"></script></body>')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Fixed {filename}")
