// src/components/PhoneMockupNeon.tsx
export default function PhoneMockupNeon() {
    return (
        <div
            className="relative lora-regular h-full w-full rounded-[2.2rem]
            border border-slate-400/60 dark:border-white/30 bg-white/70
             shadow-[0_0_40px_rgba(34,211,238,.15)]
             dark:bg-slate-900/60">
            {/* notch */}
            <div
                className="absolute left-1/2 top-0 h-6 w-36 -translate-x-1/2 rounded-b-2xl bg-slate-200/70 dark:bg-slate-900/70"/>
            <div className="absolute inset-0 rounded-[2.2rem] p-4">
                <div
                    className="h-full w-full rounded-[1.6rem]  bg-white ring-1 ring-slate-900/10 dark:bg-[#0b1220] dark:ring-white/10">


                    {/* status + header */}
                    <div className="px-3 pt-1 text-[10px] text-slate-600 dark:text-slate-500">9:41</div>

                    <div
                        className="flex items-center gap-2 border-b border-slate-200/70 dark:border-white/10 px-3 py-2">
                        <div className="h-7 w-7 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,.6)]"/>

                        <div className="flex-1">
                            <div className="text-xs font-semibold text-slate-900 dark:text-white">AutoChecker</div>
                            <div className="text-[10px] text-slate-500 dark:text-slate-400">online</div>
                        </div>

                        <div className="h-5 w-5 rounded bg-slate-200/70 dark:bg-white/10"/>
                    </div>

                    {/* chat area */}
                    <div className="flex flex-col gap-2 overflow-hidden p-3">
                        {/* 1) Initiate Check — User */}
                        <div
                            className="ml-auto max-w-[78%] rounded-2xl rounded-tr-sm bg-emerald-500 px-3 py-2 text-[11px] text-slate-950 shadow-[0_0_22px_rgba(16,185,129,.45)]">
                            Hi 👋 I want to check a car.
                            <div className="mt-1 text-[9px] text-slate-700 dark:text-slate-900/70">sent • 11:40</div>
                        </div>

                        {/* 2) Send Plate or VIN — Bot */}
                        <div
                            className="max-w-[82%] rounded-2xl rounded-tl-sm bg-slate-100 text-slate-900 px-3 py-2 text-[11px] ring-1 ring-slate-300/60 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10">
                            1️⃣ Send the <span className="font-semibold">plate number</span> or{" "}
                            <span className="font-semibold">VIN</span> to begin.
                        </div>

                        <div
                            className="ml-6 inline-flex max-w-[72%] items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-400/30 px-3 py-1 text-[10px] dark:bg-emerald-500/15 dark:text-emerald-300">
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400"/>
                            Try: <span className="font-semibold">KDA 123A</span>
                        </div>

                        {/* 3) User sends plate */}
                        <div
                            className="ml-auto max-w-[78%] rounded-2xl rounded-tr-sm bg-emerald-500 px-3 py-2 text-[11px] text-slate-950 shadow-[0_0_22px_rgba(16,185,129,.45)]">
                            KDA 123A
                            <div className="mt-1 text-[9px] text-slate-700 dark:text-slate-900/70">sent • 11:42</div>
                        </div>


                        {/* 4) Data Retrieval */}
                        <div className="max-w-[82%] rounded-2xl rounded-tl-sm px-3 py-2 text-[11px]
                bg-slate-100 text-slate-900 ring-1 ring-slate-300/60
                dark:bg-white/5 dark:text-slate-200 dark:ring-white/10">
                            2️⃣ Fetching verified data from government & AutoChecker records…

                            <div className="mt-1 flex items-center gap-1 text-[9px] text-cyan-600 dark:text-cyan-300">
                                <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-600 dark:bg-cyan-300"/>
                                secure lookup in progress
                            </div>
                        </div>

                        {/* 5) Instant Report */}
                        <div className="max-w-full rounded-xl border p-3 text-[11px]
                border-slate-300/60 bg-slate-50 ring-1 ring-slate-200/70
                dark:border-white/10 dark:bg-white/[0.04] dark:ring-white/10">

                            <div className="mb-1 text-[10px] uppercase tracking-wide text-cyan-600 dark:text-cyan-300">
                                Instant Report
                            </div>

                            <ul className="grid grid-cols-2 gap-2">
                                <li className="rounded-md px-2 py-1 bg-slate-200/60 text-slate-900 dark:bg-black/20 dark:text-slate-200">
                                    Accident: <span
                                    className="font-semibold text-emerald-600 dark:text-emerald-300">None</span>
                                </li>
                                <li className="rounded-md px-2 py-1 bg-slate-200/60 text-slate-900 dark:bg-black/20 dark:text-slate-200">
                                    Theft: <span className="font-semibold text-emerald-600 dark:text-emerald-300">No record</span>
                                </li>
                                <li className="col-span-2 rounded-md px-2 py-1 bg-slate-200/60 text-slate-900 dark:bg-black/20 dark:text-slate-200">
                                    Ownership: <span
                                    className="font-semibold text-emerald-700 dark:text-emerald-300">Verified</span>
                                </li>
                            </ul>

                            <div className="mt-2 inline-flex items-center gap-2 rounded-md border px-2 py-1
                  border-cyan-500/40 bg-cyan-100/50 text-cyan-700
                  dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300">
                                📄 Vehicle Report.pdf <span className="text-[10px] text-slate-500 dark:text-slate-400">2.3 MB</span>
                            </div>
                        </div>

                        {/* 6) Smart Actions */}
                        <div
                            className="max-w-[82%] rounded-2xl rounded-tl-sm px-3 py-2 text-[11px]  bg-slate-100 text-slate-900 ring-1 ring-slate-300/60 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10">
                            3️⃣ Smart Actions:
                            <div className="mt-2 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px]  bg-rose-100/70 text-rose-700 ring-1 ring-rose-300/60
                                 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-400/30"> 🚨 Broadcast Alert (if stolen)   </span>

                                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] bg-amber-100/70 text-amber-700 ring-1 ring-amber-300/60
                     dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-400/30">  ⚠️ See Verified Alternatives (if unsafe)   </span>
                            </div>
                        </div>

                        {/* footer spacer */}
                        <div className="h-1"/>
                    </div>
                </div>
            </div>


            {/* side buttons */}
            <div className="absolute right-0 top-24 h-10 w-1 rounded-l-full bg-slate-300/50 dark:bg-white/10" />
            <div className="absolute right-0 top-40 h-20 w-1 rounded-l-full bg-slate-300/50 dark:bg-white/10" />

        </div>
    );
}
  