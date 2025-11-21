# Triple Aces LinkTree Clone

This repository contains a full-stack Linktree-style application with a Vite-powered React frontend, an Express server, and shared database schema definitions via Drizzle ORM. The project is preconfigured for Replit and ready to evolve into a hosted bio-link experience backed by APIs and a real database.

## Project Layout

- **Root** – Project tooling and shared configuration.
- **LinkTreeClone/client/** – React + TypeScript frontend using Tailwind CSS, shadcn/ui components, and lucide-react icons.
- **LinkTreeClone/server/** – Express server shell set up to mount API routes under `/api`.
- **LinkTreeClone/shared/** – Shared Drizzle ORM schema and Zod validation for the Postgres-backed data model.

## Frontend

- **Entry:** `client/index.html` mounts the React app at `#root` and loads `src/main.tsx`.
- **Bootstrap:** `client/src/main.tsx` renders the `App` component and imports global styles from `index.css`.
- **Routing:** `client/src/App.tsx` uses `wouter` to render the `BioLink` page on `/` and a `NotFound` fallback for unknown routes. It wraps the app with React Query, tooltip, and toast providers.
- **Bio Link UI:** `client/src/pages/bio-link.tsx` implements the Triple Aces profile page with avatar, bio, social icon buttons (Instagram and Facebook), and link cards styled with gradients, shadows, and hover/active elevation effects. Media assets live under `client/src/assets/generated_images/`.
- **Styling:** `client/src/index.css` enables Tailwind layers and defines CSS variables plus helper classes for elevation effects. A full set of shadcn/ui components lives in `client/src/components/ui/` for reuse across the app.
- **Utilities:** Hooks like `use-mobile` and `use-toast` live in `client/src/hooks/` to support responsive behavior and toasts.

## Backend

- **Bootstrap:** `server/app.ts` configures Express with JSON parsing, logging, error handling, and defers to `registerRoutes` for API setup before starting the HTTP server.
- **Routing:** `server/routes.ts` currently provides a skeleton that should mount all endpoints under `/api` and uses shared storage for CRUD operations.
- **Storage:** `server/storage.ts` offers an in-memory `MemStorage` implementation for user data (with `getUser`, `getUserByUsername`, and `createUser`). It is designed to be replaced by a persistent Drizzle/Postgres backend later.
- **Dev/Prod Entrypoints:** `server/index-dev.ts` runs Vite in middleware mode to serve the client during development, while `server/index-prod.ts` serves the built client and API in production.

## Shared Schema

`shared/schema.ts` defines the `users` table using Drizzle ORM with a UUID primary key, unique username, and password fields, alongside Zod schemas for insert validation and typed models for creation and retrieval.

## Replit Setup

- Replit configuration runs `npm run dev`, which starts the Express server and Vite dev server on port 5000 (exposed as port 80 externally).
- Scripts: `npm run dev`, `npm run build` (Vite build + esbuild for the server), `npm start` (serve production build), and `npm run db:push` (Drizzle migrations).

## Next Steps

- Add real URLs to the social buttons and link cards to make the bio page functional.
- Extract profile copy and links into a small config module for easier updates.
- Implement backend routes (e.g., `/api/profile/:username`) and swap in persistent storage using the shared schema for multi-user support.
