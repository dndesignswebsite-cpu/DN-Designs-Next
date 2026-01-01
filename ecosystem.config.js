const path = require("path");

require(path.join(
  "/var/www/DN-Designs-Next/current/node_modules/dotenv"
)).config({
  path: path.join("/var/www/DN-Designs-Next/current/.env.prod"),
});

module.exports = {
  apps: [
    {
      name: "dn-designs",

      cwd: "/var/www/DN-Designs-Next",
      script: "node_modules/next/dist/bin/next",
      args: "start",

      instances: "max", // Use all available CPU cores
      exec_mode: "cluster", // Enable cluster mode for better performance
      autorestart: true,
      watch: false, // Don't watch files in production
      max_memory_restart: "4G", // Restart if memory usage exceeds 4GB

      // Logs configuration
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "/var/www/dnd-pm2-logs/error.log",
      out_file: "/var/www/dnd-pm2-logs/output.log",
      merge_logs: true,
      time: true,

      env_production: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,

        MONGODB_URI: process.env.MONGODB_URI,
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_EXPIRE: process.env.JWT_EXPIRE,

        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        NEXT_PUBLIC_MEDIA_URL: process.env.NEXT_PUBLIC_MEDIA_URL,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      },
    },
  ],
};
