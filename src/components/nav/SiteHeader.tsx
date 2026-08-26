"use client";

import { useEffect, useState } from "react";
import { SECTIONS, SECTION_IDS } from "@/lib/nav";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { AvailabilityBadge } from "../primitives/AvailabilityBadge";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { MenuIcon, CloseIcon } from "../icons";

export function SiteHeader() {
  const active = useActiveSection(SECTION_IDS);
  const scrolled = useScrolled(80);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const main = document.getElementById("content");
    if (!main) return;
    if (menuOpen) main.setAttribute("inert", "");
    else main.removeAttribute("inert");
    return () => main.removeAttribute("inert");
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-[background-color,border-color] duration-[var(--duration-base)]",
          scrolled ? "border-b border-line bg-base/78 backdrop-blur-xl" : "border-b border-transparent",
        )}
        style={{ height: "var(--header-h)" }}
      >
        <div className="mx-auto flex h-full max-w-[var(--container-content)] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="border border-line-strong px-2.5 py-1 font-mono text-micro-lg uppercase text-ink transition-colors duration-[var(--duration-fast)] hover:border-accent hover:text-accent"
          >
            Sam Ehlers
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {SECTIONS.map((s) => (
              <NavLink key={s.id} href={`#${s.id}`} index={s.index} label={s.label} active={active === s.id} />
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <AvailabilityBadge compact className="hidden md:inline-flex" />
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            >
              {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <ScrollProgress />
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={active} />
    </>
  );
}

function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setPct(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-transparent">
      <div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${pct})` }} />
    </div>
  );
}
