import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { AboutHero } from "./_components/AboutHero";
import { AboutStats } from "./_components/AboutStats";
import { AboutStory } from "./_components/AboutStory";
import { AboutBeliefs } from "./_components/AboutBeliefs";
import { AboutPartners } from "./_components/AboutPartners";
import { AboutCTA } from "./_components/AboutCTA";

export const metadata: Metadata = {
  title: "About — A decade building Amazon brands",
  description:
    "Founded in 2015 by Sunny Ali, Extreme Commerce builds and scales profitable Amazon brands. 1.4M+ community, 1,200+ launches, 50+ partners across government, education, and global tech.",
  keywords: [
    "About Extreme Commerce",
    "Sunny Ali founder",
    "Amazon agency Pakistan",
    "Amazon brand builder",
    "ecommerce company history",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Extreme Commerce — A decade building Amazon brands",
    description:
      "Founded in 2015 by Sunny Ali. 1.4M+ community, 1,200+ launches, 50+ partners.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <AboutHero />
        <AboutStats />
        <AboutStory />
        <AboutBeliefs />
        <AboutPartners />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
