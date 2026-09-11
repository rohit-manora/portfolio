import type { Project } from "@/data/types";
import { seededRandom } from "@/lib/utils/seededRandom";

/**
 * Generative abstract motifs — PORTFOLIO_PLAN.md §9.
 *
 * No screenshots exist for any of this work, and inventing client UI would
 * misrepresent confidential platforms. Each motif abstracts the project's
 * actual domain instead.
 */
function Modules() {
  /* Eight blocks — the eight Carnival microfrontend modules */
  const rand = seededRandom(81);
  return (
    <g>
      {Array.from({ length: 8 }, (_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const w = 46 + rand() * 22;
        const h = 30 + rand() * 18;
        return (
          <rect
            key={i}
            x={28 + col * 62}
            y={34 + row * 54}
            width={w}
            height={h}
            rx="3"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1"
            opacity={0.25 + (i % 3) * 0.22}
          />
        );
      })}
      <line x1="20" y1="122" x2="300" y2="122" stroke="var(--color-line-strong)" strokeWidth="1" />
    </g>
  );
}

function Parcels() {
  /* Isometric plot grid — housing parcels, no map data */
  const cells: React.ReactElement[] = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 7; c++) {
      const x = 160 + (c - r) * 24;
      const y = 40 + (c + r) * 12;
      cells.push(
        <path
          key={`${r}-${c}`}
          d={`M${x} ${y} l24 12 l-24 12 l-24 -12 z`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="0.8"
          opacity={0.15 + ((r + c) % 4) * 0.14}
        />,
      );
    }
  }
  return <g>{cells}</g>;
}

function Streams() {
  /* Parallel flow lines at varying speeds */
  const rand = seededRandom(33);
  return (
    <g>
      {Array.from({ length: 7 }, (_, i) => {
        const y = 26 + i * 20;
        const amp = 8 + rand() * 12;
        return (
          <path
            key={i}
            d={`M0 ${y} C 80 ${y - amp}, 160 ${y + amp}, 320 ${y}`}
            fill="none"
            stroke="var(--color-data)"
            strokeWidth="1"
            opacity={0.2 + (i % 3) * 0.2}
          />
        );
      })}
    </g>
  );
}

function LedgerMotif() {
  /* Ruled lines with stacked value columns */
  const rand = seededRandom(57);
  return (
    <g>
      {Array.from({ length: 8 }, (_, i) => (
        <line
          key={`r${i}`}
          x1="24"
          y1={26 + i * 18}
          x2="296"
          y2={26 + i * 18}
          stroke="var(--color-line)"
          strokeWidth="0.8"
        />
      ))}
      {Array.from({ length: 9 }, (_, i) => {
        const h = 16 + rand() * 82;
        return (
          <rect
            key={`c${i}`}
            x={40 + i * 28}
            y={166 - h}
            width="12"
            height={h}
            fill="var(--color-accent)"
            opacity={0.16 + (i % 3) * 0.16}
          />
        );
      })}
    </g>
  );
}

function Spokes() {
  /* Radial dispatch from a centre */
  return (
    <g>
      {Array.from({ length: 14 }, (_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        const r1 = 22;
        const r2 = 58 + (i % 3) * 22;
        return (
          <line
            key={i}
            x1={160 + Math.cos(angle) * r1}
            y1={95 + Math.sin(angle) * r1 * 0.75}
            x2={160 + Math.cos(angle) * r2}
            y2={95 + Math.sin(angle) * r2 * 0.75}
            stroke="var(--color-accent)"
            strokeWidth="1"
            opacity={0.2 + (i % 3) * 0.2}
          />
        );
      })}
      <circle cx="160" cy="95" r="16" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.6" />
    </g>
  );
}

function Brackets() {
  /* Nested quote structures */
  return (
    <g>
      {Array.from({ length: 5 }, (_, i) => {
        const inset = i * 22;
        return (
          <path
            key={i}
            d={`M${58 + inset} ${34 + inset} h-18 v${122 - inset * 2} h18 M${262 - inset} ${34 + inset} h18 v${122 - inset * 2} h-18`}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1"
            opacity={0.18 + i * 0.14}
          />
        );
      })}
    </g>
  );
}

const MOTIFS: Record<Project["motif"], () => React.ReactElement> = {
  modules: Modules,
  parcels: Parcels,
  streams: Streams,
  ledger: LedgerMotif,
  spokes: Spokes,
  brackets: Brackets,
};

export function ProjectVisual({ motif }: { motif: Project["motif"] }) {
  const Motif = MOTIFS[motif];
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line-subtle bg-surface-1">
      <svg
        viewBox="0 0 320 190"
        className="h-full w-full"
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="xMidYMid slice"
      >
        <Motif />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_120%,var(--color-bg)_5%,transparent_60%)]"
      />
    </div>
  );
}
