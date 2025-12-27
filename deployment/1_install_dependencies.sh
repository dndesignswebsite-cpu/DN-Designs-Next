#!/bin/bash

# 1_install_dependencies.sh
# Installs system dependencies, NVM, Node.js, and PM2

set -e

echo "🔹 Updating systems..."
sudo apt update && sudo apt upgrade -y

echo "🔹 Installing basics (curl, git, ufw, build-essential)..."
sudo apt install -y curl git ufw build-essential

# Enable Firewall
echo "🔹 Configuring Firewall..."
sudo ufw allow OpenSSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
# sudo ufw enable # Commented out to prevent accidental lockout

echo "🔹 Installing NVM (Node Version Manager)..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Load NVM for this script session
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "🔹 Installing Node.js (LTS)..."
nvm install --lts
nvm use --lts

echo "🔹 Verifying Node Version..."
node -v
npm -v

echo "🔹 Installing PM2 globally (in user scope)..."
npm install -g pm2

echo "✅ Dependencies Installed Successfully!"
echo "👉 Please log out and log back in (or run 'source ~/.bashrc') to detect 'nvm' command."
echo "👉 Then Run './2_install_mongo.sh'"
