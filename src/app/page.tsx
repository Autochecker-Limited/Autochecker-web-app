// src/app/page.tsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FooterCTA from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <About/>
      <HowItWorks />
      <Pricing/>
      <FooterCTA/>
    </main>
  );
}
