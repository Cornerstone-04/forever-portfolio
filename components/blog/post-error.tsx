import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const PostError = ({ error }: { error: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center py-12"
    >
      <h1
        className="text-3xl md:text-4xl font-light mb-4 text-[#3d3d3d]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {error || "Post not found"}
      </h1>
      <p className="text-lg text-[#B8AB9C] mb-8 leading-relaxed max-w-2xl">
        The article you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 font-bold text-[#C4A69B] hover:gap-3 transition-all"
      >
        <ArrowLeft size={18} />
        Back to Blog
      </Link>
    </motion.div>
  );
};
