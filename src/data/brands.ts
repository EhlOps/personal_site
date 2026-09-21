import type { Brand } from "./types";

/**
 * Single source of truth for every logo on the site. See
 * /public/brand/ATTRIBUTION.md for the full license record. It is
 * generated from this file (via `brandAttributions` in ./index.ts) so the
 * two cannot drift.
 *
 * PROVENANCE
 *  - "wikimedia": SVG vendored to /public/brand/. Verified via the Commons
 *    imageinfo API on 2026-08-25; every one of these is {{PD-textlogo}},
 *    below the threshold of originality for COPYRIGHT. The mark is still a
 *    TRADEMARK: used here only to truthfully identify an employer, school,
 *    investor, or certification issuer (nominative fair use), never
 *    recolored or altered beyond the mono silhouette treatment.
 *  - "simple-icons": vendored from the simple-icons project (CC0-1.0).
 *  - "official": pulled directly from the org's own site/CDN. Same fair-use
 *    logic as wikimedia; only used for employers.
 *  - "none": no clean asset exists. `wordmark` renders as styled type, which
 *    is a first-class outcome here, not a degraded one.
 *
 * DELIBERATELY ABSENT: Goldman Sachs, Tesla, Franklin Templeton, Ginkgo
 * Bioworks, Palantir, Stripe, Google, PGA Tour, Ferrari. Every one of these
 * has a clean asset available. None is rendered; see experience.ts and the
 * plan's attribution section for why (prospects/roadmap items/founder
 * pedigree, never a customer or a shipped integration of Sam's).
 */
