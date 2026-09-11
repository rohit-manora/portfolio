import { cn } from "@/lib/utils/cn";

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "rounded border border-line-subtle bg-surface-1 px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.02em] text-text-tertiary",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Accent-bordered chip for verified metrics. Never rendered without a source. */
export function MetricChip({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-accent/30 bg-accent-muted px-2.5 py-1 font-mono text-[0.6875rem] tracking-[0.02em] text-accent">
      <span data-numeric>{value}</span>
      <span className="text-accent/70">{label}</span>
    </span>
  );
}
