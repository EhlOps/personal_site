import { CountUp } from "./CountUp";
import { MicroLabel } from "./MicroLabel";

export interface StatTileProps {
  value: string;
  numeric?: number;
  decimals?: number;
  prefix?: string;
  unit?: string;
  label: string;
  /** Mandatory in practice — a naked number is a template, a number with a
   *  dated chain of custody ("WHOOP · 2026") is a claim. See taste rules. */
  footnote?: string;
  animate?: boolean;
}

export function StatTile({ value, numeric, decimals = 0, prefix, unit, label, footnote, animate = true }: StatTileProps) {
  return (
    <div className="flex flex-col gap-3 p-6 sm:p-7">
      <MicroLabel size="sm" tone="faint">
        {label}
      </MicroLabel>
      <div className="flex items-baseline font-mono text-stat text-accent">
        {prefix && <span>{prefix}</span>}
        {animate && typeof numeric === "number" ? (
          <CountUp value={numeric} decimals={decimals} />
        ) : (
          <span data-numeric>{value}</span>
        )}
        {unit && <span className="ml-1.5 text-[0.45em] font-normal text-ink-2">{unit}</span>}
      </div>
      {footnote && (
        <MicroLabel size="sm" tone="faint" className="mt-auto">
          {footnote}
        </MicroLabel>
      )}
    </div>
  );
}
