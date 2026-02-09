import { motion } from "motion/react";
import { BlogPost } from "@/lib/blog";

export const PostContent = ({ post }: { post: BlogPost }) => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="prose prose-sm max-w-none"
      >
        <div
          className="text-base text-[#B8AB9C] leading-relaxed flex flex-col gap-2"
          dangerouslySetInnerHTML={{
            __html: post.content.substring(0, 5000) + "...",
          }}
        />
        <p className="mt-8 text-[#B8AB9C] font-semibold italic">
          Read the full article on Substack to see the complete content, images,
          and formatting.
        </p>
      </motion.div>
    </section>
  );
};
