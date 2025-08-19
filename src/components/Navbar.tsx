// src/components/Navbar.tsx
"use client";
import {useState, useEffect} from "react";
import Image from "next/image";
import {ModeToggle} from "@/components/helpers/ModeToggle";
import {navLinks} from "@/components/Constants";
import {cn} from "@/lib/utils";


export default function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [open, setOpen] = useState(false);

    // Highlight section in view
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {threshold: 0.5} // section is "active" when 50% is visible
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);


    // Prevent background scroll when mobile menu is open
    useEffect(() => {
        if (open) document.body.classList.add("overflow-hidden");
        else document.body.classList.remove("overflow-hidden");
        return () => document.body.classList.remove("overflow-hidden");
    }, [open]);


    const handleNavClick = (id: string) => {
        setOpen(false);

        const element = document.getElementById(id);
        if (!element) return;
        // smooth scroll; adjust if you have a fixed header

        const y = element.getBoundingClientRect().top + window.scrollY - 72; // 72px ~ header height
        window.scrollTo({top: y, behavior: "smooth"});

    }
    return (
        <header className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">

                {/* Logo */}
                <button
                    onClick={() => handleNavClick("hero")}
                    className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    aria-label="Go to home"
                >
                    <Image
                        src="/logoc.svg"
                        alt="AutoChecker Logo"
                        width={130}
                        height={60}
                        className="rounded"
                        priority
                    />
                    {/*
                    <span className="text-lg font-extrabold tracking-tight md:text-xl">
            <span className="text-white">AUTO</span>
            <span className="text-cyan-400">CHECKER</span>
            <span className="ml-2 hidden text-xs font-semibold text-slate-400 sm:inline">
              LIMITED
            </span>
          </span>*/}
                </button>


                {/* Desktop nav */}
                <ul className="hidden items-center gap-8 text-sm md:flex">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <button
                                onClick={() => handleNavClick(link.id)}
                                aria-current={activeSection === link.id ? "page" : undefined}
                                className={cn(
                                    "transition-colors",
                                    activeSection === link.id
                                        ? "text-cyan-400 underline underline-offset-4"
                                        : "text-muted-foreground hover:text-cyan-300"
                                )}
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Right side: Mode + CTA (desktop) */}
                <div className="hidden items-center gap-3 md:flex">
                    <ModeToggle/>
                    <a
                        href="https://wa.me/254712345678?text=Hello%20AutoChecker,%20I%20want%20to%20check%20a%20car"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                    >
                        Check a Car Now
                    </a>
                </div>

                {/* ------------------------  Mobile: Mode + Hamburger ---------------------------- */}
                {/* Mobile: Mode + Hamburger */}
                <div className="flex items-center gap-2 md:hidden">
                    <ModeToggle/>
                    <button
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            {open ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18"/>
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            <div
                id="mobile-menu"
                className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="mx-auto max-w-7xl px-4 pb-4">
                    {/* Mobile dropdown list */}
                    <ul className="space-y-2 py-2">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <button
                                    onClick={() => handleNavClick(link.id)}
                                    aria-current={activeSection === link.id ? "page" : undefined}
                                    className={cn(
                                        "w-full rounded-md px-3 py-2 text-left text-base transition-colors",
                                        activeSection === link.id
                                            ? "bg-accent text-accent-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                    )}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile CTA */}
                    <a
                        href="https://wa.me/254712345678?text=Hello%20AutoChecker,%20I%20want%20to%20check%20a%20car"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 block w-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-4 py-3 text-center text-base font-semibold text-slate-950 shadow-lg hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                    >
                        Check a Car Now
                    </a>
                </div>

            </div>
        </header>
    );
}
