"use client";

import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { WebinarCountdown } from "./WebinarCountdown";
import { WEBINAR } from "./event";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WebinarStickyBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
      className="fixed inset-x-0 bottom-0 z-40"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 pb-3 sm:pb-4">
        <div className="rounded-2xl border border-white/10 bg-brand-azure/95 backdrop-blur-xl shadow-2xl shadow-brand-navy/40">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 sm:px-6 py-3.5">
            <div className="hidden sm:flex flex-col gap-1 text-white">
              <span className="flex items-center gap-1.5 text-sm font-semibold">
                <Calendar className="h-4 w-4 text-white/80" />
                {WEBINAR.dateLabel} · {WEBINAR.time}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/80">
                <MapPin className="h-3.5 w-3.5" />
                {WEBINAR.timezone}
              </span>
            </div>

            <div className="order-2 sm:order-none">
              <WebinarCountdown targetISO={WEBINAR.dateISO} />
            </div>

            <a
              href="#register"
              className="order-1 sm:order-none ml-auto sm:ml-0 inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 font-display text-sm tracking-[0.14em] text-white uppercase font-bold hover:bg-brand-navy-700 transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
