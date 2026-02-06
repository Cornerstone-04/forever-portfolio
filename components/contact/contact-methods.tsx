import { motion } from "motion/react";
import { contactMethods } from "@/lib/contact-methods";

export const ContactMethods = () => {
  return (
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
            <em>Contact Info</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-[#B8AB9C]/20 p-6 hover:border-[#C4A69B]/40 hover:bg-[#CFC8BE]/10 transition-all duration-300 group"
                >
                  <Icon
                    className="text-[#C4A69B] mb-4 group-hover:scale-110 transition-transform"
                    size={24}
                  />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-2">
                    {method.title}
                  </p>
                  <p className="text-lg text-[#3d3d3d] group-hover:text-[#C4A69B] transition-colors">
                    {method.value}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
