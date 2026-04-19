"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionRevealProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export function SectionReveal({ children, index, className }: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      custom={index}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.2, 0.65, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
