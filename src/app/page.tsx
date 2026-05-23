'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SofonText from "@/components/SofonText";
import InstallCommand from "@/components/InstallCommand";
import VideoModal from "@/components/VideoModal";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay, ease: 'easeOut' as const },
});

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="w-full max-w-5xl flex flex-col gap-14 md:gap-16">

          {/* Hero */}
          <section className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10 lg:gap-14">
            <SofonText />

            <motion.div {...fade(0.4)} className="flex flex-col gap-4 md:mt-4">
              <h1 className="text-2xl sm:text-4xl font-semibold leading-[1.15] tracking-tight text-white text-center md:text-left">
                Know before your users do <br />
                <span className="text-zinc-500">with Sofon</span>
              </h1>
            </motion.div>
          </section>

          {/* Install command */}
          <motion.section {...fade(0.7)} className="flex justify-center">
            <InstallCommand />
          </motion.section>

          {/* Watch demo */}
          <motion.div {...fade(0.95)} className="flex justify-center">
            <button
              onClick={() => setVideoOpen(true)}
              className="group flex items-center gap-2.5 text-zinc-500 hover:text-white transition-colors duration-200"
            >
              {/* Play ring */}
              <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] group-hover:border-white/25 group-hover:bg-white/[0.08] transition-all duration-200">
                <Play size={11} className="ml-0.5 fill-current" />
              </span>
              <span
                className="text-[13px] tracking-wide"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              >
                Watch demo
              </span>
              <span className="text-[11px] text-zinc-700 group-hover:text-zinc-500 transition-colors">
                2 min
              </span>
            </button>
          </motion.div>

        </div>
      </main>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
