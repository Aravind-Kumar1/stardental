"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, GraduationCap } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
             >
                <div className="aspect-[4/5] relative">
                  <Image
                    src="/images/doctor.png"
                    alt="Dr. Aris Star"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Credentials Badge */}
                <div className="absolute bottom-10 right-10 glass p-6 rounded-2xl z-20 shadow-premium flex flex-col gap-2">
                   <div className="flex items-center gap-3">
                      <Award className="text-primary" size={24} />
                      <span className="font-bold text-secondary">Aesthetic Award 2024</span>
                   </div>
                   <div className="h-px bg-muted w-full" />
                   <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">BOARD CERTIFIED SURGEON</div>
                </div>
             </motion.div>
             {/* Decorative Background */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0" />
             <div className="absolute -bottom-20 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 1.1 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-6">
                <div className="w-10 h-[2px] bg-primary" />
                Meet Our Specialist
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-secondary mb-8 leading-tight">
                Crafting Smiles with <span className="text-primary italic">Expertise & Heart</span>.
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dr. Aris Star is a world-renowned specialist in cosmetic dentistry with over 15 years of international experience. His approach combines cutting-edge clinical precision with a unique artistic vision for every patient.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                 {[
                   { icon: GraduationCap, text: "Harvard Medical School" },
                   { icon: CheckCircle, text: "Specialist Orthodontist" },
                   { icon: Award, text: "American Dental Board" },
                   { icon: CheckCircle, text: "1000+ Full Restorations" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <item.icon size={20} className="text-primary fill-primary/10" />
                     <span className="font-semibold text-secondary">{item.text}</span>
                   </div>
                 ))}
              </div>

              <div className="bg-muted p-8 rounded-2xl border border-border mb-10 italic text-muted-foreground">
                "Our mission is to redefine dental care. We don't just fix teeth; we restore self-confidence and provide a level of care that prioritizes your comfort above everything else."
              </div>

              <Button variant="outline" size="lg">Read Full Bio</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
