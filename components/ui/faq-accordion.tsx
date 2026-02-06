"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <motion.div
          key={item.q}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="border border-[#B8AB9C]/20 hover:border-[#C4A69B]/40 transition-colors duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 bg-[#ECE4DB] hover:bg-[#CFC8BE]/30 transition-colors duration-300"
          >
            <h3 className="text-base md:text-lg font-medium text-[#3d3d3d] text-left leading-relaxed">
              {item.q}
            </h3>
            <ChevronDown
              size={20}
              className={`shrink-0 text-[#C4A69B] transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 border-t border-[#B8AB9C]/20 bg-[#CFC8BE]/10">
              <p className="text-base text-[#B8AB9C] leading-relaxed">
                {item.a}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
