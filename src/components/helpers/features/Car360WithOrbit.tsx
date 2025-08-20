"use client";

import dynamic from "next/dynamic";
import {useEffect, useMemo, useState} from "react";
import {motion} from "framer-motion"
import {useTheme} from "next-themes";
import FeatureCard from "@/components/helpers/features/FeatureCard";
import {f_features, SLOTS, CARD_BASE, CARD_ACTIVE, CARD_DIM} from "@/components/Constants";

type MVProps = JSX.IntrinsicElements["model-viewer"];

const ModelViewer = dynamic<MVProps>(
    () => import("@/components/helpers/features/ModelViewerShim").then(m => m.default),
    {ssr: false}
);

export default function Car360WithOrbit() {
    const n = f_features.length;
    const [current, setCurrent] = useState(0);           // index that sits in the center slot
    const [paused, setPaused] = useState(false);

    const {theme, systemTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    // indices for the 5 visible cards: [-2, -1, 0, +1, +2] around current
    const indices = useMemo(
        () => [-2, -1, 0, 1, 2].map(k => (current + k + n) % n),
        [current, n]
    );

    // Avoid hydration mismatch
    useEffect(() => setMounted(true), []);

    // autoplay
    useEffect(() => {
        if (paused || n <= 1) return;
        const id = setInterval(() => setCurrent(c => (c + 1) % n), 3500);
        return () => clearInterval(id);
    }, [paused, n]);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    const modelSrc = currentTheme === "dark" ? "/models/car_light.glb" : "/models/car_dark.glb";

    return (
        <section className="relative">
            <div className="relative mx-auto max-w-6xl px-4">
                <div className="relative h-[520px] sm:h-[560px] md:h-[620px]">
                    {/* Car (under the cards) */}
                    <div className="absolute inset-0 z-10">
                        <ModelViewer
                            src={modelSrc}
                            alt="3D BMW Vision"
                            camera-controls
                            auto-rotate
                            auto-rotate-delay={0}
                            rotation-per-second="10deg"
                            exposure="1.0"
                            shadow-intensity="2"
                            style={{
                                width: "100%",
                                height: "100%",
                                background: "transparent",
                                transform: "scale(1.3) translateY(55px)",
                            }}
                            ar
                            ar-modes="webxr scene-viewer quick-look"
                            poster=""
                            disable-zoom={false}
                            interaction-prompt="none"
                        />
                    </div>

                    {/* The 5-card row (over the car) */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-[22%] z-20 hidden md:block"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        <motion.div layout className="flex items-end gap-6 pointer-events-none">
                            {SLOTS.map((slot, slotIdx) => {
                                const feat = f_features[indices[slotIdx]];
                                const key = `${indices[slotIdx]}-${feat.title}`;
                                const isCenter = slotIdx === 2;

                                return (
                                    <motion.div
                                        key={key}
                                        layout
                                        className="pointer-events-auto"
                                        style={{width: slot.w, height: slot.h, zIndex: slot.z}}
                                        initial={{opacity: 0, y: 24, scale: 0.95}}
                                        animate={{opacity: 1, y: 0, scale: 1}}
                                        transition={{type: "spring", stiffness: 420, damping: 38}}
                                        onClick={() => setCurrent(indices[slotIdx])}
                                        role="button"
                                        aria-pressed={isCenter}
                                    >
                                        {/* Card surface */}
                                        <div className={`${CARD_BASE} ${isCenter ? CARD_ACTIVE : CARD_DIM}`}>
                                            <FeatureCard
                                                title={feat.title}
                                                desc={feat.desc}
                                                icon={feat.icon}
                                                color={feat.color}
                                                // keep the card filling the wrapper
                                                className="h-full w-full"
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* -----------  Glow + tilted rings behind the active (center) card ----------------- */}

                    {/* glow + tilted rings (behind car, visible on all screens) */}
                    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[30%] z-0 block">
                        <div className="[perspective:900px] relative">
                            <div
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                 h-[300px] md:h-[560px] aspect-square"
                                style={{ transform: "rotateX(42deg) scaleY(1.10)" }}
                            >
                                {/* glow */}
                                <div className="absolute inset-0 rounded-full blur-3xl
                      bg-emerald-400/20 dark:bg-emerald-500/20" />

                                {/* STEADY RINGS (2) */}
                                <div className="absolute inset-0 rounded-full border
                      border-emerald-400/40 dark:border-emerald-500/40" />
                                <div className="absolute inset-0 rounded-full m-6 md:m-12 border
                      border-emerald-400/25 dark:border-emerald-500/25" />

                                {/* PING RINGS (2) */}
                                <div className="absolute inset-0 rounded-full border
                      border-emerald-400/25 dark:border-emerald-500/25
                      animate-ping [animation-duration:3.2s]" />
                                <div className="absolute inset-0 rounded-full m-8 md:m-16 border
                      border-emerald-400/15 dark:border-emerald-500/15
                      animate-ping [animation-duration:4.2s]" />
                            </div>
                        </div>
                    </div>


                    {/* -----------  End ----------------- */}

                    {/* dots row */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[12%] z-30 hidden md:flex gap-2">
                        {f_features.map((_, i) => {
                            const active = current === i;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Go to ${i + 1}`}
                                    className={[
                                        "h-2 rounded-full transition-all duration-300",
                                        active
                                            ? "w-5 bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
                                            : "w-2 bg-slate-400/60 hover:bg-slate-400/80 dark:bg-slate-500/50 dark:hover:bg-slate-400/70",
                                    ].join(" ")}
                                />
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Mobile fallback grid */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:hidden px-4">
                {f_features.map((f, i) => (
                    <FeatureCard key={`grid-${i}`} {...f} />
                ))}
            </div>
        </section>
    );
}
