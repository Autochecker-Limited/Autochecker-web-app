"use client";

import React, {useEffect, useRef, useState, PropsWithChildren} from "react";

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

        let t: ReturnType<typeof setTimeout> | null = null;

        const io = new IntersectionObserver(
            (ents) => {
                ents.forEach((e) => {
                    if (e.isIntersecting) {
                        t = setTimeout(() => setShow(true), delay);
                        io.unobserve(e.target);
                    }
                });
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
        );

        io.observe(el);
        return () => {
            io.disconnect();
            if (t) clearTimeout(t);
        };
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
        {k: "01", title: "Initiate Check", text: "Send a message to Autochecker’s WhatsApp bot.", icon: <PhoneIcon/>},
        {k: "02", title: "Send Plate or VIN", text: "Provide the vehicle’s registration number or VIN.", icon: <SearchIcon/>},
        {k: "03", title: "Data Retrieval", text: "Verified lookup from NTSA & proprietary records.", icon: <AntennaIcon/>},
        {k: "04", title: "Instant Report", text: "Accident, theft, and ownership history in seconds.", icon: <ReportIcon/>},
        {k: "05", title: "Smart Actions", text: "If stolen → broadcast alert. If unsafe → show safe alternatives.", icon: <ActionsIcon/>},
        {k: "06", title: "Dealer Integration", text: "Connect with trusted dealerships for safe options.", icon: <StoreIcon/>},
    ];

    return (
        <section id="how" className="relative overflow-hidden">
            {/* background wash + grid (unchanged) */}
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

            {/* SPACING: more vertical air */}
            <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
                {/* Header */}
                <div className="text-center">
                    <p className="mb-4 inline-block rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
                        Drive with confidence • Buy with trust
                    </p>

                    <h2 className="mt-2 text-3xl font-extrabold leading-tight bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent sm:text-4xl">
                        How it works — right in WhatsApp
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-400">
                        Instant accident, theft, and ownership checks by plate or VIN. If a car fails,
                        we suggest safe alternatives and connect you with verified dealers.
                        <span className="mt-4 block font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Drive with confidence, buy with trust.
            </span>
                    </p>
                </div>

                {/* Platform Visual (phones + desktop) */}
                <div className="relative mx-auto mt-16 flex max-w-6xl items-end justify-center gap-8 md:gap-10 lg:gap-12">
                    {/* blobs */}
                    <div className="pointer-events-none absolute -left-28 top-8 h-40 w-40 rounded-full blur-2xl bg-emerald-300/30 dark:bg-emerald-500/20" />
                    <div className="pointer-events-none absolute -right-32 bottom-12 h-48 w-48 rounded-full blur-2xl bg-cyan-300/30 dark:bg-cyan-500/20" />

                    {/* left phone (slightly smaller on small screens) */}
                    <Reveal from="right" delay={40} className="translate-y-2 -rotate-1 scale-95 sm:scale-95 lg:scale-100">
                        <PhoneCard side="left" mirror />
                    </Reveal>

                    {/* desktop center (cap width so it doesn't crowd) */}
                    <Reveal from="up" delay={0} className="w-full max-w-[780px]">
                        <DesktopCard />
                    </Reveal>

                    {/* right phone (normal) */}
                    <Reveal from="left" delay={80} className="-translate-y-1 rotate-1">
                        <PhoneCard side="right" />
                    </Reveal>

                    {/* floor shadow */}
                    <div className="pointer-events-none absolute -bottom-5 left-1/2 h-6 w-[72%] -translate-x-1/2 rounded-full bg-black/20 dark:bg-black/60 blur-2xl" />
                </div>

                {/* Steps Bubbles */}
                <div className="mx-auto mt-16 max-w-6xl">
                    <div className="grid auto-rows-[1fr] gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {steps.map((s, i) => (
                            <Reveal key={s.k} from="up" delay={i * 60} className="h-full" >
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
        <div
            className="relative hidden w-[760px] shrink-0 rounded-3xl p-5 md:block
                 border border-slate-300/50 bg-white ring-1 ring-slate-200/70 shadow-[0_8px_40px_rgba(2,6,23,.08)]
                 dark:border-white/10 dark:bg-[#0b1220] dark:ring-white/10 dark:shadow-[0_10px_60px_rgba(2,6,23,.6)]"
        >
            {/* top bar */}
            <div className="flex items-center gap-3 rounded-xl px-3 py-2 border border-slate-300/60 bg-slate-100/70 dark:border-white/10 dark:bg-white/[0.02]">
                <div className="flex gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <span className="ml-2 text-sm font-semibold text-slate-900 dark:text-white"> AutoChecker </span>

                <div className="ml-auto flex items-center gap-2">
                    <div className="h-5 w-24 rounded bg-slate-300/60 ring-1 ring-slate-200/70 dark:bg-white/5 dark:ring-white/10" />
                    <div className="h-5 w-5 rounded bg-slate-300/60 ring-1 ring-slate-200/70 dark:bg-white/10 dark:ring-white/10" />
                </div>
            </div>

            {/* center header */}
            <div className="mt-4 flex items-center gap-3 rounded-xl p-3 border border-slate-300/60 bg-slate-100/70 ring-1 ring-slate-200/70 dark:border-white/10 dark:bg-white/[0.02] dark:ring-white/10">
                <div className="h-6 w-6 rounded bg-emerald-400/90 shadow-[0_0_16px_rgba(16,185,129,.5)]" />
                <div className="h-6 flex-1 rounded bg-slate-300/60 dark:bg-white/5" />
                <div className="grid h-6 w-12 place-items-center rounded bg-emerald-500/90 text-center text-[10px] font-bold text-white ring-1 ring-emerald-400/50 dark:ring-emerald-400/40">
                    UPG
                </div>
                <div className="h-6 w-6 rounded bg-cyan-500/80 ring-1 ring-cyan-400/40" />
            </div>

            {/* three circles row (circle only) */}
            <div className="mt-6 grid grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-2xl p-4 text-center border border-slate-200/60 bg-white ring-1 ring-slate-200/70 dark:border-white/10 dark:bg-white/[0.02] dark:ring-white/10"
                    >
                        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-slate-200/70 ring-1 ring-slate-300/60 dark:bg-black/40 dark:ring-white/10">
                            <div className="h-10 w-10 rounded-full ring-1 ring-slate-400/20 dark:ring-white/20" />
                        </div>

                        <div className="mt-2 text-xs font-semibold text-slate-800 dark:text-slate-300">Trusted Alternatives</div>
                        <div className="text-[10px] text-slate-600 dark:text-slate-400">AI picks from verified dealers</div>
                    </div>
                ))}
            </div>

            {/* bottom bar */}
            <div className="mt-5 flex items-center gap-2">
                <div className="h-6 flex-1 rounded bg-slate-300/60 ring-1 ring-slate-200/70 dark:bg-white/5 dark:ring-white/10" />
                <div className="h-6 w-6 rounded bg-slate-300/60 ring-1 ring-slate-200/70 dark:bg-white/10 dark:ring-white/10" />
                <div className="h-6 w-6 rounded bg-slate-300/60 ring-1 ring-slate-200/70 dark:bg-white/10 dark:ring-white/10" />
            </div>
        </div>
    );
}

