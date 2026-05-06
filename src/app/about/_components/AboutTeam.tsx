"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/ui/SocialIcons";

const EASE = [0.16, 1, 0.3, 1] as const;

// Team members. Drop a portrait into /public/brand/team/ matching the
// `photo` path and it appears immediately. Until then, the card shows the
// member's initials on the brand-navy gradient — looks intentional, not broken.
type Member = {
  name: string;
  role: string;
  bio: string;
  photo: string | null;
};

const team: Member[] = [
  {
    name: "Ayesha Khan",
    role: "Chief Operating Officer",
    bio: "Runs day-to-day across Elite, PPC, and Creative.",
    photo: "/brand/team/ayesha-khan.png",
  },
  {
    name: "Hamza Ahmed",
    role: "Head of Elite Program",
    bio: "Leads launches end-to-end, from sourcing to scale.",
    photo: "/brand/team/hamza-ahmed.png",
  },
  {
    name: "Bilal Hussain",
    role: "Head of PPC & Advertising",
    bio: "Manages 8-figure ad spend across DSP and Sponsored.",
    photo: "/brand/team/bilal-hussain.png",
  },
  {
    name: "Sara Malik",
    role: "Head of Creative & Brand",
    bio: "Storefronts, A+, photography that converts.",
    photo: "/brand/team/sara-malik.png",
  },
  {
    name: "Zain Raza",
    role: "Head of Virtual Assistants",
    bio: "Builds and trains the operator bench.",
    photo: "/brand/team/zain-raza.png",
  },
  {
    name: "Faisal Iqbal",
    role: "Head of Mentorship",
    bio: "1:1 programs and operator community.",
    photo: "/brand/team/faisal-iqbal.png",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function AboutTeam() {
  return (
    <section className="relative bg-white py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="MEET THE TEAM"
          title={
            <>
              The operators{" "}
              <span className="text-brand-azure">behind every launch.</span>
            </>
          }
          subtitle="A founder who's been on Amazon for a decade, plus the leaders running each lane of the business."
        />

        {/* Founder featured row — mirrors homepage Founder.tsx portrait card */}
        <div className="mt-16 grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          {/* Portrait card — identical to homepage Founder card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 w-full"
          >
            {/* Decorative frame */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-brand-yellow" />
            <div className="relative h-full w-full rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-navy-600 to-brand-navy-700 overflow-hidden">
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-display text-[18rem] leading-none text-brand-yellow/[0.05] tracking-tighter">
                  SA
                </span>
              </div>

              {/* Portrait */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none">
                <Image
                  src="/brand/SA-1-(2).png"
                  alt="Sunny Ali, Founder & CEO of Extreme Commerce"
                  width={520}
                  height={780}
                  className="h-[58%] w-auto object-contain object-bottom select-none mix-blend-lighten translate-x-16"
                />
              </div>

              {/* Bottom gradient for legibility */}
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent pointer-events-none" />

              {/* Content overlay */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm tracking-[0.25em] text-brand-yellow">
                    FOUNDER · CEO
                  </span>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-brand-yellow opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-yellow" />
                  </span>
                </div>

                <div>
                  <div className="font-display text-5xl sm:text-6xl text-white leading-none tracking-tight drop-shadow-[0_2px_12px_rgba(2,39,102,0.6)]">
                    Sunny
                  </div>
                  <div className="font-display text-5xl sm:text-6xl text-brand-yellow leading-none tracking-tight drop-shadow-[0_2px_12px_rgba(2,39,102,0.6)]">
                    Ali
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href="#"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy hover:border-brand-yellow transition"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy hover:border-brand-yellow transition"
                    >
                      <InstagramIcon className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="YouTube"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white hover:bg-brand-yellow hover:text-brand-navy hover:border-brand-yellow transition"
                    >
                      <YouTubeIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 sm:-right-6 bottom-16 rounded-2xl bg-brand-yellow p-4 shadow-xl shadow-brand-yellow/30"
            >
              <div className="font-display text-2xl text-brand-navy leading-none">
                <Counter to={1} prefix="" suffix="M+" />
              </div>
              <div className="text-xs text-brand-navy/70 mt-1 font-semibold">
                Community
              </div>
            </motion.div>
          </motion.div>

          {/* Right copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 bg-brand-navy/5 border border-brand-navy/10 font-display text-sm tracking-[0.2em] text-brand-navy"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              THE FOUNDER
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="mt-3 font-black tracking-tight text-brand-navy text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-balance"
            >
              Built from the ground up.
              <br />
              <span className="text-brand-azure">Run at a global scale.</span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="mt-4 space-y-3 text-brand-navy/70 leading-relaxed text-base text-pretty"
            >
              <p>
                Sunny Ali founded Extreme Commerce in 2015 to answer a
                practical question: how do we move capital efficiently into
                real, profitable Amazon businesses — without gambling.
              </p>
              <p>
                Nearly a decade later, that discipline has compounded into the
                largest e-commerce operator community of its kind, measurable
                economic impact in the hundreds of millions, and a playbook
                refined across a thousand launches.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Leadership grid */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-10 bg-brand-yellow" />
            <span className="font-display text-sm tracking-[0.25em] text-brand-navy/60 uppercase">
              Leadership
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-[1.5rem] bg-gradient-to-br from-brand-navy via-brand-navy-600 to-brand-navy-700 overflow-hidden">
                  {/* Initials watermark behind */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="font-display text-[10rem] sm:text-[14rem] leading-none text-brand-yellow/[0.07] tracking-tighter">
                      {getInitials(member.name)}
                    </span>
                  </div>

                  {/* Photo (renders if file exists; alt shows the role otherwise) */}
                  {member.photo && (
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none">
                      <Image
                        src={member.photo}
                        alt={`${member.name}, ${member.role}`}
                        width={400}
                        height={600}
                        className="h-full w-auto object-contain object-bottom select-none mix-blend-lighten"
                      />
                    </div>
                  )}

                  {/* Bottom gradient for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent pointer-events-none" />

                  {/* Overlay content */}
                  <div className="relative h-full p-5 flex flex-col justify-between">
                    <span className="font-display text-[11px] tracking-[0.22em] text-brand-yellow uppercase">
                      {member.role}
                    </span>
                    <div>
                      <div className="font-display text-3xl text-white leading-none tracking-tight drop-shadow-[0_2px_8px_rgba(2,39,102,0.7)]">
                        {member.name.split(" ")[0]}
                      </div>
                      <div className="font-display text-3xl text-brand-yellow leading-none tracking-tight mt-0.5 drop-shadow-[0_2px_8px_rgba(2,39,102,0.7)]">
                        {member.name.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio under card */}
                <p className="mt-4 text-brand-navy/60 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center text-brand-navy/45 text-sm">
            + 100&hairsp;+ operators, analysts, designers, and PPC managers
            across our offices.
          </p>
        </div>
      </div>
    </section>
  );
}
