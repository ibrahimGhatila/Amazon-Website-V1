import { PageCTA } from "@/components/sections/PageCTA";

export function AboutCTA() {
  return (
    <PageCTA
      eyebrow="BUILD WITH US"
      heading={
        <>
          Build with the team that&rsquo;s{" "}
          <span className="text-brand-yellow">already done it.</span>
        </>
      }
      primaryLabel="Explore our services"
      primaryHref="/services"
      secondaryLabel="Talk to us"
      secondaryHref="/contact"
    />
  );
}
