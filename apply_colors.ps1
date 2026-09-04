function Replace-InFile {
    param(
        [string]$FilePath,
        [hashtable]$Replacements
    )
    $content = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)
    foreach ($old in $Replacements.Keys) {
        $new = $Replacements[$old]
        $content = $content.Replace($old, $new)
    }
    [System.IO.File]::WriteAllText($FilePath, $content, [System.Text.Encoding]::UTF8)
}

$footerReplacements = @{
    "background: linear-gradient(180deg, #f7f9fc, #fff);" = "background: #ee0033;"
    "color: var(--muted, #717171);" = "color: rgba(255,255,255,0.8);"
    "color: var(--ink, #202020);" = "color: #ffffff;"
    "color: var(--red, #ee0033);" = "color: #ffffff;"
}
Replace-InFile -FilePath "f:\Projects\vcm_30y-main\assets\js\footer.js" -Replacements $footerReplacements

$simpleV12Replacements = @{
    "background: rgba(244, 244, 244, .9);" = "background: #ee0033;`n    color: #ffffff;"
    ".simple-nav a:hover,`r`n.simple-nav a.active {`r`n    color: var(--red)`r`n}" = ".simple-nav a:hover,`n.simple-nav a.active {`n    color: #ffffff; opacity: 1;`n}`n.simple-nav a {`n    color: rgba(255,255,255,0.8);`n}"
    ".simple-nav a:hover,`n.simple-nav a.active {`n    color: var(--red)`n}" = ".simple-nav a:hover,`n.simple-nav a.active {`n    color: #ffffff; opacity: 1;`n}`n.simple-nav a {`n    color: rgba(255,255,255,0.8);`n}"
}
Replace-InFile -FilePath "f:\Projects\vcm_30y-main\assets\css\simple-v12.css" -Replacements $simpleV12Replacements

$siteCssReplacements = @{
    "background:linear-gradient(180deg,#f7f9fc,#fff)" = "background:#ee0033"
    "color:var(--muted)" = "color:rgba(255,255,255,0.8)"
    "background:rgba(244,244,244,.9)" = "background:#ee0033"
}
Replace-InFile -FilePath "f:\Projects\vcm_30y-main\assets\css\site.css" -Replacements $siteCssReplacements

Write-Host "Done"
