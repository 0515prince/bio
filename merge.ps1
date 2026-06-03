# merge.ps1 - Merge all chapter questions into index.html
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$dir = "C:\Users\Princ\.gemini\antigravity\scratch\biology-quiz-app"

# Read question arrays (extract just the array content)
function Get-QArray($file) {
    $content = [System.IO.File]::ReadAllText("$dir\$file", [System.Text.Encoding]::UTF8)
    $content = $content -replace '^\s*const\s+CH\d+_QUESTIONS\s*=\s*\[', ''
    $content = $content -replace '\];\s*$', ''
    return $content.Trim()
}

$ch1 = Get-QArray "ch1_questions.js"
$ch2 = Get-QArray "ch2_questions.js"
$ch3 = Get-QArray "ch3_questions.js"
$ch4 = Get-QArray "ch4_questions.js"
$ch5 = Get-QArray "ch5_questions.js"
$ch6 = Get-QArray "ch6_questions.js"

# Read current index.html
$html = [System.IO.File]::ReadAllText("$dir\index.html", [System.Text.Encoding]::UTF8)

# Build new ALL_QUESTIONS block
$newQ = "const ALL_QUESTIONS = {`n  1: [`n$ch1`n  ],`n  2: [`n$ch2`n  ],`n  3: [`n$ch3`n  ],`n  4: [`n$ch4`n  ],`n  5: [`n$ch5`n  ],`n  6: [`n$ch6`n  ]`n};"

# Replace old ALL_QUESTIONS
$html = $html -replace '(?s)const ALL_QUESTIONS = \{.*?\n\};', $newQ

# Update counts in text
$html = $html -replace '120\+ Objective Questions', '720+ Objective Questions'

# Write
[System.IO.File]::WriteAllText("$dir\index.html", $html, (New-Object System.Text.UTF8Encoding $false))

Write-Host "Merge complete!"
$size = (Get-Item "$dir\index.html").Length / 1KB
Write-Host "File size: $([math]::Round($size, 1)) KB"
