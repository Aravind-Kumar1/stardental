"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const transformations = [
  {
    title: "Smile Restoration Case 1",
    before: "/images/case1.png",
    after: "/images/case1.png",
    tag: "Cosmetic Dentistry"
  },
  {
    title: "Dental Correction Case 2",
    before: "/images/case2.png",
    after: "/images/case2.png",
    tag: "Restorative"
  },
  {
    title: "Advanced Care Case 3",
    before: "/images/case1.png",
    after: "/images/case2.png",
    tag: "Oral Surgery"
  },
  {
    title: "Teeth Alignment Case 4",
    before: "/images/case2.png",
    after: "/images/case1.png",
    tag: "Orthodontics"
  }
];

export default function Gallery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section id="gallery" className="section-padding" />;

  // Duplicate items for seamless infinite scroll
  const scrollItems = [...transformations, ...transformations, ...transformations];

  return (
    <section id="gallery" className="section-padding overflow-hidden px-0">
      <div className="container-custom px-6 lg:px-12 mb-10">
        <div className="text-left max-w-4xl">
          <span className="block font-bold text-xl text-secondary mb-3 uppercase tracking-[0.2em]">Transformations</span>
          <h2 className="heading-section">Smile Transformation Gallery</h2>
          <p className="text-body-large text-slate-500 font-medium">Experience the power of a healthy smile through our clinical results.</p>
        </div>
      </div>

      <div className="relative flex overflow-hidden w-full">
        <div className="flex gap-10 animate-infinite-scroll py-6 hover-pause">
          {scrollItems.map((item, index) => (
            <div 
              key={`${item.title}-${index}`} 
              className="min-w-[340px] sm:min-w-[550px] lg:min-w-[700px] bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 p-3 transition-all duration-300 hover:shadow-xl shrink-0"
            >
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image 
                    src={item.before} 
                    alt={`${item.title} Before`} 
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                    className="object-cover" 
                  />
                  <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Before</span>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image 
                    src={item.after} 
                    alt={`${item.title} After`} 
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                    className="object-cover" 
                  />
                  <span className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase">After</span>
                </div>
              </div>
              <div className="px-2 text-center sm:text-left">
                <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-2">{item.tag}</span>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
