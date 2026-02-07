"use client";

import React from "react";
import { useState } from "react";
import {
  ContactFaqs,
  ContactForm,
  ContactHero,
  ContactMethods,
  ContactSession,
} from "@/components/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   setSubmitted(true);
  //   setTimeout(() => {
  //     setFormData({ name: "", email: "", subject: "", message: "" });
  //     setSubmitted(false);
  //   }, 3000);
  // };

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
