import { Ledger } from "@/components/ui/Ledger";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatTile } from "@/components/ui/StatTile";
import { sectionIndex } from "@/data/navigation";
import { ledger, profile, stats } from "@/data/profile";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index={sectionIndex.about}
        label="About"
        title="Engineering for enterprise scale."
        deck="Eight years building frontend systems for financial services, e-commerce, telecommunications and government platforms."
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <div className="space-y-6">
            {profile.about.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-[1.6] text-text-primary md:text-xl"
                    : "max-w-[68ch] leading-[1.65] text-text-secondary"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <Ledger rows={ledger} />
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-20 md:grid-cols-4">
          {stats.map((stat) => (
            <StatTile key={stat.label} {...stat} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
