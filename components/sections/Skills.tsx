import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillChipGroups } from "@/components/viz/SkillChipGroups";
import { SkillConstellation } from "@/components/viz/SkillConstellation";
import { sectionIndex } from "@/data/navigation";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index={sectionIndex.skills}
        label="Expertise"
        title="The stack, with receipts."
        deck="Filled nodes are the current stack; outlined nodes are earlier work. Each one names the projects it was actually used on — no proficiency scores, no invented years."
      />

      {/* Constellation on tablet and up; chip groups below that */}
      <Reveal className="hidden md:block">
        <SkillConstellation />
      </Reveal>
      <Reveal className="md:hidden">
        <SkillChipGroups />
      </Reveal>
    </Section>
  );
}
