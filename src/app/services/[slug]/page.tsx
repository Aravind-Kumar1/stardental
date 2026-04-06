"use client";

import { useParams } from "next/navigation";
import { services } from "@/lib/services";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ArrowLeft, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const PHONE_DISPLAY = "+91 88674 62440";
const PHONE_HREF = "tel:+918867462440";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
        <h1 className="text-2xl font-bold text-secondary">Service not found</h1>
        <Link href="/services" className="text-primary font-semibold hover:underline">
          Back to services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;
  const benefitsTitle = service.benefitsHeading ?? "Benefits";

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-b border-border/40">
        <div className="container-custom relative z-10 px-6">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-xl"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 tracking-tight leading-tight">
                {service.detailHeading}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                 <Button variant="primary" size="lg" className="rounded-2xl px-8 h-auto py-5 text-base font-bold shadow-premium">
                   Book Appointment
                 </Button>
                 <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-white px-8 py-5 text-base font-bold text-secondary hover:bg-slate-50 transition-all"
                  >
                    <Phone size={18} />
                    Consult Now
                  </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
            >
               <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-0 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <section className="py-16 lg:py-20">
        <div className="container-custom grid lg:grid-cols-12 gap-12 lg:gap-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="heading-section">Treatment Overview</h2>
            <p className="text-body mb-10">{service.longDescription}</p>
            
            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-3">
              <div className="w-8 h-1 outline-primary bg-primary rounded-full" />
              {benefitsTitle}
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-border/60 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="text-primary" size={14} />
                  </div>
                  <span className="font-semibold text-secondary text-[0.9375rem] leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-28 bg-white rounded-[2rem] p-8 lg:p-10 shadow-card border border-border/40 overflow-hidden group">
              <div className="relative z-10 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Ready to start your treatment?
                </h3>
                <p className="text-body-small mb-8">
                  Get treated by clinical experts in Manikonda using the most advanced and painless dental technology.
                </p>
                <div className="space-y-4">
                  <Button variant="primary" size="lg" className="w-full text-base py-5 h-auto font-bold rounded-xl shadow-lg shadow-primary/20">
                    <Calendar size={18} className="mr-2" />
                    Book Free Consultation
                  </Button>
                  <a
                    href={PHONE_HREF}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 w-full rounded-xl transition-all active:scale-[0.98]",
                      "bg-slate-50 border border-border text-secondary hover:bg-slate-100",
                      "px-8 py-4 text-base font-bold"
                    )}
                  >
                    <Phone size={18} />
                    Call Clinic: {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl z-0 transition-transform group-hover:scale-150 duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
