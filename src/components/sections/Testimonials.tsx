"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Cosmetic Branding Professional",
    text: "Dr. Aris and his team gave me more than just a perfect smile; they gave me back my self-confidence. The technology used here is truly world-class, and the result is stunning but very natural.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    text: "The orthodontic treatment was incredibly smooth. I really appreciated the digital planning; I could see the final results before even starting. Highly professional and efficient service.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Education Consultant",
    text: "This is not just a dental clinic; it's a spa for your teeth. The environment is so calming, and the staff are incredibly attentive. Best dental experience I've had in 20 years.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-slate-50/10 relative overflow-hidden">
      {/* Decorative blurred blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white to-transparent -z-10" />

      <div className="container-custom">
        <div className="text-center mb-20 max-w-2xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 20, scale: 1.1 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ once: true }}
             className="text-primary font-bold text-sm uppercase tracking-widest mb-6"
           >
              Patient Experiences
           </motion.div>
           <motion.h2 
             initial={{ opacity: 0, y: 20, scale: 1.1 }}
             whileInView={{ opacity: 1, y: 0, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl lg:text-5xl font-display font-bold text-secondary mb-8 leading-tight"
           >
              What Our Happy Patients <span className="text-primary italic">Say About Us</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 1.1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2rem] border border-border/50 shadow-card hover:shadow-premium transition-all duration-500 flex flex-col items-start relative group"
            >
              <Quote className="absolute top-8 right-8 text-primary opacity-10 group-hover:opacity-20 transition-opacity" size={40} />
              
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-lg text-secondary/80 font-medium leading-relaxed mb-8 italic">
                "{item.text}"
              </p>

              <div className="mt-auto">
                 <div className="font-bold text-secondary text-xl">{item.name}</div>
                 <div className="text-primary text-sm font-semibold">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
