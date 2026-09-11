import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  deck?: string;
  className?: string;
}

/**
 * The invariant section header. Used identically by all nine sections —
 * that repetition is the primary "system" signal (§1).
 */
export function SectionHeading({
  index,
  label,
  title,
  deck,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("mb-14 md:mb-20", className)}>
      <div className="flex items-center gap-4 border-b border-line-subtle pb-4">
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-accent">
          {index}
        </span>
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-text-tertiary">
          {label}
        </span>
      </div>

      <h2 className="mt-8 max-w-[18ch] font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.03em] text-text-primary">
        {title}
      </h2>

      {deck !== undefined && (
        <p className="mt-5 max-w-[64ch] text-base leading-relaxed text-text-secondary md:text-lg">
          {deck}
        </p>
      )}
    </header>
  );
}
