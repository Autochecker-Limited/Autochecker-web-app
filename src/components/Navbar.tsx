// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ModeToggle from "@/components/helpers/ModeToggle"; // <- theme toggle

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // fix hydration mismatch for active link
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
    {id: "contact", label: "Contact Us"}
  ];

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
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

        {/* Links */}
        <ul className="flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-colors ${
                  mounted && activeSection === link.id
                    ? "text-cyan-600 underline underline-offset-4 dark:text-cyan-400"
                    : "text-slate-900 hover:text-cyan-600 dark:text-white dark:hover:text-cyan-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme toggle + CTA */}
        <div className="flex items-center gap-3">
          <ModeToggle /> {/* <-- dark / light toggle sits here */}
          <a
            href="https://wa.me/254712345678?text=Hello%20AutoChecker,%20I%20want%20to%20check%20a%20car"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Check a Car Now
          </a>
        </div>
      </nav>
    </header>
  );
}
