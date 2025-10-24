FROM php:8.3-apache

# Paquetes y extensiones PHP
RUN apt-get update && apt-get install -y \
    git unzip libzip-dev libpq-dev libicu-dev libonig-dev gnupg curl \
 && docker-php-ext-install intl zip pdo pdo_pgsql bcmath

# Apache servirá /public y activamos mod_rewrite
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN a2enmod rewrite && \
    sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
      /etc/apache2/sites-available/000-default.conf /etc/apache2/apache2.conf

# Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

WORKDIR /var/www/html

# Instala deps PHP primero (mejor cache)
COPY composer.json composer.lock ./
RUN composer install --no-dev --prefer-dist --no-interaction --no-progress

# Copia la app
COPY . .

# Build de assets (Vite)
RUN if [ -f package.json ]; then \
      curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
      apt-get install -y nodejs && \
      npm ci && npm run build; \
    fi

# Permisos Laravel
RUN chown -R www-data:www-data storage bootstrap/cache && \
    chmod -R 775 storage bootstrap/cache

# Entrypoint (normaliza fin de línea por si editaste en Windows)
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh && sed -i 's/\r$//' /entrypoint.sh

EXPOSE 80
CMD ["/entrypoint.sh"]
