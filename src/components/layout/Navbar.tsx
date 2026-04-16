"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/services-data";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Services", 
      href: "/services",
      dropdown: servicesData.map((s) => ({ name: s.title, href: `/services/${s.slug}` })),
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Cases", href: "/cases" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/40 shadow-sm"
    >
      <div className="container-custom flex items-center justify-between h-20 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-48 h-12">
            <Image
              src="/images/Logo Blue.png"
              alt="Star Smiles Dental Care"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
             <div 
               key={link.name} 
               className="relative group"
               onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
               onMouseLeave={() => setActiveDropdown(null)}
             >
                <Link
                  href={link.href}
                  className="text-[1rem] font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1.5 py-8"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
                  )}
                </Link>

                {link.dropdown && (
                  <div
                    className={cn(
                      "absolute top-[80%] left-1/2 -translate-x-1/2 w-64 bg-white rounded-2xl shadow-2xl border border-border p-3 overflow-hidden z-50",
                      activeDropdown === link.name ? "block" : "hidden"
                    )}
                  >
                    <div className="flex flex-col gap-1">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          scroll={true}
                          className="text-[0.9375rem] font-semibold text-secondary hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
             </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+919030271023" className="flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors mr-4">
            <Phone size={18} className="fill-primary text-primary" />
            <span>+91 90302 71023</span>
          </a>
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none bg-primary text-white hover:bg-primary-dark shadow-premium px-6 py-3 text-base font-medium gap-2"
          >
            <Calendar size={18} />
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-6 md:hidden shadow-xl max-h-[80vh] overflow-y-auto"
        >
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col gap-4">
              <div 
                className="flex items-center justify-between"
                onClick={() => link.dropdown && setActiveDropdown(activeDropdown === link.name ? null : link.name)}
              >
                <Link
                  href={link.href}
                  onClick={() => !link.dropdown && setIsOpen(false)}
                  className="text-lg font-bold text-secondary"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <ChevronDown size={20} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
                )}
              </div>

              {link.dropdown && activeDropdown === link.name && (
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20">
                  {link.dropdown.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      scroll={true}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors"
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <hr className="border-muted" />
          <div className="flex flex-col gap-4">
            <a href="tel:+919030271023" className="flex items-center gap-3 text-secondary font-semibold">
              <Phone size={20} className="text-primary" />
              +91 90302 71023
            </a>
            <Link
              href="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none bg-primary text-white hover:bg-primary-dark shadow-premium px-6 py-4 text-base font-medium w-full"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
