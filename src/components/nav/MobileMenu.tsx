"use client";

import { useEffect, useRef } from "react";
import { SECTIONS } from "@/lib/nav";
import { site } from "@/data";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { AvailabilityBadge } from "../primitives/AvailabilityBadge";
import { socialIcons } from "./socialIcons";

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeId: string | null;
}

export function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const triggerFocusRef = useRef<HTMLElement | null>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (open) {
      triggerFocusRef.current = document.activeElement as HTMLElement;
      firstLinkRef.current?.focus();
    } else {
      triggerFocusRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-40 flex flex-col justify-center bg-base/98 backdrop-blur-xl lg:hidden"
    >
      <nav aria-label="Primary" className="flex flex-col gap-1 px-8">
        {SECTIONS.map((s, i) => (
          <a
            key={s.id}
            ref={i === 0 ? firstLinkRef : undefined}
            href={`#${s.id}`}
            onClick={onClose}
            aria-current={activeId === s.id ? "true" : undefined}
            className={`flex items-baseline gap-4 py-3 text-h2 transition-colors duration-[var(--duration-fast)] ${
              activeId === s.id ? "text-accent" : "text-ink hover:text-accent"
            }`}
          >
            <span aria-hidden className="font-mono text-micro text-ink-3">
              {s.index}
            </span>
            {s.label}
          </a>
        ))}
      </nav>
      <div className="mt-10 flex flex-col items-start gap-6 px-8">
        <AvailabilityBadge />
        <div className="flex gap-5">
          {site.socials.map((s) => {
            const Icon = socialIcons[s.id];
            return (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center text-ink-2 transition-colors duration-[var(--duration-fast)] hover:text-accent"
              >
                {Icon && <Icon className="h-5 w-5" />}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
