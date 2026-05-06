Write-Output "Deleting Cache..."

$projectDir = "web"


Set-Location $projectDir

yarn install


yarn dev

Set-Location ..

Write-Output "DEV: Resource UI Debug!"

Start-Sleep -Seconds 5
