import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentorship — 1:1 coaching for serious Amazon sellers",
  description:
    "Cut years off your learning curve with structured 1:1 mentorship from operators who've launched 1,200+ products. Strategy, accountability, and direct feedback on your business.",
  keywords: [
    "Amazon mentorship",
    "Amazon 1-on-1 coaching",
    "Amazon FBA mentor",
    "Amazon seller coaching",
    "Extreme Commerce mentorship",
  ],
  alternates: { canonical: "/services/mentorship" },
  openGraph: {
    title: "Mentorship — 1:1 coaching for serious Amazon sellers",
    description:
      "Structured 1:1 mentorship from operators who've launched 1,200+ products.",
    url: "/services/mentorship",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Amazon Mentorship & Coaching",
  provider: {
    "@type": "Organization",
    name: "Extreme Commerce",
    url: "https://extremecommerce.com",
  },
  areaServed: "Worldwide",
  description:
    "1:1 mentorship for serious Amazon sellers — strategy, accountability, and direct feedback from operators who've launched 1,200+ products.",
  url: "https://extremecommerce.com/services/mentorship",
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
