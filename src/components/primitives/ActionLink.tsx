import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "../icons";

export interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "inline" | "block" | "row";
  meta?: string;
  className?: string;
}

export function ActionLink({ href, children, external, variant = "inline", meta, className }: ActionLinkProps) {
  const isExternal = external ?? (href.startsWith("http") || href.startsWith("mailto:"));

  if (variant === "row") {
    return (
      <a
        href={href}
        className={cn(
          "group flex min-h-14 items-center justify-between gap-4 py-4 transition-colors duration-[var(--duration-fast)] hover:bg-hover",
          className,
        )}
        {...(isExternal && href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span className="font-mono text-micro uppercase text-ink-3 transition-colors duration-[var(--duration-fast)] group-hover:text-accent">
          {children}
        </span>
        {meta && (
          <span className="flex items-center gap-1.5 text-sm text-ink-2 transition-colors duration-[var(--duration-fast)] group-hover:text-ink">
            {meta}
            {isExternal && (
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            )}
          </span>
        )}
        {isExternal && href.startsWith("http") && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-1 text-ink-2 transition-colors duration-[var(--duration-fast)] hover:text-accent",
        variant === "block" && "block",
        className,
      )}
      {...(isExternal && href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {isExternal && href.startsWith("http") && (
        <>
          <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </>
      )}
    </a>
  );
}
