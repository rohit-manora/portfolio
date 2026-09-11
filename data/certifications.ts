import type { Credential } from "./types";

/**
 * The resume's own Training / Course / Certificate split is preserved, and the
 * institute is always rendered.
 *
 * NOTE: "AWS Certified Developer Associate" appears in Source A under
 * TRAINING & COURSES with institute "Udemy". It is a Udemy course, NOT an
 * AWS-issued certification, and must never be presented as one.
 */
export const credentials: readonly Credential[] = [
  {
    name: "L1/L2 Gen AI Training",
    kind: "Training",
    institute: "Publicis Sapient",
    year: "2026",
    icon: "sparkles",
    source: "A",
  },
  {
    name: "AWS Certified Developer Associate",
    kind: "Course",
    institute: "Udemy",
    year: "2023",
    icon: "cloud",
    source: "A",
  },
  {
    name: "ES6 JavaScript Complete Developer's Guide",
    kind: "Certificate",
    institute: "Udemy",
    year: "2022",
    icon: "code",
    source: "A",
  },
  {
    name: "Introduction to UX Design for Accessibility and WCAG",
    kind: "Certificate",
    institute: "Udemy",
    year: "2024",
    icon: "accessibility",
    source: "A",
  },
];
