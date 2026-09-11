import type { Metric } from "@/data/types";

/**
 * Every stat renders with its provenance. A number with a source reads as
 * evidence; the same number without one reads as marketing (§6).
 */
export function StatTile({ value, label, source }: Metric) {
  return (
    <div className="border-t border-line-subtle pt-5">
      <p
        data-numeric
        className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.03em] text-text-primary"
      >
        {value}
      </p>
      <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-secondary">
        {label}
      </p>
      <p className="mt-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary">
        {source}
      </p>
    </div>
  );
}
