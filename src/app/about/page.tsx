"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-10 bg-white text-center">
        <h1 className="text-secondary text-5xl lg:text-7xl font-display font-bold mb-4 tracking-tight">About <span className="text-primary italic">Our Clinic</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-6 font-medium">
          Discover the history, mission, and the expert team behind Star Smiles Dental Care.
        </p>
      </div>
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
