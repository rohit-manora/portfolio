export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: readonly NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "work", label: "Projects", href: "#work" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

/** Section index labels — the invariant "01 — ABOUT" header pattern (§1). */
export const sectionIndex = {
  about: "01",
  skills: "02",
  experience: "03",
  work: "04",
  architecture: "05",
  dataflow: "06",
  capabilities: "07",
  education: "08",
  contact: "09",
} as const;
