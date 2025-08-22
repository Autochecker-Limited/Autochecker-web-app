// src/components/Hero.tsx
import BackgroundFX from "./BackgroundFX";
import PhoneMockupNeon from "./PhoneMockupNeon";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <BackgroundFX />

      {/* Change items-center -> items-start */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-8 pb-16 md:grid-cols-2 md:px-6 md:pt-12 md:pb-20">

        
        {/* Left copy */}
        <div className="relative z-10">
          <p className="mb-4 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-500">
            WhatsApp-first • Instant Results
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Know the car. Trust the deal —{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Right from WhatsApp
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-gray-500 " style={{ lineHeight: "1.8rem" }}>
            Run theft, accident, and ownership checks in seconds. Share a plate or VIN on Whatsapp —
              receive verified results instantly.
          </p>


          <div className="mt-8 flex flex-wrap gap-3">
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

        {/* Right mockup */}
        <div className="relative z-10 mx-auto w-full max-w-lg">
        <div className="aspect-[9/16] w-full max-w-sm rounded-3xl bg-white/[0.02] p-5 ring-1 ring-white/10">
            <PhoneMockupNeon />
        </div>

        </div>
      </div>
    </section>
  );
}
