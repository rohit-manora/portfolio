# Rohit Manora — Portfolio

Personal portfolio for **Rohit Manora**, Senior Experience Engineer at Publicis Sapient.

A single-page portfolio built around two interactive artifacts — a Carnival UK microfrontend
architecture explorer and a StreamAnalytix pipeline visualisation — rather than around prose.

**Design specification:** [`PORTFOLIO_PLAN.md`](./PORTFOLIO_PLAN.md) — the source of record for
content, colour, type, motion and component architecture. Section references in code comments
(`§7`, `§15`) point there.

---

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript, `strict` + `noUncheckedIndexedAccess` + `exactOptionalPropertyTypes` |
| Styling | Tailwind CSS v4 (`@theme` tokens in `app/globals.css`) |
| 3D | React Three Fiber · three.js |
| Motion | Framer Motion |
| Icons | Lucide React |

React is pinned to `~19.2.0`: `@react-three/fiber@9` declares `react: ">=19 <19.3"`.

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

---

## Environment

```bash
cp .env.example .env.local
```

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL. Drives `<link rel="canonical">`, Open Graph URLs, `sitemap.xml` and `robots.txt`. |

**On Vercel this can be left unset** — the production domain is read automatically from
`VERCEL_PROJECT_PRODUCTION_URL`. Set it only for a custom domain.

Resolution order is `NEXT_PUBLIC_SITE_URL` → Vercel's production domain → a hardcoded fallback.
The resolver tolerates a blank value, surrounding whitespace, a missing protocol and a trailing
slash; anything unparseable falls through to the next candidate. A blank value is treated as unset
rather than throwing at build time.

No other environment variables are required, and no secrets exist in this project.

---

## Editing content

All copy lives in `data/` as typed TypeScript. **No prose is hardcoded in JSX** — to update the
site, edit a data file.

| File | Contents |
|---|---|
| `data/profile.ts` | Name, title, contact, about narrative, ledger, stat tiles |
| `data/experience.ts` | Employers with nested engagements |
| `data/projects.ts` | Selected work cards |
| `data/skills.ts` | Technologies, categories, constellation coordinates |
| `data/architecture.ts` | Carnival microfrontend graph |
| `data/dataflow.ts` | StreamAnalytix pipeline stages |
| `data/education.ts` | Education and academic record |
| `data/certifications.ts` | Training and certificates |
| `data/capabilities.ts` | Engineering capabilities |
| `data/navigation.ts` | Nav items and section indices |
| `data/types.ts` | Type contracts |

`TechId` and `EngagementId` are string-literal unions, so a typo in a `usedOn` or `tech` array is a
**compile error** rather than a silently empty tooltip.

### Content rules

These are enforced by the data model and must be preserved:

1. **Every entry carries a `source` field** — `"A"` (Publicis Sapient profile PDF), `"B"` (personal
   CV PDF), `"A+B"`, or `"user"` (supplied directly by Rohit). Nothing is invented.
2. **Every metric renders with its provenance.** `StatTile` and `MetricChip` require a `source`.
   A number without attribution reads as marketing.
3. **No per-module descriptions for the Carnival microfrontends.** The résumé names the eight
   modules but describes none individually. `data/architecture.ts` exposes `sharedFacts`, which are
   true of every module and stated verbatim in the résumé. Do not add invented module copy.
4. **The AWS entry is a Udemy *course*, not an AWS certification.** `data/certifications.ts` marks
   it `kind: "Course"` with `institute: "Udemy"`, and the UI always renders both.
5. **No screenshots.** Project visuals are generative SVG motifs abstracting each project's domain.
   Inventing client UI would misrepresent confidential work.

---

## Architecture

```
app/          layout (metadata, fonts, JSON-LD) · page · sitemap · robots · OG image
components/
  3d/         WebGL hero lattice + deterministic SVG fallback
  ui/         Section · SectionHeading · Reveal · Button · Tag · Ledger · StatTile
  viz/        SkillConstellation · ArchitectureExplorer · DataFlow (SVG, not WebGL)
  sections/   Navbar · Hero · About · Skills · Experience · Projects · Education · Contact · Footer
data/         typed content layer
lib/          seo · jsonld · hooks · utils
public/       résumé PDF
```

**Server Components by default.** Only interactive leaves are `'use client'`; the content spine
ships as zero-JS HTML.

**The `viz/` layer is SVG, not WebGL** — crisp text, real focusable DOM nodes, keyboard navigable,
no GPU cost, and it works identically on the 3D fallback path.

---

## 3D performance

The hero scene renders in **three draw calls** — one instanced mesh for nodes (per-instance colour),
one `LineSegments` for edges, one instanced mesh for pulses. No post-processing: bloom is the largest
GPU cost and the strongest "generated" tell, so glow comes from additive blending instead.

| Tier | Behaviour |
|---|---|
| Desktop ≥1024px | Full scene — 60 nodes, 3 depth planes, pulses, mouse parallax |
| Tablet 768–1023px | 36 nodes, 2 planes, no pulses, no parallax |
| Mobile <768px | **No WebGL.** Static SVG lattice |
| `prefers-reduced-motion` | Static SVG at every breakpoint |
| WebGL unavailable | Same static SVG, silently |

three.js sits behind `next/dynamic({ ssr: false })` behind the tier gate, so the bundle never reaches
a mobile device. The frameloop pauses when the hero leaves the viewport, releasing the GPU for the
rest of the page.

### Measured bundle

| | Raw | Gzipped |
|---|---|---|
| Initial JS | 740 KB | **229 KB** |
| Deferred (three.js + R3F) | 840 KB | — |

The deferred chunk is not referenced in the prerendered HTML — verified against
`.next/server/app/index.html`.

Framer Motion's `LazyMotion` was tried and reverted: `domMax` measured *worse* (234 KB) because it
is close to the full bundle, and `domAnimation` saved only 9 KB while breaking the navigation's
shared-layout indicator. Not worth it.

---

## Accessibility

- Semantic landmarks; one `<h1>`, unbroken heading hierarchy
- Skip-to-content as the first focusable element
- Full keyboard operation, including both graph visualisations (arrow keys within a layer)
- The architecture graph is mirrored by a visually-hidden `<table>` for screen readers
- `aria-expanded` / `aria-controls` on every accordion; `aria-live` on detail panels
- Focus trap, `Esc` and focus restoration on the mobile menu
- All text meets WCAG AA; most meets AAA
- `prefers-reduced-motion` honoured throughout — reveals land instantly, loops freeze, parallax is
  removed, but hover colour transitions are retained

---

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import it in Vercel — the framework is detected automatically, no build configuration needed.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain in **Project → Settings → Environment Variables**.
4. Deploy.

After the first deploy, submit `https://<your-domain>/sitemap.xml` in Google Search Console.

### SEO scope

Technical SEO is complete: metadata, canonical, Open Graph, Twitter card, generated `robots.txt`,
`sitemap.xml`, and `Person` / `WebSite` / `ProfilePage` JSON-LD.

The site is optimised for **name and name-plus-role queries** — "Rohit Manora",
"Rohit Manora Senior Experience Engineer", "Rohit Manora React developer" — which are winnable.
Generic head terms like "Senior Frontend Engineer" are not achievable for a single portfolio page,
and stuffing toward them would degrade the writing without moving the ranking.

---

## License

All rights reserved. Content is the personal professional record of Rohit Manora.
