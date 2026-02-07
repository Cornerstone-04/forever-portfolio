import { motion } from "motion/react";

export const Underline = () => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: 1.2,
        delay: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-0.5 md:h-1 lg:h-2 bg-[#C4A69B] origin-left mt-2 md:mt-4"
    />
  );
};
