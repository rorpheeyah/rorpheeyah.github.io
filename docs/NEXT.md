# What's left

Handoff as of 14 September 2026. The site is live on Astro at
https://rorpheeyah.github.io — content reconciled against the CVs, identity kit
adopted, assets pruned. Nothing below is blocking; the site is in a good state.

Ordered by how much they actually matter.

---

## Worth doing

### 1. Project case studies — the real content gap

The portfolio lists 32 apps as a grid of icons. What it does not say is what was
actually done on any of them. The owner has confirmed substantial involvement in
**HDEXPENSE, BZPEXPENSE, Bizplay and CheckPay**, and initiating the first two.

Missing per app: responsibilities, initiation scope, features owned,
architecture decisions, problems solved, evidenced outcomes. These cannot be
inferred from the CV's skills list — they need to come from the owner.

This is the single highest-value change available. A recruiter learns more from
one honest case study than from 32 icons.

### 2. The app grid reads as undifferentiated to an international audience

Most of the 32 tiles carry Korean names (비즈플레이, 결재함, 비플 법인카드…). To a
Cambodian or Korean reader that is meaningful; to everyone else it is a wall of
unfamiliar labels with no indication of scale, sector, or contribution.

Options: group by sector with a line of English context per group; surface the
four confirmed projects above the grid and collapse the rest behind a
disclosure; or add a short English descriptor to each tile.

### 3. `Skills.astro` hardcoded copy

`summaryCards` and `expertise` are marketing copy written directly into
component markup, not content-file data. The unsupportable claims were removed
("PCI compliance", "Multi-tenant architecture design", "Secure transaction
processing architecture design"), but what remains — banking security
implementations, on-premise deployment, large-scale deployment strategies —
tracks CV themes loosely rather than CV text.

Either move it into `skills.json` so it is reviewable alongside the rest of the
content, or rewrite it from the CVs, or drop it.

### 4. "30+ Apps Contributed To"

The only live claim with no CV backing. Retained deliberately, reworded from
"Built". It rests on Play Console access. Worth either sourcing properly or
dropping — it is the one number someone could ask about.

---

## Polish

- **Branding marks wrap 3 + 1 at mobile.** Four marks in a flex row; at 390px
  the fourth drops alone. 2 × 2 would be tidier. `src/components/Branding.astro`.
- **The "Personal Branding" heading now outweighs the marks it introduces**,
  since the marks were scaled down to project-icon size. Shrinking the heading
  is the next step if the section should be quieter still.
- **Education and Skills sections are not in the navigation.** They exist and
  render; the nav lists Home, About, Experience, Projects, Identity, Contact.
  Deliberate or oversight — worth a decision.

---

## Infrastructure

- **Bump the GitHub Actions.** The deploy run warns that `actions/checkout@v4`,
  `actions/setup-node@v4` and `actions/upload-artifact@v4` target the deprecated
  Node 20 and are being forced onto Node 24. Moving them to `@v5` clears it.
  This is about the *action runtimes*, not the `node-version: '22'` the build
  needs for Astro 7 — leave that alone.
- **`gh-pages` branch is stale** (last touched ~7 months ago). The Actions
  deploy publishes directly and does not use it. Safe to delete once confirmed.
- **Branch cleanup.** `content/cv-refresh` and `stack/astro` are fully merged
  into `main` and can go. `branding/identity-kit` is *not* merged and is now
  obsolete — its three commits touch React components that no longer exist; keep
  it only as history, and prefer redoing that work on the Astro components.
  `astro-rebuild` still exists locally and on the remote.

---

## Assets

- **180 × 180 apple-touch-icon** is the one gap from the original asset spec.
  The V2 Final favicon set tops out at 256, which is what `Base.astro`
  substitutes. It works; the correct size would be better.

---

## Measurement

- **No real performance metrics have been taken.** First-load payload was
  measured carefully (118 KB → 44 KB gzipped, zero JS files), but Lighthouse or
  Core Web Vitals have never been run against the deployed site. If the
  performance story matters, that is the number to have.
- **Mobile was verified at 390px only**, via a same-origin iframe, because
  window resizing is unreliable in the dev environment. No horizontal overflow,
  projects grid at 3 columns, all sections stack. Not checked on a real device.

---

## Decided against, for the record

- **Award proof images.** Photos of the Best Rookie trophy and certificate exist
  at `~/Documents/personal/award/`. Decided not to publish: portfolios do not
  evidence their claims and doing so reads as defensive; the photos are casual
  phone shots that would undercut a clean design; it foregrounds a first-year
  award for a 6+ year senior developer; and the certificate carries the CEO's
  signature and a company stamp, which is not the owner's alone to publish.
  A LinkedIn credential entry is the better route if verification matters.
