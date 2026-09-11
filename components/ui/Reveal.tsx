"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * The single entrance primitive: opacity + 16px rise, 600ms, expo-out (§15).
 * Fires once. Under reduced motion, content renders instantly at full opacity.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
