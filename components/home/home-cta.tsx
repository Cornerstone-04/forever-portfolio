"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HomeCTA() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-12 bg-linear-to-b from-[#ECE4DB] to-[#CFC8BE]/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-light mb-8 text-[#3d3d3d]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <em>Let&apos;s Create Something</em>
          <br />
          <span className="text-[#C4A69B]">Remarkable</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[#B8AB9C] mb-12 max-w-2xl mx-auto"
        >
          Ready to Transform Your Brand Message? Let&apos;s collaborate on copy
          that converts and content that connects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3d3d3d] text-[#ECE4DB] hover:bg-[#C4A69B] transition-all duration-300 group"
          >
            <span className="uppercase tracking-[0.2em] text-sm">
              Get In Touch
            </span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
