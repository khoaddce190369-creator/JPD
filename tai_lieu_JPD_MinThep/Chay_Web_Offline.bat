@echo off
chcp 65001 >nul
echo =======================================================
echo    DANG KHOI CHAY SERVER NOI BO CHO TAI LIEU JPD...
echo =======================================================
echo.
echo Server dang chay tai: http://localhost:8000
echo Trinh duyet se tu dong mo trong giay lat...
echo (De dong server, dong cua so nay hoac an Ctrl + C)
echo.

start "" "http://localhost:8000/index.html"
python -m http.server 8000
pause
