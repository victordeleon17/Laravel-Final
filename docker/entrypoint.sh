#!/usr/bin/env bash
set -e

# Genera APP_KEY si no existe
if [ -z "$APP_KEY" ]; then
  php artisan key:generate --force || true
fi

# Enlaces y cachés
php artisan storage:link || true
php artisan config:cache || true
php artisan route:cache || true
php artisan view:cache || true

# Migraciones si hay DB
if [ -n "$DB_CONNECTION" ]; then
  php artisan migrate --force || true
fi

# Inicia Apache
apache2-foreground
