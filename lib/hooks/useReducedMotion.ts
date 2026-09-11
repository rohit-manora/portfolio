"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void): () => void {
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getSnapshot = (): boolean => window.matchMedia(QUERY).matches;
const getServerSnapshot = (): boolean => false;

/**
 * Drives the reduced-motion contract in PORTFOLIO_PLAN.md §15.
 * `useSyncExternalStore` is the correct primitive for subscribing to a browser
 * capability — no effect, no cascading render, SSR-safe.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
