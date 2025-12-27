module.exports = {
  apps: [
    {
      name: "dn-designs-web",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max", // Use all available CPU cores
      exec_mode: "cluster", // Enable cluster mode for better performance
      autorestart: true,
      watch: false, // Don't watch files in production
      max_memory_restart: "4G", // Restart if memory usage exceeds 1GB
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      // Logs configuration
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "./logs/error.log",
      out_file: "./logs/output.log",
      merge_logs: true,
      time: true, // Prefix logs with time
    },
  ],
};
