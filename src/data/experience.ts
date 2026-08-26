import type { Experience } from "./types";

// Typed as `Experience[]` directly rather than `as const satisfies`: once
// spread together with `leadership` and iterated generically (see
// `allSources` in ./index.ts), per-entry literal narrowing makes fields
// like `context.facts` mutually incompatible across companies.
export const experience: Experience[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // WHOOP
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "whoop",
    kind: "work",
    brandId: "whoop",
    role: "Software Engineer",
    location: "Boston, MA",
    start: "2026-07",
    end: "2026-12",
    displayPeriod: "JUL 2026 — DEC 2026",
    status: "current",
    summary: "Account security and identity on the auth platform.",
    achievements: [
      {
        text: "Built machine learning into auth-service that detects account-takeover attempts in-line and blocks them before they land.",
        attribution: "self",
        stack: ["python", "ml"],
      },
      {
        text: "Automated triage and assignment of inbound HackerOne vulnerability reports, driving on-time response attainment from a {{63%}} baseline toward an {{85%}} target.",
        metric: "63% → 85%",
        attribution: "self",
        stack: ["python"],
      },
      {
        text: "Planned and ran database migrations against the largest, oldest production database at WHOOP to unblock MFA during member onboarding.",
        attribution: "self",
        stack: ["sql", "aws"],
      },
    ],
    stack: ["python", "sql", "aws", "git"],
    context: {
      what: "Wearable health and performance platform — hardware plus a subscription health app.",
      facts: [
        {
          label: "VALUATION",
          value: "$10.1B",
          detail: "$575M Series G led by Collaborative Fund, announced 31 Mar 2026",
          attribution: "company",
          weight: 1,
          source: {
            label: "WHOOP press release, 31 Mar 2026",
            url: "https://www.whoop.com/us/en/press-center/whoop-announces-series-g-funding/",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "MEMBERS",
          value: "2.5M+",
          detail: "Cash-flow positive in 2025; bookings run rate of $1.1B",
          attribution: "company",
          weight: 1,
          source: {
            label: "WHOOP press release, 31 Mar 2026",
            url: "https://www.whoop.com/us/en/press-center/whoop-announces-series-g-funding/",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "BACKED BY",
          value: "LEBRON · RONALDO",
          detail: "Individual investors alongside Qatar Investment Authority and Mubadala",
          attribution: "company",
          weight: 1,
          source: {
            label: "WHOOP press release, 31 Mar 2026",
            url: "https://www.whoop.com/us/en/press-center/whoop-announces-series-g-funding/",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "PARTNERS",
          value: "PGA · NFLPA · F1",
          detail: "Official wearable of the PGA Tour (through 2028), NFLPA, MLB, WTA, LPGA, and Ferrari F1",
          attribution: "company",
          weight: 2,
          source: {
            label: "PGA Tour, 25 Feb 2026",
            url: "https://www.pgatour.com/article/news/latest/2026/02/25/pga-tour-whoop-extend-official-partnership-through-2028-official-health-performance-wearable-of-pga-tour",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "FOUNDED",
          value: "2012",
          detail: "Boston, MA — founded by Will Ahmed, John Capodilupo, and Aurelian Nicolae",
          attribution: "company",
          weight: 2,
          source: {
            label: "WHOOP press release, 31 Mar 2026",
            url: "https://www.whoop.com/us/en/press-center/whoop-announces-series-g-funding/",
            verifiedOn: "2026-08-25",
          },
        },
      ],
      markIds: ["collabFund", "ivp", "foundry"],
      markCaption: "Series G investors",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // LARX
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "larx",
    kind: "work",
    brandId: "larx",
    role: "Software Engineer",
    location: "Boston, MA",
    start: "2025-07",
    end: "2025-12",
    displayPeriod: "JUL 2025 — DEC 2025",
    status: "past",
    summary: "Geospatial intelligence software for government customers.",
    achievements: [
      {
        text: "Built geospatial intelligence software for government customers alongside engineers out of SOCOM, the CIA, and the U.S. Air Force.",
        attribution: "self",
        stack: ["typescript", "python"],
      },
      {
        text: "Fused NodeODM photogrammetry, three.js rendering, Ollama + GraphRAG retrieval, and Keycloak identity into a single coherent platform.",
        attribution: "self",
        stack: ["nodeodm", "threejs", "ollama", "graphrag", "keycloak"],
      },
      {
        text: "Leaned on Cursor to move at the speed a small defense-tech startup needs.",
        attribution: "self",
        stack: ["cursor"],
      },
    ],
    stack: ["typescript", "python", "nodeodm", "threejs", "ollama", "graphrag", "keycloak", "cursor", "git"],
    context: {
      what: "Defense-tech company building a visual intelligence platform that fuses satellite, drone, and remote-sensing data into a single picture.",
      facts: [
        {
          label: "FIELD DEMO",
          value: "NORTHERN STRIKE '25",
          detail:
            "Camp Grayling, MI, Sept 2025 — with 20th Special Forces Group, CJSOTF, and the Special Operations Robotics Detachment, during my tenure",
          attribution: "company",
          weight: 1,
          source: {
            label: "PR Newswire, 16 Sept 2025",
            url: "https://www.prnewswire.com/news-releases/larx-demonstrates-breakthrough-visual-intelligence-and-3d-reconstruction-capabilities-at-northern-strike-2025-302558127.html",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "LEADERSHIP",
          value: "SOCOM · CIA · IQT",
          detail:
            "CEO Tad Mielnicki (co-founder, Overwatch Data & Second Front Systems); CPO Colter Carambio (ex-Director, In-Q-Tel); CTO Adam Smith (ex-USSOCOM, Maxar, CIA Global Response Staff)",
          attribution: "company",
          weight: 1,
          source: {
            label: "Larx — About",
            url: "https://larx.io/about/",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "FOUNDED",
          value: "2024",
          detail: "Veteran-owned small business; CMMC Level 1 & 2, cleared for federal contracts",
          attribution: "company",
          weight: 2,
          source: {
            label: "Larx — About",
            url: "https://larx.io/about/",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "BACKED BY",
          value: "6 FUNDS",
          detail:
            "Expeditions Fund, ONE Bow River, Fulcrum Venture Group, Marengo Group, REFASHIOND Ventures, Evolution VC Partners",
          attribution: "company",
          weight: 3,
          source: {
            label: "Larx — About",
            url: "https://larx.io/about/",
            verifiedOn: "2026-08-25",
          },
        },
      ],
      markIds: ["inQTel", "maxar"],
      markCaption: "Where the founding team came from",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // OVERWATCH DATA
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "overwatch-data",
    kind: "work",
    brandId: "overwatchData",
    role: "Software Engineer & Cyber Analyst",
    location: "Atlanta, GA",
    start: "2022-06",
    end: "2024-08",
    displayPeriod: "JUN 2022 — AUG 2024",
    status: "past",
    summary: "Fraud detection, auth, and customer-facing backend at a newly founded YC company.",
    achievements: [
      {
        text: "Designed customer-specific data storage, ML, and backend systems for enterprise risk teams, including Vanguard and SoFi.",
        attribution: "self",
        stack: ["python", "sql", "gcp"],
      },
      {
        text: "Pioneered AI check-fraud detection on top of proprietary Telegram and social-media scrapers, preventing over {{$250K}} in check fraud in four months.",
        metric: "$250K+ / 4 MO",
        attribution: "self",
        stack: ["python", "pandas", "numpy"],
      },
      {
        text: "Owned authentication end to end: Google SSO, Okta SSO, multi-factor authentication, and email/password.",
        attribution: "self",
        stack: ["python", "okta"],
      },
      {
        text: "Ran MVP demos and sales conversations with prospective enterprise customers, including Franklin Templeton, Goldman Sachs, Tesla, and Ginkgo Bioworks.",
        attribution: "self",
      },
    ],
    stack: ["python", "sql", "pandas", "numpy", "gcp", "okta", "git"],
    clients: [
      { name: "Vanguard", relationship: "customer", brandId: "vanguard" },
      { name: "SoFi", relationship: "customer", brandId: "sofi" },
      { name: "Franklin Templeton", relationship: "prospect" },
      { name: "Goldman Sachs", relationship: "prospect" },
      { name: "Tesla", relationship: "prospect" },
      { name: "Ginkgo Bioworks", relationship: "prospect" },
    ],
    clientsDisclaimer:
      "Organizations I built for or pitched while at Overwatch Data. Named to describe my own work — not an endorsement, partnership, or affiliation. All marks belong to their owners.",
    context: {
      what: "OSINT platform for enterprise cyber, fraud, and security risk teams, monitoring the open and dark web in real time.",
      facts: [
        {
          label: "BATCH",
          value: "YC S22",
          detail: "I joined in 2022, the company's founding and Y Combinator year",
          attribution: "company",
          weight: 1,
          source: {
            label: "Y Combinator — Overwatch",
            url: "https://www.ycombinator.com/companies/overwatch",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "SOURCES",
          value: "300K+",
          detail: "Monitored 24/7, from dark-web forums to social media",
          attribution: "company",
          weight: 1,
          source: {
            label: "Overwatch Data",
            url: "https://www.overwatchdata.ai",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "TEAM",
          value: "~14 PEOPLE",
          detail: "Roughly $8M raised across the seed round",
          attribution: "company",
          weight: 2,
          source: {
            label: "Y Combinator — Overwatch",
            url: "https://www.ycombinator.com/companies/overwatch",
            verifiedOn: "2026-08-25",
          },
        },
        {
          label: "FOUNDERS",
          value: "STRIPE · GOOGLE · MIT",
          detail:
            "Arjun Bisen (ex-Stripe & Google Search risk), Zara Perumal (MIT CSAIL; ex-Google Threat Analysis Group), Tad Mielnicki",
          attribution: "company",
          weight: 2,
          source: {
            label: "Y Combinator — Overwatch",
            url: "https://www.ycombinator.com/companies/overwatch",
            verifiedOn: "2026-08-25",
          },
        },
      ],
      markIds: ["ycombinator", "googleCloud"],
      markCaption: "Accelerator & platform",
    },
  },
];

export const currentRole = experience.find((e) => e.status === "current");
