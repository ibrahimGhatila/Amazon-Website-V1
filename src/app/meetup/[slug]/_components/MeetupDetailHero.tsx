"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Meetup } from "../../_data/meetups";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MeetupDetailHero({ meetup }: { meetup: Meetup }) {
  const viaClass = meetup.gradient.via ?? "";
  const visualClass =
    `bg-gradient-to-br ${meetup.gradient.from} ${viaClass} ${meetup.gradient.to}`.trim();

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white pt-28 pb-16 texture-grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(54,128,195,0.25),transparent)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8"
        >
          <Link
            href="/meetup"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all meetups
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 backdrop-blur-sm px-4 py-1.5 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              <span className="font-display text-[13px] sm:text-[15px] tracking-[0.16em] text-brand-yellow uppercase">
                Free Community Event
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              className="font-black tracking-tight leading-[0.95] text-[36px] sm:text-5xl lg:text-[72px]"
            >
              <span className="block text-white">Meetup in</span>
              <span className="block text-brand-yellow">{meetup.city}.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 font-light leading-snug text-pretty max-w-2xl"
            >
              {meetup.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-4">
                <div className="flex items-center gap-2 text-brand-yellow">
                  <Calendar className="h-4 w-4" />
                  <span className="font-display text-[10px] tracking-[0.22em] uppercase">
                    Date
                  </span>
                </div>
                <div className="mt-2 font-bold text-white text-sm leading-tight">
                  {meetup.dateLabel}
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-4">
                <div className="flex items-center gap-2 text-brand-yellow">
                  <Clock className="h-4 w-4" />
                  <span className="font-display text-[10px] tracking-[0.22em] uppercase">
                    Time
                  </span>
                </div>
                <div className="mt-2 font-bold text-white text-sm leading-tight">
                  {meetup.time}
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-4">
                <div className="flex items-center gap-2 text-brand-yellow">
                  <MapPin className="h-4 w-4" />
                  <span className="font-display text-[10px] tracking-[0.22em] uppercase">
                    Location
                  </span>
                </div>
                <div className="mt-2 font-bold text-white text-sm leading-tight">
                  {meetup.venueAddress ?? `${meetup.city}, ${meetup.country}`}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="#register" size="lg" variant="primary" arrow>
                Register for {meetup.city}
              </Button>
              <span className="font-display text-xs tracking-[0.2em] text-rose-300 uppercase font-bold">
                Free Registration
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.4 }}
            className="relative aspect-[4/5] max-w-sm w-full mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className={`relative h-full w-full overflow-hidden rounded-[2.5rem] border-4 border-white/15 shadow-2xl shadow-black/40 ${visualClass}`}>
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="font-display text-[14rem] leading-none text-white/10 tracking-tighter uppercase">
                  {meetup.city.charAt(0)}
                </span>
              </div>

              <div className="absolute top-5 left-5 flex flex-col items-center rounded-2xl bg-white/95 backdrop-blur-sm px-4 py-3 text-brand-navy shadow-lg shadow-black/20">
                <span className="font-display text-[11px] tracking-[0.18em] text-brand-navy/55 uppercase">
                  {meetup.monthLabel}
                </span>
                <span className="font-black text-3xl leading-none tracking-tight">
                  {meetup.dayNumber}
                </span>
                <span className="font-display text-[10px] tracking-[0.16em] text-brand-navy/55 uppercase mt-1">
                  {meetup.dayLabel}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className={`font-display text-[11px] tracking-[0.22em] ${meetup.accent} uppercase`}>
                  {meetup.country}
                </div>
                <div className="mt-1 font-black text-white text-3xl tracking-tight leading-none drop-shadow-lg">
                  {meetup.city}
                </div>
                {meetup.highlight && (
                  <div className="mt-2 text-white/75 text-sm">
                    {meetup.highlight}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
