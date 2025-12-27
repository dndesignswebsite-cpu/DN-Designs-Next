#!/bin/bash

# 4_setup_nginx.sh
# Installs Nginx, Configures Reverse Proxy, and Sets up SSL

set -e

# Ask for domain name
read -p "Enter your Domain Name (e.g., example.com): " DOMAIN_NAME

if [ -z "$DOMAIN_NAME" ]; then
    echo "❌ Domain name is required."
    exit 1
fi

echo "🔹 Installing Nginx..."
sudo apt install -y nginx

echo "🔹 Configuring Nginx Reverse Proxy for $DOMAIN_NAME..."

CONFIG_FILE="/etc/nginx/sites-available/$DOMAIN_NAME"

sudo tee $CONFIG_FILE > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN_NAME www.$DOMAIN_NAME;

    location / {
        proxy_pass http://localhost:3000; # Upstream Next.js Port
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

echo "🔹 Enabling Site Configuration..."
sudo ln -sf $CONFIG_FILE /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

echo "🔹 Testing Nginx Configuration..."
sudo nginx -t

echo "🔹 Restarting Nginx..."
sudo systemctl restart nginx

echo "🔹 Installing Certbot for SSL..."
sudo apt install -y certbot python3-certbot-nginx

echo "🔹 Requesting SSL Certificate (Let's Encrypt)..."
# Using --non-interactive might require email flag, so we stick to interactive for safety
# or assume user runs this manually.
sudo certbot --nginx -d $DOMAIN_NAME -d www.$DOMAIN_NAME

echo "✅ Nginx & SSL Configured Successfully!"
echo "🎉 Deployment Complete! Visit https://$DOMAIN_NAME"
