@echo off
setlocal
cd /d "%~dp0"
where git >nul 2>nul
if errorlevel 1 (
  echo Git is not installed. Install Git for Windows from https://git-scm.com/download/win and run this file again.
  pause
  exit /b 1
)
if not exist ".git" git init
if errorlevel 1 goto failed
git branch -M main
git add .
git status --short
echo.
echo Review the staged file list above. Ensure no .env file or credentials are listed.
set /p CONFIRM=Type YES to create the first commit: 
if /I not "%CONFIRM%"=="YES" (
  echo Cancelled. No commit was created.
  pause
  exit /b 0
)
git commit -m "Prepare e-commerce portfolio project"
if errorlevel 1 goto failed
echo.
set /p REPOURL=Paste the HTTPS URL of the EMPTY GitHub repository you created: 
if "%REPOURL%"=="" goto failed
git remote get-url origin >nul 2>nul
if errorlevel 1 (
  git remote add origin "%REPOURL%"
) else (
  git remote set-url origin "%REPOURL%"
)
git push -u origin main
if errorlevel 1 goto failed
echo.
echo Upload complete. Open your GitHub repository in a browser and check the README.
pause
exit /b 0
:failed
echo.
echo The process stopped because a command failed. Read the error above; your local files have not been deleted.
pause
exit /b 1
