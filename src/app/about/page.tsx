"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutFull from "@/components/sections/about/AboutFull";
import CTA from "@/components/sections/CTA";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white text-center px-6">
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">
          About us
        </p>
        <h1 className="text-secondary text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
          Best Dental Clinic in Manikonda –{" "}
          <span className="text-primary">Advanced &amp; Trusted Dental Care</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
          We provide complete oral healthcare solutions with advanced technology and personalized
          care for every patient.
        </p>
      </div>
      <AboutFull />
      <CTA />
      <Footer />
    </main>
  );
}
