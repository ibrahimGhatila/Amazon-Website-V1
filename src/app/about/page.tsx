import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { AboutHero } from "./_components/AboutHero";
import { AboutStats } from "./_components/AboutStats";
import { AboutStory } from "./_components/AboutStory";
import { AboutBeliefs } from "./_components/AboutBeliefs";
import { AboutPartners } from "./_components/AboutPartners";
import { AboutTeam } from "./_components/AboutTeam";
import { AboutCTA } from "./_components/AboutCTA";

export const metadata: Metadata = {
  title: "About — A decade building Amazon brands",
  description:
    "Founded in 2015 by Sunny Ali, Extreme Commerce builds and scales profitable Amazon brands. 1M+ community, 1,200+ launches, 50+ partners across government, education, and global tech.",
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
        <AboutTeam />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
