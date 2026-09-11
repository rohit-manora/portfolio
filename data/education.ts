import type { Achievement, EducationEntry } from "./types";

export const education: readonly EducationEntry[] = [
  {
    qualification: "Bachelor of Engineering",
    specialisation: "Computer Science & Engineering",
    institution: "Shri Govindram Seksaria Institute of Technology and Science, Indore",
    affiliation: "Affiliated with RGPV University",
    period: "2012 — 2016",
    result: "6.08 CGPA",
    source: "A+B",
  },
  {
    qualification: "Senior Secondary Certificate",
    institution: "Govt. High Secondary School, Babulda",
    period: "2010",
    result: "79.6%",
    source: "B",
  },
  {
    qualification: "Higher Secondary Certificate",
    institution: "Govt. High Secondary School, Babulda",
    period: "2008",
    result: "81.2%",
    source: "B",
  },
];

/** A quiet mono ledger beside Education — never a headline section (§12). */
export const achievements: readonly Achievement[] = [
  { label: "10th Board", value: "1st position, town level", source: "B" },
  { label: "12th Board", value: "1st position, town level", source: "B" },
  { label: "Mathematics", value: "94 / 100, 12th Board", source: "B" },
  { label: "MPPET", value: "Rank 1745", source: "B" },
  { label: "GATE", value: "AIR 6623 · score 432", source: "B" },
];
