"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/services-data";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();

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
      <div className="container-custom flex items-center justify-between h-16 sm:h-20 px-6">
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="flex items-center gap-2"
        >
          <div className="relative w-36 h-8 sm:w-48 sm:h-12">
            <Image
              src="/images/Logo Blue.png"
              alt="Star Smiles Dental Care"
              fill
              sizes="192px"
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (pathname === '/' && link.href === '/') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={cn(
                    "text-[0.9375rem] font-bold transition-all duration-300 flex items-center gap-1.5 py-8",
                    isActive ? "text-primary scale-105" : "text-secondary hover:text-primary"
                  )}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
                  )}
                  {isActive && (
                    <span className="absolute bottom-[22%] left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-500" />
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
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end mr-4">
            <a href="tel:+919030271023" className="flex items-center gap-2 text-secondary text-sm font-semibold hover:text-primary transition-colors">
              <Phone size={14} className="fill-primary text-primary" />
              <span>+91 90302 71023</span>
            </a>
            <a href="tel:+917416860888" className="flex items-center gap-2 text-secondary text-sm font-semibold hover:text-primary transition-colors">
              <Phone size={14} className="fill-primary text-primary" />
              <span>+91 74168 60888</span>
            </a>
          </div>
          <Link
            href="/book-appointment"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#030A14] to-[#1A4996] text-white shadow-premium hover:shadow-xl hover:brightness-110 px-6 py-3 text-base font-medium gap-2 transition-all duration-300 active:scale-[0.98]"
          >
            <Calendar size={18} />
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 sm:top-20 left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-6 lg:hidden shadow-xl max-h-[80vh] overflow-y-auto"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <div key={link.name} className="flex flex-col gap-4">
                <div 
                  className="flex items-center justify-between"
                  onClick={() => link.dropdown && setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (pathname === '/' && link.href === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                      if (!link.dropdown) setIsOpen(false);
                    }}
                    className={cn(
                      "text-lg font-bold transition-colors",
                      isActive ? "text-primary" : "text-secondary hover:text-primary"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                    </span>
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
            )
          })}
          <hr className="border-muted" />
          <div className="flex flex-col gap-4">
            <a href="tel:+919030271023" className="flex items-center gap-3 text-secondary font-semibold">
              <Phone size={20} className="text-primary" />
              +91 90302 71023
            </a>
            <a href="tel:+917416860888" className="flex items-center gap-3 text-secondary font-semibold">
              <Phone size={20} className="text-primary" />
              +91 74168 60888
            </a>
            <Link
              href="/book-appointment"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#030A14] to-[#1A4996] text-white shadow-premium hover:shadow-xl hover:brightness-110 px-6 py-4 text-base font-medium w-full transition-all duration-300 active:scale-[0.98]"
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
