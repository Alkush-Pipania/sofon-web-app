'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SOFON_BOX = `███████╗ ██████╗ ███████╗ ██████╗ ███╗   ██╗
██╔════╝██╔═══██╗██╔════╝██╔═══██╗████╗  ██║
███████╗██║   ██║█████╗  ██║   ██║██╔██╗ ██║
╚════██║██║   ██║██╔══╝  ██║   ██║██║╚██╗██║
███████║╚██████╔╝██║     ╚██████╔╝██║ ╚████║
╚══════╝ ╚═════╝ ╚═╝      ╚═════╝ ╚═╝  ╚═══╝`;

const SOFON_SOLID = `███████  ██████  ███████  ██████  ███    ██
██      ██    ██ ██      ██    ██ ████   ██
███████ ██    ██ █████   ██    ██ ██ ██  ██
     ██ ██    ██ ██      ██    ██ ██  ██ ██
███████  ██████  ██       ██████  ██   ████`;

export default function SofonText({ showSubtitle = true }: { showSubtitle?: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 overflow-hidden shrink-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative"
        aria-hidden="true"
      >
        <pre
          aria-hidden="true"
          className="text-[clamp(9px,1.4vw,15px)] tracking-[-0.5px] leading-[125%] text-white/20 select-none whitespace-pre font-[family-name:'Fira_Mono',monospace]"
        >
          {SOFON_BOX}
        </pre>

        <pre
          className="absolute top-0 left-0 text-[clamp(9px,1.4vw,15px)] tracking-[-0.5px] leading-[125%] text-white select-none whitespace-pre font-[family-name:'Fira_Mono',monospace]"
        >
          {SOFON_SOLID}
        </pre>
      </motion.div>

      {showSubtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-[clamp(9px,0.85vw,12px)] tracking-[0.2em] text-white/50 uppercase select-none font-[family-name:'Fira_Mono',monospace]"
        >
          SELF HOSTED MONITORING SERVICE
        </motion.p>
      )}
    </div>
  );
}
