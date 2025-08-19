// src/components/About.tsx

import {topFeatures, stats} from "@/components/Constants";
import {CheckIcon} from "@/components/Constants/icons";
import * as motion from "motion/react-client"


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
            {/* <p className="text-sm font-semibold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              About Us
            </p> */}
            <h2 className="mt-2 text-3xl font-extrabold leading-tight bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent sm:text-4xl">
                About AutoChecker
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-slate-300">
                AutoChecker delivers <span className="font-bold">trusted vehicle verification</span> in a WhatsApp message.
                Just share a plate or VIN and get instant results — no extra app needed.
            </p>
          </div>

          {/* Top 4 feature badges */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topFeatures.map((f, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/10 transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-cyan-300 ring-1 ring-white/10">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Middle hero: image blob + copy */}
          <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
            {/* Illustration / blob */}
            <div className="relative">
              {/* soft blobs */}
              <div className="pointer-events-none absolute -left-8 -top-6 h-40 w-40 rounded-full bg-cyan-500/20 blur-2xl" />
              <div className="pointer-events-none absolute -right-6 -bottom-8 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(2,6,23,.55)]">
                {/* substitute with your image in /public/about-illustration.png */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#0b1530]">
                  <div className="grid h-full place-items-center text-slate-500">
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
              <h3 className="mt-2 text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                Reduce risk. Be productive. <span className="text-cyan-300">Buy wisely.</span>
              </h3>
              <p className="mt-3 text-slate-300">
                We protect buyers and empower dealers with fast, verified data. From real-time
                checks to trusted alternatives, AutoChecker keeps the experience transparent and
                convenient — directly in WhatsApp.
              </p>

              <ul className="mt-5 space-y-2">
                {[
                  "Instant history reports by plate or VIN.",
                  "Actionable results — alert if stolen, suggest if unsafe.",
                  "Dealer integrations to verify inventory and build trust.",
                  "No learning curve: it’s all inside WhatsApp.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/"
                  className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,.35)] hover:bg-emerald-400"
                >
                  Start on WhatsApp
                </a>
                <a
                  href="#how"
                  className="rounded-xl border border-cyan-400/30 px-5 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/10"
                >
                  See How It Works
                </a>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-center ring-1 ring-white/10"
              >
                <div className="text-2xl font-extrabold text-white">{s.k}</div>
                <div className="mt-1 text-sm text-slate-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ---------- Inline UI bits ---------- */

  function MiniMock() {
    return (
      <div className="w-[88%]">
        <div className="mx-auto mb-3 h-2 w-24 rounded-full bg-white/10" />
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded bg-emerald-400/80" />
              <div className="h-3 flex-1 rounded bg-white/10" />
              <div className="h-3 w-16 rounded bg-white/10" />
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-cyan-500/90 px-3 py-2 text-center text-[11px] font-semibold text-slate-950">
            Action
          </div>
          <div className="rounded-lg border border-white/15 px-3 py-2 text-center text-[11px] font-semibold text-slate-200">
            Report
          </div>
        </div>
      </div>
    );
  }
  

  