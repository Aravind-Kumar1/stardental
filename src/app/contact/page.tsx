"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import { ArrowLeft, Phone, MapPin, Mail, Clock, Calendar } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-24 pb-8 bg-gradient-to-b from-slate-50 to-white text-center px-6">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-secondary text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Get in Touch With <span className="text-primary italic">Our Experts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed mb-12">
            Have questions? We're here to help you achieve your perfect smile. Visit us in Manikonda or contact us directly.
          </p>

          {/* Contact Fast Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="premium-card p-8 group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">Call Us</h3>
                <a href="tel:+919030271023" className="text-primary font-bold text-lg hover:underline">+91 90302 71023</a>
            </div>

            <div className="premium-card p-8 group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">Visit Us</h3>
                <p className="text-muted-foreground font-medium">Manikonda, Hyderabad</p>
            </div>

            <div className="premium-card p-8 group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">Working Hours</h3>
                <p className="text-muted-foreground font-medium">Daily: 10:00 AM – 09:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <Contact />

      {/* Quick Action Section */}
      <section className="py-16 bg-background">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Card: Online Appointment */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col items-center md:items-start gap-4 h-full">
              <div className="flex items-center gap-2.5 text-primary">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Convenience</span>
              </div>
              
              <h2 className="text-3xl font-display font-bold text-secondary">
                Online Appointment
              </h2>
              
              <div className="flex items-center gap-3 bg-secondary text-white px-5 py-2 rounded-xl">
                <span className="text-xl font-black">20% OFF</span>
                <div className="w-px h-6 bg-white/20" />
                <span className="text-xs font-bold uppercase tracking-wider">First Visit</span>
              </div>
              
              <p className="text-slate-500 font-medium leading-relaxed">
                Schedule your dental consultation online in just a few clicks. It's fast, secure, and available 24/7.
              </p>
            </div>

            {/* Right Card: Call Us */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col items-center md:items-start gap-4 h-full">
              <div className="flex items-center gap-2.5 text-primary">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Contact</span>
              </div>
              
              <h2 className="text-3xl font-display font-bold text-secondary">
                Call Us Anytime
              </h2>
              
              <a 
                href="tel:+919030271023" 
                className="group flex items-center gap-4 py-1"
              >
                <span className="text-3xl lg:text-4xl font-black text-primary group-hover:text-secondary transition-colors tabular-nums">
                  +91 90302 71023
                </span>
              </a>
              
              <p className="text-slate-500 font-medium leading-relaxed">
                Prefer to speak with a professional? Our friendly team is ready to assist you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
