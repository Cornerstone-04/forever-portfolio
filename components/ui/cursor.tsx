"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Spring config for that "ring" trailing effect
  const ringX = useSpring(0, { stiffness: 150, damping: 20 });
  const ringY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX - 16); // Center the 32px ring
      ringY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [ringX, ringY]);

  return (
    <>
      {/* 1. The Main Ring (Trailing) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-[black] rounded-full pointer-events-none z-9999 hidden md:block"
        style={{ x: ringX, y: ringY }}
      />

      {/* 2. The Center Dot (Exact Position) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[black] rounded-full pointer-events-none z-9999 hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </>
  );
};
