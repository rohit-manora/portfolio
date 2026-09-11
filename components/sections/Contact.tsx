import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LatticeFallback } from "@/components/3d/LatticeFallback";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionIndex } from "@/data/navigation";
import { profile } from "@/data/profile";

interface Row {
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const rows: Row[] = [
  {
    label: "Email",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    external: false,
  },
  {
    label: "Phone",
    value: profile.contact.phone,
    href: `tel:${profile.contact.phoneHref}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.contact.linkedinLabel,
    href: profile.contact.linkedin,
    external: true,
  },
];

/**
 * Editorial link rows, not buttons — reads more premium and gives a far larger
 * target (72px desktop / 56px mobile). No contact form: a form implies a
 * support queue and adds a backend and spam surface (§13).
 */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-[10.5rem]">
      {/* The lattice returns, dimmed — the page bookends through the same system */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <LatticeFallback className="h-full w-full opacity-[0.12]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_50%,var(--color-bg)_30%,transparent_85%)]"
      />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-20">
        <SectionHeading
          index={sectionIndex.contact}
          label="Contact"
          title={profile.contactHeading}
          deck={profile.contactDeck}
        />

        <Reveal>
          <ul className="border-t border-line-subtle">
            {rows.map((row) => (
              <li key={row.label}>
                <a
                  href={row.href}
                  {...(row.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `${row.label}: ${row.value} (opens in a new tab)`,
                      }
                    : { "aria-label": `${row.label}: ${row.value}` })}
                  className="group flex items-center justify-between gap-6 border-b border-line-subtle px-2 py-5 transition-colors duration-200 hover:bg-surface-1 md:py-6"
                >
                  <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-8">
                    <span className="w-24 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary transition-colors duration-200 group-hover:text-accent">
                      {row.label}
                    </span>
                    <span className="break-all text-base text-text-primary md:text-lg">
                      {row.value}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-text-tertiary transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-accent"
                  >
                    {row.external ? <ArrowUpRight size={20} /> : <ArrowRight size={20} />}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
            {profile.availability}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
