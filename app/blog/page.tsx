"use client";

import { motion } from "motion/react";
import { Divider } from "@/components/ui/divider";
import {
  BlogError,
  BlogHero,
  BlogNewsletter,
  BlogPostCard,
} from "@/components/blog";
import { useBlogPosts } from "../../hooks/use-blog-posts";
import { BlogListSkeleton } from "@/components/blog/blog-skeletons";

export default function Blog() {
  const { data: posts = [], isLoading, isError } = useBlogPosts();

  return (
    <div className="min-h-screen bg-[#ECE4DB] pt-32">
      {/* Hero Section */}
      <BlogHero />
      <Divider width={1600} />
      {/* Articles Section */}
      <section className="max-w-400 mx-auto px-6 pt-24 pb-12">
        {isLoading ? (
          <BlogListSkeleton />
        ) : isError ? (
          <BlogError message="Unable to load blog posts at this time." />
        ) : posts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-24">
              {posts.map((post, index) => (
                <BlogPostCard post={post} index={index} key={index} />
              ))}
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
      <BlogNewsletter />
    </div>
  );
}
