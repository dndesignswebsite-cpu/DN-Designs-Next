# Deployment Guide for Hostinger Ubuntu VPS

This guide walks you through deploying the DN Designs Next.js application to your Ubuntu VPS using **NVM**.

## Prerequisites

- A Hostinger VPS running **Ubuntu 22.04** (or similar).
- A **Domain Name** pointed to your VPS IP Address (A Record).
- SSH access to your VPS.

## Step 1: Transfer Files to VPS

You need to get your project files onto the server. Use **Git** (Recommended) or **SCP**.

### Option A: Using Git (Recommended)

1. Push your code to GitHub/GitLab.
2. SSH into your VPS: `ssh root@your_vps_ip`
3. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dn-designs.git
   cd dn-designs
   ```

### Option B: Using SCP to Copy Local Files

In your local terminal (not inside VPS):

```bash
scp -r ./DN-Designs-Next root@your_vps_ip:/root/dn-designs
```

## Step 2: Configure Environment Variables

1. Inside the project folder on your VPS, create the `.env.local` file:
   ```bash
   nano .env.local
   ```
2. Paste your production environment variables (MongoDB URI, JWT Secret, Cloudinary Keys, etc.).
   _Note: For MongoDB, you can use `mongodb://127.0.0.1:27017/dn_designs`._
3. Save and exit (Ctrl+O, Enter, Ctrl+X).

## Step 3: Run Deployment Scripts

Navigate to the `deployment` folder and make scripts executable:

```bash
cd deployment
chmod +x *.sh
```

Run them in order:

### 1. Install Dependencies

Installs **NVM**, Node.js LTS, PM2, and basics.

```bash
./1_install_dependencies.sh
```

> **IMPORTANT:** After this step, **run `source ~/.bashrc`** or log out and log back in to activate NVM.

### 2. Install MongoDB

Installs local MongoDB instance.

```bash
./2_install_mongo.sh
```

### 3. Setup Application

Installs packages, builds the app, and starts it with PM2.

```bash
./3_setup_app.sh
```

_If you see PM2 errors, ensure you ran the `source ~/.bashrc` command mentioned above._

### 4. Setup Nginx & SSL

Installs Nginx, configures Reverse Proxy, and sets up SSL.

```bash
./4_setup_nginx.sh
```

## Maintenance (with NVM)

- **Switch Node Version**: `nvm install 20` / `nvm use 20`
- **Restart App**: `pm2 restart dn-designs`
- **View Logs**: `pm2 logs`
