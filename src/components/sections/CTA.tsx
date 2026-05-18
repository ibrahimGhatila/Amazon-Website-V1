import { PageCTA } from "@/components/sections/PageCTA";

export function CTA() {
  return (
    <PageCTA
      id="contact"
      eyebrow="APPLICATIONS OPEN"
      heading={
        <>
          Ready to build something{" "}
          <span className="text-brand-yellow">profitable?</span>
        </>
      }
      primaryLabel="Book a Call"
      primaryHref="#"
      secondaryLabel="Download the playbook"
      secondaryHref="#"
    />
  );
}
