// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // <- icons
import ModeToggle from "@/components/helpers/ModeToggle";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [mounted, setMounted] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.5 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { id: "hero", label: "Home" },
        { id: "features", label: "Features" },
        { id: "about", label: "About" },
        { id: "how", label: "How It Works" },
        { id: "pricing", label: "Pricing" },
        { id: "contact", label: "Contact Us" },
    ];

    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: y, behavior: "smooth" });
        setMobileOpen(false); // close menu on click (mobile)
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/70 backdrop-blur dark:border-white/5 dark:bg-[#060b12]/75">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
                {/* Logo */}
                <button
                    onClick={() => handleNavClick("hero")}
                    className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    aria-label="Go to home"
                >
                    <div className="relative h-10 w-32 sm:h-12 sm:w-36">
                        <Image
                            src="/logoc.svg"
                            alt="AutoChecker Logo"
                            fill
                            priority
                            className="rounded object-contain"
                            sizes="(min-width: 640px) 9rem, 8rem"
                        />
                    </div>
                </button>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 text-sm">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => handleNavClick(link.id)}
                                className={`transition-colors ${
                                    mounted && activeSection === link.id
                                        ? "text-cyan-600 underline underline-offset-4 dark:text-cyan-400"
                                        : "text-slate-900 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300"
                                }`}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <ModeToggle />

                    {/* CTA visible on md+ */}
                    <a
                        href="https://wa.me/254712345678?text=Hello%20AutoChecker,%20I%20want%20to%20check%20a%20car"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-block rounded-md bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-4 py-2 text-sm font-semibold  shadow-lg hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                    >
                        Check Now !
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white/95 dark:bg-[#060b12]/95 border-t border-slate-200 dark:border-slate-700 shadow-lg">
                    <ul className="flex flex-col items-start gap-4 p-4 text-base">
                        {navLinks.map((link) => (
                            <li key={link.id} className="w-full">
                                <button
                                    onClick={() => handleNavClick(link.id)}
                                    className={`block w-full text-left px-4 py-1 rounded-md transition-colors
      ${
                                        mounted && activeSection === link.id
                                            ? "text-cyan-600 underline underline-offset-4 dark:text-cyan-400"
                                            : "text-slate-900 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300 hover:bg-gray-300/15"
                                    }`}
                                >
                                    {link.label}
                                </button>
                            </li>

                        ))}
                        <li>
                            <a
                                href="https://wa.me/254712345678?text=Hello%20AutoChecker,%20I%20want%20to%20check%20a%20car"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                            >
                                Check Now !
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
