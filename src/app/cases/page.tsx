"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Cases from "@/components/sections/Cases";
import CTA from "@/components/sections/CTA";

export default function CasesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-10 bg-white text-center px-6">
        <h1 className="text-secondary text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-display font-bold mb-4 tracking-tight">Transformation <span className="text-primary italic">Gallery</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
          Witness the life-changing results we achieved for our patients through aesthetic dentistry.
        </p>
      </div>
      <Cases />
      <CTA />
      <Footer />
    </main>
  );
}
