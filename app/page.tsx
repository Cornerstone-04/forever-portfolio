"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FeaturedWork, Hero, HomeCTA } from "@/components/home";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-[#ECE4DB]">
      {/* Hero Section - Giant Editorial Text */}
      <Hero y={heroY} opacity={heroOpacity} />
      {/* Featured Work Section */}
      <FeaturedWork />
      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
}
