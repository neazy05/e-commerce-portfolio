# Full-Stack E-commerce Application

A portfolio project built with **Angular 11**, **Laravel 8 / PHP**, and **MySQL**. The repository is organized as a frontend SPA and a REST-style backend API.

> **Project status:** legacy learning/portfolio project. The code was packaged and documented for review; it has not been fully rebuilt or regression-tested in this environment. Do not use it for production or real payments without upgrading dependencies and completing a security review.

## Project structure

```text
.
├── frontend/   # Angular application
├── backend/    # Laravel API, routes, migrations, models
├── README.md
├── SECURITY.md
└── .gitignore
```

## Features represented in the code

- User authentication and profile-related flows
- Product, category, and market management
- Cart and order workflows
- Favorites and product/delivery ratings
- Admin and delivery-related workflows
- Wallet/payment-related API routes and coupon/QR-related functionality

Feature availability depends on local database setup and configuration. Please review the implementation before describing any feature as production-ready.

## Technology stack

| Layer | Technologies |
|---|---|
| Frontend | Angular 11, TypeScript, Angular Material, RxJS |
| Backend | PHP, Laravel 8, REST-style API, JWT package |
| Database | MySQL (configured through Laravel environment settings) |
| Tooling | npm, Composer, Git |

## Run locally

### 1. Start the backend

See [`backend/README.md`](backend/README.md). In short: install Composer dependencies, copy `.env.example` to `.env`, configure a local database, generate the Laravel application key, run migrations, and start the Laravel server on `127.0.0.1:8000`.

### 2. Start the frontend

See [`frontend/README.md`](frontend/README.md). Use a Node.js version compatible with Angular CLI 11, run `npm ci`, then `npm start`. The frontend development server normally runs at `http://localhost:4200`.

### 3. Configure API URLs

Frontend API URLs are centralized in `frontend/src/environments/environment.ts` for local development and `environment.prod.ts` for production. Update these values to match your environment. Do not commit secrets or production credentials.

## Security and limitations

- `.env`, dependency folders, build output, logs, and local IDE files are excluded from the repository.
- This is a legacy Angular 11 / Laravel 8 codebase; dependency compatibility and known security issues must be reviewed before deployment.
- Payment-related routes in a portfolio project are not evidence of a certified or production payment integration. Do not use real payment credentials.
- No complete automated test suite, live deployment, or production security audit is claimed.

## Suggested portfolio review

1. Install and run both applications locally.
2. Add screenshots to `docs/screenshots/` after verifying the screens.
3. Review authentication and role-based authorization for every administrative route.
4. Add tests for critical flows and update the legacy framework dependencies.

## Author

**Abdelrhman Nyazi** — Informatics / Full-Stack Development portfolio.

GitHub: [@neazy05](https://github.com/neazy05)
