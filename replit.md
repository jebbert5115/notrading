# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### stop-trading (`artifacts/stop-trading/`)
- React + Vite static site for the ARC Raiders "You Cannot Trade Here" page
- Deployed to GitHub Pages at `no-trad.ing`
- Two pages: Home (trading rules, humorous) + Wall of Shame (offender screenshots)
- Discord embed meta tags set to show the attached image preview
- GitHub Actions workflow at `.github/workflows/deploy.yml`

**Adding offenders to Wall of Shame:**
Edit `artifacts/stop-trading/src/pages/WallOfShame.tsx` and add entries to the `offenders` array:
```typescript
{ id: 4, imageUrl: "https://your-image-url.png", date: "2026-04-09", note: "Optional caption" },
```
See also: `wall-of-shame-photos/README.md` for quick instructions.
