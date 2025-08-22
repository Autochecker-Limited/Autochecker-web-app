"use client";

import {useState} from "react";
import {
    PRICING_PLANS,
    PRICING_TITLE,
    PRICING_SUBTITLE,
    type Plan,
} from "@/components/Constants";

type Mode = "annual" | "monthly";

export default function Pricing() {
    const [mode, setMode] = useState<Mode>("annual");

    return (
        <section id="pricing" className="relative overflow-hidden">
            {/* backdrop */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_50%_-10%,rgba(56,189,248,.18),transparent),radial-gradient(1200px_700px_at_50%_110%,rgba(16,185,129,.16),transparent)]"/>
            <div
                className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(65%_75%_at_50%_35%,black,transparent)]">
                <svg className="h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="pricing-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                            <path d="M32 0H0v32" stroke="white" strokeWidth=".5" fill="none"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pricing-grid)"/>
                </svg>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
                {/* Header */}
                <div className="text-center">
                    <p className="mb-5 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-500">
                        Checks on Demand • Dealer Pro • Partnerships
                    </p>

                    <h2 className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent sm:text-4xl">
                        {PRICING_TITLE}
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-slate-600 leading-relaxed dark:text-slate-300"
                       style={{lineHeight: "1.8rem"}}>
                        {PRICING_SUBTITLE}
                    </p>

                    {/* Divider (top) */}
                    <div className="mx-auto mt-8 w-full max-w-5xl">
                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent dark:via-white/10" />
                    </div>

                    {/* Theft report highlight (stacked: pill → chips → CTA) */}
                    <div className="mx-auto mt-8 max-w-5xl space-y-3 text-center">
                        {/* 1) PRICE PILL — top */}
                        <div className="flex justify-center">
    <span
        className="inline-flex items-center gap-1 rounded-full
                 bg-gradient-to-r from-cyan-100/20 to-emerald-100/20 px-3 py-1
                 text-[11px] font-extrabold text-slate-800 ring-1 ring-cyan-300/40
                 dark:bg-transparent dark:text-cyan-200 dark:ring-cyan-400/40">
      🚨 KSh 0 <span className="font-semibold opacity-80">Theft report</span>
    </span>
                        </div>

                        {/* 2) FEATURE CHIPS — middle (wrap) */}
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
    <span className="rounded-full border border-slate-200/60 bg-white/50 px-2.5 py-1 text-[11px] text-slate-700
                     dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
      Instant WhatsApp intake
    </span>
                            <span className="rounded-full border border-slate-200/60 bg-white/50 px-2.5 py-1 text-[11px] text-slate-700
                     dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
      Broadcast to partner network
    </span>
                            <span className="rounded-full border border-slate-200/60 bg-white/50 px-2.5 py-1 text-[11px] text-slate-700
                     dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
      Share poster to groups
    </span>
                            <span className="rounded-full border border-slate-200/60 bg-white/50 px-2.5 py-1 text-[11px] text-slate-700
                     dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
      Real-time update &amp; takedown
    </span>
                        </div>

                        {/* 3) CTA — bottom */}
                        <div className="flex justify-center pt-1">
                            <a
                                href="https://wa.me/"
                                className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-3 py-1
                 text-[11px] font-semibold text-slate-950 hover:from-emerald-300 hover:to-cyan-300
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
                                Start free <span aria-hidden>→</span>
                            </a>
                        </div>
                    </div>

                    {/* Divider (bottom) */}
                    <div className="mx-auto my-8 w-full max-w-5xl">
                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent dark:via-white/10" />
                    </div>


                    {/* Toggle like the reference */}
                    <div
                        className="mt-8 inline-flex rounded-md border border-slate-300/70 bg-white p-1 text-sm shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                        <button
                            onClick={() => setMode("annual")}
                            className={`rounded-md px-4 py-1.5 transition ${
                                mode === "annual"
                                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                                    : "text-slate-600 dark:text-slate-300"
                            }`}
                        >
                            Annual pricing
                        </button>
                        <button
                            onClick={() => setMode("monthly")}
                            className={`rounded-md px-4 py-1.5 transition ${
                                mode === "monthly"
                                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                                    : "text-slate-600 dark:text-slate-300"
                            }`}
                        >
                            Monthly pricing
                        </button>
                    </div>
                </div>

                {/* Cards (3) */}
                <div className="mt-12 grid auto-rows-[1fr] gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
                    {PRICING_PLANS.map((p) => (
                        <PriceCard key={p.key} plan={p} mode={mode}/>
                    ))}
                </div>

                {/* <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
                    Examples shown. Availability and coverage depend on data partners. PDF reports provided where
                    applicable.
                </p>*/}
            </div>

        </section>
    );
}

