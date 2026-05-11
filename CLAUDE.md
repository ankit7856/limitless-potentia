# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # local dev server (localhost:4321)
npm run build      # production build → ./dist
npm run preview    # preview built output
```

No test suite. No linter configured beyond TypeScript strict mode.

## Architecture

Astro 5 static site with Tailwind CSS v4 (Vite plugin, not PostCSS). Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `master`.

**Content model** — no Astro content collections. Blog posts are typed objects in [`src/content/posts.ts`](src/content/posts.ts). To add a post: add entry to `posts` array, create matching `src/pages/blog/<slug>.astro`.

**Routing** — file-based. Blog posts live at `src/pages/blog/[slug].astro` as individual static files (not dynamic `[slug]` route).

**Styling** — all shared CSS lives in [`src/styles/global.css`](src/styles/global.css). Custom design tokens defined via `@theme` (Tailwind v4 syntax): `--color-mint` (`#98FFD9`), `--color-bg` (`#050505`). Reusable CSS classes (`.card-blur`, `.btn-primary`, `.btn-secondary`, `.chart-box`, `.section-tag`) are defined there — use these before adding Tailwind utility chains.

**Layout** — [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) wraps every page. Injects `GlowBg` (animated ambient orbs), `Nav`, `Footer`, and `CalEmbed` (Cal.com booking widget). The `CalEmbed` script is global; trigger it with `<CalButton />` anywhere.

**Cal.com integration** — booking link is `aankitm/45mins`. `CalButton` renders the trigger button; `CalEmbed` loads the embed script once in the layout. Both are in `src/components/`.

**Site URL** — `https://limitlesspotentia.fit` (set in `astro.config.mjs`, used for sitemap and OG image absolute URLs).
