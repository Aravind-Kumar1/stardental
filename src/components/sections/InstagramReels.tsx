"use client";

import { motion } from "framer-motion";

const reels = [
  { id: "DE13uCxzplp", title: "Dental Transformation 1" },
  { id: "DNnAMGczwPP", title: "Patient Care" },
  { id: "DVbB1syAMfy", title: "Modern Technology" },
  { id: "DVvs2PSFYKt", title: "Expert Procedures" },
  { id: "DWOcyM1Cd4n", title: "Smile Design" },
  { id: "DWWCdXZjGcc", title: "Luxury Clinic" },
  { id: "DWoF43DCTWE", title: "Final Results" },
];

const InstagramReels = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-4 block"
          >
            Social Media Feed
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-section mb-6"
          >
            See Our <span className="gradient-text">Latest Stories</span> & Updates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body"
          >
            Follow our journey on Instagram for daily dental tips, patient transformations, and behind-the-scenes glances at our modern facility.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative aspect-[9/18] w-full bg-secondary rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] hover:shadow-[0_48px_80px_-16px_rgba(14,165,233,0.25)] transition-all duration-700 border-[6px] border-white group"
            >
              {/* Cropped Iframe Container */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                  className="absolute top-[-75px] left-0 w-full h-[calc(100%+160px)] border-none"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              
              {/* Cinematic Overlays */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Premium Content Info Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Visual Case
                </div>
              </div>

              {/* Play Button Icon - Apple Style */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-xl flex items-center justify-center border border-white/25 text-white scale-0 group-hover:scale-100 transition-all duration-500 ease-out shadow-2xl">
                  <svg className="w-10 h-10 fill-current translate-x-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Inner Glossy Border */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/40 rounded-[2.5rem]" />
              
              {/* Video Label */}
              <div className="absolute bottom-8 inset-x-8 pointer-events-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Click to Play</div>
                <div className="text-white text-lg font-bold leading-tight line-clamp-2">{reel.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-1 bg-slate-50 rounded-full shadow-inner border border-slate-100 mb-8">
            <div className="px-6 py-2 text-sm text-muted-foreground font-medium italic">
              Experience more transformations on our social feed
            </div>
          </div>
          <br />
          <a
            href="https://www.instagram.com/starsmilesdentalcare/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-secondary text-white px-12 py-6 rounded-full font-black text-lg hover:bg-primary transition-all duration-500 shadow-2xl shadow-primary/20 group hover:scale-105"
          >
            <span>DISCOVER ON INSTAGRAM</span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramReels;
