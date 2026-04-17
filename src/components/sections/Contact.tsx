"use client";

import React, { useRef, useState } from "react";
import { MapPin, Clock, Phone, Send, CheckCircle, User, Smartphone, Calendar, Stethoscope, ChevronDown } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", 
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const services = [
    "Regular Checkup", "Teeth Cleaning", "Root Canal", 
    "Dental Implants", "Orthodontics", "Cosmetic", "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
        setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-7xl mx-auto">
          <div className="space-y-12 lg:pr-4">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Contact Us</span>
              <h2 className="heading-section">Visit Our Dental Clinic in <span className="gradient-text">Manikonda</span></h2>
              <p className="text-body mt-2">Professional dental care you can trust in Hyderabad.</p>
            </div>
            
            <div className="space-y-10">
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50 transition-transform hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5 sm:mb-2">Address</h3>
                  <p className="text-body max-w-sm">
                    Alkapur Township, Huda, Mahalneknapur, Manikonda, Hyderabad, Telangana - 500089
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5 sm:mb-2">Timings</h3>
                  <p className="text-body">Open Daily: 10:00 AM – 09:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5 sm:mb-2">Phone</h3>
                  <p className="font-bold text-lg text-secondary">
                    <a href="tel:+919030271023" className="hover:text-primary transition-colors">+91 90302 71023</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8fbff] p-5 sm:p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 w-full mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2 lg:mb-4">Book Your Appointment</h3>
            <p className="text-slate-600 mb-6 lg:mb-8 font-medium text-sm sm:text-base">Schedule your visit with our expert dental team today.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider"><User size={14} className="text-primary" /> Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium text-sm sm:text-base"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider"><Smartphone size={14} className="text-primary" /> Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    required 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider"><Calendar size={14} className="text-primary" /> Preferred Date</label>
                  <input 
                    type="date" 
                    required 
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider"><Stethoscope size={14} className="text-primary" /> Select Service</label>
                  <div className="relative">
                    <select required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium appearance-none text-sm sm:text-base">
                      <option value="">Choose a Service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-2 uppercase tracking-wider"><Clock size={14} className="text-primary" /> Preferred Slot</label>
                  <div className="relative">
                    <select required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 sm:px-5 sm:py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium appearance-none text-sm sm:text-base">
                      <option value="">Choose a Slot</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 ${isSuccess ? 'bg-green-500 text-white shadow-lg' : 'bg-secondary text-white hover:bg-primary shadow-xl shadow-secondary/20 hover:scale-[1.02]'}`}
              >
                {isSubmitting ? "Sending..." : isSuccess ? (
                  <><CheckCircle size={22} /> Appointment Booked!</>
                ) : (
                  <><Send size={20} /> Book Appointment Now</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