/* ------------------ Phone mock ------------------ */
function PhoneCard({ side, mirror = false }: { side: "left" | "right"; mirror?: boolean }) {
    const accent = side === "left" ? "emerald" : "cyan";
    const isMirror = mirror ?? side === "left";   // ← ADD THIS
    const pushEdge = isMirror ? "mr-auto" : "ml-auto";   // ← UPDATE to use isMirror


    const primaryBtn =
        "rounded px-3 py-2 text-center text-xs font-semibold shadow-sm ring-1 focus:outline-none focus-visible:ring-2 " +
        (accent === "emerald"
            ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 ring-emerald-400/40 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:ring-emerald-400/30"
            : "bg-cyan-500 text-slate-950 hover:bg-cyan-400 ring-cyan-400/40 dark:bg-cyan-500/90 dark:hover:bg-cyan-400 dark:ring-cyan-400/30");

    const secondaryBtn =
        "rounded px-3 py-2 text-center text-xs font-semibold border border-slate-300/60 bg-white text-slate-700 ring-1 ring-slate-200/70 hover:bg-slate-100/60 " +
        "dark:border-white/15 dark:bg-white/[0.03] dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/[0.06]";

    return (
        <div className={[
            "relative w-[260px] shrink-0 rounded-[2rem] p-3",
            "border border-slate-300/60 bg-white ring-1 ring-slate-200/70",
            "dark:border-white/10 dark:bg-[#0f172a] dark:ring-white/10",
            accent === "emerald"
                ? "shadow-[0_8px_40px_rgba(2,6,23,.08),0_0_36px_rgba(16,185,129,.18)] dark:shadow-[0_10px_50px_rgba(2,6,23,.6),0_0_40px_rgba(16,185,129,.35)]"
                : "shadow-[0_8px_40px_rgba(2,6,23,.08),0_0_36px_rgba(34,211,238,.18)] dark:shadow-[0_10px_50px_rgba(2,6,23,.6),0_0_40px_rgba(34,211,238,.35)]",
        ].join(" ")}>
            {/* notch */}
            <div className="mx-auto h-5 w-28 rounded-b-2xl bg-slate-900/5 shadow-[inset_0_-6px_12px_rgba(0,0,0,.08)] dark:bg-black/50 dark:shadow-[inset_0_-6px_12px_rgba(0,0,0,.35)]" />

            {/* header (mirrored layout when mirror=true) */}
            <div className={`mt-2 flex items-center gap-2 border-b border-slate-200/70 px-2 pb-2 dark:border-white/10 ${isMirror ? "flex-row-reverse" : ""}`}>
                <div className={`h-6 w-6 rounded-full ${accent === "emerald" ? "bg-emerald-400" : "bg-cyan-400"} shadow-[0_0_16px_currentColor]`} />
                <div className="text-xs font-bold tracking-tight text-slate-900 dark:text-white/90">AutoChecker</div>
                <div className={`${pushEdge} h-4 w-9 rounded bg-slate-300/60 dark:bg-white/10`} />
                <div className="h-4 w-4 rounded bg-slate-300/60 dark:bg-white/10" />
            </div>

            {/* list (icon to the *outside*; mirror rows when mirror=true) */}
            <div className="mt-3 space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="rounded-xl border border-slate-200/60 bg-slate-100/60 p-2 dark:border-white/10 dark:bg-white/[0.03]">
                        <div className={`flex items-center gap-2 ${isMirror ? "flex-row-reverse" : ""}`}>
                            <div className={`${accent === "emerald" ? "bg-emerald-400" : "bg-cyan-400"} h-5 w-5 rounded`} />
                            <div className="h-3 flex-1 rounded bg-slate-300/60 dark:bg-white/10" />
                            <div className="h-3 w-10 rounded bg-slate-300/60 dark:bg-white/10" />
                        </div>
                    </div>
                ))}
            </div>

            {/* footer (swap order when mirror=true) */}
            <div className="mt-3 grid grid-cols-2 gap-2">
                {isMirror ?  (
                    <>
                        <div className={secondaryBtn}>Report</div>
                        <div className={primaryBtn}>Actions</div>
                    </>
                ) : (
                    <>
                        <div className={primaryBtn}>Actions</div>
                        <div className={secondaryBtn}>Report</div>
                    </>
                )}
            </div>
        </div>
    );
}

