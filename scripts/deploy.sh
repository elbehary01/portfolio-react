#!/bin/bash
# =============================================================
# One-shot deploy script for EC2
# Usage: bash scripts/deploy.sh
# First time: bash scripts/deploy.sh --first-run
# =============================================================
set -e

APP_DIR="/home/ubuntu/portfolio"
FIRST_RUN=false

if [[ "$1" == "--first-run" ]]; then
  FIRST_RUN=true
fi

echo ""
echo "================================================="
echo "  Deploying Portfolio"
echo "================================================="
echo ""

# ── 1. Pull latest code ───────────────────────────────────────
echo "[1/5] Pulling latest code from git..."
cd "$APP_DIR"
git pull origin master

# ── 2. Install & build backend ────────────────────────────────
echo "[2/5] Installing backend dependencies..."
cd "$APP_DIR/backend"
npm install --omit=dev

# ── 3. Build client ───────────────────────────────────────────
echo "[3/5] Building client (storefront)..."
cd "$APP_DIR/client"
npm install
npm run build

# ── 5. Start / reload PM2 ────────────────────────────────────
echo "[5/5] Restarting backend with PM2..."
cd "$APP_DIR"

if $FIRST_RUN; then
  pm2 start ecosystem.config.js --env production
  cd "$APP_DIR/backend"
  pm2 start server.js          # generates the systemd command — copy & run the output
  pm2 save
else
  pm2 reload ecosystem.config.js --env production
  pm2 save
fi

# ── 6. Reload nginx ───────────────────────────────────────────
echo "[6/6] Reloading nginx..."
sudo nginx -t && sudo systemctl reload nginx

echo ""
echo "================================================="
echo "  Deployment complete!"
echo "  Backend : http://YOUR_EC2_IP/api"
echo "  Client  : http://YOUR_EC2_IP/"
echo "  Admin   : http://YOUR_EC2_IP/admin"
echo "================================================="
echo ""
