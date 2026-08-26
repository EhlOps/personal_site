import { cn } from "@/lib/utils";

export type BracketCorner = "tl" | "tr" | "bl" | "br";

export interface BracketsProps {
  corners?: BracketCorner[];
  size?: "sm" | "md" | "lg";
  tone?: "line" | "accent" | "dim";
  /** Adds the class hook consumers use for a group-hover accent transition. */
  interactive?: boolean;
  /** Plays a one-shot draw-in animation on mount. */
  animate?: boolean;
}

const sizes = { sm: "h-2.5 w-2.5", md: "h-3.5 w-3.5", lg: "h-5 w-5" };
const tones = { line: "border-line-strong", accent: "border-accent", dim: "border-ink-4" };

const cornerStyles: Record<BracketCorner, string> = {
  tl: "left-0 top-0 border-l border-t origin-top-left",
  tr: "right-0 top-0 border-r border-t origin-top-right",
  bl: "left-0 bottom-0 border-l border-b origin-bottom-left",
  br: "right-0 bottom-0 border-r border-b origin-bottom-right",
};

export function Brackets({
  corners = ["tl", "tr", "bl", "br"],
  size = "md",
  tone = "line",
  interactive = false,
  animate = false,
}: BracketsProps) {
  return (
    <>
      {corners.map((corner) => (
        <span
          key={corner}
          aria-hidden
          className={cn(
            "pointer-events-none absolute",
            sizes[size],
            cornerStyles[corner],
            tones[tone],
            interactive && "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-hud)] group-hover:border-accent",
            animate && "animate-[bracket-in_500ms_var(--ease-hud)_200ms_both]",
          )}
        />
      ))}
    </>
  );
}
