/**
 * Type contracts for the portfolio content layer.
 *
 * Every value in `data/` traces to one of:
 *   "A"    RohitManora_10057560.pdf   (Publicis Sapient profile)
 *   "B"    CV_Rohit_Manora (1).pdf    (personal CV)
 *   "user" supplied directly by Rohit, 11 Sep 2026
 *
 * Nothing is invented. See PORTFOLIO_PLAN.md Part 1.
 */

export type Source = "A" | "B" | "A+B" | "user";

/* ---------- Skills ---------- */

export type SkillCategory =
  | "frontend"
  | "architecture"
  | "enterprise"
  | "backend-data"
  | "cloud-devops"
  | "tooling";

export type TechId =
  | "react" | "nextjs" | "typescript" | "javascript" | "html5" | "css3"
  | "sass" | "tailwind" | "redux" | "angular" | "rxjs" | "ngrx"
  | "microfrontends" | "microservices" | "soa"
  | "aem" | "universal-editor" | "graphql" | "rest" | "storybook" | "i18n"
  | "nodejs" | "java" | "mysql" | "postgresql" | "sqlite" | "sqlserver"
  | "aws" | "azure" | "docker" | "cicd" | "jenkins" | "git" | "gitlab"
  | "bitbucket" | "codeship"
  | "webpack" | "electron" | "postman" | "jira" | "android" | "xml";

export type EngagementId =
  | "carnival" | "adha" | "verizon"
  | "streamanalytix" | "giddh" | "servicexpert" | "biddrip";

export interface Tech {
  id: TechId;
  label: string;
  category: SkillCategory;
  /** `current` = on the most recent stack; drives accent vs hairline treatment. */
  status: "current" | "historical";
  /** Engagements that demonstrably used it. Empty = listed as a skill, not attributed. */
  usedOn: readonly EngagementId[];
  source: Source;
}

export interface SkillCluster {
  id: SkillCategory;
  label: string;
  /** Position on the constellation, as a fraction of the viewBox. */
  x: number;
  y: number;
}

/* ---------- Experience ---------- */

export interface Metric {
  value: string;
  label: string;
  /** Provenance. Never render a metric without it. */
  source: string;
}

export interface Engagement {
  id: EngagementId;
  name: string;
  /** Distinguishes a client engagement from an owned product. */
  kind: "client" | "product";
  domain: string;
  start: string; // ISO yyyy-MM
  end: string | null; // null = ongoing
  summary: string;
  responsibilities: readonly string[];
  tech: readonly TechId[];
  metrics?: readonly Metric[];
  /** Scroll-links the card to its deep-dive section. */
  deepDive?: "architecture" | "dataflow";
  source: Source;
}

export interface Employer {
  id: string;
  name: string;
  location: string;
  title: string;
  start: string; // ISO yyyy-MM
  end: string | null;
  engagements: readonly Engagement[];
  source: Source;
}

/* ---------- Projects ---------- */

export interface Project {
  id: EngagementId;
  name: string;
  kind: "client" | "product";
  domain: string;
  /** Employer the work was performed under. */
  via: string;
  period: string;
  description: string;
  contributions: readonly string[];
  tech: readonly TechId[];
  metrics?: readonly Metric[];
  link?: { href: string; label: string };
  deepDive?: "architecture" | "dataflow";
  /** Selects the generative SVG motif. Never a screenshot. */
  motif: "modules" | "parcels" | "streams" | "ledger" | "spokes" | "brackets";
  span: "wide" | "narrow" | "half";
  source: Source;
}

/* ---------- Education, credentials, achievements ---------- */

export interface EducationEntry {
  qualification: string;
  specialisation?: string;
  institution: string;
  affiliation?: string;
  period: string;
  result?: string;
  source: Source;
}

export interface Credential {
  name: string;
  /** Preserves the resume's own Training / Course / Certificate distinction. */
  kind: "Training" | "Course" | "Certificate";
  institute: string;
  year: string;
  icon: "sparkles" | "cloud" | "code" | "accessibility";
  source: Source;
}

export interface Achievement {
  label: string;
  value: string;
  source: Source;
}

export interface Capability {
  title: string;
  description: string;
  evidence: readonly EngagementId[];
}

/* ---------- Visualisations ---------- */

export interface ArchNode {
  id: string;
  label: string;
  layer: ArchLayerId;
}

export type ArchLayerId =
  | "brand" | "mfe" | "shared" | "content" | "integration" | "services";

export interface ArchLayer {
  id: ArchLayerId;
  label: string;
  nodes: readonly ArchNode[];
  /** Rendered at reduced opacity — outside the scope of the documented work. */
  abstracted?: boolean;
}

export interface FlowStage {
  id: string;
  label: string;
  description: string;
  /** The one stage Rohit owned. Everything else renders dimmed. */
  owned?: boolean;
}
