"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

// All logos live in /public/brand/partners/{slug}.svg (or .png).
// If a file is missing, the alt text renders in its place — no broken icons.

const tier1 = [
  { name: "Google", logo: "/brand/partners/google.svg" },
  { name: "Payoneer", logo: "/brand/partners/payoneer.svg" },
  { name: "foodpanda", logo: "/brand/partners/foodpanda.svg" },
  { name: "Daraz", logo: "/brand/partners/daraz.svg" },
];

const government = [
  { name: "Kamyab Jawan", logo: "/brand/partners/kamyab-jawan.svg" },
  { name: "NAVTTC", logo: "/brand/partners/navttc.svg" },
  { name: "PVTC Punjab", logo: "/brand/partners/pvtc.svg" },
  { name: "PSDF", logo: "/brand/partners/psdf.svg" },
  { name: "Govt. of AJK", logo: "/brand/partners/govt-ajk.svg" },
];

const universities = [
  { name: "NUML", logo: "/brand/partners/numl.svg" },
  { name: "University of Central Punjab", logo: "/brand/partners/ucp.svg" },
  { name: "Iqra University", logo: "/brand/partners/iqra.svg" },
  { name: "COMSATS Islamabad", logo: "/brand/partners/comsats.svg" },
  { name: "Bahria University", logo: "/brand/partners/bahria.svg" },
  { name: "Institute of Business Management", logo: "/brand/partners/ibm.svg" },
  { name: "ICMA International", logo: "/brand/partners/icma.svg" },
  { name: "UET Lahore", logo: "/brand/partners/uet.svg" },
  { name: "National Textile University", logo: "/brand/partners/ntu.svg" },
];

const industry = [
  { name: "Brandverse", logo: "/brand/partners/brandverse.svg" },
  { name: "Dukan", logo: "/brand/partners/dukan.svg" },
  { name: "All Pakistan Memon Federation", logo: "/brand/partners/apmf.svg" },
  { name: "Al Qadir Welfare Foundation", logo: "/brand/partners/al-qadir.svg" },
];

type Logo = { name: string; logo: string };

function LogoGrid({ logos, cols }: { logos: Logo[]; cols: string }) {
  return (
    <div className={`grid ${cols} gap-3 sm:gap-4`}>
      {logos.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: EASE, delay: i * 0.04 }}
          className="group relative flex h-28 sm:h-32 items-center justify-center rounded-2xl border border-brand-navy/10 bg-white hover:border-brand-navy/25 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-300"
        >
          <Image
            src={p.logo}
            alt={p.name}
            width={180}
            height={56}
            className="h-9 sm:h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </motion.div>
      ))}
    </div>
  );
}

function TierLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="h-[1px] w-10 bg-brand-yellow" />
      <span className="font-display text-sm tracking-[0.25em] text-brand-navy/60 uppercase">
        {children}
      </span>
    </div>
  );
}

export function AboutPartners() {
  return (
    <section className="relative bg-brand-navy/[0.02] py-24 sm:py-28 border-y border-brand-navy/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="TRUSTED BY LEADERS"
          title={
            <>
              Backed by the brands and institutions{" "}
              <span className="text-brand-azure">building Pakistan&rsquo;s digital economy.</span>
            </>
          }
          subtitle="Global tech, government bodies, top universities, and industry organizations — all in our corner."
        />

        <div className="mt-16 space-y-14">
          <div>
            <TierLabel>Global partners</TierLabel>
            <LogoGrid logos={tier1} cols="grid-cols-2 lg:grid-cols-4" />
          </div>

          <div>
            <TierLabel>Government partnerships</TierLabel>
            <LogoGrid logos={government} cols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" />
          </div>

          <div>
            <TierLabel>Education &amp; academia</TierLabel>
            <LogoGrid logos={universities} cols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-3" />
          </div>

          <div>
            <TierLabel>Industry &amp; community</TierLabel>
            <LogoGrid logos={industry} cols="grid-cols-2 lg:grid-cols-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
