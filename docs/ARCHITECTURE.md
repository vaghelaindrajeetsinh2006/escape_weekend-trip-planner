# ESCAPE Architecture Notes

## Responsibility Split

`App.tsx` owns page-level state and coordinates the experience. Reusable presentation is kept in `src/components/`.

Business logic is separated into small modules:

- `src/hooks/useTripLists.ts` — favorite and planned-trip state with persistence.
- `src/utils/filters.ts` — destination filtering, sorting and Weekend Match scoring.
- `src/utils/storage.ts` — safe, validated browser storage access.
- `src/data/destinations.ts` — curated static destination content.

## Data Flow

```text
User interaction
     ↓
React component
     ↓
App state / custom hook
     ↓
Pure utility function
     ↓
Rendered result or LocalStorage persistence
```

## Deployment Boundary

The application is intentionally frontend-only. GitHub Actions validates the repository, runs tests and TypeScript checks, creates a Vite production bundle, uploads the `dist/` artifact and deploys it to GitHub Pages.
