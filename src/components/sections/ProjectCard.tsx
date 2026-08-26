import type { Project } from "@/data";
import { getBrand } from "@/data";
import { Panel } from "../primitives/Panel";
import { Tag } from "../primitives/Tag";
import { TagRow } from "../primitives/TagRow";
import { LogoMark } from "../primitives/LogoMark";
import { ArrowUpRightIcon } from "../icons";

const statusLabel: Record<Project["status"], string> = {
  active: "ACTIVE",
  shipped: "SHIPPED",
  archived: "ARCHIVED",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Panel as="article" brackets bracketSize="sm" interactive className="flex flex-col">
      <div className="flex items-center justify-between">
        <span className="font-mono text-micro text-ink-3 transition-colors duration-[var(--duration-fast)] group-hover:text-accent">
          PRJ / {String(index).padStart(2, "0")}
        </span>
        <Tag variant="ghost" tone="muted" size="sm">
          {statusLabel[project.status]}
        </Tag>
      </div>

      <h3 className="relative mt-3 text-h3 text-ink">
        {project.repo ? (
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {project.name}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          project.name
        )}
      </h3>
      <p className="mt-1 text-micro-lg font-mono text-ink-3">{project.tagline}</p>
      <p className="mt-3 text-sm text-ink-2">{project.description}</p>

      {project.teamRepo && (
        <div className="mt-3 border-l-2 border-line-strong bg-sunken p-3">
          <div className="flex items-center gap-2">
            <Tag variant="outline" tone="muted" size="sm">
              Team repo
            </Tag>
            <LogoMark brand={getBrand(project.teamRepo.orgBrandId)} height={14} />
          </div>
          <p className="mt-2 text-micro-lg text-ink-2">
            <span className="text-ink-3">MY CONTRIBUTION —</span> {project.teamRepo.contribution}
          </p>
        </div>
      )}

      <div className="mt-auto pt-4">
        <TagRow items={project.stack} variant="ghost" />
      </div>

      {project.repo && (
        <div className="relative z-10 mt-4 flex items-center gap-1.5 font-mono text-micro text-ink-3 transition-colors duration-[var(--duration-fast)] group-hover:text-accent">
          SOURCE
          <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </Panel>
  );
}
