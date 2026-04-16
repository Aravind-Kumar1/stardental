"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do you offer financing for expensive procedures?",
    answer: "Yes, we provide several flexible financing options to ensure you can afford the best dental care without any financial stress. Our team can help you choose a plan that fits your budget."
  },
  {
    question: "How long does a typical smile transformation take?",
    answer: "A complete smile restoration can take anywhere from 2 to 6 weeks, depending on the complexity of your case. We provide a detailed treatment plan during your initial consultation."
  },
  {
    question: "What technology do you use for dental implants?",
    answer: "We use 3D digital imaging (CBCT) and computer-guided surgery to ensure the most precise and comfortable implant placement possible. This leads to faster healing and better results."
  },
  {
    question: "Is cosmetic dentistry covered by insurance?",
    answer: "Most insurance plans cover functional restorative procedures, but cosmetic-only treatments might have different coverage. We provide detailed insurance assistance to help you maximize your benefits."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
           {/* Left Column */}
           <div className="w-full lg:w-[40%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                 <div className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">Common Questions</div>
                 <h2 className="heading-section">
                    Frequently Asked <span className="gradient-text italic">Questions</span>
                 </h2>
                 <p className="text-body mb-10">
                    Can't find what you're looking for? Our friendly team is here to help you understand your treatment process and options.
                 </p>
                 <Link
                   href="/#contact"
                   className="inline-flex items-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 group"
                 >
                   Contact Us
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
              </motion.div>
           </div>

           {/* Right Column (Accordion) */}
           <div className="w-full lg:w-[60%] flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="premium-card overflow-hidden">
                   <button
                     className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                     onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                   >
                      <span className="font-bold text-base lg:text-lg text-secondary pr-6">{faq.question}</span>
                      <div className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300",
                        activeIndex === index ? "bg-primary text-white" : "bg-primary/10 text-primary"
                      )}>
                         {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                   </button>
                   <AnimatePresence>
                     {activeIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                           <div className="px-6 pb-6 text-body border-t border-border/50 pt-5 text-sm">
                              {faq.answer}
                           </div>
                        </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
