import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-bright border border-transparent",
  outline: "border border-accent-line text-accent hover:bg-accent-wash",
  ghost: "border border-transparent text-ink-2 hover:text-ink hover:border-line",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-micro",
  md: "px-4 py-2.5 text-micro-lg",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-mono uppercase transition-colors duration-[var(--duration-fast)] ease-[var(--ease-hud)]";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({ variant = "outline", size = "md", className, ...rest }: ButtonProps) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...rest} />;
}

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
}

export function LinkButton({ variant = "outline", size = "md", className, href, ...rest }: LinkButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    />
  );
}
