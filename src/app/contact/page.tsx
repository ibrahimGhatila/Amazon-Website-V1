import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { ContactHero } from "./_components/ContactHero";
import { ContactIntents } from "./_components/ContactIntents";
import { ContactForm } from "./_components/ContactForm";
import { ContactOffices } from "./_components/ContactOffices";
import { ContactFAQ } from "./_components/ContactFAQ";
import { AboutCTA } from "../about/_components/AboutCTA";

export const metadata: Metadata = {
  title: "Contact — Get in touch with Extreme Commerce",
  description:
    "Apply for Elite, partner with us, request press, or just send a message. Real humans reply within 24 hours on weekdays.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <ContactHero />
        <ContactIntents />
        <ContactForm />
        <ContactOffices />
        <ContactFAQ />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
