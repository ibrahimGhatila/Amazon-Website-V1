import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { ProcessHero } from "./_components/ProcessHero";
import { ProcessProblem } from "./_components/ProcessProblem";
import { ProcessSteps } from "./_components/ProcessSteps";
import { ProcessRoles } from "./_components/ProcessRoles";
import { ProcessMoney } from "./_components/ProcessMoney";
import { ProcessRisk } from "./_components/ProcessRisk";
import { AboutCTA } from "../about/_components/AboutCTA";

export const metadata: Metadata = {
  title: "How It Works — Capital, launches, and the operating system",
  description:
    "The full Elite Program operating system: 6 phases, $10K per launch, 80/20 profit share, 18-month cycle. Who does what, how capital flows, and how risk is managed.",
  keywords: [
    "How Extreme Commerce works",
    "Amazon Elite Program process",
    "Amazon launch capital",
    "80/20 profit share Amazon",
    "Amazon investment program",
    "Sunny Ali Elite Program",
  ],
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works — The Elite Program operating system",
    description:
      "6 phases, $10K per launch, 80/20 profit share, 18-month cycle. See exactly how capital flows and risk is managed.",
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
        <ProcessSteps />
        <ProcessRoles />
        <ProcessMoney />
        <ProcessRisk />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
