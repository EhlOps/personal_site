import type { CompanyContext as CompanyContextType } from "@/data";
import { getBrand } from "@/data";
import { MicroLabel } from "../primitives/MicroLabel";
import { LogoMark } from "../primitives/LogoMark";

export interface CompanyContextProps {
  context: CompanyContextType;
  companyName: string;
}

function dedupeSources(facts: CompanyContextType["facts"]) {
  const seen = new Map<string, NonNullable<CompanyContextType["facts"][number]["source"]>>();
  for (const f of facts) {
    if (f.source && !seen.has(f.source.url)) seen.set(f.source.url, f.source);
  }
  return [...seen.values()];
}

/**
 * The mechanism behind the whole attribution model: this block is
 * recessed (sunken, darker than the panel it sits in), monospace, muted,
 * and NEVER touches the accent color — deliberately not an accent bar,
 * which would read as "this is Sam's achievement." A reader learns within
 * one scroll: amber = Sam did this, grey mono in the well = background.
 */
export function CompanyContext({ context, companyName }: CompanyContextProps) {
  const primary = context.facts.filter((f) => f.weight <= 2);
  const deep = context.facts.filter((f) => f.weight === 3);

  return (
    <aside className="border-l-2 border-line-strong bg-sunken p-4 sm:p-5">
      <div className="flex items-baseline justify-between gap-3">
        <MicroLabel as="h4" size="sm" tone="faint">
          Org profile
          <span className="sr-only"> — context about {companyName}, not my own work</span>
        </MicroLabel>
      </div>

      <p className="mt-2 text-sm text-ink-3">{context.what}</p>

      <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {primary.map((fact) => (
          <div key={fact.label} className="flex items-baseline gap-1.5">
            <dt className="font-mono text-micro-sm text-ink-3">{fact.label}</dt>
            <dd className="font-mono text-micro-lg text-ink-2" title={fact.detail}>
              {fact.value}
              {fact.attribution === "team" && (
                <span
                  className="ml-1.5 text-micro-sm text-ink-3"
                  title="Achieved with the full team, not by me alone"
                >
                  (team)
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {primary.some((f) => f.detail) && (
        <ul className="mt-2 space-y-1">
          {primary
            .filter((f) => f.detail)
            .map((f) => (
              <li key={f.label} className="text-micro-lg text-ink-3">
                <span className="text-ink-3">{f.label}:</span> {f.detail}
              </li>
            ))}
        </ul>
      )}

      {deep.length > 0 && (
        <details className="mt-2 group">
          <summary className="cursor-pointer list-none font-mono text-micro-sm text-ink-3 transition-colors hover:text-ink-2">
            More <span aria-hidden className="inline-block transition-transform group-open:rotate-180">▾</span>
          </summary>
          <ul className="mt-2 space-y-1">
            {deep.map((f) => (
              <li key={f.label} className="text-micro-lg text-ink-3">
                <span className="text-ink-3">{f.label}:</span> {f.value}
                {f.detail && <> — {f.detail}</>}
              </li>
            ))}
          </ul>
        </details>
      )}

      {context.markIds && context.markIds.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line-faint pt-3">
          {context.markCaption && (
            <MicroLabel size="sm" tone="faint">
              {context.markCaption}
            </MicroLabel>
          )}
          {context.markIds.map((id) => (
            <LogoMark key={id} brand={getBrand(id)} height={14} />
          ))}
        </div>
      )}

      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-line-faint pt-3">
        {dedupeSources(context.facts).map((source) => (
          <li key={source.url}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-micro-sm text-ink-3 underline decoration-line-strong underline-offset-2 transition-colors hover:text-ink-2"
            >
              {source.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
