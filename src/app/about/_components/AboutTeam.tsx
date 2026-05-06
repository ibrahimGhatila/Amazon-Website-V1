"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;

// Replace names/roles when you have real ones. Photos live at /public/brand/team/*.jpg.
// If a photo file is missing, the initials block renders in its place — no broken images.
const team = [
  {
    name: "Ayesha Khan",
    role: "Chief Operating Officer",
    bio: "Runs day-to-day across Elite, PPC, and Creative.",
    photo: "/brand/team/ayesha-khan.jpg",
  },
  {
    name: "Hamza Ahmed",
    role: "Head of Elite Program",
    bio: "Leads launches end-to-end, from sourcing to scale.",
    photo: "/brand/team/hamza-ahmed.jpg",
  },
  {
    name: "Bilal Hussain",
    role: "Head of PPC & Advertising",
    bio: "Manages 8-figure ad spend across DSP and Sponsored.",
    photo: "/brand/team/bilal-hussain.jpg",
  },
  {
    name: "Sara Malik",
    role: "Head of Creative & Brand",
    bio: "Storefronts, A+, photography that converts.",
    photo: "/brand/team/sara-malik.jpg",
  },
  {
    name: "Zain Raza",
    role: "Head of Virtual Assistants",
    bio: "Builds and trains the operator bench.",
    photo: "/brand/team/zain-raza.jpg",
  },
  {
    name: "Faisal Iqbal",
    role: "Head of Mentorship",
    bio: "1:1 programs and operator community.",
    photo: "/brand/team/faisal-iqbal.jpg",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function AboutTeam() {
  return (
    <section className="relative bg-brand-navy/[0.02] py-20 sm:py-24 border-y border-brand-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="font-display text-sm tracking-[0.22em] text-brand-navy/45 uppercase">
            Meet the team
          </span>
          <h2 className="mt-2 font-black text-brand-navy text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] max-w-3xl mx-auto text-balance">
            The operators behind every launch.
          </h2>
        </motion.div>

        {/* Founder card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12"
        >
          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy-600 to-brand-navy-700 overflow-hidden p-8 sm:p-10 lg:p-12">
            <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_85%_15%,rgba(244,205,29,0.16),transparent)] pointer-events-none" />

            <div className="relative">
              <span className="font-display text-sm tracking-[0.25em] text-brand-yellow">
                FOUNDER · CEO
              </span>
              <div className="mt-3 font-display text-5xl sm:text-6xl text-white leading-none tracking-tight">
                Sunny
              </div>
              <div className="font-display text-5xl sm:text-6xl text-brand-yellow leading-none tracking-tight">
                Ali
              </div>
              <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-md text-pretty">
                Sunny founded Extreme Commerce in 2015 to answer a practical
                question: how do you move capital efficiently into real,
                profitable Amazon brands — without gambling. A decade later,
                that discipline runs the largest e-commerce community of its
                kind out of South Asia.
              </p>
              <div className="mt-6 flex items-center gap-2.5">
                <Link
                  href="#"
                  aria-label="Sunny Ali on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy hover:border-brand-yellow transition"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[260px] lg:min-h-[320px] flex items-end justify-center">
              <Image
                src="/brand/SA-1-(2).png"
                alt="Sunny Ali"
                width={420}
                height={620}
                className="h-[260px] lg:h-[340px] w-auto object-contain object-bottom select-none mix-blend-lighten"
              />
            </div>
          </div>
        </motion.div>

        {/* Leadership grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
              className="group relative rounded-3xl bg-white border border-brand-navy/10 p-6 hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <TeamAvatar name={member.name} photo={member.photo} />
                <div className="min-w-0">
                  <div className="font-bold text-brand-navy text-base leading-tight truncate">
                    {member.name}
                  </div>
                  <div className="font-display text-[11px] tracking-[0.18em] text-brand-yellow uppercase mt-1">
                    {member.role}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-brand-navy/65 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center text-brand-navy/45 text-xs"
        >
          + 100&hairsp;+ operators, analysts, designers, and PPC managers across our offices.
        </motion.p>
      </div>
    </section>
  );
}

function TeamAvatar({ name }: { name: string; photo: string }) {
  // Initials only for now. Once photos are uploaded to /brand/team/, swap to
  // a Next/Image of `photo` here.
  return (
    <div className="relative h-14 w-14 flex-none rounded-full bg-gradient-to-br from-brand-navy to-brand-navy-700 text-brand-yellow flex items-center justify-center font-bold text-base ring-2 ring-brand-navy/5">
      {initials(name)}
    </div>
  );
}
