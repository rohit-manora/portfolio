import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";
import { sectionIndex } from "@/data/navigation";

export function Capabilities() {
  return (
    <Section id="capabilities">
      <SectionHeading
        index={sectionIndex.capabilities}
        label="Capabilities"
        title="What I bring to a team."
        deck="Each capability is evidenced by a documented engagement — nothing here is aspirational."
      />

      <ul className="grid gap-px overflow-hidden rounded border border-line-subtle bg-line-subtle sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, i) => (
          <li key={capability.title} className="bg-bg">
            <Reveal delay={Math.min(i, 8) * 0.04}>
              <div className="group h-full bg-surface-1/40 p-6 transition-colors duration-200 hover:bg-surface-1">
                <h3 className="font-display text-base tracking-[-0.01em] text-text-primary">
                  {capability.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                  {capability.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
