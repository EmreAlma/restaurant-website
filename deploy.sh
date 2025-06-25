#!/bin/bash

echo "🚀 Starting deployment..."

# Proje kök dizinine git
cd /root/restaurant-website || { echo "❌ Project folder not found"; exit 1; }

echo "📥 Pulling latest code from Git..."
git pull origin main || { echo "❌ Git pull failed"; exit 1; }

# ---------------------
# BACKEND - SPRING BOOT
# ---------------------
echo "🔧 Starting backend (Spring Boot)..."

cd backend || { echo "❌ Backend folder not found"; exit 1; }

# Build JAR with Maven
echo "🔨 Building backend project with Maven..."
mvn clean package -DskipTests || { echo "❌ Maven build failed"; exit 1; }

# Stop previous backend process
PID=$(pgrep -f "backend-0.0.1-SNAPSHOT.jar")
if [ -n "$PID" ]; then
  echo "🛑 Stopping existing backend process (PID: $PID)..."
  kill $PID
fi

echo "🚀 Starting backend JAR..."
nohup java -jar target/backend-0.0.1-SNAPSHOT.jar > ../backend.log 2>&1 &

cd ..


# ---------------------
# FRONTEND - NEXT.JS
# ---------------------
echo "🎨 Starting frontend (Next.js)..."

cd frontend || { echo "❌ Frontend folder not found"; exit 1; }

echo "📝 Creating .env.production with live API URL..."
cat > .env.production <<EOL
NEXT_PUBLIC_API_URL=http://172.238.101.163:8080
EOL


echo "📦 Installing dependencies..."
npm install || { echo "❌ npm install failed"; exit 1; }

echo "🏗 Building frontend..."
npm run build || { echo "❌ Build failed"; exit 1; }

echo "🚀 Starting frontend with pm2..."
pm2 restart nextjs || pm2 start npm --name nextjs -- start

echo "✅ Deployment completed successfully!"
