"use client";

import { useMemo, useState } from "react";
import { clusters, techs } from "@/data/skills";
import type { EngagementId, SkillCategory, Tech } from "@/data/types";
import { cn } from "@/lib/utils/cn";

const W = 1000;
const H = 680;
const HUB = { x: W / 2, y: H / 2 };

/** Display names for the tooltip evidence line. */
const ENGAGEMENT_NAMES: Record<EngagementId, string> = {
  carnival: "Carnival UK",
  adha: "ADHA",
  verizon: "Verizon Wireless",
  streamanalytix: "StreamAnalytix",
  giddh: "Giddh",
  servicexpert: "ServiceXpert",
  biddrip: "Biddrip",
};

interface Placed {
  tech: Tech;
  x: number;
  y: number;
}

/** Hand-authored layout: nodes fan around their cluster anchor, away from the hub. */
function place(): { nodes: Placed[]; anchors: Map<SkillCategory, { x: number; y: number }> } {
  const anchors = new Map<SkillCategory, { x: number; y: number }>();
  for (const c of clusters) anchors.set(c.id, { x: c.x * W, y: c.y * H });

  const nodes: Placed[] = [];
  for (const cluster of clusters) {
    const anchor = anchors.get(cluster.id);
    if (anchor === undefined) continue;
    const members = techs.filter((t) => t.category === cluster.id);

    /* Fan direction: outward from the hub */
    const baseAngle = Math.atan2(anchor.y - HUB.y, anchor.x - HUB.x);
    const spread = Math.PI * 0.92;

    members.forEach((tech, i) => {
      const ratio = members.length === 1 ? 0.5 : i / (members.length - 1);
      const angle = baseAngle - spread / 2 + spread * ratio;
      const ring = 52 + (i % 3) * 34;
      nodes.push({
        tech,
        x: anchor.x + Math.cos(angle) * ring,
        y: anchor.y + Math.sin(angle) * ring * 0.82,
      });
    });
  }
  return { nodes, anchors };
}

export function SkillConstellation() {
  const { nodes, anchors } = useMemo(() => place(), []);
  const [hovered, setHovered] = useState<string | null>(null);
  const [hoveredCluster, setHoveredCluster] = useState<SkillCategory | null>(null);

  const activeTech = nodes.find((n) => n.tech.id === hovered);

  const dim = (category: SkillCategory) => {
    if (hoveredCluster !== null) return hoveredCluster !== category;
    if (activeTech !== undefined) return activeTech.tech.category !== category;
    return false;
  };

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        role="img"
        aria-label="Technology map grouped by discipline"
      >
        {/* Hub spokes */}
        <g>
          {clusters.map((c) => {
            const a = anchors.get(c.id);
            if (a === undefined) return null;
            return (
              <line
                key={c.id}
                x1={HUB.x}
                y1={HUB.y}
                x2={a.x}
                y2={a.y}
                stroke="var(--color-line-strong)"
                strokeWidth="1"
                opacity={dim(c.id) ? 0.15 : 0.5}
                className="transition-opacity duration-300"
              />
            );
          })}
        </g>

        {/* Cluster -> node edges */}
        <g>
          {nodes.map((n) => {
            const a = anchors.get(n.tech.category);
            if (a === undefined) return null;
            const isHot = hovered === n.tech.id;
            return (
              <line
                key={`e-${n.tech.id}`}
                x1={a.x}
                y1={a.y}
                x2={n.x}
                y2={n.y}
                stroke={isHot ? "var(--color-accent)" : "var(--color-line)"}
                strokeWidth="1"
                opacity={dim(n.tech.category) ? 0.1 : isHot ? 1 : 0.45}
                className="transition-all duration-300"
              />
            );
          })}
        </g>

        {/* Hub */}
        <g>
          <circle cx={HUB.x} cy={HUB.y} r="9" fill="var(--color-accent)" />
          <circle cx={HUB.x} cy={HUB.y} r="20" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.35" />
          <text
            x={HUB.x}
            y={HUB.y + 42}
            textAnchor="middle"
            className="fill-[var(--color-text-primary)] font-mono text-[13px] uppercase tracking-[0.14em]"
          >
            Experience Engineering
          </text>
        </g>

        {/* Cluster labels */}
        <g>
          {clusters.map((c) => {
            const a = anchors.get(c.id);
            if (a === undefined) return null;
            return (
              <text
                key={`l-${c.id}`}
                x={a.x}
                y={a.y - 14}
                textAnchor="middle"
                onMouseEnter={() => setHoveredCluster(c.id)}
                onMouseLeave={() => setHoveredCluster(null)}
                className={cn(
                  "cursor-default font-mono text-[12px] uppercase tracking-[0.16em] transition-opacity duration-300",
                  dim(c.id) ? "opacity-25" : "opacity-100",
                  "fill-[var(--color-accent)]",
                )}
              >
                {c.label}
              </text>
            );
          })}
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((n) => {
            const isHot = hovered === n.tech.id;
            const isCurrent = n.tech.status === "current";
            return (
              <g
                key={n.tech.id}
                tabIndex={0}
                role="button"
                aria-label={`${n.tech.label}${n.tech.usedOn.length > 0 ? `, used on ${n.tech.usedOn.map((e) => ENGAGEMENT_NAMES[e]).join(", ")}` : ""}`}
                onMouseEnter={() => setHovered(n.tech.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(n.tech.id)}
                onBlur={() => setHovered(null)}
                className={cn(
                  "cursor-default transition-opacity duration-300",
                  dim(n.tech.category) ? "opacity-20" : isCurrent ? "opacity-100" : "opacity-55",
                )}
              >
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isHot ? 5 : 3.5}
                  fill={isCurrent ? "var(--color-accent)" : "var(--color-text-tertiary)"}
                  className="transition-all duration-200"
                />
                {isCurrent && (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isHot ? 11 : 8}
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="1"
                    opacity="0.4"
                    className="transition-all duration-200"
                  />
                )}
                <text
                  x={n.x}
                  y={n.y + 22}
                  textAnchor="middle"
                  className={cn(
                    "font-mono text-[11px] tracking-[0.02em] transition-colors duration-200",
                    isHot ? "fill-[var(--color-text-primary)]" : "fill-[var(--color-text-secondary)]",
                  )}
                >
                  {n.tech.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Evidence line — only rendered when the resume attributes the tech */}
      <p aria-live="polite" className="mt-2 min-h-[1.5rem] text-center text-sm text-text-secondary">
        {activeTech === undefined
          ? "Hover or focus a technology."
          : activeTech.tech.usedOn.length === 0
            ? `${activeTech.tech.label} — listed in résumé skills`
            : `${activeTech.tech.label} — used on ${activeTech.tech.usedOn.map((e) => ENGAGEMENT_NAMES[e]).join(", ")}`}
      </p>
    </div>
  );
}
