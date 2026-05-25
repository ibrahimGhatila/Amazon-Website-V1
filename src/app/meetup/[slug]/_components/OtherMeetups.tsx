"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { Meetup } from "../../_data/meetups";

const EASE = [0.16, 1, 0.3, 1] as const;

export function OtherMeetups({ meetups }: { meetups: Meetup[] }) {
  if (meetups.length === 0) return null;

  return (
    <section className="relative bg-brand-navy/[0.02] border-y border-brand-navy/5 py-20 sm:py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-navy/10 px-4 py-1.5 font-display text-[13px] tracking-[0.18em] text-brand-navy uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-azure" />
              Other cities
            </span>
            <h2 className="mt-4 font-black tracking-tight text-brand-navy text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Can&rsquo;t make it? <span className="text-brand-azure">Pick another city.</span>
            </h2>
          </div>
          <Link
            href="/meetup"
            className="inline-flex items-center gap-2 font-display text-sm tracking-[0.12em] text-brand-navy uppercase font-bold hover:text-brand-azure transition-colors"
          >
            View all meetups
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {meetups.map((meetup, i) => (
            <motion.div
              key={meetup.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
            >
              <Link
                href={`/meetup/${meetup.slug}`}
                className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-brand-navy/10 bg-white p-3 hover:border-brand-navy/25 hover:shadow-lg hover:shadow-brand-navy/5 hover:-translate-y-0.5 transition-all"
              >
                <div className="relative h-20 w-20 flex-none overflow-hidden rounded-xl bg-brand-navy-700">
                  <Image
                    src={meetup.image}
                    alt={meetup.imageAlt}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <span className="font-display text-[9px] tracking-[0.18em] uppercase opacity-90">
                      {meetup.monthLabel}
                    </span>
                    <span className="font-black text-xl leading-none tracking-tight drop-shadow-md">
                      {meetup.dayNumber}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 pr-2">
                  <div className="font-black text-brand-navy text-lg tracking-tight truncate">
                    {meetup.city}
                  </div>
                  <div className="text-sm text-brand-navy/60 truncate">
                    {meetup.country}
                  </div>
                  <div className="mt-1.5 flex items-center gap-1.5 text-xs text-brand-navy/55">
                    <Calendar className="h-3 w-3 text-brand-azure" />
                    {meetup.time}
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 flex-none text-brand-navy/35 group-hover:text-brand-azure group-hover:translate-x-0.5 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
