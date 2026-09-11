import type { Metric } from "./types";

export const profile = {
  name: "Rohit Manora",
  title: "Senior Experience Engineer",
  company: "Publicis Sapient",
  location: "Gurgaon, India",
  since: "August 2021",

  /** Hero deck — brief-supplied positioning line. */
  deck:
    "Building scalable digital experiences, modern frontend architectures and high-performance web applications.",

  /** Hero sub-deck — grounded in Source A's summary. */
  subDeck:
    "Frontend engineering across enterprise financial services, e-commerce and telecommunications platforms.",

  /** About narrative. Facts from Source A, rewritten for the web. */
  about: [
    "Senior Experience Engineer at Publicis Sapient, working across the full software development lifecycle — solution design, architecture, development, integration, implementation, testing and application maintenance.",
    "Designs and delivers scalable, data-driven, object-oriented, microservice-based and service-oriented enterprise applications, working with cross-functional stakeholders and distributed onshore and offshore teams.",
    "Recent work has centred on AEM-based digital transformation — building maintainable frontend architectures, integrating enterprise content management, optimising application performance and delivering personalised customer experiences across web and mobile.",
  ],

  contact: {
    email: "career.rohitmanora@gmail.com",
    phone: "+91 78981 50777",
    phoneHref: "+917898150777",
    linkedin: "https://www.linkedin.com/in/rohit-manora/",
    linkedinLabel: "linkedin.com/in/rohit-manora",
    resume: "/resume/Rohit-Manora-CV.pdf",
  },

  contactHeading: "Let's build something exceptional.",
  contactDeck:
    "Open to conversations about senior frontend and experience engineering roles, frontend architecture, and enterprise platform work.",
  availability: "Based in Gurgaon, India · Available for remote & hybrid",
} as const;

/** About ledger. `Domains` includes Telecommunications from the Verizon engagement (user-supplied). */
export const ledger: readonly { key: string; value: string }[] = [
  { key: "Role", value: "Senior Experience Engineer" },
  { key: "Company", value: "Publicis Sapient" },
  { key: "Base", value: "Gurgaon, India" },
  { key: "Since", value: "August 2021" },
  { key: "Domains", value: "Financial Services · E-commerce · Telecommunications" },
  { key: "Focus", value: "Frontend architecture · AEM · Microfrontends" },
  { key: "Education", value: "B.E. Computer Science & Engineering, SGSITS" },
];

/**
 * The only numeric claims permitted on the site.
 * Each renders with its `source` label — see PORTFOLIO_PLAN.md §6.
 */
export const stats: readonly Metric[] = [
  { value: "8+", label: "Years engineering", source: "2017 — 2026" },
  { value: "8", label: "Microfrontend modules", source: "Carnival UK" },
  { value: "85%", label: "Test coverage", source: "ADHA" },
  { value: "2", label: "Brands delivered", source: "Cunard · P&O" },
];

export const credentialRail: readonly string[] = [
  "8+ Years",
  "Publicis Sapient",
  "React / Next.js",
  "AEM + MFE",
];
