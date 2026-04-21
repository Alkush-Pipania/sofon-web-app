'use client';

import { motion } from 'framer-motion';

export default function Docs() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' as const }}
        className="text-[11px] tracking-[0.22em] uppercase text-white/30 mb-5"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        Documentation
      </motion.p>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' as const }}
        className="text-[clamp(32px,4.5vw,58px)] font-semibold tracking-[-0.03em] leading-[1.1] text-white text-center"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        Coming soon.
      </motion.h1>
    </main>
  );
}
