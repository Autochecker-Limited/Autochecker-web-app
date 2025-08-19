// @/components/Constants/pages/about.ts

import {ChatIcon, LightningIcon, StarsIcon, StoreIcon } from "@/components/Constants/icons";
import React from "react";

type Feature = { title: string; desc: string; icon: React.ReactNode };
type Stat = { k: string; label: string };
/** ----------------  About ---------------- */
export const topFeatures = [
    {
        title: "WhatsApp-Native",
        desc: "No app to install — checks run inside WhatsApp.",
        icon: ChatIcon(),
    },
    {
        title: "Instant Reports",
        desc: "Accident, theft & ownership results in seconds.",
        icon: LightningIcon(),
    },
    {
        title: "Trusted Alternatives",
        desc: "If risky, we recommend safe options from dealers.",
        icon: StarsIcon(),
    },
    {
        title: "Dealer Tools",
        desc: "Inventory verification & lead flow via WhatsApp.",
        icon: StoreIcon(),
    },
];

export const stats = [
    { k: "150+", label: "Checks Completed" },
    { k: "220+", label: "Plates/VINs Saved" },
    { k: "100%", label: "Report Delivery" },
    { k: "350+", label: "Community Members" },
];
