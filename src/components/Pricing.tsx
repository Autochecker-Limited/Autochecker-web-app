"use client";

/**
 * Pricing – pill cards styled like the reference,
 * with emerald accent (cards 2 & 4) and cyan accent (cards 1 & 3).
 */

type Accent = "cyan" | "emerald";

type Plan = {
  badge: string;
  title: string;
  price: string;
  suffix?: string;
  accent: Accent;                 // which color family styles this card
  featured?: boolean;             // subtle size/lift for emphasis
  tone: "light" | "mid" | "dark" | "emerald"; // <-- include "emerald"
  cta: string;
  note?: string;
  features: string[];
};

export default function Pricing() {
  const plans: Plan[] = [
    {
      badge: "ALERT",
      title: "Report a Car Theft",
      price: "KSh 0",
      suffix: "",
      accent: "cyan",
      tone: "light",
      cta: "File Theft Report",
      features: [
        "Instant WhatsApp intake",
        "Broadcast to partner network",
        "Share poster to groups",
        "Real-time update & takedown",
      ],
    },
    {
      badge: "THEFT CHECK",
      title: "Check if It Was Stolen",
      price: "KSh 200",
      suffix: "/check",
      accent: "emerald",      // emerald styling
      featured: true,
      tone: "emerald",        // emerald background
      cta: "Run Theft Check",
      note: "Most popular",
      features: [
        "Official records lookup",
        "WhatsApp results in seconds",
        "PDF report",
        "Ownership verification signal",
      ],
    },
    {
      badge: "ACCIDENT CHECK",
      title: "Check Accident History",
      price: "KSh 200",
      suffix: "/check",
      accent: "cyan",
      tone: "dark",
      cta: "Run Accident Check",
      features: [
        "Accident & damage records",
        "Odometer / write-off flags (where available)",
        "Shareable PDF",
        "Support via WhatsApp",
      ],
    },
    {
      badge: "CONCIERGE",
      title: "Help Me Find a Buyer",
      price: "KSh 2,999",
      suffix: "/listing",
      accent: "emerald",      // emerald styling
      featured: true,
      tone: "mid",        // <-- match card 2 emerald background
      cta: "Start Seller Concierge",
      note: "Includes listing setup",
      features: [
        "Pro photo & listing prep",
        "Dealership & buyer network",
        "Lead screening on WhatsApp",
        "Negotiation hand-holding",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden">
      {/* soft blurred backdrop like the reference */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_700px_at_50%_-10%,rgba(56,189,248,.18),transparent),radial-gradient(1200px_700px_at_50%_110%,rgba(16,185,129,.16),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(65%_75%_at_50%_35%,black,transparent)]">
        <svg className="h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0v32" stroke="white" strokeWidth=".5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent sm:text-4xl">
            Payment plans that match what you need
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Simple, action-based pricing — all delivered right inside WhatsApp.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((p, i) => (
            <PricePill key={i} {...p} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Examples shown. Availability and coverage depend on data partners. PDF reports provided where applicable.
        </p>
      </div>
    </section>
  );
}

/* ---------------------- Pill Card ---------------------- */
function PricePill({
  badge,
  title,
  price,
  suffix = "",
  accent,
  featured,
  tone,
  cta,
  note,
  features,
}: Plan) {
  const isEmerald = accent === "emerald";

  // Base tones (now includes emerald)
  const baseTone =
    tone === "light"
      ? "bg-white text-slate-900"
      : tone === "mid"
      ? "bg-[#2b3b6b] text-white"
      : tone === "dark"
      ? "bg-[#0e1830] text-white"
      : tone === "emerald"
      ? "bg-emerald-900 text-white"
      : "bg-white text-slate-900";

  // Card container + rounded “capsule” + float
  const container =
    "relative flex flex-col rounded-[2rem] p-6 md:p-7 shadow-[0_20px_50px_rgba(2,6,23,.45)] ring-1 ring-white/5";

  // Lift + glow when featured
  const featuredLift = featured ? "lg:scale-[1.04] lg:-translate-y-1.5" : "";
  const glow =
    featured && isEmerald
      ? "shadow-[0_0_80px_rgba(16,185,129,.40)]"
      : featured
      ? "shadow-[0_0_80px_rgba(34,211,238,.35)]"
      : "shadow-[0_0_40px_rgba(2,6,23,.5)]";

  // Price color
  const priceColor = featured
    ? isEmerald
      ? "text-emerald-300"
      : "text-cyan-300"
    : tone === "light"
    ? "text-indigo-600"
    : "text-white";

  // Small badge
  const badgeStyle =
    "mx-auto mb-4 inline-flex items-center justify-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide";
  const badgeColor =
    tone === "light"
      ? "border-slate-200 text-slate-500"
      : "border-white/15 text-slate-300";

  // CTA styling
  const ctaClass =
    featured && isEmerald
      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400 focus-visible:ring-emerald-300"
      : "bg-cyan-500/90 text-slate-950 hover:bg-cyan-400 focus-visible:ring-cyan-300";

  // Light card needs a subtle extra shadow around CTA
  const ctaExtraShadow = tone === "light" ? "shadow-[0_10px_20px_rgba(2,6,23,.15)]" : "";

  return (
    <div
      className={[
        container,
        baseTone,
        featuredLift,
        glow,
        "transition-transform duration-300",
      ].join(" ")}
    >
      {/* badge */}
      <div className={`${badgeStyle} ${badgeColor}`}>{badge}</div>

      {/* big price line */}
      <div className="flex items-end justify-center gap-2">
        <div className={`text-4xl font-extrabold leading-none ${priceColor}`}>{price}</div>
        {suffix && (
          <div className={`pb-2 text-xs ${tone === "light" ? "text-slate-500" : "text-slate-400"}`}>
            {suffix}
          </div>
        )}
      </div>

      {/* title */}
      <div
        className={`mt-2 text-center text-sm ${
          tone === "light" ? "text-slate-500" : "text-slate-300"
        }`}
      >
        {title}
      </div>

      {/* divider */}
      <div className={`my-5 h-px w-full ${tone === "light" ? "bg-slate-200" : "bg-white/10"}`} />

      {/* features – compact rows */}
      <ul className="space-y-3">
        {features.map((f, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <span className={tone === "light" ? "text-slate-700" : "text-slate-200"}>{f}</span>
            <span className="flex items-center gap-2 opacity-50">
              <span className="grid h-5 w-5 place-items-center rounded-full border border-current/30 text-[10px]">−</span>
              <span className="grid h-5 w-5 place-items-center rounded-full border border-current/30 text-[10px]">+</span>
            </span>
          </li>
        ))}
      </ul>

      {/* action area */}
      <div className="mt-7 grid gap-3">
        <a
          href="#cta"
          className={`text-center text-xs font-semibold ${
            tone === "light" ? "text-indigo-600" : isEmerald ? "text-emerald-300" : "text-cyan-300"
          }`}
        >
          Talk to us on WhatsApp
        </a>

        <a
          href="#cta"
          className={[
            "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2",
            ctaClass,
            ctaExtraShadow,
          ].join(" ")}
        >
          {cta}
        </a>
      </div>

      {/* tiny note under button */}
      {note && (
        <div className={`mt-2 text-center text-[10px] ${isEmerald ? "text-emerald-300/85" : "text-cyan-300/85"}`}>
          {note}
        </div>
      )}
    </div>
  );
}
