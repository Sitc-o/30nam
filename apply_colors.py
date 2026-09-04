import re

def update_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update assets/js/footer.js
footer_replacements = [
    ("background: linear-gradient(180deg, #f7f9fc, #fff);", "background: #ee0033;"),
    ("color: var(--muted, #717171);", "color: rgba(255,255,255,0.8);"),
    ("color: var(--ink, #202020);", "color: #ffffff;"),
    ("color: var(--red, #ee0033);", "color: #ffffff;")
]
update_file(r"f:\Projects\vcm_30y-main\assets\js\footer.js", footer_replacements)

# Update assets/css/simple-v12.css
simple_css_replacements = [
    ("background: rgba(244, 244, 244, .9);", "background: #ee0033;\n    color: #ffffff;"),
    (".simple-nav a:hover,\n.simple-nav a.active {\n    color: var(--red)\n}", ".simple-nav a:hover,\n.simple-nav a.active {\n    color: #ffffff; opacity: 1;\n}\n.simple-nav a {\n    color: rgba(255,255,255,0.8);\n}")
]
update_file(r"f:\Projects\vcm_30y-main\assets\css\simple-v12.css", simple_css_replacements)

# Update assets/css/site.css
site_css_replacements = [
    ("background:linear-gradient(180deg,#f7f9fc,#fff)", "background:#ee0033"),
    ("color:var(--muted)", "color:rgba(255,255,255,0.8)"),
    ("background:rgba(244,244,244,.9)", "background:#ee0033")
]
update_file(r"f:\Projects\vcm_30y-main\assets\css\site.css", site_css_replacements)

print("Done")
