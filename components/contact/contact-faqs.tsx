import { motion } from "motion/react";
import { FAQAccordion } from "../ui/faq-accordion";
import { contactFAQS } from "@/lib/contact-methods";

export const ContactFaqs = () => {
  return (
    <section className="max-w-400 mx-auto px-6 py-24 border-t border-[#B8AB9C]/20">
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
          <em>FAQ</em>
        </h2>

        <FAQAccordion items={contactFAQS} />
      </motion.div>
    </section>
  );
};
