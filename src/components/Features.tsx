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

            <Car360WithOrbit/>
        </div>

      </section>
    );
  }

  