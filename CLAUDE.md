# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio (Math Rorpheeyah, Senior Android Developer) deployed to GitHub Pages at `https://rorpheeyah.github.io`. Astro + TypeScript + Tailwind 3. Migrated from React 18 + Vite; there is no React in the project any more.

## Commands

```bash
npm install
npm run dev        # astro dev, port 8080
npm run build      # astro check && astro build -> dist/
npm run preview    # serve the built dist/
npm run check      # type/diagnostic check only
npm run lint       # eslint (flat config, .ts/.js only - .astro is covered by astro check)
```

**Node 22.12+ is required** (Astro 7 engine constraint). CI pins Node 22; older versions fail to build.

There is no test suite.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on push to `main` (`npm ci`, `actions/deploy-pages`). `base` is `/` in `astro.config.mjs` because this is a GitHub *user* site.

`pnpm-lock.yaml` / `pnpm-workspace.yaml` sit untracked in the working directory. CI installs with npm, so dependency changes must land in `package-lock.json`.

## Architecture

**Content is imported at build time, never fetched.** Everything in `src/data/*.json` is pulled in through `src/data/index.ts`, which exports typed singletons (`hero`, `about`, `experience`, ...). Components import those directly, so all copy is rendered into the HTML. Editing a JSON file requires a rebuild; there is no runtime content loading and no loading state anywhere.

This replaced a React setup where seven components each independently fetched the same eight JSON files from `public/content/` on mount. If you add a content file, add it to `src/data/index.ts` with an interface — that file is the schema.

**One page, no router.** `src/pages/index.astro` stacks the sections; navigation is anchor-scroll between section ids (`hero`, `about`, `experience`, `projects`, `branding`, `contact`). The CV is a modal (`src/components/CV.astro`) rendered in the page and toggled by any element carrying `data-open-cv`, not a route.

**Interactivity is vanilla JS in component `<script>` blocks.** No framework, no islands, no hydration. The build emits **zero** JavaScript files — Astro inlines the scripts. Conventions:

- `data-open-cv` — opens the CV modal (several buttons across sections use it)
- `data-theme-toggle` — wired up centrally in `Base.astro`
- Modals are markup in the page, hidden with the `hidden` attribute and populated from a `data-*` JSON payload on the trigger (see `Projects.astro`)

**Two non-obvious things that will bite you:**

1. `global.css` defines `[hidden] { display: none !important; }`. Without it, Tailwind's `flex` utility beats the `hidden` attribute and every modal renders open. Do not remove it.
2. Nav active-section highlighting is **position-based**, not an IntersectionObserver. With a shrunken `rootMargin` band, a tall section can never reach a ratio threshold, so the observer callback never fires. See the comment in `Nav.astro`.

**Icons** come from `astro-icon` + Iconify (`@iconify-json/lucide`, `@iconify-json/simple-icons`), inlined as SVG at build time. The content JSON still refers to icons by the old react-icons / lucide-react component names (`FaGithub`, `HiOutlineBriefcase`, ...); `src/lib/icons.ts` maps those onto Iconify ids so the data files did not need rewriting. An unmapped name silently falls back to `lucide:dot` — add new names to that map.

## Theming

`Base.astro` holds a blocking `is:inline` script that applies the stored theme before first paint, so there is no flash. It toggles a `dark` class on `<html>` and persists to `localStorage` under `app-theme`, falling back to `prefers-color-scheme` when nothing is stored. Colours are shadcn-style HSL CSS variables in `src/styles/global.css`; use the Tailwind tokens (`bg-background`, `text-muted-foreground`) rather than literal colours.

## Conventions

- `@/*` aliases `./src/*`, set in both `astro.config.mjs` and `tsconfig.json`.
- `tsconfig.json` extends `astro/tsconfigs/strict` but relaxes `strictNullChecks` and `noImplicitAny`, carried over from the React setup.
- Tailwind 3 runs through `postcss.config.js`, not an Astro integration (`@astrojs/tailwind` is deprecated). `tailwind.config.ts` must keep `.astro` in its content globs.

## Content caveats

Site copy was reconciled against the owner's CVs; claims that neither CV supported were removed. Two blocks in `Skills.astro` (`summaryCards`, `expertise`) are hardcoded marketing copy rather than content-file data, and include claims no CV backs — "Multi-tenant architecture design", "Secure transaction processing architecture design". They were ported as-is from the React version and are still pending review. Do not treat them as verified.
