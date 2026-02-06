"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const featuredWork = [
    {
      title: "Mental Health & Fitness",
      category: "Social Media Copy",
      metric: "235% increase in lead generation",
      skills: ["Storytelling", "Creative Writing", "Lead Generation"],
    },
    {
      title: "Ed-Tech Brand",
      category: "Email Campaign",
      metric: "1,000+ responses in 7 days",
      skills: ["Email Marketing", "Copywriting", "Engagement"],
    },
    {
      title: "Hackathon Campaign",
      category: "Audio-Visual Copy",
      metric: "2,000+ sign-ups in 2 months",
      skills: ["Scriptwriting", "Storytelling", "Creative Direction"],
    },
  ];

  return (
    <div ref={containerRef} className="bg-[#ECE4DB]">
      {/* Hero Section - Giant Editorial Text */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="min-h-screen flex items-center justify-center px-4 md:px-12 pt-32 pb-20"
      >
        <div className="max-w-400 w-full">
          {/* Small intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-[#B8AB9C] text-xs md:text-sm uppercase tracking-[0.3em]">
              Copywriter &amp; Content Strategist
            </span>
          </motion.div>

          {/* MASSIVE stacked headlines */}
          <div className="space-y-0 leading-[0.85] mb-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-[clamp(2.3rem,12vw,12rem)] sm:text-[clamp(2.8rem,14vw,12rem)] md:text-[clamp(3.8rem,16vw,12rem)] font-black leading-[0.85] tracking-tighter text-[#3d3d3d] uppercase"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
              >
                Words That
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-[clamp(2.3rem,12vw,12rem)] sm:text-[clamp(2.8rem,14vw,12rem)] md:text-[clamp(3.8rem,16vw,12rem)] font-black leading-[0.85] tracking-tighter text-[#C4A69B] uppercase"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
              >
                Convert
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <h1
                className="text-[clamp(2.3rem,12vw,12rem)] sm:text-[clamp(2.8rem,14vw,12rem)] md:text-[clamp(3.8rem,16vw,12rem)] font-black leading-[0.85] tracking-tighter text-[#3d3d3d] uppercase"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
              >
                &amp; Connect
              </h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-0.5 md:h-1 lg:h-2 bg-[#C4A69B] origin-left mt-2 md:mt-4"
              />
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-[#B8AB9C] leading-relaxed mb-8">
              I turn boring brand messages into stuff people actually want to
              read. If your brand needs words with personality, nice to meet
              you! 👋🏻
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[#3d3d3d] hover:text-[#C4A69B] transition-colors group"
            >
              <span className="text-sm uppercase tracking-[0.2em]">
                View My Work
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-20 md:mt-32"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                width="20"
                height="32"
                viewBox="0 0 24 40"
                className="text-[#B8AB9C]"
              >
                <path
                  d="M12 5L12 35M12 35L8 31M12 35L16 31"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Work Section */}
      <section className="py-24 md:py-32 px-4 md:px-12">
        <div className="max-w-400 mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-2">
              <span
                className="text-[120px] font-light text-[#C4A69B]/20 leading-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                01
              </span>
            </div>
            <div className="md:col-span-10">
              <h2
                className="text-5xl md:text-7xl font-light mb-6 text-[#3d3d3d]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <em>Featured Work</em>
              </h2>
              <p className="text-lg text-[#B8AB9C] max-w-2xl">
                A selection of projects where strategic copy met measurable
                results. Each piece crafted to connect, engage, and convert.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredWork.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-[#CFC8BE]/20 p-8 h-full border border-[#B8AB9C]/20 hover:border-[#C4A69B]/40 transition-all duration-500">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-4 block">
                    {project.category}
                  </span>
                  <h3
                    className="text-2xl font-light mb-4 text-[#3d3d3d] group-hover:text-[#C4A69B] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-3xl font-bold text-[#C4A69B] mb-6"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {project.metric}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-[#B8AB9C]/10 text-[#3d3d3d]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[#3d3d3d] hover:text-[#C4A69B] transition-colors group"
            >
              <span className="text-sm uppercase tracking-[0.2em]">
                View All Projects
              </span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-4 md:px-12 bg-linear-to-b from-[#ECE4DB] to-[#CFC8BE]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-light mb-8 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <em>Let&apos;s Create Something</em>
            <br />
            <span className="text-[#C4A69B]">Remarkable</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#B8AB9C] mb-12 max-w-2xl mx-auto"
          >
            Ready to Transform Your Brand Message? Let&apos;s collaborate on
            copy that converts and content that connects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3d3d3d] text-[#ECE4DB] hover:bg-[#C4A69B] transition-all duration-300 group"
            >
              <span className="uppercase tracking-[0.2em] text-sm">
                Get In Touch
              </span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
