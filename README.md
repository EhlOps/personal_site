# ehlops.com

Sam Ehlers' personal site — a Next.js 15 App Router project, statically exported and deployed to GitHub Pages
at [ehlops.com](https://ehlops.com).

## Stack

- **Next.js 15** (App Router, static export via `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `src/app/globals.css` — no `tailwind.config.ts`)
- No animation library — motion is hand-rolled CSS + a handful of small client hooks (see
  `src/components/primitives/Reveal.tsx` and `src/lib/hooks/`)

## Content model

All résumé content lives in `src/data/` as typed data, not hardcoded in components. The core discipline is the
**attribution model** in `src/data/types.ts`: every claim is tagged `self`, `team`, or `company`, and a
company-level fact cannot be entered as one of Sam's own achievements — the type system enforces the
separation, and a build-time check in `src/data/index.ts` fails the build if a company fact ships without a
source.

```
src/data/
  types.ts        # the attribution model — read this first
  brands.ts       # logo registry: asset path, license, invert/color treatment
  skills.ts       # skill registry, referenced by id from experience/projects
  site.ts         # identity, socials, availability, SEO copy
  experience.ts   # work history
  leadership.ts   # NER
  education.ts    # degree, coursework, certifications
  projects.ts     # projects, grouped + archive tier
  metrics.ts       # hero stat tiles
```

## Brand assets

Logos are vendored (not hotlinked) into `public/brand/`. See `public/brand/ATTRIBUTION.md` for the license and
source of every asset.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Deployment

`.github/workflows/nextjs.yml` builds and deploys `./out` to GitHub Pages on every push to `main`. The Next
config (`next.config.ts`) owns `output: "export"` and `images.unoptimized` directly — the workflow does not
let `actions/configure-pages` inject its own config, since that would silently shadow this project's.
