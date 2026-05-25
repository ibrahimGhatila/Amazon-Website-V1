"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MeetupBanner() {
  return (
    <section className="relative">
      <div className="relative bg-brand-azure text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(2,39,102,0.4),transparent_60%)]"
        />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-black tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-balance text-white"
          >
            Amazon Brand Building. E-commerce Growth.
            <br className="hidden sm:block" /> Real Business Insights.{" "}
            <span className="text-white/85">All in One Meetup.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="mt-6 text-base sm:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with Sunny Ali, founder of Extreme Commerce, for a powerful
            in-person meetup. Learn practical strategies for launching, building,
            and scaling profitable ecommerce brands on Amazon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            className="mt-9 flex justify-center"
          >
            <Button href="#upcoming" size="lg" variant="primary" arrow>
              Register Now
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="bg-brand-navy/[0.02] border-y border-brand-navy/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="font-black text-brand-navy text-4xl sm:text-5xl tracking-tight leading-none">
                <Counter to={10} suffix="+" duration={2} />
              </div>
              <div className="mt-3 text-sm text-brand-navy/55 font-medium">
                Years of empowering entrepreneurs
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              <div className="font-black text-brand-navy text-4xl sm:text-5xl tracking-tight leading-none">
                <Counter to={14} formatFn={(n) => (n / 10).toFixed(1)} suffix="M+" duration={2.4} />
              </div>
              <div className="mt-3 text-sm text-brand-navy/55 font-medium">
                Community members
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            >
              <div className="font-black text-brand-navy text-4xl sm:text-5xl tracking-tight leading-none">
                <Counter to={100} suffix="+" duration={2.2} />
              </div>
              <div className="mt-3 text-sm text-brand-navy/55 font-medium">
                International events &amp; workshops conducted
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
