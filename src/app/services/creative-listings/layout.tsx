import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative & Listings — Amazon listings that convert",
  description:
    "Photography, video, A+ content, brand stores, and conversion-optimized copy. Listings built to win the click, win the buy box, and keep the customer.",
  keywords: [
    "Amazon listing optimization",
    "Amazon A+ content",
    "Amazon brand store design",
    "Amazon product photography",
    "Amazon listing copywriting",
    "Amazon creative services",
  ],
  alternates: { canonical: "/services/creative-listings" },
  openGraph: {
    title: "Creative & Listings — Amazon listings that convert",
    description:
      "Photography, video, A+ content, brand stores, and conversion-optimized copy.",
    url: "/services/creative-listings",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Amazon Creative & Listing Optimization",
  provider: {
    "@type": "Organization",
    name: "Extreme Commerce",
    url: "https://extremecommerce.com",
  },
  areaServed: "Worldwide",
  description:
    "Photography, video, A+ content, brand stores, and conversion-optimized copy for Amazon listings.",
  url: "https://extremecommerce.com/services/creative-listings",
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
