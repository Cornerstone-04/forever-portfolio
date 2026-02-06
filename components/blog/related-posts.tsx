import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl font-light mb-8 text-[#3d3d3d]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          More Articles
        </h2>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-[#B8AB9C]/20 pb-8 group"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-3">
                {post.pubDate}
              </p>
              <Link href={`/blog/${post.slug}`}>
                <h3
                  className="text-2xl md:text-3xl font-light text-[#3d3d3d] mb-3 leading-tight group-hover:text-[#C4A69B] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {post.title}
                </h3>
              </Link>
              <p className="text-base text-[#B8AB9C] leading-relaxed mb-4">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C4A69B] hover:gap-3 transition-all"
              >
                Read Article
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 border-t border-[#B8AB9C]/20 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold text-lg text-[#C4A69B] hover:gap-3 transition-all"
          >
            View All Articles
            <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
