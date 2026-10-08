@echo off
title EduShare Vietnam - khoi dong tat ca cong
cd /d "%~dp0"
echo ============================================================
echo  EduShare Vietnam: Admin + Nha hao tam + Truong + Kho + Tinh nguyen vien
echo  Dang don cache cu, dong bo CSDL va khoi dong API + web...
echo ============================================================
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-edushare.ps1"
set "EXITCODE=%ERRORLEVEL%"
if not "%EXITCODE%"=="0" (
  echo.
  echo [LOI] Khoi dong that bai hoac da dung ^(ma %EXITCODE%^). Xem thong bao phia tren.
)
echo.
pause
exit /b %EXITCODE%
