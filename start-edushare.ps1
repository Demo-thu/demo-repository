# Chay API va trang admin trong dung terminal hien tai (terminal Visual Studio / Cursor).
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backend = Join-Path $root "backend"
$admin = Join-Path $root "Admin\frontend"

Write-Host ""
Write-Host "EduShare dang chay trong terminal nay." -ForegroundColor Cyan
Write-Host "API    http://localhost:3000/api"
Write-Host "Admin  http://localhost:5173/login"
Write-Host "Tai khoan  admin@edushare.vn"
Write-Host "Mat khau   EduShare@2024"
Write-Host "Nhan Ctrl+C de dung ca API va trang admin."
Write-Host ""

$script:children = @()

function Start-NpmDev {
  param(
    [string]$Label,
    [string]$WorkDir,
    [string]$ScriptName,
    [ConsoleColor]$Color
  )
  $psi = New-Object System.Diagnostics.ProcessStartInfo
  $psi.FileName = "cmd.exe"
  $psi.Arguments = "/d /s /c npm run $ScriptName"
  $psi.WorkingDirectory = $WorkDir
  $psi.UseShellExecute = $false
  $psi.RedirectStandardOutput = $true
  $psi.RedirectStandardError = $true
  $psi.CreateNoWindow = $true
  $proc = New-Object System.Diagnostics.Process
  $proc.StartInfo = $psi
  $proc.EnableRaisingEvents = $true
  [void]$proc.Start()
  $script:children += $proc.Id

  $onLine = {
    if ([string]::IsNullOrEmpty($EventArgs.Data)) { return }
    $meta = $Event.MessageData
    Write-Host ("[{0}] {1}" -f $meta.Label, $EventArgs.Data) -ForegroundColor $meta.Color
  }
  $metaOut = @{ Label = $Label; Color = $Color }
  Register-ObjectEvent -InputObject $proc -EventName OutputDataReceived -MessageData $metaOut -Action $onLine | Out-Null
  Register-ObjectEvent -InputObject $proc -EventName ErrorDataReceived -MessageData $metaOut -Action $onLine | Out-Null
  $proc.BeginOutputReadLine()
  $proc.BeginErrorReadLine()
  return $proc
}

function Stop-Children {
  foreach ($procId in $script:children) {
    & taskkill.exe /PID $procId /T /F 2>$null | Out-Null
  }
}

$stop = $false
$null = [Console]::add_CancelKeyPress({
  param($sender, $eventArgs)
  $eventArgs.Cancel = $true
  $script:stop = $true
})

try {
  $api = Start-NpmDev -Label "API" -WorkDir $backend -ScriptName "start:dev" -Color Cyan
  $ui = Start-NpmDev -Label "Admin" -WorkDir $admin -ScriptName "dev" -Color Green
  while (-not $stop) {
    if ($api.HasExited -and $ui.HasExited) { break }
    Start-Sleep -Milliseconds 300
  }
}
finally {
  Stop-Children
  Get-EventSubscriber | Unregister-Event -ErrorAction SilentlyContinue
  Write-Host ""
  Write-Host "Da dung EduShare." -ForegroundColor Yellow
}
