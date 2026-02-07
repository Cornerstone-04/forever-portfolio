"use client";

import {
  ContactFaqs,
  ContactForm,
  ContactHero,
  ContactMethods,
  ContactSession,
} from "@/components/contact";

export default function Contact() {
  return (
    <div className="bg-[#ECE4DB] pt-24">
      {/* Hero Section */}
      <ContactHero />
      {/* Contact Methods */}
      <ContactMethods />
      {/* Calendar Session */}
      <ContactSession />
      {/* Contact Form Section */}
      <ContactForm />
      {/* FAQ Section */}
      <ContactFaqs />
    </div>
  );
}
