# Hostinger VPS + Cloudflare Image Hosting Setup

This guide explains how to configure your Hostinger VPS and Cloudflare to serve images from a dedicated subdomain (`media.dndesigns.co.in`) with aggressive caching.

## 1. Environment Variables

On your Hostinger VPS (in `.env.production` or via PM2 ecosystem), add the following variable:

```bash
NEXT_PUBLIC_MEDIA_URL="https://media.dndesigns.co.in"
```

This tells the application to generate image URLs using this subdomain.

## 2. Cloudflare Configuration

Log in to your Cloudflare dashboard.

### A. DNS Record

Create a new **A Record** for the `media` subdomain pointing to your Hostinger VPS IP address.

- **Type**: A
- **Name**: `media` (or `media.dndesigns.co.in`)
- **IPv4 Address**: `[YOUR_VPS_IP]`
- **Proxy Status**: Proxied (Orange Cloud) - **CRITICAL**

### B. Cache Rules (Aggressive Caching)

Go to **Rules** > **Cache Rules** (or Page Rules in older accounts).

Create a new rule:

- **Name**: Cache Media
- **If URL matches**: `Hostname` equals `media.dndesigns.co.in`
- **Cache Status**: Eligible for cache
- **Edge Cache TTL**: 1 month (or longer)
- **Browser TTL**: Override origin -> 1 year

_Alternatively, using Page Rules:_

- **URL**: `media.dndesigns.co.in/*`
- **Cache Level**: Cache Everything
- **Edge Cache TTL**: a month
- **Browser Cache TTL**: a year

## 3. Nginx Configuration

You need to create a new server block in Nginx to handle requests for `media.dndesigns.co.in` and serve files from your Next.js `public` directory.

1.  **Create Config File**:

    ```bash
    sudo nano /etc/nginx/sites-available/media.dndesigns.co.in
    ```

2.  **Paste Configuration**:
    (Replace `/var/www/dn-designs/public` with the actual path to your Next.js public folder)

    ```nginx
    server {
        listen 80;
        server_name media.dndesigns.co.in;

        # Root directory is the 'public' folder of your Next.js app
        root /var/www/dn-designs/public;

        # Enable CORS
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, OPTIONS';

        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }

        # Aggressive caching for images
        location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp|svg|mp4|webm)$ {
            expires 1y;
            add_header Cache-Control "public, max-age=31536000, immutable";
            access_log off;
        }
    }
    ```

3.  **Enable Site**:

    ```bash
    sudo ln -s /etc/nginx/sites-available/media.dndesigns.co.in /etc/nginx/sites-enabled/
    ```

4.  **Test and Restart Nginx**:

    ```bash
    sudo nginx -t
    sudo systemctl reload nginx
    ```

5.  **SSL Certificate (Certbot)**:
    Secure the subdomain with HTTPS.
    ```bash
    sudo certbot --nginx -d media.dndesigns.co.in
    ```

## 4. How It Works

1.  **Upload**: When you upload an image via the Admin Panel, it is saved to `/var/www/dn-designs/public/uploads/...`.
2.  **URL Generation**: The app generates a URL like `https://media.dndesigns.co.in/uploads/image.jpg`.
3.  **Request**: The user requests this URL.
4.  **Cloudflare**: Checks cache. If missing, forwards to Nginx.
5.  **Nginx**: Serves the file directly from the disk (very fast).
6.  **Response**: Cloudflare caches the image for 30 days.

This setup incurs **zero bandwidth costs** for cached images and puts minimal load on your Hostinger VPS.
