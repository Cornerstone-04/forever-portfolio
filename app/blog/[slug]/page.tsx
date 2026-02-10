"use client";

import { use } from "react";
import { useBlogPosts } from "@/hooks/use-blog-posts";
import { Divider } from "@/components/ui/divider";
import {
  BlogBreadCrumbs,
  BlogPostSkeleton,
  PostContent,
  PostError,
  PostHeader,
  RelatedPosts,
} from "@/components/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const { data: allPosts = [], isLoading, isError } = useBlogPosts();
  const post = allPosts.find((p) => p.slug === slug);
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#ECE4DB]">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <BlogPostSkeleton />
        </section>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="min-h-screen bg-[#ECE4DB]">
        <section className="max-w-4xl mx-auto px-6 py-24">
          <PostError
            error={isError ? "Unable to load article" : "Article not found"}
          />
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ECE4DB] pt-24">
      {/* Breadcrumb */}
      <BlogBreadCrumbs />
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
