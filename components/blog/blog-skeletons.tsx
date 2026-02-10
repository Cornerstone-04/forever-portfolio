"use client";

// import { motion } from "motion/react";

const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

/* 1. Skeleton for the Blog List Page (Post Cards) */
export function BlogListSkeleton() {
  return (
    <div className="space-y-24">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-start justify-between gap-12 border-b border-[#B8AB9C]/10 pb-24"
        >
          {/* Image Placeholder */}
          <div
            className={`w-full md:w-1/3 aspect-4/3 bg-[#B8AB9C]/10 rounded-lg ${shimmer}`}
          />

          <div className="flex-1 space-y-6">
            {/* Date Placeholder */}
            <div className={`h-3 w-24 bg-[#B8AB9C]/10 rounded ${shimmer}`} />
            {/* Title Placeholder */}
            <div className="space-y-3">
              <div
                className={`h-10 w-full bg-[#B8AB9C]/20 rounded ${shimmer}`}
              />
              <div
                className={`h-10 w-3/4 bg-[#B8AB9C]/20 rounded ${shimmer}`}
              />
            </div>
            {/* Description Placeholder */}
            <div className="space-y-2">
              <div
                className={`h-4 w-full bg-[#B8AB9C]/10 rounded ${shimmer}`}
              />
              <div className={`h-4 w-5/6 bg-[#B8AB9C]/10 rounded ${shimmer}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* 2. Skeleton for the Single Post (Slug) Page */
export function BlogPostSkeleton() {
  return (
    <div className="w-full animate-pulse">
      {/* Hero Image Skeleton */}
      <div
        className={`w-full h-[50vh] md:h-[60vh] bg-[#B8AB9C]/10 ${shimmer}`}
      />

      <article className="max-w-4xl mx-auto px-6 pt-12">
        {/* Breadcrumb & Date */}
        <div className={`h-3 w-32 bg-[#B8AB9C]/10 mb-8 rounded ${shimmer}`} />

        {/* Title */}
        <div className="space-y-4 mb-12">
          <div className={`h-12 w-full bg-[#B8AB9C]/20 rounded ${shimmer}`} />
          <div className={`h-12 w-2/3 bg-[#B8AB9C]/20 rounded ${shimmer}`} />
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6">
          {[1, 2, 3, 4].map((p) => (
            <div
              key={p}
              className={`h-4 w-full bg-[#B8AB9C]/10 rounded ${shimmer}`}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
