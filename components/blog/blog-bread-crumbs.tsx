import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BlogBreadCrumbs = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#C4A69B] hover:gap-3 transition-all"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>
    </section>
  );
};
