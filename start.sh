@echo off
setlocal EnableDelayedExpansion
for /F "tokens=3" %%i in ('reg query HKEY_CURRENT_USER\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice /v ProgID') do for /F "tokens=2*" %%j in ('reg query HKEY_LOCAL_MACHINE\Software\Classes\%%i\shell\open\command /ve') do set cmd=%%k
start "" !cmd:%%1=file://%cd:\=/%/%1!