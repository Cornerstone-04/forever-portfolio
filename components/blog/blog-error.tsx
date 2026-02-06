import { motion } from "motion/react";

export const BlogError = ({ message }: { message: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center py-12"
    >
      <p className="text-[#B8AB9C]">{message}</p>
      <p className="text-[#B8AB9C] mt-2">
        Visit{" "}
        <a
          href="https://foreverephraim.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C4A69B] hover:underline"
        >
          Substack
        </a>{" "}
        to read all articles
      </p>
    </motion.div>
  );
};
