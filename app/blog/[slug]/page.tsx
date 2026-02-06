"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState, use } from "react";
import { fetchBlogPosts, type BlogPost } from "@/lib/blog";
import { Divider } from "@/components/ui/divider";
import {
  BlogLoader,
  PostContent,
  PostError,
  PostHeader,
  RelatedPosts,
} from "@/components/blog";

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
          <BlogLoader label="Loading article..." />
        </section>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#ECE4DB]">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <PostError error={error || "Article not found"} />
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ECE4DB]">
      {/* Breadcrumb */}
      <section className="max-w-4xl mx-auto px-6 py-8 mt-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#C4A69B] hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </section>
      {/* Article Header */}
      <PostHeader post={post} />
      {/* Divider */}
      <Divider width={896} />
      {/* Article Content Preview */}
      <PostContent post={post} />
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <>
          <Divider width={896} />
          <RelatedPosts posts={relatedPosts} />
        </>
      )}
    </div>
  );
}
