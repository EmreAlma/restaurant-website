#!/bin/bash

echo "🛑 Stopping application..."

# ---------------------
# STOP BACKEND (Spring Boot)
# ---------------------
echo "🔍 Searching for backend JAR process..."
BACKEND_PID=$(pgrep -f "backend-0.0.1-SNAPSHOT.jar")

if [ -n "$BACKEND_PID" ]; then
  echo "🛑 Stopping backend (PID: $BACKEND_PID)..."
  kill $BACKEND_PID
else
  echo "ℹ️ No backend process found."
fi

# ---------------------
# STOP FRONTEND (Next.js with pm2)
# ---------------------
echo "🔍 Checking pm2 for frontend process..."
if command -v pm2 >/dev/null 2>&1; then
  if pm2 list | grep -q "nextjs"; then
    echo "🛑 Stopping frontend (pm2 process: nextjs)..."
    pm2 stop nextjs
  else
    echo "ℹ️ No pm2 process named 'nextjs' found."
  fi
else
  echo "⚠️ pm2 not found. Skipping frontend stop."
fi

echo "✅ All stop operations completed."
