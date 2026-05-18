'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/docs',  label: 'Documentation' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/sofon.png" alt="Sofon logo" width={28} height={28} className="object-contain" />
          <span className="text-zinc-500 text-base select-none">/</span>
          <span
            className="text-white text-base font-medium tracking-wide"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            Sofon
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden sm:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[13px] font-medium transition-colors tracking-normal ${
                pathname === href ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden flex items-center justify-center w-8 h-8 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-[56px] left-0 right-0 z-40 sm:hidden border-b border-white/[0.08] bg-[#050505]/95 backdrop-blur-md"
          >
            <nav className="flex flex-col px-4 py-3">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-[15px] font-medium border-b border-white/[0.06] last:border-0 transition-colors ${
                    pathname === href ? 'text-white' : 'text-zinc-400'
                  }`}
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
