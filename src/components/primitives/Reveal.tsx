"use client";

import { useInView } from "@/lib/hooks/useInView";

export interface RevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  /** ms, conventionally capped at 240 across a staggered group. */
  delay?: number;
  once?: boolean;
  className?: string;
}

/**
 * A thin client wrapper that toggles a data-attribute the CSS in
 * globals.css animates. Its `children` stay server components — React
 * passes them through as an opaque prop rather than requiring them to cross
 * the client boundary, which is what keeps this at ~1KB instead of pulling
 * an animation library (and all the résumé data it would have to serialize)
 * into the client bundle.
 */
export function Reveal({ children, as: As = "div", delay = 0, once = true, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once, rootMargin: "0px 0px -12% 0px" });
  const Tag = As as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal={inView ? "in" : "idle"}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
