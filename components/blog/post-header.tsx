import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";

export const PostHeader = ({ post }: { post: BlogPost }) => {
  return (
    <article className="max-w-4xl mx-auto px-6 pt-6 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-6">
          {post.pubDate}
        </p>
        <h1
          className="text-5xl md:text-6xl font-light leading-tight mb-8 text-[#3d3d3d]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {post.title}
        </h1>
        <p className="text-lg text-[#B8AB9C] mb-8 leading-relaxed max-w-2xl">
          {post.description}
        </p>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#3d3d3d] text-[#ECE4DB] font-bold transition-all hover:bg-[#C4A69B]"
        >
          Read on Substack
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </article>
  );
};
