import type { FlowStage } from "./types";

/**
 * StreamAnalytix platform pipeline — PORTFOLIO_PLAN.md §11.
 *
 * Stage names are taken verbatim from the resumes: "data ingestion, data
 * analytics, machine learning, action triggers, and data visualization",
 * plus the stated source -> translate -> process -> target framing.
 *
 * `owned: true` marks the one layer Rohit worked on. Every other stage renders
 * dimmed — the pipeline describes the product, not the scope of his work.
 */
export const stages: readonly FlowStage[] = [
  { id: "source", label: "Source", description: "Data pulled from the source system." },
  { id: "ingestion", label: "Data Ingestion", description: "Ingestion of incoming data into the platform." },
  { id: "processing", label: "Processing", description: "Data translated and processed." },
  { id: "analytics", label: "Data Analytics", description: "Analytics across the processed dataset." },
  { id: "ml", label: "Machine Learning", description: "Machine learning over platform data." },
  { id: "triggers", label: "Action Triggers", description: "Actions triggered from data conditions." },
  { id: "visualisation", label: "Data Visualisation", description: "Visualisation of processing output.", owned: true },
  { id: "target", label: "Target", description: "Processed data written to the target data source." },
];

export const contribution = {
  role: "UI Engineer, Impetus Technologies",
  items: [
    "UI creation · data binding · API binding · feature implementation",
    "Git branch management · code review · unit testing · CI/CD pipeline",
    "Scrum / Agile · knowledge transfer and task allocation for new joiners",
  ],
} as const;
