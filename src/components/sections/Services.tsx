"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Smile, 
  Crown, 
  Droplet, 
  ShieldCheck, 
  Activity, 
  HeartPulse, 
  Sparkles,
  SearchCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 px-4">
          <div className="max-w-2xl">
             <motion.div
               initial={{ opacity: 0, y: 20, scale: 1.1 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               className="text-primary font-bold text-sm uppercase tracking-widest mb-4"
             >
                Expertise & Care
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, y: 20, scale: 1.1 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl lg:text-5xl font-display font-bold text-secondary leading-tight"
             >
                Specialized Treatments for a <span className="text-primary italic">Radiant Smile</span>
             </motion.h2>
          </div>
          <motion.p 
             initial={{ opacity: 0, scale: 1.1 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="text-muted-foreground text-lg max-w-sm font-medium"
          >
             Experience the pinnacle of dental care with our comprehensive range of specialized treatments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-premium transition-all duration-300 group"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-primary/5 group-hover:bg-primary/10 transition-colors")}>
                <service.icon size={28} className={cn("text-primary group-hover:scale-110 transition-transform")} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {service.description}
              </p>
              
              <div className="mt-8 pt-8 border-t border-muted/30">
                 <Link href={`/services/${service.slug}`} className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn More <SearchCheck size={18} />
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
