"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 z-0 bg-white" />


      <div className="container-custom relative z-10 px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-secondary leading-tight mb-6">
            Designing Your <span className="text-primary italic">Perfect Smile</span> with Precision.
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Experience the next generation of dental care. We combine advanced technology with a premium, patient-centric approach to give you the smile you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" size="lg" className="group">
              Book Appointment
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-muted">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-secondary">15+</span>
              <span className="text-sm text-muted-foreground font-medium">Years Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-secondary">10k+</span>
              <span className="text-sm text-muted-foreground font-medium">Happy Patients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-secondary">4.9/5</span>
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
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
             <div className="w-[500px] h-[600px] bg-muted relative">
                <Image
                  src="/images/hero-bg.png"
                  alt="Dental Treatment"
                  fill
                  className="object-cover scale-125"
                />
             </div>
          </div>
          
          {/* Decorative floating elements */}

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-premium z-20 flex items-center gap-4 border border-primary/20"
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
