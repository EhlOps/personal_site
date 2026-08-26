import type { Metric } from "./types";

/**
 * Hero stat tiles. DELIBERATE RULE: every tile here is attribution: 'self'.
 * The flashiest numbers in the dataset ($10.1B, YC S22) are company facts —
 * putting borrowed credibility in the highest-attention slot on the page is
 * exactly what trains a skeptical reader to discount everything below it.
 * Company numbers land immediately after, in the "WHERE I'VE SHIPPED" logo
 * strip, and at full strength in each role's org-context block.
 */
// Typed as `Metric[]` directly (not `as const satisfies`) so every element
// is treated as the full interface — otherwise TS narrows each entry to its
// own literal shape and rejects access to optional fields (`numeric`,
// `unit`, ...) that only some entries declare.
export const heroMetrics: Metric[] = [
  {
    id: "availability",
    label: "AVAILABLE",
    value: "SUM 2027",
    attribution: "self",
    substantiation: "Graduating Northeastern in May 2027; available full-time from Summer 2027.",
  },
  {
    id: "fraud-prevented",
    label: "FRAUD PREVENTED",
    value: "250",
    prefix: "$",
    unit: "K+",
    numeric: 250,
    attribution: "self",
    substantiation: "AI check-fraud detection I built at Overwatch Data, over four months.",
  },
  {
    id: "production-teams",
    label: "SHIPPED AT",
    value: "3",
    unit: "STARTUPS",
    numeric: 3,
    attribution: "self",
    substantiation: "Production code at Overwatch Data (YC S22), Larx, and WHOOP — all before graduating.",
  },
  {
    id: "gpa",
    label: "GPA",
    value: "3.8",
    unit: "/ 4.0",
    numeric: 3.8,
    decimals: 1,
    attribution: "self",
    substantiation: "Northeastern, B.S. Computer Science & Business Administration.",
  },
];

/**
 * Optional fifth tile — not rendered by default. If ever added, it MUST
 * ship with the COMPANY CONTEXT chip and a visible (not hover-only) source
 * link, matching the treatment used in src/data/experience.ts.
 */
export const heroMetricCompanyOptional = {
  id: "whoop-valuation",
  label: "CURRENT EMPLOYER",
  value: "$10.1B",
  attribution: "company",
  substantiation: "WHOOP's valuation at its $575M Series G — a company fact, not mine.",
  source: {
    label: "WHOOP press release, 31 Mar 2026",
    url: "https://www.whoop.com/us/en/press-center/whoop-announces-series-g-funding/",
    verifiedOn: "2026-08-25",
  },
} as const satisfies Metric;
