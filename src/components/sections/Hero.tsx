import { site } from "@/data";
import { Container } from "../primitives/Container";
import { GridBackdrop } from "../primitives/GridBackdrop";
import { AvailabilityBadge } from "../primitives/AvailabilityBadge";
import { MetaRow } from "../primitives/MetaRow";
import { Brackets } from "../primitives/Brackets";
import { Reveal } from "../primitives/Reveal";
import { LinkButton } from "../primitives/Button";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[88svh] items-center overflow-hidden">
      <GridBackdrop variant="hero" fade />
      <Container className="w-full py-28 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal>
              <AvailabilityBadge />
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-6 text-display text-ink">Sam Ehlers</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-[46ch] text-lead text-ink-2">{site.tagline}</p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9">
                <MetaRow
                  columns={4}
                  size="sm"
                  items={[
                    { label: "BASED IN", value: site.location },
                    { label: "FOCUS", value: "Security · ML · Embedded" },
                    { label: "EDU", value: "Northeastern CS + Business" },
                    { label: "GRAD", value: "May 2027" },
                  ]}
                />
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-3">
                <LinkButton href="#experience" variant="outline">
                  View experience ↓
                </LinkButton>
                <LinkButton href={`mailto:${site.email}`} variant="ghost">
                  Email
                </LinkButton>
                <LinkButton href={site.socials[0].href} variant="ghost">
                  GitHub
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-4 lg:col-start-9">
            <Reveal delay={120} className="mx-auto max-w-[220px] sm:max-w-xs lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden border border-line bg-raised">
                <Brackets size="lg" animate />
                <img
                  src="/portrait-720.jpg"
                  srcSet="/portrait-400.jpg 400w, /portrait-720.jpg 720w"
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 280px, 200px"
                  width={720}
                  height={900}
                  alt="Sam Ehlers"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ filter: "grayscale(0.15) contrast(1.05)" }}
                />
                <div aria-hidden className="absolute inset-0 bg-accent mix-blend-overlay opacity-[0.08]" />
                <div aria-hidden className="scanlines pointer-events-none absolute inset-0 opacity-40" />
              </div>
              <p className="mt-3 text-center font-mono text-micro-sm text-ink-3">
                SAM EHLERS · {site.location.toUpperCase()} · {site.coordinates}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>

      <div aria-hidden className="absolute bottom-8 left-5 hidden items-center gap-3 sm:left-8 lg:left-12 lg:flex">
        <span className="font-mono text-micro-sm text-ink-3">SCROLL</span>
        <span className="relative h-8 w-px overflow-hidden bg-line">
          <span className="absolute inset-x-0 top-0 h-3 w-px animate-[scroll-cue_2s_ease-in-out_infinite] bg-accent" />
        </span>
      </div>
    </section>
  );
}
