# Identity size overrides

The site renders the identity marks below the minimum sizes stated in the kit's
`RULES.md`. This is a deliberate decision by the owner, recorded here so it is
not mistaken for an oversight and so it can be reversed cleanly.

**Authorised by the owner, 14 September 2026:** *"you can set size without
request new resource kit."*

## Departures

| Mark | Kit minimum | Rendered | Where |
|---|---:|---:|---|

| `seal-open.svg` | 160 × 160 | **48 / 56** | branding section |
| `seal-rounded.svg` | 160 × 160 | **48 / 56** | branding section |
| `seal-framed.svg` | 192 × 192 | **48 / 56** | branding section |
| `circle.svg` | 192 × 192 | **48 / 56** | branding section |

Branding marks render at 48px below the `md` breakpoint and 56px above it,
matching the project icons in `Projects.astro`.

Navigation uses `signature-compact.svg` at its stated 144 × 36 minimum, so the
navigation mark is **not** an override — it is fully compliant. Only the
branding-section sizes depart from the kit.

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

- `src/components/Nav.astro` — the `SealNav` width/height and the
  `.identity-desktop` / `.identity-mobile` rules
- `src/components/Branding.astro` — the `w-12 h-12 md:w-14 md:h-14` span

`src/data/branding.json` keeps each mark's kit-stated minimum in `minWidth`, so
the compliant sizes are still on record and can be restored from there.
