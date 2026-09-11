import type { Capability } from "./types";

/** Every capability is evidenced by at least one documented engagement (§7 of the brief). */
export const capabilities: readonly Capability[] = [
  {
    title: "Frontend Architecture",
    description: "Maintainable frontend architectures for enterprise platforms.",
    evidence: ["carnival"],
  },
  {
    title: "Microfrontend Architecture",
    description: "Independent, reusable modules composed into a single brand experience.",
    evidence: ["carnival"],
  },
  {
    title: "Component Engineering",
    description: "Responsive, reusable UI components in React and Tailwind CSS.",
    evidence: ["carnival"],
  },
  {
    title: "Design Systems",
    description: "Shared Storybook component libraries reused across brands.",
    evidence: ["carnival"],
  },
  {
    title: "AEM Integration",
    description: "Content management across traditional, headless and Edge Delivery architectures.",
    evidence: ["carnival"],
  },
  {
    title: "API Integration",
    description: "GraphQL and REST integration; API design and implementation.",
    evidence: ["carnival", "adha"],
  },
  {
    title: "Internationalisation",
    description: "Dynamic i18n labels and page-level configuration by country and page.",
    evidence: ["carnival"],
  },
  {
    title: "Testing & Quality",
    description: "Unit testing and coverage standards; defect triage through to deployment.",
    evidence: ["carnival", "adha", "streamanalytix"],
  },
  {
    title: "CI/CD",
    description: "Pipeline management with Jenkins, Codeship and Git branch strategy.",
    evidence: ["carnival", "streamanalytix", "giddh"],
  },
  {
    title: "Code Review",
    description: "Review and branch management across distributed teams.",
    evidence: ["carnival", "streamanalytix"],
  },
  {
    title: "Observability & RCA",
    description: "Azure log monitoring across environments with root cause analysis.",
    evidence: ["adha"],
  },
  {
    title: "Performance Optimisation",
    description: "Application performance work and build pipeline optimisation.",
    evidence: ["giddh"],
  },
  {
    title: "Agile Delivery",
    description: "Scrum process across cross-functional onshore and offshore teams.",
    evidence: ["streamanalytix", "servicexpert"],
  },
  {
    title: "Knowledge Transfer",
    description: "Onboarding new joiners, task allocation and structured feedback.",
    evidence: ["streamanalytix"],
  },
];
