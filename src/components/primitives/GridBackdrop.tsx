export interface GridBackdropProps {
  /** "page" is fixed + persists behind the whole scroll; "hero" is
   *  absolutely positioned to the hero section and adds the accent bloom. */
  variant?: "page" | "hero";
  /** Radially masks the grid so it fades toward the edges. */
  fade?: boolean;
}

export function GridBackdrop({ variant = "page", fade = false }: GridBackdropProps) {
  const position = variant === "page" ? "fixed" : "absolute";

  return (
    <div
      aria-hidden
      className={`${position} inset-0 -z-10 hud-grid pointer-events-none`}
      style={
        fade
          ? {
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            }
          : undefined
      }
    >
      {variant === "hero" && (
        <div
          className="absolute -top-24 right-0 h-[36rem] w-[36rem] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
      )}
    </div>
  );
}
