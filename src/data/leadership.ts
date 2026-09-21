import type { Experience } from "./types";

/**
 * The traction-control and BMS firmware work is deliberately NOT restated
 * here; it lives as two project cards in projects.ts (group: "embedded"),
 * each with its own TEAM REPO chip and MY CONTRIBUTION line. This section is
 * scoped to the operations role, so leadership reads as leadership and the
 * engineering reads as engineering.
 */
export const leadership: Experience[] = [
  {
    id: "ner",
    kind: "leadership",
    brandId: "ner",
    role: "Chief Operations Officer",
    location: "Boston, MA",
    start: "2026-07",
    end: null,
    displayPeriod: "JUL 2026 - PRESENT",
    status: "current",
    summary: "Cross-functional program management for a student-built electric formula car.",
    achievements: [
      {
        text: "Run program management across the electrical, mechanical, business, and software sub-teams for the Formula SAE Electric and Formula Hybrid+Electric cars.",
        attribution: "self",
      },
      {
        text: "Set club-wide OKRs jointly with the president and own the KPIs that track them across all four sub-teams.",
        attribution: "self",
      },
    ],
    stack: ["c", "rust", "embassy", "python", "git"],
    context: {
      what: "Student-run team at Northeastern that designs and builds a fully electric formula-style race car from scratch.",
      facts: [
        {
          label: "MEMBERS",
          value: "200+",
          detail: "Across four sub-teams: mechanical, electrical, business, software",
          attribution: "company",
          weight: 1,
          source: {
            label: "Northeastern Electric Racing",
            url: "https://electricracing.northeastern.edu",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "FH+E RESULT",
          value: "3RD / 29",
          detail: "Car 24A finished 3rd overall against 29 vehicles at Formula Hybrid+Electric (a team result)",
          attribution: "team",
          weight: 1,
        },
        {
          label: "ENDURANCE",
          value: "2ND",
          detail: "First-ever completion of the 44 km endurance event by the team (a team result)",
          attribution: "team",
          weight: 1,
        },
        {
          label: "COMPETES IN",
          value: "FSAE + FH+E",
          detail: "Formula SAE Electric (Brooklyn, MI) and Formula Hybrid+Electric (Loudon, NH)",
          attribution: "company",
          weight: 2,
          source: {
            label: "Northeastern Electric Racing: FSAE",
            url: "https://electricracing.northeastern.edu/fsae/",
            verifiedOn: "2026-08-25",
          },
        },
      ],
    },
  },
];
