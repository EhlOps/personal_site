import type { SiteConfig } from "./types";

export const site = {
  name: "Sam Ehlers",
  shortName: "Sam",
  role: "Software Engineer",
  location: "Boston, MA",
  coordinates: "42.3601°N 71.0589°W",
  availability: {
    label: "AVAILABLE",
    value: "SUMMER 2027",
    detail: "Full-time, post-graduation — open to conversations now.",
  },
  tagline:
    "Security, ML, and embedded systems — shipped to production at three startups before graduating.",
  bio: "I'm a Computer Science and Business student at Northeastern, and every co-op cycle since 2022 has put me on production software at early-stage companies: fraud detection at Overwatch Data, geospatial intelligence at Larx, account security at WHOOP. Outside of that I run operations for Northeastern's electric racing team and spend most nights on a water-brake dynamometer in the garage — I like problems where the software has to answer to something physical.",
  email: "samtehlers@gmail.com",
  url: "https://ehlops.com",
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/EhlOps", handle: "EhlOps" },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/sam-ehlers", handle: "sam-ehlers" },
    { id: "x", label: "X", href: "https://x.com/samtehlers", handle: "samtehlers" },
  ],
  seo: {
    title: "Sam Ehlers — Software Engineer",
    titleTemplate: "%s · Sam Ehlers",
    description:
      "Software engineer working in security, ML, and embedded systems. WHOOP, Larx, and Overwatch Data (YC S22). Northeastern CS + Business, class of 2027. Available Summer 2027.",
    keywords: [
      "Sam Ehlers",
      "software engineer",
      "Northeastern University",
      "security engineering",
      "machine learning",
      "embedded systems",
      "Rust",
      "Boston",
      "2027 new grad",
    ],
    ogAlt: "Sam Ehlers — Software Engineer. Security, ML, and embedded systems. Available Summer 2027.",
  },
} as const satisfies SiteConfig;
