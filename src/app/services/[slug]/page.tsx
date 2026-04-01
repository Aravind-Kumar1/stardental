"use client";

import { useParams } from "next/navigation";
import { services } from "@/lib/services";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Header - Reimagined as light for readability */}
      <div className="pt-40 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="container-custom px-6 relative z-10">
           <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold mb-10 hover:gap-3 transition-all">
              <ArrowLeft size={20} /> Back to Services
           </Link>
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl"
           >
              <div className={`w-20 h-20 rounded-3xl ${service.color} flex items-center justify-center mb-10 shadow-premium`}>
                 <Icon size={40} className={service.iconColor} />
              </div>
              <h1 className="text-secondary text-5xl lg:text-7xl font-display font-bold mb-8 tracking-tight italic">
                {service.title.split(' ')[0]} <span className="text-primary">{service.title.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-medium leading-relaxed max-w-3xl">
                {service.description}
              </p>
           </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white via-slate-50 to-white -z-10" />
      </div>

      {/* Content Section */}
      <section className="section-padding">
         <div className="container-custom grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <h2 className="text-4xl font-display font-bold text-secondary mb-8">Detailed Overview</h2>
               <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  {service.longDescription}
               </p>
               <div className="grid gap-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-border/50">
                       <CheckCircle className="text-primary shrink-0" size={24} />
                       <span className="font-semibold text-secondary text-lg">{benefit}</span>
                    </div>
                  ))}
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
               <div className="sticky top-32 bg-white rounded-[2.5rem] p-10 shadow-premium border border-border/50 overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-display font-bold text-secondary mb-6">Schedule Your Treatment</h3>
                    <p className="text-muted-foreground mb-10 text-lg">
                       Ready to experience the best in {service.title}? Book your consultation with our award-winning specialists today.
                    </p>
                    <div className="space-y-4">
                       <Button variant="primary" size="lg" className="w-full text-xl py-8">Book Appointment</Button>
                       <Button variant="outline" size="lg" className="w-full text-xl py-8">Inquire Now</Button>
                    </div>
                    <div className="mt-10 pt-10 border-t border-muted text-center">
                       <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Need immediate assistance?</p>
                       <p className="text-2xl font-bold text-primary">+1 (234) 567-890</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />
               </div>
            </motion.div>
         </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
