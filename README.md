# Alan AI Hackathon

A minimal starter for the hackathon project: Next.js with the App Router,
TypeScript, Tailwind CSS, React Icons, Zod, and Zustand. It renders a landing
page, a client-side counter that persists through a Zustand store, and a
Zod-validated `/api/health` readiness endpoint.

## Stack

| Tool | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org/docs) | App Router, server components, route handlers |
| [TypeScript](https://www.typescriptlang.org/) | Strict typing across the app |
| [Tailwind CSS 4](https://tailwindcss.com/docs) | Utility-first styling |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon set used by the starter UI |
| [Zod](https://zod.dev/) | Runtime validation for environment values and store state |
| [Zustand](https://zustand.docs.pmnd.rs/) | Client state with `localStorage` persistence |

## Getting started

Requires Node.js 20+ and pnpm (the repo pins the pnpm version through
`packageManager`).

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>. The health endpoint is at
<http://localhost:3000/api/health>.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run the TypeScript compiler without emitting files |

## Environment variables

No variables are required. Copy `.env.example` to `.env.local` to override
the defaults:

| Name | Default | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_NAME` | `Alan AI Hackathon` | Product name shown in the UI and metadata |

Values are parsed once by `src/lib/env.ts`; an invalid value fails fast at
startup.

## Project structure

```text
src/
  app/
    api/health/route.ts   Zod-validated readiness endpoint
    globals.css           Tailwind import and theme tokens
    layout.tsx            Root layout, fonts, metadata
    page.tsx              Landing page
  components/
    counter-card.tsx      Client component using the Zustand store
    stack-grid.tsx        Stack overview with React Icons
  lib/
    env.ts                Zod-validated environment schema
  stores/
    counter-store.ts      Zustand store with Zod-validated persistence
```

## Next steps

This is intentionally a starter, not the product. Replace `src/app/page.tsx`
and add features under `src/app`, `src/components`, `src/lib`, and
`src/stores`.
