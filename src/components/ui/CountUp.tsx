// components/ui/CountUp.tsx
"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
    /** final value to reach (e.g., 150) */
    end: number;
    /** text after the number (e.g., "+", "%") */
    suffix?: string;
    /** seconds */
    duration?: number;
    /** decimals to show while animating */
    decimals?: number;
};

export default function CountUp({ end, suffix = "", duration = 1.6, decimals = 0 }: Props) {
    const [val, setVal] = useState(0);
    const ref = useRef<HTMLSpanElement | null>(null);
    const [started, setStarted] = useState(false);

    const fmt = useMemo(
        () => new Intl.NumberFormat(undefined, { maximumFractionDigits: decimals }),
        [decimals]
    );

    useEffect(() => {
        if (!ref.current) return;

        // respect reduced motion
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        if (reduce) {
            setVal(end);
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.35 }
        );

        io.observe(ref.current);
        return () => io.disconnect();
    }, [end, started]);

    useEffect(() => {
        if (!started) return;

        let raf = 0;
        const from = 0;
        const to = end;
        const total = Math.max(0.3, duration) * 1000;
        const t0 = performance.now();

        const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / total);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(from + (to - from) * eased);
            if (p < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [started, end, duration]);

    return (
        <span ref={ref}>
      {fmt.format(publish(val, decimals))}
            {suffix}
    </span>
    );
}

function publish(v: number, decimals: number) {
    const factor = Math.pow(10, decimals);
    return Math.round(v * factor) / factor;
}
