"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function WorkPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Mental Health & Fitness",
      category: "Social Media Copy",
      description:
        "Blended storytelling and psychology-driven messaging to boost engagement and lead generation.",
      metric: "235% increase in lead generation",
      skills: ["Storytelling", "Creative Writing", "Lead Generation"],
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Custom Storage (Woodwork)",
      category: "Social Media Copy",
      description:
        "Leveraged storytelling and audience insights to break through a low-response market. Combined emotional resonance with behavioral triggers.",
      metric: "300% increase in weekly lead volume",
      skills: ["Storytelling", "Creative Writing", "Lead Generation"],
      image:
        "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Ed-Tech Brand (Nigerian Graduate Report)",
      category: "Email Campaign",
      description:
        "Created a storytelling-driven email campaign that inspired rapid participation and trust with a conversational tone.",
      metric: "1,000+ responses in 7 days",
      skills: ["Email Marketing", "Copywriting", "Engagement Strategy"],
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Deela Dental Clinic",
      category: "Email Campaign",
      description:
        "Developed a friendly, youth-oriented campaign that simplified medical language using relatable Nigerian slang, visuals, and humor.",
      metric: "Simplified medical content (IV aligners)",
      skills: ["Copywriting", "Email Marketing", "Audience Targeting"],
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Hackathon Campaign (Klusterthon)",
      category: "Audio-Visual Copywriting",
      description:
        "Wrote and directed copy for all video marketing materials, from voiceover scripts to on-screen text. Collaborated with editing team.",
      metric: "2,000+ sign-ups in under two months",
      skills: ["Scriptwriting", "Storytelling", "Creative Direction"],
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Laundry Service",
      category: "Social Media Copy",
      description:
        "Used tailored messaging to double engagement and grow local leads despite challenging low-response location.",
      metric: "160% increase in lead volume",
      skills: ["Copywriting", "Community Engagement", "Marketing Strategy"],
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
    },
  ];

  const categories = [
    "all",
    "Social Media Copy",
    "Email Campaign",
    "Audio-Visual Copywriting",
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-[#ECE4DB] pt-32">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4 md:px-12">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-8 block">
              Portfolio
            </span>
            <h1
              className="text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.9] tracking-tighter text-[#3d3d3d] uppercase mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Selected
              <br />
              <span className="text-[#C4A69B]">Work</span>
            </h1>
            <p className="text-lg text-[#B8AB9C] max-w-2xl">
              Campaigns that drove measurable results through strategic
              storytelling and data-driven copywriting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12 px-4 md:px-12">
        <div className="max-w-400 mx-auto">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm uppercase tracking-[0.15em] transition-all ${
                  filter === cat
                    ? "bg-[#3d3d3d] text-[#ECE4DB]"
                    : "bg-[#CFC8BE]/20 text-[#B8AB9C] hover:bg-[#CFC8BE]/40"
                }`}
              >
                {cat === "all" ? "All Work" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 md:px-12 pb-32">
        <div className="max-w-400 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="mb-6 overflow-hidden bg-[#CFC8BE]/20 aspect-4/3 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-3 block">
                  {project.category}
                </span>

                <h3
                  className="text-2xl font-light mb-3 text-[#3d3d3d] group-hover:text-[#C4A69B] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>

                <p className="text-[#3d3d3d]/70 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <p
                  className="text-2xl font-bold text-[#C4A69B] mb-6"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
