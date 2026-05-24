"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

type Partner = { name: string; logo?: string };

const tier1: Partner[] = [
  { name: "Google", logo: "/brand/logo24.png" },
  { name: "Payoneer", logo: "/brand/logo33.png" },
  { name: "foodpanda", logo: "/brand/logo36.png" },
  { name: "Daraz", logo: "/brand/logo21.png" },
];

const government: Partner[] = [
  { name: "Kamyab Jawan", logo: "/brand/logo32.png" },
  { name: "NAVTTC", logo: "/brand/logo28.png" },
  { name: "PVTC Punjab" },
  { name: "PSDF", logo: "/brand/logo39.png" },
  { name: "Govt. of AJK", logo: "/brand/logo35.png" },
];

const universities: Partner[] = [
  { name: "NUML", logo: "/brand/logo4.png" },
  { name: "University of Central Punjab", logo: "/brand/logo5.png" },
  { name: "ICMA International", logo: "/brand/logo6.png" },
  { name: "Institute of Space Technology", logo: "/brand/logo7.png" },
  { name: "University of Swat", logo: "/brand/logo8.png" },
  { name: "FAST-NUCES", logo: "/brand/logo9.png" },
  { name: "National Textile University", logo: "/brand/logo10.png" },
  { name: "Dawood UET", logo: "/brand/logo11.png" },
  { name: "IM Sciences Peshawar", logo: "/brand/logo12.png" },
  { name: "ISP Multan", logo: "/brand/logo13.png" },
  { name: "University of Poonch", logo: "/brand/logo14.png" },
  { name: "IBA", logo: "/brand/logo15.png" },
  { name: "University of Chitral", logo: "/brand/logo16.png" },
  { name: "Forman Christian College", logo: "/brand/logo17.png" },
  { name: "CECOS University", logo: "/brand/logo18.png" },
  { name: "KIET", logo: "/brand/logo19.png" },
  { name: "Iqra University", logo: "/brand/logo25.png" },
  { name: "Institute of Business Management", logo: "/brand/logo27.png" },
  { name: "UET Lahore", logo: "/brand/logo30.png" },
  { name: "Centre of Excellence", logo: "/brand/logo31.png" },
  { name: "COMSATS Islamabad", logo: "/brand/logo37.png" },
  { name: "Bahria University", logo: "/brand/logo38.png" },
  { name: "TMUC", logo: "/brand/logo40.png" },
  { name: "Air University", logo: "/brand/logo41.png" },
  { name: "Allama Iqbal Institute", logo: "/brand/logo42.png" },
  { name: "University of Lahore", logo: "/brand/logo43.png" },
  { name: "Institute of Professional Skills Development", logo: "/brand/logo44.png" },
  { name: "Islamia College Peshawar", logo: "/brand/logo45.png" },
  { name: "Madina College", logo: "/brand/logo1.png" },
  { name: "Credo College", logo: "/brand/logo20.png" },
  { name: "Whales College", logo: "/brand/logo26.png" },
];

const industry: Partner[] = [
  { name: "Brandverse", logo: "/brand/logo23.png" },
  { name: "Dukan", logo: "/brand/logo22.png" },
  { name: "All Pakistan Memon Federation", logo: "/brand/logo34.png" },
  { name: "Al Qadir Welfare Foundation", logo: "/brand/logo29.png" },
  { name: "WAC", logo: "/brand/logo46.png" },
];

function LogoCard({ partner, i }: { partner: Partner; i: number }) {
  const [errored, setErrored] = useState(false);
  const showImage = partner.logo && !errored;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE, delay: i * 0.025 }}
      className="group relative flex h-24 sm:h-28 items-center justify-center rounded-2xl border border-brand-navy/10 bg-white hover:border-brand-navy/25 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-300 px-3"
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-10 sm:max-h-12 max-w-[85%] object-contain opacity-85 group-hover:opacity-100 transition-opacity"
          onError={() => setErrored(true)}
          loading="lazy"
        />
      ) : (
        <span className="font-display text-xs sm:text-sm text-center text-brand-navy/75 leading-tight tracking-tight font-bold group-hover:text-brand-navy transition-colors">
          {partner.name}
        </span>
      )}
    </motion.div>
  );
}

function LogoGrid({ logos, cols }: { logos: Partner[]; cols: string }) {
  return (
    <div className={`grid ${cols} gap-3 sm:gap-4`}>
      {logos.map((p, i) => (
        <LogoCard key={p.name} partner={p} i={i} />
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
            <LogoGrid
              logos={universities}
              cols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            />
          </div>

          <div>
            <TierLabel>Industry &amp; community</TierLabel>
            <LogoGrid logos={industry} cols="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
