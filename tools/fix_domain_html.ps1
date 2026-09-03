$files = @("cong-nghe-in.html", "dich-vu-thuong-mai.html", "kinh-doanh-thiet-bi-so.html", "phan-phoi.html")

$css1 = @"
<style>
  .domain-stat-tab { cursor: pointer; transition: all 0.3s; }
  .domain-stat-tab:hover { background: #fdfdfd; }
  .domain-stat-tab.active { background: #fff5f6; position: relative; }
  .domain-stat-tab.active::after { content: ""; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--red); }
  .tab-content-pane { display: none; }
  .tab-content-pane.active { display: block; animation: fadeIn 0.4s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
</style>
"@

$css2 = "<style>.domain-stat-tab { cursor: pointer; transition: all 0.3s; }.domain-stat-tab:hover { background: #fdfdfd; }.domain-stat-tab.active { background: #fff5f6; position: relative; }.domain-stat-tab.active::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: var(--red); }.tab-content-pane { display: none; }.tab-content-pane.active { display: block; animation: fadeIn 0.4s ease; }@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }</style>"

$js1 = @"
<script>
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
</script>
"@

$js2 = "<script>document.addEventListener('DOMContentLoaded',()=>{const tabs=document.querySelectorAll('.domain-stat-tab');const panes=document.querySelectorAll('.tab-content-pane');tabs.forEach(tab=>{tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));panes.forEach(p=>p.classList.remove('active'));tab.classList.add('active');const target=document.getElementById(tab.dataset.target);if(target)target.classList.add('active')})})})</script>"

foreach ($file in $files) {
    $content = Get-Content $file -Raw -Encoding UTF8
    
    if ($content -notmatch '<link rel="stylesheet" href="assets/css/domain-tabs.css">') {
        $content = $content.Replace("</head>", "<link rel=`"stylesheet`" href=`"assets/css/domain-tabs.css`"></head>")
    }

    if ($content -notmatch '<script src="assets/js/domain-tabs.js"></script>') {
        $content = $content.Replace("</body>", "<script src=`"assets/js/domain-tabs.js`"></script></body>")
    }

    $content = $content.Replace($css1, "")
    $content = $content.Replace($css2, "")
    $content = $content.Replace($js1, "")
    $content = $content.Replace($js2, "")

    [IO.File]::WriteAllText((Join-Path (Get-Location) $file), $content, [Text.Encoding]::UTF8)
    Write-Host "Processed $file"
}
