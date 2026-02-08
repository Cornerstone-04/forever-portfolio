"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const featuredWork = [
  {
    title: "Hackathon Campaign",
    category: "Audio-Visual Copy",
    metric: "2,000+ sign-ups in 2 months",
    skills: ["Scriptwriting", "Storytelling", "Creative Direction"],
  },
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
];

export function FeaturedWork() {
  return (
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
  );
}
