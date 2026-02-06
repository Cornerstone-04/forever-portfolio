"use client";

import React from "react";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { motion } from "motion/react";
import { useState } from "react";
import { contactMethods } from "@/lib/contact-methods";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-[#ECE4DB] pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 md:px-12">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-8 block">
              Get In Touch
            </span>
            <h1 className="text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.9] tracking-tighter text-[#3d3d3d] uppercase mb-8">
              Let&apos;s
              <br />
              <span className="text-[#C4A69B]">Connect</span>
            </h1>
            <p className="text-lg text-[#B8AB9C] max-w-2xl">
              Whether you need fresh words, strategic messaging, or just want to
              say hi — I&apos;d love to connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 md:py-32 px-4 md:px-12 border-t border-[#B8AB9C]/20">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl md:text-7xl font-light mb-12 text-[#3d3d3d]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <em>Contact Info</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-[#B8AB9C]/20 p-6 hover:border-[#C4A69B]/40 hover:bg-[#CFC8BE]/10 transition-all duration-300 group"
                  >
                    <Icon
                      className="text-[#C4A69B] mb-4 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                    <p className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-2">
                      {method.title}
                    </p>
                    <p className="text-lg text-[#3d3d3d] group-hover:text-[#C4A69B] transition-colors">
                      {method.value}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 md:px-12 border-t border-[#B8AB9C]/20 bg-[#DED7CD]/30">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="flex-1">
              <h2
                className="text-5xl md:text-7xl font-light mb-8 text-[#3d3d3d]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <em>Book a Session</em>
              </h2>
              <p className="text-lg text-[#B8AB9C] max-w-xl mb-8 leading-relaxed">
                Prefer a face-to-face conversation? Skip the back-and-forth and
                pick a time that works best for you. Let&apos;s discuss your
                project or strategy over a virtual coffee.
              </p>
              <motion.a
                href="https://calendar.app.google/WKaTNv7JceoWsq2SA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3d3d3d] text-[#ECE4DB] uppercase tracking-[0.2em] text-sm font-bold hover:bg-[#C4A69B] transition-all duration-300"
              >
                Open Calendar
              </motion.a>
            </div>

            {/* Visual Element for the Calendar Section */}
            <div className="hidden md:block w-1/3 aspect-square border border-[#B8AB9C]/20 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-[12rem] font-black italic">2026</span>
              </div>
              <div className="absolute inset-12 border border-[#B8AB9C]/20 flex flex-col justify-center px-8">
                <p className="text-[#3d3d3d] font-bold text-2xl mb-2">
                  Availability
                </p>
                <p className="text-[#B8AB9C] text-sm">Mon — Fri</p>
                <p className="text-[#B8AB9C] text-sm mb-6">9:00 AM — 5:00 PM</p>
                <div className="h-px bg-[#C4A69B]/40 w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 md:py-32 px-4 md:px-12 border-t border-[#B8AB9C]/20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl md:text-7xl font-light mb-12 text-[#3d3d3d]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <em>Send Message</em>
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#CFC8BE]/20 border border-[#B8AB9C]/20 p-12 rounded text-center"
              >
                <h3
                  className="text-2xl text-[#3d3d3d] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Thank You!
                </h3>
                <p className="text-[#B8AB9C]">
                  Your message has been received. I&apos;ll get back to you
                  soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-[0.2em] text-[#B8AB9C] mb-3"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#ECE4DB] border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/50 focus:outline-none focus:border-[#C4A69B] transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-[0.2em] text-[#B8AB9C] mb-3"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#ECE4DB] border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/50 focus:outline-none focus:border-[#C4A69B] transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="subject"
                    className="block text-sm uppercase tracking-[0.2em] text-[#B8AB9C] mb-3"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#ECE4DB] border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/50 focus:outline-none focus:border-[#C4A69B] transition-all"
                    placeholder="What is this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-[0.2em] text-[#B8AB9C] mb-3"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#ECE4DB] border border-[#B8AB9C]/30 text-[#3d3d3d] placeholder-[#B8AB9C]/50 focus:outline-none focus:border-[#C4A69B] transition-all resize-none"
                    placeholder="Tell me more about your project..."
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  type="submit"
                  className="w-full px-6 py-3 bg-[#3d3d3d] text-[#ECE4DB] uppercase tracking-[0.2em] text-sm font-medium hover:bg-[#C4A69B] transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-400 mx-auto px-6 py-24 border-t border-[#B8AB9C]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-7xl font-light mb-12 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <em>FAQ</em>
          </h2>

          <FAQAccordion
            items={[
              {
                q: "What services do you offer?",
                a: "I specialize in content strategy, editorial design, brand voice development, and storytelling. I work with organizations to create compelling narratives and strategic communication frameworks.",
              },
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary depending on scope and complexity. Strategy projects typically take 4-8 weeks, while editorial design projects range from 6-12 weeks. We can discuss specific timelines for your project.",
              },
              {
                q: "Do you work with startups?",
                a: "Yes! I love working with startups and helping them establish their brand voice and content strategy from the ground up. I offer flexible engagement models that work for early-stage companies.",
              },
              {
                q: "What is your pricing structure?",
                a: "Pricing varies based on project scope, complexity, and timeline. I offer project-based pricing, retainer arrangements, and hourly consulting. Let's discuss what works best for your needs.",
              },
              {
                q: "How do you approach content strategy?",
                a: "I start with deep audience research and brand analysis to understand your unique positioning. From there, I develop a comprehensive content strategy that aligns with your business goals and resonates with your target audience.",
              },
              {
                q: "Can I see samples of your work?",
                a: "Absolutely! Check out the Work section of this site to see selected projects. I'm happy to discuss case studies and results from previous projects during our initial consultation.",
              },
            ]}
          />
        </motion.div>
      </section>
    </div>
  );
}
