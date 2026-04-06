"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Eye,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const whyChoose = [
  "Experienced & skilled dentists",
  "Advanced dental technology",
  "Painless treatment approach",
  "Personalized care for every patient",
  "Strict sterilization & hygiene protocols",
  "Affordable & transparent pricing",
];

const patientPoints = [
  "Clear explanation of treatment",
  "Comfortable procedures",
  "Minimal pain & faster recovery",
];

export default function AboutFull() {
  return (
    <>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-6"
          >
            <span className="w-10 h-[2px] bg-primary" />
            About our clinic
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-display font-bold text-secondary mb-8"
          >
            Complete oral healthcare in Manikonda
          </motion.h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Welcome to our dental clinic in Manikonda, Hyderabad, where your smile and oral
              health are our top priorities. We are a complete oral healthcare center dedicated
              to providing high-quality dental treatments with a focus on comfort, safety, and
              long-term results.
            </p>
            <p>
              Our clinic combines modern dental technology with compassionate care, ensuring
              that every patient receives personalized treatment tailored to their needs. From
              routine checkups to advanced procedures, we deliver effective and painless dental
              solutions.
            </p>
            <p>
              We are trusted by patients across Manikonda, Puppalaguda, and Hyderabad for
              providing reliable and affordable dental care.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50/80 border-y border-border/60">
        <div className="container-custom grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-card border border-border/50"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold text-secondary mb-4">Our mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To provide high-quality, affordable, and painless dental care while ensuring every
              patient feels comfortable and confident about their smile.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="bg-white rounded-3xl p-10 shadow-card border border-border/50"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold text-secondary mb-4">Our vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To become the most trusted dental clinic in Hyderabad by delivering advanced
              treatments with a patient-first approach.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-secondary mb-4">
              Why choose us
            </h2>
            <p className="text-muted-foreground text-lg">
              Expertise, technology, and personalized care—similar to what leading reference
              clinics highlight as trust factors.
            </p>
          </motion.div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 items-start bg-muted/50 rounded-2xl p-6 border border-border/40"
              >
                <CheckCircle className="text-primary shrink-0 mt-0.5" size={22} />
                <span className="font-semibold text-secondary">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-slate-50/50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-h-[520px]">
                <Image
                  src="/images/doctor.png"
                  alt="Dentist at our Manikonda clinic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/15 rounded-full blur-3xl -z-0" />
            </motion.div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-6">
                <Stethoscope size={18} />
                Meet our expert dentist
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-secondary mb-6">
                Experienced care you can trust
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our clinic is led by experienced dental professionals dedicated to delivering
                high-quality care. With years of expertise in general, cosmetic, and advanced
                dentistry, our doctors focus on accurate diagnosis, effective treatment, and
                patient comfort.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe in building trust through transparency, clear communication, and
                ethical dental practices.
              </p>
              <Link
                href="/services"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98]",
                  "bg-primary text-white hover:bg-primary-dark shadow-premium",
                  "px-8 py-4 text-lg font-semibold"
                )}
              >
                View our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-border/60">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-6 text-primary">
            <HeartHandshake size={28} />
            <span className="font-bold uppercase tracking-widest text-sm">Patient experience</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-secondary mb-6">
            Comfortable visits, clear guidance
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We understand that visiting a dentist can be stressful for some patients. That is
            why we create a friendly and comfortable environment where patients feel relaxed and
            confident. Our team ensures:
          </p>
          <ul className="space-y-4">
            {patientPoints.map((p) => (
              <li key={p} className="flex gap-3 items-center text-secondary font-medium text-lg">
                <CheckCircle className="text-primary shrink-0" size={22} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
