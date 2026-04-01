"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

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
           <div className="w-full lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 1.1 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-sm"
              >
                 <div className="text-primary font-bold text-sm uppercase tracking-widest mb-6">Common Questions</div>
                 <h2 className="text-4xl font-display font-bold text-secondary mb-8 leading-tight">
                    Frequently Asked <span className="text-primary italic">Questions</span>.
                 </h2>
                 <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
                    Can't find what you're looking for? Feel free to contact our team for more information.
                 </p>
                 <div className="bg-primary/5 p-8 rounded-2xl flex flex-col items-start border border-primary/10">
                    <HelpCircle className="text-primary mb-6" size={40} />
                    <div className="font-bold text-secondary text-xl mb-4">Still Have Questions?</div>
                    <div className="text-muted-foreground mb-6">Our experts are here to help you understand your treatment.</div>
                    <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-dark transition-all">Contact Us</button>
                 </div>
              </motion.div>
           </div>

           {/* Right Column (Accordion) */}
           <div className="w-full lg:w-2/3 flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden">
                   <button
                     className="w-full text-left p-8 flex items-center justify-between hover:bg-slate-50 transition-colors"
                     onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                   >
                      <span className="font-bold text-xl text-secondary pr-8">{faq.question}</span>
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300">
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
                           <div className="px-8 pb-8 text-muted-foreground text-lg italic leading-relaxed border-t border-muted/50 pt-6">
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
