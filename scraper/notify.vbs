Set objArgs = WScript.Arguments
If objArgs.Count < 2 Then
    WScript.Quit 1
End If

strTitle = objArgs(0)
strMessage = objArgs(1)

Set objShell = CreateObject("WScript.Shell")
strCommand = "powershell -WindowStyle Hidden -Command ""Add-Type -AssemblyName System.Windows.Forms; $n = New-Object System.Windows.Forms.NotifyIcon; $n.Icon = [System.Drawing.SystemIcons]::Information; $n.BalloonTipTitle = '" & Replace(strTitle, "'", "''") & "'; $n.BalloonTipText = '" & Replace(strMessage, "'", "''") & "'; $n.BalloonTipIcon = 'Info'; $n.Visible = $true; $n.ShowBalloonTip(5000); Start-Sleep -Seconds 6; $n.Dispose()"""
objShell.Run strCommand, 0, False

WScript.Quit 0
