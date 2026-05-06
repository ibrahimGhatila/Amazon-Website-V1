"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import {
  Menu,
  X,
  ChevronDown,
  Rocket,
  Users,
  MessageSquare,
  Target,
  Megaphone,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    title: "Elite Program",
    href: "/elite",
    icon: Rocket,
    tag: "FLAGSHIP",
    desc: "Done-for-you Amazon brand. Three launches, profit share.",
    featured: true,
  },
  {
    title: "Virtual Assistants",
    href: "/services/virtual-assistants",
    icon: Users,
    tag: "HIRE TALENT",
    desc: "Trained Amazon VAs ready to run your account.",
  },
  {
    title: "Mentorship with Sunny",
    href: "/services/mentorship",
    icon: MessageSquare,
    tag: "1:1",
    desc: "Direct access. Monthly Zooms. WhatsApp voice notes.",
  },
  {
    title: "PPC & Advertising",
    href: "/services/ppc-advertising",
    icon: Target,
    tag: "FULL STACK",
    desc: "Sponsored ads, DSP, and full-funnel campaigns.",
  },
  {
    title: "Creative & Listings",
    href: "/services/creative-listings",
    icon: Megaphone,
    tag: "BRAND",
    desc: "Storefront, A+, photography, video — that converts.",
  },
  {
    title: "Launch Analytics",
    href: "/services/launch-analytics",
    icon: BarChart3,
    tag: "OPS",
    desc: "Forecasting, BSR tracking, P&L by ASIN.",
  },
];

const navItems = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Elite Program", href: "/elite" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/#founder" },
  { label: "FAQ", href: "/#faq" },
  { label: "Apply", href: "/apply" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/services") return pathname.startsWith("/services");
    if (href === "/how-it-works") return pathname.startsWith("/how-it-works");
    return pathname === href;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "pt-2" : "pt-4"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500",
              scrolled
                ? "bg-brand-navy/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-brand-navy/20"
                : "bg-brand-navy/40 backdrop-blur-md border border-white/5"
            )}
          >
            <Logo variant="light" />

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                if (item.href === "/apply") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "ml-1 px-4 py-2 text-sm font-bold rounded-full transition-all duration-200",
                        isActive(item.href)
                          ? "bg-brand-yellow text-brand-navy"
                          : "bg-brand-yellow/15 text-brand-yellow hover:bg-brand-yellow hover:text-brand-navy border border-brand-yellow/30"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }

                if (item.hasDropdown) {
                  const active = isActive(item.href);
                  return (
                    <div
                      key={item.href}
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleCloseServices}
                      className="relative"
                    >
                      <Link
                        href={item.href}
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        className={cn(
                          "relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full group",
                          active ? "text-white" : "text-white/80 hover:text-white"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-300",
                            servicesOpen ? "rotate-180" : ""
                          )}
                        />
                        <span
                          className={cn(
                            "absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-yellow transition-all duration-300",
                            active ? "w-6" : "w-0 group-hover:w-6"
                          )}
                        />
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-full group",
                      isActive(item.href) ? "text-white" : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-brand-yellow transition-all duration-300",
                        isActive(item.href) ? "w-6" : "w-0 group-hover:w-6"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                href="#contact"
                size="sm"
                variant="primary"
                arrow
                className="hidden sm:inline-flex"
              >
                Book a Call
              </Button>
              <button
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Desktop services dropdown panel */}
          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: EASE }}
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
                className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[720px] origin-top"
              >
                <div className="rounded-2xl bg-brand-navy/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-brand-navy/40 p-5">
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((s) => {
                      const Icon = s.icon;
                      const featured = s.featured;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          className={cn(
                            "group flex items-start gap-3 rounded-xl p-3.5 transition-colors duration-200",
                            featured
                              ? "bg-brand-yellow/10 border border-brand-yellow/25 hover:bg-brand-yellow/15"
                              : "hover:bg-white/5 border border-transparent"
                          )}
                        >
                          <div
                            className={cn(
                              "flex h-10 w-10 flex-none items-center justify-center rounded-xl transition-colors duration-200",
                              featured
                                ? "bg-brand-yellow text-brand-navy"
                                : "bg-white/5 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy"
                            )}
                          >
                            <Icon className="h-5 w-5" strokeWidth={2} />
                          </div>
                          <div className="min-w-0">
                            <div
                              className={cn(
                                "font-display text-[10px] tracking-[0.22em] uppercase mb-0.5",
                                featured ? "text-brand-yellow" : "text-brand-yellow/70"
                              )}
                            >
                              {s.tag}
                            </div>
                            <div className="font-bold text-white text-sm leading-tight">
                              {s.title}
                            </div>
                            <div className="text-white/55 text-xs mt-1 leading-snug">
                              {s.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-white/45 text-xs">
                      6 services · Built for sellers at every stage
                    </span>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow hover:text-white transition-colors"
                    >
                      View all services
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-brand-navy/95 backdrop-blur-xl pt-24 px-6 overflow-y-auto"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-1 max-w-md mx-auto pb-12"
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="border-b border-white/10"
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        aria-expanded={mobileServicesOpen}
                        className={cn(
                          "w-full flex items-center justify-between py-4 px-4 text-2xl font-bold transition",
                          isActive(item.href) ? "text-brand-yellow" : "text-white"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-brand-yellow transition-transform duration-300",
                            mobileServicesOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-3 pl-2">
                              {services.map((s) => {
                                const Icon = s.icon;
                                return (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white/5 transition"
                                  >
                                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-white/5 text-brand-yellow">
                                      <Icon className="h-4 w-4" strokeWidth={2} />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="font-display text-[10px] tracking-[0.22em] text-brand-yellow/70 uppercase">
                                        {s.tag}
                                      </div>
                                      <div className="font-bold text-white text-base leading-tight">
                                        {s.title}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                              <Link
                                href="/services"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center gap-1.5 mt-1 mx-3 rounded-xl border border-white/10 py-3 text-sm font-semibold text-brand-yellow hover:bg-white/5 transition"
                              >
                                View all services
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 px-4 text-2xl font-bold transition",
                        isActive(item.href) ? "text-brand-yellow" : "text-white hover:text-brand-yellow"
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="text-brand-yellow font-display text-sm tracking-widest">
                        0{i + 1}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Button
                  href="#contact"
                  size="lg"
                  variant="primary"
                  arrow
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Call
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
