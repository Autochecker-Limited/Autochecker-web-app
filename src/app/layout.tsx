// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AutoChecker — Verify Before You Buy",
  description:
    "Instant vehicle checks for theft, accidents, and ownership — right from WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#060b12] text-slate-100 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
