# Flow — Calendar + Self-Care (Prototype)

This is a calming, minimalist web app prototype that blends productivity and daily self-care.

## Quickstart
```bash
npm i
npm run dev
```

## Pages & Components
- Pages: Landing, Dashboard, Calendar, Notes, Self-Care, Settings
- Components: Shell, CalendarView, NotesSection, SelfCareSuggestions, HabitTracker, ThemeToggle, Card

## Tech
React + Vite + TypeScript, TailwindCSS, Framer Motion, React Router, Lucide icons

## Next Steps
Wire Supabase, Google Calendar/Gmail APIs, and Health/Fitness integrations.

## Deploy to GitHub Pages
This project is configured for GitHub Pages with SPA-safe routing via HashRouter.

1) Install deps (includes gh-pages)
```bash
npm i
```

2) Build and publish
```bash
npm run deploy
```

3) In your GitHub repo → Settings → Pages: select the `gh-pages` branch.

Notes:
- `scripts/postbuild.cjs` creates `dist/404.html` so deep links work.
- If you prefer clean URLs with BrowserRouter, set `base` in `vite.config.ts` and configure a custom 404 redirect on Pages (project pages).
