import { certifications } from "@/lib/resume";
import { motion } from "motion/react";

export const ResumeCertification = () => {
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
  );
};
