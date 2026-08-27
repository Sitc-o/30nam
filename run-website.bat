@echo off
setlocal
cd /d "%~dp0"
title Viettel Commerce - Website 30 nam
where py >nul 2>nul
if %errorlevel%==0 (set "PY=py") else (where python >nul 2>nul && (set "PY=python") || (echo [LOI] Can cai Python 3.10 tro len.& pause & exit /b 1))
%PY% -c "import edge_tts" >nul 2>nul
if not %errorlevel%==0 %PY% -m pip install --user -r requirements-voice.txt
%PY% tools\voice_server.py
endlocal