/* ---------------- Card ---------------- */
function PriceCard({plan, mode}: { plan: Plan; mode: "annual" | "monthly" }) {
    const {badge, title, subtitle, accent, featured, tone, cta, note} = plan;
    const isEmerald = accent === "emerald";
    const isPopular = Boolean(featured || badge?.toLowerCase().includes("popular"));

    // pick which price to show (unchanged)
    let price = "—", suffix = "";
    if (plan.perCheck) {
        price = plan.perCheck.price;
        suffix = plan.perCheck.suffix;
    } else if (mode === "annual" && plan.annual) {
        price = plan.annual.price;
        suffix = plan.annual.suffix;
    } else if (mode === "monthly" && plan.monthly) {
        price = plan.monthly.price;
        suffix = plan.monthly.suffix;
    }

    /* --- Transparent “glass” card chrome --- */
    const cardChrome =
        "relative overflow-hidden h-full rounded-2xl p-6 ring-1 transition shadow-[0_8px_30px_rgba(2,6,23,.08)] " +
        "border border-slate-200/70 bg-white/70 backdrop-blur ring-slate-200/60 " +
        "dark:border-white/10 dark:bg-white/[0.04] dark:ring-white/10";

    // subtle tinted header wash (emerald for popular, cyan otherwise)
    const wash = isEmerald
        ? "from-emerald-200/45 via-emerald-200/25 to-emerald-300/35 dark:from-emerald-500/10 dark:via-emerald-400/5 dark:to-emerald-300/5"
        : "from-cyan-200/45 via-sky-200/25 to-indigo-200/35 dark:from-cyan-500/10 dark:via-sky-400/5 dark:to-indigo-400/5";


    /* --- CTAs: filled for 'Most popular', glass-outline for others --- */
    const filledEmeraldBtn =
        "bg-emerald-500 hover:bg-emerald-400 text-white focus-visible:ring-emerald-300";
    const glassBtn =
        "bg-white/60 border border-slate-200 text-slate-900 hover:bg-white/80 " +
        "dark:bg-white/[0.06] dark:border-white/10 dark:text-white";

    return (
        <div className={[cardChrome, "flex flex-col", featured ? "lg:scale-[1.02]" : ""].join(" ")}>
            {/* header wash */}
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${wash}`}/>

            {/* badge */}
            {badge && (() => {
                const isPopular = /popular/i.test(badge);
                return isPopular ? (
                    // Highlighted gradient pill + star
                    <div
                        className="mb-6 inline-flex rounded-md bg-gradient-to-r from-cyan-400 to-cyan-600 p-[1.5px] shadow-[0_0_24px_rgba(16,185,129,.25)]">
                        <div className="inline-flex items-center gap-1.5 rounded-md bg-white/80 px-3 py-1 text-[11px] font-bold text-cyan-800 backdrop-blur
                      dark:bg-white/[0.08] dark:text-cyan-300">
                            {/* star icon */}
                            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                                <path
                                    d="M12 3.5l2.6 5.3 5.8.9-4.2 4.1 1 5.8L12 17.8 6.8 19.6l1-5.8L3.6 9.7l5.8-.9L12 3.5z"/>
                            </svg>
                            Most popular
                        </div>
                    </div>
                ) : (
                    // Subtle glass pill for other badges
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-md border border-slate-200/70 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm backdrop-blur
                    dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                        {badge}
                    </div>
                );
            })()}

            {/* price / title / subtitle */}
            <div>
                <div className="text-4xl font-extrabold leading-none">
                    {price}
                    <span className="align-top text-xs font-normal text-slate-500 dark:text-slate-300"> {suffix}</span>
                </div>
                <div className="mt-4 text-sm font-semibold">{title}</div>
                <div className="mt-1 text-sm text-slate-600 leading-relaxed dark:text-slate-300">{subtitle}</div>
            </div>


            {/* divider before features */}
            <div className="my-6 h-px w-full bg-slate-200 dark:bg-white/10"/>

            {/* features */}
            <ul className="space-y-2.5 text-sm">
                {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-cyan-100 text-cyan-600
                       dark:bg-white/10 dark:text-cyan-300">✓</span>
                        <span className="text-slate-700 dark:text-slate-200">{f}</span>
                    </li>
                ))}
            </ul>


            {/* bottom CTA (pinned) */}
            <div className="mt-auto pt-5">
                <div className="grid gap-3">
                    {isPopular ? (
                        <a
                            href="https://wa.me/"
                            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3
                   text-sm font-semibold text-slate-950 shadow-md hover:from-cyan-300 hover:to-emerald-300
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 dark:text-slate-950"
                        >
                            {cta} <span aria-hidden="true">→</span>
                        </a>
                    ) : (
                        <a
                            href="#cta"
                            className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold
                   bg-white/60 border border-slate-200 text-slate-900 hover:bg-white/80
                   focus:outline-none focus-visible:ring-2
                   dark:bg-white/[0.06] dark:border-white/10 dark:text-white"
                        >
                            {cta}
                        </a>
                    )}

                    {note && (
                        <div className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                            {note}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
