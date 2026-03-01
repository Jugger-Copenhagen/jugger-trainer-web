# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` — Start React Router dev server with HMR
- `npm run build` — Build for production (outputs to `build/client/`)
- `npm run lint` — ESLint with zero-warnings policy (`--max-warnings 0`)
- `npm run typecheck` — Generate route types then type-check
- `npm run preview` — Preview production build locally

Node version: see `.nvmrc` (currently 24.13.0). Use `nvm use` before developing.

## Architecture

React 18 + TypeScript SPA built with Vite + React Router v7 framework mode (`ssr: false`), deployed to GitHub Pages.

**Backend**: Firebase (Realtime Database, Storage, Authentication with email/password + Google OAuth).

**State**: Zustand store (`app/lib/store.ts`) holds only auth user state. All other data flows through React Router loaders/actions.

**Data flow**: Each route module (`app/routes/*.tsx`) exports a `loader` function that fetches from Firebase before render → components receive data via `Route.ComponentProps` (`loaderData` / `actionData` props) → form submissions go through route module `action` exports which validate with Zod schemas then call Firebase.

**Styling**: Material-UI components with `sx` prop. Custom theme in `app/root.tsx` (green primary, pink secondary, purple error). Minimal raw CSS.

**Form pattern**: React Router `<Form>` with hidden `_method` field for PUT. Zod schemas (`ExerciseNewFormSchema`, `ExerciseEditFormSchema`) in `app/lib/validation.ts` validate FormData. Tags are encoded as `t:tagID` (existing) or `s:tagName` (new).

## Key Files

- `react-router.config.ts` — React Router framework config (`ssr: false`, `basename`)
- `app/routes.ts` — Route definitions (manual config, not filesystem-based)
- `app/root.tsx` — Root layout, AppBar, MUI theme, auth listener, `Layout`/`meta`/`links` exports
- `app/routes/*.tsx` — Route modules with co-located `loader`/`action`/component exports
- `app/lib/firebase.ts` — All Firebase API calls (auth, database, storage)
- `app/lib/types.ts` — Domain types (Exercise, Tag, ExertionLevel, Country)
- `app/lib/store.ts` — Zustand user store
- `app/lib/validation.ts` — Shared Zod form schemas and types

## Conventions

- Path alias: `@/*` maps to `app/*`
- `app/config.ts` is gitignored — contains Firebase config, injected at build time by CI from GitHub Actions variables
- Route types are auto-generated in `.react-router/types/` — run `react-router typegen` to regenerate
- 2-space indentation, single quotes, trailing commas (es5), 100-char line limit
- ESLint enforces zero warnings; imports auto-organized on save
- No test framework is configured. For now, manually test by running `npm run dev` and interacting with the UI.

## Scripts

- Migration scripts live in `scripts/migrations/` and are run with `node --experimental-strip-types scripts/migrations/<name>.ts`
- All scripts **must** support a `--dry-run` flag that logs intended changes without writing to the database
- Scripts authenticate via `FIREBASE_EMAIL` / `FIREBASE_PASSWORD` env vars (or interactive prompt)
