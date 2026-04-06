"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { SearchCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50/30">
      <div className="container-custom">
        <div className="mb-16 text-center max-w-3xl mx-auto">
             <motion.p
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4"
             >
                Global Standards
             </motion.p>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="heading-section"
             >
                Comprehensive Dental Care for <span className="gradient-text italic">Your Perfect Smile</span>
             </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-body"
          >
             From routine checkups to complex oral surgeries, we offer a full spectrum of dental services using the latest technology and gentle care techniques in Manikonda.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="premium-card overflow-hidden group flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-body mb-8 line-clamp-3">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border/40">
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="inline-flex items-center gap-3 text-primary text-[1rem] font-bold hover:gap-4 transition-all"
                  >
                    View Details
                    <SearchCheck size={20} className="stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
