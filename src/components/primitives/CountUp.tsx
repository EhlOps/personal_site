"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/lib/hooks/useInView";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export interface CountUpProps {
  value: number;
  decimals?: number;
  duration?: number;
}

/**
 * Resets to 0 on mount before animating up, which would flash visibly if
 * used above the fold — so this must never be placed in the hero. Impact
 * (where it's actually used) is always below the fold, so the reset is
 * invisible in practice.
 */
export function CountUp({ value, decimals = 0, duration = 900 }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true, rootMargin: "0px 0px -20% 0px" });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(value); // SSR / no-JS renders the final value
  const started = useRef(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      if (!reduced) setDisplay(0);
    }
  }, [reduced]);

  useEffect(() => {
    if (!inView || reduced || started.current) return;
    started.current = true;

    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value, duration]);

  return (
    <span ref={ref} data-numeric>
      {display.toFixed(decimals)}
    </span>
  );
}
