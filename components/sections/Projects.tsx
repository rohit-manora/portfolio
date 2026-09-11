import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionIndex } from "@/data/navigation";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="work">
      <SectionHeading
        index={sectionIndex.work}
        label="Selected Work"
        title="Platforms, not pages."
        deck="Client engagements and products across travel e-commerce, government, data analytics, fintech and consumer services."
      />

      <div className="grid gap-5 lg:grid-cols-12">
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            delay={Math.min(i, 4) * 0.06}
            className={
              project.span === "wide"
                ? "lg:col-span-7"
                : project.span === "narrow"
                  ? "lg:col-span-5"
                  : "lg:col-span-6"
            }
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
