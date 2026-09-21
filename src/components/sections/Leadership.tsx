import { leadership } from "@/data";
import { Section } from "../primitives/Section";
import { LeadershipItem } from "./LeadershipItem";

export function Leadership() {
  return (
    <Section id="leadership" index="04" eyebrow="Leadership" title="Running the operations side">
      <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-x-12">
        {leadership.map((role, i) => (
          <LeadershipItem
            key={role.id}
            role={role}
            delay={Math.min(i * 60, 240)}
            className={leadership.length % 2 === 1 && i === leadership.length - 1 ? "lg:col-span-2" : undefined}
          />
        ))}
      </div>
    </Section>
  );
}