/* ------------------ Step bubbles ------------------ */
type Accent = "cyan" | "emerald";

const ACCENT: Record<
    Accent,
    { hover: string; chip: string; iconTint: string; glowBg: string; shadowHover: string }
> = {
    cyan: {
        hover: "hover:bg-cyan-50 hover:ring-cyan-300/40 dark:hover:bg-cyan-400/10",
        chip: "ring-1 bg-cyan-100/70 text-cyan-700 ring-cyan-200/70 dark:bg-cyan-400/10 dark:text-cyan-300 dark:ring-cyan-400/30",
        iconTint: "text-cyan-700 dark:text-cyan-300",
        glowBg: "bg-cyan-500/20",
        shadowHover: "hover:shadow-cyan-400/15",
    },
    emerald: {
        hover: "hover:bg-emerald-50 hover:ring-emerald-300/40 dark:hover:bg-emerald-400/10",
        chip: "ring-1 bg-emerald-100/70 text-emerald-700 ring-emerald-200/70 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/30",
        iconTint: "text-emerald-700 dark:text-emerald-300",
        glowBg: "bg-emerald-500/20",
        shadowHover: "hover:shadow-emerald-400/15",
    },
};

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
    accent?: Accent;
}) {
    const a = ACCENT[accent];

    return (
        <div
            className={[
                "group flex h-full flex-col rounded-2xl p-5 sm:p-6 transition shadow-sm backdrop-blur-sm",
                // solid white in light (avoids milky stacking), translucent in dark
                "border border-slate-200/60 bg-white ring-1 ring-slate-200/70",
                "dark:border-white/10 dark:bg-white/[0.05] dark:ring-white/10",
                a.hover,
                a.shadowHover,
            ].join(" ")}
        >
            <div className="flex items-start gap-4">
                <div className="relative mt-0.5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100/70 ring-1 ring-slate-300/60 dark:bg-black/50 dark:ring-white/10">
                    <div className={`pointer-events-none absolute -inset-2 rounded-xl blur-md ${a.glowBg}`} />
                    <span className={`relative text-xl ${a.iconTint}`}>{icon}</span>
                </div>

                <div className="min-w-0 flex-1 space-y-3 sm:space-y-4">
                    <div className="flex flex-wrap items-center gap-2.5 min-h-[28px]">
                        <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${a.chip}`}>{k}</span>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
                    </div>
                    {/* description spaced lower */}
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {text}
                    </p>
                </div>
            </div>

            <div className="mt-4" />
        </div>
    );
}


/* ------------------ tiny inline icons ------------------ */
function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="7" y="2" width="10" height="20" rx="2"/>
            <circle cx="12" cy="18" r="1"/>
        </svg>
    );
}

function SearchIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="7"/>
            <path d="M20 20l-3-3"/>
        </svg>
    );
}

function AntennaIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20M4 6a8 8 0 0116 0M6 10a6 6 0 0112 0M8 14a4 4 0 018 0"/>
        </svg>
    );
}

function ReportIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="3" width="14" height="18" rx="2"/>
            <path d="M8 7h8M8 11h8M8 15h5"/>
        </svg>
    );
}

function ActionsIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 12h6l2-3 2 6 2-3h4"/>
            <circle cx="6" cy="12" r="2"/>
            <circle cx="18" cy="12" r="2"/>
        </svg>
    );
}

function StoreIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 10h18l-2-6H5l-2 6zM4 10v10h16V10"/>
        </svg>
    );
}

function WhatsappGlyph() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path
                d="M20 3.5A10 10 0 006 19.8L3.5 22 6 21.2A10 10 0 1020 3.5zm-4.1 12.2c-.5.1-1.1.1-1.8-.1-2-.6-3.5-2-4.5-3.9-.3-.6-.5-1.2-.5-1.7 0-.4.2-.8.6-1l.6-.4c.2-.1.5 0 .6.2l.8 1.4c.1.2.1.4 0 .6l-.3.5c.6 1.1 1.5 2 2.6 2.6l.5-.3c.2-.1.4-.1.6 0l1.4.8c.2.1.3.4.2.6l-.4.6c-.2.4-.6.6-1 .7z"/>
        </svg>
    );
}
