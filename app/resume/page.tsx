"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const experience = [
  {
    title: "Senior Content Strategist",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Providing content strategy and editorial design services to purpose-driven organizations. Developing brand voices, content frameworks, and publication designs that elevate communication and drive engagement.",
    highlights: [
      "Developed content strategies for 15+ brands across industries",
      "Increased client content engagement by average 134%",
      "Art directed and designed 8 editorial publications",
    ],
  },
  {
    title: "Content Strategy Lead",
    company: "Digital Agency Name",
    period: "2021 - 2023",
    description:
      "Led content strategy initiatives for enterprise clients, developing comprehensive content frameworks and managing cross-functional teams. Specialized in brand voice development and editorial design.",
    highlights: [
      "Managed content strategy for 5 enterprise clients",
      "Designed and implemented brand voice guidelines for 12 brands",
      "Led team of 3 writers and designers",
    ],
  },
  {
    title: "Content Writer & Designer",
    company: "Marketing Firm",
    period: "2020 - 2021",
    description:
      "Created compelling content and visual designs for diverse client base. Collaborated with designers and strategists to develop integrated content campaigns.",
    highlights: [
      "Produced 200+ pieces of content across multiple formats",
      "Designed publication layouts and brand guidelines",
      "Increased client social media engagement by 89%",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Arts in Communications",
    institution: "University Name",
    year: "2018",
    details: "Specialized in digital communications and content strategy",
  },
  {
    degree: "Certificate in Editorial Design",
    institution: "Design Institute",
    year: "2020",
    details: "Advanced training in publication design and typography",
  },
];

const skills = [
  {
    category: "Content & Strategy",
    items: [
      "Content Strategy",
      "Brand Voice Development",
      "Editorial Planning",
      "Content Audit & Analysis",
      "Audience Research",
      "Message Architecture",
    ],
  },
  {
    category: "Writing & Editing",
    items: [
      "Copywriting",
      "Content Writing",
      "Technical Writing",
      "Editorial Editing",
      "Proofreading",
      "Brand Voice Guidelines",
    ],
  },
  {
    category: "Design & Publishing",
    items: [
      "Editorial Design",
      "Publication Design",
      "Typography",
      "Layout Design",
      "Brand Guidelines",
      "Figma, InDesign, Adobe Suite",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Adobe Creative Suite",
      "Figma",
      "Content Management Systems",
      "WordPress",
      "Google Workspace",
      "Project Management Tools",
    ],
  },
];

const certifications = [
  "Content Strategy Certification",
  "Editorial Design Masterclass",
  "Brand Strategy Workshop",
  "Advanced Typography Course",
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#ECE4DB]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-8 block">
            Professional Background
          </span>

          <h1
            className="text-5xl md:text-6xl font-light leading-tight mb-8 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Resume
          </h1>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-base text-[#B8AB9C] leading-relaxed max-w-2xl">
              Comprehensive overview of my professional experience, education,
              and skills in content strategy and editorial design.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#3d3d3d] text-[#ECE4DB] font-medium whitespace-nowrap hover:bg-[#C4A69B] transition-all duration-300">
              <Download size={18} />
              Download PDF
            </button>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-[#B8AB9C]/20" />
      </div>

      {/* Experience Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl font-light mb-12 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experience
          </h2>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[#C4A69B] pl-6 relative"
              >
                <div className="absolute left-0 top-0 w-3 h-3 bg-[#C4A69B] rounded-full -translate-x-1.5" />

                <div className="mb-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-[#3d3d3d]">
                        {job.title}
                      </h3>
                      <p className="text-base font-medium text-[#C4A69B]">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#B8AB9C] leading-relaxed mb-4">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-[#B8AB9C] flex items-start gap-3"
                    >
                      <span className="w-1 h-1 bg-[#C4A69B] rounded-full shrink-0 mt-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-[#B8AB9C]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl font-light mb-12 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-[#3d3d3d] mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1.5 bg-[#B8AB9C]/10 text-[#3d3d3d] text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-[#B8AB9C]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl font-light mb-12 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[#C4A69B] pl-6 relative"
              >
                <div className="absolute left-0 top-0 w-3 h-3 bg-[#C4A69B] rounded-full -translate-x-1.5" />

                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-[#3d3d3d]">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-medium text-[#C4A69B]">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-sm text-[#B8AB9C] mb-2">{edu.details}</p>

                <span className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C]">
                  {edu.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-[#B8AB9C]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl font-light mb-8 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Certifications
          </h2>

          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.li
                key={cert}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-base text-[#B8AB9C] flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 bg-[#C4A69B] rounded-full" />
                {cert}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
