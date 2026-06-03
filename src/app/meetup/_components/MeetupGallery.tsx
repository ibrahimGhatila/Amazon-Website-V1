"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const photos = [
  {
    src: "https://www.extremecommerce.com/wp-content/uploads/2026/03/sunnyali21.png",
    alt: "Sunny Ali engaging with attendees at an Extreme Commerce meetup",
  },
  {
    src: "https://www.extremecommerce.com/wp-content/uploads/2026/03/sunnyali3.png",
    alt: "Sunny Ali in a relaxed session with community members",
  },
  {
    src: "https://www.extremecommerce.com/wp-content/uploads/2026/03/sunnyali1-768x537.png",
    alt: "Sunny Ali speaking at an intimate Extreme Commerce event",
  },
];

export function MeetupGallery() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.1 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
