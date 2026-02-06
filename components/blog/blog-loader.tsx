import { motion } from "motion/react";

export const BlogLoader = ({ label }: { label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center py-12"
    >
      <p className="text-[#B8AB9C]">{label}</p>
    </motion.div>
  );
};
