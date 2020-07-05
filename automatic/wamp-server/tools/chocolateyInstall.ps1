﻿$packageName = 'wamp-server'
$installerType = 'EXE'
$url32 = ''
$url64 = ''
$checksumtype = 'sha256'
$checksum64type = 'sha256'
$checksum32 = ''
$checksum64 = ''

$silentArgs = '/verysilent /SUPRRESSMSGBOXES /NORESTART /CLOSEAPPLICATIONS /RESTARTAPPLICATIONS' 
$validExitCodes = @(0) 

$packageArgs = @{
  packageName   = $packageName
  fileType      = $installerType
  url           = $url32
  url64			= $url64
  silentArgs    = $silentArgs
  validExitCodes= @(0,3010)
  softwareName  = 'wamp-server*'
  checksum      = $checksum
  checksum64    = $checksum64
  checksumType  = 'sha256'
  checksum64Type= 'sha256'
}

$scriptPath = "$(Split-Path -parent $MyInvocation.MyCommand.Definition)"
$ahkFile = Join-Path $scriptPath "chocolateyInstall.ahk"
$ahkExe = 'AutoHotKey'
$ahkRun = "$Env:Temp\$(Get-Random).ahk"
Copy-Item $ahkFile "$ahkRun" -Force
Start-Process $ahkExe $ahkRun

Install-ChocolateyPackage @packageArgs