export const brands = {
  // ── Employers ──────────────────────────────────────────────────────────
  whoop: {
    id: "whoop",
    name: "WHOOP",
    provenance: "wikimedia",
    asset: "/brand/whoop.svg",
    wordmark: "WHOOP",
    invertOnDark: true,
    width: 200,
    height: 32,
    href: "https://www.whoop.com",
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:WHOOP_Logo_Black.svg",
  },
  larx: {
    id: "larx",
    name: "Larx",
    provenance: "official",
    asset: "/brand/larx.png",
    wordmark: "LARX",
    // Verified by pixel sampling: the shipped asset is a white wordmark +
    // light-blue mark on a transparent ground, already built for a dark
    // surface, so it renders natively with no invert filter.
    width: 2560,
    height: 794,
    href: "https://larx.io",
    license: "Trademark of Larx, Inc. Used nominatively to identify an employer.",
    assetSource: "https://larx.io/wp-content/uploads/2025/11/LARX_logo-scaled.png",
  },
  overwatchData: {
    id: "overwatchData",
    name: "Overwatch Data",
    provenance: "official",
    asset: "/brand/overwatch-data.png",
    wordmark: "OVERWATCH DATA",
    // Verified by pixel sampling: white wordmark + blue mark, already built
    // for a dark surface; renders natively with no invert filter.
    width: 1000,
    height: 337,
    href: "https://www.overwatchdata.ai",
    license: "Trademark of Overwatch Data. Used nominatively to identify an employer.",
    assetSource:
      "https://cdn.prod.website-files.com/6855a7f1f8d7112395c29b90/685872400d0b04f86a6a99cb_Overwatch-Logo-Blue-Website.png",
  },

  // ── Education ──────────────────────────────────────────────────────────
  northeastern: {
    id: "northeastern",
    name: "Northeastern University",
    provenance: "wikimedia",
    asset: "/brand/northeastern.svg",
    wordmark: "NORTHEASTERN",
    invertOnDark: true,
    width: 247,
    height: 79,
    href: "https://www.northeastern.edu",
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:Northeastern_Wordmark.svg",
  },
  ner: {
    id: "ner",
    name: "Northeastern Electric Racing",
    provenance: "none",
    wordmark: "NER",
    href: "https://electricracing.northeastern.edu",
  },
  mit: {
    id: "mit",
    name: "MIT",
    provenance: "wikimedia",
    asset: "/brand/mit.svg",
    wordmark: "MIT",
    invertOnDark: true,
    href: "https://www.mit.edu",
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:MIT_Logo_and_Wordmark.svg",
  },
  stanford: {
    id: "stanford",
    name: "Stanford University",
    provenance: "wikimedia",
    asset: "/brand/stanford.svg",
    wordmark: "STANFORD",
    invertOnDark: true,
    href: "https://online.stanford.edu",
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:Stanford_wordmark_(2012).svg",
  },
  cuBoulder: {
    id: "cuBoulder",
    name: "University of Colorado Boulder",
    provenance: "wikimedia",
    asset: "/brand/cu-boulder.svg",
    wordmark: "CU BOULDER",
    defaultTreatment: "color", // gold + white two-tone; mono invert flattens it to a blob
    href: "https://www.colorado.edu",
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:UC_Boulder_logo.svg",
  },

  // ── Company-context marks ──────────────────────────────────────────────
  ycombinator: {
    id: "ycombinator",
    name: "Y Combinator",
    provenance: "simple-icons",
    asset: "/brand/ycombinator.svg",
    wordmark: "Y COMBINATOR",
    invertOnDark: true,
    href: "https://www.ycombinator.com/companies/overwatch",
    license: "CC0-1.0, via simple-icons",
    assetSource: "https://github.com/simple-icons/simple-icons",
  },
  collabFund: {
    id: "collabFund",
    name: "Collaborative Fund",
    provenance: "wikimedia",
    asset: "/brand/collab-fund.svg",
    wordmark: "COLLABORATIVE FUND",
    defaultTreatment: "color", // black hexagon + white glyph; mono invert flattens it to a blob
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:Collaborative_Fund_Logo.svg",
  },
  ivp: {
    id: "ivp",
    name: "IVP",
    provenance: "wikimedia",
    asset: "/brand/ivp.svg",
    wordmark: "IVP",
    invertOnDark: true,
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:IVP_Logo.svg",
  },
  foundry: {
    id: "foundry",
    name: "Foundry",
    provenance: "none",
    wordmark: "FOUNDRY",
    href: "https://foundry.vc",
  },
  inQTel: {
    id: "inQTel",
    name: "In-Q-Tel",
    provenance: "wikimedia",
    asset: "/brand/in-q-tel.svg",
    wordmark: "IN-Q-TEL",
    defaultTreatment: "color", // published as a deliberately multi-color 2021 mark
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource:
      "https://commons.wikimedia.org/wiki/File:In-Q-Tel_logo_in_color_(2021).svg",
  },
  maxar: {
    id: "maxar",
    name: "Maxar",
    provenance: "wikimedia",
    asset: "/brand/maxar.svg",
    wordmark: "MAXAR",
    invertOnDark: true,
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:Maxar_Technologies_logo.svg",
  },
  hackerone: {
    id: "hackerone",
    name: "HackerOne",
    provenance: "simple-icons",
    asset: "/brand/hackerone.svg",
    wordmark: "HACKERONE",
    invertOnDark: true,
    license: "CC0-1.0, via simple-icons",
    assetSource: "https://github.com/simple-icons/simple-icons",
  },
  googleCloud: {
    id: "googleCloud",
    name: "Google Cloud",
    provenance: "simple-icons",
    asset: "/brand/googlecloud.svg",
    wordmark: "GOOGLE CLOUD",
    invertOnDark: true,
    license: "CC0-1.0, via simple-icons",
    assetSource: "https://github.com/simple-icons/simple-icons",
  },

  // ── Customers (logos permitted, captioned; never prospects) ────────────
  vanguard: {
    id: "vanguard",
    name: "Vanguard",
    provenance: "wikimedia",
    asset: "/brand/vanguard.svg",
    wordmark: "VANGUARD",
    invertOnDark: true,
    width: 127,
    height: 27,
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:Vanguard.svg",
  },
  sofi: {
    id: "sofi",
    name: "SoFi",
    provenance: "wikimedia",
    asset: "/brand/sofi.svg",
    wordmark: "SOFI",
    defaultTreatment: "color", // multi-color icon mark; mono invert flattens it to a blob
    license: "Public domain (PD-textlogo), via Wikimedia Commons",
    assetSource: "https://commons.wikimedia.org/wiki/File:SoFi_logo.svg",
  },
} as const satisfies Record<string, Brand>;

export type BrandId = keyof typeof brands;

export const getBrand = (id: string): Brand =>
  (brands as Record<string, Brand>)[id] ?? {
    id,
    name: id,
    provenance: "none",
    wordmark: id.toUpperCase(),
  };
