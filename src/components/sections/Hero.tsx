"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const StatCounter = ({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [count, value]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return <span>{displayValue}{suffix}</span>;
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background min-h-[85vh] flex flex-col justify-between">
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

      <div className="container-custom relative z-10 w-full pt-48 pb-8 flex-grow flex items-center justify-center lg:justify-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <h1 className="heading-hero mb-6">
            Advanced Dental Care in <span className="gradient-text italic">Manikonda</span>
          </h1>

          <p className="text-secondary/90 text-lg sm:text-xl mb-10 max-w-xl leading-relaxed font-medium">
            Experience world-class dental treatments with cutting-edge technology and a compassionate touch. We prioritize your comfort and long-term oral health.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/book-appointment"
              className={cn(
                "inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98]",
                "bg-primary text-white hover:bg-primary-dark shadow-premium shadow-primary/20",
                "px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold group w-full sm:w-auto"
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
                "px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
              )}
            >
              Explore services
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 w-full border-t border-secondary/5 bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.02)]"
      >
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-secondary/10">
            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                <StatCounter value={18} suffix="+" />
              </span>
              <span className="text-sm text-secondary/60 font-bold tracking-widest uppercase mt-3 text-center">Years Exp.</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                <StatCounter value={10} suffix="k+" />
              </span>
              <span className="text-sm text-secondary/60 font-bold tracking-widest uppercase mt-3 text-center">Happy Patients</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <div className="flex items-baseline justify-center">
                <span className="text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                  <StatCounter value={5} />
                </span>
                <span className="text-2xl lg:text-3xl font-bold text-secondary/40 ml-1">/5</span>
              </div>
              <span className="text-sm text-secondary/60 font-bold tracking-widest uppercase mt-3 text-center">Google Rating</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4">
              <span className="text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                <StatCounter value={98} suffix="%" />
              </span>
              <span className="text-sm text-secondary/60 font-bold tracking-widest uppercase mt-1.5 text-center">Satisfaction</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
