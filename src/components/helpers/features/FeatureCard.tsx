//@components/helpers/features/FeatureCard.tsx
"use client";

import {cn} from "@/lib/utils";
import React from "react"; // optional utility for conditional classes

type FeatureCardProps = {
    title: string,
    desc: string,
    icon: React.ReactNode,
    color?: "cyan" | "emerald",
    className?: string
};

export default function FeatureCard({title, desc, icon, color = "cyan"}: FeatureCardProps) {
    const colorMap: Record<typeof color, string> = {
        cyan: "from-cyan-500/20 to-cyan-600/20 text-cyan-400",
        emerald: "from-emerald-500/20 to-emerald-600/20 text-emerald-400",
    };

    return (
        <div
            className={cn(
                "relative rounded-2xl p-6 bg-gradient-to-br from-gray-200/20 to-gray-300/50",
                "border shadow-lg hover:shadow-xl transition",
                "border-gray-200/50 dark:border-gray-100/30 text-gray-500 dark:text-gray-300",
            )}
        >
            {/* Icon bubble */}
            <div
                className={cn(
                    "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br",
                    colorMap[color]
                )}
            >
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>

            {/* Description */}
            <p className="text-sm leading-relaxed
               text-slate-800 dark:text-slate-200">
                {desc}
            </p>
        </div>
    );
}
