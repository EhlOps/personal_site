import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  index: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}

export function NavLink({ href, index, label, active, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className={cn(
        "group relative flex items-center gap-1 py-1 font-mono text-micro uppercase transition-colors duration-[var(--duration-fast)] xl:gap-1.5",
        active ? "text-accent" : "text-ink-3 hover:text-ink",
      )}
    >
      <span aria-hidden>{index}</span>
      {label}
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-[var(--duration-base)] ease-[var(--ease-hud)]",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </a>
  );
}
