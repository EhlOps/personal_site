import type { Metric } from "./types";

/**
 * Optional fifth tile, not rendered by default. If ever added, it MUST
 * ship with the COMPANY CONTEXT chip and a visible (not hover-only) source
 * link, matching the treatment used in src/data/experience.ts.
 */
export const heroMetricCompanyOptional = {
  id: "whoop-valuation",
  label: "CURRENT EMPLOYER",
  value: "$10.1B",
  attribution: "company",
  substantiation: "WHOOP's valuation at its $575M Series G. A company fact, not mine.",
  source: {
    label: "WHOOP press release, 31 Mar 2026",
    url: "https://www.whoop.com/us/en/press-center/whoop-announces-series-g-funding/",
    verifiedOn: "2026-08-25",
  },
} as const satisfies Metric;
