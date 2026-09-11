with open('gioi-thieu.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('<div class="modal-metrics">', '<div class="modal-metrics" id="modal-metrics">')
html = html.replace('<div class="modal-scrollable">', '<div class="modal-scrollable" id="modal-desc">')

with open('gioi-thieu.html', 'w', encoding='utf-8') as f:
    f.write(html)
