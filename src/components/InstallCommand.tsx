'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CMD = 'curl -sL sofon.sh | bash';

export default function InstallCommand() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-3 w-full max-w-[560px] min-w-0">
      <span
        className="text-xs tracking-[0.2em] text-zinc-300 uppercase"
        style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
      >
        TRY IT NOW
      </span>
      <div className="flex items-center justify-between gap-4 bg-[#151515] rounded-xl px-3 sm:px-4 py-4">
        <code className="font-mono text-xs sm:text-sm text-zinc-300 truncate">
          <span className="text-zinc-600 mr-3">$</span>
          {CMD}
        </code>
        <Button
          variant="ghost"
          size="icon"
          onClick={copy}
          aria-label="Copy install command"
          className="shrink-0 text-zinc-500 hover:text-white hover:bg-transparent"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </Button>
      </div>
    </div>
  );
}
