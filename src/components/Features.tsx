export default function Features() {
    return (
      <section id="features" className="relative overflow-hidden">
        {/* headline */}
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="text-center">
            <p className="text-sm font-semibold text-white-400">
              Autochecker: Verify Before You Buy
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent sm:text-4xl">
              A WhatsApp-Based Vehicle Verification & Dealership Platform
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-300">
              WhatsApp-native checks by plate or VIN. Combat fraud, streamline buying, and connect with trusted dealerships.
            </p>
          </div>
  
          {/* Why-style feature cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Real-Time Reports"
              desc="Instant accident & stolen checks by sending a number plate or VIN."
              icon={<BoltIcon />}
              color="cyan"
            />
            <FeatureCard
              title="Smart Car Suggestions"
              desc="If a vehicle fails checks, we propose safe alternatives from verified dealers."
              icon={<SparklesIcon />}
              color="emerald"
            />
            <FeatureCard
              title="Stolen Car Alerts"
              desc="Broadcast stolen car details across the Autochecker WhatsApp network."
              icon={<SirenIcon />}
              color="cyan"
            />
            <FeatureCard
              title="Zero Learning Curve"
              desc="No app to install. Everything happens in WhatsApp."
              icon={<WhatsappIcon />}
              color="emerald"
            />
            <FeatureCard
              title="Dealer Integration"
              desc="Dealers verify inventory, build trust, and reach verified buyers."
              icon={<StoreIcon />}
              color="cyan"
            />
            <FeatureCard
              title="Secure Data"
              desc="Verified sources: government/AutoChecker databases + proprietary records."
              icon={<ShieldIcon />}
              color="emerald"
            />
          </div>
        </div>
      </section>
    );
  }
  
  /* ---------- UI bits ---------- */
  
  function FeatureCard({
    title,
    desc,
    icon,
    color = "cyan",
  }: {
    title: string;
    desc: string;
    icon: React.ReactNode;
    color?: "cyan" | "emerald";
  }) {
    const colorClasses =
      color === "emerald"
        ? "text-emerald-400 hover:border-emerald-400/40 hover:bg-emerald-400/5"
        : "text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/5";
  
    return (
      <div
        className={`group rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-sm ring-1 ring-white/10 transition ${colorClasses}`}
      >
        <div
          className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 ${color === "emerald" ? "text-emerald-400" : "text-cyan-300"}`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-slate-300">{desc}</p>
      </div>
    );
  }
  

  /* ---------- tiny inline icons (no external deps) ---------- */
  
  function BoltIcon() {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
      </svg>
    );
  }
  function SparklesIcon() {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3zM19 16l.9 2.3L22 19l-2.1.7L19 22l-.9-2.3L16 19l2.1-.7L19 16z" />
      </svg>
    );
  }
  function SirenIcon() {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 19h10l1-6a6 6 0 10-12 0l1 6z" />
        <path d="M12 2v2M4 7l1.5 1.5M20 7l-1.5 1.5M2 13h2M20 13h2" />
      </svg>
    );
  }
  function WhatsappIcon() {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20 3.5A10 10 0 006 19.8L3.5 22 6 21.2A10 10 0 1020 3.5zm-4.1 12.2c-.5.1-1.1.1-1.8-.1-2-.6-3.5-2-4.5-3.9-.3-.6-.5-1.2-.5-1.7 0-.4.2-.8.6-1l.6-.4c.2-.1.5 0 .6.2l.8 1.4c.1.2.1.4 0 .6l-.3.5c.6 1.1 1.5 2 2.6 2.6l.5-.3c.2-.1.4-.1.6 0l1.4.8c.2.1.3.4.2.6l-.4.6c-.2.4-.6.6-1 .7z" />
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
  function ShieldIcon() {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  