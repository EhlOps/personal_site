import { skills, resumeSkillIds, certifications, getBrand } from "@/data";
import type { SkillKind, Skill } from "@/data";
import { Section } from "../primitives/Section";
import { MicroLabel } from "../primitives/MicroLabel";
import { Rule } from "../primitives/Rule";
import { LogoMark } from "../primitives/LogoMark";
import { Reveal } from "../primitives/Reveal";

const clusters: { label: string; kinds: SkillKind[] }[] = [
  { label: "Languages", kinds: ["language"] },
  { label: "Systems", kinds: ["os", "tool"] },
  { label: "Frameworks & Cloud", kinds: ["framework", "cloud"] },
  { label: "Hardware & CAD", kinds: ["hardware"] },
];

// Widened to `Skill[]` explicitly: `skills` is an `as const` literal tuple
// so its inferred element type is a per-entry union that only exposes
// optional fields (`primary`, `icon`) where a given entry declares them.
// The annotation below widens every element to the full interface so
// `.primary` below is a plain `boolean | undefined` on every item.
const resumeSkills: Skill[] = skills.filter((s) => resumeSkillIds.includes(s.id));

export function Skills() {
  return (
    <Section id="skills" index="05" eyebrow="Skills" title="What I reach for">
      <Reveal>
        <MicroLabel size="sm" tone="faint" className="mb-6 block">
          ● Primary &nbsp;&nbsp; ○ Working knowledge
        </MicroLabel>
      </Reveal>

      <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {clusters.map((cluster, i) => {
          const items = resumeSkills
            .filter((s) => cluster.kinds.includes(s.kind))
            .sort((a, b) => a.rank - b.rank);

          return (
            <Reveal key={cluster.label} delay={Math.min(i * 60, 240)} className="px-0 py-6 sm:px-6 sm:first:pl-0">
              <MicroLabel size="sm" tone="faint" className="mb-4 block">
                {cluster.label}
              </MicroLabel>
              <ul className="flex flex-col gap-2.5">
                {items.map((skill) => (
                  <li key={skill.id} className="flex items-center gap-2 text-sm text-ink-2">
                    <span aria-hidden className={skill.primary ? "text-accent" : "text-ink-3"}>
                      {skill.primary ? "●" : "○"}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="mt-10">
        <Rule label="Certifications" className="mb-5" />
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
          {certifications.map((cert) => {
            const brand = getBrand(cert.issuerBrandId);
            return (
              <li key={cert.id} className="flex items-center gap-3">
                <LogoMark brand={brand} height={18} />
                <span className="text-sm text-ink-2">
                  {cert.name}
                  {cert.note && <span className="text-ink-3"> — {cert.note}</span>}
                </span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
