param(
    [string]$Title = "LogiMoPro スクレイパー",
    [string]$Message = "新しい配送データが見つかりました！"
)

Add-Type -AssemblyName System.Windows.Forms

$notify = New-Object System.Windows.Forms.NotifyIcon
$notify.Icon = [System.Drawing.SystemIcons]::Information
$notify.BalloonTipTitle = $Title
$notify.BalloonTipText = $Message
$notify.BalloonTipIcon = [System.Windows.Forms.ToolTipIcon]::Info
$notify.Visible = $true
$notify.ShowBalloonTip(5000)

Start-Sleep -Seconds 6
$notify.Dispose()
