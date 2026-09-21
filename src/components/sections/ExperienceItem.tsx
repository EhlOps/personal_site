import type { Experience } from "@/data";
import { getBrand } from "@/data";
import { Panel } from "../primitives/Panel";
import { LogoMark } from "../primitives/LogoMark";
import { MetaRow } from "../primitives/MetaRow";
import { TagRow } from "../primitives/TagRow";
import { Tag } from "../primitives/Tag";
import { Highlight } from "../primitives/Highlight";
import { Reveal } from "../primitives/Reveal";
import { CompanyContext } from "./CompanyContext";

export function ExperienceItem({ experience, delay = 0 }: { experience: Experience; delay?: number }) {
  const brand = getBrand(experience.brandId);

  return (
    <Reveal delay={delay}>
      <Panel as="article" brackets bracketSize="md" interactive className="scroll-mt-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[13rem_1fr] lg:gap-10">
          {/* Register A: company identity (chrome) */}
          <div className="flex flex-row items-center justify-between gap-4 lg:flex-col lg:items-start lg:justify-start lg:gap-6">
            <LogoMark brand={brand} height={26} />
            <div className="lg:hidden">
              <span className="font-mono text-micro text-ink-3">{experience.displayPeriod}</span>
            </div>
            <div className="hidden lg:block">
              <MetaRow
                layout="stack"
                size="sm"
                items={[
                  { label: "TERM", value: experience.displayPeriod },
                  { label: "BASED IN", value: experience.location },
                ]}
              />
            </div>
          </div>

          {/* Register C wraps A on mobile below; role title always leads column 2 */}
          <div>
            <h3 className="text-h3 text-ink">{experience.role}</h3>
            <p className="mt-1 text-sm text-ink-3 lg:hidden">{experience.location}</p>
            <p className="mt-1 text-sm text-ink-2">{experience.summary}</p>

            <div className="mt-3">
              <CompanyContext context={experience.context} companyName={brand.name} />
            </div>

            {/* Register C: Sam's own accomplishments, the only accent-bearing content */}
            <ul className="mt-3 space-y-2">
              {experience.achievements.map((a, i) => (
                <li key={i} className="relative pl-5 text-body text-ink">
                  <span aria-hidden className="absolute left-0 top-[0.6em] h-1.5 w-1.5 -translate-y-1/2 bg-accent" />
                  <Highlight text={a.text} />
                  {a.attribution === "team" && (
                    <Tag variant="ghost" tone="muted" size="sm" className="ml-2 align-middle">
                      Team
                    </Tag>
                  )}
                </li>
              ))}
            </ul>

            {experience.clients && experience.clients.length > 0 && (
              <div className="mt-3">
                <div className="flex flex-wrap gap-1.5">
                  {experience.clients.map((c) => (
                    <Tag
                      key={c.name}
                      variant="ghost"
                      tone={c.relationship === "customer" ? "default" : "muted"}
                      size="sm"
                      title={c.relationship === "customer" ? "Customer" : "Prospective, sales conversation"}
                    >
                      {c.name}
                      <span className="text-ink-3">· {c.relationship === "customer" ? "customer" : "prospect"}</span>
                    </Tag>
                  ))}
                </div>
                {experience.clientsDisclaimer && (
                  <p className="mt-2 text-fine text-ink-3">{experience.clientsDisclaimer}</p>
                )}
              </div>
            )}

            <div className="mt-3 border-t border-line-faint pt-2">
              <TagRow label="Stack" items={experience.stack} variant="ghost" />
            </div>
          </div>
        </div>
      </Panel>
    </Reveal>
  );
}
