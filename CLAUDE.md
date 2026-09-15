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

## Identity assets

Marks live in `src/assets/identity/` and come from the final consolidated
identity kit (2026-09-15) at
`~/Projects/myseal/math-rorpheeyah-identity-final`. The display marks are
painted with `fill="currentColor"`, so they are imported as Astro SVG components
and **inlined** — an external `<img>` would not inherit the page colour and the
mark would be invisible in one theme. One CSS `color` per mark: ink `#1A1A18` on
light, paper `#F2F0EC` on dark. Six marks: `signature-compact` (the primary nav
lockup — the equal-height signature, seal spanning the full 40px height),
`seal-nav` (a standalone 32×32 nav seal, supplied but not currently used),
`circle`, `seal-open`, `seal-rounded`, `seal-framed` (the branding-section
family).

The favicon and OG image are **not** these currentColor marks: the favicon is
the kit's self-coloured V2 square seal (vermilion `#B5342A` on paper, in
`favicon/`, full ICO + PNG set + 180×180 apple-touch), and `og-image.png` is the
kit's approved 1200×630 composition. Both are copied into `public/` as-is.

The kit states a minimum size for each mark (signature-compact is 160×40). Both
the branding section and the navigation render below those minimums at the
owner's direction; see `docs/identity-size-overrides.md`. `docs/` also holds the
two asset briefs sent to the kit's author, kept as a record.

## Content caveats

Site copy was reconciled against the owner's CVs and claims neither CV supported
were removed. Two things remain unverified:

- **"30+ Apps Contributed To"** in `about.json` — the owner chose to keep it,
  reworded from "Built". It rests on Play Console access, not the CVs.
- **`summaryCards` and `expertise` in `Skills.astro`** — hardcoded marketing copy
  in component markup rather than content-file data. The worst claims were
  removed, but what remains tracks CV themes loosely rather than CV text. Do not
  treat it as verified.

Private data in the source CVs (date of birth, gender, birthplace, phone) must
not reach the site. It does not today; keep it that way when editing content.
