import { experience } from "@/lib/resume";
import { motion } from "motion/react";

export const ResumeExperience = () => {
  return (
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
  );
};
