"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchBlogPosts, type BlogPost } from "@/lib/blog";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const blogPosts = await fetchBlogPosts();
        setPosts(blogPosts);
      } catch (err) {
        setError("Unable to load blog posts at this time.");
        console.error("[v0] Blog fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#ECE4DB]">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-6xl md:text-7xl font-light leading-tight mb-12 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Blog
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-base text-[#B8AB9C] leading-relaxed">
              Thoughts, insights, and deep dives on content strategy, editorial
              design, brand communication, and storytelling.
            </p>
            <p className="text-base text-[#B8AB9C] leading-relaxed">
              Subscribe to the Substack newsletter to receive new articles
              directly in your inbox and join a community of content creators
              and strategists.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#B8AB9C]/20" />
      </div>

      {/* Articles Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-[#B8AB9C]">Loading articles...</p>
          </motion.div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-[#B8AB9C]">{error}</p>
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
        ) : posts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-[#B8AB9C]/20 pb-12 group"
                >
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-4">
                        {post.pubDate}
                      </p>
                      <Link href={`/blog/${post.slug}`} className="group/link">
                        <h2
                          className="text-3xl md:text-4xl font-light text-[#3d3d3d] mb-4 leading-tight group-hover/link:text-[#C4A69B] transition-colors"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-base text-[#B8AB9C] leading-relaxed mb-6">
                        {post.description}
                      </p>
                      <div className="flex gap-4">
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
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-[#B8AB9C]/20">
              <p className="text-[#B8AB9C] mb-6">
                These are the latest posts from the Substack. For the full
                archive and to subscribe for updates:
              </p>
              <a
                href="https://foreverephraim.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#3d3d3d] text-[#ECE4DB] font-bold transition-all hover:bg-[#C4A69B]"
              >
                Visit Substack Newsletter
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-[#B8AB9C]">No articles available yet.</p>
          </motion.div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-[#B8AB9C]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-5xl md:text-6xl font-light mb-6 text-[#3d3d3d]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Subscribe to Forever Ephraim
          </h2>
          <p className="text-lg text-[#B8AB9C] max-w-2xl mb-8 leading-relaxed">
            Get new articles about content strategy, editorial design, and
            storytelling delivered directly to your inbox. Join a community of
            creators and strategists.
          </p>
          <a
            href="https://foreverephraim.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#3d3d3d] text-[#ECE4DB] font-bold transition-all hover:bg-[#C4A69B]"
          >
            Subscribe Now
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
