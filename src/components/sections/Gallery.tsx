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

  if (!mounted) return <section id="gallery" className="py-20" />;

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="block font-bold text-xl text-secondary mb-3 uppercase tracking-[0.2em]">Transformations</span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 m-0 mb-6 leading-[1.1]">Smile Transformation Gallery</h2>
          <p className="text-slate-500 text-xl font-medium leading-relaxed">Experience the power of a healthy smile through our clinical results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((item, index) => (
            <div key={item.title + index} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-4 transition-all duration-300 hover:shadow-md">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image 
                    src={item.before} 
                    alt={`${item.title} Before`} 
                    fill
                    className="object-cover" 
                  />
                  <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Before</span>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image 
                    src={item.after} 
                    alt={`${item.title} After`} 
                    fill
                    className="object-cover" 
                  />
                  <span className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase">After</span>
                </div>
              </div>
              <div className="px-2">
                <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-2">{item.tag}</span>
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
