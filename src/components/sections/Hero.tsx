"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 lg:pt-28 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 z-0 bg-white" />


      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:max-w-2xl"
        >
          
          <h1 className="heading-hero">
            Advanced Dental Care in <span className="text-primary italic">Manikonda</span>
          </h1>
          
          <p className="text-body mb-8">
            Experience world-class dental treatments with cutting-edge technology and a compassionate touch.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button variant="primary" size="md" className="group text-base">
              Book appointment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Link
              href="/services"
              className={cn(
                "inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98]",
                "border border-primary text-primary hover:bg-primary/5",
                "px-6 py-3 text-base font-semibold"
              )}
            >
              Explore services
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-10 pt-8 border-t border-muted max-w-lg">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-secondary">15+</span>
              <span className="text-sm text-muted-foreground font-medium">Years Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-secondary">10k+</span>
              <span className="text-sm text-muted-foreground font-medium">Happy Patients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-secondary">4.9/5</span>
              <span className="text-sm text-muted-foreground font-medium">Google Rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
             <div className="w-full h-[500px] bg-muted relative">
                <Image
                  src="/images/hero-bg.png"
                  alt="Dental Treatment"
                  fill
                  className="object-cover"
                />
             </div>
          </div>
          
          {/* Decorative floating elements */}

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
            className="absolute -bottom-6 -left-10 glass p-5 rounded-2xl shadow-premium z-20 flex items-center gap-4 border border-primary/20"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
               <Users size={28} />
            </div>
            <div>
              <div className="text-sm font-bold text-secondary">World Class</div>
              <div className="text-xs text-muted-foreground">Specialist doctors team</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
