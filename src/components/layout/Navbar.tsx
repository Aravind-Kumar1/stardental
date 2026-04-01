"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const shadow = useTransform(
    scrollY,
    [0, 50],
    ["0 2px 10px rgba(15, 23, 42, 0.04)", "0 4px 20px -2px rgba(15, 23, 42, 0.08)"]
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Cases", href: "/cases" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter, boxShadow: shadow }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent"
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
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors mr-4">
            <Phone size={18} className="fill-primary text-primary" />
            <span>+1 (234) 567-890</span>
          </a>
          <Button variant="primary" size="md" className="gap-2">
            <Calendar size={18} />
            Book Now
          </Button>
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-6 md:hidden shadow-xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-secondary"
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-muted" />
          <div className="flex flex-col gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-3 text-secondary font-semibold">
              <Phone size={20} className="text-primary" />
              +1 (234) 567-890
            </a>
            <Button variant="primary" className="w-full text-center py-4">
              Book Appointment
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
