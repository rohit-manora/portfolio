"use client";

import { useSyncExternalStore } from "react";
import { useReducedMotion } from "./useReducedMotion";

export type DeviceTier = "full" | "reduced" | "static";

function subscribe(onChange: () => void): () => void {
  window.addEventListener("resize", onChange, { passive: true });
  return () => window.removeEventListener("resize", onChange);
}

/** Bucketed so the snapshot only changes when a breakpoint is crossed, not on every resize pixel. */
function getSnapshot(): DeviceTier {
  const w = window.innerWidth;
  if (w < 768) return "static";
  if (w < 1024) return "reduced";
  return "full";
}

const getServerSnapshot = (): DeviceTier => "static";

/**
 * Gates the 3D scene (§5).
 *   full    — desktop, complete lattice
 *   reduced — tablet, fewer nodes, no pulses or parallax
 *   static  — mobile or reduced motion; SVG fallback, no WebGL at all
 *
 * Server snapshot is "static", so the first client render matches the server
 * and three.js is never requested before the tier is known.
 */
export function useDeviceTier(): DeviceTier {
  const prefersReduced = useReducedMotion();
  const tier = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return prefersReduced ? "static" : tier;
}
