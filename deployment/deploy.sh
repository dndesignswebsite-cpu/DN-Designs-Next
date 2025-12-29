#!/bin/bash

# deployment/deploy.sh
# Automates the deployment process on the VPS with zero-downtime.

set -e

APP_DIR="/var/www/DN-Designs-Next"
APP_NAME="dn-designs"

echo "🚀 Starting Deployment for $APP_NAME..."

cd $APP_DIR

# 1. Pull the latest code
echo "🔹 Pulling latest changes from git..."
git pull origin main

# 2. Install dependencies (only if package.json changed)
# Using 'npm ci' or 'npm install' - 'install' is safer if lockfile isn't perfect
echo "🔹 Installing dependencies..."
npm install

# 3. Build the application
# This doesn't affect the running process yet
echo "🔹 Building Next.js application (this may take a minute)..."
npm run build

# 4. Zero-downtime reload with PM2
# PM2 cluster mode will keep the old app running while the new one starts
echo "🔹 Reloading application in PM2..."
pm2 reload $APP_NAME --env production

# 5. Save PM2 state
pm2 save

echo "✅ Deployment Successful! Your app is now updated and running."
