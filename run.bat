@echo off
echo Resetting Git and Pushing...
git add .
git commit -m "Fix path aliases, imports, and missing dependencies"
git push origin master

echo.
echo Restarting Dev Server...
echo (Please run this in a separate window or keep this one open)
set PATH=C:\Users\User\AppData\Local\fnm_multishells\13372_1769826159886;%PATH%
npm run dev
