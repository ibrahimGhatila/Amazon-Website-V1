import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Live Webinar — Build a Profitable Amazon Brand",
  description:
    "Join Sunny Ali for a free live masterclass on building an Amazon Private Label brand that generates consistent monthly income. Proven frameworks, product research, and the exact roadmap to a sellable ecommerce asset.",
  keywords: [
    "Amazon webinar",
    "Amazon Private Label masterclass",
    "free Amazon webinar",
    "Amazon brand building webinar",
    "Sunny Ali webinar",
    "Amazon FBA training",
    "Extreme Commerce webinar",
  ],
  alternates: { canonical: "/webinar" },
  openGraph: {
    title: "Free Live Webinar — Build a Profitable Amazon Brand",
    description:
      "A free live masterclass on building an Amazon Private Label brand that generates consistent monthly income. Hosted by Sunny Ali.",
    url: "/webinar",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
