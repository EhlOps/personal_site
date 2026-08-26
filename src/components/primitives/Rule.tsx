import { cn } from "@/lib/utils";
import { MicroLabel } from "./MicroLabel";

export interface RuleProps {
  orientation?: "horizontal" | "vertical";
  tone?: "faint" | "line" | "strong" | "accent";
  label?: string;
  /** Renders the line as a ruler-tick texture instead of a solid hairline. */
  ticks?: boolean;
  className?: string;
}

const tones = {
  faint: "border-line-faint",
  line: "border-line",
  strong: "border-line-strong",
  accent: "border-accent-line",
};

export function Rule({ orientation = "horizontal", tone = "line", label, ticks = false, className }: RuleProps) {
  if (orientation === "vertical") {
    return <div className={cn("h-full w-px", tones[tone].replace("border-", "bg-"), className)} aria-hidden />;
  }

  const lineClass = ticks
    ? "h-1.5 flex-1 bg-[repeating-linear-gradient(to_right,var(--color-line-strong)_0_1px,transparent_1px_12px)] bg-bottom bg-no-repeat [background-size:100%_1px]"
    : cn("h-px flex-1 border-t", tones[tone]);

  if (!label) {
    return <hr className={cn("border-t", tones[tone], className)} />;
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <MicroLabel size="sm" tone="faint" className="shrink-0">
        {label}
      </MicroLabel>
      <div className={lineClass} aria-hidden />
    </div>
  );
}
