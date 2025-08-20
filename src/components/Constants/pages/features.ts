// @/components/Constants/pages/features.ts

import {
    BoltIcon, SparklesIcon, SirenIcon,
    WhatsappIcon, StoreIconF, ShieldIcon
} from "@/components/Constants/icons";
import {ReactNode} from "react";

export type FeatureColor = "cyan" | "emerald";

export interface Feature {
    title: string;
    desc: string;
    icon: ReactNode;
    color: FeatureColor;
}

export const f_features = [
    {
        title: "Real-Time Reports",
        desc: "Instant accident & stolen checks by sending a number plate or VIN.",
        icon: BoltIcon(),
        color: "cyan",
    },
    {
        title: "Smart Car Suggestions",
        desc: "If a vehicle fails checks, we propose safe alternatives from verified dealers.",
        icon: SparklesIcon(),
        color: "emerald",
    },
    {
        title: "Stolen Car Alerts",
        desc: "Broadcast stolen car details across the Autochecker WhatsApp network.",
        icon: SirenIcon(),
        color: "cyan",
    },
    {
        title: "Zero Learning Curve",
        desc: "No app to install. Everything happens in WhatsApp.",
        icon: WhatsappIcon(),
        color: "emerald",
    },
    {
        title: "Dealer Integration",
        desc: "Dealers verify inventory, build trust, and reach verified buyers.",
        icon: StoreIconF(),
        color: "cyan",
    },
    {
        title: "Secure Data",
        desc: "Verified sources: government / AutoChecker databases + proprietary records.",
        icon: ShieldIcon(),
        color: "emerald",
    },
] as const satisfies ReadonlyArray<{
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: "cyan" | "emerald";
}>;

// absolute positions (tweak per your design)
export const orbitSpots = [
    "top-2 left-1/2 -translate-x-1/2",
    "top-16 right-3 sm:right-10",
    "top-1/2 right-0 -translate-y-1/2",
    "bottom-2 left-1/2 -translate-x-1/2",
    "top-1/2 left-0 -translate-y-1/2",
    "top-16 left-3 sm:left-10",
];


export const SLOTS = [
    { w: 150, h: 140, z: 10 },  // smallest
    { w: 260, h: 260, z: 20 },  // medium
    { w: 320, h: 420, z: 40 },  // biggest (center)
    { w: 260, h: 260, z: 20 },  // medium
    { w: 150, h: 140, z: 10 },  // smallest
] as const;


export const CARD_BASE =
    "rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300 will-change-transform ";

export const CARD_ACTIVE =
    // brighter surface, stronger ring/shadow, slight scale-up
    "bg-white/95 dark:bg-slate-900/95 ring-2 ring-cyan-500/60 " +
    "shadow-xl md:shadow-2xl scale-[1.04] md:scale-[1.07] " +
    "text-gray-900 dark:text-slate-50 p-2";

export const CARD_DIM =
    // muted surface and text, softer ring
    "bg-white/55 dark:bg-slate-900/55 ring-1 ring-black/10 dark:ring-white/10 " +
    "opacity-80 hover:opacity-95 " +
    "text-slate-700/80 dark:text-slate-200/80";