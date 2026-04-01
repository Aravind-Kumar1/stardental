"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-10 bg-white text-center">
        <h1 className="text-secondary text-5xl lg:text-7xl font-display font-bold mb-4 tracking-tight">Our <span className="text-primary italic">Services</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-6 font-medium">
          Experience the pinnacle of dental care with our comprehensive range of specialized treatments.
        </p>
      </div>
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
