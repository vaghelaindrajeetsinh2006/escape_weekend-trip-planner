# 🌍 ESCAPE — Weekend Trip Planner

> Discover. Explore. Escape.

ESCAPE is a frontend-only weekend trip planner built for the Frontend Arena **ESCAPE — Weekend Trip Planner** challenge. It helps users discover destinations, narrow options with filters, compare choices, save favorites, and plan a short getaway through a polished responsive interface.

## 🚀 Live Demo

**Live website:** https://vaghelaindrajeetsinh2006.github.io/escape_weekend-trip-planner/

**GitHub repository:** https://github.com/vaghelaindrajeetsinh2006/escape_weekend-trip-planner

## 🎯 Problem Statement

> Design and build a simple, engaging travel experience that helps users discover and choose a destination for a short weekend trip. The experience should feel modern, intuitive, and visually appealing, with your own creative approach to the design and interactions.

## ✨ Core Features

- Destination discovery with curated travel cards
- Search across destination name, location, state, category, description and highlights
- Budget, duration and saved-only filters
- Recommended, price and rating sorting
- Destination detail modal with itinerary, budget breakdown and packing tips
- Favorites persisted in browser LocalStorage
- Weekend plan list persisted in browser LocalStorage
- Compare up to three destinations
- Surprise Me random destination interaction
- **Weekend Match** preference-based recommendation using vibe, budget and trip duration
- Responsive navigation and layouts across desktop, tablet and mobile
- Keyboard-friendly interactions, ARIA states and descriptive image text

## 🧭 User Journey

```text
Discover → Search / Filter → Explore → View Details → Save / Compare → Plan
```

## 🏗️ Architecture

The application keeps presentation, business logic and persistence separated: 

```text
React UI Components
        ↓
App-level orchestration
        ↓
Custom hooks + pure utility functions
        ↓
LocalStorage / static destination data
```

### Key modules

- `src/components/` — reusable UI components
- `src/hooks/useTripLists.ts` — favorites and planned-trip persistence
- `src/utils/filters.ts` — filtering, sorting and Weekend Match scoring
- `src/utils/storage.ts` — validated LocalStorage access
- `src/data/destinations.ts` — curated static destination data
- `tests/smoke.test.mjs` — repository and configuration smoke checks
- `.github/workflows/main.yml` — automated validation and GitHub Pages deployment
- `docs/ARCHITECTURE.md` — architecture and data-flow notes
- `docs/QA_CHECKLIST.md` — pre-submission quality checklist

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI |
| TypeScript | Type safety |
| Vite | Development and production build |
| Tailwind CSS | Responsive styling |
| Lucide React | Icons |
| LocalStorage | Client-side persistence |
| GitHub Actions | CI/CD |
| GitHub Pages | Hosting |

## ⚡ Performance Strategy

- Local image assets instead of runtime image API dependencies
- Optimized WebP destination images
- Lazy loading and async decoding for secondary images
- High-priority loading only for critical hero imagery
- Small dependency surface
- Vite production bundling
- Centralized filter calculations instead of duplicated UI logic

## ♿ Accessibility

The interface uses semantic structure and accessible interaction patterns, including:

- Descriptive `alt` text for images
- ARIA labels and pressed states for toggle controls
- Keyboard activation for destination cards
- Focus-visible styling through component classes
- Clearly labelled filters and form controls
- Escape-key support for dialogs

## 🔐 Security & Data Handling

ESCAPE is frontend-only and does not require authentication, payment processing, a database, or private API keys. User preferences stay in browser LocalStorage. Stored values are parsed and validated against known destination IDs before use.

## 🧪 Validation

Run the following commands before deployment:

```bash
npm ci
npm test
npm run typecheck
npm run build
```

- `npm test` checks critical repository structure, deployment configuration, local asset availability, absence of unsafe `any` casts in the main app, and removal of unused AI/API configuration.
- `npm run typecheck` performs TypeScript validation.
- `npm run build` verifies the production bundle.

## 🌐 GitHub Pages Deployment

The deployment workflow performs validation before publishing: 

```text
Push to main
    ↓
npm ci
    ↓
npm test
    ↓
npm run typecheck
    ↓
npm run build
    ↓
Upload Pages artifact
    ↓
Deploy to GitHub Pages
```

The Vite base path is configured for the repository:

```ts
base: '/escape_weekend-trip-planner/'
```

## 💻 Local Development

```bash
git clone https://github.com/vaghelaindrajeetsinh2006/escape_weekend-trip-planner.git
cd escape_weekend-trip-planner
npm install
npm run dev
```

Vite normally serves the development build at `http://localhost:3000/`.

## 📦 Production Build

```bash
npm run build
npm run preview
```

## 🚫 Scope

This challenge implementation intentionally avoids backend services. It does not include real booking, payment processing, authentication, database persistence or third-party travel APIs. Mock/static data is used to keep the experience fast, portable and frontend-only.

## 🔮 Future Improvements

- Interactive maps
- Live weather and transport information
- Real travel inventory APIs
- AI-assisted destination recommendations
- Cloud-saved trips and accounts
- Real booking integrations

## 👨‍💻 Author

**Vaghela Indrajeetsinh**

B.Tech Computer Science Engineering Student

GitHub: https://github.com/vaghelaindrajeetsinh2006

---

<p align="center"><strong>🌍 Your weekend. Your destination. Your ESCAPE. ✈️</strong></p>
