#!/bin/bash

# deployment/deploy.sh
# Automates deployment on the VPS with zero-downtime.

set -e  # Exit on any error

APP_DIR="/var/www/DN-Designs-Next"
APP_NAME="dn-designs"

echo "🚀 Starting Deployment for $APP_NAME..."

# --- 1. Load NVM for root user ---
export NVM_DIR="/root/.nvm"

if [ -s "$NVM_DIR/nvm.sh" ]; then
    # Load NVM into current shell
    . "$NVM_DIR/nvm.sh"
    echo "🔹 NVM loaded from $NVM_DIR"
else
    echo "❌ NVM not found at $NVM_DIR"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found even after loading NVM!"
    echo "Current PATH: $PATH"
    exit 1
fi

# --- 2. Change to app directory ---
cd "$APP_DIR" || { echo "❌ Failed to cd into $APP_DIR"; exit 1; }

# --- 3. Pull latest code ---
echo "🔹 Pulling latest changes from git..."
git fetch origin main
git reset --hard origin/main

# --- 4. Install dependencies ---
echo "🔹 Installing dependencies..."
npm install

# --- 5. Build Next.js app ---
echo "🔹 Building Next.js application (this may take a minute)..."
npm run build

# --- 6. Reload app with PM2 (zero-downtime) ---
echo "🔹 Reloading application in PM2..."
if pm2 list | grep -q "$APP_NAME"; then
    pm2 reload "$APP_NAME" --env production
else
    echo "⚠️ App not running in PM2. Starting it..."
    pm2 start npm --name "$APP_NAME" -- start
fi

# --- 7. Save PM2 process list ---
pm2 save

echo "✅ Deployment Successful! $APP_NAME is now updated and running."
