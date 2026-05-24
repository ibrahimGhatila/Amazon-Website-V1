"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Meetup } from "../_data/meetups";

const EASE = [0.16, 1, 0.3, 1] as const;

function MeetupCard({ meetup, i }: { meetup: Meetup; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
    >
      <Link
        href={`/meetup/${meetup.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-sm hover:shadow-2xl hover:shadow-brand-navy/10 hover:-translate-y-1 hover:border-brand-navy/20 transition-all duration-500"
      >
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-brand-navy-700">
          <Image
            src={meetup.image}
            alt={meetup.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent"
          />

          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-3 py-1.5 border border-white/25">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
            <span className="font-display text-[10px] tracking-[0.22em] text-white uppercase">
              Free
            </span>
          </div>

          <div className="absolute top-4 right-4 flex flex-col items-center rounded-2xl bg-white/95 backdrop-blur-sm px-3 py-2 text-brand-navy shadow-lg shadow-black/20">
            <span className="font-display text-[10px] tracking-[0.18em] text-brand-navy/55 uppercase">
              {meetup.monthLabel}
            </span>
            <span className="font-black text-2xl leading-none tracking-tight">
              {meetup.dayNumber}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="font-black text-white text-2xl sm:text-3xl tracking-tight leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {meetup.city}
            </div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-white/85 drop-shadow-md">
              {meetup.country}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-sm text-brand-navy/80">
              <Calendar className="h-4 w-4 text-brand-yellow flex-none" />
              <span className="font-semibold">{meetup.dateLabel}</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-brand-navy/70">
              <Clock className="h-4 w-4 text-brand-yellow flex-none" />
              <span>{meetup.time}</span>
            </div>
            {meetup.highlight && (
              <div className="flex items-center gap-2.5 text-sm text-brand-navy/60">
                <MapPin className="h-4 w-4 text-brand-yellow flex-none" />
                <span>{meetup.highlight}</span>
              </div>
            )}
          </div>

          <div className="mt-5 pt-5 border-t border-brand-navy/8 flex items-center justify-between">
            <span className="font-display text-xs tracking-[0.2em] text-rose-600 uppercase font-bold">
              Free Registration
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-2 font-display text-xs tracking-[0.16em] text-brand-navy uppercase font-bold group-hover:bg-brand-yellow/90 transition-colors">
              Register
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function MeetupGrid({ meetups }: { meetups: Meetup[] }) {
  return (
    <section
      id="upcoming"
      className="relative bg-white py-20 sm:py-24 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="UPCOMING MEETUPS"
          title={
            <>
              Find a city{" "}
              <span className="text-brand-azure">near you.</span>
            </>
          }
          subtitle="Free, in-person sessions across Southeast Asia. Pick the date, register, and we'll send you the venue details."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {meetups.map((meetup, i) => (
            <MeetupCard key={meetup.slug} meetup={meetup} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
