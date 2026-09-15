# Identity size overrides

The site renders the identity marks below the minimum sizes stated in the kit's
`RULES.md`. This is a deliberate decision by the owner, recorded here so it is
not mistaken for an oversight and so it can be reversed cleanly.

**Authorised by the owner, 14 September 2026:** *"you can set size without
request new resource kit."*

## Departures

| Mark | Kit minimum | Rendered | Where |
|---|---:|---:|---|
| `signature-compact.svg` | 160 × 40 | **96 × 24** | desktop and mobile navigation |
| `seal-open.svg` | 160 × 160 | **48 / 56** | branding section |
| `seal-rounded.svg` | 160 × 160 | **48 / 56** | branding section |
| `seal-framed.svg` | 192 × 192 | **48 / 56** | branding section |
| `circle.svg` | 192 × 192 | **48 / 56** | branding section |

On the home page the `Personal Branding` section is a teaser: the four family
marks render at 56px as a preview, linking to the dedicated `/identity` page.
That page (`src/pages/identity.astro`) is a **compliant** surface — it shows the
same marks at their kit minimums (160–192px), where the calligraphy resolves.
So the below-minimum sizes are a home-page presentation choice, not the only
place the marks appear.

Navigation uses `signature-compact.svg` at **96 × 24**, sized to sit at the
nav's text scale (links are 14px with a 20px line-height). The final kit
(2026-09-15) states a 160 × 40 minimum for this mark — the equal-height
signature, whose seal now spans the full artboard height. The kit also supplies
`seal-nav.svg` (32 × 32 minimum) as an authorised seal-only navigation
alternative; the site keeps the full bilingual signature so the owner's name
stays visible in the header.

## What this trades away

`RULES.md` states "Never scale below its listed minimum. Avatar roles do not
waive these minimums." The minimums exist to protect the legibility of the Khmer
lettering and its diacritics. At 48–56px the branding marks read as marks rather
than as readable lettering; the calligraphic detail is not resolvable. The owner
has seen them at full size and chose the smaller presentation.

Everything else the rules require is unchanged: single inherited colour, ink on
light and paper on dark, no cropping, no stretching, no per-component recolour,
uniform scaling, and the bilingual accessible name on the navigation home link.

## Reversing

Sizes live in two places:

- `src/components/Nav.astro` — the `SignatureCompact` width/height and the
  `.identity` rule
- `src/components/Branding.astro` — the `w-12 h-12 md:w-14 md:h-14` span

`src/data/branding.json` keeps each mark's kit-stated minimum in `minWidth`, so
the compliant sizes are still on record and can be restored from there.
