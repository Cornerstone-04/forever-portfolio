"use client";

import { type Project } from "@/lib/projects";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Divider } from "@/components/ui/divider";

interface ProjectDetailProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export function ProjectDetail({
  project,
  prevProject,
  nextProject,
}: ProjectDetailProps) {
  return (
    <div className="bg-[#ECE4DB] min-h-screen pt-32">
      {/* ── Breadcrumb ── */}
      <div className="px-4 md:px-12 mb-12">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[#B8AB9C] hover:text-[#3d3d3d] transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-xs uppercase tracking-[0.2em]">
              All Projects
            </span>
          </Link>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="px-4 md:px-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.span
            {...fadeUp(0.1)}
            className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-6 block"
          >
            {project.category}
          </motion.span>

          <motion.h1
            {...fadeUp(0.2)}
            className="text-[clamp(2rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter text-[#3d3d3d] uppercase mb-8"
          >
            {project.title}
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-xl text-[#B8AB9C] max-w-2xl leading-relaxed"
          >
            {project.description}
          </motion.p>
        </div>
      </header>

      {/* ── Hero Image ── */}
      <motion.div {...fadeUp(0.35)} className="px-4 md:px-12 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video overflow-hidden bg-[#CFC8BE]/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      <Divider width={896} />

      {/* ── Result Callout ── */}
      <motion.section {...fadeUp(0.4)} className="px-4 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[clamp(2rem,6vw,4.5rem)] font-bold text-[#C4A69B] leading-tight"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {project.metric}
          </p>
        </div>
      </motion.section>

      <Divider width={896} />

      {/* ── Main Content ── */}
      <div className="px-4 md:px-12 py-20">
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-16">
          {/* The Brief */}
          <motion.div
            {...fadeUp(0.1)}
            className="md:col-span-5"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-4 block">
              01 — The Brief
            </span>
            <p className="text-[#3d3d3d] leading-relaxed text-base">
              {project.brief}
            </p>
          </motion.div>

          {/* The Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="md:col-span-7"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-4 block">
              02 — The Approach
            </span>
            <p className="text-[#3d3d3d] leading-relaxed text-base">
              {project.approach}
            </p>
          </motion.div>
        </div>
      </div>

      <Divider width={896} />

      {/* ── Copy Excerpt ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="px-4 md:px-12 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-8 block">
            03 — The Work
          </span>
          <div className="border-l-2 border-[#C4A69B] pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B8AB9C] mb-6">
              {project.copyExcerpt.label}
            </p>
            <p className="text-[#3d3d3d] leading-[1.9] text-base whitespace-pre-line">
              {project.copyExcerpt.text}
            </p>
          </div>
        </div>
      </motion.section>

      <Divider width={896} />

      {/* ── Result ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
        className="px-4 md:px-12 py-20"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B8AB9C] mb-4 block">
              04 — The Result
            </span>
          </div>
          <div className="md:col-span-8">
            <p className="text-[#3d3d3d] leading-relaxed text-lg">
              {project.result}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-8">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 bg-[#B8AB9C]/10 text-[#3d3d3d] uppercase tracking-[0.1em]"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Drive Link */}
            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.2em] text-[#3d3d3d] border border-[#3d3d3d]/20 px-6 py-3 hover:border-[#C4A69B] hover:text-[#C4A69B] transition-all group"
              >
                <span>View Full Document</span>
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
          </div>
        </div>
      </motion.section>

      <Divider width={896} />

      {/* ── Prev / Next Navigation ── */}
      <nav className="px-4 md:px-12 py-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="group flex items-center gap-3 text-[#B8AB9C] hover:text-[#3d3d3d] transition-colors"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] mb-1">
                  Previous
                </p>
                <p className="text-sm text-[#3d3d3d] font-medium group-hover:text-[#C4A69B] transition-colors max-w-[180px] leading-snug">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center gap-3 text-[#B8AB9C] hover:text-[#3d3d3d] transition-colors text-right"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.2em] mb-1">Next</p>
                <p className="text-sm text-[#3d3d3d] font-medium group-hover:text-[#C4A69B] transition-colors max-w-[180px] leading-snug">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </div>
  );
}
