# E-commerce API (Laravel)

This directory contains the Laravel API for the E-commerce portfolio project. The API source includes routes and controllers for authentication, products, categories, markets, orders, favorites, ratings, payments/wallet actions, and delivery workflows. Confirm the available endpoints in `routes/api.php`.

## Requirements

- PHP compatible with the dependency versions in `composer.json` (the project was originally built on Laravel 8; use a compatible PHP/Composer environment).
- MySQL or a compatible database.
- Composer.

## Local setup

1. Install dependencies: `composer install`
2. Create a local environment file: `cp .env.example .env` (on Windows, copy the file manually).
3. Set `APP_KEY`, database credentials, and other local values in `.env`. Never commit `.env`.
4. Generate an application key: `php artisan key:generate`
5. Create the database specified in `.env`, then run migrations: `php artisan migrate`
6. Start the API: `php artisan serve --host=127.0.0.1 --port=8000`

The Angular frontend is configured for `http://127.0.0.1:8000` by default. Update `frontend/src/environments/environment.ts` if your local API uses another address.

## Notes

- This is a legacy Laravel 8 application. Dependency installation and security maintenance may require updates before production use.
- No live payment credentials or production secrets should be added to this repository. Review payment-related code and authorization before deploying.
- API behavior has not been fully regression-tested as part of this portfolio packaging.
