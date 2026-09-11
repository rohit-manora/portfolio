import type { Project } from "./types";

/**
 * Selected work. Asymmetric spans — equal cards would imply equal weight (§9).
 *
 * `motif` selects a generative SVG visual. There are no screenshots: none were
 * supplied, and inventing client UI would misrepresent confidential work.
 *
 * Verizon Wireless is intentionally absent — only client, role, dates and stack
 * are known, with no product description or responsibilities. It appears in the
 * career timeline instead. See PORTFOLIO_PLAN.md Part 0, C14.
 *
 * Biddrip is absent pending employer attribution (C10b).
 */
export const projects: readonly Project[] = [
  {
    id: "carnival",
    name: "Carnival UK — Cunard & P&O Cruises",
    kind: "client",
    domain: "Travel E-commerce",
    via: "Publicis Sapient",
    period: "2024 — 2026",
    span: "wide",
    motif: "modules",
    deepDive: "architecture",
    source: "A",
    description:
      "Digital transformation of the Cunard and P&O Cruises platforms — a microfrontend architecture with eight independent modules, a shared Storybook design system, and AEM content management across traditional, headless and Edge Delivery Services architectures.",
    contributions: [
      "Responsive UI components in ReactJS and Tailwind CSS",
      "Reusable Storybook components consumed across microfrontends",
      "AEM integration, content management, i18n and page-level configuration",
      "Platform migration support across multiple MFEs",
      "Unit testing, code reviews, Git branch management, CI/CD and Jenkins",
    ],
    tech: ["react", "tailwind", "microfrontends", "storybook", "aem", "graphql", "rest", "i18n", "jenkins"],
    metrics: [
      { value: "8", label: "MFE modules", source: "Carnival UK" },
      { value: "2", label: "Brands", source: "Cunard · P&O" },
    ],
  },
  {
    id: "adha",
    name: "ADHA / ISKAN",
    kind: "client",
    domain: "Government · Housing",
    via: "Publicis Sapient",
    period: "2023 — 2024",
    span: "narrow",
    motif: "parcels",
    source: "A",
    description:
      "Abu Dhabi Housing Authority's citizen housing platform, with ISKAN as the mobile application for plot booking, land grants, house purchase and property exchange.",
    contributions: [
      "API design, development and implementation",
      "Azure log monitoring and Root Cause Analysis across environments",
      "Critical and medium-level bug resolution through to deployment",
    ],
    tech: ["rest", "azure", "cicd", "git"],
    metrics: [{ value: "85%", label: "Test coverage", source: "ADHA" }],
  },
  {
    id: "streamanalytix",
    name: "StreamAnalytix",
    kind: "product",
    domain: "Data & Analytics",
    via: "Impetus Technologies",
    period: "2020 — 2021",
    span: "narrow",
    motif: "streams",
    deepDive: "dataflow",
    source: "A+B",
    link: { href: "https://www.streamanalytix.com/", label: "streamanalytix.com" },
    description:
      "An end-to-end data processing platform for ingestion, analytics, machine learning, action triggers and visualisation. Rohit owned the UI layer for data processing and visualisation.",
    contributions: [
      "UI creation, data binding, API binding and feature implementation",
      "Git branch management and code review",
      "Unit testing and CI/CD pipeline management",
      "Knowledge transfer and task allocation for new joiners",
    ],
    tech: ["javascript", "rest", "git", "cicd"],
  },
  {
    id: "giddh",
    name: "Giddh",
    kind: "product",
    domain: "FinTech · Accounting",
    via: "Walkover Web Solutions",
    period: "2018 — 2020",
    span: "wide",
    motif: "ledger",
    source: "B",
    link: { href: "https://giddh.com/", label: "giddh.com" },
    description:
      "A ledger-based cloud accounting platform for management of financial books — end-to-end reporting for direct tax filing, bank and payment gateway integration, and permission-controlled access across web, mobile and desktop.",
    contributions: [
      "Product delivery across web, mobile and desktop platforms",
      "Electron build automation for Windows and macOS with backward compatibility",
      "Build script and code structure optimisation on Codeship",
    ],
    tech: ["angular", "sass", "ngrx", "electron", "codeship", "jira", "git"],
    metrics: [{ value: "40%", label: "Build time reduction", source: "Giddh" }],
  },
  {
    id: "servicexpert",
    name: "ServiceXpert",
    kind: "product",
    domain: "B2C Home Services",
    via: "Scalable Application Solution",
    period: "2017 — 2018",
    span: "half",
    motif: "spokes",
    source: "A+B",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.manora.admin.servicexpert&hl=en_IN",
      label: "Google Play",
    },
    description:
      "A B2C mobile and web platform for household services — plumber, electrician, carpenter and painter — bookable in a single click.",
    contributions: [
      "UI creation, data binding, API binding and feature implementation",
      "Mobile application UI in XML with API binding",
      "Mobile and web application testing against requirements",
    ],
    tech: ["android", "xml", "sqlite", "sqlserver", "rest"],
  },
];
