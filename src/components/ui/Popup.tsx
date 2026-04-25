"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Phone, ArrowRight, CheckCircle, User, Smartphone, Clock, Stethoscope, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    service: "",
    slot: "",
    message: ""
  });
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (e.target.name === "phone") {
        setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError("");

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    
    if (!phoneRegex.test(cleanPhone)) {
        setPhoneError("Please enter a valid 10-digit phone number.");
        return;
    }

    setIsSubmitting(true);

    try {
        // EmailJS Integration
        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""; 
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        const templateParams = {
            user_name: formData.name,
            user_phone: cleanPhone,
            appointment_date: formData.date,
            selected_slot: formData.slot,
            selected_service: formData.service,
            message: formData.message || "No specific note"
        };

        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        
        setIsSuccess(true);
    } catch (error) {
        console.error("Email sending failed:", error);
        alert("Failed to send request. Please try again or call us directly.");
    } finally {
        setIsSubmitting(false);
    }
  };

  const services = [
    "Regular Checkup", "Teeth Cleaning", "Root Canal", 
    "Dental Implants", "Orthodontics", "Cosmetic", "Other"
  ];

  const getTimeSlots = (dateString: string) => {
    if (!dateString) return ["Select a date first"];
    const date = new Date(dateString);
    const day = date.getDay(); // 0 is Sunday

    if (day === 0) {
      // Sunday: 10 AM - 1 PM
      return ["10:00 AM", "11:00 AM", "12:00 PM"];
    } else {
      // Weekdays: 10 AM - 2 PM, 4 PM - 8 PM
      return [
        "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
        "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
      ];
    }
  };

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
            className="relative w-full max-w-[720px] bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 z-50 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center text-secondary hover:text-primary transition-all hover:rotate-90"
            >
              <X size={18} />
            </button>

            {/* Left: Visual/Info */}
            <div className="hidden md:flex md:w-[35%] bg-primary relative overflow-hidden p-7 lg:p-8 flex-col justify-between text-white shrink-0">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-2xl -ml-16 -mb-16" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-5 border border-white/30">
                  <Calendar size={28} />
                </div>
                <h2 className="text-3xl font-display font-bold leading-tight mb-3">
                  Book Your <span className="italic">Visit</span>
                </h2>
                <p className="text-white/80 text-sm font-medium leading-relaxed">
                  Join <strong className="text-white font-black text-base">10k+</strong> happy patients who trust our care.
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center border border-white/20 shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-bold text-xs">Modern Clinic</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center border border-white/20 shrink-0">
                    <CheckCircle size={14} />
                  </div>
                  <span className="font-bold text-xs">Expert Doctors</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full md:w-[65%] p-6 lg:p-7 relative flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] mb-1.5 block">Reservation</span>
                <h3 className="text-xl lg:text-2xl font-bold text-secondary tracking-tight">Request a Visit</h3>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-5 shadow-xl shadow-green-500/20">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-xl font-black text-secondary mb-2">Request Sent!</h4>
                  <p className="text-muted-foreground text-sm font-medium">Our team will contact you shortly via email/phone.</p>
                  
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: "", phone: "", date: "", service: "", slot: "", message: "" });
                    }}
                    className="mt-6 text-slate-400 text-xs font-bold hover:text-secondary underline"
                  >
                    Send another request
                  </button>

                  <button 
                    onClick={() => setIsVisible(false)}
                    className="mt-2 text-slate-300 text-[10px] font-bold hover:text-slate-400"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <User size={12} className="text-primary/60" /> Full Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      required 
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Smartphone size={12} className="text-primary/60" /> Phone
                    </label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit Number" 
                        required 
                        className={`w-full bg-slate-50/50 border ${phoneError ? 'border-red-500/50 focus:ring-red-500/10' : 'border-slate-200 focus:ring-primary/20 focus:border-primary'} rounded-xl px-4 py-3 outline-none transition-all font-medium text-sm`}
                      />
                      {phoneError && <p className="absolute -bottom-4 left-0 text-red-500 text-[9px] font-bold">{phoneError}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5 line-clamp-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Calendar size={12} className="text-primary/60" /> Date
                    </label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required 
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Clock size={12} className="text-primary/60" /> Time Slot
                    </label>
                    <div className="relative">
                        <select 
                          name="slot"
                          value={formData.slot}
                          onChange={handleChange}
                          required 
                          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium appearance-none text-sm"
                        >
                            <option value="">Select Slot</option>
                            {getTimeSlots(formData.date).map(s => (
                              <option key={s} value={s} disabled={s === "Select a date first"}>{s}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Stethoscope size={12} className="text-primary/60" /> Treatment Type
                    </label>
                    <div className="relative">
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required 
                          className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all font-medium appearance-none text-sm"
                        >
                            <option value="">Select treatment</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="mt-2 w-full py-3.5 bg-secondary text-white rounded-xl font-bold flex items-center justify-center gap-2.5 hover:bg-primary transition-all shadow-lg shadow-secondary/10 active:scale-[0.98] text-sm lg:text-base sm:col-span-2"
                  >
                    {isSubmitting ? "Processing..." : "Confirm Booking"}
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}

              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Direct Help</span>
                    <div className="flex gap-3 items-center">
                      <span className="font-bold text-xs">+91 90302 71023</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span className="font-bold text-xs">+91 74168 60888</span>
                    </div>
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
