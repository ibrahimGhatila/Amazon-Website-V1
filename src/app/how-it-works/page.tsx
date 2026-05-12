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
