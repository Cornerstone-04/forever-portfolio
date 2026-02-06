import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const BlogNewsletter = () => {
  return (
    <section className="max-w-400 mx-auto px-6 pt-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-light mb-6 text-[#3d3d3d]">
          Subscribe to Forever Ephraim
        </h2>
        <p className="text-lg text-[#B8AB9C] max-w-2xl mb-8 leading-relaxed">
          Get new articles about content strategy, editorial design, and
          storytelling delivered directly to your inbox. Join a community of
          creators and strategists.
        </p>
        <Link
          href="https://foreverephraim.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#3d3d3d] text-[#ECE4DB] font-bold transition-all hover:bg-[#C4A69B]"
        >
          Subscribe Now
          <ArrowRight size={18} />
        </Link>
      </motion.div>
    </section>
  );
};
