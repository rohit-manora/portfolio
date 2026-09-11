import type { SkillCluster, Tech } from "./types";

/**
 * Constellation clusters — hand-authored coordinates, not physics.
 * A designed diagram, identical on every load. See PORTFOLIO_PLAN.md §7.
 * x/y are fractions of the viewBox.
 */
export const clusters: readonly SkillCluster[] = [
  { id: "frontend", label: "Frontend", x: 0.34, y: 0.16 },
  { id: "architecture", label: "Architecture", x: 0.72, y: 0.18 },
  { id: "enterprise", label: "Enterprise", x: 0.86, y: 0.55 },
  { id: "backend-data", label: "Backend & Data", x: 0.64, y: 0.86 },
  { id: "cloud-devops", label: "Cloud & DevOps", x: 0.28, y: 0.86 },
  { id: "tooling", label: "Tooling", x: 0.12, y: 0.5 },
];

/**
 * `usedOn` powers the tooltip evidence line ("Used on: Carnival UK").
 * An empty array means the technology is listed as a skill in a resume but is
 * not attributed to a named project — the tooltip omits the line rather than
 * inventing an attribution.
 */
export const techs: readonly Tech[] = [
  // --- Frontend ---
  { id: "react", label: "React", category: "frontend", status: "current", usedOn: ["carnival"], source: "A" },
  { id: "nextjs", label: "Next.js", category: "frontend", status: "current", usedOn: [], source: "A" },
  { id: "typescript", label: "TypeScript", category: "frontend", status: "current", usedOn: ["verizon"], source: "A+B" },
  { id: "javascript", label: "JavaScript", category: "frontend", status: "current", usedOn: ["streamanalytix"], source: "A+B" },
  { id: "tailwind", label: "Tailwind CSS", category: "frontend", status: "current", usedOn: ["carnival"], source: "A" },
  { id: "html5", label: "HTML5", category: "frontend", status: "current", usedOn: ["verizon"], source: "A+B" },
  { id: "css3", label: "CSS3", category: "frontend", status: "current", usedOn: ["verizon"], source: "A+B" },
  { id: "sass", label: "SASS / SCSS", category: "frontend", status: "historical", usedOn: ["giddh"], source: "A+B" },
  { id: "redux", label: "Redux", category: "frontend", status: "current", usedOn: [], source: "A" },
  { id: "angular", label: "Angular 8+", category: "frontend", status: "historical", usedOn: ["giddh", "verizon"], source: "A+B" },
  { id: "rxjs", label: "RxJS", category: "frontend", status: "historical", usedOn: ["verizon"], source: "A+B" },
  { id: "ngrx", label: "NgRx", category: "frontend", status: "historical", usedOn: ["giddh", "verizon"], source: "B" },

  // --- Architecture ---
  { id: "microfrontends", label: "Microfrontends", category: "architecture", status: "current", usedOn: ["carnival"], source: "A" },
  { id: "microservices", label: "Microservices", category: "architecture", status: "current", usedOn: [], source: "A" },
  { id: "soa", label: "Service-Oriented Architecture", category: "architecture", status: "current", usedOn: [], source: "A" },

  // --- Enterprise ---
  { id: "aem", label: "Adobe Experience Manager", category: "enterprise", status: "current", usedOn: ["carnival"], source: "A" },
  { id: "universal-editor", label: "AEM Universal Editor", category: "enterprise", status: "current", usedOn: ["carnival"], source: "A" },
  { id: "graphql", label: "GraphQL", category: "enterprise", status: "current", usedOn: ["carnival"], source: "A" },
  { id: "rest", label: "REST APIs", category: "enterprise", status: "current", usedOn: ["carnival", "adha", "streamanalytix", "servicexpert"], source: "A" },
  { id: "storybook", label: "Storybook", category: "enterprise", status: "current", usedOn: ["carnival"], source: "A" },
  { id: "i18n", label: "i18n", category: "enterprise", status: "current", usedOn: ["carnival"], source: "A" },

  // --- Backend & Data ---
  { id: "nodejs", label: "Node.js", category: "backend-data", status: "historical", usedOn: [], source: "A+B" },
  { id: "java", label: "Java 8", category: "backend-data", status: "historical", usedOn: [], source: "B" },
  { id: "mysql", label: "MySQL", category: "backend-data", status: "historical", usedOn: [], source: "B" },
  { id: "postgresql", label: "PostgreSQL", category: "backend-data", status: "historical", usedOn: [], source: "B" },
  { id: "sqlite", label: "SQLite", category: "backend-data", status: "historical", usedOn: ["servicexpert"], source: "B" },
  { id: "sqlserver", label: "SQL Server 2012", category: "backend-data", status: "historical", usedOn: ["servicexpert"], source: "B" },

  // --- Cloud & DevOps ---
  { id: "aws", label: "AWS", category: "cloud-devops", status: "current", usedOn: [], source: "A" },
  { id: "azure", label: "Azure", category: "cloud-devops", status: "current", usedOn: ["adha"], source: "A" },
  { id: "docker", label: "Docker", category: "cloud-devops", status: "current", usedOn: [], source: "A" },
  { id: "cicd", label: "CI/CD", category: "cloud-devops", status: "current", usedOn: ["carnival", "adha", "streamanalytix"], source: "A" },
  { id: "jenkins", label: "Jenkins", category: "cloud-devops", status: "current", usedOn: ["carnival"], source: "A" },
  { id: "git", label: "Git", category: "cloud-devops", status: "current", usedOn: ["carnival", "adha", "verizon", "streamanalytix", "giddh"], source: "A+B" },
  { id: "gitlab", label: "GitLab", category: "cloud-devops", status: "current", usedOn: [], source: "A" },
  { id: "bitbucket", label: "Bitbucket", category: "cloud-devops", status: "historical", usedOn: [], source: "B" },
  { id: "codeship", label: "Codeship", category: "cloud-devops", status: "historical", usedOn: ["giddh"], source: "B" },

  // --- Tooling ---
  { id: "webpack", label: "Webpack", category: "tooling", status: "current", usedOn: [], source: "A" },
  { id: "electron", label: "Electron", category: "tooling", status: "historical", usedOn: ["giddh"], source: "B" },
  { id: "postman", label: "Postman", category: "tooling", status: "current", usedOn: [], source: "B" },
  { id: "jira", label: "JIRA", category: "tooling", status: "current", usedOn: ["giddh"], source: "B" },
  { id: "android", label: "Android", category: "tooling", status: "historical", usedOn: ["servicexpert"], source: "B" },
  { id: "xml", label: "XML", category: "tooling", status: "historical", usedOn: ["servicexpert"], source: "A+B" },
];

export const techById = new Map(techs.map((t) => [t.id, t]));

export const clusterLabels: Record<string, string> = Object.fromEntries(
  clusters.map((c) => [c.id, c.label]),
);
