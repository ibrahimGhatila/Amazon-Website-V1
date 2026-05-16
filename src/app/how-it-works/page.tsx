import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { ProcessHero } from "./_components/ProcessHero";
import { ProcessProblem } from "./_components/ProcessProblem";
import { ProcessPaths } from "./_components/ProcessPaths";
import { ProcessSteps } from "./_components/ProcessSteps";
import { ProcessRoles } from "./_components/ProcessRoles";
import { AboutCTA } from "../about/_components/AboutCTA";

export const metadata: Metadata = {
  title: "How It Works — One operating system, three ways to engage",
  description:
    "How Extreme Commerce works: one proven operating system across Amazon, Walmart, and TikTok Shop. Three engagements — done-for-you brand builds and direct mentorship from Sunny Ali.",
  keywords: [
    "How Extreme Commerce works",
    "Extreme Commerce operating system",
    "Amazon agency process",
    "TikTok Shop agency",
    "Done-for-you Amazon brand",
    "Sunny Ali mentorship",
  ],
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works — The Extreme Commerce operating system",
    description:
      "One proven playbook across Amazon, Walmart, and TikTok Shop. Three ways to engage with Extreme Commerce.",
    url: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ProcessHero />
        <ProcessProblem />
        <ProcessPaths />
        <ProcessSteps />
        <ProcessRoles />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
