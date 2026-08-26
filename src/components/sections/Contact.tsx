import { site } from "@/data";
import { Section } from "../primitives/Section";
import { Panel } from "../primitives/Panel";
import { AvailabilityBadge } from "../primitives/AvailabilityBadge";
import { ActionLink } from "../primitives/ActionLink";
import { CopyEmail } from "./CopyEmail";

export function Contact() {
  return (
    <Section id="contact" index="06" eyebrow="Contact" title="Let's build something">
      <Panel brackets bracketSize="lg" padded="lg">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="max-w-[36ch] text-lead text-ink-2">
              I&rsquo;m looking for Summer 2027 opportunities in security, ML, or embedded systems.
            </p>
            <p className="mt-4 max-w-[42ch] text-sm text-ink-3">
              Outside of work I&rsquo;m usually at the piano, on a basketball court, or under a car — most
              recently the one attached to a dynamometer in my garage.
            </p>
            <div className="mt-8">
              <AvailabilityBadge />
            </div>
          </div>

          <div className="divide-y divide-line border-t border-line">
            <div className="flex items-center justify-between py-4">
              <a
                href={`mailto:${site.email}`}
                className="group flex flex-1 items-center justify-between gap-4 transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                <span className="font-mono text-micro uppercase text-ink-3 transition-colors duration-[var(--duration-fast)] group-hover:text-accent">
                  Email
                </span>
                <span className="text-sm text-ink-2 transition-colors duration-[var(--duration-fast)] group-hover:text-ink">
                  {site.email}
                </span>
              </a>
              <CopyEmail email={site.email} />
            </div>
            {site.socials.map((s) => (
              <ActionLink key={s.id} href={s.href} variant="row" meta={s.handle}>
                {s.label}
              </ActionLink>
            ))}
          </div>
        </div>
      </Panel>
    </Section>
  );
}
