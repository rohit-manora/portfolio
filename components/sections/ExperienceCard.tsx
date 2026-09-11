"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useId, useState } from "react";
import { MetricChip, Tag } from "@/components/ui/Tag";
import type { Employer, Engagement } from "@/data/types";
import { techById } from "@/data/skills";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { formatRange } from "@/lib/utils/formatDate";
import { cn } from "@/lib/utils/cn";

function EngagementRow({
  engagement,
  defaultOpen,
}: {
  engagement: Engagement;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduced = useReducedMotion();
  const panelId = useId();

  const hasBody =
    engagement.responsibilities.length > 0 || engagement.tech.length > 0;

  return (
    <div className="border-t border-line-subtle first:border-t-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start gap-3 py-4 text-left"
      >
        <ChevronRight
          size={16}
          aria-hidden="true"
          className={cn(
            "mt-0.5 shrink-0 text-text-tertiary transition-transform duration-300",
            open && "rotate-90 text-accent",
          )}
        />
        <span className="flex-1">
          <span className="block font-display text-base tracking-[-0.01em] text-text-primary">
            {engagement.name}
          </span>
          <span className="mt-1 block font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary">
            <span data-numeric>{formatRange(engagement.start, engagement.end)}</span>
            {" · "}
            {engagement.domain}
            {" · "}
            {engagement.kind === "client" ? "Client" : "Product"}
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && hasBody && (
          <motion.div
            id={panelId}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-7">
              <p className="max-w-[62ch] text-sm leading-relaxed text-text-secondary">
                {engagement.summary}
              </p>

              {engagement.responsibilities.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {engagement.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-text-secondary"
                    >
                      <span aria-hidden="true" className="mt-2 block h-px w-3 shrink-0 bg-line-strong" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {(engagement.tech.length > 0 || engagement.metrics !== undefined) && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {engagement.metrics?.map((metric) => (
                    <MetricChip key={metric.label} value={metric.value} label={metric.label} />
                  ))}
                  {engagement.tech.map((id) => {
                    const tech = techById.get(id);
                    return tech === undefined ? null : <Tag key={id}>{tech.label}</Tag>;
                  })}
                </div>
              )}

              {engagement.deepDive !== undefined && (
                <a
                  href={engagement.deepDive === "architecture" ? "#architecture" : "#dataflow"}
                  className="group mt-5 inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  {engagement.deepDive === "architecture"
                    ? "Explore the architecture"
                    : "Explore the pipeline"}
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ExperienceCard({ employer, index }: { employer: Employer; index: number }) {
  return (
    <article className="rounded border border-line-subtle bg-surface-1/40 p-6 transition-colors duration-200 hover:border-line md:p-8">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-text-primary">
          {employer.name}
        </h3>
        <p
          data-numeric
          className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary"
        >
          {formatRange(employer.start, employer.end)}
        </p>
      </header>

      <p className="mt-3 font-display text-xl tracking-[-0.02em] text-text-primary md:text-2xl">
        {employer.title}
      </p>
      <p className="mt-1 text-sm text-text-secondary">{employer.location}</p>

      <p className="mt-7 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
        {employer.engagements.length === 1 ? "Engagement" : "Engagements"}
      </p>

      <div className="mt-2">
        {employer.engagements.map((engagement, i) => (
          <EngagementRow
            key={engagement.id}
            engagement={engagement}
            defaultOpen={index === 0 && i === 0}
          />
        ))}
      </div>
    </article>
  );
}
