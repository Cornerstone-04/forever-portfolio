"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFinished(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    if (!isFinished) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, [isFinished]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.1,
              ease: [0.85, 0, 0.15, 1],
            },
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#3d3d3d]"
        >
          <div className="relative overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#ECE4DB] text-4xl md:text-6xl font-light uppercase tracking-tighter"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Forever Ephraim
            </motion.h2>
          </div>

          <div className="w-64 h-px bg-[#ECE4DB]/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#C4A69B]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <div className="mt-6 flex flex-col items-center gap-2">
            <span className="text-[#B8AB9C] text-[10px] uppercase tracking-[0.5em] font-medium">
              Loading Portfolio
            </span>
            <span className="text-[#ECE4DB] text-xs font-mono">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
