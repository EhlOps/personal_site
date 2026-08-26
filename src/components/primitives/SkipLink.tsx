export function SkipLink() {
  return (
    <a
      href="#content"
      className="fixed left-3 top-3 z-[100] -translate-y-16 rounded-sm border border-line-strong bg-raised px-4 py-2 font-mono text-micro uppercase text-ink transition-transform duration-[var(--duration-fast)] focus-visible:translate-y-0"
    >
      Skip to content
    </a>
  );
}
