"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/forever-ephraim/",
    },
    {
      name: "Twitter",
      href: "https://x.com/the__Tamtam",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_forever.ephraim",
    },
    {
      name: "Substack",
      href: "https://substack.com/@foreverephraim",
    },
  ];

  return (
    <footer className="border-t border-[#B8AB9C]/20 bg-[#ECE4DB]">
      <div className="max-w-450 mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:justify-items-center">
          {/* Brand */}
          <div className="md:col-span-4">
            <h2
              className="text-4xl md:text-5xl font-light mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-[#3d3d3d]">Forever</span>
              <br />
              <span className="text-[#C4A69B] italic">Ephraim</span>
            </h2>
            <p className="text-[#B8AB9C] leading-relaxed max-w-sm">
              Copywriter &amp; Content Strategist crafting narratives that
              connect, convert, and inspire action.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-6">
              Quick Links
            </h3>
            <div className="space-y-3">
              {["About", "Work", "Blog", "Resume", "Contact"].map((link) => (
                <div key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-[#3d3d3d] hover:text-[#C4A69B] transition-colors"
                  >
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-6">
              Connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <div key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3d3d3d] hover:text-[#C4A69B] transition-colors"
                  >
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#B8AB9C]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#B8AB9C]">
            © {currentYear} Forever Ephraim. All rights reserved.
          </p>
          <p className="text-xs text-[#B8AB9C] font-mono">
            Developed by{" "}
            <Link
              href="https://cornerstoneephraim.vercel.app/"
              className="underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cornerstone
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
