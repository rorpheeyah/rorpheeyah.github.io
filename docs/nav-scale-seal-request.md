# Follow-up request: nav-scale square seal

A second request to the author of `portfolio-identity-web-2026-09-14`.

Copy the block below verbatim. Everything outside it is context for us.

## Why

The delivered `signature-compact` works and is in production use at its 144 × 36
minimum. The owner wants the navigation identity materially smaller than a
144 px-wide horizontal lockup allows.

We are not doing this ourselves, because `RULES.md` forbids exactly it:

> "The seal inside the compact signature is an intentional component at a smaller
> recognition scale. This exception applies only to the supplied intact compact
> lockup, **not to an extracted standalone seal.**"

and

> "Do not extract or independently recolour components."

So the mark has to come from the author, with its own stated minimum, the way
`signature-compact` was purpose-made for the nav.

## The useful measurement

`signature-compact.svg` has a `viewBox` of `0 0 160 40`. Its rounded seal tile
occupies `0,5` to `30,35` — a 30 × 30 unit square. Rendered at our current
144 px width the scale factor is 0.9, so **that seal is already displaying at
27 CSS px and reading correctly.**

That is the whole argument: a legible ~27–32 px seal already exists inside the
delivered artwork. The request is to promote that drawing to a standalone mark
with its own minimum — not to invent a new small mark, and not for us to cut one
out.

## The brief

```text
FOLLOW-UP ASSET REQUEST — NAV-SCALE SQUARE SEAL
Kit: portfolio-identity-web-2026-09-14 (extension to math-rorpheeyah-v2-final)
Owner: Math Rorpheeyah / ម៉ាត់រ៉ភីយ៉ះ
Site: rorpheeyah.github.io (Astro static site, light and dark themes)

=== WHAT IS NEEDED ===
One square seal mark, purpose-drawn for navigation scale, supplied as a
standalone asset with its own stated minimum size.

Target: legible at 32 x 32 CSS px. Usable down to 28 x 28 if the drawing
supports it. State the true minimum; do not state a minimum the artwork
cannot hold.

=== WHY, AND THE STARTING POINT ===
signature-compact.svg is in production and works. The owner wants the
navigation identity smaller than a 144px-wide horizontal lockup permits.
A square mark at ~32px occupies roughly a fifth of the horizontal space.

RULES.md correctly forbids us extracting the seal from the compact lockup
ourselves, so we are asking for it as a supplied asset.

Note that the seal tile inside signature-compact.svg is already drawn at
small-recognition scale: it occupies 30 x 30 units of that file's 160 x 40
viewBox, which at our 144px render displays at 27 CSS px and reads correctly.
That existing drawing is the natural basis for this mark. seal-rounded.svg is
NOT the basis — it carries a 160px minimum and its calligraphic detail is drawn
for that scale.

=== REQUIREMENTS ===
- Square. State minimum width and height.
- State clear space, in the same 1/Nth-of-width form as the rest of the kit.
- Flat single colour, fill="currentColor", no hardcoded hex. The site sets one
  inherited CSS colour: ink #1A1A18 on light, paper #F2F0EC on dark.
- SVG, transparent background, viewBox present, no embedded raster, no font
  references.
- Under 15KB. For reference the five current marks are 12.4-13.5KB each.
- Naming consistent with the kit, e.g. seal-nav.svg

=== RULES.MD AMENDMENTS NEEDED ALONGSIDE ===
RULES.md currently states that the compact signature "is the mandatory
navigation choice". If this new mark is permitted in navigation, that line needs
updating, and the delivery should say explicitly:

1. Whether the nav-scale seal REPLACES signature-compact in navigation, or is an
   alternative the owner may choose between.
2. If it is an alternative, whether any context still requires the full bilingual
   lockup.
3. Its role entry in assets.json, matching the existing table format.

=== ACCESSIBILITY NOTE (no action needed, for your awareness) ===
A seal-only navigation mark carries no visible name. The site already supplies
the bilingual name as the link's accessible name and hides the decorative SVG
from assistive technology, so the name remains available to screen readers. If
you consider a visible name mandatory in navigation regardless, say so and we
will keep signature-compact instead.

=== SEPARATE CORRECTION REQUESTED ===
The circular mark ships as circle-b.svg and is called "Circle B" throughout
RULES.md and assets.json. The owner states the "B" is a mistake: the mark should
be referred to simply as "Circle" or "Circular". The website copy has been
corrected already. Please correct the filename, display name and documentation
at source so it does not reappear in future kits.

=== DO NOT ===
- Supply a crop, zoom or rescale of seal-rounded.svg as the nav mark
- Deliver without a stated, honest minimum size
- Hardcode a fill colour
```

## If the answer is no

If the author holds that a visible name is mandatory in navigation, the current
`signature-compact` at 144 × 36 stays, and that is the end of it. Nothing in the
site needs changing — it is what ships today.
