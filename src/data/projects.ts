import type { Project } from "./types";

export const projects: Project[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // EMBEDDED / VEHICLE
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "mini-dyno",
    name: "Mini Dynamometer",
    tagline: "A water-brake dyno I machined, wired, and wrote the firmware for.",
    description:
      "A CNC-machined water-brake dynamometer that measures horsepower and torque on internal combustion engines. A FreeRTOS firmware stack on an ESP32 streams live runs to a companion Swift app on iPhone.",
    group: "embedded",
    status: "active",
    start: "2025-09",
    end: null,
    displayPeriod: "SEPT 2025 - PRESENT",
    stack: ["c", "swift", "freertos", "esp32", "kicad", "solidworks"],
    repo: "https://github.com/EhlOps/mini-dyno",
    facts: [
      { label: "MEASURES", value: "HP + TORQUE", attribution: "self", weight: 1 },
      { label: "BRAKE", value: "WATER", attribution: "self", weight: 1 },
      { label: "FIRMWARE", value: "FreeRTOS", detail: "on ESP32, streaming to a Swift iOS client", attribution: "self", weight: 1 },
      { label: "DESIGN", value: "KiCad + SW", detail: "PCB in KiCad, mechanicals in SolidWorks", attribution: "self", weight: 2 },
    ],
  },
  {
    id: "ner-traction-control",
    name: "Traction Control",
    tagline: "A PID controller running on 25A's vehicle control unit.",
    description:
      "A PID traction-control algorithm running on the vehicle control unit of Northeastern Electric Racing's 25A car, keeping wheel slip in check under hard acceleration.",
    group: "embedded",
    status: "active",
    start: "2026-07",
    end: null,
    displayPeriod: "2026 - PRESENT",
    stack: ["c"],
    repo: "https://github.com/Northeastern-Electric-Racing/Cerberus-2.0",
    teamRepo: {
      orgBrandId: "ner",
      contribution: "I designed and deployed the PID traction-control algorithm.",
    },
  },
  {
    id: "ner-bms",
    name: "BMS Firmware",
    tagline: "Battery management firmware for 25A's electric racecar.",
    description:
      "Firmware for the battery management system on Northeastern Electric Racing's 25A car. It's the software that keeps the pack safe and the car legal to run.",
    group: "embedded",
    status: "active",
    start: "2026-07",
    end: null,
    displayPeriod: "2026 - PRESENT",
    stack: ["c"],
    repo: "https://github.com/Northeastern-Electric-Racing/TSECU-Shepherd",
    teamRepo: {
      orgBrandId: "ner",
      contribution: "I wrote and deployed the BMS software running on the boards.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SYSTEMS / LANGUAGES
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "loxvm",
    name: "LoxVM",
    tagline: "A memory-safe scripting language written from scratch in Rust.",
    description:
      "A scripting language built from the ground up in Rust, with functions, loops, and smart variable typing. Ships low-level debugging tools, including a live visualization of the stack as programs execute.",
    group: "systems",
    status: "shipped",
    start: "2024-10",
    end: "2025-01",
    displayPeriod: "OCT 2024 - JAN 2025",
    stack: ["rust"],
    repo: "https://github.com/EhlOps/LoxVM",
    facts: [
      { label: "LANGUAGE", value: "RUST", detail: "memory-safe by construction", attribution: "self", weight: 1 },
      { label: "FEATURES", value: "FN + LOOPS", detail: "functions, loops, smart variable typing", attribution: "self", weight: 1 },
      { label: "DEBUGGING", value: "STACK VIZ", detail: "low-level tooling that visualizes the stack live", attribution: "self", weight: 1 },
    ],
  },
  {
    id: "ds-online",
    name: "DS Online",
    tagline: "A multiplayer Nintendo DS emulator running in the browser.",
    description:
      "A browser-based Nintendo DS emulator instance with multiplayer support, so two players can connect and play the same session over the network.",
    group: "systems",
    status: "shipped",
    start: "2026-04",
    end: "2026-04",
    displayPeriod: "APR 2026",
    stack: ["python"],
    repo: "https://github.com/EhlOps/DSOnline",
  },
  {
    id: "fixpdf",
    name: "FIXPDF",
    tagline: "Turns FIX protocol PDFs into deterministic, callable APIs.",
    description:
      "Parses FIX protocol specification PDFs and automatically maps their message definitions into deterministic API routes on an Express.js server, replacing manual protocol-to-API translation with a repeatable pipeline.",
    group: "systems",
    status: "shipped",
    start: "2025-05",
    end: "2025-06",
    displayPeriod: "MAY 2025 - JUN 2025",
    stack: ["python", "express"],
    repo: "https://github.com/EhlOps/FIXPDF",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ML / DATA
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "auction-estimate",
    name: "Auction Estimate",
    tagline: "Predicts what an enthusiast car will sell for at auction.",
    description:
      "Predicts enthusiast-car auction prices (MINI Cooper, VW Golf, BMW wagons) on Bring a Trailer and Cars & Bids using quantile regression, sell-probability modeling, comps, and macro signals.",
    group: "ml",
    status: "active",
    start: "2026-07",
    end: null,
    displayPeriod: "JUL 2026 - PRESENT",
    stack: ["python", "pandas", "numpy"],
    repo: "https://github.com/EhlOps/auction-estimate",
    facts: [
      { label: "METHOD", value: "QUANTILE REG.", detail: "plus a sell-probability model over comps and macro signals", attribution: "self", weight: 1 },
      { label: "MARKETS", value: "BAT + C&B", detail: "Bring a Trailer and Cars & Bids", attribution: "self", weight: 1 },
    ],
  },
  {
    id: "newstock-mcp",
    name: "NewStockMCP",
    tagline: "An MCP server that hands stock news to LLM clients.",
    description:
      "A Model Context Protocol server that exposes real-time stock news as a structured tool an LLM client can call directly.",
    group: "ml",
    status: "shipped",
    start: "2026-06",
    end: "2026-06",
    displayPeriod: "JUN 2026",
    stack: ["python"],
    repo: "https://github.com/EhlOps/stockmedia",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ARCHIVE
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "instabot",
    name: "InstaBot",
    tagline: "An Instagram scraper running on a Raspberry Pi.",
    description: "A Selenium-driven Instagram scraper tuned to run on a low-compute Raspberry Pi.",
    group: "archive",
    status: "archived",
    start: "2024-01",
    end: "2024-02",
    displayPeriod: "2024",
    stack: ["python", "selenium", "rpi"],
    repo: "https://github.com/EhlOps/InstaBot",
  },
  {
    id: "yt-download",
    name: "YT Download",
    tagline: "A Chrome extension for downloading YouTube video.",
    description: "A YouTube downloader packaged as a Chrome extension, with multi-format file handling.",
    group: "archive",
    status: "archived",
    start: "2024-12",
    end: "2024-12",
    displayPeriod: "2024",
    stack: ["python", "javascript"],
    repo: "https://github.com/EhlOps/YoutubeDownloaderExtension",
  },
];

export const projectGroups = ["embedded", "systems", "ml"] as const;
export const groupLabels: Record<(typeof projectGroups)[number], string> = {
  embedded: "Embedded / Vehicle",
  systems: "Systems / Languages",
  ml: "ML / Data",
};

export const featuredProjects = projects.filter((p) => p.group !== "archive");
export const archiveProjects = projects.filter((p) => p.group === "archive");
