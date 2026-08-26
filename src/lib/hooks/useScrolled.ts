"use client";

import { useEffect, useState } from "react";

/** True once the page has scrolled past `threshold` px. rAF-throttled. */
export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const check = () => {
      ticking = false;
      setScrolled(window.scrollY > threshold);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
