"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-secondary text-white overflow-hidden border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 px-4">
          {/* Brand Info */}
          <div className="flex flex-col gap-8 max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-40 h-10">
                <Image
                  src="/images/Logo Blue.png"
                  alt="Star Smiles Dental Care"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed italic">
              Redefining dental excellence with a fusion of advanced technology and personalized aesthetic vision.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8">
            <div className="font-bold text-xl mb-4">Quick Navigation</div>
            <div className="flex flex-col gap-6 text-slate-400 font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "Our Services", href: "/services" },
                { name: "Specialist Team", href: "/about" },
                { name: "Transformation Gallery", href: "/cases" },
                { name: "Patient Care", href: "/faq" },
                { name: "Contact Us", href: "/#contact" }
              ].map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                   {link.name}
                   <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="font-bold text-xl mb-4">Visit Our Clinic</div>
            <div className="flex flex-col gap-10">
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110">
                    <MapPin size={22} />
                 </div>
                 <div>
                    <div className="font-bold mb-1">Clinic Address</div>
                    <div className="text-slate-400">123 Aesthetic Plaza, Luxury Row, Downtown City, 90210</div>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110">
                    <Phone size={22} />
                 </div>
                 <div>
                    <div className="font-bold mb-1">Direct Help</div>
                    <div className="text-slate-400">+1 (234) 567-890</div>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110">
                    <Mail size={22} />
                 </div>
                 <div>
                    <div className="font-bold mb-1">Official Support</div>
                    <div className="text-slate-400">care@starsmiles.com</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-8">
            <div className="font-bold text-xl mb-4">Dental Health Insights</div>
            <p className="text-slate-400 leading-relaxed font-medium mb-4">
              Subscribe to our medical insights for the latest in dental aesthetics and oral wellness.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 focus:outline-none focus:border-primary transition-all text-white placeholder-slate-500"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-all" size={18} />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-all">
                 <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-medium">
          <div>© 2024 Star Smiles Dental Care. All rights reserved. Built for Excellence.</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
