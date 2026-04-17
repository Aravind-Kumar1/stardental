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
    <section id="cases" className="section-padding bg-slate-50/50 overflow-hidden">
      <div className="container-custom">
        <div className="mb-20 text-center max-w-3xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4"
             >
                Patient Success
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="heading-section"
             >
                Real Results. <span className="gradient-text italic">Life-Changing</span> Smiles.
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-body"
             >
               Explore our gallery of successful transformations. Each case represents our commitment to precision, artistry, and client satisfaction.
             </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group"
            >
              <div className="premium-card overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent flex flex-col justify-end p-8">
                    <div className="bg-primary/90 text-white px-3 py-1 rounded-lg text-[0.7rem] font-bold uppercase tracking-[0.15em] mb-3 inline-block self-start">
                      {item.category}
                    </div>
                    <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-body mb-8 line-clamp-2">
                    {item.description}
                  </p>
                  <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all font-bold py-3 text-base">
                    View Case Analysis
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-16 text-center"
        >
           <Button variant="primary" size="lg" className="rounded-2xl px-12 py-7 h-auto text-lg">
             Explore Full Gallery
           </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cases;
