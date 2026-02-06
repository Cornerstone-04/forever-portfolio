"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, use } from "react";
import { fetchBlogPosts, type BlogPost } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        setLoading(true);
        const allPosts = await fetchBlogPosts();
        const currentPost = allPosts.find((p) => p.slug === slug);

        if (!currentPost) {
          setError("Blog post not found");
          return;
        }

        setPost(currentPost);
        const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
        setRelatedPosts(related);
      } catch (err) {
        console.error("[v0] Blog post fetch error:", err);
        setError("Unable to load blog post at this time.");
      } finally {
        setLoading(false);
      }
    }

    if (slug) loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#ECE4DB]">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <p className="text-[#B8AB9C]">Loading article...</p>
          </motion.div>
        </section>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#ECE4DB]">
        <section className="max-w-4xl mx-auto px-6 py-24">
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
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ECE4DB]">
      {/* Breadcrumb */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#C4A69B] hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </section>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-12">
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

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-[#B8AB9C]/20" />
      </div>

      {/* Article Content Preview */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="prose prose-sm max-w-none"
        >
          <div
            className="text-base text-[#B8AB9C] leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: post.content.substring(0, 1000) + "...",
            }}
          />
          <p className="mt-8 text-[#B8AB9C]">
            Read the full article on Substack to see the complete content,
            images, and formatting.
          </p>
        </motion.div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <>
          <div className="max-w-4xl mx-auto px-6">
            <div className="h-px bg-[#B8AB9C]/20" />
          </div>

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
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-[#B8AB9C]/20 pb-8 group"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-3">
                      {relatedPost.pubDate}
                    </p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3
                        className="text-2xl md:text-3xl font-light text-[#3d3d3d] mb-3 leading-tight group-hover:text-[#C4A69B] transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="text-base text-[#B8AB9C] leading-relaxed mb-4">
                      {relatedPost.description}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
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
        </>
      )}
    </div>
  );
}
