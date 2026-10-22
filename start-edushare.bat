@echo off
title EduShare Vietnam - khoi dong tat ca cong
cd /d "%~dp0"
echo ============================================================
echo  EduShare Vietnam monorepo: edushare-backend + edushare-frontend
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
