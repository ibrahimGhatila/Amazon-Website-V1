import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Services } from "@/components/sections/Services";
import { Platforms } from "@/components/sections/Platforms";
import { Founder } from "@/components/sections/Founder";
import { Highlights } from "@/components/sections/Highlights";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Extreme Commerce — Build Profitable Amazon Brands",
  description:
    "Done-for-you Amazon businesses. Launch, scale, and profit — backed by a 1M+ community and a decade of building winning brands on Amazon, Walmart, TikTok Shop, and Etsy.",
  keywords: [
    "Amazon agency",
    "Amazon FBA agency",
    "done-for-you Amazon",
    "Amazon brand building",
    "Amazon product launch",
    "Amazon PPC management",
    "Amazon listing optimization",
    "Sunny Ali",
    "Extreme Commerce",
    "Walmart marketplace",
    "TikTok Shop agency",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Extreme Commerce — Build Profitable Amazon Brands",
    description:
      "Done-for-you Amazon businesses. Launch, scale, and profit — backed by a 1M+ community.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Services />
        <Platforms />
        <Founder />
        <Highlights />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
