export * from "./types";
export { brands, getBrand, type BrandId } from "./brands";
export { site } from "./site";
export { skills, getSkill, resumeSkillIds, type SkillId } from "./skills";
export { experience, currentRole } from "./experience";
export { leadership } from "./leadership";
export { education, certifications } from "./education";
export {
  projects,
  featuredProjects,
  archiveProjects,
  projectGroups,
  groupLabels,
} from "./projects";
export { heroMetricCompanyOptional } from "./metrics";

import { brands } from "./brands";
import { experience } from "./experience";
import { leadership } from "./leadership";
import type { Fact } from "./types";

/** Reverse-chronological, work + leadership merged into a single timeline. */
export const timeline = [...experience, ...leadership].sort((a, b) => b.start.localeCompare(a.start));

/** Collapsed HUD row: top-weight facts only. */
export const primaryFacts = (facts: readonly Fact[]) => facts.filter((f) => f.weight === 1);

/**
 * Every sourced claim on the site, for the footer colophon: rendering this
 * is what turns the accuracy discipline from a promise into something a
 * skeptical reader can audit in one place.
 */
const allFactSources = [...experience, ...leadership]
  .flatMap((e) => e.context.facts)
  .filter((f): f is Fact & { source: NonNullable<Fact["source"]> } => Boolean(f.source))
  .map((f) => f.source);

export const allSources = [...new Map(allFactSources.map((s) => [s.url, s])).values()];

/** Every vendored asset that carries a license/attribution obligation. */
export const brandAttributions = Object.values(brands).filter(
  (b) => b.provenance === "wikimedia" || b.provenance === "official" || b.provenance === "simple-icons",
);

/**
 * Fails the static export if any company-level claim ships without a
 * source. This is the enforcement mechanism behind the attribution model:
 * a missing source is a build failure, not a code-review miss.
 */
for (const e of [...experience, ...leadership]) {
  for (const f of e.context.facts) {
    if (f.attribution === "company" && !f.source) {
      throw new Error(
        `[data] "${e.id}" fact "${f.label}" is attribution:'company' but has no source. ` +
          `Add a Source, or change the attribution.`,
      );
    }
  }
}
