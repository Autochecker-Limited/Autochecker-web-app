// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/helpers/theme-provider";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-sans" });
const plexMono     = IBM_Plex_Mono({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-mono" });


export const metadata = {
  title: "AutoChecker — Verify Before You Buy",
  description:
    "Instant vehicle checks for theft, accidents, and ownership — right from WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"
          suppressHydrationWarning
          className={`${spaceGrotesk.variable} ${plexMono.variable} ${inter.variable}`} >
      <body>
      {/* Load the web component once, early, with matching credentials */}
      <Script
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          type="module"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
      />


      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <Navbar />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
