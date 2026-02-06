import { api } from "./api";
import { substackDomain } from "./constants";

export interface BlogPost {
  title: string;
  pubDate: string;
  rawDate: Date;
  link: string;
  description: string;
  content: string;
  author: string;
  slug: string;
  image?: string;
}

// Define types for the RSS API response to fix "any" errors
interface RSSItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure?: {
    link: string;
    type: string;
  };
}

interface RSSResponse {
  status: string;
  feed: object;
  items: RSSItem[];
}

export function generateSlug(title: string, date: Date): string {
  const dateStr = date.toISOString().split("T")[0];
  const titleSlug = title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .substring(0, 50);
  return `${dateStr}-${titleSlug}`;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await api.get<RSSResponse>("/api.json", {
      params: {
        rss_url: substackDomain,
      },
    });

    const data = response.data;

    if (!data.items) return [];

    // Correctly typed map function
    return data.items.map((item: RSSItem) => {
      const rawDate = new Date(item.pubDate);
      const slug = generateSlug(item.title, rawDate);
      let imageUrl = item.enclosure?.link;

      if (imageUrl?.toLowerCase().endsWith(".heic")) {
        imageUrl = `https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/${encodeURIComponent(imageUrl)}`;
      }

      return {
        title: item.title,
        pubDate: rawDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        rawDate,
        link: item.link,
        description:
          item.description.replace(/<[^>]*>/g, "").substring(0, 200) + "...",
        content: item.content,
        author: item.author,
        slug,
        image: imageUrl,
      };
    });
  } catch (err) {
    console.error("Blog fetch error:", err);
    return [];
  }
}

export async function findPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
