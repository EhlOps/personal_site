import { cn } from "@/lib/utils";

export interface TagProps {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  tone?: "default" | "accent" | "muted";
  size?: "sm" | "md";
  dot?: boolean;
  title?: string;
  className?: string;
}

// Literal lookup maps only — Tailwind v4 can't detect dynamically built
// class strings like `bg-${tone}`.
const variantTone = {
  solid: {
    default: "bg-hover text-ink border border-transparent",
    accent: "bg-accent text-on-accent border border-transparent",
    muted: "bg-hover text-ink-3 border border-transparent",
  },
  outline: {
    default: "border border-line text-ink-2",
    accent: "border border-accent-line text-accent",
    muted: "border border-line text-ink-3",
  },
  ghost: {
    default: "text-ink-2",
    accent: "text-accent",
    muted: "text-ink-3",
  },
};

const sizes = { sm: "px-2 py-0.5 text-micro", md: "px-2.5 py-1 text-micro-lg" };

export function Tag({ children, variant = "outline", tone = "default", size = "sm", dot, title, className }: TagProps) {
  return (
    <span
      title={title}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xs font-mono uppercase",
        sizes[size],
        variantTone[variant][tone],
        className,
      )}
    >
      {dot && <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />}
      {children}
    </span>
  );
}
