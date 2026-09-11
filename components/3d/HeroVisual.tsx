"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useDeviceTier } from "@/lib/hooks/useDeviceTier";
import { CanvasBoundary } from "./CanvasBoundary";
import { LatticeFallback } from "./LatticeFallback";

/**
 * three.js is behind a dynamic import with `ssr: false`, so the ~160KB bundle
 * never reaches a device on the static tier (mobile, reduced motion).
 */
const SceneCanvas = dynamic(
  () => import("./SceneCanvas").then((m) => m.SceneCanvas),
  { ssr: false, loading: () => null },
);

const FALLBACK = <LatticeFallback className="h-full w-full opacity-[0.22] md:opacity-40" />;

export function HeroVisual() {
  const tier = useDeviceTier();
  const hostRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  /* Pause the frameloop once the hero leaves the viewport — releases the GPU */
  useEffect(() => {
    const host = hostRef.current;
    if (host === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry?.isIntersecting ?? false),
      { threshold: 0 },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={hostRef} className="absolute inset-0">
      {tier === "static" ? (
        FALLBACK
      ) : (
        <CanvasBoundary fallback={FALLBACK}>
          <div className="h-full w-full opacity-0 animate-[fadeIn_1.2s_ease-out_0.3s_forwards]">
            <SceneCanvas tier={tier} active={inView} />
          </div>
        </CanvasBoundary>
      )}
    </div>
  );
}
