import { motion } from "motion/react";

export const BlogHero = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12">
      <div className="max-w-400 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-8 block">
            Blog
          </span>
          <h1 className="text-[clamp(2.5rem,12vw,10rem)] font-black leading-[0.9] tracking-tighter text-[#3d3d3d] uppercase mb-8">
            On a
            <br />
            <span className="text-[#C4A69B]">Journey</span>
          </h1>
          <p className="text-lg text-[#B8AB9C] max-w-2xl">
            Writing about life as it happens. The good, the awkward, and the
            lessons.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
