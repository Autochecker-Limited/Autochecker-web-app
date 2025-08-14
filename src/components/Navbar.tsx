// src/components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

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
      { threshold: 0.5 } // section is "active" when 50% is visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "features", label: "Features" },
    { id: "about", label: "About" },
    { id: "how", label: "How It Works" },
    { id: "pricing", label: "Pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#060b12]/75 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AutoChecker Logo"
            width={48}
            height={48}
            className="rounded"
            priority
          />
          <span className="text-xl font-extrabold tracking-tight">
            <span className="text-white">AUTO</span>
            <span className="text-cyan-400">CHECKER</span>
            <span className="ml-2 text-xs font-semibold text-slate-400">LIMITED</span>
          </span>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-colors ${
                  activeSection === link.id
                    ? "text-cyan-400 underline underline-offset-4"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
            href="https://wa.me/254712345678?text=Hello%20AutoChecker,%20I%20want%20to%20check%20a%20car"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
            Check a Car Now
        </a>


      </nav>
    </header>
  );
}
