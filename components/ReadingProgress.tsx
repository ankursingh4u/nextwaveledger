"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2.5px] w-full origin-left bg-gradient-to-r from-accent via-accent-dark to-highlight"
    />
  );
}
