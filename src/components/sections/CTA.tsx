import { Phone, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden bg-primary overflow-hidden">
      {/* Decorative blurry backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-dark rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px] z-0" />

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
           <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-white font-bold text-sm mb-10">
              Ready for Your Transformation?
           </div>

           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              Book your <span className="text-secondary">appointment</span> today
           </h2>

           <p className="text-xl text-white/85 mb-14 leading-relaxed max-w-2xl mx-auto">
             Get treated by experienced dentists in Manikonda with advanced and painless dental care.
           </p>

           <div className="flex flex-col sm:flex-row gap-6 justify-center">
           <Link
             href="/book-appointment"
             className="inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98] bg-secondary text-white hover:bg-secondary/90 px-10 py-5 text-xl font-bold group"
           >
                 Book appointment
                 <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
           </Link>
              <a
                href="https://wa.me/918867462440"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98]",
                  "border border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm",
                  "px-10 py-5 text-xl font-bold w-full sm:w-auto"
                )}
              >
                <MessageCircle className="mr-3" />
                WhatsApp us
              </a>
           </div>

           <div className="mt-16 flex flex-wrap justify-center gap-12 text-white/80">
                <a href="tel:+919030271023" className="flex items-center gap-3 hover:text-white transition-colors">
                 <Phone size={24} />
                  <span className="font-bold text-lg">+91 90302 71023</span>
              </a>
              <div className="flex items-center gap-3">
                 <Calendar size={24} />
                 <span className="font-bold text-lg">Mon-Sat: 09:00 - 20:00</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
