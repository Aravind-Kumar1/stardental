"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const whyChoose = [
  "5-Star Rated Dental Clinic in Hyderabad",
  "Experienced & Skilled Dental Team",
  "Advanced Equipment & Laser Treatments",
  "Hygienic & Safe Environment",
  "Friendly & Patient-Centered Approach",
  "Trusted by Hundreds of Patients"
];

export default function WhyChooseUs() {
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
    <section id="why-choose-us" className="section-padding">
      <div className="container-custom px-6 lg:px-12">
        <div className="text-left mb-10">
          <span className="block font-bold text-xl text-secondary mb-3 uppercase tracking-[0.2em]">Experience Excellence</span>
          <h2 className="heading-section">Why Choose Star Smiles Dental?</h2>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {whyChoose.map((text, i) => (
            <motion.div key={i} className="bg-white p-6 rounded-2xl flex items-center gap-4 font-bold shadow-sm border border-slate-100" variants={fadeIn}>
              <CheckCircle2 className="text-secondary shrink-0" size={24} />
              <span className="text-slate-900">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
