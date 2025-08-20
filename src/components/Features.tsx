import {f_features} from "@/components/Constants";
import Car360WithOrbit from "@/components/helpers/features/Car360WithOrbit";

export default function Features() {
    return (
      <section id="features" className="relative overflow-hidden">
        {/* headline */}
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="text-center">
            <p className="text-sm font-semibold">
              Autochecker: Verify Before You Buy
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent sm:text-4xl">
              A WhatsApp-Based Vehicle Verification & Dealership Platform
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-500">
              Checks by plate or VIN. Combat fraud, streamline buying, and connect with trusted dealerships.
            </p>
          </div>
  
          {/* Why-style feature cards */}
            {/* <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {f_features.map((feature, idx) => (
                  <FeatureCard
                      key={idx}
                      title={feature.title}
                      desc={feature.desc}
                      icon={feature.icon}
                      color={feature.color}
                  />
              ))}
          </div>*/}
            <Car360WithOrbit/>
        </div>

      </section>
    );
  }
  
  /* ---------- UI bits ---------- */
{/*
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

*/}
  