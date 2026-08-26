// ─────────────────────────────────────────────────────────────────────────
// Attribution primitives
//
// This is the core discipline of the whole site: a claim about a company
// (valuation, backers, scale, cultural relevance) must never be
// representable in the same place as a claim about Sam's own work. See
// `Achievement.attribution` below — it is typed so a company-level outcome
// literally cannot be entered as one of Sam's bullets.
// ─────────────────────────────────────────────────────────────────────────

/** Who a claim is about. Drives which visual register it renders in. */
export type Attribution =
  /** Sam did this himself. Renders bare, accent-eligible. */
  | "self"
  /** Sam contributed as part of a named group. Renders with a TEAM chip. */
  | "team"
  /** A fact about the organization, not about Sam. Renders under a
   *  recessed "context" block with a source link. Never accent-colored. */
  | "company";

export interface Source {
  /** Human-readable citation, e.g. "WHOOP press release, 31 Mar 2026". */
  label: string;
  url: string;
  /** ISO date this was last checked, so stale numbers are auditable. */
  verifiedOn: `${number}-${number}-${number}`;
}

/** A HUD readout: small mono label + headline value + optional detail. */
export interface Fact {
  /** Short mono caption, rendered uppercase. Budget: <=18 chars. */
  label: string;
  /** Headline value. Budget: <=14 chars so it survives a narrow tile. */
  value: string;
  /** Small qualifier under the value. Budget: <=140 chars. */
  detail?: string;
  attribution: Attribution;
  /** Required by convention (and a build-time assertion) when attribution === "company". */
  source?: Source;
  /** 1 = shown in the collapsed row, 2 = shown on expand, 3 = deep detail. */
  weight: 1 | 2 | 3;
}

// ─────────────────────────────────────────────────────────────────────────
// Brands / logos
// ─────────────────────────────────────────────────────────────────────────

export type LogoProvenance =
  /** simple-icons npm package (CC0-1.0). `asset` is the icon slug. */
  | "simple-icons"
  /** SVG vendored from Wikimedia Commons into /public/brand/. */
  | "wikimedia"
  /** Asset taken from the org's own site/press kit into /public/brand/. */
  | "official"
  /** No usable asset exists — render `wordmark` as styled type. */
  | "none";

export interface Brand {
  id: string;
  /** Always used as the accessible name, regardless of what renders. */
  name: string;
  provenance: LogoProvenance;
  /** Path under /public (wikimedia/official), or the simple-icons slug. */
  asset?: string;
  /** Always present. Rendered when `asset` is absent or fails to load. */
  wordmark: string;
  /** Mark is dark-on-transparent; needs invert to read on the dark UI. */
  invertOnDark?: boolean;
  /**
   * "mono" (default) silhouettes the mark via brightness(0)+invert — safe
   * for any single-tone logo. Multi-tone / knockout logos (two overlapping
   * opaque regions of different hue, e.g. a light letterform on a dark
   * field) collapse into an indistinguishable blob under that filter and
   * must set "color" here to render their native colors unmodified instead.
   */
  defaultTreatment?: "mono" | "color";
  /** Intrinsic width / height, for CLS-free reservation. */
  width?: number;
  height?: number;
  href?: string;
  /** License string, surfaced verbatim in the attribution colophon. */
  license?: string;
  /** Upstream file URL, so a future re-download is reproducible. */
  assetSource?: string;
}

// ─────────────────────────────────────────────────────────────────────────
// Skills
// ─────────────────────────────────────────────────────────────────────────

export type SkillKind =
  | "language"
  | "os"
  | "tool"
  | "framework"
  | "cloud"
  | "hardware";

export interface Skill {
  /** Stable key, referenced by Experience.stack and Project.stack. */
  id: string;
  name: string;
  kind: SkillKind;
  /** Lower = stronger. Mirrors the résumé's "by proficiency" ordering. */
  rank: number;
  /** simple-icons slug, or null when no clean asset exists. */
  icon: string | null;
  /** Rendered with the PRIMARY dot in the Skills section. */
  primary?: boolean;
}

export type SkillId = string;

