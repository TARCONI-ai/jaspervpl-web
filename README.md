# jaspervpl.com, v2

Astro 7 site built on the JasperVPL v2 brand guidelines (17 Oct 2026): Fraunces + IBM Plex, Old Money palette, optional dark mode.

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure

| Path | What it is |
|---|---|
| `src/styles/global.css` | Brand tokens (palette, type, radii) and semantic light/dark roles |
| `src/data/site.ts` | All copy, links, projects and articles. Translate or edit here |
| `src/components/Logo.astro` + `logo-paths.ts` | Vector trace of the official logo (lockup + shield) |
| `src/components/Hero.astro` | Reference layout: centred serif H1, tilted side cards, connectors, seal, 3D card ring around the arch |
| `src/components/Work.astro` | Case-study cards (Light Vanilla + Beige border) |
| `src/components/Terminal.astro` | Deep-green code block with tabs, copy button and line-by-line print |
| `src/pages/guilloche.svg.ts` | Build-time banknote engraving used on deep-green surfaces |
| `public/` | Favicon (reduced variant) and logo SVGs: green, inverted, mark |

## Before launch

- `site.linkedin` in `src/data/site.ts` is a placeholder. The current site does not link a profile.
- Projects with `sample: true` are illustrative and show a "Sample" tag. Replace them with real work (and real numbers) or delete them.
- The `stack` list is a guess. Confirm it.
- The wordmark is the current Cormorant-style one, traced from the supplied logo. When the Fraunces redraw lands, replace the paths in `logo-paths.ts`.

## Brand compliance notes

Computed WCAG contrast (not copied from the guidelines):

- Text Gold `#8A6A38` on Vanilla is **4.43:1**, which fails AA for small text. The guidelines list 4.6:1, which only holds on Light Vanilla (4.67:1). All gold labels therefore sit on a Light Vanilla pill, card or footer.
- Light Gold `#C9A96A` on Vanilla is 1.99:1, so it is used only on deep green (4.89:1). Italic title accents on light backgrounds use `#3A604F` (6.28:1).
- H1 is capped at 56px (guideline range 48 to 56px), smaller than the reference image's display size. Change the `clamp()` in `Hero.astro` if you want the larger look.
- Automated audit of the rendered page: 136 text nodes, 0 below AA in both themes (min 4.67:1 light, 4.89:1 dark).

## Using a portrait instead of the shield

The arch in `Hero.astro` mirrors the reference portrait. To use a photo, replace the `.medal` block with an `<img>` (grayscale, `object-fit: cover`, filling the arch). Keep the logo off the photo: the guidelines forbid placing it on photos.
