"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MapPin, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pastMeetups, pastMeetupStats } from "../_data/pastMeetups";
import type { PastMeetup } from "../_data/pastMeetups";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

function PastMeetupCard({ meetup, i }: { meetup: PastMeetup; i: number }) {
  const isFeatured = i < 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
      className={isFeatured ? "col-span-1 sm:col-span-1 lg:col-span-1" : ""}
    >
      <div className="group relative overflow-hidden rounded-2xl bg-brand-navy-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
        {/* Photo */}
        <div
          className={`relative w-full overflow-hidden ${
            isFeatured ? "aspect-[4/3]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={meetup.image}
            alt={meetup.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />

          {/* Date badge — top right */}
          <div className="absolute top-3 right-3 flex flex-col items-center rounded-xl bg-white/95 backdrop-blur-sm px-2.5 py-2 text-brand-navy shadow-lg shadow-black/20">
            <span className="font-display text-xs tracking-[0.2em] text-brand-navy/50 uppercase leading-none">
              {meetup.monthLabel}
            </span>
            <span className="font-display text-xs tracking-[0.15em] text-brand-navy/70 uppercase leading-none mt-0.5">
              {meetup.yearLabel}
            </span>
          </div>

          {/* City info — bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="font-black text-white text-xl tracking-tight leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {meetup.city}
            </div>
            <div className="mt-1 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-white/70 text-xs">
                <MapPin className="h-3 w-3" />
                <span>{meetup.country}</span>
              </div>
              {meetup.attendees && (
                <div className="flex items-center gap-1 text-white/60 text-xs">
                  <Users className="h-3 w-3" />
                  <span>{meetup.attendees}+</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PastMeetups() {
  return (
    <section className="relative bg-brand-navy/[0.02] border-y border-brand-navy/6 py-20 sm:py-24 overflow-hidden">
      {/* Subtle background texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(2,39,102,0.8) 0 1px, transparent 1px 22px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <SectionHeading
          eyebrow="MEETUP HISTORY"
          title={
            <>
              Already visited{" "}
              <span className="text-brand-azure">
                {pastMeetupStats.cities} cities.
              </span>
            </>
          }
          subtitle="We've taken the Extreme Commerce community around the world. Each meetup brings hundreds of Amazon entrepreneurs together for an afternoon of real strategy, honest conversations, and new connections."
        />

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-14"
        >
          {[
            {
              value: pastMeetupStats.cities,
              suffix: "",
              label: "Cities visited",
            },
            {
              value: pastMeetupStats.countries,
              suffix: "",
              label: "Countries",
            },
            {
              value: pastMeetupStats.totalAttendees,
              suffix: "+",
              label: "Attendees hosted",
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-black text-brand-navy text-3xl sm:text-4xl tracking-tight leading-none">
                <Counter to={stat.value} suffix={stat.suffix} duration={1.8} />
              </div>
              <div className="mt-1.5 text-sm text-brand-navy/55 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Photo grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {pastMeetups.map((meetup, i) => (
            <PastMeetupCard key={meetup.id} meetup={meetup} i={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
          className="mt-10 text-center text-sm text-brand-navy/45 font-medium"
        >
          And growing — more cities being added every quarter.
        </motion.p>
      </div>
    </section>
  );
}
