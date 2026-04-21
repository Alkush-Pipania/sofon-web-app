'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4"
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/sofon.png"
          alt="Sofon logo"
          width={28}
          height={28}
          className="object-contain"
        />
        <span className="text-zinc-500 text-base select-none">/</span>
        <span
          className="text-white text-base font-medium tracking-wide"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          Sofon
        </span>
      </Link>

      <nav className="flex items-center gap-4 sm:gap-7">
        <Link href="/docs" className="hidden sm:block text-[13px] font-medium text-zinc-400 hover:text-white transition-colors tracking-normal">
          Documentation
        </Link>
        <Link href="/about" className="hidden sm:block text-[13px] font-medium text-zinc-400 hover:text-white transition-colors tracking-normal">
          About
        </Link>
      </nav>
    </motion.header>
  );
}
