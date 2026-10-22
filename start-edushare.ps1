# Mot lenh chay ca he thong trong terminal hien tai.
# Monorepo: API o edushare-backend, giao dien o edushare-frontend.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backend = Join-Path $root "edushare-backend"
$web = Join-Path $root "edushare-frontend"

$required = @(
  "edushare-backend\package.json",
  "edushare-backend\.env",
  "edushare-backend\src\main.ts",
  "edushare-backend\src\app.module.ts",
  "edushare-backend\prisma\schema.prisma",
  "edushare-backend\src\mail\mail.service.ts",
  "edushare-backend\src\login\login.module.ts",
  "edushare-backend\src\register\register.module.ts",
  "edushare-backend\src\forgot-password\forgot-password.module.ts",
  "edushare-backend\src\pledges\pledges.module.ts",
  "edushare-backend\src\requisitions\requisitions.module.ts",
  "edushare-backend\src\items\items.module.ts",
  "edushare-backend\src\inspections\inspections.module.ts",
  "edushare-backend\src\transfers\transfers.module.ts",
  "edushare-backend\src\warehouses\warehouses.module.ts",
  "edushare-backend\src\waybills\waybills.module.ts",
  "edushare-backend\src\volunteers\volunteers.module.ts",
  "edushare-frontend\package.json",
  "edushare-frontend\src\App.jsx",
  "edushare-frontend\src\services\api.js",
  "edushare-frontend\src\layouts\PortalLayout.jsx",
  "edushare-frontend\src\layouts\SystemLayout.jsx",
  "edushare-frontend\src\layouts\AccountMenu.jsx",
  "edushare-frontend\src\layouts\auth\AuthShell.jsx",
  "edushare-frontend\src\pages\admin\AdminAccounts.jsx",
  "edushare-frontend\src\pages\portals\kit.jsx",
  "edushare-frontend\src\pages\login\pages\LoginPage.jsx",
  "edushare-frontend\src\pages\register\pages\RegisterPage.jsx",
  "edushare-frontend\src\pages\forgot\pages\ForgotPasswordPage.jsx",
  "edushare-frontend\src\pages\donor\pages\DonorPage.jsx",
  "edushare-frontend\src\pages\donor\screens\index.js",
  "edushare-frontend\src\pages\school\pages\SchoolPage.jsx",
  "edushare-frontend\src\pages\school\screens\index.js",
  "edushare-frontend\src\pages\warehouse\pages\WarehousePage.jsx",
  "edushare-frontend\src\pages\warehouse\screens\index.js",
  "edushare-frontend\src\pages\warehouse\screens\ScanModal.jsx",
  "edushare-frontend\src\pages\warehouse\screens\IncidentScreen.jsx",
  "edushare-frontend\src\pages\warehouse\screens\DispatchScreen.jsx",
  "edushare-frontend\src\pages\warehouse\screens\StatusScreen.jsx",
  "edushare-frontend\src\pages\volunteer\pages\VolunteerPage.jsx",
  "edushare-frontend\src\pages\volunteer\screens\index.js"
)

foreach ($relative in $required) {
  $path = Join-Path $root $relative
  if (-not (Test-Path -LiteralPath $path)) {
    throw "Thieu file can de chay du chuc nang: $relative"
  }
}

if (-not (Get-Command node -ErrorAction SilentlyContinue) -or -not (Get-Command npm -ErrorAction SilentlyContinue)) {
  throw "Chua cai Node.js/npm. Hay cai Node.js roi chay lai."
}

# Tu cai thu vien con thieu (vi du exceljs de xuat Excel theo nha hao tam).
function Install-IfMissing([string]$Dir, [string[]]$Packages, [string]$Label) {
  $modules = Join-Path $Dir "node_modules"
  $missing = (-not (Test-Path -LiteralPath $modules))
  foreach ($package in $Packages) {
    if (-not (Test-Path -LiteralPath (Join-Path $modules $package))) { $missing = $true }
  }
  if (-not $missing) { return }
  Write-Host "Dang cai thu vien con thieu cho $Label (npm install)..." -ForegroundColor Yellow
  Push-Location $Dir
  $previous = $ErrorActionPreference
  $ErrorActionPreference = "Continue"
  try {
    & cmd /c "npm install --no-audit --no-fund 2>&1" | ForEach-Object { Write-Host "[npm] $_" -ForegroundColor DarkGray }
    if ($LASTEXITCODE -ne 0) { throw "npm install that bai trong $Dir." }
  } finally {
    $ErrorActionPreference = $previous
    Pop-Location
  }
}
Install-IfMissing $backend @("@nestjs\core", "@prisma\client", "prisma", "nodemailer") "API (edushare-backend)"
Install-IfMissing $web @("react", "vite", "exceljs", "qrcode") "web (edushare-frontend)"

