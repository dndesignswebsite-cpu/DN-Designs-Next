#!/bin/bash

# setup_image_serving.sh
# Configures Nginx to serve images from the 'public/uploads' directory 
# under the subdomain 'media.powerfilldrinks.com'.

set -e

# Configuration
DOMAIN="media.powerfilldrinks.com"
APP_ROOT="/root/DN-Designs-Next" # CHANGE THIS to your actual app root on VPS
UPLOADS_DIR="$APP_ROOT/public/uploads"
NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"

echo "🔹 Setting up Image Serving for $DOMAIN..."

# 1. Ensure upload directories exist with correct permissions
echo "🔹 Ensuring upload directories exist at $UPLOADS_DIR..."
mkdir -p "$UPLOADS_DIR/images"
mkdir -p "$UPLOADS_DIR/videos"
mkdir -p "$UPLOADS_DIR/avatars"
mkdir -p "$UPLOADS_DIR/blogs"
mkdir -p "$UPLOADS_DIR/pages"

# Set permissions so the app can write and Nginx can read
echo "🔹 Setting permissions..."
sudo chown -R $USER:www-data "$APP_ROOT/public"
sudo chmod -R 775 "$APP_ROOT/public"

# 2. Create Nginx configuration
echo "🔹 Creating Nginx configuration at $NGINX_CONF..."
sudo tee $NGINX_CONF > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN;

    # Root directory is the 'public' folder of your Next.js app
    root $APP_ROOT/public;

    # Enable CORS for the main domain
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, OPTIONS';

    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }

    # Aggressive caching for images and media
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp|svg|mp4|webm)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }
}
EOF

# 3. Enable the site
echo "🔹 Enabling Nginx configuration..."
sudo ln -sf $NGINX_CONF /etc/nginx/sites-enabled/

# 4. Test and Reload Nginx
echo "🔹 Testing and reloading Nginx..."
sudo nginx -t
sudo systemctl reload nginx

# 5. SSL Cleanup/Setup (Optional if using Certbot)
echo "🔹 To enable SSL, run: sudo certbot --nginx -d $DOMAIN"

echo "✅ Image serving setup completed for $DOMAIN!"
echo "👉 Make sure to update your .env.production with: NEXT_PUBLIC_MEDIA_URL=\"https://$DOMAIN\""
