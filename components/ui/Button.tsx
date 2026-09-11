import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "ghost" | "link";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
}

const BASE =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.98]";

const VARIANTS: Record<Variant, string> = {
  primary:
    "rounded-full bg-accent px-7 py-3.5 text-sm text-text-inverse hover:bg-accent-hover",
  ghost:
    "rounded-full border border-line px-7 py-3.5 text-sm text-text-primary hover:border-line-strong hover:bg-surface-1",
  link: "text-sm text-text-secondary hover:text-text-primary",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={cn(BASE, VARIANTS[variant], className)}
      {...externalProps}
      {...(download ? { download: "" } : {})}
      {...(ariaLabel !== undefined ? { "aria-label": ariaLabel } : {})}
    >
      {children}
    </a>
  );
}
