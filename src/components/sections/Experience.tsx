import { experience } from "@/data";
import { Section } from "../primitives/Section";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  const years = experience.map((e) => e.start.slice(0, 4));
  const span = `${Math.min(...years.map(Number))} - PRESENT`;

  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Where I've shipped"
      readout={`${experience.length} ROLES · ${span}`}
    >
      <div className="relative">
        <div aria-hidden className="absolute bottom-6 left-0 top-6 hidden w-px bg-line lg:block">
          {experience.map((_, i) => (
            <span
              key={i}
              className="absolute -left-[3px] h-[7px] w-[7px] bg-accent-deep"
              style={{ top: `${(i / Math.max(experience.length - 1, 1)) * 100}%` }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-5 lg:pl-8">
          {experience.map((e, i) => (
            <ExperienceItem key={e.id} experience={e} delay={Math.min(i * 60, 240)} />
          ))}
        </div>
      </div>
    </Section>
  );
}
