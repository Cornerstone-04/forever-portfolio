import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Footer, Navigation } from "@/components/shared";
import { CustomCursor } from "@/components/ui/cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Forever Ephraim | Creative Copywriter | Content Writer | Email Copywriter | Brand Storyteller | Freelancer",
  description:
    "I’m Forever, and I turn boring brand messages into stuff people actually want to read. If your brand needs words with personality, nice to meet you!",
  metadataBase: new URL("https://foreverephraim.vercel.app/"),
  openGraph: {
    title:
      "Forever Ephraim | Creative Copywriter | Content Writer | Email Copywriter | Brand Storyteller | Freelancer",
    description:
      "I’m Forever, and I turn boring brand messages into stuff people actually want to read. If your brand needs words with personality, nice to meet you!",
    url: "https://foreverephraim.vercel.app/",
    siteName: "Forever Ephraim",
    images: ["/forever-2.jpeg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@the__Tamtam",
    title:
      "Forever Ephraim | Creative Copywriter | Content Writer | Email Copywriter | Brand Storyteller | Freelancer",
    description:
      "I’m Forever, and I turn boring brand messages into stuff people actually want to read. If your brand needs words with personality, nice to meet you!",
    images: ["/forever-2.jpeg"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "Forever Ephraim",
    "Creative Copywriter",
    "Content Writer",
    "Email Copywriter",
    "Brand Storyteller",
    "Freelancer",
    "Copywriting Services",
    "Marketing Copywriter",
    "SEO Copywriter",
    "Social Media Copywriter",
    "Website Copywriter",
    "Product Descriptions",
    "Blog Writing",
    "Content Strategy",
    "Brand Messaging",
    "Advertising Copywriter",
    "Digital Marketing",
    "Freelance Writer",
    "Copywriting Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} ${inter.variable}`}
    >
      <body className="bg-[#ECE4DB] text-[#3d3d3d] antialiased">
        <Navigation />
        <main>
          <CustomCursor />

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
