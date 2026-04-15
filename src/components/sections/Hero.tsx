"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/4506166/pexels-photo-4506166.jpeg?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Dental Clinic Manikonda"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Responsive Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] lg:hidden" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-hero mb-6">
              Advanced Dental Care in <span className="gradient-text italic">Manikonda</span>
            </h1>
            
            <p className="text-secondary/90 text-lg sm:text-xl mb-10 max-w-xl leading-relaxed font-medium">
              Experience world-class dental treatments with cutting-edge technology and a compassionate touch. We prioritize your comfort and long-term oral health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/book-appointment"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98]",
                  "bg-primary text-white hover:bg-primary-dark shadow-premium shadow-primary/20",
                  "px-8 py-4 text-lg font-semibold group"
                )}
              >
                Book appointment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/services"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98]",
                  "bg-white/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-white",
                  "px-8 py-4 text-lg font-semibold"
                )}
              >
                Explore services
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 sm:gap-12 pt-10 border-t border-secondary/10 max-w-lg">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">15+</span>
                <span className="text-sm text-secondary/70 font-medium">Years Exp.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">10k+</span>
                <span className="text-sm text-secondary/70 font-medium">Happy Patients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">4.9/5</span>
                <span className="text-sm text-secondary/70 font-medium">Google Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-12 right-12 hidden xl:flex items-center gap-4 glass p-4 rounded-2xl shadow-premium border border-white/40"
      >
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
           <Users size={28} />
        </div>
        <div>
          <div className="text-sm font-bold text-secondary">World Class</div>
          <div className="text-xs text-muted-foreground">Specialist doctors team</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
