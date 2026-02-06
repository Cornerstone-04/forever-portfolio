"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#ECE4DB]/80 backdrop-blur-md border-b border-[#B8AB9C]/20"
    >
      <div className="max-w-450 mx-auto px-6 md:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.h1
              className="text-2xl md:text-3xl font-light tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[#3d3d3d]">Forever</span>
              <span className="text-[#C4A69B] italic"> Ephraim</span>
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="relative group">
                <span
                  className={`text-sm uppercase tracking-[0.2em] transition-colors ${
                    pathname === link.href
                      ? "text-[#3d3d3d]"
                      : "text-[#B8AB9C] hover:text-[#3d3d3d]"
                  }`}
                >
                  {link.label}
                </span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#C4A69B]"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#3d3d3d]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-8 pb-6 space-y-6"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block"
              >
                <span
                  className={`text-lg uppercase tracking-[0.15em] ${
                    pathname === link.href
                      ? "text-[#3d3d3d] font-medium"
                      : "text-[#B8AB9C]"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
