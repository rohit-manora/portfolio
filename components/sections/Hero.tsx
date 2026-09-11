import { ArrowDown } from "lucide-react";
import { HeroVisual } from "@/components/3d/HeroVisual";
import { Button } from "@/components/ui/Button";
import { credentialRail, profile } from "@/data/profile";

/**
 * Hero — PORTFOLIO_PLAN.md §4.
 *
 * The canvas area reserves its space at mount (zero CLS) and sits behind a
 * left-weighted vignette, so hero text is always measured against --color-bg
 * and never against the scene. The 3D scene mounts into this slot in stage 5.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* Visual layer */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[62%]" aria-hidden="true">
        <HeroVisual />
      </div>

      {/* Legibility guarantee — text never sits on a bright node (§4) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,var(--color-bg)_0%,var(--color-bg)_38%,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_50%,var(--color-bg)_35%,transparent_75%)] md:hidden"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 md:px-20">
        <div className="max-w-[46rem]">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-accent">
            {profile.title} — {profile.company}
          </p>

          <h1 className="mt-7 font-display text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.9] tracking-[-0.04em] text-text-primary">
            Rohit
            <br />
            Manora
          </h1>

          <p className="mt-8 max-w-[52ch] text-lg leading-[1.6] text-text-primary md:text-xl">
            {profile.deck}
          </p>

          <p className="mt-4 max-w-[60ch] leading-[1.65] text-text-secondary">
            {profile.subDeck}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="#work" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="ghost">
              Let&apos;s Connect
            </Button>
            <Button
              href={profile.contact.resume}
              variant="link"
              download
              className="group mt-1 gap-1.5 sm:ml-2 sm:mt-0"
            >
              <ArrowDown
                size={14}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
              Download Résumé
            </Button>
          </div>

          {/* Credential rail */}
          <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line-subtle pt-6 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary">
            {credentialRail.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-line-strong">/</span>}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-5 hidden items-center gap-3 md:left-20 md:flex"
      >
        <span className="block h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
          Scroll
        </span>
      </div>
    </section>
  );
}
