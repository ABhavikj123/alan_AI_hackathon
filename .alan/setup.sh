#!/usr/bin/env bash
set -euo pipefail

# The base image ships Node and pnpm; install pnpm only if it is missing.
if ! command -v pnpm >/dev/null 2>&1; then
  npm install -g "pnpm@$(node -p "require('./package.json').packageManager.split('@')[1]")"
fi

pnpm install --frozen-lockfile

# Keep the Next.js build cache out of the image-independent layer noise.
pnpm exec next telemetry disable >/dev/null 2>&1 || true
