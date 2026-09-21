export const SECTIONS = [
  { id: "impact", index: "01", label: "Impact" },
  { id: "experience", index: "02", label: "Experience" },
  { id: "projects", index: "03", label: "Projects" },
  { id: "leadership", index: "04", label: "Leadership" },
  { id: "skills", index: "05", label: "Skills" },
  { id: "contact", index: "06", label: "Contact" },
] as const;

/** Stable module-level reference, required so useActiveSection's effect
 *  doesn't re-run on every render (a fresh array literal would break that). */
export const SECTION_IDS = SECTIONS.map((s) => s.id);
