import { skills } from "@/lib/resume";
import { motion } from "motion/react";

export const ResumeSkills = () => {
  return (
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
  );
};
