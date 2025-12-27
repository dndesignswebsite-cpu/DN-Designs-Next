#!/bin/bash

# 3_setup_app.sh
# Installs app dependencies, builds, and starts with PM2

set -e

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Verify Node is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found! Please run ./1_install_dependencies.sh and restart your terminal."
    exit 1
fi

APP_NAME="dn-designs"
PORT=3000

echo "🔹 checking for .env.prod file..."
if [ ! -f ../.env.prod ]; then
    echo "⚠️  WARNING: .env.prod file not found in parent directory!"
    echo "    Please create it before running the app."
    echo "    Example: nano ../.env.prod"
    read -p "    Press Enter to continue anyway (or Ctrl+C to abort)..."
fi

echo "🔹 Installing NPM Dependencies..."
cd ..
npm install

echo "🔹 Building Next.js Application..."
npm run build

echo "🔹 Starting App with PM2..."
# Delete existing process if needed
pm2 delete $APP_NAME 2>/dev/null || true

# Start the app
pm2 start npm --name "$APP_NAME" -- start

# Save PM2 list
pm2 save

echo "🔹 Setting up PM2 Startup Script..."
# Generate startup script for current user
pm2 startup systemd | grep "sudo" | bash || echo "⚠️  Could not auto-run PM2 startup. Run 'pm2 startup' manually."
pm2 save

echo "✅ App Started Successfully on Port $PORT!"
echo "👉 Next Step: Run './4_setup_nginx.sh'"
