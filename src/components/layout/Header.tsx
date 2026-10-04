"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <HeaderInner key={pathname} scrolled={scrolled} />
    </div>
  );
}

function HeaderInner({ scrolled }: { scrolled: boolean }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const toggleDropdown = (label: string) =>
    setOpenMenu((current) => (current === label ? null : label));

  return (
    <div ref={headerRef}>
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 -z-10 bg-white lg:hidden"
          >
            <MobileNav
              openMenu={openMenu}
              onToggle={toggleDropdown}
              onNavigate={() => setMobileOpen(false)}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <header
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-line bg-white/85 backdrop-blur-md"
            : "border-transparent bg-white",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[76rem] items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={() => toggleDropdown(item.label)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      pathname.startsWith(item.href)
                        ? "text-ink"
                        : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "size-4 transition-transform duration-200",
                        openMenu === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openMenu === item.label ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-[0_32px_64px_-32px_rgba(10,11,13,0.25)]">
                          <Link
                            href={item.href}
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface"
                          >
                            All {item.label.toLowerCase()}
                          </Link>
                          <div className="my-1 h-px bg-line" />
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group block rounded-xl px-4 py-3 transition-colors hover:bg-surface"
                            >
                              <span className="block text-sm font-medium text-ink">
                                {child.label}
                              </span>
                              <span className="mt-0.5 block text-[13px] leading-snug text-faint">
                                {child.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    pathname.startsWith(item.href)
                      ? "text-ink"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="accent"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Book a consultation
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface lg:hidden"
            >
              {mobileOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

function MobileNav({
  openMenu,
  onToggle,
  onNavigate,
}: {
  openMenu: string | null;
  onToggle: (label: string) => void;
  onNavigate: () => void;
}) {
  const pathname = usePathname();

  return (
    <nav
      id="mobile-nav"
      aria-label="Mobile"
      className="scrollbar-none h-full overflow-y-auto px-5 pb-10 pt-6 sm:px-8"
    >
      <ul className="divide-y divide-line">
        {navigation.map((item) => {
          const isOpen = openMenu === item.label;
          const active = pathname.startsWith(item.href);
          return (
            <li key={item.label} className="py-1">
              {item.children ? (
                <div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => onToggle(item.label)}
                    className="flex w-full items-center justify-between rounded-xl px-2 py-4 text-left"
                  >
                    <span
                      className={cn(
                        "text-lg font-medium",
                        active ? "text-ink" : "text-muted",
                      )}
                    >
                      {item.label}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        "size-5 text-faint transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <li>
                          <Link
                            href={item.href}
                            onClick={onNavigate}
                            className="block rounded-xl px-2 py-2.5 text-sm font-medium text-ink hover:bg-surface"
                          >
                            All {item.label.toLowerCase()}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onNavigate}
                              className="block rounded-xl px-2 py-2.5 text-sm text-muted hover:bg-surface hover:text-ink"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "block rounded-xl px-2 py-4 text-lg font-medium",
                    active ? "text-ink" : "text-muted",
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <Button
          href="/contact"
          variant="accent"
          size="lg"
          className="w-full"
          onClick={onNavigate}
        >
          Book a consultation
        </Button>
      </div>
    </nav>
  );
}
