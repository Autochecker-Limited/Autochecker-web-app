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
        desc: "Verified sources: government/AutoChecker databases + proprietary records.",
        icon: ShieldIcon(),
        color: "emerald",
    },
] as const satisfies ReadonlyArray<{
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: "cyan" | "emerald";
}>;
