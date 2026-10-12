# E-commerce Frontend (Angular)

Angular 11 frontend for the E-commerce portfolio project.

## Requirements

Use a Node.js/npm version compatible with Angular CLI 11 and the versions pinned in `package-lock.json`. Very recent Node.js versions may not work with this legacy dependency set.

## Setup

```bash
npm ci
npm start
```

The development server normally runs at `http://localhost:4200`. Start the Laravel API separately (see `../backend/README.md`).

## API configuration

Update `src/environments/environment.ts` to point `backendUrl` and `apiUrl` to your local API. For a production build, configure `src/environments/environment.prod.ts` with the real HTTPS API host before running `npm run build`. Do not put secrets in frontend environment files; frontend values are visible to users.

## Legacy note

This app uses Angular 11 and older tooling. The code has not been upgraded to a currently supported Angular release.
