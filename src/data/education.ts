import type { Certification, Education } from "./types";

export const education = {
  brandId: "northeastern",
  degree: "B.S. Computer Science & Business Administration",
  location: "Boston, MA",
  start: "2023-09",
  end: "2027-05",
  displayPeriod: "EXPECTED MAY 2027",
  gpa: { value: "3.8", scale: "4.0" },
  coursework: [
    { group: "Systems & Software", courses: ["Computer Systems", "Algorithms", "Object-Oriented Programming"] },
    { group: "Hardware", courses: ["Power Electronics"] },
    {
      group: "Mathematics",
      courses: ["Discrete Mathematics", "Differential Equations", "Probability", "Statistics"],
    },
    { group: "Business", courses: ["Management Information Systems"] },
  ],
} as const satisfies Education;

export const certifications: Certification[] = [
  {
    id: "stanford-ml",
    name: "Machine Learning Specialization",
    issuerBrandId: "stanford",
    note: "Stanford Online / DeepLearning.AI",
  },
  {
    id: "mit-deep-learning",
    name: "Introduction to Deep Learning",
    issuerBrandId: "mit",
    note: "MIT 6.S191",
  },
  {
    id: "cu-power-electronics",
    name: "Introduction to Power Electronics",
    issuerBrandId: "cuBoulder",
    note: "University of Colorado Boulder",
  },
];
