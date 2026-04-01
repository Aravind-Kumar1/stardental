"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const cases = [
  {
    title: "Full Smile Restoration",
    category: "Restorative Dentistry",
    description: "A comprehensive reconstruction of the upper arch, restoring function and aesthetics.",
    image: "/images/case1.png"
  },
  {
    title: "Porcelain Veneer Upgrade",
    category: "Cosmetic Dentistry",
    description: "Correction of misalignment and discoloration using hand-crafted ceramic veneers.",
    image: "/images/case2.png"
  }
];

const Cases = () => {
  return (
    <section id="cases" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-20 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20, scale: 1.1 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ once: true }}
             className="text-primary font-bold text-sm uppercase tracking-widest mb-6"
           >
              Our Portfolio
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20, scale: 1.1 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl lg:text-5xl font-display font-bold text-secondary mb-8 leading-tight"
           >
              Real Results. <span className="text-primary italic">Life-Changing</span> Smiles.
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, scale: 1.1 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
           >
             Explore our gallery of successful transformations. Each case represents our commitment to precision, artistry, and patient satisfaction.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 1.1 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl border border-white/10 mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                   <div className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2 inline-block">
                     {item.category}
                   </div>
                   <h3 className="text-3xl font-bold">{item.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground text-lg max-w-lg mb-8">
                {item.description}
              </p>
              <Button variant="outline" className="border-border text-secondary hover:bg-primary hover:text-white group-hover:border-primary transition-all">
                View Details
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 text-center"
        >
           <Button variant="accent" size="lg">Full Smile Gallery</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;
