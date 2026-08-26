import { featuredProjects, archiveProjects, projectGroups, groupLabels, getSkill } from "@/data";
import { Section } from "../primitives/Section";
import { Rule } from "../primitives/Rule";
import { Reveal } from "../primitives/Reveal";
import { ProjectCard } from "./ProjectCard";
import { ArrowUpRightIcon } from "../icons";

const languageCount = new Set(featuredProjects.flatMap((p) => p.stack)).size;

export function Projects() {
  let cardIndex = 0;

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="What I build when no one's asking"
      readout={`${featuredProjects.length} PROJECTS · ${languageCount}+ TECHNOLOGIES`}
    >
      <div className="flex flex-col gap-14">
        {projectGroups.map((group) => {
          const items = featuredProjects.filter((p) => p.group === group);
          if (!items.length) return null;

          return (
            <div key={group}>
              <Rule label={groupLabels[group]} ticks className="mb-6" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => {
                  cardIndex += 1;
                  return (
                    <Reveal key={p.id} delay={Math.min((cardIndex - 1) * 40, 200)}>
                      <ProjectCard project={p} index={cardIndex} />
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}

        {archiveProjects.length > 0 && (
          <div>
            <Rule label="Archive" className="mb-4" />
            <ul className="divide-y divide-line-faint">
              {archiveProjects.map((p) => (
                <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 py-2.5">
                  <span className="font-mono text-micro-lg text-ink-2">{p.name}</span>
                  <span className="flex items-center gap-3 font-mono text-micro text-ink-3">
                    {p.displayPeriod}
                    <span>·</span>
                    {getSkill(p.stack[0])?.name ?? p.stack[0]}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-ink-3 transition-colors hover:text-accent"
                      >
                        REPO <ArrowUpRightIcon className="h-2.5 w-2.5" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
