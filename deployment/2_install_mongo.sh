#!/bin/bash

# 2_install_mongo.sh
# Installs MongoDB Community Edition, Creates User, and Enables Auth

set -e

echo "🔹 Importing MongoDB public GPG Key..."
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor

echo "🔹 Creating list file for MongoDB..."
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | \
   sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

echo "🔹 Updating package database..."
sudo apt update

echo "🔹 Installing MongoDB..."
sudo apt install -y mongodb-org

echo "🔹 Starting MongoDB Service..."
sudo systemctl start mongod
sudo systemctl enable mongod

echo "🔹 Waiting for MongoDB to start..."
sleep 5

# --- Secure MongoDB ---
DB_NAME="dn_designs"
DB_USER="dn_user"
# Generate a random password (alphanumeric, 16 chars)
DB_PASS=$(openssl rand -base64 12 | tr -dc 'a-zA-Z0-9' | head -c 16)

echo "🔹 Creating MongoDB User '$DB_USER' for database '$DB_NAME'..."

# Create user with readWrite role
# We use 'mongosh' which comes with MongoDB 7.0
mongosh "$DB_NAME" --eval "
  db.createUser({
    user: '$DB_USER',
    pwd: '$DB_PASS',
    roles: [{ role: 'readWrite', db: '$DB_NAME' }]
  });
"

echo "🔹 Enabling Authentication in mongod.conf..."
# Replace #security: with security:\n  authorization: enabled
sudo sed -i 's/#security:/security:\n  authorization: enabled/' /etc/mongod.conf

# Check if replacement worked (if #security wasn't there or different format)
if ! grep -q "authorization: enabled" /etc/mongod.conf; then
    echo "   ⚠️  Could not auto-update config. Appending security config..."
    echo -e "security:\n  authorization: enabled" | sudo tee -a /etc/mongod.conf
fi

echo "🔹 Restarting MongoDB to apply security..."
sudo systemctl restart mongod

# Wait for restart
sleep 5

echo "✅ MongoDB Installed & Secured!"
echo "===================================================================="
echo "📝 CONNECTION STRING (Save this for your .env.local file!):"
echo ""
echo "mongodb://$DB_USER:$DB_PASS@127.0.0.1:27017/$DB_NAME"
echo ""
echo "===================================================================="
echo "👉 Next Step: Run './3_setup_app.sh'"
