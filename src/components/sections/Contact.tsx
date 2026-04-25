"use client";

import React, { useRef, useState } from "react";
import { MapPin, Clock, Phone, Send, CheckCircle, User, Smartphone, Calendar, Stethoscope, ChevronDown } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
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

  const services = [
    "Regular Checkup", "Teeth Cleaning", "Root Canal", 
    "Dental Implants", "Orthodontics", "Cosmetic", "Other"
  ];

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

  return (
    <section id="contact" className="section-padding overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-7xl mx-auto">
          <div className="space-y-12 lg:pr-4">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Contact Us</span>
              <h2 className="heading-section">Visit Our Dental Clinic in <span className="gradient-text">Manikonda, Hyderabad</span></h2>
              <p className="text-body mt-2">Professional dental care you can trust in Hyderabad.</p>
            </div>
            
            <div className="space-y-10">
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#EEF5FF] to-[#FEFEFF] rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10 transition-transform hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5 sm:mb-2">Location</h3>
                  <p className="text-body">Alkapur Township, Manikonda,<br />Hyderabad, Telangana 500089</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#EEF5FF] to-[#FEFEFF] rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10 transition-transform hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5 sm:mb-2">Phone</h3>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-lg text-secondary">
                      <a href="tel:+919030271023" className="hover:text-primary transition-colors">+91 90302 71023</a>
                    </p>
                    <p className="font-bold text-lg text-secondary">
                      <a href="tel:+917416860888" className="hover:text-primary transition-colors">+91 74168 60888</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#EEF5FF] to-[#FEFEFF] rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-primary/10">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-1.5 sm:mb-2">Timings</h3>
                  <div className="text-body flex flex-col gap-1 font-medium">
                    <div className="flex flex-col">
                      <span className="font-bold text-secondary">Mon - Sat:</span>
                      <span>10:00 AM – 02:00 PM</span>
                      <span>04:00 PM – 08:00 PM</span>
                    </div>
                    <div className="flex flex-col mt-1">
                      <span className="font-bold text-secondary">Sunday:</span>
                      <span>10:00 AM – 01:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#030A14] to-[#1A4996] p-5 sm:p-8 lg:p-12 rounded-[2.5rem] shadow-premium w-full mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-0" />
            
            {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm relative z-10">
                   <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/20">
                    <CheckCircle size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Request Sent!</h4>
                  <p className="text-white/70 text-sm mb-8 px-6">Our team will verify the schedule and contact you shortly.</p>
                  
                  <button 
                    onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: "", phone: "", date: "", service: "", slot: "", message: "" });
                    }}
                    className="mt-6 text-white text-sm font-bold bg-white/10 px-8 py-3 rounded-xl hover:bg-white/20 transition-all"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-4 relative z-10">Book Your Appointment</h3>
                <p className="text-white/80 mb-6 lg:mb-8 font-medium text-sm sm:text-base relative z-10">Schedule your visit with our expert dental team today.</p>
                
                 <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
                   <div className="space-y-2 relative z-10">
                    <label className="text-xs font-bold text-white/90 flex items-center gap-2 uppercase tracking-wider"><User size={14} className="text-[#90B4E7]" /> Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      required 
                      className="w-full bg-white border border-transparent rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 relative z-10">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/90 flex items-center gap-2 uppercase tracking-wider"><Smartphone size={14} className="text-[#90B4E7]" /> Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number" 
                        required 
                        className={`w-full bg-white border ${phoneError ? 'border-red-500 focus:ring-red-400/50' : 'border-transparent focus:ring-white/30'} rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 focus:ring-2 outline-none transition-all font-medium text-sm sm:text-base`}
                      />
                      {phoneError && <p className="text-red-400 text-xs font-medium mt-1">{phoneError}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/90 flex items-center gap-2 uppercase tracking-wider"><Calendar size={14} className="text-[#90B4E7]" /> Preferred Date</label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required 
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-white border border-transparent rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 relative z-10">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/90 flex items-center gap-2 uppercase tracking-wider"><Stethoscope size={14} className="text-[#90B4E7]" /> Select Service</label>
                      <div className="relative">
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required 
                          className="w-full bg-white border border-transparent rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium appearance-none text-sm sm:text-base"
                        >
                          <option value="">Choose a Service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/90 flex items-center gap-2 uppercase tracking-wider"><Clock size={14} className="text-[#90B4E7]" /> Preferred Slot</label>
                      <div className="relative">
                        <select 
                          name="slot"
                          value={formData.slot}
                          onChange={handleChange}
                          required 
                          className="w-full bg-white border border-transparent rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium appearance-none text-sm sm:text-base"
                        >
                          <option value="">Choose a Slot</option>
                          {getTimeSlots(formData.date).map(slot => (
                            <option key={slot} value={slot} disabled={slot === "Select a date first"}>{slot}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 relative z-10">
                    <label className="text-xs font-bold text-white/90 uppercase tracking-wider">Message (Optional)</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us your concern" 
                      rows={3}
                      className="w-full bg-white border border-transparent rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-slate-900 focus:ring-2 focus:ring-white/30 outline-none transition-all font-medium text-sm sm:text-base"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-300 relative z-10 border border-white/20 bg-[#0A1A35] text-white hover:bg-[#1A4996] shadow-xl shadow-black/20 hover:scale-[1.02]`}
                  >
                    {isSubmitting ? "Sending..." : (
                      <><Send size={20} /> Book Appointment Now</>
                    )}
                  </button>
                </form>
                </>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

