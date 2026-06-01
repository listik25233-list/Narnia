#!/bin/bash

# Configuration
VPS_IP="144.31.26.207"
VPS_USER="listik"
SSH_KEY="$HOME/.ssh/id_ed25519_spectrum"
REMOTE_PATH="/var/www/html/narnia"

echo "🚀 Starting Narnia Website Deployment..."

# 1. Build project
echo "🛠️ Building project..."
npm run build
if [ $? -ne 0 ]; then echo "❌ Build failed"; exit 1; fi

# 2. Upload to VPS
echo "📡 Uploading to VPS ($VPS_IP)..."
# Sync files (assuming directory exists and has permissions)
rsync -e "ssh -i $SSH_KEY -o StrictHostKeyChecking=no" -avz dist/ "$VPS_USER@$VPS_IP:$REMOTE_PATH/"

echo "✅ Done! Website should be accessible at http://$VPS_IP/narnia/"
