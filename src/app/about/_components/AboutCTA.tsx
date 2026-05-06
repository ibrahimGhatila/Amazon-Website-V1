"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutCTA() {
  return (
    <section
      className="relative text-white py-16 sm:py-20 overflow-hidden texture-grain"
      style={{
        background:
          "linear-gradient(180deg, #022766 0%, #011d52 50%, #010f29 100%)",
        marginBottom: "-2px",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(244,205,29,0.12)_0%,_transparent_60%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-black tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-balance"
        >
          Build with the team that&rsquo;s{" "}
          <span className="text-brand-yellow">already done it.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you want capital deployed for you, talent to run your
          account, or 1:1 mentorship — there&rsquo;s a path in.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button href="/apply" size="lg" variant="primary" arrow>
            Apply for Elite
          </Button>
          <Button href="/#contact" size="lg" variant="ghost">
            Talk to us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
