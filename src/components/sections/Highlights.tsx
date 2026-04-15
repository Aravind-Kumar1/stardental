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
    <section className="py-8 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {highlights.map((text, i) => (
            <motion.div key={i} className="flex items-center gap-4 font-bold text-slate-900" variants={fadeIn}>
              <div className="text-secondary shrink-0"><CheckCircle2 size={20} /></div>
              <span className="text-sm lg:text-base">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
