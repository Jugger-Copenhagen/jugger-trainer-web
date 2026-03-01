# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Type-check (tsc) then build for production
- `npm run lint` — ESLint with zero-warnings policy (`--max-warnings 0`)
- `npm run typecheck` — TypeScript type-checking only
- `npm run preview` — Preview production build locally

Node version: see `.nvmrc` (currently 24.13.0). Use `nvm use` before developing.

## Architecture

React 18 + TypeScript SPA built with Vite, deployed to GitHub Pages.

**Backend**: Firebase (Realtime Database, Storage, Authentication with email/password + Google OAuth).

**State**: Zustand store (`src/lib/store.ts`) holds only auth user state. All other data flows through React Router v6 loaders/actions.

**Data flow**: Route loaders (`src/routes/loaders.ts`) fetch from Firebase before render → components read via `useLoaderData()` → form submissions go through route actions (`src/routes/actions.ts`) which validate with Zod schemas then call Firebase.

**Styling**: Material-UI components with `sx` prop. Custom theme in `src/routes/root.tsx` (green primary, pink secondary, purple error). Minimal raw CSS.

**Form pattern**: React Router `<Form>` with hidden `_method` field for PUT. Zod schemas (`ExerciseNewFormSchema`, `ExerciseEditFormSchema`) validate FormData. Tags are encoded as `t:tagID` (existing) or `s:tagName` (new).

## Key Files

- `src/main.tsx` — Router definition and app entry point
- `src/routes/root.tsx` — Root layout, AppBar, MUI theme, auth listener
- `src/lib/firebase.ts` — All Firebase API calls (auth, database, storage)
- `src/lib/types.ts` — Domain types (Exercise, Tag, ExertionLevel, Country)
- `src/lib/store.ts` — Zustand user store
- `src/routes/actions.ts` — Form submission handlers with Zod validation
- `src/routes/loaders.ts` — Route data loaders

## Conventions

- Path alias: `@/*` maps to `src/*`
- `src/config.ts` is gitignored — contains Firebase config, injected at build time by CI from GitHub Actions variables
- 2-space indentation, single quotes, trailing commas (es5), 100-char line limit
- ESLint enforces zero warnings; imports auto-organized on save
- No test framework is configured. For now, manually test by running `npm run dev` and interacting with the UI.

## Scripts

- Migration scripts live in `scripts/migrations/` and are run with `node --experimental-strip-types scripts/migrations/<name>.ts`
- All scripts **must** support a `--dry-run` flag that logs intended changes without writing to the database
- Scripts authenticate via `FIREBASE_EMAIL` / `FIREBASE_PASSWORD` env vars (or interactive prompt)
