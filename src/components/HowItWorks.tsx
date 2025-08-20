"use client";

import React, { useEffect, useRef, useState, PropsWithChildren } from "react";

/* ---------- Tiny reveal wrapper (fade + slide on scroll) ---------- */

type RevealProps = PropsWithChildren<{
  from?: "up" | "down" | "left" | "right";
  delay?: number;
  as?: React.ElementType;
  className?: string;
}>;

function Reveal({
  children,
  from = "up",
  delay = 0,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            const t = setTimeout(() => setShow(true), delay);
            io.unobserve(e.target);
            // cleanup for this timeout
            return () => clearTimeout(t);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const start =
    from === "up"
      ? "translate-y-6"
      : from === "down"
      ? "-translate-y-6"
      : from === "left"
      ? "translate-x-6"
      : "-translate-x-6";

  return (
    <Tag
      // cast to a concrete HTMLElement ref type (no `any`)
      ref={ref as React.Ref<HTMLElement>}
      className={[
        "transition duration-700 ease-out will-change-transform will-change-opacity",
        show ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${start}`,
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}

/* ================================================================== */

export default function HowItWorks() {
  const steps = [
    { k: "01", title: "Initiate Check", text: "Send a message to Autochecker’s WhatsApp bot.", icon: <PhoneIcon /> },
    { k: "02", title: "Send Plate or VIN", text: "Provide the vehicle’s registration number or VIN.", icon: <SearchIcon /> },
    { k: "03", title: "Data Retrieval", text: "Verified lookup from NTSA & proprietary records.", icon: <AntennaIcon /> },
    { k: "04", title: "Instant Report", text: "Accident, theft, and ownership history in seconds.", icon: <ReportIcon /> },
    { k: "05", title: "Smart Actions", text: "If stolen → broadcast alert. If unsafe → show safe alternatives.", icon: <ActionsIcon /> },
    { k: "06", title: "Dealer Integration", text: "Connect with trusted dealerships for safe options.", icon: <StoreIcon /> },
  ];

  return (
    <section id="how" className="relative overflow-hidden">
      {/* background wash + grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_50%_-5%,rgba(14,165,233,.14),transparent),radial-gradient(1100px_640px_at_50%_105%,rgba(16,185,129,.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_80%_at_50%_40%,black,transparent)]">
        <svg className="h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="how-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0v32" stroke="white" strokeWidth=".5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#how-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            The AutoChecker Platform
          </p>
          <h2 className="mt-1 text-4xl font-extrabold sm:text-5xl">
            How It Works — Right Inside WhatsApp
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-500 " style={{ lineHeight: "1.9rem" }}>
            Real-time accident & theft checks, trusted alternatives, and dealer integrations.
              <br/>
              <span className={`block mt-4 font-bold uppercase`}> Drive with confidence, buy with trust. </span>
          </p>
        </div>

        {/* Platform Visual (phones + desktop) */}
        <div className="relative mx-auto mt-12 flex max-w-6xl items-end justify-center gap-6">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -left-28 top-8 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />
          <div className="pointer-events-none absolute -right-32 bottom-12 h-48 w-48 rounded-full bg-cyan-500/20 blur-2xl" />

          {/* left phone (tilted) */}
          <Reveal from="right" delay={40} className="translate-y-2 -rotate-1">
            <PhoneCard side="left" />
          </Reveal>

          {/* desktop center */}
          <Reveal from="up" delay={0}>
            <DesktopCard />
          </Reveal>

          {/* right phone (tilted) */}
          <Reveal from="left" delay={80} className="-translate-y-1 rotate-1">
            <PhoneCard side="right" />
          </Reveal>

          {/* floor shadow */}
          <div className="pointer-events-none absolute -bottom-4 left-1/2 h-6 w-[70%] -translate-x-1/2 rounded-full
          bg-black/40 blur-2xl opacity-40" />

          {/* WhatsApp badge */}
          <Reveal from="left" delay={160} className="absolute -right-4 top-6 hidden md:block">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500
            text-slate-950 shadow-[0_0_24px_rgba(16,185,129,.45)] ring-1 ring-white/10">
              <WhatsappGlyph />
            </div>
          </Reveal>
        </div>

        {/* Steps Bubbles */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.k} from="up" delay={i * 60} className="h-full">
                <StepBubble {...s} accent={i % 2 === 0 ? "cyan" : "emerald"} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Desktop mock ------------------ */
function DesktopCard() {
  type CSSVarC = React.CSSProperties & { ["--c"]?: string };

  return (
    <div className="relative hidden w-[720px] shrink-0 rounded-3xl border border-white/10 bg-[#0b1220] p-5 ring-1 ring-white/10 shadow-[0_10px_60px_rgba(2,6,23,.6)] md:block">
      {/* top bar */}
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
        <div className="flex gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <span className="ml-2 text-sm font-semibold text-white">AutoChecker</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="h-5 w-24 rounded bg-white/5" />
          <div className="h-5 w-5 rounded bg-white/10" />
        </div>
      </div>

      {/* center header */}
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
        <div className="h-6 w-6 rounded bg-emerald-400/90 shadow-[0_0_16px_rgba(16,185,129,.5)]" />
        <div className="h-6 flex-1 rounded bg-white/5" />
        <div className="grid h-6 w-12 place-items-center rounded bg-emerald-500/90 text-center text-[10px] font-bold text-slate-950">
          UPG
        </div>
        <div className="h-6 w-6 rounded bg-cyan-500/80" />
      </div>

      {/* three circles row */}
      <div className="mt-5 grid grid-cols-3 gap-5">
        {["#22d3ee", "#34d399", "#38bdf8"].map((c, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center ring-1 ring-white/10">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-black/40 ring-1 ring-white/10">
              <div className="h-8 w-12 rounded" style={{ ["--c"]: c } as CSSVarC} />
            </div>
            <div className="mt-2 text-xs font-semibold text-slate-300">Trusted Alternatives</div>
            <div className="text-[10px] text-slate-400">AI picks from verified dealers</div>
          </div>
        ))}
      </div>

      {/* bottom bar */}
      <div className="mt-5 flex items-center gap-2">
        <div className="h-6 flex-1 rounded bg-white/5" />
        <div className="h-6 w-6 rounded bg-white/10" />
        <div className="h-6 w-6 rounded bg-white/10" />
      </div>
    </div>
  );
}

/* ------------------ Phone mock ------------------ */
function PhoneCard({ side }: { side: "left" | "right" }) {
  const accent = side === "left" ? "emerald" : "cyan";
  return (
    <div
      className={[
        "relative w-[260px] shrink-0 rounded-[2rem] border border-white/10 bg-[#0f172a] p-3 ring-1 ring-white/10 shadow-[0_10px_50px_rgba(2,6,23,.6)]",
        accent === "emerald" ? "shadow-[0_0_40px_rgba(16,185,129,.35)]" : "shadow-[0_0_40px_rgba(34,211,238,.35)]",
      ].join(" ")}
    >
      {/* notch */}
      <div className="mx-auto h-5 w-28 rounded-b-2xl bg-black/50 shadow-[inset_0_-6px_12px_rgba(0,0,0,.35)]" />
      {/* header */}
      <div className="mt-2 flex items-center gap-2 border-b border-white/10 px-2 pb-2">
        <div
          className={`h-6 w-6 rounded-full ${accent === "emerald" ? "bg-emerald-400" : "bg-cyan-400"} shadow-[0_0_16px_currentColor]`}
        />
        <div className="text-xs font-bold tracking-tight text-white/90">AutoChecker</div>
        <div className="ml-auto h-4 w-9 rounded bg-white/10" />
        <div className="h-4 w-4 rounded bg-white/10" />
      </div>
      {/* list */}
      <div className="mt-3 space-y-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-2">
            <div className="flex items-center gap-2">
              <div className={`${accent === "emerald" ? "bg-emerald-400" : "bg-cyan-400"} h-5 w-5 rounded`} />
              <div className="h-3 flex-1 rounded bg-white/10" />
              <div className="h-3 w-10 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
      {/* footer */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div
          className={`rounded-xl px-3 py-2 text-center text-xs font-semibold ${
            accent === "emerald" ? "bg-emerald-500 text-slate-950" : "bg-cyan-500/90 text-slate-950"
          }`}
        >
          Actions
        </div>
        <div className="rounded-xl border border-white/15 px-3 py-2 text-center text-xs font-semibold text-slate-200">
          Report
        </div>
      </div>
    </div>
  );
}

/* ------------------ Step bubbles ------------------ */
function StepBubble({
  k,
  title,
  text,
  icon,
  accent = "cyan",
}: {
  k: string;
  title: string;
  text: string;
  icon: React.ReactNode;
  accent?: "cyan" | "emerald";
}) {
  const tint =
    accent === "emerald"
      ? "hover:bg-emerald-400/10 hover:ring-emerald-300/40"
      : "hover:bg-cyan-400/10 hover:ring-cyan-300/40";

  const pill =
    accent === "emerald"
      ? "bg-emerald-400/20 text-emerald-300 ring-emerald-300/30"
      : "bg-cyan-400/20 text-cyan-300 ring-cyan-300/30";

  const iconTint = accent === "emerald" ? "text-emerald-300" : "text-cyan-300";

  return (
    <div
      className={`group rounded-2xl border border-white/10 bg-white/[0.05] p-4 ring-1 ring-white/10 shadow-sm backdrop-blur-sm transition hover:shadow-[0_0_32px_rgba(34,211,238,.18)] ${tint}`}
    >
      <div className="flex items-start gap-3">
        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-black/50 ring-1 ring-white/10">
          <div
            className={`pointer-events-none absolute -inset-2 rounded-xl blur-md ${
              accent === "emerald" ? "bg-emerald-500/25" : "bg-cyan-500/25"
            }`}
          />
          <span className={`relative ${iconTint}`}>{icon}</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ring-1 ${pill}`}>{k}</span>
            <h3 className="text-sm font-semibold">{title}</h3>
          </div>
          <p className="mt-1 text-[13px] leading-snug text-slate-500">{text}</p>
        </div>
      </div>
    </div>
  );
}

/* ------------------ tiny inline icons ------------------ */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3-3" />
    </svg>
  );
}
function AntennaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M4 6a8 8 0 0116 0M6 10a6 6 0 0112 0M8 14a4 4 0 018 0" />
    </svg>
  );
}
function ReportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </svg>
  );
}
function ActionsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12h6l2-3 2 6 2-3h4" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
    </svg>
  );
}
function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 10h18l-2-6H5l-2 6zM4 10v10h16V10" />
    </svg>
  );
}
function WhatsappGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M20 3.5A10 10 0 006 19.8L3.5 22 6 21.2A10 10 0 1020 3.5zm-4.1 12.2c-.5.1-1.1.1-1.8-.1-2-.6-3.5-2-4.5-3.9-.3-.6-.5-1.2-.5-1.7 0-.4.2-.8.6-1l.6-.4c.2-.1.5 0 .6.2l.8 1.4c.1.2.1.4 0 .6l-.3.5c.6 1.1 1.5 2 2.6 2.6l.5-.3c.2-.1.4-.1.6 0l1.4.8c.2.1.3.4.2.6l-.4.6c-.2.4-.6.6-1 .7z" />
    </svg>
  );
}
