'use client';

import { motion } from 'framer-motion';
import CodeBlock from '@/components/docs/CodeBlock';
import DocsSidebar from '@/components/docs/DocsSidebar';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 mb-4"
      style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3"
      style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
    >
      {children}
    </h2>
  );
}

function SectionDesc({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] text-zinc-400 leading-relaxed mb-6">
      {children}
    </p>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold text-zinc-400"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
          {n}
        </div>
        <div className="w-px flex-1 bg-white/[0.06]" />
      </div>
      <div className="pb-6 min-w-0 flex-1">
        <p className="text-sm font-medium text-white mb-2"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
          {title}
        </p>
        <div className="text-[14px] text-zinc-400 leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5">
      <span className="text-zinc-600 mt-0.5 shrink-0 text-xs">→</span>
      <p className="text-[13px] text-zinc-400 leading-relaxed">{children}</p>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-white/[0.06] my-14" />;
}

function PluginCard({ name, tag, children }: { name: string; tag: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06]">
        <p className="text-sm font-semibold text-white"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>{name}</p>
        <span className="text-[10px] tracking-widest uppercase text-zinc-600 border border-white/[0.08] rounded-full px-2 py-0.5">
          {tag}
        </span>
      </div>
      <div className="px-5 py-4 space-y-4 text-[14px] text-zinc-400 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function Docs() {
  return (
    <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Page header */}
        <motion.div {...fade(0)} className="mb-14 pt-8">
          <p
            className="text-[11px] tracking-[0.22em] uppercase text-zinc-600 mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Documentation
          </p>
          <h1
            className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Get up and running<br />
            <span className="text-zinc-500">in under 5 minutes.</span>
          </h1>
          <p className="text-[15px] text-zinc-500 max-w-xl leading-relaxed">
            Sofon is a self-hosted uptime monitor. One command installs everything on your server — no managed cloud required.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div {...fade(0.15)} className="flex gap-12 lg:gap-16 items-start">

          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-44 shrink-0 sticky top-24">
            <DocsSidebar />
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">

            {/* ── Quick Start ───────────────────────────────────── */}
            <section id="quick-start" className="scroll-mt-24">
              <SectionLabel>01 — Quick Start</SectionLabel>
              <SectionHeading>Install Sofon</SectionHeading>
              <SectionDesc>
                Run the installer on any Ubuntu / Debian server. Docker is installed automatically if not present.
              </SectionDesc>

              <div className="space-y-4">
                <CodeBlock
                  lang="bash"
                  code={`curl -fsSL https://raw.githubusercontent.com/Alkush-Pipania/sofon/main/installer/install.sh | sudo bash`}
                />
                <Note>
                  The installer is interactive — it asks for your server&apos;s public URL, database password, and optional domain. All credentials are stored in <code className="text-zinc-300 text-xs font-mono">/opt/sofon/.env</code>.
                </Note>
              </div>

              <div className="mt-8 space-y-0">
                <Step n={1} title="Run the install command">
                  <p>Paste the command above into your server terminal. The script detects your public IP automatically.</p>
                </Step>
                <Step n={2} title="Answer the prompts">
                  <p>Choose install directory, database credentials, and whether to use a domain with automatic HTTPS via Caddy.</p>
                </Step>
                <Step n={3} title="Open firewall ports (AWS / cloud VPS)">
                  <p>If you&apos;re on AWS EC2, open ports <span className="text-zinc-300">80</span> and <span className="text-zinc-300">443</span> in your instance&apos;s Security Group inbound rules. On DigitalOcean or Hetzner, check the Firewall panel. Without this step the URL will time out even though Sofon is running correctly.</p>
                </Step>
                <Step n={4} title="Open your app URL">
                  <p>Once &quot;Sofon is running!&quot; appears, navigate to the URL shown. Register your admin account — this is the first and only account setup.</p>
                </Step>
                <Step n={5} title="Configure plugins (optional)">
                  <p>Go to <span className="text-zinc-300">Settings → Plugins</span> to add Resend Email or Zenduty for alert notifications.</p>
                </Step>
              </div>
            </section>

            <Divider />

            {/* ── Requirements ─────────────────────────────────── */}
            <section id="requirements" className="scroll-mt-24">
              <SectionLabel>02 — Requirements</SectionLabel>
              <SectionHeading>What you need</SectionHeading>
              <SectionDesc>
                Any Linux VPS works. The installer handles Docker and all dependencies automatically.
              </SectionDesc>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'OS',      value: 'Ubuntu 20.04+ / Debian 11+' },
                  { label: 'RAM',     value: '1 GB minimum, 2 GB recommended' },
                  { label: 'CPU',     value: '1 vCPU minimum' },
                  { label: 'Disk',    value: '5 GB free space' },
                  { label: 'Docker',  value: 'Auto-installed if missing' },
                  { label: 'Ports',   value: '80 and 443 must be open' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5">
                    <span className="text-[11px] text-zinc-600 uppercase tracking-widest w-14 shrink-0 pt-0.5"
                      style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>{label}</span>
                    <span className="text-[13px] text-zinc-300">{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                <p className="text-[11px] tracking-[0.18em] uppercase text-zinc-600 mt-6 mb-3"
                  style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  Cloud firewall checklist
                </p>
                {[
                  { cloud: 'AWS EC2',       how: 'EC2 → Instances → Security Group → Edit Inbound Rules → add HTTP (80) and HTTPS (443) from 0.0.0.0/0' },
                  { cloud: 'DigitalOcean',  how: 'Networking → Firewalls → your firewall → Inbound Rules → add HTTP and HTTPS' },
                  { cloud: 'Hetzner',       how: 'Firewall → add inbound rule for TCP 80 and TCP 443' },
                  { cloud: 'Other VPS',     how: 'Run: ufw allow 80/tcp && ufw allow 443/tcp' },
                ].map(({ cloud, how }) => (
                  <div key={cloud} className="flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5">
                    <span className="text-[12px] text-white shrink-0 w-28"
                      style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>{cloud}</span>
                    <span className="text-[12px] text-zinc-400">{how}</span>
                  </div>
                ))}
              </div>
            </section>

            <Divider />

            {/* ── Monitors ─────────────────────────────────────── */}
            <section id="monitors" className="scroll-mt-24">
              <SectionLabel>03 — Monitors</SectionLabel>
              <SectionHeading>Creating monitors</SectionHeading>
              <SectionDesc>
                Each monitor polls a URL at a fixed interval and fires alerts if it fails 3 consecutive checks.
              </SectionDesc>

              <div className="space-y-4 mb-8">
                <div className="overflow-hidden rounded-xl border border-white/[0.07]">
                  {[
                    { field: 'URL',                desc: 'The endpoint to check. HTTP and HTTPS both supported.' },
                    { field: 'Interval',           desc: 'How often to poll. Minimum 60 seconds.' },
                    { field: 'Timeout',            desc: 'Request timeout. Minimum 120 seconds.' },
                    { field: 'Expected status',    desc: 'HTTP status code considered healthy. Default 200.' },
                    { field: 'Latency threshold',  desc: 'Optional. Alert if response exceeds this ms value.' },
                    { field: 'Notifications',      desc: 'Which plugins fire alerts for this monitor.' },
                  ].map(({ field, desc }, i, arr) => (
                    <div key={field} className={`flex gap-4 px-5 py-3.5 ${i !== arr.length - 1 ? 'border-b border-white/[0.05]' : ''}`}>
                      <span
                        className="text-[13px] text-white w-40 shrink-0"
                        style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                      >{field}</span>
                      <span className="text-[13px] text-zinc-400">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Note>
                Monitors only fire plugins that are both <span className="text-zinc-300">enabled</span> and <span className="text-zinc-300">selected</span> on that monitor. You can have multiple monitors each notifying different plugins.
              </Note>
            </section>

            <Divider />

            {/* ── Plugins ──────────────────────────────────────── */}
            <section id="plugins" className="scroll-mt-24">
              <SectionLabel>04 — Plugins</SectionLabel>
              <SectionHeading>Notification plugins</SectionHeading>
              <SectionDesc>
                Configure plugins in <span className="text-zinc-300">Settings → Plugins</span>. Each plugin can be enabled or disabled independently.
              </SectionDesc>

              <div className="space-y-4">
                <PluginCard name="Resend Email" tag="Email">
                  <p>Sends alert emails via the Resend API. Configure your API key, sender domain, and a list of recipient addresses.</p>
                  <div className="space-y-2">
                    <Step n={1} title="Create an API key at resend.com">
                      <p>Go to Resend → API Keys and create a new key.</p>
                    </Step>
                    <Step n={2} title="Verify your sending domain">
                      <p>Resend → Domains. The sender email must belong to a verified domain.</p>
                    </Step>
                    <Step n={3} title="Add credentials in Sofon">
                      <p>Plugins → Resend Email. Enter API key, sender address, and one or more recipient emails.</p>
                    </Step>
                  </div>
                </PluginCard>

                <PluginCard name="Zenduty" tag="Incident Management">
                  <p>Creates and auto-resolves Zenduty incidents via the Generic Integration webhook.</p>
                  <div className="space-y-2">
                    <Step n={1} title="Add a Generic Integration in Zenduty">
                      <p>Your Service → Integrations → Add Integration → Generic Integration.</p>
                    </Step>
                    <Step n={2} title="Copy the webhook URL">
                      <p>From the Configure screen, copy the integration webhook URL.</p>
                    </Step>
                    <Step n={3} title="Paste it into Sofon">
                      <p>Plugins → Zenduty → Webhook URL. Enable the plugin and save.</p>
                    </Step>
                  </div>
                  <Note>
                    Each monitor sends its UUID as <code className="text-zinc-300 text-xs font-mono">entity_id</code>. Zenduty uses this to auto-resolve incidents when the monitor recovers.
                  </Note>
                </PluginCard>
              </div>
            </section>

            <Divider />

            {/* ── Updating ─────────────────────────────────────── */}
            <section id="updating" className="scroll-mt-24">
              <SectionLabel>05 — Updating</SectionLabel>
              <SectionHeading>Upgrading Sofon</SectionHeading>
              <SectionDesc>
                The update script pulls new images and re-runs migrations without touching your data.
              </SectionDesc>

              <div className="space-y-3">
                <CodeBlock
                  lang="bash"
                  code={`sudo /opt/sofon/installer/update.sh --version latest`}
                />
                <CodeBlock
                  lang="bash"
                  code={`# Or pin to a specific release
sudo /opt/sofon/installer/update.sh --version latest`}
                />
                <Note>
                  All migrations use <code className="text-zinc-300 text-xs font-mono">IF NOT EXISTS</code> guards — safe to re-run on any existing installation without data loss.
                </Note>
              </div>
            </section>

            <Divider />

            {/* ── Uninstalling ─────────────────────────────────── */}
            <section id="uninstalling" className="scroll-mt-24">
              <SectionLabel>06 — Uninstalling</SectionLabel>
              <SectionHeading>Remove Sofon</SectionHeading>
              <SectionDesc>
                The uninstall script stops all containers, wipes volumes and data, and removes the install directory.
              </SectionDesc>

              <div className="space-y-3">
                <CodeBlock
                  lang="bash"
                  code={`sudo /opt/sofon/installer/uninstall.sh`}
                />
                <Note>
                  This permanently deletes all data including the database. You will be asked to confirm before anything is removed. Docker images can optionally be cleaned up as well.
                </Note>
              </div>

              <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-5">
                <p className="text-sm font-semibold text-white mb-3"
                  style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  Fresh reinstall after uninstall
                </p>
                <CodeBlock
                  code={`curl -fsSL https://raw.githubusercontent.com/Alkush-Pipania/sofon/main/installer/install.sh | sudo bash`}
                />
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
