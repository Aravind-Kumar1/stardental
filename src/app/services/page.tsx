"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-b from-slate-50 to-white text-center px-6">
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Services</p>
        <h1 className="text-secondary text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight max-w-3xl mx-auto">
          Complete Dental Services in <span className="text-primary">Manikonda, Hyderabad</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
          We offer a wide range of dental treatments designed to improve your oral health, restore
          functionality, and enhance your smile. Our services include preventive, restorative,
          cosmetic, and emergency dental care—routine and advanced procedures under one roof.
        </p>
      </div>
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
