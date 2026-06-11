#!/bin/sh
set -e

echo "Waiting for postgres at $DB_HOST:${DB_PORT:-5432}..."
until nc -z "$DB_HOST" "${DB_PORT:-5432}"; do
  echo "  postgres not ready — retrying in 2s"
  sleep 2
done
echo "Postgres is ready."

echo "Running migrations..."
cd /server/apps/backend/.medusa/server
node_modules/.bin/medusa db:migrate

echo "Starting Medusa backend (prod)..."
exec node_modules/.bin/medusa start
