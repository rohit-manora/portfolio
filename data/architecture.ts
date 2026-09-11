import type { ArchLayer } from "./types";

/**
 * Carnival UK microfrontend architecture — PORTFOLIO_PLAN.md §10.
 *
 * INTEGRITY CONSTRAINT: Source A names the eight modules but describes none of
 * them individually. No per-module description exists here, and none may be
 * added. The detail panel renders `sharedFacts` below, which are true of every
 * module and are stated verbatim in the resume.
 */
export const layers: readonly ArchLayer[] = [
  {
    id: "brand",
    label: "Brand Experience",
    nodes: [
      { id: "cunard", label: "Cunard", layer: "brand" },
      { id: "po", label: "P&O Cruises", layer: "brand" },
    ],
  },
  {
    id: "mfe",
    label: "Microfrontends",
    nodes: [
      { id: "cruise", label: "Cruise", layer: "mfe" },
      { id: "basket", label: "Basket", layer: "mfe" },
      { id: "checkout", label: "Checkout", layer: "mfe" },
      { id: "checkin", label: "Check-in", layer: "mfe" },
      { id: "personal", label: "Personal", layer: "mfe" },
      { id: "product", label: "Product", layer: "mfe" },
      { id: "payments", label: "Payments", layer: "mfe" },
      { id: "events", label: "Events", layer: "mfe" },
    ],
  },
  {
    id: "shared",
    label: "Shared UI",
    nodes: [
      { id: "storybook", label: "Storybook Design System", layer: "shared" },
    ],
  },
  {
    id: "content",
    label: "Content & Config",
    nodes: [
      { id: "aem", label: "Adobe Experience Manager", layer: "content" },
      { id: "universal-editor", label: "Universal Editor", layer: "content" },
      { id: "i18n", label: "i18n Labels", layer: "content" },
      { id: "page-config", label: "Page Config", layer: "content" },
    ],
  },
  {
    id: "integration",
    label: "Integration",
    nodes: [
      { id: "graphql", label: "GraphQL", layer: "integration" },
      { id: "rest", label: "REST APIs", layer: "integration" },
    ],
  },
  {
    id: "services",
    label: "Backend Services",
    abstracted: true,
    nodes: [{ id: "services", label: "Backend Services", layer: "services" }],
  },
];

/** Rendered for every microfrontend module. Every line is stated in Source A. */
export const sharedFacts: readonly { key: string; value: string }[] = [
  { key: "Layer", value: "Microfrontend" },
  { key: "UI", value: "React · Tailwind CSS" },
  { key: "Components", value: "Consumed from the shared Storybook library" },
  { key: "Content", value: "Authored in AEM · Universal Editor inline authoring" },
  { key: "Data", value: "GraphQL · REST APIs" },
  { key: "Config", value: "i18n labels · page-level config by country, page, style ID" },
  { key: "Brands", value: "Cunard · P&O Cruises" },
];

/** Detail copy for non-module nodes — each drawn from Source A. */
export const nodeDetails: Record<string, readonly { key: string; value: string }[]> = {
  storybook: [
    { key: "Layer", value: "Shared UI" },
    { key: "Purpose", value: "Shared UI components developed and maintained for cross-brand reuse and consistency" },
    { key: "Consumed by", value: "All eight microfrontend modules" },
  ],
  aem: [
    { key: "Layer", value: "Content & Config" },
    { key: "Role", value: "Enterprise content management" },
    { key: "Architectures", value: "Traditional · Headless · Edge Delivery Services" },
  ],
  "universal-editor": [
    { key: "Layer", value: "Content & Config" },
    { key: "Role", value: "Inline content authoring directly within the preview experience" },
    { key: "Outcome", value: "Improved authoring efficiency" },
  ],
  i18n: [
    { key: "Layer", value: "Content & Config" },
    { key: "Role", value: "Dynamic i18n labels across brand experiences" },
  ],
  "page-config": [
    { key: "Layer", value: "Content & Config" },
    { key: "Role", value: "Page-level configuration by country, page and style ID" },
  ],
  graphql: [
    { key: "Layer", value: "Integration" },
    { key: "Role", value: "Platform integration with backend services" },
  ],
  rest: [
    { key: "Layer", value: "Integration" },
    { key: "Role", value: "Platform integration with backend services" },
  ],
  cunard: [
    { key: "Layer", value: "Brand Experience" },
    { key: "Platform", value: "Cunard digital platform" },
    { key: "Goal", value: "Fast, scalable, personalised experience driving direct cruise bookings" },
  ],
  po: [
    { key: "Layer", value: "Brand Experience" },
    { key: "Platform", value: "P&O Cruises digital platform" },
    { key: "Goal", value: "Fast, scalable, personalised experience driving direct cruise bookings" },
  ],
  services: [
    { key: "Layer", value: "Backend Services" },
    { key: "Scope", value: "Outside the documented frontend engagement — shown for architectural context only" },
  ],
};
