import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Assistants — Trained Amazon VAs ready to plug in",
  description:
    "Hire trained Amazon VAs from our talent pool. Listing operations, inventory, customer service, PPC support, case management — vetted operators who already know Seller Central.",
  keywords: [
    "Amazon virtual assistant",
    "Amazon VA hire",
    "Amazon VA Pakistan",
    "trained Amazon VA",
    "Seller Central VA",
    "Amazon operations VA",
  ],
  alternates: { canonical: "/services/virtual-assistants" },
  openGraph: {
    title: "Virtual Assistants — Trained Amazon VAs ready to plug in",
    description:
      "Vetted Amazon operators. Listings, inventory, support, PPC, case management.",
    url: "/services/virtual-assistants",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Amazon Virtual Assistant Staffing",
  provider: {
    "@type": "Organization",
    name: "Extreme Commerce",
    url: "https://extremecommerce.com",
  },
  areaServed: "Worldwide",
  description:
    "Trained, vetted Amazon virtual assistants for listings, inventory, customer service, PPC support, and case management.",
  url: "https://extremecommerce.com/services/virtual-assistants",
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
