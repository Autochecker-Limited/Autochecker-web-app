// src/components/About.tsx

import {topFeatures, stats} from "@/components/Constants";
import {CheckIcon} from "@/components/Constants/icons";
import * as motion from "motion/react-client"
import CountUp from "@/components/ui/CountUp";


const parseKS = (k: string) => {
    const m = k.match(/^(\d+(?:\.\d+)?)(.*)$/);
    return { value: parseFloat(m?.[1] ?? "0"), suffix: m?.[2] ?? "" };
};

export default function About() {

    return (
      <section id="about" className="relative overflow-hidden">
        {/* background wash + grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_50%_-5%,rgba(14,165,233,.14),transparent),radial-gradient(1100px_640px_at_50%_105%,rgba(16,185,129,.14),transparent)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(70%_80%_at_50%_40%,black,transparent)]">
          <svg className="h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0v32" stroke="white" strokeWidth=".5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          {/* Heading */}
          <div className="text-center">
              <p className="mb-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-500">
                  Transparency • Trust on Wheels
              </p>
            {/* <p className="text-sm font-semibold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              About Us
            </p> */}

            <h2 className="mt-2 text-3xl font-extrabold leading-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent sm:text-4xl">
                About AutoChecker
            </h2>

              <p className="mx-auto mt-3 max-w-3xl text-slate-500" style={{ lineHeight: "1.8rem" }}>
                  AutoChecker delivers <span className="font-bold">trusted vehicle verification</span> in a WhatsApp message.
                  Just share a plate or VIN and get instant results — no extra app needed.
            </p>
          </div>

            {/* Top 4 feature badges */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {topFeatures.map((f, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-2xl border border-slate-200/60 bg-white p-5 ring-1 ring-slate-200/70 transition
             hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-400/10
             dark:border-white/10 dark:bg-white/[0.04] dark:ring-white/10 dark:hover:bg-cyan-400/5"
                    >
                        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl
                  bg-slate-200/50 text-cyan-700 ring-1 ring-slate-300/60 text-2xl
                  dark:bg-white/5 dark:text-cyan-300 dark:ring-white/10">
                            {f.icon}
                        </div>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{f.title}</h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{f.desc}</p>
                    </motion.div>
                ))}
            </div>


            {/* Middle hero: image blob + copy */}
            <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
                {/* Illustration / blob */}
                <div className="relative">
                    {/* soft blobs */}
                    <div className="pointer-events-none absolute -left-8 -top-6 h-40 w-40 rounded-full
                    bg-cyan-300/30 blur-2xl dark:bg-cyan-500/20" />
                    <div className="pointer-events-none absolute -right-6 -bottom-8 h-40 w-40 rounded-full
                    bg-emerald-300/30 blur-2xl dark:bg-emerald-500/20" />

                    <div className="relative overflow-hidden rounded-[2rem]
                    border border-slate-300/40 bg-white shadow-[0_12px_40px_rgba(2,6,23,.08)] ring-1 ring-slate-200/70
                    dark:border-white/10 dark:bg-white/[0.03] dark:ring-white/10 dark:shadow-[0_20px_60px_rgba(2,6,23,.55)] p-3">
                        {/* substitute with your image in /public/about-illustration.png */}
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl
                      bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200
                      dark:from-[#0f172a] dark:via-[#0b1220] dark:to-[#0b1530]">
                            <div className="grid h-full place-items-center">
                                {/* placeholder ui */}
                                <MiniMock />
                            </div>
                        </div>
                    </div>
                </div>

            {/* Copy & bullets */}
            <div>
              <p className="text-[11px] font-semibold tracking-[.18em] text-cyan-300">
                WHO WE ARE
              </p>
              <h3 className="mt-2 text-2xl font-extrabold leading-snug  sm:text-3xl">
                  Every car has a story.
                  <span className=" ml-1 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    We tell it
                  </span>
                  !
              </h3>
              <p className="my-4 text-sm text-gray-700 dark:text-gray-300" style={{ lineHeight: "1.5rem" }}>
                 We deliver fast, verified checks and trusted alternatives — keeping buying and selling transparent and convenient, right in WhatsApp.
              </p>

              <ul className="mt-5 space-y-2 text-gray-500 ibm-plex-mono-regular">
                {[
                  "Instant history reports by plate or VIN.",
                  "Actionable results — alert if stolen, suggest if unsafe.",
                  "Dealer integrations to verify inventory and build trust.",
                  "No learning curve: it’s all inside WhatsApp.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm ">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="https://wa.me/"
                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3
               text-sm font-semibold text-slate-950 shadow-md hover:from-cyan-300 hover:to-emerald-300
               dark:text-slate-950"
                    >
                        Start Now <span aria-hidden="true">→</span>
                    </a>

                    <a
                        href="#how"
                        className="rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-semibold
               text-cyan-600 hover:bg-cyan-400/10 dark:text-cyan-300"
                    >
                        See How It Works
                    </a>
                </div>
            </div>
          </div>

          {/* Stats strip */}
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s, i) => {
                    const { value, suffix } = parseKS(s.k);
                    return (
                        <div key={i} className="px-6 py-5 text-center ">
                            <div className="text-2xl font-extrabold">
                                <CountUp end={value} suffix={suffix} duration={1.5} />
                            </div>
                            <div className="mt-1 text-sm text-gray-500 ibm-plex-mono-medium">{s.label}</div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>
    );
  }

  /* ---------- Inline UI bits ---------- */

function MiniMock() {
    return (
        <div className="w-[88%]">
            {/* title bar */}
            <div className="mx-auto mb-3 h-2 w-24 rounded-full bg-slate-300/50 dark:bg-white/10" />

            {/* rows */}
            <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded bg-emerald-500/80 dark:bg-emerald-400/80" />
                        <div className="h-3 flex-1 rounded bg-slate-300/50 dark:bg-white/10" />
                        <div className="h-3 w-16 rounded bg-slate-300/50 dark:bg-white/10" />
                    </div>
                ))}
            </div>

            {/* actions */}
            <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-cyan-600 px-3 py-2 text-center text-[11px] font-semibold text-white dark:bg-cyan-500 dark:text-slate-950">
                    ⚡ Action
                </div>
                <div className="rounded-lg border px-3 py-2 text-center text-[11px] font-semibold
                        border-slate-300/60 text-slate-700
                        dark:border-white/15 dark:text-slate-200">
                    📑 Report
                </div>
            </div>
        </div>
    );
}

  

  