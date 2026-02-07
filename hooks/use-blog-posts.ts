import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "@/lib/blog";

export function useBlogPosts() {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: fetchBlogPosts,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
}
