"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { cn } from "@/lib/utils/cn";

const IDS = navItems.map((n) => n.id);

export function Navbar() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(IDS);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, mass: 0.2 });

  /* State A -> State B at 80px (§3) */
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll lock + Esc + focus restoration for the mobile overlay */
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll progress — 2px accent line (§3) */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
      />

      <header className="fixed inset-x-0 top-0 z-40 flex justify-center">
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center transition-all duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            compact
              ? "mt-3 w-[min(56rem,calc(100%-1.5rem))] gap-2 rounded-full border border-line bg-surface-1/72 px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl md:px-4"
              : "mt-0 w-full max-w-[1320px] gap-6 border-b border-transparent px-5 py-6 md:px-20 md:py-7",
          )}
        >
          <a
            href="#home"
            className="font-mono text-xs uppercase tracking-[0.18em] text-text-primary transition-colors hover:text-accent"
          >
            {compact ? "RM" : profile.name}
          </a>

          {/* Desktop links */}
          <ul className="ml-auto hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    {...(isActive ? { "aria-current": "true" as const } : {})}
                    className={cn(
                      "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                      isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                        transition={{ type: "spring", stiffness: 320, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop actions */}
          <div className="ml-2 hidden items-center gap-2 md:flex">
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="rounded-full p-2 text-text-secondary transition-colors hover:bg-surface-2 hover:text-text-primary"
            >
              <Linkedin size={16} aria-hidden="true" />
            </a>
            <a
              href={profile.contact.resume}
              download=""
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-text-primary transition-colors hover:border-line-strong hover:bg-surface-2"
            >
              <Download size={14} aria-hidden="true" />
              <span className={compact ? "sr-only-custom md:not-sr-only" : ""}>Résumé</span>
            </a>
          </div>

          {/* Mobile trigger */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
            className="ml-auto rounded-full p-2 text-text-primary md:hidden"
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg px-5 py-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-primary">
                {profile.name}
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="rounded-full p-2 text-text-primary"
                autoFocus
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-16 flex flex-1 flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 py-3"
                  >
                    <span className="font-mono text-[0.6875rem] tracking-[0.18em] text-text-tertiary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl tracking-[-0.02em] text-text-primary">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-line-subtle pt-6">
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm text-text-primary"
              >
                <Linkedin size={16} aria-hidden="true" /> LinkedIn
              </a>
              <a
                href={profile.contact.resume}
                download=""
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm text-text-inverse"
              >
                <Download size={16} aria-hidden="true" /> Download Résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
