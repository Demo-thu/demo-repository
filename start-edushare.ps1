# Mot lenh chay ca he thong trong terminal hien tai.
# API o Admin\backend nap backend cua Admin, Nha hao tam, Truong, Kho va Tinh nguyen vien.
# Trang web o Admin\frontend nap giao dien va form cua tat ca cac cong.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$backend = Join-Path $root "Admin\backend"
$web = Join-Path $root "Admin\frontend"
$nodeModules = Join-Path $backend "node_modules"

$required = @(
  "Admin\backend\package.json",
  "Admin\backend\.env",
  "Admin\backend\src\main.ts",
  "Admin\backend\src\app.module.ts",
  "Admin\frontend\package.json",
  "Admin\frontend\src\App.jsx",
  "Admin\frontend\src\layouts\PortalLayout.jsx",
  "Admin\frontend\src\layouts\SystemLayout.jsx",
  "Admin\frontend\src\layouts\AccountMenu.jsx",
  "Admin\frontend\src\pages\admin\AdminAccounts.jsx",
  "Admin\frontend\src\pages\portals\kit.jsx",
  "Warehouse\frontend\src\screens\ScanModal.jsx",
  "Warehouse\frontend\src\screens\IncidentScreen.jsx",
  "Warehouse\frontend\src\screens\DispatchScreen.jsx",
  "Warehouse\frontend\src\screens\StatusScreen.jsx",
  "Admin\backend\prisma\schema.prisma",
  "Donor\frontend\src\pages\DonorPage.jsx",
  "Donor\frontend\src\pages\RegisterPage.jsx",
  "Donor\frontend\src\screens\index.js",
  "Donor\backend\src\pledges\pledges.module.ts",
  "School\frontend\src\pages\SchoolPage.jsx",
  "School\frontend\src\screens\index.js",
  "School\backend\src\requisitions\requisitions.module.ts",
  "Warehouse\frontend\src\pages\WarehousePage.jsx",
  "Warehouse\frontend\src\screens\index.js",
  "Warehouse\backend\src\items\items.module.ts",
  "Warehouse\backend\src\inspections\inspections.module.ts",
  "Warehouse\backend\src\transfers\transfers.module.ts",
  "Warehouse\backend\src\warehouses\warehouses.module.ts",
  "Warehouse\backend\src\waybills\waybills.module.ts",
  "Volunteer\frontend\src\pages\VolunteerPage.jsx",
  "Volunteer\frontend\src\screens\index.js",
  "Volunteer\backend\src\volunteers\volunteers.module.ts"
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
Install-IfMissing $backend @("@nestjs\core", "@prisma\client", "prisma") "API (Admin\backend)"
Install-IfMissing $web @("react", "vite", "exceljs", "qrcode") "web (Admin\frontend)"

foreach ($portal in @("Donor", "School", "Warehouse", "Volunteer")) {
  $link = Join-Path $root "$portal\backend\node_modules"
  if (-not (Test-Path -LiteralPath $link)) {
    cmd /c "mklink /J `"$link`" `"$nodeModules`"" | Out-Null
    if (-not (Test-Path -LiteralPath $link)) {
      throw "Khong tao duoc lien ket thu vien cho $portal\backend."
    }
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
Remove-Cache (Join-Path $nodeModules ".cache")
Remove-Cache (Join-Path $web "node_modules\.cache")
Remove-Cache (Join-Path $web ".eslintcache")
Remove-Cache (Join-Path $env:TEMP "edushare-build")
foreach ($portal in @("Donor", "School", "Warehouse", "Volunteer")) {
  # Chi xoa dist/cache rieng cua tung cong, khong cham vao node_modules (la lien ket toi Admin\backend).
  foreach ($side in @("backend", "frontend")) {
    Remove-Cache (Join-Path $root "$portal\$side\dist")
    Remove-Cache (Join-Path $root "$portal\$side\.vite")
  }
}

# Dong bo co so du lieu va Prisma Client voi schema hien tai (cot moi, bang moi).
Write-Host "Dang dong bo co so du lieu va Prisma Client..." -ForegroundColor Yellow
Push-Location $backend
$previousPreference = $ErrorActionPreference
$ErrorActionPreference = "Continue"
try {
  & npx prisma db push --skip-generate 2>&1 | ForEach-Object { Write-Host "[Prisma] $_" -ForegroundColor DarkGray }
  if ($LASTEXITCODE -ne 0) { throw "prisma db push that bai. Hay kiem tra PostgreSQL va DATABASE_URL trong Admin\backend\.env." }
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
Write-Host "Dang ky        http://localhost:5173/register"
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
