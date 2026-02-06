import { type BlogPost } from "@/lib/blog";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export const BlogPostCard = ({ post, index }: BlogPostCardProps) => {
  return (
    <motion.article
      key={post.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="border-b border-[#B8AB9C]/20 pb-24 group"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Image Container */}
        {post.image && (
          <div className="w-full md:w-1/3 aspect-4/3 relative overflow-hidden bg-[#B8AB9C]/10">
            <Link href={`/blog/${post.slug}`}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-contain object-top grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Link>
          </div>
        )}

        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-4">
            {post.pubDate}
          </p>
          <Link href={`/blog/${post.slug}`} className="group/link">
            <h2
              className="text-3xl md:text-5xl font-light text-[#3d3d3d] mb-6 leading-tight group-hover/link:text-[#C4A69B] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {post.title}
            </h2>
          </Link>
          <p className="text-base text-[#B8AB9C] leading-relaxed mb-8 max-w-2xl">
            {post.description}
          </p>
          <div className="flex gap-6">
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#C4A69B] hover:gap-3 transition-all"
            >
              Read Article
              <ArrowRight size={16} />
            </Link>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#B8AB9C] hover:text-[#C4A69B] hover:gap-3 transition-all"
            >
              View on Substack
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
