"use client";

import { certifications, education, experience, skills } from "@/lib/resume";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";

export default function Resume() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/docs/forever-ephraim.pdf";
    // link.href =
    //   "https://docs.google.com/uc?export=download&id=1-9yq7-cLr2Rzj4mLxCro9LD-SdVoVALJngmXCefYKuI";
    link.download = "Forever-Ephraim-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };
  return (
    <div className="min-h-screen bg-[#ECE4DB] pt-32">
      <section className="py-20 md:py-32 px-4 md:px-12">
        <div className="max-w-400 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-8 block">
              Resume{" "}
            </span>
            <h1
              className="text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.9] tracking-tighter text-[#3d3d3d] uppercase mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Professional
              <br />
              <span className="text-[#C4A69B]">Background</span>
            </h1>
            <p className="text-lg text-[#B8AB9C] max-w-2xl mb-8">
              A track record of transforming words into results for brands
              across industries.
            </p>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-[#3d3d3d] text-[#ECE4DB] font-medium whitespace-nowrap hover:bg-[#C4A69B] transition-all duration-300"
            >
              {downloaded ? (
                "Downloaded!"
              ) : (
                <>
                  <Download size={18} />
                  Download PDF
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-400 mx-auto px-6">
        <div className="h-px bg-[#B8AB9C]/20" />
      </div>

      {/* Experience Section */}
      <section className="max-w-400 mx-auto px-6 py-24">
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
                      <p className="text-base font-semibold text-[#C4A69B]">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-xs text-right font-semibold uppercase tracking-[0.2em] text-[#B8AB9C] whitespace-pre-wrap">
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
      <section className="max-w-400 mx-auto px-6 py-24 border-t border-[#B8AB9C]/20">
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
      <section className="max-w-400 mx-auto px-6 py-24 border-t border-[#B8AB9C]/20">
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

                <span className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C]">
                  {edu.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-400 mx-auto px-6 py-24 border-t border-[#B8AB9C]/20">
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
            Certifications
          </h2>

          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[#C4A69B] pl-6 relative"
              >
                <div className="absolute left-0 top-0 w-3 h-3 bg-[#C4A69B] rounded-full -translate-x-1.5" />

                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-[#3d3d3d]">
                    {cert.title}
                  </h3>
                  <p className="text-base font-medium text-[#C4A69B]">
                    {cert.issuer}
                  </p>
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C]">
                  {cert.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