# Canh bao neu chua cau hinh email (Gmail SMTP) de gui ma OTP quen mat khau.
$envText = Get-Content -LiteralPath (Join-Path $backend ".env") -Raw
foreach ($key in @("SMTP_HOST", "SMTP_USER", "SMTP_PASS")) {
  if ($envText -notmatch "(?m)^\s*$key\s*=\s*\S+") {
    Write-Host "Canh bao: thieu $key trong edushare-backend\.env - chuc nang quen mat khau se khong gui duoc email OTP." -ForegroundColor Yellow
  }
}

function Clear-Port([int]$Port) {
  $owners = @(Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue |
    ForEach-Object { $_.OwningProcess } |
    Where-Object { $_ -gt 0 } |
    Select-Object -Unique)
  foreach ($procId in $owners) {
    $target = [int]$procId
    $current = Get-CimInstance Win32_Process -Filter "ProcessId=$target" -ErrorAction SilentlyContinue
    if ($current -and $current.ParentProcessId -and $current.ParentProcessId -ne $PID) {
      $parent = Get-CimInstance Win32_Process -Filter "ProcessId=$($current.ParentProcessId)" -ErrorAction SilentlyContinue
      if ($parent -and $parent.Name -match '^(cmd|node|npm)\.exe$') {
        $target = [int]$parent.ProcessId
      }
    }
    if ($target -eq $PID) { continue }
    Write-Host "Giai phong cong $Port (PID $target)." -ForegroundColor Yellow
    cmd /c "taskkill /PID $target /T /F >nul 2>&1" | Out-Null
  }
}

Clear-Port 3000
Clear-Port 5173
Start-Sleep -Milliseconds 400

# Xoa cache cu de API va web luon bien dich lai tu ma nguon moi nhat.
function Remove-Cache([string]$Path) {
  if (Test-Path -LiteralPath $Path) {
    try {
      Remove-Item -LiteralPath $Path -Recurse -Force -ErrorAction Stop
      $shown = if ($Path.StartsWith($root)) { $Path.Substring($root.Length + 1) } else { $Path }
      Write-Host "Da xoa cache: $shown" -ForegroundColor DarkGray
    } catch {
      Write-Host "Khong xoa duoc cache $Path ($($_.Exception.Message))" -ForegroundColor Yellow
    }
  }
}

Write-Host "Dang don cache cu..." -ForegroundColor Yellow
Remove-Cache (Join-Path $backend "dist")
Get-ChildItem -LiteralPath $backend -Filter "*.tsbuildinfo" -File -ErrorAction SilentlyContinue | ForEach-Object { Remove-Cache $_.FullName }
Remove-Cache (Join-Path $web "node_modules\.vite")
Remove-Cache (Join-Path $web "dist")
Remove-Cache (Join-Path $backend "node_modules\.cache")
Remove-Cache (Join-Path $web "node_modules\.cache")
Remove-Cache (Join-Path $web ".eslintcache")
Remove-Cache (Join-Path $env:TEMP "edushare-build")

# Dong bo co so du lieu va Prisma Client voi schema hien tai (cot moi, bang moi).
Write-Host "Dang dong bo co so du lieu va Prisma Client..." -ForegroundColor Yellow
Push-Location $backend
$previousPreference = $ErrorActionPreference
$ErrorActionPreference = "Continue"
try {
  & npx prisma db push --skip-generate 2>&1 | ForEach-Object { Write-Host "[Prisma] $_" -ForegroundColor DarkGray }
  if ($LASTEXITCODE -ne 0) { throw "prisma db push that bai. Hay kiem tra PostgreSQL va DATABASE_URL trong edushare-backend\.env." }
  & npx prisma generate 2>&1 | ForEach-Object { Write-Host "[Prisma] $_" -ForegroundColor DarkGray }
  if ($LASTEXITCODE -ne 0) { throw "prisma generate that bai." }
} finally {
  $ErrorActionPreference = $previousPreference
  Pop-Location
}

