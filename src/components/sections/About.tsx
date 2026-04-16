"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const previewPoints = [
  "Experienced and skilled dentists",
  "Advanced dental technology",
  "Personalized care for every patient",
];

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="w-full lg:w-[52%] relative shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto lg:mx-0"
            >
              <div className="aspect-square relative">
                <Image
                  src="/images/dental_doctor.jpeg"
                  alt="Dr. Manjunatha Reddy - Expert Dentist"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
          </div>

          <div className="w-full lg:w-1/2 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full"
            >
              <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4">
                About us
              </p>

              <h2 className="heading-section">
                The Most Trusted Dental Clinic in <span className="gradient-text">Manikonda</span>
              </h2>

              <p className="text-body mb-6">
                Welcome to our state-of-the-art dental clinic in Manikonda, Hyderabad. Your smile and oral health are our top priorities. We are a complete oral healthcare center dedicated to high-quality dental treatments with a focus on comfort, safety, and long-term results.
              </p>

              <ul className="space-y-4 mb-10">
                {previewPoints.map((text) => (
                  <li key={text} className="flex items-center gap-3 text-secondary text-base font-semibold">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="text-primary" size={14} />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-xl transition-all active:scale-[0.98]",
                  "bg-primary/5 border border-primary/20 text-primary hover:bg-primary hover:text-white",
                  "px-8 py-3.5 text-base font-bold shadow-sm"
                )}
              >
                Read our full story
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
