"use client";

import { useEffect } from "react";

/** Locks body scroll while `locked` is true, compensating for scrollbar width. */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const { overflow, paddingRight } = document.body.style;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [locked]);
}
