 interface BlogPost {
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

export type { BlogPost, RSSItem, RSSResponse };