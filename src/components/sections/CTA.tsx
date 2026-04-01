"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Phone, Calendar, ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden bg-primary overflow-hidden">
      {/* Decorative blurry backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-dark rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px] z-0" />

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-white font-bold text-sm mb-10"
           >
              Ready for Your Transformation?
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20, scale: 1.1 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1, duration: 0.8 }}
             className="text-5xl lg:text-7xl font-display font-bold mb-10 leading-tight"
           >
              Experience the Pinnacle of <span className="text-secondary italic">Aesthetic Dental Care</span>.
           </motion.h2>

           <motion.p 
             initial={{ opacity: 0, scale: 1.1 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="text-xl text-white/80 mb-16 leading-relaxed max-w-2xl mx-auto"
           >
             Book your consultation today and take the first step towards the smile you've always dreamed of with our award-winning specialists.
           </motion.p>

           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="secondary" size="xl" className="group">
                 Book My Appointment
                 <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                 <MessageCircle className="mr-3" />
                 WhatsApp Specialist
              </Button>
           </div>

           <div className="mt-16 flex flex-wrap justify-center gap-12 text-white/70">
              <div className="flex items-center gap-3">
                 <Phone size={24} />
                 <span className="font-bold text-lg">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3">
                 <Calendar size={24} />
                 <span className="font-bold text-lg">Mon-Sat: 09:00 - 20:00</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
