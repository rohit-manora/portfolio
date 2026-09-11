"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { employers } from "@/data/experience";
import { sectionIndex } from "@/data/navigation";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { ExperienceCard } from "./ExperienceCard";

const YEARS = ["2026", "2024", "2023", "2021", "2018", "2017"] as const;

export function ExperienceTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });
  const scaleY = useTransform(progress, (v) => (reduced ? 1 : v));

  return (
    <Section id="experience">
      <SectionHeading
        index={sectionIndex.experience}
        label="Experience"
        title="Four teams, eight years."
        deck="Engagements are nested inside employers — a client project is never presented as a place of work."
      />

      <div ref={trackRef} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Sticky rail — draws with scroll progress */}
        <div className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-32">
            <div className="relative flex flex-col gap-14 pl-6">
              <span
                aria-hidden="true"
                className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-line-subtle"
              />
              <motion.span
                aria-hidden="true"
                style={{ scaleY }}
                className="absolute left-[3px] top-1.5 bottom-1.5 w-px origin-top bg-accent"
              />
              {YEARS.map((year) => (
                <span key={year} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-6 top-1.5 block h-[7px] w-[7px] rounded-full border border-line-strong bg-bg"
                  />
                  <span
                    data-numeric
                    className="font-mono text-[0.6875rem] tracking-[0.14em] text-text-tertiary"
                  >
                    {year}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Employer cards */}
        <div className="relative lg:col-span-9">
          <span
            aria-hidden="true"
            className="absolute left-0 top-2 bottom-2 w-px bg-line-subtle lg:hidden"
          />
          <div className="flex flex-col gap-5 pl-5 lg:pl-0">
            {employers.map((employer, i) => (
              <Reveal key={employer.id} delay={Math.min(i, 3) * 0.06}>
                <ExperienceCard employer={employer} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
