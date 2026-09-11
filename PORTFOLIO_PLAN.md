# Rohit Manora — Portfolio
## Resume Data Model, Design System & Build Specification

> **Status:** Design approved pending content decisions. No implementation code written yet.
> **Last updated:** 11 September 2026
> **Sources of truth:**
> - **Source A** — `RohitManora_10057560.pdf` (Publicis Sapient company profile, most recent)
> - **Source B** — `CV_Rohit_Manora (1).pdf` (personal CV, authoritative for pre-2021 history)
>
> Every fact in this document is traceable to one of those two PDFs. Nothing is invented.

---

## Table of Contents

**Part 0** — [Open Decisions](#part-0--open-decisions-blocking)
**Part 1** — [Resume Data Model](#part-1--resume-data-model)
**Part 2** — [Conflicts Between Sources](#part-2--conflicts-between-sources)
**Part 3** — [Design Thesis](#part-3--design-thesis)
**Part 4** — [UX / UI Specification (18 parts)](#part-4--ux--ui-specification)
**Part 5** — [SEO, Performance & Accessibility](#part-5--seo-performance--accessibility)
**Part 6** — [Build Sequence](#part-6--build-sequence)

---

# Part 0 — Decision Log

## RESOLVED — confirmed by Rohit, 11 September 2026

| ID | Decision | Confirmed value |
|----|----------|-----------------|
| **C1** | Nov 2017 – Oct 2018 employer | **Scalable Application Solution Pvt. Ltd, Indore** (Source B correct; Source A mislabelled it "Walkover") |
| **C3** | ADHA engagement dates | **June 2023 – March 2024** |
| **C5** | Carnival engagement status | **Ended August 2026** — past tense throughout; no "currently building" claim |
| **C7** | LinkedIn | **https://www.linkedin.com/in/rohit-manora/** |
| **C12** | Contact details | Publish **career.rohitmanora@gmail.com** and **+91 78981 50777**. This email supersedes the `rohitmanora19@` address in Source B — it is the professional address and is used site-wide. |

## RESOLVED — by inference from C1, pending objection

| ID | Decision | Applied value |
|----|----------|---------------|
| **C2** | ServiceXpert's employer | **Scalable Application Solution.** Follows C1 (same Nov 2017–Oct 2018 window). Corroborated: Source A's ServiceXpert bullets describe building "Mobile application UI using XML" — Android layout XML — which matches Source B's Scalable entry ("Android Application development, SQLite & Store procedure"). Consistent on both date and technology. |

## RESOLVED — C14 and C13, confirmed by Rohit

| ID | Decision | Confirmed value |
|----|----------|-----------------|
| **C14** | Aug 2021 – June 2023 at Publicis Sapient | **Verizon Wireless** — Frontend Developer. Stack: **Angular 8, TypeScript, HTML5, CSS3, RxJS, NgRx, Git.** *(Source: Rohit, 11 Sep 2026 — not documented in either PDF.)* |
| **C13** | Résumé asset | **`RohitManora_10057560.pdf`** → published at `public/resume/Rohit-Manora-CV.pdf` |

### Consequences of C14

1. **The Publicis Sapient tenure is now fully covered** — Verizon (Aug 2021–Jun 2023) → ADHA (Jun 2023–Mar 2024) → Carnival (Mar 2024–Aug 2026). No gap.
2. **A third domain enters the profile.** Source A states the domains as *Financial Services and E-commerce*. Verizon Wireless adds **Telecommunications**, which is user-supplied rather than PDF-sourced. The About ledger will read `Financial Services · E-commerce · Telecommunications`, and this line is tagged in `data/profile.ts` as user-sourced.
3. **Angular moves up the timeline.** It was previously the oldest item in the stack (Walkover, 2018–2020); it is now also 2021–2023 work at Publicis Sapient. It remains classified `historical` relative to the current React/Next stack, but the tooltip evidence now reads `Used on: Giddh, Verizon Wireless`.
4. **Verizon appears in the timeline, not the Projects grid.** Only the client, role, dates and stack are known — no responsibilities or product description were supplied. A tech-stack-only entry is entirely normal in a career timeline; a near-empty card sitting beside the richly-documented Carnival and StreamAnalytix cards would look like an omission. **Upgrade path:** supply 2–3 lines on what was built and it gets a full project card.

## STILL OPEN — non-blocking

| ID | Question | Handling |
|----|----------|----------|
| **C10b** | Biddrip's employer — unstated in both sources | Card omitted unless attribution is confirmed |

## Non-blocking defaults applied

| ID | Issue | Applied default |
|----|-------|-----------------|
| C4 | ADHA block in Source A opens with Carnival text (copy-paste error) | Erroneous sentence **dropped**; real ADHA bullets retained |
| C6 | Impetus start: Dec 2020 (A) vs Jan 2021 (B) | **Dec 2020**, rendered "Impetus Technologies" |
| C8 | Degree specialisation varies | **Computer Science & Engineering** (Source A structured field) |
| C9 | Header "Senior Experience Engineer" vs block "Engineer" | Current title = **Senior Experience Engineer**; engagements carry no separate title |
| C10 | Biddrip mislabelled "Professional Home Service" | Relabelled **B2B Bidding & Quoting Platform** |
| C11 | Angular 9 (A) vs Angular 8+ (B) | Rendered **Angular 8+** |

---

# Part 1 — Resume Data Model

## 1.1 Personal

| Field | Value | Source |
|-------|-------|--------|
| Name | Rohit Manora | A + B |
| Current title | Senior Experience Engineer | A |
| Current employer | Publicis Sapient | A |
| Base | Gurgaon, India | A |
| At Publicis Sapient since | August 2021 | A |
| Email | career.rohitmanora@gmail.com | Rohit (supersedes `rohitmanora19@` in Source B) |
| Phone | +91 78981 50777 | B — **approved for publication** |
| LinkedIn | https://www.linkedin.com/in/rohit-manora/ | A — confirmed |
| Languages | English | A |

## 1.2 Professional Summary — facts available

All drawn from Source A, to be rewritten for the web without altering meaning:

- Full software development lifecycle: solution design, architecture, development, integration, implementation, testing, application maintenance
- Scalable, data-driven, object-oriented, microservice-based and service-oriented enterprise applications
- Cross-functional stakeholders; distributed onshore and offshore teams
- Delivery, process optimisation, technical problem-solving, building high-performing engineering teams
- Domains: **Financial Services** and **E-commerce** (Source A) · **Telecommunications** (Verizon, user-supplied)
- Recent focus: frontend engineering and modern web application development
- Key role in **AEM-based digital transformation initiatives**
- Maintainable frontend architectures, enterprise content management integration, application performance optimisation, personalised customer experiences across web and mobile

## 1.3 Skills — consolidated

| Category | Technologies | Source |
|----------|-------------|--------|
| **Frontend** | ReactJS, NextJS, JavaScript, TypeScript, HTML5, CSS3, SASS/SCSS, Redux, TailwindCSS, Angular 8+, RxJS, NgRx, Ngx Bootstrap, XML, JSON | A + B |
| **Architecture** | Microfrontend (MFE) Architecture, Microservices, Service-oriented architecture | A |
| **Enterprise / Content** | Adobe Experience Manager (traditional, headless, Edge Delivery Services), AEM Universal Editor, GraphQL, REST APIs, Storybook, i18n | A |
| **Backend** | NodeJS *(listed "Basic" in B)*, Java 8 | A + B |
| **Databases** | MySQL, SQLite, SQL Server 2012, PostgreSQL | B |
| **Cloud / DevOps** | AWS, Azure (log monitoring), Docker, CI/CD, Jenkins, Git, GitLab, BitBucket, GitHub, Codeship | A + B |
| **Build / Tools** | Webpack, Storybook, Electron, Postman, JIRA, Slack | A + B |
| **Platforms** | Android | B |
| **IDEs** | VS Code, WebStorm, IntelliJ IDEA, Android Studio | B |
| **Concepts** | Data Structures, OOP, Algorithms, Scrum / Agile | A + B |

> **Rule:** Node.js is presented at a "working knowledge" tier, never level with React/Next. Source B explicitly qualifies it as *Basic*.

## 1.4 Career Timeline

```
Nov 2017 - Oct 2018   Scalable Application Solution Pvt. Ltd, Indore   [B] CONFIRMED
                      Software Developer
                      Product: ServiceXpert
                      Android development, SQLite, stored procedures,
                      database creation on Windows Server 2012, full SDLC/Agile

Nov 2018 - Dec 2020   Walkover Web Solutions Pvt. Ltd, Indore          [B]
                      Front-End Developer
                      Product: Giddh
                      Angular 8, SCSS, NgRx, Ngx Bootstrap, JIRA, Codeship, Git
                      Electron build automation (Windows + macOS, backward compat)
                      METRIC: reduced build creation time by 40% on Codeship

Dec 2020 - Aug 2021   Impetus Technologies (India) Pvt. Ltd, Indore    [A + B]
                      Front-End Developer / UI Engineer
                      Product: StreamAnalytix
                      UI creation, data binding, API binding, feature implementation
                      Git branch management, code review, unit testing, CI/CD
                      Scrum/Agile; KT and task allocation for new joiners

Aug 2021 - Present    Publicis Sapient, Gurgaon                        [A]
                      Senior Experience Engineer
                      |
                      +-- Verizon Wireless               Aug 2021 - Jun 2023
                      |   Frontend Developer - Telecommunications
                      |   Angular 8, TypeScript, HTML5, CSS3, RxJS, NgRx, Git
                      |
                      +-- ADHA / ISKAN                   Jun 2023 - Mar 2024
                      |
                      +-- Carnival UK - Cunard & P&O     Mar 2024 - Aug 2026
                                                         (engagement ENDED)
```

## 1.5 Engagement Detail

### Carnival UK — Cunard & P&O Cruises
*Client engagement via Publicis Sapient · Travel E-commerce · Mar 2024 – Aug 2026 (ended)*

**Context (Source A):** Carnival UK Digital Transformation Project — modernising the Cunard and P&O Cruises digital platforms using modern web technologies to deliver a fast, scalable, personalised experience that drives direct cruise bookings.

**Architecture (Source A):**
- Microfrontend (MFE) architecture with independent, reusable modules: **Cruise, Basket, Checkout, Check-in, Personal, Product, Payments, Events**
- Shared UI components developed and maintained in **Storybook** for cross-brand reuse and consistency
- **Adobe Experience Manager** for enterprise content management across **traditional, headless and Edge Delivery Services** architectures
- **AEM Universal Editor** — inline content authoring within the preview experience
- Backend integration via **GraphQL and REST APIs**
- Dynamic **i18n labels** and **page-level configurations** by country, page and style ID

**Responsibilities (Source A):**
- Developed and maintained responsive UI components using ReactJS and Tailwind CSS
- Developed and consumed reusable Storybook UI components across microfrontends
- Worked on AEM integration, content management, i18n and page-level configurations
- Implemented features and supported the migration of the Cunard and P&O Cruises platforms across multiple MFEs
- Performed unit testing, code reviews, Git branch management, CI/CD and Jenkins activities

### ADHA / ISKAN
*Client engagement via Publicis Sapient · Government / Housing · June 2023 – March 2024*

**Context (Source A):** Abu Dhabi Housing Authority (ADHA) — a single-point solution providing housing that meets the needs and requirements of citizens of the Emirate of Abu Dhabi, accounting for preferences including location, design, size and cultural values. ADHA built and maintains a central citizen database keyed on Emirates ID. **ISKAN** is the mobile application through which citizens access services based on profile and eligibility — booking a plot, applying for loans such as land grant, house purchase, house-to-house exchange and land-to-land exchange — and booking plots and houses subject to availability.

**Responsibilities (Source A):**
- Designed, developed and implemented APIs to meet project requirements and business needs
- Monitored Azure logs across multiple environments and performed Root Cause Analysis (RCA)
- Identified, resolved and tracked critical and medium-level bugs through to deployment
- **METRIC: Achieved 85% test case coverage**

> **C4 note:** Source A's ADHA block opens with "Rohit's role was to Be Maintaining frontend part for both the brand Cunard and P&O Cruises" — a copy-paste error from the Carnival block. Dropped.

### StreamAnalytix
*Product at Impetus Technologies · Data & Analytics · Dec 2020 – Aug 2021*

**Context (A + B):** An end-to-end data processing platform for data ingestion, data analytics, machine learning, action triggers and data visualisation. Pulls data from source, translates and processes it, and writes to a target data source. Enables data-driven applications to be built visually. Self-service dataflow and streaming data analytics.

**Responsibilities (A + B):**
- Maintained the UI layer for StreamAnalytix data processing and visualisation
- UI creation, data binding, API binding, feature implementation
- Version control and Git branch management, code review
- Unit testing and CI/CD pipeline management
- Scrum / Agile process and teamwork
- Knowledge transfer to new joiners, task allocation, feedback management

**Link:** https://www.streamanalytix.com/

### Giddh
*Product at Walkover Web Solutions · FinTech / Accounting · Nov 2018 – Dec 2020*

**Context (Source B):** A ledger-based cloud accounting platform for accurate management of financial books. Generates end-to-end reports usable for filing taxes directly with tax authorities. Links with bank accounts and payment gateways for seamless transactions. Provides anywhere/anytime access with permission-control features. Delivered across web, mobile and desktop.

**Responsibilities (Source B):**
- Product development across web, mobile and desktop platforms
- **METRIC: reduced build creation time by 40%** on Codeship by optimising build script and code structure
- Electron build automation for Windows and macOS with backward compatibility to older OS versions
- Angular 8, SCSS, NgRx, Ngx Bootstrap, JIRA, Codeship, Git

**Link:** https://giddh.com/

### ServiceXpert
*Product at Scalable Application Solution · B2C Home Services · Nov 2017 – Oct 2018*

**Context (A + B):** A B2C mobile and web application platform for hassle-free household services — plumber, electrician, carpenter, painter — available in a single click at the customer's doorstep.

**Responsibilities (Source A):**
- UI creation, data binding, API binding, feature implementation
- Mobile application UI built with XML, API binding, feature implementation
- Testing mobile and web applications against requirements
- Agile development process

**Link:** https://play.google.com/store/apps/details?id=com.manora.admin.servicexpert&hl=en_IN

### Biddrip
*Product · B2B Bidding & Quoting · employer unstated in both sources*

**Context (Source B):** A web and mobile application for multipurpose businesses that regularly send bids, quotes or estimates by email. Helps small businesses and owner-operators save time: after an initial inspection the user selects a bid template, updates cost and time, and sends a professional bid by email. Once the completed-job queue is updated, the app sends reminder emails to the customer.

> **C10:** Source B labels this "Professional Home Service" — a stray copy from the ServiceXpert entry. Corrected. No employer is stated in either source; include only if you can confirm attribution.

## 1.6 Education

| Qualification | Specialisation | Institution | Years | Result |
|---------------|---------------|-------------|-------|--------|
| Bachelor of Engineering | Computer Science & Engineering | Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore — affiliated with RGPV University | 2012–2016 | 6.08 CGPA |
| Senior Secondary Certificate | — | Govt. High Secondary School, Babulda | 2010 | 79.6% |
| Higher Secondary Certificate | — | Govt. High Secondary School, Babulda | 2008 | 81.2% |

Extracurricular (Source B): sports club, volunteering; sports, beatboxing, dancing.

## 1.7 Training & Certifications

Verified against Source A. The document's own Training / Certificate split is preserved.

| Name | Type | Institute | Year |
|------|------|-----------|------|
| L1/L2 Gen AI Training | Training | Publicis Sapient | 2026 |
| AWS Certified Developer Associate | Course | **Udemy** | 2023 |
| ES6 JavaScript Complete Developer's Guide | Certificate | Udemy | 2022 |
| Introduction to UX Design for Accessibility and WCAG | Certificate | Udemy | 2024 |

> **Integrity note:** "AWS Certified Developer Associate" appears in Source A under *Training & Courses* with institute *Udemy*. It is a Udemy course, **not** an AWS-issued certification. The UI must always display the institute so this cannot be misread.

## 1.8 Achievements (Source B)

- Secured 1st position in 10th Board at town level
- Awarded a prize in 10th for 1st position at town level
- Secured 1st position in 12th Board at town level
- Secured 94 marks in Mathematics in 12th Board
- Rank 1745 in MPPET (Madhya Pradesh Pre-Engineering Test)
- AIR 6623 with score 432 in GATE (Graduate Aptitude Test in Engineering)

**Treatment:** a quiet mono ledger beside Education. Never a headline section — school ranks compete with an eight-year professional record rather than supporting it.

## 1.9 Links

| Link | URL | Publish? |
|------|-----|----------|
| LinkedIn | https://www.linkedin.com/in/rohit-manora/ | **Yes — confirmed** |
| LinkedIn (B, older) | https://www.linkedin.com/in/rohit-manora-054774b6/ | No |
| Email | career.rohitmanora@gmail.com | **Yes — confirmed** |
| Phone | +91 78981 50777 | **Yes — confirmed** (`tel:` link) |
| StreamAnalytix | https://www.streamanalytix.com/ | Yes, on project card |
| Giddh | https://giddh.com/ | Yes, on project card |
| ServiceXpert (Play Store) | https://play.google.com/store/apps/details?id=com.manora.admin.servicexpert&hl=en_IN | Yes, on project card |

**No GitHub, X/Twitter, personal site, or any other profile exists in either source. None will be created.**

## 1.10 Verified Metrics

These are the only numeric claims permitted on the site. Each must render with its source label.

| Value | Meaning | Source engagement |
|-------|---------|-------------------|
| 8+ | Years engineering (Nov 2017 → present) | Timeline |
| 8 | Microfrontend modules | Carnival UK |
| 85% | Test case coverage | ADHA |
| 2 | Brands delivered (Cunard, P&O) | Carnival UK |
| 40% | Build time reduction on Codeship | Giddh |
| 6.08 | CGPA | SGSITS |

---

# Part 2 — Conflicts Between Sources

| ID | Conflict | Source A | Source B | Resolution |
|----|----------|----------|----------|------------|
| C1 | Nov 2017–Oct 2018 employer | Walkover Web Solutions | Scalable Application Solution | **RESOLVED — Scalable** |
| C2 | ServiceXpert's employer | Walkover | Unattributed project | **RESOLVED — Scalable** (follows C1; Android/XML corroborates) |
| C3 | ADHA dates | Mar 2024–Aug 2026 (identical to Carnival) | n/a | **RESOLVED — Jun 2023–Mar 2024.** Opens C14. |
| C4 | ADHA responsibilities open with Carnival text | Copy-paste error | n/a | Erroneous line dropped |
| C5 | Carnival end date | "AUG26" | n/a | **RESOLVED — ended Aug 2026** |
| C6 | Impetus start | Dec 2020 | Jan 2021 | Dec 2020 (A is the employer record) |
| C7 | LinkedIn URL | `/in/rohit-manora/` | `/in/rohit-manora-054774b6/` | **RESOLVED — Source A** |
| C8 | Degree specialisation | Table: "Computer Science & Engineering"; prose: "computer engineering" | "Computer Science" | Computer Science & Engineering |
| C9 | Title at Publicis Sapient | Header "Senior Experience Engineer"; blocks "Engineer" | n/a | Senior Experience Engineer |
| C10 | Biddrip domain label | n/a | "Professional Home Service" (wrong) | B2B Bidding & Quoting |
| C14 | Aug 2021 – Jun 2023 at Publicis Sapient undocumented | Silent | Silent | **RESOLVED — Verizon Wireless** (user-supplied) |
| C11 | Angular version | Angular9 | Angular 8 and above | Angular 8+ |
| C12 | Contact details | Absent | Email + phone | **RESOLVED — publish both**, new career email |
| C13 | Résumé asset | n/a | n/a | **RESOLVED — `RohitManora_10057560.pdf`** |

---

# Part 3 — Design Thesis

Every generic developer portfolio makes the same argument: *look at the things I have used*. This one makes a different argument: **I design systems, and this site is one.**

Four governing rules:

| Rule | Consequence |
|------|-------------|
| **The artifacts are the portfolio** | The Carnival MFE explorer and the StreamAnalytix pipeline are the content, not decoration around it. Prose supports them. |
| **Density reads as senior** | Juniors pad with whitespace and hero animation. Seniors ship information architecture — mono metadata, hairline rules, numbered sections, precise dates. |
| **Every number is attributable** | No statistic appears without its source label. `85%` always carries `ADHA`. Unattributed metrics are what make portfolios read as inflated. |
| **Restraint is the accent** | One accent hue, four motion primitives, three type families. The discipline *is* the visual identity — not a gradient. |

### Rejected by design

Skill percentage bars · star ratings · years-of-experience per technology · "Hi, I'm Rohit 👋" · emoji · fake product screenshots · testimonial carousels · modal lightboxes · bloom post-processing · typewriter effects · particle cursors · "Let's grab a coffee".

---

# Part 4 — UX / UI Specification

## 1. Desktop Homepage Structure

**Grid:** 12 columns · `max-width: 1320px` content · 32px gutters · 80px page margin. Canvas layers escape to viewport edge.
**Rhythm:** 168px between sections.

```
+===================================================================+
| ~~~~~~~~~~ scroll progress (2px, accent)                          |
|  ROHIT MANORA          Home About Experience Projects   in   CV   |  fixed
+===================================================================+
|                                          .      .                 |
|  SENIOR EXPERIENCE ENGINEER          /---o---.--\   .             |
|  - PUBLICIS SAPIENT                 .  \  |  /  .    o            |  HERO
|                                      o---+---o  .                 |  100vh
|  ROHIT                              / .   |   \ .   .             |  3D bleeds
|  MANORA                            .     o     .  .               |  cols 5->edge
|                                                                   |
|  Building scalable digital experiences, modern                    |
|  frontend architectures and high-performance                      |
|  web applications.                                                |
|                                                                   |
|  [ View My Work ]   [ Let's Connect ]    v Resume                 |
|  -------------------------------------------                      |
|  8+ YEARS | PUBLICIS SAPIENT | REACT / NEXT.JS | AEM + MFE        |
|  | SCROLL                                                         |
+===================================================================+
| 01 - ABOUT                                                        |
|  +----------- 7 cols -----------+ +------ 5 cols ------+          |
|  | Lead paragraph, larger.      | | ROLE      Senior...|          |
|  | Two supporting paragraphs.   | | COMPANY   Publicis |  ledger  |
|  +------------------------------+ | DOMAINS   FS - Ecom|          |
|  +--------+--------+--------+-----+--------+                      |
|  |  8+    |   8    |  85%   |    2         |  stats               |
|  | YEARS  | MFE *  | COV *  |  BRANDS *    |  * = source label    |
|  +--------+--------+--------+--------------+                      |
+===================================================================+
| 02 - EXPERTISE          constellation graph (full 12 cols)        |
+===================================================================+
| 03 - EXPERIENCE   +- 3 cols sticky rail -+---- 9 cols cards ----+ |
|                   | 2026 (*)             | > PUBLICIS SAPIENT   | |
|                   |      |               | > IMPETUS            | |
|                   | 2021 ( )             | > WALKOVER           | |
|                   | 2017 ( )             | > SCALABLE           | |
+===================================================================+
| 04 - SELECTED WORK    asymmetric 7/5 - 5/7 - 6/6 card grid        |
+===================================================================+
| * 05 - ARCHITECTURE   Carnival MFE Explorer - full-bleed, 92vh    |
+===================================================================+
| 06 - DATA PLATFORM    StreamAnalytix pipeline - horizontal rail   |
+===================================================================+
| 07 - CAPABILITIES     3-col hairline matrix                       |
+===================================================================+
| 08 - EDUCATION & CREDENTIALS   7/5 split + 2x2 credential grid    |
+===================================================================+
| 09 - CONTACT   full-bleed, 3D returns dimmed, editorial link rows |
+===================================================================+
| Footer - identity - nav - colophon                          ^ top |
+===================================================================+
```

**Invariant section header pattern** (identical across all nine — this repetition is the primary "system" signal):

```
+ 03 - EXPERIENCE -------------------------------------------------
|
| Eight years across
| four engineering teams.                  <- display-l, max 2 lines
|
| A deck of one sentence, secondary colour, max 64ch.
```

## 2. Mobile Homepage Structure

Not "desktop, stacked". Three structural changes:

| Change | Rationale |
|--------|-----------|
| **3D → static SVG** | Hero canvas replaced by a pre-composed SVG lattice (~6KB) at 22% opacity. Zero WebGL on mobile. |
| **Graphs → lists** | Skill constellation becomes categorised chip groups; MFE explorer becomes a vertical layer stack. Forcing a 12-node graph into 375px yields an unreadable graph *and* an unreadable list. |
| **Horizontal rails → vertical** | StreamAnalytix pipeline rotates 90° and flows downward. |

```
+--------------------------+   Rhythm: 96px sections
| ~~~~ progress            |   Margin: 20px
| ROHIT MANORA        [=]  |   Type floor: 16px body
+--------------------------+
|   (static SVG lattice)   |
| SENIOR EXPERIENCE ENG.   |   mono, 11px
|                          |
| ROHIT                    |   clamp -> 3.25rem
| MANORA                   |
|                          |
| Building scalable        |
| digital experiences...   |
|                          |
| [  View My Work      ]   |   full-width, 52px tall
| [  Let's Connect     ]   |
|      v Resume            |
| ------------------------ |
| 8+ YRS - PUBLICIS SAPIENT|   wraps to 2 lines
+--------------------------+
  01 - ABOUT       single col, ledger below prose, stats 2x2
  02 - EXPERTISE   chip groups by category
  03 - EXPERIENCE  rail collapses to 2px at 16px indent,
                   first card pre-expanded
  04 - WORK        1 col, tilt disabled, tap-to-expand
  05 - ARCHITECTURE vertical layer stack -> bottom sheet
  06 - DATA        vertical pipeline, scroll-linked pulse
  07 - CAPABILITIES 2 col
  08 - CREDENTIALS 1 col
  09 - CONTACT     stacked link rows, 56px tall
  Footer - 3 stacked blocks
```

**Touch contract:** every target ≥ 48×48px · 8px minimum spacing · `overflow-x: clip` on `body` · **no hover-only affordances anywhere** — all expansion is tap-driven, all tooltips become persistent panels.

**Breakpoints:** `375 → 640 (sm) → 768 (md) → 1024 (lg) → 1280 (xl) → 1536 (2xl)`
**Verified at:** 320 / 375 / 425 / 768 / 1024 / 1280 / 1440 / 1920.

## 3. Navigation Design

Two states, one continuous morph (Framer Motion `layout`, 420ms):

```
STATE A - scrollY < 80            full-bleed, transparent, 88px
+---------------------------------------------------------------+
| ROHIT MANORA     Home About Experience Projects Skills Contact |
|                                          LinkedIn ^  [Resume]  |
+---------------------------------------------------------------+

STATE B - scrollY >= 80           centred pill, 720px, 56px, blur
              +----------------------------------------+
              | RM  Home About Exp Work Skills  in [CV]|
              |        \--####--/  active pill slides  |
              +----------------------------------------+
```

- **Surface:** `rgba(13,15,18,0.72)` + `backdrop-blur(20px)` + `1px solid rgba(255,255,255,0.08)` + `0 8px 32px rgba(0,0,0,0.4)`
- **Active indicator:** filled pill sliding via shared `layoutId`, driven by IntersectionObserver scroll-spy with `rootMargin: -45% 0px -55%` so the active item flips at the section midpoint, not its edge
- **Scroll progress:** 2px accent line pinned to viewport top, `scaleX` from `useScroll`
- **Logo:** `ROHIT MANORA` collapses to `RM` in state B — mono, 0.18em tracking
- **Résumé:** outlined button with download icon and `download` attribute; **renders only if the asset exists**
- **LinkedIn:** `target="_blank" rel="noopener noreferrer"`, `aria-label="LinkedIn profile (opens in a new tab)"`

**Mobile:** logo + hamburger → full-screen overlay, items stagger in at 32px display type with mono indices (`01 HOME`), Résumé/LinkedIn pinned bottom. Focus trapped, `Esc` closes, body scroll-locked, `aria-expanded` + `aria-controls` wired, focus returns to trigger on close.

**Accessibility:** `<nav aria-label="Primary">` · skip-to-content as first focusable · `aria-current="true"` on active · 2px accent focus ring at 2px offset · full keyboard operation.

## 4. Hero Design

**Argument to land in under two seconds:** *Senior engineer. Enterprise scale. Frontend architecture.*

```
cols 1-6: content (z-10)          cols 5-viewport: 3D canvas (z-0)
                                   masked by a left-weighted vignette

SENIOR EXPERIENCE ENGINEER - PUBLICIS SAPIENT   mono 11px - 0.18em - accent

ROHIT                                           display-xl
MANORA                                          clamp(3.25rem, 9vw, 7.5rem)
                                                tracking -0.04em - lh 0.90

Building scalable digital experiences, modern   body-l - 1.25rem
frontend architectures and high-performance     max 52ch - text-primary
web applications.

Frontend engineering across enterprise          body - secondary - max 60ch
financial services and e-commerce platforms.

[ View My Work ]   [ Let's Connect ]   v Resume   primary - ghost - text link

------------------------------------------------
8+ YEARS | PUBLICIS SAPIENT | REACT / NEXT.JS | AEM + MFE    mono 11px

|
|  SCROLL                                        bottom-left, animated line
v
```

**Legibility guarantee (non-negotiable):** `linear-gradient(105deg, bg 0%, bg 38%, transparent 72%)` sits between canvas and content. All hero text is measured against `#08090B`, never against the scene — **contrast is 17:1 regardless of what the 3D is doing**.

**Entrance choreography** — 940ms total, 60ms stagger, all `opacity + translateY(16px)`:
`eyebrow → MANORA line 1 → line 2 → deck → sub-deck → CTAs → credential rail`
Canvas fades 0→1 over 1200ms starting at +300ms, so the scene assembles behind text that is already readable. Canvas space reserved at mount — **zero CLS**.

**CTAs:**
- *View My Work* — solid accent, dark text, smooth-scroll to `#work`, 150ms scale-on-press
- *Let's Connect* — ghost, hairline border brightening on hover, scrolls to `#contact`
- *Résumé* — plain text link, downward arrow translating 2px on hover

## 5. 3D Hero Concept — "The Architecture Field"

**Not an abstract blob.** A literal three-tier frontend architecture rendered as a lattice — the same graph the Architecture Explorer expands later. Hero and explorer are **one system at two zoom levels**. That continuity is what separates purposeful 3D from decorative 3D.

```
   z = 0        EXPERIENCE LAYER    18 nodes, 8 primary (accent, r 0.09)
    o--o--o      ^ the 8 Carnival MFE modules, unlabelled but positioned
    | \ | / |
   z = -4       INTEGRATION LAYER   18 nodes (white 60%, r 0.06)
    O--O--O      ^ GraphQL / REST / AEM
    |  |  |
   z = -8       SERVICES LAYER      24 nodes (white 22%, r 0.04)
    .  .  .      ^ presence only, no edges among them
```

| Property | Specification |
|----------|---------------|
| Camera | `PerspectiveCamera` fov 42, position `[1.2, 0, 14]` |
| Layout | Deterministic — seeded PRNG, jittered from a loose grid. Identical every load. A *composition*, not noise. |
| Edges | ~72 segments, single `LineSegments`, additive blend, opacity 0.14 |
| Pulses | Max 3 concurrent. Sprite travels one edge over 1.8s, eased. Spawns every ~700ms, weighted toward Experience→Integration (the data-fetch direction). |
| Ambient | Group rotates ±1.5° on an 18s sine. Nodes breathe scale ±3%, phase-offset. |
| Mouse | Parallax on group rotation only — max ±3.5°, `lerp 0.04` damping. **Never moves the camera** (camera motion induces nausea). |
| Scroll | Group dollies `z -6` and fades to 0 across the first 100vh. **Canvas unmounts past the hero** — GPU fully released. |
| Draw calls | **3 total** — instanced icosahedra, one LineSegments, one instanced sprite buffer |
| Post-processing | **None.** No bloom — it is the largest GPU cost and the strongest "generated" tell. Glow via additive material + soft radial sprite. |
| DPR | `dpr={[1, 1.75]}` · `antialias: false` · `powerPreference: 'high-performance'` |
| Frameloop | `useFrame` early-returns when hero is out of viewport (IntersectionObserver) or tab is hidden |

**Degradation tiers:**

| Tier | Behaviour |
|------|-----------|
| Desktop ≥1024 | Full scene — 60 nodes, 3 planes, pulses, parallax |
| Tablet 768–1023 | 36 nodes, 2 planes, no pulses, no parallax |
| Mobile <768 | **No WebGL.** Static SVG lattice, ~6KB inline, 22% opacity |
| `prefers-reduced-motion` | Static SVG at every breakpoint — same composition, frozen |
| WebGL unavailable / context lost | Same static SVG fallback, silently |

Loaded via `next/dynamic({ ssr: false })` behind the tier check, so the three.js bundle (~160KB gz) **never reaches a mobile device**.

## 6. About Section

Two columns, 7/5. Prose left, structured ledger right — the ledger is the strongest "enterprise document" cue on the page.

```
+----------- 7 -----------------+  +----------- 5 --------------+
| Senior Experience Engineer at  |  | ROLE      Senior Experience|
| Publicis Sapient, working      |  |           Engineer         |
| across the full software       |  | --------------------------|
| development lifecycle -        |  | COMPANY   Publicis Sapient |
| solution design, architecture, |  | --------------------------|
| development, integration,      |  | BASE      Gurgaon, India   |
| testing and maintenance.       |  | --------------------------|
|                 ^ lead 1.25rem |  | SINCE     August 2021      |
|                                |  | --------------------------|
| P scalable, data-driven,       |  | DOMAINS   Financial Svcs - |
|   microservice-based and       |  |           E-commerce       |
|   service-oriented enterprise  |  | --------------------------|
|   applications...              |  | FOCUS     Frontend arch -  |
|                                |  |           AEM - MFE        |
| P cross-functional stakeholders|  | --------------------------|
|   distributed onshore/offshore |  | EDUCATION B.E. CS&E, SGSITS|
+--------------------------------+  +----------------------------+

+-----------+-----------+-----------+-----------+
|    8+     |     8     |    85%    |     2     |  display 3rem, tabular
|  YEARS    |  MFE      | TEST COV. |  BRANDS   |  mono label
|ENGINEERING|  MODULES  |           | DELIVERED |
| --------- | --------- | --------- | --------- |
| 2017-2026 | CARNIVAL  |   ADHA    | CUNARD-P&O|  <- source attribution
+-----------+-----------+-----------+-----------+
```

**The source line under each stat is the integrity mechanism.** A number with provenance reads as evidence; the same number without one reads as marketing.

**Voice:** third-person resume facts rendered as first-person-implied prose. No "passionate", no "I love clean code", no aspiration. Statements of what was built.

## 7. Skills Visualization

**Rejected:** force-directed graph (chaotic, unreadable, different every load — the opposite of "architect"). **Rejected:** percentage bars, star ratings, per-technology year counts — unsupported by the resumes and unmistakably junior.

**Chosen: a hand-authored constellation** — fixed coordinates, six clusters around a central spine. A *designed* diagram, stable across loads.

```
                +- FRONTEND -+         +- ARCHITECTURE -+
                o React  o Next        o Microfrontends
                o TS  o Tailwind       o Microservices
                 \   o Redux /          o SOA    /
                  \    |    /            \      /
+- TOOLING -+      \   |   /              \    /     +- ENTERPRISE -+
o Webpack ----------(*) EXPERIENCE ENGINEERING (*)--- o Adobe AEM
o Storybook         /   |   \              /    \      o GraphQL
o JIRA o Postman   /    |    \            /      \     o REST o i18n
                  /     |     \          /        \
        +- CLOUD & DEVOPS -+    +- BACKEND & DATA -+
        o AWS o Docker o CI/CD    o Node.js o Java 8
        o Jenkins o Git o GitLab  o MySQL o PostgreSQL
```

**Interaction:**
- **Hover / focus a node** → its edges light to 100%, other clusters drop to 20%, tooltip appears with the killer detail — **which projects used it**:
  - `STORYBOOK · Enterprise · Used on: Carnival UK`
  - `NGRX · Frontend · Used on: Giddh`
  Every linkage is resume-supported. This turns a skills list into evidence.
- **Hover a cluster label** → whole cluster lights, others dim
- **Reveal:** spine draws first, then clusters in sequence, then nodes pop at 30ms stagger. ~1.4s, then permanently static.
- **Current-stack emphasis:** technologies on the current engagement (React, Next.js, TypeScript, Tailwind, AEM, MFE, Storybook, GraphQL) at full opacity with an accent ring. Historical tech (Angular, Java, Android, Electron, Codeship) at 55% with a hairline ring. **Communicates trajectory without claiming a proficiency level.**

**Mobile (<768):** categorised chip groups, same accent/dim distinction, same project annotations in small mono.

**Technology:** inline SVG + Framer Motion. Not Three.js — text stays crisp, nodes are focusable `<g>` elements with `role="button"` and roving `tabindex`, GPU cost zero.

## 8. Experience Timeline

The company-vs-project confusion is solved **structurally**: engagements are nested inside employer cards. It is impossible to misread Carnival as an employer when it is visibly a child of Publicis Sapient.

```
+- 3 cols sticky -+  +------------- 9 cols cards ------------------+
|                 |  | +----------------------------------------+ |
|  2026 (*)====== |  | | PUBLICIS SAPIENT       Aug 2021-Present | | mono meta
|       ||        |  | | Senior Experience Engineer - Gurgaon    | | h3
|       ||  <-draws | | -------------------------------------- | |
|       ||   with  |  | | ENGAGEMENTS                            | | mono label
|  2024 (o)  scroll|  | |                                        | |
|       ||        |  | | v Carnival UK - Cunard & P&O           | | expanded
|       ||        |  | |   Mar 2024 - Aug 2026 - Travel E-comm  | |
|  2021 ( )       |  | |   Microfrontend platform modernisation | |
|       ||        |  | |   - Responsive UI - React + Tailwind   | |
|       ||        |  | |   - Storybook components across MFEs   | |
|  2018 ( )       |  | |   - AEM integration, i18n, page config | |
|       ||        |  | |   - Unit tests, reviews, CI/CD, Jenkins| |
|  2017 ( )       |  | |   [React][Tailwind][AEM][GraphQL][MFE] | |
|                 |  | |   -> Explore the architecture          | | links to S05
|                 |  | |                                        | |
|                 |  | | > ADHA / ISKAN     2021-2024 - Govt    | | collapsed
|                 |  | +----------------------------------------+ |
|                 |  | +- IMPETUS TECHNOLOGIES    2020 - 2021  -+ |
|                 |  | +- WALKOVER WEB SOLUTIONS  2018 - 2020  -+ |
|                 |  | +- SCALABLE APPLICATION    2017 - 2018  -+ |
+-----------------+  +--------------------------------------------+
```

- **The rail draws.** SVG line animating `stroke-dashoffset` bound to `useScroll` progress. Year markers fill with accent as the corresponding card enters view. Continuous, scrubbable, reversible — never a one-shot animation.
- **Sticky rail** stays pinned for the section's full height, giving persistent position within the career.
- **Expansion:** height animation, 320ms, ease-out-expo. Chevron rotates 90°. `aria-expanded` + `aria-controls`. Most recent engagement open by default.
- **Metric chips:** where a real number exists it renders as an accent-bordered chip inline with tech tags — `85% TEST COVERAGE` (ADHA), `-40% BUILD TIME` (Giddh). Only where the resume supports it.
- **Mobile:** rail collapses to a 2px line at 16px indent; year markers become inline labels; cards full-width; first card pre-expanded.

## 9. Project Cards

**Asymmetric grid** — equal cards imply equal importance, which is false. Carnival deserves more room than Biddrip.

```
+----------- 7 -----------------+ +--------- 5 ----------+
|  ### generative visual ###     | |  ### visual ###      |
|                                | |                      |
| CLIENT - TRAVEL E-COMM - 24-26 | | CLIENT - GOVT - 21-24|
| Carnival UK - Cunard & P&O     | | ADHA / ISKAN         |
| via Publicis Sapient           | | via Publicis Sapient |
| Microfrontend modernisation... | | Housing services...  |
| [React][Tailwind][AEM][MFE]+2  | | [APIs][Azure][RCA]   |
| -> Explore architecture        | | 85% COVERAGE         |
+--------------------------------+ +----------------------+
+--------- 5 ----------+ +----------- 7 -----------------+
| PRODUCT - DATA -20-21| | PRODUCT - FINTECH - 2018-2020 |
| StreamAnalytix       | | Giddh                          |
| -> Explore pipeline  | | -40% BUILD TIME                |
+----------------------+ +--------------------------------+
+----------- 6 ---------+ +----------- 6 ----------------+
| ServiceXpert          | | Biddrip                       |
+-----------------------+ +-------------------------------+
```

**Visual area — generative, never fake screenshots.** Each project gets a deterministic SVG motif derived from its actual domain:

| Project | Motif |
|---------|-------|
| Carnival | 8 abstract module blocks in a shifting mosaic — the MFE modules |
| ADHA | Isometric parcel grid — housing plots, no map data |
| StreamAnalytix | Parallel flowing stream lines at varying speeds |
| Giddh | Ledger rule lines with stacked value columns |
| ServiceXpert | Radial spokes from a centre — service dispatch |
| Biddrip | Nested bracket forms — quote structures |

Pure SVG/CSS. No raster assets, no invented UI, nothing mistakable for a real client screen.

**Card interaction:**
- Tilt **max 6°** (the conventional 15° reads as a template), `perspective: 1200px`, spring-damped, disabled on touch
- Radial accent glow at 8% following the pointer inside card bounds
- Border `rgba(255,255,255,0.08) → 0.18`, lift `translateY(-4px)`, 200ms
- Expand = **in-card accordion, not a modal.** Modals lose scroll position, trap focus badly, and are worse on mobile.
- Carnival and StreamAnalytix cards carry `→ Explore` links scroll-linking to their deep-dive sections. The card is the index; the section is the chapter.

**Taxonomy is explicit.** Every card leads with `TYPE · DOMAIN · YEARS` and names `via <employer>` for client work.

## 10. Microfrontend Architecture Visualization (Signature Section)

Full-bleed, 92vh, its own background treatment (`surface-1` with a faint grid) so it reads as a distinct environment.

```
          +- BRAND EXPERIENCE -----------------------------+
          |      [ ] Cunard           [ ] P&O Cruises      |
          +------------+-------------------+---------------+
                       |                   |
+- MICROFRONTENDS -----+-------------------+----------------+
|  <>Cruise  <>Basket  <>Checkout  <>Check-in                |
|  <>Personal <>Product <>Payments <>Events                  |
+---------------------------+--------------------------------+
+- SHARED UI ---------------+--------------------------------+
|  ===== Storybook Design System - cross-brand reuse =====   |  spanning bar
+---------------------------+--------------------------------+
+- CONTENT & CONFIG --------+--------------------------------+
|  (o) AEM - Traditional | Headless | Edge Delivery Services |
|  (o) Universal Editor  (o) i18n Labels   (o) Page Config   |
+---------------------------+--------------------------------+
+- INTEGRATION -------------+--------------------------------+
|         {} GraphQL                    {} REST APIs         |
+---------------------------+--------------------------------+
+- BACKEND SERVICES --------+---- (abstracted, 25% opacity) -+
```

**Interaction model:**
- **Click / focus any node** → connected edges light to 100%, unconnected graph dims to 18%, detail panel opens (right rail desktop, bottom sheet mobile)
- **Idle:** one pulse traverses a full path `Brand → MFE → Storybook → AEM → GraphQL` every ~6s, path randomised. Stops on interaction and under reduced motion.
- **Keyboard:** roving `tabindex`, arrows move within a layer, `Tab` between layers, `Enter` opens detail. Every node is a focusable element with `role="button"` and `aria-describedby` pointing at the panel.
- **A parallel `<table>`** of the same architecture exists in the DOM, visually hidden — screen readers get the full structure without navigating a graph.

**INTEGRITY CONSTRAINT (designed in explicitly).** The resume names the eight modules but describes **none of them individually**. The detail panel must never say *"Basket handles cart state and promotions"* — that would be fabrication.

Instead the panel shows the module name, its layer, and the **architecture facts that genuinely apply across all modules**:

```
<> BASKET
   Layer       Microfrontend
   UI          React - Tailwind CSS
   Components  Consumed from the shared Storybook library
   Content     Authored in AEM - Universal Editor inline authoring
   Data        GraphQL - REST APIs
   Config      i18n labels - page-level config by country, page, style ID
   Brands      Cunard - P&O Cruises
```

Identical panel shape for every module, populated from a single architecture-facts object. Impressive, interactive, and **entirely true**.

**Mobile:** layers become a vertical accordion stack; tapping a module opens a bottom sheet with the same panel.

## 11. StreamAnalytix Data-Flow Visualization

Horizontal rail on desktop, vertical on mobile. Stage names come **verbatim** from the resume — *data ingestion, data analytics, machine learning, action triggers, data visualization* — plus the stated source→transform→target framing.

```
 SOURCE   INGESTION  PROCESSING  ANALYTICS   MACHINE    ACTION      DATA         TARGET
   [ ] --> [ ] -----> [ ] -----> [ ] -----> LEARNING -> TRIGGERS -> VISUALISATION -> [ ]
                                              [ ]        [ ]        [#][#][#]
   .. pulses travel the rail, 3 concurrent ..                       ^ ROHIT'S LAYER
                                                            accent - full opacity
                                                          all other stages at 45%

+---------------------------------------------------------------------------------+
| CONTRIBUTION - UI Engineer, Impetus Technologies                                |
| UI creation - data binding - API binding - feature implementation               |
| Git branch management - code review - unit testing - CI/CD pipeline             |
| Scrum / Agile - knowledge transfer and task allocation for new joiners          |
+---------------------------------------------------------------------------------+
```

**The critical design decision:** the pipeline describes the **product**; Rohit built the **UI layer**. So the visualisation renders the full platform at 45% opacity and lights only the Data Visualization stage in accent, labelled `ROHIT'S LAYER`, with the contribution strip directly beneath.

This is honest *and* more persuasive than claiming the whole pipeline — it demonstrates understanding of where his work sits inside a larger system, which is precisely what distinguishes a senior engineer from a mid-level one.

- Pulses scroll-linked on mobile (scrub), time-based on desktop (loop, paused off-screen)
- Hover/focus a stage → stage name + the resume's one-line description
- Reduced motion → pulses become static dots on the rail
- Pure SVG + Framer Motion

## 12. Certifications & Education

Combined section, 7/5 — four credentials alone do not earn a full section.

```
+------- 7 - EDUCATION --------+  +------- 5 - academic record -----+
| BACHELOR OF ENGINEERING      |  | 10TH BOARD   1st, town level    |
| Computer Science & Engineering| | 12TH BOARD   1st, town level    |
| Shri Govindram Seksaria      |  | MATHEMATICS  94 / 100           |
| Institute of Technology      |  | MPPET        Rank 1745          |
| and Science, Indore          |  | GATE         AIR 6623 - 432     |
| Affiliated with RGPV         |  |                                 |
| 2012 - 2016 - 6.08 CGPA      |  | ^ small mono ledger, secondary  |
+------------------------------+  +---------------------------------+

  CREDENTIALS
+--------------------------+--------------------------+
| *                   2026 | ~                   2023 |
| L1/L2 Gen AI Training    | AWS Certified Developer  |
| Publicis Sapient         | Associate                |
| TRAINING                 | Udemy                    |
|                          | COURSE                   |
+--------------------------+--------------------------+
| <>                  2022 | (o)                 2024 |
| ES6 JavaScript Complete  | Introduction to UX Design|
| Developer's Guide        | for Accessibility & WCAG |
| Udemy - CERTIFICATE      | Udemy - CERTIFICATE      |
+--------------------------+--------------------------+
```

- Hairline cells, `surface-1` fill, border brightens + Lucide icon takes accent on hover. **No AWS or Udemy logos.**
- The `TRAINING` / `COURSE` / `CERTIFICATE` tag is deliberate — it preserves the resume's own distinction and prevents the AWS Udemy *course* being read as an AWS-issued *certification*. Institute always shown.
- The academic ledger is quiet, mono, secondary-coloured, sized so it never competes with the professional record.

## 13. Contact Section

Full-bleed. The Architecture Field returns at 35% opacity and half speed, bookending the page — you arrive through the system and leave through it.

```
                        + 09 - CONTACT +


            Let's build something
            exceptional.                     display-xl, centred-left

            Open to conversations about senior frontend and
            experience engineering roles, frontend architecture,
            and enterprise platform work.                   max 56ch


 ------------------------------------------------------------------
  EMAIL        career.rohitmanora@gmail.com                       ->
 ------------------------------------------------------------------
  PHONE        +91 78981 50777                                    ->
 ------------------------------------------------------------------
  LINKEDIN     linkedin.com/in/rohit-manora                        ^
 ------------------------------------------------------------------

  BASED IN GURGAON, INDIA - AVAILABLE FOR REMOTE & HYBRID       mono
```

**Editorial link rows, not buttons.** Full-width rows with hairline rules. On hover: row background lifts to `surface-1`, label shifts to accent, arrow translates 6px, rule brightens. Reads considerably more premium than a pair of pill buttons, and each row is a large comfortable target — 72px desktop, 56px mobile.

**No contact form.** A form implies a support queue and adds a backend, spam surface and failure mode. A `mailto:` is what a senior engineer actually wants.

**No fabricated links.** Email, phone and LinkedIn only — each confirmed by Rohit. No GitHub, no X, no other profile.

## 14. Footer

```
--------------------------------------------------------------------
 ROHIT MANORA              HOME          BUILT WITH
 Senior Experience         ABOUT         Next.js - React Three Fiber
 Engineer                  EXPERIENCE    Tailwind CSS - Framer Motion
                           WORK
 career.rohitmanora@gmail.com   ARCHITECTURE  TYPE
 LinkedIn ^                CONTACT       Instrument Sans - JetBrains Mono
--------------------------------------------------------------------
 (c) 2026 ROHIT MANORA                                  BACK TO TOP ^
```

Three zones, 4/4/4. Small mono type, secondary colour. **The colophon is a deliberate senior signal** — naming your stack and typefaces is something engineers and designers do and template-users do not. `BACK TO TOP` smooth-scrolls and returns focus to the skip link.

## 15. Animation Strategy

**Four primitives. Nothing else exists.** A constrained motion vocabulary is what makes a site feel authored rather than assembled.

| Primitive | Transform | Duration | Ease | Applied to |
|-----------|-----------|----------|------|------------|
| `reveal` | `opacity 0→1`, `translateY 16px→0` | 600ms | expo-out | Every section entrance |
| `lift` | `translateY 0→-4px`, border `0.08→0.18` | 200ms | standard | Cards, rows, tiles |
| `draw` | `stroke-dashoffset 1→0` | 1200ms / scrubbed | linear | Timeline rail, graph edges |
| `pulse` | Sprite position along a path | 1800ms | in-out-sine | 3D edges, MFE graph, data flow |

**Easing tokens**

```
--ease-standard   cubic-bezier(0.40, 0.00, 0.20, 1)   hovers, toggles
--ease-expo-out   cubic-bezier(0.16, 1.00, 0.30, 1)   entrances
--ease-spring     stiffness 260, damping 30           tilt, nav morph
```

**Duration tokens:** `micro 150ms` · `fast 200ms` · `standard 320ms` · `reveal 600ms` · `draw 1200ms` · **stagger 60ms**

**Rules**
- Reveals fire **once** (`viewport={{ once: true }}`) — re-animating on scroll-back is the most common portfolio irritation
- Trigger at `-12%` viewport margin so content is settled when it enters the reading zone
- **Only `transform` and `opacity` animate.** Sole exception: the nav pill morph via Framer FLIP `layout` — still GPU-composited
- `will-change` applied on interaction start, removed on end, never left standing
- **Nothing loops in the reading path.** Loops confined to the 3D hero (unmounts on scroll), the MFE idle pulse (stops on interaction) and the data-flow rail (pauses off-screen)
- Total concurrent animations never exceed ~8

**Reduced-motion contract** — graceful, not amputated:

| Motion | Under `prefers-reduced-motion` |
|--------|-------------------------------|
| Reveals | Instant, full opacity — content never hidden |
| 3D hero | Static SVG lattice |
| Rail draw / pulses | Rendered in final state, static |
| Parallax, tilt | Removed entirely |
| Smooth scroll | `scroll-behavior: auto` |
| Hover colour / border | **Retained** — aids comprehension, causes no vestibular issue |

Implemented as a `useReducedMotion()` hook feeding a `MotionConfig` provider, plus a CSS `@media` guard as a fallback.

## 16. Colour System

```
BACKGROUNDS                                          contrast vs bg
--bg              #08090B    page ground              -
--surface-1       #0D0F12    cards, panels, sections  -
--surface-2       #14171B    raised, hover, tooltips  -
--surface-3       #1B1F24    active, pressed          -

BORDERS
--line-subtle     rgba(255,255,255,0.06)   default hairlines
--line            rgba(255,255,255,0.10)   card borders
--line-strong     rgba(255,255,255,0.18)   hover, active

TEXT
--text-primary    #ECEFF3    headings, key copy       16.4:1  AAA
--text-secondary  #9AA1AA    body, decks               7.3:1  AAA
--text-tertiary   #767D85    mono meta, captions       4.6:1  AA  (>=14px only)
--text-inverse    #08090B    on accent fills           -

ACCENT - one hue, used sparingly
--accent          #5B9DFF    signal azure              8.1:1  AAA
--accent-hover    #7CB2FF
--accent-muted    rgba(91,157,255,0.14)   fills, rings
--accent-glow     rgba(91,157,255,0.10)   blur 80px, depth only

DATA - restricted to the visualisation layer
--data            #56E0C8    pulses, flow, 3D edges
--data-muted      rgba(86,224,200,0.20)
```

**Governing rule: azure is UI, teal is data in motion.** Accent azure appears in chrome, links, focus rings and active states. Teal appears **only** inside the 3D scene, the MFE explorer and the data-flow rail. Two hues with a hard semantic boundary reads as considered; two hues used interchangeably reads as decoration.

**Accent budget:** no single viewport carries more than ~4% accent coverage. Restraint is what makes the accent register.

**Depth without shadow spam.** Elevation is expressed through *border brightness + surface step*, not drop shadows. Shadows appear in exactly two places: the floating nav pill and the mobile bottom sheet.

**Contrast:** all text ≥ 4.5:1, large text ≥ 3:1, interactive borders ≥ 3:1 against their surface — verified with a checker at build, not eyeballed. Focus rings are 2px `--accent` at 2px offset, visible on every surface in the system.

> **Alternate to consider:** swapping azure for a warm sand `#C9B18C` would read more editorial and considerably less "SaaS dashboard", since dark + azure is a well-trodden lane. Azure is the safer, more conventionally trustworthy choice and the current recommendation.

## 17. Typography System

| Role | Family | Rationale |
|------|--------|-----------|
| **Display** | Instrument Sans (variable, 400–700) | Geometric grotesk with real character at 7rem. Avoids the Inter-as-display default that marks templates. |
| **Body / UI** | Inter (variable) | Unmatched screen legibility at 14–18px; disappears, as body type should. |
| **Mono** | JetBrains Mono (400, 500) | Every label, date, tag, stat caption and metadata string. **The mono signals "engineer"** more than any other single choice. |

All three self-hosted via `next/font/google` — subset to `latin`, `display: swap`, preloaded, served same-origin. No external request, no FOUT, no CLS. Combined ~78KB woff2.

**Scale** — fluid, `clamp()`-driven, 1.25 ratio at base:

```
display-xl   clamp(3.25rem, 9vw, 7.5rem)    -0.04em   0.90   Hero name
display-l    clamp(2.5rem, 5.5vw, 4rem)     -0.03em   1.00   Section headings
display-m    clamp(1.75rem, 3vw, 2.5rem)    -0.02em   1.10   Contact line
h3           1.5rem                         -0.01em   1.25   Card titles
h4           1.125rem                         0       1.35   Sub-headings
body-l       1.125rem                         0       1.60   Hero deck, lead para
body         1rem                              0      1.65   Default
body-s       0.875rem                          0      1.55   Card copy
mono-label   0.6875rem                       0.18em   1.00   UPPERCASE eyebrows
mono-meta    0.8125rem                       0.02em   1.45   Dates, tags, captions
mono-stat    0.6875rem                       0.14em   1.00   UPPERCASE stat sources
```

**Rules**
- Measure capped at **68ch** body, **56ch** decks
- Negative tracking scales with size — hero at `-0.04em`, body at `0`. Uniform tracking across a scale is the most common amateur type tell.
- **Tabular figures** (`font-variant-numeric: tabular-nums`) on all stats, dates and the timeline rail so numbers align in columns
- Headings `text-wrap: balance`; decks `text-wrap: pretty`
- Hierarchy: exactly one `<h1>` (hero) · one `<h2>` per section · `<h3>` for cards · never skipped, never chosen for size. Visual scale and semantic level decoupled through utility classes.
- Mobile floor: 16px body, 11px mono

## 18. Component Architecture

**Server Components by default.** Only genuinely interactive leaves are `'use client'` — the entire content spine ships as zero-JS HTML. This is the decision that most directly demonstrates the seniority the site claims.

```
app/
  layout.tsx              RSC - fonts, metadata, JSON-LD, skip link
  page.tsx                RSC - composes all sections
  globals.css             tokens, resets, motion guards
  sitemap.ts
  robots.ts
  opengraph-image.tsx     generated, no static asset

components/
  3d/                                        all 'use client', lazy
    SceneCanvas.tsx        Canvas wrapper - DPR clamp - tier gate - IO pause
    ArchitectureField.tsx  the hero lattice
    Nodes.tsx              instanced icosahedra
    Edges.tsx              single LineSegments
    Pulses.tsx             instanced sprites
    LatticeFallback.tsx    RSC - static SVG for mobile + reduced motion

  ui/                                        RSC unless noted
    Section.tsx            <section id> + rhythm + scroll-margin
    SectionHeading.tsx     invariant "01 - LABEL / display / deck" pattern
    Reveal.tsx             'use client' - the single reveal primitive
    GlassCard.tsx          surface + hairline + optional lift
    TiltCard.tsx           'use client' - 6deg pointer tilt, touch-disabled
    Button.tsx             primary | ghost | link variants
    Tag.tsx
    MetricChip.tsx
    StatTile.tsx
    Ledger.tsx
    ExternalLink.tsx       enforces rel="noopener noreferrer" + a11y label

  viz/                                       'use client' - SVG, no WebGL
    SkillConstellation.tsx  + SkillNode / SkillCluster / SkillTooltip
    ArchitectureExplorer.tsx + ArchLayer / ArchNode / ArchDetailPanel
    DataFlow.tsx            + FlowStage / FlowPulse
    SkillChipGroups.tsx     mobile alternative

  sections/                                  RSC unless marked
    Navbar.tsx             'use client' - scroll state, spy, mobile overlay
    Hero.tsx               RSC shell + client 3D slot
    About.tsx
    ExperienceTimeline.tsx 'use client' - scroll-linked rail
    ExperienceCard.tsx     'use client' - accordion
    Projects.tsx           RSC grid
    ProjectCard.tsx        'use client' - tilt + expand
    ProjectVisual.tsx      RSC - generative SVG by project id
    Capabilities.tsx
    Education.tsx
    Certifications.tsx
    Contact.tsx
    Footer.tsx

data/                     pure TS, no JSX, exported types
  profile.ts
  experience.ts
  projects.ts
  skills.ts
  architecture.ts         Carnival MFE graph + shared facts object
  dataflow.ts             StreamAnalytix stages
  education.ts
  certifications.ts
  achievements.ts
  capabilities.ts
  navigation.ts
  index.ts

lib/
  seo.ts                  metadata builder
  jsonld.ts               Person + WebSite + ProfilePage schemas
  hooks/                  useReducedMotion - useMediaQuery - useDeviceTier
                          useScrollSpy - useMouseParallax - useInView
  utils/                  cn.ts - seededRandom.ts - formatDate.ts

public/
  resume/                 Rohit-Manora-CV.pdf
  favicon/
```

**Representative type contracts**

```ts
type Employer = {
  id: string
  name: string
  location: string
  title: string
  start: string          // ISO - formatted at render
  end: string | null     // null = present
  engagements: Engagement[]
}

type Engagement = {
  id: string
  name: string
  clientOrProduct: 'client' | 'product'    // the taxonomy, enforced
  domain: string
  start: string
  end: string | null
  summary: string
  responsibilities: string[]
  tech: TechId[]
  metrics?: { value: string; label: string; source: string }[]
  deepDive?: 'architecture' | 'dataflow'   // drives the "-> Explore" link
}

type Tech = {
  id: TechId
  label: string
  category: SkillCategory
  status: 'current' | 'historical'   // drives accent vs hairline
  usedOn: EngagementId[]             // powers the tooltip evidence
}
```

**Decisions worth stating**
- **No state library.** Component-local state plus the URL hash covers everything. Redux/Zustand here would be architecture theatre.
- **No CSS-in-JS.** Tailwind v4 with colour and type tokens defined as CSS custom properties in `@theme` — design tokens live in one file, readable by both CSS and TS.
- **`strict: true`** plus `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`. `TechId` and `EngagementId` are string-literal unions derived from the data, so a typo in a `usedOn` array is a compile error, not a silent empty tooltip.
- **Three lazy boundaries only:** the 3D scene, the architecture explorer, the data-flow rail. Over-splitting costs more in waterfalls than it saves.
- **The `viz/` layer is deliberately SVG, not WebGL** — crisp text, real focusable DOM nodes, keyboard navigable, zero GPU cost, and it works in the 3D fallback path for free.

---

# Part 5 — SEO, Performance & Accessibility

## 5.1 Stack

| Concern | Choice |
|---------|--------|
| Framework | Next.js 15, App Router |
| Language | TypeScript, `strict: true` |
| Styling | Tailwind CSS v4 (`@theme` tokens) |
| 3D | React Three Fiber + drei + three |
| Motion | Framer Motion |
| Icons | Lucide React |
| GSAP | **Not used** — Framer Motion covers every requirement here |

## 5.2 SEO

**Implemented in full:**
- `title` + `description` via the App Router Metadata API
- `canonical` URL configuration
- Open Graph + Twitter card metadata, with a generated `opengraph-image`
- `robots.ts` and `sitemap.ts` — generated, not static
- JSON-LD: `Person`, `WebSite`, `ProfilePage`, plus `alumniOf`, `worksFor`, `knowsAbout`
- Semantic HTML, single `h1`, unbroken heading hierarchy
- Descriptive link text, alt text on every non-decorative graphic
- `lang="en"`, `theme-color`, favicon set

**Honest expectation setting.** Technical SEO can be delivered completely. *Ranking* for generic high-competition terms — "Senior Frontend Engineer", "React Developer India" — is not achievable by a single portfolio page, and keyword-stuffing toward them would degrade the writing without moving the ranking. The site is optimised for **name and name+role queries**, which are genuinely winnable:

- Rohit Manora
- Rohit Manora Senior Experience Engineer
- Rohit Manora React / Next.js / Frontend Developer
- Rohit Manora Publicis Sapient

## 5.3 Performance targets

| Metric | Target |
|--------|--------|
| LCP | < 1.8s — hero text is server-rendered; 3D never blocks it |
| CLS | 0 — canvas space reserved, fonts preloaded with `display: swap` |
| INP | < 200ms — no blocking work on the main thread during interaction |
| Lighthouse Performance | ≥ 95 desktop, ≥ 90 mobile |
| Lighthouse A11y / Best Practices / SEO | 100 |
| Initial JS (mobile) | ~229KB gz measured. three.js (840KB raw) IS excluded by the tier gate. The original <120KB target was not achievable alongside Framer Motion — `LazyMotion`/`domMax` measured *worse* (234KB) and `domAnimation` saved only 9KB while costing the nav's shared-layout indicator, so plain Framer Motion was kept. |

**Tactics:** RSC-first · three lazy boundaries · no raster images anywhere (all visuals are SVG) · self-hosted subset fonts · GPU released past the hero · `content-visibility: auto` on below-fold sections.

## 5.4 Accessibility

- Semantic landmarks: `header` / `nav` / `main` / `section` / `footer`
- Skip-to-content link as the first focusable element
- Full keyboard operation, including both graph visualisations (roving tabindex)
- Visible 2px focus ring at 2px offset on every interactive element
- `aria-expanded` / `aria-controls` on all accordions; `aria-current` on active nav
- Focus trap + `Esc` + focus restoration on the mobile menu and bottom sheet
- All colour contrast ≥ WCAG AA, most text AAA
- `prefers-reduced-motion` honoured throughout per the contract in §15
- Graph visualisations mirrored by a visually-hidden `<table>` for screen readers
- No information conveyed by colour alone

## 5.5 Deployment

- `README.md` with setup, scripts, data-editing guide and deployment steps
- `.gitignore` covering `node_modules`, `.next`, `.env*`, `.DS_Store`
- `.env.example` only if an env var proves necessary (currently none anticipated)
- **No secrets in source**
- Vercel-ready: zero config beyond the repo

---

# Part 6 — Build Sequence

Incremental, with a check after each stage.

| # | Stage | Deliverable |
|---|-------|-------------|
| 1 | Scaffold | Next.js 15 + TS strict + Tailwind v4, tokens wired, fonts loaded |
| 2 | Data layer | All `data/*.ts` with full types — **content frozen once C1–C13 are answered** |
| 3 | UI primitives | `Section`, `SectionHeading`, `Reveal`, `GlassCard`, `Button`, `Tag`, `StatTile`, `Ledger` |
| 4 | Nav + Hero (2D) | Full layout and copy, no 3D yet — verifies the page reads without WebGL |
| 5 | 3D scene | `ArchitectureField` + tier gate + SVG fallback |
| 6 | About, Capabilities, Education, Certifications | Static sections |
| 7 | Experience timeline | Scroll-linked rail, nested engagement accordions |
| 8 | Projects | Asymmetric grid, generative visuals, tilt + expand |
| 9 | Architecture Explorer | The signature section |
| 10 | DataFlow | StreamAnalytix pipeline |
| 11 | Contact + Footer | Editorial link rows, colophon |
| 12 | SEO + metadata | Metadata API, JSON-LD, sitemap, robots, OG image |
| 13 | QA pass | `tsc --noEmit`, responsive sweep 320→1920, keyboard walk, reduced-motion, contrast audit, Lighthouse |
| 14 | Production build | `next build`, fix warnings, verify no console errors |
| 15 | Repo prep | README, .gitignore, commit, Vercel-ready |

## Final Quality Gate

- [x] Both resumes analysed — no invented content
- [x] All 14 conflicts resolved or explicitly flagged
- [x] C14 gap handled without invention
- [x] Phone renders as a working `tel:` link
- [x] Every metric carries a source attribution
- [x] Company / client / product / project taxonomy correct throughout
- [x] No fabricated module descriptions in the Architecture Explorer
- [x] AWS course not presented as an AWS certification
- [~] Responsive at 320 / 375 / 425 / 768 / 1024 / 1280 / 1440 / 1920 — built responsive and statically verified (no fixed widths, `overflow-x: clip`); **not visually confirmed in a browser**
- [x] No horizontal overflow at any width
- [x] 3D works; mobile fallback works; reduced-motion works
- [x] Full keyboard navigation including both graphs
- [x] LinkedIn opens in a new tab with `rel="noopener noreferrer"`
- [x] Email `mailto:` works
- [x] Résumé download works (`public/resume/Rohit-Manora-CV.pdf`)
- [x] Metadata, sitemap, robots, JSON-LD present and valid
- [~] Contrast audit — token ratios computed at design time; **not re-verified with a live checker**
- [~] Lighthouse — **not run**; bundle measured manually at 229KB gz initial
- [x] `next build` succeeds
- [x] Zero TypeScript errors
- [x] Zero console errors
- [x] No unnecessary dependencies

---

*This document is the specification of record. Any change to the resume data model must be reflected in `data/*.ts` and re-verified against the source PDFs.*
