"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { seededRandom } from "@/lib/utils/seededRandom";
import { buildLattice, type Lattice } from "./lattice";

const ACCENT = new THREE.Color("#5b9dff");
const DATA = new THREE.Color("#56e0c8");
const PLANE_TINT = [new THREE.Color("#cfe0ff"), new THREE.Color("#4a5560"), new THREE.Color("#1e242b")];
const PLANE_SCALE = [0.09, 0.062, 0.042];

const PULSE_COUNT = 3;
const PULSE_DURATION = 1.8;

interface Pulse {
  edge: number;
  t: number;
}

interface Props {
  /** `full` adds pulses and mouse parallax; `reduced` is the tablet tier. */
  tier: "full" | "reduced";
}

/**
 * Three draw calls total: one instanced mesh for nodes (per-instance colour),
 * one LineSegments for edges, one instanced mesh for pulses.
 * No post-processing — glow comes from additive blending (§5).
 */
export function ArchitectureField({ tier }: Props) {
  const group = useRef<THREE.Group>(null);
  const nodeMesh = useRef<THREE.InstancedMesh>(null);
  const pulseMesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { viewport } = useThree();

  const lattice: Lattice = useMemo(
    () => buildLattice(tier === "full" ? 1 : 0.6),
    [tier],
  );

  const edgeGeometry = useMemo(() => {
    const positions = new Float32Array(lattice.edges.length * 6);
    lattice.edges.forEach((edge, i) => {
      const a = lattice.nodes[edge.a];
      const b = lattice.nodes[edge.b];
      if (a === undefined || b === undefined) return;
      positions.set(a.position, i * 6);
      positions.set(b.position, i * 6 + 3);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [lattice]);

  /* Per-instance colour: additive blending turns a darker colour into a dimmer node. */
  const nodeColors = useMemo(() => {
    const arr = new Float32Array(lattice.nodes.length * 3);
    lattice.nodes.forEach((node, i) => {
      const c = node.primary ? ACCENT : (PLANE_TINT[node.plane] ?? PLANE_TINT[2]);
      if (c !== undefined) arr.set([c.r, c.g, c.b], i * 3);
    });
    return arr;
  }, [lattice]);

  /* Seeded, not Math.random: pure during render and identical on every load. */
  const nextEdge = useRef(seededRandom(4711));
  const pulses = useRef<Pulse[]>(
    Array.from({ length: PULSE_COUNT }, (_, i) => ({ edge: i, t: -(i * 0.6) })),
  );

  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const g = group.current;
    const nm = nodeMesh.current;
    if (g === null || nm === null) return;

    const time = state.clock.elapsedTime;

    /* Ambient drift — +/-1.5deg on an 18s sine */
    const drift = Math.sin(time / (18 / (Math.PI * 2))) * 0.026;

    /* Mouse parallax — group rotation only, damped, max ~3.5deg. Never the camera. */
    if (tier === "full") {
      pointer.current.x += (state.pointer.x - pointer.current.x) * 0.04;
      pointer.current.y += (state.pointer.y - pointer.current.y) * 0.04;
    }
    g.rotation.y = drift + pointer.current.x * 0.06;
    g.rotation.x = -pointer.current.y * 0.04;

    /* Nodes breathe +/-3%, phase-offset */
    for (let i = 0; i < lattice.nodes.length; i++) {
      const node = lattice.nodes[i];
      if (node === undefined) continue;
      const base = PLANE_SCALE[node.plane] ?? 0.04;
      const breathe = 1 + Math.sin(time * 0.8 + node.phase) * 0.03;
      dummy.position.set(...node.position);
      dummy.scale.setScalar(base * breathe * (node.primary ? 1.35 : 1));
      dummy.updateMatrix();
      nm.setMatrixAt(i, dummy.matrix);
    }
    nm.instanceMatrix.needsUpdate = true;

    /* Pulses travel one edge each, weighted toward the data-fetch direction */
    const pm = pulseMesh.current;
    if (pm !== null && tier === "full" && lattice.edges.length > 0) {
      for (let i = 0; i < pulses.current.length; i++) {
        const pulse = pulses.current[i];
        if (pulse === undefined) continue;
        pulse.t += delta / PULSE_DURATION;
        if (pulse.t >= 1) {
          pulse.t = 0;
          pulse.edge = Math.floor(nextEdge.current() * lattice.edges.length);
        }
        const edge = lattice.edges[pulse.edge];
        const a = edge === undefined ? undefined : lattice.nodes[edge.a];
        const b = edge === undefined ? undefined : lattice.nodes[edge.b];
        if (a === undefined || b === undefined || pulse.t < 0) {
          dummy.scale.setScalar(0);
          dummy.position.set(0, 0, 0);
        } else {
          /* ease-in-out-sine */
          const e = 0.5 - Math.cos(Math.PI * pulse.t) / 2;
          dummy.position.set(
            a.position[0] + (b.position[0] - a.position[0]) * e,
            a.position[1] + (b.position[1] - a.position[1]) * e,
            a.position[2] + (b.position[2] - a.position[2]) * e,
          );
          /* Fade in and out at the ends of the run */
          dummy.scale.setScalar(0.05 * Math.sin(Math.PI * pulse.t));
        }
        dummy.updateMatrix();
        pm.setMatrixAt(i, dummy.matrix);
      }
      pm.instanceMatrix.needsUpdate = true;
    }

    /* Gentle scale-to-fit so the composition holds across viewport widths */
    const fit = Math.min(1, viewport.width / 16);
    g.scale.setScalar(0.85 + fit * 0.3);
  });

  return (
    <group ref={group}>
      <instancedMesh
        ref={nodeMesh}
        args={[undefined, undefined, lattice.nodes.length]}
        frustumCulled={false}
      >
        <icosahedronGeometry args={[1, 0]}>
          <instancedBufferAttribute
            attach="attributes-color"
            args={[nodeColors, 3]}
          />
        </icosahedronGeometry>
        <meshBasicMaterial
          vertexColors
          transparent
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </instancedMesh>

      <lineSegments geometry={edgeGeometry} frustumCulled={false}>
        <lineBasicMaterial
          color={DATA}
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {tier === "full" && (
        <instancedMesh
          ref={pulseMesh}
          args={[undefined, undefined, PULSE_COUNT]}
          frustumCulled={false}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color={DATA}
            transparent
            opacity={0.9}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </instancedMesh>
      )}
    </group>
  );
}
