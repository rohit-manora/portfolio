import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Escapes the content column to the viewport edge. */
  fullBleed?: boolean;
}

/** Section rhythm — 96px mobile, 168px desktop (§1, §2). */
export function Section({ id, children, className, fullBleed = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-[10.5rem]", fullBleed && "overflow-hidden", className)}
    >
      <div className={cn(!fullBleed && "mx-auto max-w-[1320px] px-5 md:px-20")}>
        {children}
      </div>
    </section>
  );
}
