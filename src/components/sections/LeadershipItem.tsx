import type { Experience } from "@/data";
import { getBrand } from "@/data";
import { LogoMark } from "../primitives/LogoMark";
import { Highlight } from "../primitives/Highlight";
import { Reveal } from "../primitives/Reveal";
import { CompanyContext } from "./CompanyContext";

export function LeadershipItem({ role, delay = 0 }: { role: Experience; delay?: number }) {
  const brand = getBrand(role.brandId);

  return (
    <Reveal delay={delay}>
      <div className="border-l-2 border-accent-deep pl-5">
        <div className="flex flex-wrap items-center gap-2">
          <LogoMark brand={brand} height={18} />
          <span className="font-mono text-micro text-ink-3">{role.displayPeriod}</span>
        </div>
        <h3 className="mt-2 text-h3 text-ink">{role.role}</h3>
        <p className="mt-1 text-sm text-ink-2">{role.summary}</p>

        <ul className="mt-4 space-y-2">
          {role.achievements.map((a, i) => (
            <li key={i} className="relative pl-5 text-sm text-ink">
              <span aria-hidden className="absolute left-0 top-[0.6em] h-1.5 w-1.5 -translate-y-1/2 bg-accent" />
              <Highlight text={a.text} />
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <CompanyContext context={role.context} companyName={brand.name} />
        </div>

        <p className="mt-3 text-micro-sm text-ink-3">
          Firmware I built for this team is covered under{" "}
          <a href="#projects" className="underline decoration-line-strong underline-offset-2 hover:text-ink-2">
            Projects → Embedded / Vehicle
          </a>
          .
        </p>
      </div>
    </Reveal>
  );
}
