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

$siteCssReplacements = @{
    ".simple-nav a{font-family:'FS Magistral',sans-serif;font-size:25px;color:var(--ink);text-decoration:none}" = ".simple-nav a{font-family:'FS Magistral',sans-serif;font-size:25px;color:rgba(255,255,255,0.8);text-decoration:none}"
    ".simple-nav a.active,.simple-nav a:hover{color:var(--red)}" = ".simple-nav a.active,.simple-nav a:hover{color:#ffffff}"
}
Replace-InFile -FilePath "f:\Projects\vcm_30y-main\assets\css\site.css" -Replacements $siteCssReplacements
