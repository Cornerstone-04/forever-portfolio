"use client";

import { motion, MotionValue } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  y: MotionValue<number>;
  opacity: MotionValue<number>;
}

export function Hero({ y, opacity }: HeroProps) {
  const headlines = [
    { text: "Words That", color: "text-[#3d3d3d]", delay: 0.3 },
    { text: "Convert", color: "text-[#C4A69B]", delay: 0.5 },
    { text: "& Connect", color: "text-[#3d3d3d]", delay: 0.7, underline: true },
  ];

  return (
    <motion.section
      style={{ y: y, opacity: opacity }}
      className="min-h-screen flex items-center justify-center px-4 md:px-12 pt-32 pb-20"
    >
      <div className="max-w-400 w-full">
        {/* Small intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-[#B8AB9C] text-xs md:text-sm uppercase tracking-[0.3em]">
            Copywriter &amp; Content Strategist
          </span>
        </motion.div>

        {/* MASSIVE stacked headlines */}
        <div className="space-y-0 leading-[0.85] mb-8">
          {headlines.map((hl, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: hl.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <h1
                className={`text-[clamp(2.3rem,12vw,12rem)] sm:text-[clamp(2.8rem,14vw,12rem)] md:text-[clamp(3.8rem,16vw,12rem)] font-black leading-[0.85] tracking-tighter uppercase ${hl.color}`}
              >
                {hl.text}
              </h1>
              {hl.underline && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-0.5 md:h-1 lg:h-2 bg-[#C4A69B] origin-left mt-2 md:mt-4"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="max-w-2xl"
        >
          <p className="text-lg md:text-xl text-[#B8AB9C] leading-relaxed mb-8">
            I turn boring brand messages into stuff people actually want to
            read. If your brand needs words with personality, nice to meet you!
            👋🏻
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[#3d3d3d] hover:text-[#C4A69B] transition-colors group"
          >
            <span className="text-sm uppercase tracking-[0.2em]">
              View My Work
            </span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-20 md:mt-32"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="32"
              viewBox="0 0 24 40"
              className="text-[#B8AB9C]"
            >
              <path
                d="M12 5L12 35M12 35L8 31M12 35L16 31"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
