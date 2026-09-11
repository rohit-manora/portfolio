import { seededRandom } from "@/lib/utils/seededRandom";

interface Node {
  x: number;
  y: number;
  r: number;
  plane: 0 | 1 | 2;
}

const W = 800;
const H = 800;

/** Three depth planes, jittered from a loose grid — the same structure the 3D scene renders. */
function buildLattice(): { nodes: Node[]; edges: [Node, Node][] } {
  const rand = seededRandom(20260911);
  const nodes: Node[] = [];

  const planes: { count: number; cols: number; r: number; inset: number; plane: 0 | 1 | 2 }[] = [
    { count: 24, cols: 6, r: 1.6, inset: 40, plane: 2 },
    { count: 18, cols: 6, r: 2.4, inset: 90, plane: 1 },
    { count: 18, cols: 6, r: 3.6, inset: 140, plane: 0 },
  ];

  for (const p of planes) {
    const rows = Math.ceil(p.count / p.cols);
    const availW = W - p.inset * 2;
    const availH = H - p.inset * 2;
    for (let i = 0; i < p.count; i++) {
      const col = i % p.cols;
      const row = Math.floor(i / p.cols);
      const jx = (rand() - 0.5) * (availW / p.cols) * 0.7;
      const jy = (rand() - 0.5) * (availH / rows) * 0.7;
      nodes.push({
        x: p.inset + (availW / (p.cols - 1)) * col + jx,
        y: p.inset + (availH / Math.max(rows - 1, 1)) * row + jy,
        r: p.r,
        plane: p.plane,
      });
    }
  }

  /* Connect each node to its nearest neighbours within the same or adjacent plane */
  const edges: [Node, Node][] = [];
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    if (a === undefined || a.plane === 2) continue;
    const neighbours = nodes
      .map((b, j) => ({ b, j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
      .filter((n) => n.j !== i && n.d > 0 && Math.abs(n.b.plane - a.plane) <= 1)
      .sort((p, q) => p.d - q.d)
      .slice(0, 2);
    for (const n of neighbours) edges.push([a, n.b]);
  }

  return { nodes, edges };
}

const { nodes, edges } = buildLattice();

const PLANE_OPACITY = [0.9, 0.5, 0.22] as const;

/**
 * Static lattice — served to mobile, to `prefers-reduced-motion`, and wherever
 * WebGL is unavailable. No JavaScript, no GPU (§5).
 */
export function LatticeFallback({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="var(--color-data)" strokeWidth="0.6" opacity="0.14">
        {edges.map(([a, b], i) => (
          <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
        ))}
      </g>
      <g>
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.plane === 0 ? "var(--color-accent)" : "var(--color-text-primary)"}
            opacity={PLANE_OPACITY[n.plane]}
          />
        ))}
      </g>
    </svg>
  );
}
