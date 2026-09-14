# Branding asset request

A self-contained brief for whoever produces the next identity kit — a designer,
or a design tool. It assumes no knowledge of this repository.

Copy the block below verbatim. Everything outside it is context for us, not for
the recipient.

## Why this exists

The site currently ships the superseded `ic_seal_*` PNGs. The blocking gap is
navigation: the identity rules require the full horizontal signature (seal +
divider + both languages) in a nav bar, but that lockup has a 640px working
minimum and no conventional navbar can hold it. A compact adaptation has to be
designed; it cannot be derived by scaling the existing one down.

Two technical asks in the brief carry most of the engineering value:

- **`currentColor` SVGs.** `Nav.astro` currently runs a `MutationObserver` whose
  only job is swapping two PNGs when the theme flips. One `currentColor` file
  per mark removes that mechanism and halves the file count.
- **A file-size budget.** The existing horizontal signature is a single
  flattened 93KB path. The whole page is 29KB gzipped, so an unoptimised lockup
  would be the largest asset on the site by a wide margin.

## The brief

```text
PERSONAL IDENTITY KIT — ASSET REQUEST
For: rorpheeyah.github.io (personal portfolio, Astro static site)
Owner: Math Rorpheeyah / ម៉ាត់រ៉ភីយ៉ះ

=== NAME AND READING ===
Surname: MATH / ម៉ាត់      Given name: RORPHEEYAH / រ៉ភីយ៉ះ
Full Khmer text has no spaces. Keep both E letters in RORPHEEYAH.
Never render it "RORPHEYAH". The short seal reads រ៉ភីយ៉ះ.
Use supplied outlined lettering; do not retype or reshape it in a live font.

=== PALETTE (exact, no substitutions) ===
Ink        #1A1A18
Vermilion  #B5342A
Paper      #F2F0EC
Black      #000000
White      #FFFFFF (allowed ground)

Contrast, for reference: ink/paper 15.3:1 · vermilion/paper 5.29:1
Avoid vermilion on ink (2.9:1 — fails contrast).
Flat colour only. No gradients, shadows, filters, or self-tints.

=== DELIVERABLE 1 — COMPACT NAVIGATION LOCKUP (PRIORITY) ===
This is the blocking item. Everything else is secondary.

The existing horizontal signature (seal + vertical divider + bilingual name,
946 x 312 artboard) has a 640px working minimum. No normal website navigation
bar can hold that. A compact adaptation is needed.

Requirements:
- MUST retain all three elements: seal, divider, and BOTH Khmer and Latin name.
  An icon-only mark or an English-only text label is not acceptable.
- MUST stay legible at 36px rendered height. Comfortable at 40-48px.
- Aspect ratio 4:1 or tighter. At 40px tall that means 160px wide or less.
- State the working minimum width AND height with the delivery.

Design note: the reason the original fails at small sizes is that the name
block occupies only ~58% of the artboard height, so it shrinks away before the
seal does. Increasing the name's share of the height — for example by reducing
the seal tile relative to the name — is the lever that makes navbar scale work.
Simply scaling the existing lockup down does not.

=== DELIVERABLE 2 — BRANDING SECTION MARKS ===
3 to 5 marks that read as a family. Not a full variation matrix; the website
section should read as a portfolio element, not a brand manual.

For EACH mark supply: the file, a display name, one short line of description,
and its minimum CSS width.

=== DELIVERABLE 3 — SUPPORTING (only if the kit is being regenerated) ===
- apple-touch-icon: 180 x 180 PNG, opaque background
- Favicon set: SVG + ICO + PNG at 16, 32, 48, 64, 128, 256
- Open Graph / social image: 1200 x 630 PNG, opaque background

=== FILE FORMAT ===
SVG for all marks. Raster is unsuitable: these render anywhere from 24px to
640px and must stay sharp.

STRONGLY PREFERRED — single-colour SVGs using fill="currentColor" rather than a
hardcoded hex. The site has light and dark themes; with currentColor one file
per mark is tinted in CSS. With hardcoded fills, every mark must ship twice
(ink for light backgrounds, paper for dark) and the site needs extra code to
swap files on theme change.

If currentColor is not possible, supply two variants per mark:
  <name>-ink.svg    (#1A1A18, for light backgrounds)
  <name>-paper.svg  (#F2F0EC, for dark backgrounds)

All SVGs:
- Transparent background
- A viewBox attribute (required)
- Flat single colour, no embedded raster, no external font references
- Reasonably optimised paths

FILE SIZE BUDGET: the navigation lockup is loaded on every page view. Target
under 20KB, and treat 40KB as a hard ceiling. For comparison, the current
horizontal signature is a single flattened path of 93KB, which is too heavy for
this use. Simplify or subset the geometry if needed to hit the budget.

=== NAMING ===
Lowercase, hyphenated, descriptive of the mark rather than its use:
  signature-compact.svg, seal-open.svg, seal-rounded.svg

=== METADATA TO DELIVER ALONGSIDE ===
1. Minimum CSS width for each mark (and height where the mark is not square)
2. Which mark is the navigation lockup, and which are decorative or avatar-only
3. Clear-space rule per mark
4. Any mark that must never be cropped or scaled below a stated size
5. Whether the compact lockup REPLACES the 640px horizontal signature or sits
   alongside it
6. Whether this kit replaces or extends the previous one — if it replaces it,
   the favicon and social artwork need regenerating too

=== DO NOT ===
- Stretch, shear, rotate, or redraw a complete reading mark
- Recolour individual components of a lockup independently
- Place vermilion on ink or on near-black
- Deliver a mark without a stated minimum size
```

## Where these land once delivered

| Asset | Used by | Rendered size |
|---|---|---|
| Compact lockup | `Nav.astro` desktop + mobile, CV modal header | 36–48px high |
| Branding marks | `Branding.astro` | sized to each mark's stated minimum |
| Favicon set | `Base.astro` | 16–256px, plus 180px touch icon |
| Social image | `Base.astro` og:image | 1200 × 630 |

Assets go in `public/images/`; the branding section reads its list from
`src/data/branding.json`, which is imported at build time.
