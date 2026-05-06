Write-Output "Deleting Cache..."

$projectDir = "web"

Set-Location $projectDir

yarn install


yarn build

Set-Location ..

Write-Output "Done building UI!"

Start-Sleep -Seconds 5
