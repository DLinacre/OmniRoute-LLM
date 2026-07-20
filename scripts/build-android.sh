#!/bin/bash
set -euo pipefail

# DLinacre LLM.apk build script — Capacitor Android wrapper for OmniRoute
# Forked from diegosouzapw/OmniRoute v3.8.48 for GitHub account DLinacre

APP_NAME="LLM"
APK_OUTPUT="LLM.apk"
REPO_URL="https://github.com/DLinacre/OmniRoute"

export NODE_OPTIONS="--max-old-space-size=8192"

echo "=== DLinacre LLM.apk Auto-Build ==="
echo "Repo: $REPO_URL"
echo "Source tag: v3.8.48"
echo "Target APK: $APK_OUTPUT"

# 1. Install dependencies (skip native SQLite build for speed in CI)
export OMNIROUTE_SKIP_POSTINSTALL=1
npm ci || npm install

# 2. Build the Next.js web bundle (standalone server, then serve for Capacitor)
echo "--- Building Next.js standalone ---"
npm run build || (echo "Full build failed; attempting minimal web build..."; npm run build:backend)

# 3. Initialize Capacitor Android platform (if not present)
if [ ! -d "android" ]; then
  echo "--- Adding Android platform ---"
  npx cap add android || true
fi

# 4. Sync web assets into android/app/src/main/assets/public
echo "--- Syncing Capacitor ---"
npx cap sync android || npx cap copy android

# 5. Build the debug APK
echo "--- Building Android debug APK ---"
cd android
echo "Using Gradlew (debug)"
./gradlew assembleDebug || ./gradlew build

# 6. Rename and copy the final APK
echo "--- Packaging $APK_OUTPUT ---"
find app/build/outputs/apk/debug -name "*.apk" -type f | head -n 1 | while read apk; do
  cp "$apk" "../../$APK_OUTPUT"
  echo "Copied APK: $apk -> $APK_OUTPUT"
done

echo "=== Build Complete ==="
echo "Output: $(pwd)/../../$APK_OUTPUT"
