'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  lang?: string;
}

export default function CodeBlock({ code, lang }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/[0.07] bg-[#0d0d0d]">
      {lang && (
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06]">
          <span className="text-[11px] text-zinc-600 font-mono tracking-wide uppercase">{lang}</span>
          <button
            onClick={copy}
            className="flex items-center gap-1.5 text-zinc-600 hover:text-zinc-300 transition-colors text-[11px] font-mono"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            {copied ? 'copied' : 'copy'}
          </button>
        </div>
      )}
      <div className="relative">
        {!lang && (
          <button
            onClick={copy}
            className="absolute top-3 right-3 text-zinc-700 hover:text-zinc-400 transition-colors z-10"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
        )}
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code
            className="text-zinc-300 font-mono"
            style={{ fontFamily: 'var(--font-geist-mono), monospace' }}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
