"use client";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { useId, useRef, useState } from "react";
import { MetricChip, Tag } from "@/components/ui/Tag";
import { techById } from "@/data/skills";
import type { Project } from "@/data/types";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils/cn";
import { ProjectVisual } from "./ProjectVisual";

const SPAN: Record<Project["span"], string> = {
  wide: "lg:col-span-7",
  narrow: "lg:col-span-5",
  half: "lg:col-span-6",
};

/** Tilt is capped at 6deg — the conventional 15deg reads as a template (§9). */
const MAX_TILT = 6;

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const panelId = useId();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [MAX_TILT, -MAX_TILT]), {
    stiffness: 260,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-MAX_TILT, MAX_TILT]), {
    stiffness: 260,
    damping: 30,
  });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(340px circle at ${glowX} ${glowY}, var(--color-accent-glow), transparent 70%)`;

  const onPointerMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType === "touch") return;
    const rect = ref.current?.getBoundingClientRect();
    if (rect === undefined) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const onPointerLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const visibleTech = project.tech.slice(0, 6);
  const overflow = project.tech.length - visibleTech.length;

  return (
    <motion.article
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      {...(reduced ? {} : { style: { rotateX, rotateY, transformPerspective: 1200 } })}
      className={cn(
        "group relative overflow-hidden rounded border border-line-subtle bg-surface-1/30 transition-colors duration-200 hover:border-line-strong",
        SPAN[project.span],
      )}
    >
      {/* Pointer-tracked glow */}
      {!reduced && (
        <motion.div
          aria-hidden="true"
          style={{ background: glow }}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}

      <ProjectVisual motif={project.motif} />

      <div className="relative p-6 md:p-7">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
          {project.kind === "client" ? "Client" : "Product"} · {project.domain} ·{" "}
          <span data-numeric>{project.period}</span>
        </p>

        <h3 className="mt-4 font-display text-xl leading-tight tracking-[-0.02em] text-text-primary md:text-2xl">
          {project.name}
        </h3>

        <p className="mt-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary">
          via {project.via}
        </p>

        <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.metrics?.map((metric) => (
            <MetricChip key={metric.label} value={metric.value} label={metric.label} />
          ))}
          {visibleTech.map((id) => {
            const tech = techById.get(id);
            return tech === undefined ? null : <Tag key={id}>{tech.label}</Tag>;
          })}
          {overflow > 0 && <Tag>{`+${overflow}`}</Tag>}
        </div>

        {/* In-card accordion, not a modal — modals lose scroll position (§9) */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={reduced ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-6 space-y-2 border-t border-line-subtle pt-5">
                {project.contributions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-relaxed text-text-secondary"
                  >
                    <span aria-hidden="true" className="mt-2 block h-px w-3 shrink-0 bg-line-strong" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <ChevronRight
              size={14}
              aria-hidden="true"
              className={cn("transition-transform duration-300", open && "rotate-90")}
            />
            {open ? "Hide contribution" : "Contribution"}
          </button>

          {project.deepDive !== undefined && (
            <a
              href={project.deepDive === "architecture" ? "#architecture" : "#dataflow"}
              className="group/link inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-hover"
            >
              {project.deepDive === "architecture" ? "Explore architecture" : "Explore pipeline"}
              <span aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-1">
                &rarr;
              </span>
            </a>
          )}

          {project.link !== undefined && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} — ${project.link.label} (opens in a new tab)`}
              className="inline-flex items-center gap-1 text-sm text-text-tertiary transition-colors hover:text-text-primary"
            >
              {project.link.label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
