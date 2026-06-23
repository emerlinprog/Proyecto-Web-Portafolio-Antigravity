param(
    [Parameter(Mandatory = $true)]
    [string]$Source,

    [string]$TempPath = "$env:TEMP\codex-docx-temp.docx"
)

Add-Type -AssemblyName System.IO.Compression.FileSystem

Copy-Item -Path $Source -Destination $TempPath -Force
$zip = [System.IO.Compression.ZipFile]::OpenRead($TempPath)

try {
    $entry = $zip.Entries | Where-Object { $_.FullName -eq "word/document.xml" }
    if (-not $entry) {
        throw "No se encontro word/document.xml dentro del archivo DOCX."
    }

    $stream = $entry.Open()
    $reader = New-Object IO.StreamReader($stream)

    try {
        $xmlStr = $reader.ReadToEnd()
    }
    finally {
        $reader.Close()
    }
}
finally {
    $zip.Dispose()
    if (Test-Path $TempPath) {
        Remove-Item -Path $TempPath -Force
    }
}

$text = $xmlStr -replace "<w:p[^>]*>", "`n" -replace "<[^>]+>", ""
Write-Output $text
