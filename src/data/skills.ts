import type { Skill } from "./types";

/**
 * `rank` mirrors the résumé's explicit "by proficiency" ordering for
 * languages. `icon` is a simple-icons slug, or null where no clean asset
 * exists; those render as mono type chips, which fits the HUD look better
 * than a mismatched substitute mark (no `llvm` for Clang, no
 * `dassaultsystemes` for SolidWorks).
 */
export const skills = [
  // ── Languages (résumé order = proficiency order) ─────────────────────────
  { id: "python", name: "Python", kind: "language", rank: 1, icon: "python", primary: true },
  { id: "c", name: "C", kind: "language", rank: 2, icon: "c", primary: true },
  { id: "cpp", name: "C++", kind: "language", rank: 3, icon: "cplusplus", primary: true },
  { id: "rust", name: "Rust", kind: "language", rank: 4, icon: "rust", primary: true },
  { id: "typescript", name: "TypeScript", kind: "language", rank: 5, icon: "typescript", primary: true },
  { id: "javascript", name: "JavaScript", kind: "language", rank: 6, icon: "javascript" },
  { id: "sql", name: "SQL", kind: "language", rank: 7, icon: null },
  { id: "java", name: "Java", kind: "language", rank: 8, icon: null },
  { id: "swift", name: "Swift", kind: "language", rank: 9, icon: "swift" },
  { id: "css", name: "CSS", kind: "language", rank: 10, icon: "css" },

  // ── Operating systems ─────────────────────────────────────────────────────
  { id: "linux", name: "Linux", kind: "os", rank: 1, icon: "linux", primary: true },
  { id: "macos", name: "macOS", kind: "os", rank: 2, icon: "macos" },
  { id: "windows", name: "Windows", kind: "os", rank: 3, icon: null },

  // ── Tools / frameworks / hardware ─────────────────────────────────────────
  { id: "git", name: "Git", kind: "tool", rank: 1, icon: "git", primary: true },
  { id: "clang", name: "Clang", kind: "tool", rank: 2, icon: null },
  { id: "freertos", name: "FreeRTOS", kind: "framework", rank: 3, icon: null, primary: true },
  { id: "embassy", name: "Embassy-rs", kind: "framework", rank: 4, icon: null, primary: true },
  { id: "pandas", name: "Pandas", kind: "framework", rank: 5, icon: "pandas" },
  { id: "numpy", name: "NumPy", kind: "framework", rank: 6, icon: "numpy" },
  { id: "kicad", name: "KiCad", kind: "hardware", rank: 7, icon: "kicad", primary: true },
  { id: "onshape", name: "Onshape", kind: "hardware", rank: 8, icon: null },
  { id: "solidworks", name: "SolidWorks", kind: "hardware", rank: 9, icon: null, primary: true },

  // ── Cloud ─────────────────────────────────────────────────────────────────
  { id: "aws", name: "AWS", kind: "cloud", rank: 1, icon: null },
  { id: "gcp", name: "Google Cloud", kind: "cloud", rank: 2, icon: "googlecloud" },
  { id: "oracleCloud", name: "Oracle Cloud", kind: "cloud", rank: 7, icon: null },

  // ── Referenced by roles/projects but not part of the résumé's top-level
  //    SKILLS list. Kept here so every `stack` id resolves; rendered in role
  //    and project context, not in the Skills grid (see `resumeSkillIds`).
  { id: "nodeodm", name: "NodeODM", kind: "tool", rank: 20, icon: null },
  { id: "threejs", name: "three.js", kind: "framework", rank: 21, icon: "threedotjs" },
  { id: "ollama", name: "Ollama", kind: "tool", rank: 22, icon: "ollama" },
  { id: "graphrag", name: "GraphRAG", kind: "tool", rank: 23, icon: null },
  { id: "keycloak", name: "Keycloak", kind: "tool", rank: 24, icon: "keycloak" },
  { id: "cursor", name: "Cursor", kind: "tool", rank: 25, icon: "cursor" },
  { id: "okta", name: "Okta", kind: "tool", rank: 26, icon: "okta" },
  { id: "esp32", name: "ESP32", kind: "hardware", rank: 27, icon: "espressif" },
  { id: "selenium", name: "Selenium", kind: "tool", rank: 28, icon: "selenium" },
  { id: "rpi", name: "Raspberry Pi", kind: "hardware", rank: 29, icon: "raspberrypi" },
  { id: "express", name: "Express.js", kind: "framework", rank: 30, icon: "express" },
  { id: "ml", name: "Machine Learning", kind: "tool", rank: 31, icon: null },
  { id: "seon", name: "SEON", kind: "tool", rank: 32, icon: null },
  { id: "datadog", name: "Datadog", kind: "tool", rank: 33, icon: null },
  { id: "cloudflare", name: "Cloudflare", kind: "tool", rank: 34, icon: null },
  { id: "kubernetes", name: "Kubernetes", kind: "tool", rank: 35, icon: null },
] as const satisfies readonly Skill[];

export type SkillId = (typeof skills)[number]["id"];

const bySlug = new Map(skills.map((s) => [s.id, s]));
export const getSkill = (id: string) => bySlug.get(id as SkillId);

/** Only the skills that appear in the résumé's SKILLS section. */
export const resumeSkillIds = skills.filter((s) => s.rank < 20).map((s) => s.id);
