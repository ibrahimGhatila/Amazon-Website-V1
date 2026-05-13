import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch & Analytics — Data-driven Amazon product launches",
  description:
    "Product validation, keyword strategy, launch sequencing, and weekly analytics. We launch products that rank, convert, and stay profitable — backed by a decade of launch data.",
  keywords: [
    "Amazon product launch",
    "Amazon launch service",
    "Amazon analytics",
    "Amazon keyword research",
    "Amazon ranking strategy",
    "Amazon launch agency",
  ],
  alternates: { canonical: "/services/launch-analytics" },
  openGraph: {
    title: "Launch & Analytics — Data-driven Amazon product launches",
    description:
      "Validation, keyword strategy, ranking, weekly analytics. Launches that stay profitable.",
    url: "/services/launch-analytics",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Amazon Product Launch & Analytics",
  provider: {
    "@type": "Organization",
    name: "Extreme Commerce",
    url: "https://extremecommerce.com",
  },
  areaServed: "Worldwide",
  description:
    "Product validation, keyword strategy, launch sequencing, and weekly analytics for Amazon sellers.",
  url: "https://extremecommerce.com/services/launch-analytics",
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
