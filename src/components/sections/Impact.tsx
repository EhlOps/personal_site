import { heroMetrics, experience, getBrand } from "@/data";
import { Section } from "../primitives/Section";
import { Panel } from "../primitives/Panel";
import { StatTile } from "../primitives/StatTile";
import { Reveal } from "../primitives/Reveal";
import { LogoMark } from "../primitives/LogoMark";
import { MicroLabel } from "../primitives/MicroLabel";

export function Impact() {
  return (
    <Section
      id="impact"
      index="01"
      eyebrow="Impact"
      title="The 60-second version"
      lede="Four numbers that are mine, each with a dated source — not the company's."
    >
      <Reveal>
        <Panel brackets bracketSize="md" padded={false} className="overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-y divide-line lg:grid-cols-4 lg:divide-y-0">
            {heroMetrics.map((m) => (
              <StatTile
                key={m.id}
                value={m.value}
                numeric={m.numeric}
                decimals={m.decimals}
                prefix={m.prefix}
                unit={m.unit}
                label={m.label}
                footnote={m.substantiation}
              />
            ))}
          </div>
        </Panel>
      </Reveal>

      <Reveal delay={80} className="mt-10">
        <MicroLabel size="sm" tone="faint" className="mb-4 block">
          Where I&rsquo;ve shipped
        </MicroLabel>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          {experience.map((e) => {
            const brand = getBrand(e.brandId);
            return (
              <a
                key={e.id}
                href="#experience"
                className="group opacity-70 grayscale transition-all duration-[var(--duration-fast)] hover:opacity-100 hover:grayscale-0"
              >
                <LogoMark brand={brand} height={22} />
              </a>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
