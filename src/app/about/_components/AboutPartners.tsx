"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

// Logo strategy:
//   - For globally-known brands we hotlink Clearbit's logo CDN (logo.clearbit.com/{domain}).
//     Clean, free, no API key, returns the brand-correct PNG.
//   - For Pakistani institutions Clearbit usually has no entry, so the card falls
//     back to a styled text label using the brand name.
// Want to swap in your own logo? Drop a file into /public/brand/partners/ and replace
// the `logo` value with that path (e.g. "/brand/partners/numl.png").

type Partner = { name: string; logo?: string };

const tier1: Partner[] = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Payoneer", logo: "https://logo.clearbit.com/payoneer.com" },
  { name: "foodpanda", logo: "https://logo.clearbit.com/foodpanda.com" },
  { name: "Daraz", logo: "https://logo.clearbit.com/daraz.pk" },
];

const government: Partner[] = [
  { name: "Kamyab Jawan" },
  { name: "NAVTTC" },
  { name: "PVTC Punjab" },
  { name: "PSDF" },
  { name: "Govt. of AJK" },
];

const universities: Partner[] = [
  { name: "NUML" },
  { name: "University of Central Punjab" },
  { name: "Iqra University" },
  { name: "COMSATS Islamabad" },
  { name: "Bahria University" },
  { name: "Institute of Business Management" },
  { name: "ICMA International" },
  { name: "UET Lahore" },
  { name: "National Textile University" },
];

const industry: Partner[] = [
  { name: "Brandverse", logo: "https://logo.clearbit.com/brandverse.io" },
  { name: "Dukan", logo: "https://logo.clearbit.com/dukan.pk" },
  { name: "All Pakistan Memon Federation" },
  { name: "Al Qadir Welfare Foundation" },
];

function LogoCard({ partner, i }: { partner: Partner; i: number }) {
  const [errored, setErrored] = useState(false);
  const showImage = partner.logo && !errored;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE, delay: i * 0.04 }}
      className="group relative flex h-28 sm:h-32 items-center justify-center rounded-2xl border border-brand-navy/10 bg-white hover:border-brand-navy/25 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-300 px-4"
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-10 sm:max-h-12 max-w-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          onError={() => setErrored(true)}
          loading="lazy"
        />
      ) : (
        <span className="font-display text-sm sm:text-base text-center text-brand-navy/75 leading-tight tracking-tight font-bold group-hover:text-brand-navy transition-colors">
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
