'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'quick-start',   label: 'Quick Start' },
  { id: 'requirements',  label: 'Requirements' },
  { id: 'monitors',      label: 'Monitors' },
  { id: 'plugins',       label: 'Plugins' },
  { id: 'updating',      label: 'Updating' },
  { id: 'uninstalling',  label: 'Uninstalling' },
];

export default function DocsSidebar() {
  const [active, setActive] = useState('quick-start');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="flex flex-col gap-0.5">
      <p
        className="text-[10px] tracking-[0.18em] uppercase text-zinc-600 mb-3 px-2"
        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
      >
        On this page
      </p>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`text-left text-[13px] px-2 py-1.5 rounded-lg transition-all duration-150 ${
            active === id
              ? 'text-white bg-white/[0.06]'
              : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.03]'
          }`}
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
