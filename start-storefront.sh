#!/bin/sh
set -e

echo "Starting Next.js storefront (dev)..."
cd /server/apps/storefront
exec ../../node_modules/.bin/next dev --turbopack -p 8000
