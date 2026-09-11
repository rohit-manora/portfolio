"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contribution, stages } from "@/data/dataflow";
import { sectionIndex } from "@/data/navigation";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils/cn";

/**
 * StreamAnalytix pipeline — PORTFOLIO_PLAN.md §11.
 *
 * The pipeline describes the PRODUCT. Rohit built the UI layer. So every stage
 * renders dimmed except Data Visualisation, which is marked as his layer. This
 * is both honest and more persuasive than implying ownership of the whole
 * platform — it shows where the work sits inside a larger system.
 */
export function DataFlow() {
  const [active, setActive] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <Section id="dataflow">
      <SectionHeading
        index={sectionIndex.dataflow}
        label="Data Platform"
        title="StreamAnalytix — end to end."
        deck="An end-to-end data processing platform. Rohit owned the visualisation layer — highlighted below."
      />

      <ol className="flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
        {stages.map((stage, i) => {
          const owned = stage.owned === true;
          const isActive = active === stage.id;
          return (
            <li key={stage.id} className="flex flex-1 items-center lg:flex-col">
              {/* Connector */}
              {i > 0 && (
                <div
                  aria-hidden="true"
                  className="relative ml-[1.6rem] h-8 w-px shrink-0 bg-line-subtle lg:ml-0 lg:h-px lg:w-full"
                >
                  {!reduced && (
                    <motion.span
                      animate={{ top: ["0%", "100%"] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                      className="absolute h-1 w-1 -translate-x-1/2 rounded-full bg-data lg:hidden"
                    />
                  )}
                  {!reduced && (
                    <motion.span
                      animate={{ left: ["0%", "100%"] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                      className="absolute top-1/2 hidden h-1 w-1 -translate-y-1/2 rounded-full bg-data lg:block"
                    />
                  )}
                </div>
              )}

              <button
                type="button"
                onMouseEnter={() => setActive(stage.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(stage.id)}
                onBlur={() => setActive(null)}
                className={cn(
                  "w-full rounded border px-3 py-4 text-left transition-all duration-200 lg:text-center",
                  owned
                    ? "border-accent bg-accent-muted"
                    : "border-line-subtle bg-surface-1/40 opacity-45 hover:opacity-100",
                  isActive && "border-line-strong opacity-100",
                )}
              >
                <span
                  className={cn(
                    "block font-mono text-[0.625rem] uppercase tracking-[0.14em]",
                    owned ? "text-accent" : "text-text-tertiary",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "mt-2 block text-sm leading-tight",
                    owned ? "text-text-primary" : "text-text-secondary",
                  )}
                >
                  {stage.label}
                </span>
                {owned && (
                  <span className="mt-2 block font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-accent">
                    Rohit&apos;s layer
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>

      {/* Stage description — live region so keyboard users get the same detail */}
      <p
        aria-live="polite"
        className="mt-6 min-h-[1.5rem] text-sm text-text-secondary"
      >
        {active === null
          ? "Hover or focus a stage for detail."
          : (stages.find((s) => s.id === active)?.description ?? "")}
      </p>

      <div className="mt-10 rounded border border-line-subtle bg-surface-1/40 p-6 md:p-8">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
          Contribution — {contribution.role}
        </p>
        <ul className="mt-4 space-y-2">
          {contribution.items.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-text-secondary">
              <span aria-hidden="true" className="mt-2 block h-px w-3 shrink-0 bg-line-strong" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
