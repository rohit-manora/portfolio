import type { Employer } from "./types";

/**
 * Career timeline. Engagements are nested inside employers so a client
 * project can never be misread as an employer — see PORTFOLIO_PLAN.md §8.
 */
export const employers: readonly Employer[] = [
  {
    id: "publicis-sapient",
    name: "Publicis Sapient",
    location: "Gurgaon",
    title: "Senior Experience Engineer",
    start: "2021-08",
    end: null,
    source: "A",
    engagements: [
      {
        id: "carnival",
        name: "Carnival UK — Cunard & P&O Cruises",
        kind: "client",
        domain: "Travel E-commerce",
        start: "2024-03",
        end: "2026-08",
        source: "A",
        deepDive: "architecture",
        summary:
          "Digital transformation of the Cunard and P&O Cruises platforms — a microfrontend architecture delivering a fast, scalable, personalised experience that drives direct cruise bookings.",
        responsibilities: [
          "Developed and maintained responsive UI components using ReactJS and Tailwind CSS.",
          "Developed and consumed reusable Storybook UI components across microfrontends.",
          "Worked on AEM integration, content management, i18n and page-level configurations.",
          "Implemented features and supported the migration of the Cunard and P&O Cruises platforms across multiple MFEs.",
          "Performed unit testing, code reviews, Git branch management, and CI/CD and Jenkins activities.",
        ],
        tech: [
          "react", "tailwind", "microfrontends", "storybook", "aem",
          "universal-editor", "graphql", "rest", "i18n", "jenkins", "cicd", "git",
        ],
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
        start: "2023-06",
        end: "2024-03",
        source: "A",
        summary:
          "Abu Dhabi Housing Authority — a single-point housing solution for citizens of the Emirate of Abu Dhabi, with ISKAN as the mobile application for plot booking, land grants, house purchase and property exchange services.",
        responsibilities: [
          "Designed, developed and implemented APIs to meet project requirements and business needs.",
          "Monitored Azure logs across multiple environments and performed Root Cause Analysis to identify and resolve issues.",
          "Identified, resolved and tracked critical and medium-level bugs through to successful deployment.",
          "Achieved 85% test case coverage, ensuring adherence to quality and testing standards.",
        ],
        tech: ["rest", "azure", "cicd", "git"],
        metrics: [{ value: "85%", label: "Test coverage", source: "ADHA" }],
      },
      {
        id: "verizon",
        name: "Verizon Wireless",
        kind: "client",
        domain: "Telecommunications",
        start: "2021-08",
        end: "2023-06",
        source: "user",
        summary:
          "Frontend development on the Verizon Wireless platform, working in Angular with reactive state management.",
        responsibilities: [],
        tech: ["angular", "typescript", "html5", "css3", "rxjs", "ngrx", "git"],
      },
    ],
  },
  {
    id: "impetus",
    name: "Impetus Technologies",
    location: "Indore",
    title: "Front-End Developer / UI Engineer",
    start: "2020-12",
    end: "2021-08",
    source: "A+B",
    engagements: [
      {
        id: "streamanalytix",
        name: "StreamAnalytix",
        kind: "product",
        domain: "Data & Analytics",
        start: "2020-12",
        end: "2021-08",
        source: "A+B",
        deepDive: "dataflow",
        summary:
          "An end-to-end data processing platform for data ingestion, analytics, machine learning, action triggers and data visualisation. Pulls data from source, translates and processes it, and writes to a target data source.",
        responsibilities: [
          "Maintained the UI layer for StreamAnalytix data processing and visualisation.",
          "UI creation, data binding, API binding and feature implementation.",
          "Maintained version control Git branches and performed code review.",
          "Unit testing and CI/CD pipeline management.",
          "Followed Scrum Agile process and teamwork.",
          "Provided knowledge transfer to new joiners, managing task allocation and feedback.",
        ],
        tech: ["javascript", "rest", "git", "cicd"],
      },
    ],
  },
  {
    id: "walkover",
    name: "Walkover Web Solutions",
    location: "Indore",
    title: "Front-End Developer",
    start: "2018-11",
    end: "2020-12",
    source: "B",
    engagements: [
      {
        id: "giddh",
        name: "Giddh",
        kind: "product",
        domain: "FinTech · Accounting",
        start: "2018-11",
        end: "2020-12",
        source: "B",
        summary:
          "A ledger-based cloud accounting platform for management of financial books, with end-to-end reporting for direct tax filing, bank and payment gateway integration, and permission-controlled access across web, mobile and desktop.",
        responsibilities: [
          "Delivered the product across web, mobile and desktop platforms.",
          "Reduced build creation time by 40% on Codeship by optimising the build script and code structure.",
          "Built Electron build automation for Windows and macOS with backward compatibility to older OS versions.",
        ],
        tech: ["angular", "sass", "ngrx", "electron", "codeship", "jira", "git"],
        metrics: [{ value: "40%", label: "Build time reduction", source: "Giddh" }],
      },
    ],
  },
  {
    id: "scalable",
    name: "Scalable Application Solution",
    location: "Indore",
    title: "Software Developer",
    start: "2017-11",
    end: "2018-10",
    source: "B",
    engagements: [
      {
        id: "servicexpert",
        name: "ServiceXpert",
        kind: "product",
        domain: "B2C Home Services",
        start: "2017-11",
        end: "2018-10",
        source: "A+B",
        summary:
          "A B2C mobile and web platform for household services — plumber, electrician, carpenter and painter — bookable in a single click.",
        responsibilities: [
          "UI creation, data binding, API binding and feature implementation.",
          "Built mobile application UI using XML, with API binding and feature implementation.",
          "Tested mobile and web applications against requirements.",
          "Followed the agile process for development.",
        ],
        tech: ["android", "xml", "sqlite", "sqlserver", "rest"],
      },
    ],
  },
];
