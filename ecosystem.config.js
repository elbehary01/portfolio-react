module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'server.js',
      cwd: '/home/ubuntu/eCommerce--Market-app/backend',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '500M',
      env_production: {
        NODE_ENV: 'production',
        PORT: 9000,
      },
      error_file: '/home/ubuntu/.pm2/logs/backend-error.log',
      out_file: '/home/ubuntu/.pm2/logs/backend-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      // Auto-restart on crash
      autorestart: true,
      restart_delay: 3000,
      max_restarts: 10,
    },
  ],
};