Write-Host ""
Write-Host "EduShare dang chay tat ca cong trong terminal nay." -ForegroundColor Cyan
Write-Host "API            http://localhost:3000/api"
Write-Host "Dang nhap      http://localhost:5173/login"
Write-Host "  Monorepo: edushare-backend (API) + edushare-frontend (tat ca cong)."
Write-Host "Dang ky        http://localhost:5173/register  (nha hao tam hoac dai dien truong hoc; phai nhap ma OTP gui qua email moi tao duoc tai khoan)"
Write-Host "Quen mat khau  http://localhost:5173/forgot-password  (ma OTP 6 so gui qua email bang Gmail SMTP)"
Write-Host "Admin          http://localhost:5173/"
Write-Host "  Tao chien dich + hang muc, tao tai khoan nha hao tam, DOI VAI TRO + xem ho so moi tai khoan,"
Write-Host "  duyet/tu choi yeu cau truong (don da duyet: bam vao de xem hanh trinh don dang di den dau),"
Write-Host "  ghep ton kho + xac nhan phuong an, van don va ho so su co (chi xem), tra cuu,"
Write-Host "  nhat ky kiem toan (cot Chi tiet ghi ro da sua gi: truoc -> sau, tren doi tuong nao)."
Write-Host "Nha hao tam    http://localhost:5173/donor"
Write-Host "  Kham pha chien dich, tao phieu, phieu da gui, bien nhan, ma QR thiet bi, tac dong xa hoi."
Write-Host "Truong hoc     http://localhost:5173/school"
Write-Host "  Tao yeu cau (can xac nhan truong + uy ban), hang cho duyet, tai nguyen phan bo + QR, truy vet QR, van don, ky PoD, lich su giao hang."
Write-Host "Kho            http://localhost:5173/warehouse"
Write-Host "  Xac minh phieu, kiem dinh 1 cham, nhap kho, ton kho, quet QR (2 popup nhap/xuat + thong tin)."
Write-Host "  Chi 1 kho xuat: Tong kho Mien Trung. Tao lenh dieu chuyen toi TRUONG HOC (popup chon dia chi giao"
Write-Host "  tu yeu cau da duoc duyet) + Excel theo nha hao tam. Theo doi trang thai co muc DANG VAN CHUYEN."
Write-Host "  Lap van don, bao cao su co."
Write-Host "Tinh nguyen    http://localhost:5173/volunteer"
Write-Host "  Diem danh vao/ra ca, van don duoc gan, xac nhan lay hang, bao su co, bao cao + anh sau khi truong ky, gio cong + xep hang."
Write-Host "Moi cong: bam ten o goc phai tren -> menu 'Xem ho so' (popup ho so, tu sua ten + sdt) va 'Dang xuat'."
Write-Host "Tai khoan      admin@ | donor@ | school@ | warehouse@ | volunteer@  + edushare.vn"
Write-Host "Mat khau       EduShare@2024"
Write-Host "Nhan Ctrl+C de dung API va trang web."
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
    cmd /c "taskkill /PID $procId /T /F >nul 2>&1" | Out-Null
  }
}

function Wait-Http([string]$Url, [string]$Label) {
  $deadline = (Get-Date).AddSeconds(90)
  while ((Get-Date) -lt $deadline) {
    try {
      $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 3
      if ($response.StatusCode -ge 200 -and $response.StatusCode -lt 500) {
        Write-Host "[$Label] San sang: $Url" -ForegroundColor Green
        return
      }
    } catch {
      Start-Sleep -Milliseconds 700
    }
  }
  throw "$Label khong san sang: $Url"
}

$stop = $false
$null = [Console]::add_CancelKeyPress({
  param($sender, $eventArgs)
  $eventArgs.Cancel = $true
  $script:stop = $true
})

try {
  $api = Start-NpmDev -Label "API" -WorkDir $backend -ScriptName "start:dev" -Color Cyan
  $ui = Start-NpmDev -Label "Web" -WorkDir $web -ScriptName "dev" -Color Green
  Wait-Http "http://localhost:3000/api/health" "API"
  Wait-Http "http://localhost:5173/login" "Web"
  Write-Host "Tat ca cong da san sang. Dang nhap de vao dung chuc nang cua tai khoan." -ForegroundColor Green
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
