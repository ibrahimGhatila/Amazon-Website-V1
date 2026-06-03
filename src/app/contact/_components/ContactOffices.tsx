"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";
import {
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
} from "@/components/ui/SocialIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

const offices = [
  {
    city: "Stafford, TX",
    role: "HQ",
    address: "13000 Murphy Road, STE 112,\nStafford, TX 77477, USA",
    email: "info@extremecommerce.com",
  },
];

const community = [
  {
    label: "LinkedIn",
    handle: "@extreme-commerce",
    href: "https://www.linkedin.com/company/extreme-commerce/",
    icon: LinkedInIcon,
    desc: "Company updates, hiring, leadership posts.",
  },
  {
    label: "YouTube",
    handle: "Extreme Commerce",
    href: "https://www.youtube.com/@ExtremeCommerce",
    icon: YouTubeIcon,
    desc: "Free training, breakdowns, and case studies.",
  },
  {
    label: "Instagram",
    handle: "@extremecommerce",
    href: "https://www.instagram.com/extremecommerce",
    icon: InstagramIcon,
    desc: "Behind-the-scenes from our launches and team.",
  },
  {
    label: "Facebook",
    handle: "Extreme Commerce Community",
    href: "https://www.facebook.com/extremecommerce",
    icon: FacebookIcon,
    desc: "1.4M+ sellers swapping wins, asking questions.",
  },
];

export function ContactOffices() {
  return (
    <section className="relative bg-white py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="WHERE WE ARE"
          title={
            <>
              Our office.{" "}
              <span className="text-brand-azure">One global team.</span>
            </>
          }
          subtitle="Drop by, send a courier, or follow along online — all the ways to find us."
        />

        <div className="mt-16 grid lg:grid-cols-1 max-w-2xl mx-auto gap-5">
          {offices.map((o, i) => (
            <motion.div
              key={o.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.08 }}
              className="group relative rounded-3xl bg-white border border-brand-navy/10 p-7 sm:p-8 hover:border-brand-navy/25 hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-300">
                  <MapPin className="h-6 w-6" strokeWidth={2} />
                </div>
                <span className="font-display text-xs tracking-[0.25em] text-brand-yellow">
                  {o.role.toUpperCase()}
                </span>
              </div>

              <h3 className="mt-5 font-black text-brand-navy text-2xl sm:text-3xl tracking-tight">
                {o.city}
              </h3>

              <p className="mt-3 text-brand-navy/75 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {o.address}
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <a
                  href={`mailto:${o.email}`}
                  className="flex items-center gap-2 text-brand-navy/75 hover:text-brand-azure transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{o.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community strip */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-10 bg-brand-yellow" />
            <span className="font-display text-sm tracking-[0.25em] text-brand-navy/60 uppercase">
              Or follow along
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {community.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: EASE, delay: i * 0.06 }}
                >
                  <Link
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-brand-navy/10 bg-white p-4 hover:border-brand-navy/25 hover:shadow-lg hover:shadow-brand-navy/5 transition-all duration-300"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-navy text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-brand-navy text-sm tracking-tight">
                        {c.label}
                      </div>
                      <div className="text-brand-navy/55 text-xs truncate">
                        {c.handle}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 flex-none text-brand-navy/40 group-hover:text-brand-azure group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
