'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.9, delay, ease: "easeOut" as const },
});

const fadeInView = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

export default function About() {
  return (
    <main>

      {/* Hero */}
      <section className="pt-[120px] flex flex-col items-center text-center">
        <motion.p
          {...fade(0.1)}
          className="text-[11px] tracking-[0.22em] uppercase text-white/30 mb-5"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          About
        </motion.p>

        <motion.h1
          {...fade(0.25)}
          className="text-[clamp(32px,4.5vw,58px)] font-semibold tracking-[-0.03em] leading-[1.1] text-white max-w-[640px] mb-[60px]"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          Know before<br />your users do.
        </motion.h1>

        {/* Half-sphere + dividing line */}
        <div className="w-full flex flex-col items-center">
          <motion.div
            {...fade(0.45)}
            className="overflow-hidden"
            style={{
              width: "clamp(320px, 48vw, 620px)",
              height: "calc(clamp(320px, 48vw, 620px) / 2)",
            }}
          >
            <Image
              src="/sofon.png"
              alt=""
              aria-hidden
              draggable={false}
              width={633}
              height={646}
              className="w-full h-auto select-none"
              priority
            />
          </motion.div>
          <motion.div {...fade(0.55)} className="w-full h-px bg-white/[0.12]" />
        </div>
      </section>

      {/* Q&A content */}
      <div className="max-w-[720px] mx-auto px-8 pb-[120px] sm:px-5 sm:pb-[100px]">

        <motion.div {...fadeInView} className="py-[72px] border-b border-white/[0.08] sm:py-[52px]">
          <h2
            className="text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.025em] leading-[1.15] text-white mb-7"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            &ldquo;What is Sofon?&rdquo;
          </h2>
          <div className="flex flex-col gap-[18px]">
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              Sofon is a <strong className="text-white/75 font-medium">self-hosted uptime monitoring system</strong> you can deploy on your own infrastructure with a single command. It checks your HTTP endpoints on a configurable interval and tells you the moment something goes wrong.
            </p>
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              No third-party servers. No data leaving your network. No monthly bill that scales with your usage. Just a robust, open-source tool that runs where you run.
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeInView} className="py-[72px] border-b border-white/[0.08] sm:py-[52px]">
          <h2
            className="text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.025em] leading-[1.15] text-white mb-7"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            &ldquo;Why does this exist?&rdquo;
          </h2>
          <div className="flex flex-col gap-[18px]">
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              Every SaaS monitoring tool eventually becomes a negotiation. You start with a free tier, grow into a paid plan, and suddenly you&apos;re paying hundreds of dollars a month for something that pings your servers every 30 seconds.
            </p>
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              Sofon started from a simple frustration: <strong className="text-white/75 font-medium">why should knowing your own service is down require a subscription?</strong> The data belongs to you. The infrastructure belongs to you. The monitoring should too.
            </p>
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              We built Sofon so that a single{" "}
              <code className="font-mono text-[0.88em] text-white/60 bg-white/[0.06] border border-white/10 rounded-sm px-[5px] py-[1px]">
                curl -fsSL raw.githubusercontent.com/…/install.sh | sudo bash
              </code>{" "}
              is all it takes to have production-grade monitoring on your own terms.
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeInView} className="py-[72px] border-b border-white/[0.08] sm:py-[52px]">
          <h2
            className="text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.025em] leading-[1.15] text-white mb-7"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            &ldquo;How does it work?&rdquo;
          </h2>
          <div className="flex flex-col gap-[18px]">
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              Sofon runs as a set of Docker containers on your server. A background worker periodically polls the HTTP endpoints you configure, recording response times, status codes, and availability over time.
            </p>
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              When a monitor fails three consecutive checks, an incident is created and alerts are dispatched through your configured plugins — <strong className="text-white/75 font-medium">Resend Email</strong> for direct email notifications, or <strong className="text-white/75 font-medium">Zenduty</strong> for full incident management. Recovery is automatic: when the monitor comes back up, the incident resolves and a recovery alert is sent.
            </p>
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              Everything is configured through a <strong className="text-white/75 font-medium">clean web UI</strong> — create monitors, manage plugins, and review incident history without touching a config file.
            </p>
          </div>
        </motion.div>

        <motion.div {...fadeInView} className="py-[72px] sm:py-[52px]">
          <h2
            className="text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.025em] leading-[1.15] text-white mb-7"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            &ldquo;Why self-hosted?&rdquo;
          </h2>
          <div className="flex flex-col gap-[18px]">
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              When you use a hosted monitoring service, you&apos;re trusting a third party to observe your infrastructure and tell you when things break. That&apos;s a lot of trust for something this critical.
            </p>
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              Self-hosting means <strong className="text-white/75 font-medium">you control the data, the uptime, and the cost.</strong> Sofon doesn&apos;t phone home. It doesn&apos;t have usage-based pricing. It doesn&apos;t go down when someone else&apos;s infra has a bad day.
            </p>
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.75] text-zinc-400">
              It&apos;s the option that should have always existed — and now it does.
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
