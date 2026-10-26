#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-3000}"
LOG_FILE="${LOG_FILE:-/tmp/alan-next-dev.log}"

if curl -fsS --max-time 2 "http://localhost:${PORT}/api/health" >/dev/null 2>&1; then
  echo "Next.js is already responding on :${PORT}"
  exit 0
fi

# Development server so edits are picked up without a rebuild on every boot.
nohup pnpm exec next dev --hostname 0.0.0.0 --port "${PORT}" \
  >"${LOG_FILE}" 2>&1 &

echo "Started Next.js on :${PORT} (log: ${LOG_FILE})"
