"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { 
    name: "Rahul Sharma", 
    date: "1 month ago",
    text: "Excellent service! The doctors are highly professional and the clinic is state-of-the-art. Very happy with my dental implant treatment.",
    initial: "R",
    color: "#4285F4"
  },
  { 
    name: "Priya Reddy", 
    date: "2 months ago",
    text: "Best dental clinic in Manikonda. The staff is very friendly and the treatment was completely painless. Highly recommend for any dental issues.",
    initial: "P",
    color: "#EA4335"
  },
  { 
    name: "Anand Gupta", 
    date: "3 months ago",
    text: "Had my root canal done here. Dr. Reddy and his team are amazing. The clinic is very hygienic and follow all safety protocols.",
    initial: "A",
    color: "#673AB7"
  },
  { 
    name: "Sneha V", 
    date: "4 months ago",
    text: "The smile transformation gallery showed real results, and I'm glad I chose this clinic for my veneers. The result is exactly what I wanted!",
    initial: "S",
    color: "#f59e0b"
  },
  { 
    name: "Karthik R", 
    date: "5 months ago",
    text: "Very affordable pricing for high-quality dental care. I appreciated how the doctor explained everything in detail before starting the procedure.",
    initial: "K",
    color: "#34A853"
  },
  { 
    name: "Meena K", 
    date: "6 months ago",
    text: "Trusted dental care for my entire family. We've been coming here for years and have always had a great experience.",
    initial: "M",
    color: "#FBBC05"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function Testimonials() {


  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom px-6 lg:px-12">
        <div className="text-left mb-8 max-w-4xl">
          <span className="block font-bold text-secondary text-base uppercase tracking-[0.2em] mb-4">Why People give us 5 star ratings</span>
          <h2 className="heading-section">Google Reviews</h2>
          <a 
            href="https://www.google.com/search?q=star+smiles+dental+care+manikonda+reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-primary text-white font-bold rounded-2xl shadow-premium hover:bg-primary-dark transition-all duration-300 group"
          >
            Review Us on Google
          </a>
        </div>
        
        <div className="w-full relative mt-8 group">
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden w-full flex py-4 pb-8">
            <div className="flex gap-6 md:gap-8 w-max animate-marquee group-hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].map((t, index) => (
                <div 
                  key={index} 
                  className="w-[300px] md:w-[400px] lg:w-[450px] bg-white p-8 rounded-3xl border border-border/50 shadow-xl shadow-blue-900/5 relative hover:shadow-2xl transition-all duration-500 h-full flex flex-col shrink-0"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: t.color }}>
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 leading-none mb-1">{t.name}</h4>
                        <span className="text-slate-400 text-xs font-medium">{t.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={`star-${index}-${s}`} size={16} fill="#fbbc05" stroke="none" />
                    ))}
                  </div>

                  <p className="text-slate-600 leading-relaxed italic flex-grow text-sm sm:text-base">"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-[#EEF5FF] to-[#FEFEFF] p-8 rounded-3xl border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-sm">
          <div className="z-10">
            <p className="text-slate-700 text-lg font-medium">Google rating score: <strong className="text-slate-900 text-2xl font-black">5.0</strong> of 5, based on <strong className="text-slate-900 font-black">199 reviews</strong></p>
          </div>
          <a 
            href="https://www.google.com/search?q=star+smiles+dental+care+manikonda+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 bg-primary px-10 py-4 rounded-xl font-bold text-white shadow-premium hover:bg-primary-dark transition-all flex items-center gap-3"
          >
            Review Us On Google
          </a>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
