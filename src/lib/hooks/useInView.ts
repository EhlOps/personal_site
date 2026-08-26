"use client";

import { useEffect, useRef, useState } from "react";

export interface UseInViewOptions {
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
}

export function useInView<T extends HTMLElement>({ once = true, rootMargin = "0px", threshold = 0 }: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, inView };
}
