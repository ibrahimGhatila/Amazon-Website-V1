"use client";

import { motion } from "motion/react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white min-h-[100svh] flex items-center pt-24 pb-12 texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(244,205,29,0.10)_0%,_transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(54,128,195,0.18)_0%,_transparent_55%)]"
      />

      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-brand-yellow/30 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="flex items-center gap-4 mb-7"
            >
              <span className="h-px w-12 bg-brand-yellow" />
              <span className="font-display text-[20px] tracking-[0.08em] text-brand-yellow uppercase">
                About
              </span>
            </motion.div>

            <h1 className="font-black tracking-tight leading-[0.95] text-[28px] sm:text-4xl lg:text-[58px] xl:text-[68px]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="block text-white"
              >
                A decade of
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
                className="block text-brand-yellow italic"
                style={{ fontFamily: "serif" }}
              >
                profitable
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
                className="block text-white"
              >
                Amazon brands.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
              className="mt-8 text-lg sm:text-xl max-w-xl text-white/80 leading-relaxed text-pretty"
            >
              Founded by Sunny Ali in 2015, Extreme Commerce is the operator-led
              team behind 1,200+ launches, a 1.4M+ community, and the largest
              e-commerce ecosystem out of South Asia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button href="/services" size="lg" variant="primary" arrow>
                Explore our services
              </Button>
              <Link
                href="#story"
                className="group inline-flex items-center gap-3 text-white/90 hover:text-white px-3 py-3"
              >
                <span className="font-semibold text-sm">Read our story</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 1.05 }}
              className="mt-12 flex flex-wrap gap-6 text-sm text-white/60"
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-brand-yellow" />
                <span>Est. 2015</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-yellow" />
                <span>Karachi · Dubai · London</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
            className="order-1 lg:order-2 relative aspect-[3/4] max-w-md mx-auto lg:max-w-none w-full"
          >
            <motion.div
              initial={{ rotate: -2, opacity: 0 }}
              animate={{ rotate: -2, opacity: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.7 }}
              className="absolute -inset-3 sm:-inset-4 rounded-[2.5rem] border-2 border-brand-yellow/60"
            />

            <div className="relative h-full w-full rounded-[2rem] bg-gradient-to-br from-brand-navy-600 via-brand-navy to-brand-navy-700 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-display text-[18rem] sm:text-[22rem] leading-none text-brand-yellow/[0.06] tracking-tighter">
                  SA
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none">
                <Image
                  src="/brand/SA-1-(2).png"
                  alt="Sunny Ali, Founder & CEO of Extreme Commerce"
                  width={640}
                  height={960}
                  priority
                  className="h-[78%] w-auto object-contain object-bottom select-none mix-blend-lighten"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent pointer-events-none" />

              <div className="relative h-full p-7 sm:p-9 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-display text-[15px] sm:text-[17px] tracking-[0.08em] text-white/50 uppercase">
                      Founder · CEO
                    </div>
                    <div className="mt-1.5 font-display text-xs tracking-[0.2em] text-brand-yellow">
                      Extreme Commerce
                    </div>
                  </div>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-yellow opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-yellow" />
                  </span>
                </div>

                <div>
                  <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.9] tracking-tight drop-shadow-[0_2px_16px_rgba(2,39,102,0.8)]">
                    Sunny
                  </div>
                  <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-brand-yellow leading-[0.9] tracking-tight drop-shadow-[0_2px_16px_rgba(2,39,102,0.8)]">
                    Ali.
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
              className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 rotate-[-6deg] rounded-2xl bg-white p-4 shadow-2xl shadow-black/40 max-w-[140px]"
            >
              <div className="font-display text-3xl text-brand-navy leading-none tracking-tight">
                10+
              </div>
              <div className="mt-1.5 text-[11px] tracking-[0.18em] text-brand-navy/60 uppercase font-display">
                Years building
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
