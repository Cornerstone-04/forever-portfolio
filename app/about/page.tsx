"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
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
              About
            </span>
            <h1
              className="text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.9] tracking-tighter text-[#3d3d3d] uppercase mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Crafting
              <br />
              <span className="text-[#C4A69B]">Narratives</span>
            </h1>
            <p className="text-lg text-[#B8AB9C] max-w-2xl">
              I&apos;m a copywriter and content strategist dedicated to creating
              compelling stories that drive engagement, conversions, and
              meaningful connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 px-4 md:px-12 border-t border-[#B8AB9C]/20">
        <div className="max-w-400 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
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
                <em> &quot;Forever?? That&apos;s Your Real Name?&quot;</em>
              </h2>

              <div className="space-y-8 text-lg text-[#B8AB9C] leading-relaxed">
                <p>
                  YES, that&apos;s really my name, and no, I didn&apos;t make it
                  up for branding, though maybe I should&apos;ve.
                </p>

                <p>
                  I&apos;ve been writing professionally for 4+ years, starting
                  out in the trenches of digital marketing: social posts, email
                  campaigns, blogs, you name it. Since then, I&apos;ve written
                  for hundreds of brands (plus my own blog — On a Journey) and
                  I&apos;ve learned this: good copy isn&apos;t about sounding
                  smart, it&apos;s about sounding human.
                </p>

                <p>
                  That&apos;s what I do. Copies that connect, make people feel
                  something, and (bonus) actually convert.
                </p>
                <p>
                  Case in point: a roofing client hit $100K in 10 months,
                  another doubled leads, and a mental health company tripled
                  engagement by leaning into storytelling that felt real.
                  It&apos;s not magic, it&apos;s just words that sound like they
                  were written by a person, not a robot.
                </p>

                <p>
                  So… if your brand is ready for copy that feels alive, WELCOME.
                  Let&apos;s get you initiated.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative flex justify-center items-start md:h-full"
            >
              {/* Adjust max-w-sm (small) or max-w-md (medium) to control the size */}
              <div className="relative w-full max-w-lg overflow-hidden border border-[#B8AB9C]/20 bg-[#CFC8BE]/10 shadow-xl">
                <div className="relative aspect-3/4">
                  <Image
                    src="/forever-2.jpeg"
                    alt="Forever Ephraim"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
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
              <em>What I Offer</em>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Social Media Copywriting",
                  description:
                    "Engaging, platform-specific copy that drives engagement, followers, and conversions. I craft compelling posts, captions, and campaigns tailored to your audience and goals.",
                },
                {
                  title: "Email Campaigns",
                  description:
                    "Persuasive email sequences that nurture relationships and drive action. From newsletter copy to launch campaigns, I create messages that resonate and convert.",
                },
                {
                  title: "Brand Voice & Strategy",
                  description:
                    "Defining and developing your brand's unique voice, tone, and messaging framework. Creating consistency across all communication channels and touchpoints.",
                },
                {
                  title: "Content Strategy",
                  description:
                    "Comprehensive strategies that align your content with business goals. Planning, positioning, and executing content that reaches your audience where they are.",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3
                    className="text-2xl font-light mb-4 text-[#3d3d3d]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#B8AB9C] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
