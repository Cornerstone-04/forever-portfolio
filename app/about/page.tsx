"use client";

import { AboutHero, AboutStory, AboutServices } from "@/components/about";

export default function About() {
  return (
    <div className="bg-[#ECE4DB] pt-24">
      {/* Hero Section */}
      <AboutHero />
      {/* Story Section */}
      <AboutStory />
      {/* Services */}
      <AboutServices />
    </div>
  );
}
