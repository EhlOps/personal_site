import { experience, getBrand } from "@/data";
import { Section } from "../primitives/Section";
import { Panel } from "../primitives/Panel";
import { Reveal } from "../primitives/Reveal";
import { LogoMark } from "../primitives/LogoMark";
import { MicroLabel } from "../primitives/MicroLabel";

// Presentation-only grouping (like Skills.tsx's own `clusters`), not résumé
// fact data, so it lives here rather than in src/data/. Split into two
// panels rather than one 7-column grid: 7 doesn't divide evenly by any
// reasonable column count, and a single grid would leave a dead cell in a
// trailing partial row (the exact bug fixed in the Leadership section) plus
// a broken divide-x border on the first item of that row.
const softwareClusters = [
  { label: "FULL-STACK", items: ["Front-end", "Back-end", "APIs", "Databases"] },
  { label: "SYSTEMS", items: ["Embedded", "Algorithms", "OOP"] },
  { label: "AI / ML", items: ["Classification Models", "Agents", "MCPs", "Harnesses"] },
  { label: "CLOUD", items: ["AWS", "GCP", "Oracle Cloud"] },
];

const disciplineClusters = [
  { label: "MECHANICAL", items: ["CAD Design", "CNC Machining", "Prototyping"] },
  { label: "ELECTRICAL", items: ["PCB Design", "Circuit Design", "Battery Systems"] },
  { label: "OPERATIONS", items: ["Program Management", "Cross-functional Leadership", "OKRs & KPIs"] },
];

function ClusterCell({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-3 p-5 sm:p-6">
      <MicroLabel size="sm" tone="faint">
        {label}
      </MicroLabel>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-ink">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Impact() {
  return (
    <Section
      id="impact"
      index="01"
      eyebrow="Impact"
      title="The 60-second version"
      lede="What I actually build, across the stack."
    >
      <Reveal>
        <Panel brackets bracketSize="md" padded={false} className="overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-line lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {softwareClusters.map((cluster) => (
              <ClusterCell key={cluster.label} label={cluster.label} items={cluster.items} />
            ))}
          </div>
        </Panel>
      </Reveal>

      <Reveal delay={40} className="mt-4">
        <Panel brackets bracketSize="md" padded={false} className="overflow-hidden">
          <div className="grid grid-cols-1 divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {disciplineClusters.map((cluster) => (
              <ClusterCell key={cluster.label} label={cluster.label} items={cluster.items} />
            ))}
          </div>
        </Panel>
      </Reveal>

      <Reveal delay={80} className="mt-7">
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
                className="opacity-60 transition-opacity duration-[var(--duration-fast)] hover:opacity-100"
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
