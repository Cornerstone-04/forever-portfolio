import { motion } from "motion/react";

export const BlogLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center py-12"
    >
      <p className="text-[#B8AB9C]">Loading articles...</p>
    </motion.div>
  );
};
