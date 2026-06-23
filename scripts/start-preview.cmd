@echo off
cd /d "%~dp0\.."
if exist preview.log del /f /q preview.log
if exist preview.err.log del /f /q preview.err.log
start "" /b "C:\Program Files\nodejs\node.exe" "scripts\preview-server.js" 1>"preview.log" 2>"preview.err.log"
