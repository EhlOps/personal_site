import { cn } from "@/lib/utils";

export interface MicroLabelProps {
  children: React.ReactNode;
  as?: "span" | "div" | "p" | "dt" | "h3" | "h4";
  size?: "sm" | "md" | "lg";
  tone?: "muted" | "ink" | "accent" | "faint";
  dot?: boolean;
  className?: string;
}

const sizes = { sm: "text-micro-sm", md: "text-micro", lg: "text-micro-lg" };
// "faint" reads as ink-3 (5.2:1, AA); ink-4 (3.1:1) fails contrast at these
// sizes and is reserved for genuinely decorative or >=24px text only.
const tones = { muted: "text-ink-2", ink: "text-ink", accent: "text-accent", faint: "text-ink-3" };

export function MicroLabel({
  children,
  as: As = "span",
  size = "md",
  tone = "muted",
  dot = false,
  className,
}: MicroLabelProps) {
  return (
    <As className={cn("font-mono uppercase", sizes[size], tones[tone], className)}>
      {dot && <span aria-hidden className="mr-1.5 inline-block h-1 w-1 bg-accent align-middle" />}
      {children}
    </As>
  );
}
