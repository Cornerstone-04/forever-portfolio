export interface BlogPost {
  title: string;
  pubDate: string;
  rawDate: Date;
  link: string;
  description: string;
  content: string;
  author: string;
  slug: string;
}

// Generate a URL-safe slug from title and date
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

// Fetch blog posts from Substack RSS
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://foreverephraim.substack.com/feed",
    );
    const data = await response.json();

    if (!data.items) return [];

    return data.items.map((item: any) => {
      const rawDate = new Date(item.pubDate);
      const slug = generateSlug(item.title, rawDate);

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
        content: item.description,
        author: item.author || "Forever Ephraim",
        slug,
      };
    });
  } catch (err) {
    console.error("[v0] Blog fetch error:", err);
    return [];
  }
}

export async function findPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
