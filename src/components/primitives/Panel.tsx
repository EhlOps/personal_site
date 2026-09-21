import { cn } from "@/lib/utils";
import { Brackets, type BracketCorner } from "./Brackets";

export interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "article" | "aside" | "li" | "section";
  tone?: "raised" | "base" | "sunken" | "ghost";
  brackets?: boolean | BracketCorner[];
  bracketSize?: "sm" | "md" | "lg";
  bordered?: boolean;
  interactive?: boolean;
  padded?: boolean | "sm" | "lg";
  children: React.ReactNode;
}

const toneClasses = {
  raised: "bg-raised",
  base: "bg-base",
  sunken: "bg-sunken",
  ghost: "bg-transparent",
};

const paddingClasses = {
  sm: "p-4 sm:p-5",
  true: "p-4 sm:p-5 lg:p-6",
  lg: "p-5 sm:p-6 lg:p-8",
};

export function Panel({
  as: As = "div",
  tone = "raised",
  brackets = false,
  bracketSize = "md",
  bordered = true,
  interactive = false,
  padded = true,
  className,
  children,
  ...rest
}: PanelProps) {
  const corners = brackets === true ? undefined : brackets || undefined;
  const Tag = As as React.ElementType;

  return (
    <Tag
      className={cn(
        "relative",
        interactive && "group",
        toneClasses[tone],
        bordered && "border border-line",
        interactive && "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-hud)] hover:border-line-strong",
        padded && paddingClasses[padded === true ? "true" : padded],
        className,
      )}
      {...rest}
    >
      {brackets && <Brackets corners={corners} size={bracketSize} interactive={interactive} />}
      {children}
    </Tag>
  );
}
