import {f_features} from "@/components/Constants";
import Car360WithOrbit from "@/components/helpers/features/Car360WithOrbit";

export default function Features() {
    return (
      <section id="features" className="relative overflow-hidden">
        {/* headline */}
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="text-center">
              <p className="mb-4 inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-500">
                  AutoChecker • Verify Before You Buy
              </p>
              {/*<p className="text-sm font-semibold">
              Autochecker: Verify Before You Buy
            </p>*/}
            <h2 className="mt-2 text-3xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-emerald-400 to-green-400 bg-clip-text text-transparent sm:text-4xl">
                Vehicle Checks & Trusted Deals — All on WhatsApp
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-slate-500" style={{ lineHeight: "1.8rem" }}>
                Run instant theft, accident, and ownership checks by plate or VIN. Stay protected from fraud and connect with verified dealerships.
            </p>
          </div>

            <Car360WithOrbit/>
        </div>

      </section>
    );
  }

  