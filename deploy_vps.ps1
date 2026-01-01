# deploy_vps.ps1
# Run this script on your local Windows machine to trigger deployment on the VPS.

$VPS_USER = "root"
$VPS_IP = "72.61.244.153" # Replace with your actual VPS IP
$REMOTE_PATH = "/var/www/DN-Designs-Next/deployment/deploy.sh"

Write-Host "Triggering Remote Deployment on $VPS_IP..." -ForegroundColor Cyan

# Use SSH to execute the bash script on the VPS
ssh "$VPS_USER@$VPS_IP" "bash $REMOTE_PATH"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment finished successfully!" -ForegroundColor Green
} else {
    Write-Host "Deployment failed. Please check the logs above." -ForegroundColor Red
}
