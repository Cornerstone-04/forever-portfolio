"use client";

import { motion } from "motion/react";

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
                <em>My Journey</em>
              </h2>

              <div className="space-y-8 text-lg text-[#B8AB9C] leading-relaxed">
                <p>
                  My fascination with words began early—recognizing how language
                  shapes perception, influences emotion, and drives action. This
                  curiosity led me to explore content creation, strategic
                  communication, and the powerful intersection of storytelling
                  and business results.
                </p>

                <p>
                  Over years of working with diverse brands—from passionate
                  startups to established organizations—I&apos;ve developed a
                  nuanced approach to content that balances creativity with
                  strategy. I&apos;ve learned that the best copy doesn&apos;t
                  just sound beautiful; it understands the audience, speaks to
                  their needs, and compels them toward action.
                </p>

                <p>
                  Today, I specialize in creating compelling narratives that
                  drive measurable results. Whether it&apos;s crafting social
                  media copy that converts, developing email campaigns that
                  engage, or writing scripts that inspire, my goal is always the
                  same: connect, convert, and create lasting impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 md:h-full min-h-96"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#C4A69B]/20 via-[#B8AB9C]/10 to-[#CFC8BE]/20 rounded-lg border border-[#B8AB9C]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 bg-[#CFC8BE]/30 rounded-full flex items-center justify-center border-2 border-[#B8AB9C]/30">
                    <span className="text-5xl md:text-6xl">✍️</span>
                  </div>
                  <p className="text-[#B8AB9C] text-sm uppercase tracking-[0.2em]">
                    Crafting Compelling Narratives
                  </p>
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
