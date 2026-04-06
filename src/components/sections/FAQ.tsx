"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
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
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
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
                 <div className="premium-card p-10 flex flex-col items-start border-primary/10 overflow-hidden relative group">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                    
                    <div className="relative z-10 w-full">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <HelpCircle size={32} />
                      </div>
                      <div className="font-bold text-secondary text-2xl mb-4">Still Have Questions?</div>
                      <div className="text-body-small mb-8">Our treatment experts are here to help you choose the right path for your health.</div>
                      <button className="w-full bg-primary text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                        Contact Us Today
                      </button>
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Right Column (Accordion) */}
           <div className="w-full lg:w-[60%] flex flex-col gap-5">
              {faqs.map((faq, index) => (
                <div key={index} className="premium-card overflow-hidden">
                   <button
                     className="w-full text-left p-8 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                     onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                   >
                      <span className="font-bold text-lg lg:text-xl text-secondary pr-8">{faq.question}</span>
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                        activeIndex === index ? "bg-primary text-white" : "bg-primary/10 text-primary"
                      )}>
                         {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
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
                           <div className="px-8 pb-8 text-body border-t border-border/50 pt-6">
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