// ─────────────────────────────────────────────────────────────────────────
// Experience
// ─────────────────────────────────────────────────────────────────────────

export type EmploymentStatus = "current" | "past";

export interface Achievement {
  /** One sentence, active voice, leads with the verb. */
  text: string;
  /** Optional pull-out figure rendered as a mono accent badge. */
  metric?: string;
  /** 'company' is deliberately excluded — see file header. */
  attribution: Extract<Attribution, "self" | "team">;
  stack?: SkillId[];
}

export type ClientRelationship = "customer" | "prospect";

export interface ClientMention {
  name: string;
  relationship: ClientRelationship;
  /** Only ever set for relationship === "customer". */
  brandId?: string;
}

export interface CompanyContext {
  /** One neutral sentence: what the company does. Not a pitch. */
  what: string;
  /** HUD readouts about the ORG. Company-attributed facts require a source. */
  facts: Fact[];
  /** Logo row: investors, accelerator batch, notable partners. */
  markIds?: string[];
  markCaption?: string;
}

export interface Experience {
  id: string;
  kind: "work" | "leadership";
  brandId: string;
  role: string;
  /** Where SAM worked, not the company HQ. Rendered under "BASED IN". */
  location: string;
  start: `${number}-${number}`;
  end: `${number}-${number}` | null;
  displayPeriod: string;
  status: EmploymentStatus;
  /** One line under the role title. */
  summary: string;
  achievements: Achievement[];
  stack: SkillId[];
  context: CompanyContext;
  clients?: ClientMention[];
  clientsDisclaimer?: string;
}

// ─────────────────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────────────────

export type ProjectGroup = "embedded" | "systems" | "ml" | "archive";
export type ProjectStatus = "active" | "shipped" | "archived";

/** Set only when the linked repo is shared team code Sam doesn't own. */
export interface TeamRepo {
  orgBrandId: string;
  /** What Sam specifically built, stated plainly. */
  contribution: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  group: ProjectGroup;
  status: ProjectStatus;
  start: `${number}-${number}`;
  end: `${number}-${number}` | null;
  displayPeriod: string;
  stack: SkillId[];
  repo?: string;
  demo?: string;
  teamRepo?: TeamRepo;
  /** Per-project telemetry tiles. Always attribution: 'self'. */
  facts?: Fact[];
}

// ─────────────────────────────────────────────────────────────────────────
// Education
// ─────────────────────────────────────────────────────────────────────────

export interface Education {
  brandId: string;
  degree: string;
  location: string;
  start: `${number}-${number}`;
  end: `${number}-${number}`;
  displayPeriod: string;
  gpa: { value: string; scale: string };
  coursework: { group: string; courses: string[] }[];
}

export interface Certification {
  id: string;
  name: string;
  issuerBrandId: string;
  note?: string;
  href?: string;
}

// ─────────────────────────────────────────────────────────────────────────
// Hero metrics
// ─────────────────────────────────────────────────────────────────────────

export interface Metric {
  id: string;
  label: string;
  /**
   * The bare numeral as a string — StatTile always renders `prefix`/`unit`
   * as separate flex children around whichever of `value` or the animated
   * count lands in the middle, so this must NOT include `prefix`/`unit`
   * text or it renders twice (once baked in, once from the sibling spans).
   * When `numeric` is set this should read `numeric.toFixed(decimals ?? 0)`;
   * when it's absent, this is simply the whole final string (e.g. "SUM 2027").
   */
  value: string;
  prefix?: string;
  unit?: string;
  attribution: Attribution;
  /** One line a recruiter can read to know why this number is real. */
  substantiation: string;
  source?: Source;
  /** Target for the count-up animation. Omit for non-numeric values. */
  numeric?: number;
  decimals?: number;
}

// ─────────────────────────────────────────────────────────────────────────
// Site
// ─────────────────────────────────────────────────────────────────────────

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  handle: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  location: string;
  coordinates: string;
  availability: { label: string; value: string; detail: string };
  bio: string;
  tagline: string;
  email: string;
  url: string;
  socials: SocialLink[];
  seo: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogAlt: string;
  };
}
