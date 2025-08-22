// src/components/Constants/pages/pricing.ts
export type Accent = "cyan" | "emerald";
export type Tone = "light" | "mid" | "dark" | "emerald";

export type PriceBand = { price: string; suffix: string };

export type Plan = {
    key: "starter" | "dealer" | "enterprise";
    badge?: string;
    title: string;
    subtitle: string;
    accent: Accent;
    featured?: boolean;
    tone: Tone;
    cta: string;
    note?: string;

    // pricing options
    perCheck?: PriceBand;          // used by Starter
    monthly?: PriceBand;           // used by Dealer Pro
    annual?: PriceBand;            // used by Dealer Pro / Enterprise

    features: string[];
};

export const PRICING_TITLE = "Simple, fair pricing for buyers, dealers & partners";
export const PRICING_SUBTITLE =
    "Pay-per-check reports, dealer subscriptions, and enterprise integrations — all inside WhatsApp.";


export const PRICING_PLANS: Plan[] = [
    {
        key: "starter",
        badge: "STARTER",
        title: "Starter",
        subtitle: "Pay-per-check for individual buyers & sellers.",
        accent: "cyan",
        tone: "light",
        cta: "Get started",
        perCheck: { price: "KSh 200", suffix: "/check" },
        features: [
            "Official records lookup",
            "PDF report in WhatsApp",
            "Alert broadcast if stolen",
            "Basic support",
        ],
    },
    {
        key: "dealer",
        badge: "MOST POPULAR",
        title: "Dealer Pro",
        subtitle: "Unlimited checks + tools to build trust & leads.",
        accent: "emerald",
        featured: true,
        tone: "emerald",
        cta: "Get started",
        note: "Save 2 months on annual",
        monthly: { price: "KSh 4,999", suffix: "/month" },
        annual:  { price: "KSh 49,999", suffix: "/year" },
        features: [
            "Unlimited checks (fair use)",
            "Multi-seat access",
            "Inventory verification badge",
            "Featured placement (ad credits)",
            "Priority support",
        ],
    },
    {
        key: "enterprise",
        badge: "ENTERPRISE",
        title: "Enterprise",
        subtitle: "Integrations, security, SLAs & analytics.",
        accent: "cyan",
        tone: "light",
        cta: "Contact us",
        note: "KSh 15k+ / year typical",
        annual: { price: "Custom", suffix: "/year" },
        features: [
            "SSO / Okta / Azure AD",
            "API & webhooks (stolen reporting)",
            "Data Insights dashboard & exports",
            "Admin console & audit logs",
            "24/7 support & SLA",
        ],
    },
];

export const STARTER_CALLOUT = {
    price: "KSh 0",
    title: "Report a Car Theft",
    points: [
        "Instant WhatsApp intake",
        "Broadcast to partner network",
        "Share poster to groups",
        "Real-time update & takedown",
    ],
    cta: "Talk to us on WhatsApp",
    note:
        "KSh 0 theft report: WhatsApp intake • Broadcast to partners • Share poster • Real-time updates & takedown.",
};