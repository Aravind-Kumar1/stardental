"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Phone, ArrowRight, CheckCircle, User, Smartphone, Clock, Stethoscope, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      setTimeout(() => setIsVisible(false), 3000);
    }, 1500);
  };

  const services = [
    "Regular Checkup", "Teeth Cleaning", "Root Canal", 
    "Dental Implants", "Orthodontics", "Cosmetic", "Other"
  ];

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", 
    "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
            className="absolute inset-0 bg-secondary/40 backdrop-blur-sm"
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[950px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 z-50 w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-secondary hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left: Visual/Info */}
            <div className="hidden lg:flex lg:w-[38%] bg-primary relative overflow-hidden p-12 flex-col justify-between text-white shrink-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-2xl -ml-20 -mb-20" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30">
                  <Calendar size={32} />
                </div>
                <h2 className="text-4xl font-display font-bold leading-tight mb-4">
                  Book Your <span className="italic">Consultation</span>
                </h2>
                <p className="text-white/80 font-medium leading-relaxed">
                  Join <strong className="text-white font-black">10k+</strong> happy patients who trust our professional dental care in Manikonda.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                    <CheckCircle size={18} />
                  </div>
                  <span className="font-bold">Advanced Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/20">
                    <CheckCircle size={18} />
                  </div>
                  <span className="font-bold">Painless Procedures</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full lg:w-[62%] p-5 sm:p-8 lg:p-12 max-h-[85vh] lg:max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="mb-5 lg:mb-8 font-display">
                <h3 className="text-xl lg:text-3xl font-bold text-secondary mb-1">Request an Appointment</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium">Quick scheduling for your dental visit.</p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 lg:py-12 text-center"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/20">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-black text-secondary mb-2">Thank You!</h4>
                  <p className="text-muted-foreground font-medium">Our team will call you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:grid sm:grid-cols-2 lg:gap-5">
                  <div className="space-y-1 col-span-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <User size={12} className="text-primary" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 lg:py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm"
                    />
                  </div>
                  
                  <div className="space-y-1 col-span-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Smartphone size={12} className="text-primary" /> Phone
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 lg:py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm"
                    />
                  </div>

                  <div className="space-y-1 col-span-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Calendar size={12} className="text-primary" /> Date
                    </label>
                    <input 
                      type="date" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 lg:py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm"
                    />
                  </div>

                  <div className="space-y-1 col-span-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} className="text-primary" /> Preferred Time
                    </label>
                    <div className="relative">
                        <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 lg:py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium appearance-none text-sm">
                            <option value="">Select a Slot</option>
                            {timeSlots.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>

                  <div className="space-y-1 col-span-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                        <Stethoscope size={12} className="text-primary" /> Service Required
                    </label>
                    <div className="relative">
                        <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 lg:py-3.5 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium appearance-none text-sm">
                            <option value="">Select a Treatment</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-3 w-full py-4 bg-secondary text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-xl shadow-secondary/10 active:scale-[0.98] text-base lg:text-lg"
                  >
                    {isSubmitting ? "Processing..." : "Confirm Booking"}
                    <ArrowRight size={20} />
                  </button>
                </form>
              )}

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Direct Help</span>
                    <span className="font-bold text-sm">+91 90302 71023</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
