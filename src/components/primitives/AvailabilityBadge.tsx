import { cn } from "@/lib/utils";
import { site } from "@/data";

export interface AvailabilityBadgeProps {
  compact?: boolean;
  href?: string;
  className?: string;
}

export function AvailabilityBadge({ compact = false, href, className }: AvailabilityBadgeProps) {
  const { availability } = site;

  const content = (
    <span className={cn("inline-flex items-center gap-2.5 font-mono uppercase", className)}>
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-35" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className={cn("text-ink", compact ? "text-micro-sm" : "text-micro")}>{availability.label}</span>
      <span className={cn("text-accent", compact ? "text-micro-sm" : "text-micro")}>{availability.value}</span>
      {!compact && <span className="hidden text-ink-3 sm:inline">{availability.detail}</span>}
    </span>
  );

  if (href) {
    return (
      <a href={href} className="transition-opacity duration-[var(--duration-fast)] hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}
