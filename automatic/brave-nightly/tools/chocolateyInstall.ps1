﻿$toolsPath = Split-Path $MyInvocation.MyCommand.Definition
. $toolsPath\helpers.ps1

$packageArgs = @{
  packageName = $env:ChocolateyPackageName
  file        = "$toolsPath\BraveBrowserSilentSetup32.exe"
  file64      = "$toolsPath\BraveBrowserSilentSetup.exe"
}

[version]$softwareVersion = $env:ChocolateyPackageVersion

Write-Host "Checking already installed version..."
$installedVersion = Get-InstalledVersion

if ($installedVersion -and ($softwareVersion -lt $installedVersion)) {
  Write-Warning "Skipping installation because a later version than $softwareVersion is installed."
}
elseif ($installedVersion -and ($softwareVersion -eq $installedVersion)) {
  Write-Warning "Skipping installation because version $softwareVersion is already installed."
}
else {
  Install-ChocolateyInstallPackage @packageArgs
}

Remove-Item $toolsPath\*.exe -ea 0