"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import type { Meetup } from "../_data/meetups";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MeetupHero({ featured }: { featured: Meetup }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-brand-navy text-white lg:min-h-[100svh] flex items-center pt-24 pb-14 lg:pb-12 texture-grain"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(54,128,195,0.22),transparent)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_40%_at_85%_75%,rgba(244,205,29,0.1),transparent)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />

      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="font-display text-[22rem] sm:text-[32rem] leading-none text-white/[0.04] tracking-tighter uppercase">
          Meetup
        </span>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full"
      >
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm px-5 py-2 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span className="font-display text-[17px] sm:text-[20px] tracking-[0.06em] text-white/85 uppercase">
                Free Community Event
              </span>
            </motion.div>

            <div className="overflow-hidden mb-5">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                className="font-black tracking-tight leading-[0.95] text-[28px] sm:text-4xl lg:text-[56px] xl:text-[66px] text-white"
              >
                Launch your own{" "}
                <span className="text-brand-yellow">Amazon brand.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
              className="text-base sm:text-lg lg:text-xl text-white/65 font-light leading-snug text-pretty max-w-2xl"
            >
              Join Sunny Ali&rsquo;s exclusive ecommerce meetup. Practical Amazon
              brand-building strategy, e-commerce growth playbooks, and a live
              Q&amp;A — all in one afternoon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Button href="#upcoming" size="lg" variant="primary" arrow>
                Register Now
              </Button>
              <Link
                href="#what-to-expect"
                className="group inline-flex items-center gap-2 text-white/80 hover:text-white px-3 py-3 font-semibold text-sm"
              >
                What to expect
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.78 }}
              className="mt-10 grid grid-cols-3 gap-6 sm:gap-10 max-w-md"
            >
              <div>
                <div className="font-display text-3xl sm:text-4xl text-white leading-none font-black tracking-tight">
                  <Counter to={10} suffix="+" duration={2} />
                </div>
                <div className="mt-2 text-xs text-white/55 font-display tracking-[0.18em] uppercase">
                  Years
                </div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl text-white leading-none font-black tracking-tight">
                  <Counter
                    to={14}
                    formatFn={(n) => (n / 10).toFixed(1)}
                    suffix="M+"
                    duration={2.2}
                  />
                </div>
                <div className="mt-2 text-xs text-white/55 font-display tracking-[0.18em] uppercase">
                  Community
                </div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl text-white leading-none font-black tracking-tight">
                  <Counter to={100} suffix="+" duration={2.2} />
                </div>
                <div className="mt-2 text-xs text-white/55 font-display tracking-[0.18em] uppercase">
                  Events
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
            className="relative hidden lg:block h-[520px] w-full"
          >
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 bg-brand-navy-700">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />

              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-brand-navy/30"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-navy/60"
              />

              <div className="relative h-full p-6 sm:p-7 flex flex-col justify-end">
                  <div className="font-display text-[15px] sm:text-[17px] tracking-[0.08em] text-white/65 uppercase">
                    {featured.country}
                  </div>
                  <div className="mt-2 font-black text-white text-3xl sm:text-4xl tracking-tight leading-[0.95] drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                    {featured.city}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-white/80 text-sm">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-white/60" />
                      {featured.dateLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-white/60" />
                      {featured.time}
                    </span>
                  </div>

                  <Link
                    href={`/meetup/${featured.slug}`}
                    className="group mt-4 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 font-semibold text-sm text-brand-navy hover:bg-white transition-colors"
                  >
                    Register
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1 }}
              className="hidden sm:flex absolute -left-5 bottom-20 items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-2xl shadow-black/40"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 font-black text-base">
                $0
              </span>
              <div>
                <div className="font-bold text-brand-navy text-sm leading-none">Free Registration</div>
                <div className="text-brand-navy/50 text-xs mt-0.5">No cost to attend</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
