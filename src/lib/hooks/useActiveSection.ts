"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-spy via a thin "scan line" band just under the header, rather than
 * naive "first intersecting entry" — which flickers because several
 * sections can intersect at once. Picks whichever observed section is
 * closest to the scan line, with a bottom-of-page override so a short final
 * section can still activate.
 *
 * `ids` must be a stable module-level reference (see src/lib/nav.ts) or this
 * effect re-runs on every render.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const visible = new Map<string, number>();
    let ticking = false;

    const pick = () => {
      ticking = false;
      const doc = document.documentElement;

      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        setActive(ids[ids.length - 1]);
        return;
      }
      if (visible.size === 0) return;

      let best: string | null = null;
      let bestTop = Infinity;
      visible.forEach((top, id) => {
        if (top < bestTop) {
          bestTop = top;
          best = id;
        }
      });
      setActive(best);
    };

    const schedule = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(pick);
    };

    const headerH =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) * 16 || 64;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, Math.abs(entry.boundingClientRect.top));
          else visible.delete(entry.target.id);
        }
        schedule();
      },
      { rootMargin: `-${headerH}px 0px -72% 0px`, threshold: 0 },
    );

    els.forEach((el) => io.observe(el));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    schedule();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  return active;
}
