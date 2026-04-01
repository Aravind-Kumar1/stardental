"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function FAQPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-10 bg-white text-center px-6">
        <h1 className="text-secondary text-5xl lg:text-7xl font-display font-bold mb-4 tracking-tight">Patient <span className="text-primary italic">FAQ</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
          Answers to the most common questions about our aesthetic dental treatments and clinic.
        </p>
      </div>
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
