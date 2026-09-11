import { seededRandom } from "@/lib/utils/seededRandom";

export interface LatticeNode {
  position: [number, number, number];
  /** 0 = experience layer, 1 = integration, 2 = services */
  plane: 0 | 1 | 2;
  /** One of the eight Carnival microfrontend modules. */
  primary: boolean;
  /** Phase offset so nodes breathe out of sync. */
  phase: number;
}

export interface LatticeEdge {
  a: number;
  b: number;
}

export interface Lattice {
  nodes: LatticeNode[];
  edges: LatticeEdge[];
}

const PLANES: { count: number; z: number; cols: number; spread: [number, number] }[] = [
  { count: 18, z: 0, cols: 6, spread: [13, 8] },
  { count: 18, z: -4, cols: 6, spread: [15, 9] },
  { count: 24, z: -8, cols: 8, spread: [17, 10] },
];

/**
 * Three-tier architecture lattice — PORTFOLIO_PLAN.md §5.
 *
 * Deterministic: seeded, jittered from a loose grid. A composition, not noise.
 * `count` scales the whole structure down for the tablet tier.
 */
export function buildLattice(scale = 1): Lattice {
  const rand = seededRandom(20260911);
  const nodes: LatticeNode[] = [];
  const planeRanges: [number, number][] = [];

  PLANES.forEach((plane, planeIndex) => {
    const start = nodes.length;
    const count = Math.max(6, Math.round(plane.count * scale));
    const rows = Math.ceil(count / plane.cols);
    const [w, h] = plane.spread;

    for (let i = 0; i < count; i++) {
      const col = i % plane.cols;
      const row = Math.floor(i / plane.cols);
      const gx = (col / Math.max(plane.cols - 1, 1) - 0.5) * w;
      const gy = (row / Math.max(rows - 1, 1) - 0.5) * h;
      const jitter = w / plane.cols / 2.6;

      nodes.push({
        position: [
          gx + (rand() - 0.5) * jitter * 2,
          gy + (rand() - 0.5) * jitter * 2,
          plane.z + (rand() - 0.5) * 1.2,
        ],
        plane: planeIndex as 0 | 1 | 2,
        // The eight brightest nodes on the experience layer = the MFE modules.
        primary: planeIndex === 0 && i < 8,
        phase: rand() * Math.PI * 2,
      });
    }
    planeRanges.push([start, nodes.length]);
  });

  /* Edges: within the experience layer, then cross-plane 0->1 and 1->2. */
  const edges: LatticeEdge[] = [];
  const seen = new Set<string>();

  const connect = (from: [number, number], to: [number, number], perNode: number) => {
    for (let i = from[0]; i < from[1]; i++) {
      const a = nodes[i];
      if (a === undefined) continue;
      const candidates: { j: number; d: number }[] = [];
      for (let j = to[0]; j < to[1]; j++) {
        if (j === i) continue;
        const b = nodes[j];
        if (b === undefined) continue;
        const dx = a.position[0] - b.position[0];
        const dy = a.position[1] - b.position[1];
        candidates.push({ j, d: dx * dx + dy * dy });
      }
      candidates.sort((p, q) => p.d - q.d);
      for (const c of candidates.slice(0, perNode)) {
        const key = i < c.j ? `${i}-${c.j}` : `${c.j}-${i}`;
        if (seen.has(key)) continue;
        seen.add(key);
        edges.push({ a: i, b: c.j });
      }
    }
  };

  const p0 = planeRanges[0];
  const p1 = planeRanges[1];
  const p2 = planeRanges[2];
  if (p0 !== undefined) connect(p0, p0, 2);
  if (p0 !== undefined && p1 !== undefined) connect(p0, p1, 1);
  if (p1 !== undefined && p2 !== undefined) connect(p1, p2, 1);

  return { nodes, edges };
}
