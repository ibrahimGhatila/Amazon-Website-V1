import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPC Advertising — Amazon ads that scale profitably",
  description:
    "Sponsored Products, Brands, Display, and DSP — managed by a team that's spent $100M+ on Amazon ads. Lower ACOS, higher TACOS, more profit. Weekly reporting included.",
  keywords: [
    "Amazon PPC management",
    "Amazon ads agency",
    "Sponsored Products management",
    "Amazon DSP",
    "Amazon TACOS",
    "Amazon ACOS reduction",
    "Amazon ad scaling",
  ],
  alternates: { canonical: "/services/ppc-advertising" },
  openGraph: {
    title: "PPC Advertising — Amazon ads that scale profitably",
    description:
      "$100M+ in managed Amazon spend. Lower ACOS, higher TACOS, more profit.",
    url: "/services/ppc-advertising",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Amazon PPC Advertising Management",
  provider: {
    "@type": "Organization",
    name: "Extreme Commerce",
    url: "https://extremecommerce.com",
  },
  areaServed: "Worldwide",
  description:
    "Full-funnel Amazon ad management — Sponsored Products, Brands, Display, and DSP. Backed by $100M+ in managed spend.",
  url: "https://extremecommerce.com/services/ppc-advertising",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
