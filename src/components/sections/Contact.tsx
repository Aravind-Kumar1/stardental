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
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-7xl mx-auto px-6">
          <div className="space-y-12 pr-4">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Contact Us</span>
              <h2 className="heading-section">Visit Our Dental Clinic in <span className="gradient-text">Manikonda</span></h2>
              <p className="text-body mt-2">Professional dental care you can trust in Hyderabad.</p>
            </div>
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50 transition-transform hover:scale-110">
                  <MapPin size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Address</h3>
                  <p className="text-body max-w-sm">
                    Alkapur Township, Huda, Mahalneknapur, Manikonda, Hyderabad, Telangana - 500089
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50">
                  <Clock size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Timings</h3>
                  <p className="text-body">Open Daily: 10:00 AM – 09:00 PM</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-border/50">
                  <Phone size={26} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Phone</h3>
                  <p className="font-bold text-lg text-secondary">
                    <a href="tel:+919030271023" className="hover:text-primary transition-colors">+91 90302 71023</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8fbff] p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Book Your Appointment</h3>
            <p className="text-slate-600 mb-8 font-medium">Schedule your visit with our expert dental team today.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><User size={14} /> Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Smartphone size={14} /> Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    required 
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Calendar size={14} /> Preferred Date</label>
                  <input 
                    type="date" 
                    required 
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Stethoscope size={14} /> Select Service</label>
                <div className="relative">
                  <select required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium appearance-none">
                    <option value="">Choose a Service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Clock size={14} /> Preferred Time Slot</label>
                <div className="relative">
                  <select required className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all font-medium appearance-none">
                    <option value="">Choose a Slot</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${isSuccess ? 'bg-green-500 text-white shadow-lg' : 'bg-secondary text-white hover:bg-primary shadow-xl shadow-secondary/20 hover:scale-[1.02]'}`}
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
