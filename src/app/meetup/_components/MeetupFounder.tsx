"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const bullets = [
  "Founder of Extreme Commerce, a leading global e-commerce learning platform.",
  "Early educator in the Amazon Private Label business model.",
  "Empowered 1.4M+ individuals worldwide to start and grow online businesses.",
  "Known for his practical, no-nonsense approach to ecommerce and entrepreneurship.",
];

const galleryImages = [
  { src: "/brand/IF-ROW-SunnyAli-22-scaled.jpg", alt: "Sunny Ali on stage", wide: true },
  { src: "/brand/683456307_1404886618342525_7555992081329593247_n.jpg", alt: "Extreme Commerce meetup crowd" },
  { src: "/brand/297058953_5260252007424911_4778814269138912055_n.jpg", alt: "Community meetup" },
  { src: "/brand/79496533_2533983786718427_1372615313794793472_n.jpg", alt: "Meetup attendees" },
  { src: "/brand/347091808_782933143416028_1413365909313538873_n.jpg", alt: "Sunny Ali with community members" },
  { src: "/brand/464525453_8538885066228239_2017629518444573891_n.jpg", alt: "Meetup event" },
  { src: "/brand/489489648_9507927632657306_5400665798598451494_n.jpg", alt: "Community gathering" },
];

export function MeetupFounder() {
  return (
    <section className="relative bg-brand-navy/[0.02] py-20 sm:py-24 border-y border-brand-navy/5 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="MEET THE MAN BEHIND"
          title={
            <>
              A Million{" "}
              <span className="text-brand-azure">Dreams.</span>
            </>
          }
          subtitle="Sunny Ali is a globally recognized e-commerce mentor, entrepreneur, and founder of Extreme Commerce. With over a decade of experience, he has helped millions around the world build skills, launch online businesses, and create new opportunities through e-commerce."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
          <motion.ul
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="space-y-5"
          >
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="flex gap-4 items-start rounded-2xl border border-brand-navy/8 bg-white p-5 hover:border-brand-navy/20 transition-colors"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-azure/10 text-brand-azure">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                </span>
                <p className="text-brand-navy/85 text-[15px] sm:text-base leading-relaxed font-medium pt-1">
                  {b}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-azure/15 via-brand-azure/8 to-brand-navy/10 blur-xl" />

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-brand-navy/20 rotate-[-1.5deg]">
              <Image
                src="/brand/meetup1.jpeg"
                alt="Sunny Ali hosting a large Extreme Commerce meetup"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-navy/80 via-brand-navy/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6">
                <div className="font-display text-xs tracking-[0.22em] text-white/60 uppercase">
                  Live Meetup
                </div>
                <div className="mt-1 font-black text-white text-xl tracking-tight">
                  Sunny Ali
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery grid below: 1 wide tile + 6 standard tiles fills 4-col grid cleanly */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ${
                img.wide ? "sm:col-span-2" : ""
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={img.wide ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 50vw, 25vw"}
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
