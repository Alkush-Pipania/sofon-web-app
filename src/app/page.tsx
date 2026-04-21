'use client';

import { motion } from 'framer-motion';
import SofonText from "@/components/SofonText";
import InstallCommand from "@/components/InstallCommand";

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay, ease: 'easeOut' as const },
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      <div className="w-full max-w-5xl flex flex-col gap-14 md:gap-16">

        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10 lg:gap-14">
          {/* SofonText has its own internal fade */}
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

      </div>
    </main>
  );
}
