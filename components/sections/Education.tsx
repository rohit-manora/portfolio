import { Accessibility, Cloud, Code2, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { credentials } from "@/data/certifications";
import { achievements, education } from "@/data/education";
import { sectionIndex } from "@/data/navigation";

const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  cloud: Cloud,
  code: Code2,
  accessibility: Accessibility,
};

export function Education() {
  const degree = education[0];
  const schooling = education.slice(1);

  return (
    <Section id="education">
      <SectionHeading
        index={sectionIndex.education}
        label="Education & Credentials"
        title="Formal grounding."
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          {degree !== undefined && (
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
                {degree.period}
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.02em] text-text-primary md:text-3xl">
                {degree.qualification}
              </h3>
              {degree.specialisation !== undefined && (
                <p className="mt-1.5 text-text-secondary">{degree.specialisation}</p>
              )}
              <p className="mt-4 max-w-[46ch] leading-relaxed text-text-secondary">
                {degree.institution}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary">
                {degree.affiliation !== undefined && <span>{degree.affiliation}</span>}
                {degree.result !== undefined && (
                  <>
                    <span aria-hidden="true" className="text-line-strong">/</span>
                    <span data-numeric>{degree.result}</span>
                  </>
                )}
              </div>
            </div>
          )}

          <dl className="mt-10 border-t border-line-subtle">
            {schooling.map((entry) => (
              <div
                key={entry.qualification}
                className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line-subtle py-3"
              >
                <dt className="text-sm text-text-secondary">
                  {entry.qualification}
                  <span className="ml-2 font-mono text-[0.6875rem] text-text-tertiary">
                    {entry.institution}
                  </span>
                </dt>
                <dd
                  data-numeric
                  className="font-mono text-[0.6875rem] tracking-[0.02em] text-text-tertiary"
                >
                  {entry.period} · {entry.result ?? ""}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Academic record — quiet by design; never competes with the professional record */}
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary">
            Academic record
          </p>
          <dl className="mt-5 border-t border-line-subtle">
            {achievements.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line-subtle py-3"
              >
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary">
                  {item.label}
                </dt>
                <dd data-numeric className="text-sm text-text-secondary">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Credentials — the Training/Course/Certificate split and the institute
          are always shown, so a Udemy course is never read as a vendor cert. */}
      <div className="mt-20">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary">
          Credentials
        </p>
        <ul className="mt-6 grid gap-px overflow-hidden rounded border border-line-subtle bg-line-subtle sm:grid-cols-2">
          {credentials.map((credential, i) => {
            const Icon = ICONS[credential.icon] ?? Sparkles;
            return (
              <li key={credential.name} className="bg-bg">
                <Reveal delay={i * 0.06}>
                  <div className="group h-full bg-surface-1/40 p-6 transition-colors duration-200 hover:bg-surface-1">
                    <div className="flex items-start justify-between gap-4">
                      <Icon
                        size={18}
                        aria-hidden="true"
                        className="text-text-tertiary transition-colors duration-200 group-hover:text-accent"
                      />
                      <span
                        data-numeric
                        className="font-mono text-[0.6875rem] tracking-[0.02em] text-text-tertiary"
                      >
                        {credential.year}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-base leading-snug tracking-[-0.01em] text-text-primary">
                      {credential.name}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">{credential.institute}</p>
                    <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
                      {credential.kind}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
