"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Highly Rated Dental Clinic (5.0 ⭐ Reviews)",
  "Painless Treatment Approach",
  "Advanced Dental Technology",
  "Affordable & Transparent Pricing",
  "Personalized Treatment Plans"
];

export default function Highlights() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-6 border-y border-slate-100">
      <div className="w-full px-6 lg:px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {highlights.map((text, i) => (
            <motion.div 
              key={i} 
              className="flex items-center gap-3 bg-gradient-to-r from-[#030A14] to-[#1A4996] text-white px-5 py-4 rounded-2xl shadow-premium border-none hover:shadow-xl transition-all duration-300 group" 
              variants={fadeIn}
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={16} className="stroke-[3]" />
              </div>
              <span className="font-bold text-sm lg:text-[0.9375rem] leading-tight tracking-normal">
                {text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
