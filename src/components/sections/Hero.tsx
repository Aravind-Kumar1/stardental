"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";

/* ── Stat counter ── */
const StatCounter = ({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const animation = animate(count, value, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [count, value]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return <span>{displayValue}{suffix}</span>;
};

import { Slide } from "@/types";

/* ── Slide data ── */
const slides: Slide[] = [
  {
    id: 1,
    badge: "Trusted Since 2007",
    heading: (
      <>
        <span className="text-[#1A4996]">Advanced Dental Care</span><br />
        <span className="text-black">in Manikonda</span>
      </>
    ),
    sub: "Experience world-class dental treatments with cutting-edge technology and a compassionate touch. We prioritize your comfort and long-term oral health.",
    img: "/hero_one.png",
    imgAlt: "Star Smiles Dental Care Clinic",
    imgFit: "contain" as const,
    imgPos: "center bottom",
    cta1Text: undefined,
    cta2Text: undefined,
    hideCta1: undefined,
    hideCta2: undefined,
  },
  {
    id: 2,
    isCustom: true,
    badge: "",
    heading: <></>,
    sub: "",
    img: "",
    imgAlt: "",
    imgFit: "contain" as const,
    imgPos: "right top",
  },
  {
    id: 3,
    badge: "Orthodontics",
    heading: (
      <>
        <span className="text-[#1A4996]">Invisible Aligners & <br className="hidden sm:block" />Braces</span> <span className="text-black">in Manikonda</span>
      </>
    ),
    sub: "Clear, removable aligners and modern braces to straighten teeth comfortably—with aesthetics in mind.",
    img: "/hero_3.svg",
    imgAlt: "Dental implant and aligner treatment",
    imgFit: "contain" as const,
    imgPos: "right top",
  },
  {
    id: 4,
    badge: "Implantology",
    heading: (
      <>
        <span className="text-[#1A4996]">Dental Implants</span><br />
        <span className="text-black">in Manikonda</span>
      </>
    ),
    sub: "Permanent replacement for missing teeth that look, feel, and function like natural teeth.",
    img: "/hero_fourth.png",
    imgAlt: "Dental Implants in Manikonda",
    imgFit: "contain" as const,
    imgPos: "right top",
  },
];

const aboutSlides: Slide[] = [
  {
    id: 1,
    badge: "",
    heading: (
      <>
        <span className="text-black">Best Dental Clinic </span>
        <span className="text-[#1A4996]">in</span><br />
        <span className="text-[#1A4996]">Manikonda – Advanced &</span><br />
        <span className="text-[#1A4996]">Trusted Dental Care</span>
      </>
    ),
    sub: "We provide complete oral healthcare solutions with advanced technology and personalized care for every patient.",
    img: "/about_first.png",
    imgAlt: "Best Dental Clinic in Manikonda",
    imgFit: "contain" as const,
    imgPos: "right top",
  },
  {
    id: 2,
    isCustom: true,
    badge: "",
    heading: <></>,
    sub: "",
    img: "",
    imgAlt: "",
    imgFit: "contain" as const,
    imgPos: "right top",
  }
];

const servicesPlaceholderSlides: Slide[] = [
  ...aboutSlides.map(s => ({
    ...s,
    heading: s.isCustom ? s.heading : (
      <>
        <span className="text-[#1A4996]">Complete Dental</span><br />
        <span className="text-[#1A4996]">Services</span> <span className="text-black">in Manikonda,</span><br />
        <span className="text-black">Hyderabad</span>
      </>
    ),
    sub: s.isCustom ? s.sub : "We offer a wide range of dental treatments designed to improve your oral health, restore functionality, and enhance your smile. Our services include preventive, restorative, cosmetic, and emergency dental care—routine and advanced procedures under one roof.",
    img: "/ser_page.png",
  }))
];

const blogPlaceholderSlides: Slide[] = [
  {
    id: 1,
    badge: "",
    heading: (
      <>
        <span className="text-[#1A4996]">Helpful Dental Articles</span><br />
        <span className="text-[#1A4996]">for</span> <span className="text-black">Patients & Families</span>
      </>
    ),
    sub: "Explore practical guidance on preventive dentistry, smile care, emergency response, and treatment choices designed to keep your oral health simple and clear.",
    img: "/blog.png",
    imgAlt: "Helpful Dental Articles",
    imgFit: "contain" as const,
    imgPos: "right top",
    cta1Text: "Explore",
    hideCta2: true,
  }
];

const contactPlaceholderSlides: Slide[] = [
  {
    id: 1,
    badge: "",
    heading: (
      <>
        <span className="text-black">Get in Touch</span><br />
        <span className="text-[#1A4996]">With Our Experts</span>
      </>
    ),
    sub: "Have questions? We're here to help you achieve your perfect smile. Visit us in Manikonda or contact us directly.",
    img: "/contact.png",
    imgAlt: "Get in Touch With Our Experts",
    imgFit: "contain" as const,
    imgPos: "right top",
    hideCta1: true,
    hideCta2: true,
  }
];

/* ── Hero Component ── */
const Hero = ({ page = "home", serviceContext }: { page?: "home" | "about" | "services" | "single_service" | "blog" | "contact"; serviceContext?: any }) => {
  let currentSlides: Slide[] = slides;
  if (page === "about") currentSlides = aboutSlides;
  if (page === "services") currentSlides = servicesPlaceholderSlides;
  if (page === "blog") currentSlides = blogPlaceholderSlides;
  if (page === "contact") currentSlides = contactPlaceholderSlides;
  if (page === "single_service") {
    if (serviceContext?.slug === "invisible-aligners-braces") {
      currentSlides = [{ ...slides[2], cta2Text: "Consult Now" }];
    } else if (serviceContext?.slug === "dental-implants") {
      currentSlides = [{ ...slides[3], cta2Text: "Consult Now" }];
    } else {
      currentSlides = serviceContext ? [
        {
          id: 1,
          badge: "",
          heading: (() => {
            switch(serviceContext.slug) {
              case "crowns-bridges": 
                return <><span className="text-[#1A4996]">Dental Crowns & Bridges</span><br /><span className="text-black">in Manikonda</span></>;
              case "pediatric-dentistry": 
                return <><span className="text-[#1A4996]">Kids Dental Clinic</span><br /><span className="text-black">in Manikonda</span></>;
              case "cosmetic-dentistry": 
                return <><span className="text-[#1A4996]">Cosmetic Dentistry</span><br /><span className="text-black">in Hyderabad</span></>;
              case "teeth-cleaning-whitening": 
                return <><span className="text-[#1A4996]">Teeth Cleaning & Whitening</span><br /><span className="text-black">in Hyderabad</span></>;
              case "emergency-dental-care": 
                return <><span className="text-[#1A4996]">Emergency Dentist</span><br /><span className="text-[#1A4996]">Near You</span> <span className="text-black">in Manikonda</span></>;
              default: 
                return <span className="text-[#1A4996]">{serviceContext.detailHeading}</span>;
            }
          })(),
          sub: serviceContext.description,
          img: serviceContext.heroImageUrl || "/ser_page.png",
          imgAlt: serviceContext.title,
          imgFit: "contain" as const,
          imgPos: "right top",
          cta2Text: "Consult Now",
        }
      ] : servicesPlaceholderSlides;
    }
  }

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % currentSlides.length);
  }, [currentSlides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? currentSlides.length - 1 : prev - 1));
  }, [currentSlides.length]);

  /* Faster dynamic auto-scroll: Slide 1 (5s), others (3s) */
  useEffect(() => {
    if (currentSlides.length <= 1) return;
    
    // Snappier intervals
    const duration = current === 0 ? 5000 : 3000;
    
    const timer = setTimeout(next, duration);
    return () => clearTimeout(timer);
  }, [next, current, currentSlides.length]);

  const slide = currentSlides[current];

  const textVariants = {
    enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, y: 0 },
    exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -40 : 40 }),
  };

  const imgVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <div className="flex flex-col">
      {/* ════════════════════════════════════════
          HERO CAROUSEL — full viewport height
      ════════════════════════════════════════ */}
      <section
        className={cn(
          "relative w-full overflow-hidden",
          ["blog", "contact", "single_service"].includes(page as string) ? "h-auto min-h-0 sm:min-h-[420px] max-sm:pb-0" : "h-auto sm:h-[80vh] sm:min-h-[540px] max-sm:pb-0"
        )}
        style={{ 
          background: "linear-gradient(180deg, #EEF5FF 0%, #FEFEFF 51%, #EEF5FF 95%)"
        }}
      >
        {/* ── RIGHT HALF — image ── */}
        <AnimatePresence initial={false} custom={direction}>
          {!slide.isCustom && (
            <motion.div
              key={`img-${slide.id}`}
            custom={direction}
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute right-0 bottom-0 sm:top-0 w-full sm:w-1/2 h-[45%] sm:h-full hidden sm:flex items-center justify-center sm:justify-end z-0"
          >
            <div className="relative w-full h-full">
              {slide.imgFit === "contain" ? (
                /* Slide 1 — increased size and aligned to bleed into top right */
                <div className="absolute inset-0 flex items-end sm:items-center justify-center sm:justify-end pb-4 sm:pb-0 pt-0 sm:pt-20 lg:pt-24">
                  <div className="relative w-[90%] h-[90%] sm:w-[110%] sm:h-[110%] sm:translate-x-4 lg:translate-x-8">
                    <Image
                      src={slide.img}
                      alt={slide.imgAlt}
                      fill
                      sizes="(max-width: 640px) 50vw, 50vw"
                      className="object-contain scale-100 sm:scale-105 origin-center sm:origin-top-right"
                      style={{ objectPosition: "right center" }}
                      priority
                    />
                  </div>
                </div>
              ) : (
                <Image
                  src={slide.img}
                  alt={slide.imgAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: slide.imgPos }}
                  priority
                />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── LEFT HALF — text content ── */}
        <div className="relative h-auto sm:h-full flex items-start sm:items-center z-10 pointer-events-none">
          <div className="container-custom w-full pointer-events-auto px-6 sm:px-0">
            <div className={cn(
              "w-full sm:w-[55%] lg:w-[65%] flex flex-col items-center sm:items-start text-center sm:text-left pr-2 lg:pr-0 z-10 pt-24 sm:pt-0",
              ["blog", "contact", "single_service"].includes(page as string) ? "pt-20 md:pt-20 lg:pt-24" : "translate-y-0 sm:translate-y-6 lg:translate-y-12"
            )}>
              <AnimatePresence mode="wait" custom={direction}>
                {!slide.isCustom && (
                  <motion.div
                  key={`content-${slide.id}`}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col items-center sm:items-start w-full pb-1 sm:pb-0"
                >
                  {/* Badge */}
                  {slide.badge && (
                    <span className="inline-block mb-5 px-4 py-1.5 rounded-full bg-[#1a3a6b]/10 text-[#1a3a6b] text-sm font-semibold tracking-wide">
                      ✦ {slide.badge}
                    </span>
                  )}

                  {/* Heading — 2 lines */}
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a3a6b] leading-[1.2] mb-2 sm:mb-5 lg:whitespace-nowrap text-center sm:text-left">
                    {slide.heading}
                  </h1>

                  {/* 
                  MOBILE IMAGE - Stacks between Heading and Buttons on mobile 
                  */}
                  {!slide.isCustom && (
                    <div className="sm:hidden w-[90%] mx-auto mt-6 mb-2 flex justify-center overflow-visible">
                      <div className="relative w-full aspect-[4/3] max-h-[220px]">
                        <Image
                          src={slide.img}
                          alt={slide.imgAlt}
                          fill
                          className="object-contain object-center scale-[1.15]"
                          priority
                        />
                      </div>
                    </div>
                  )}

                  {/* Sub - Hidden on mobile */}
                  <p className="hidden sm:block text-[11px] sm:text-lg text-gray-600 leading-snug sm:leading-relaxed mb-4 sm:mb-8 max-w-xl">
                    {slide.sub}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pt-2 sm:pt-2">
                    {!(slide as any).hideCta1 && (
                      <Link
                        href={(slide as any).cta1Href || "/book-appointment"}
                        className={cn(
                          "inline-flex items-center justify-center transition-all duration-300 active:scale-[0.98] whitespace-nowrap",
                          "bg-gradient-to-r from-[#030A14] to-[#1A4996] text-white hover:brightness-110 shadow-premium hover:shadow-xl",
                          "rounded-none rounded-tr-[16px] sm:rounded-tr-[24px]",
                          "px-2 sm:px-8 py-2.5 sm:py-3.5 text-[13px] sm:text-[15px] font-semibold w-[200px] sm:w-[220px] mx-auto sm:mx-0 sm:flex-1 tracking-tight sm:tracking-wide"
                        )}
                      >
                        {(slide as any).cta1Text || "Book appointment"}
                      </Link>
                    )}
                    {!(slide as any).hideCta2 && (
                      <Link
                        href={(slide as any).cta2Href || "/services"}
                        className={cn(
                          "inline-flex items-center justify-center transition-all duration-300 active:scale-[0.98] whitespace-nowrap",
                          "bg-gradient-to-r from-[#030A14] to-[#1A4996] text-white hover:brightness-110 shadow-premium hover:shadow-xl",
                          "rounded-none rounded-tr-[16px] sm:rounded-tr-[24px]",
                          "px-2 sm:px-8 py-2.5 sm:py-3.5 text-[13px] sm:text-[15px] font-semibold w-[200px] sm:w-[220px] mx-auto sm:mx-0 sm:flex-1 tracking-tight sm:tracking-wide"
                        )}
                      >
                        {(slide as any).cta2Text || "Explore services"}
                      </Link>
                    )}
                  </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>





        {/* ── CUSTOM SLIDE OVERLAY (Doctor) ── */}
        <AnimatePresence initial={false} custom={direction}>
          {slide.isCustom && (
            <motion.div
              key={`custom-${slide.id}`}
              custom={direction}
              variants={imgVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={cn(
                "relative sm:absolute inset-0 w-full z-20 bg-[#1A4996] flex items-center justify-center",
                "h-auto sm:h-full max-sm:pb-0"
              )}
            >
              <div className="container-custom mx-auto px-6 lg:px-12 w-full h-full">
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-12 items-center h-full pt-24 lg:pt-0">
                  
                  {/* Center Image - Order 1 on mobile */}
                  <div className="order-1 lg:order-2 relative h-[28vh] lg:h-[90vh] w-full flex items-end justify-center z-20 lg:-translate-y-8">
                    <Image
                      src="/hero_sec.png"
                      alt="Prof Dr. Manjunatha Reddy.C"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain object-bottom drop-shadow-2xl scale-125 lg:scale-125 origin-bottom"
                      priority
                    />
                  </div>

                  {/* Left Content - Order 2 on mobile */}
                  <div className="order-2 lg:order-1 z-10 flex flex-col justify-center text-center lg:text-left pb-6 lg:pb-0">
                    <h2 className="text-[24px] md:text-[54px] lg:whitespace-nowrap leading-tight font-extrabold text-[#F5F5F5] mb-4">
                      <span className="mr-2 md:mr-4">About</span>
                      DOCTOR
                    </h2>
                    <div className="text-[14px] leading-relaxed relative z-20 w-full">
                      <p className="text-[#F5F5F5] font-normal text-[14px] md:text-base leading-[1.6] max-w-lg mx-auto lg:mx-0">
                        <span className="block uppercase font-bold text-[#90B4E7] text-base sm:text-lg lg:text-xl tracking-wide">PROF DR. MANJUNATHA REDDY.C</span>
                        Specialized in Orthodontics & Comprehensive Dental Care With <span className="font-bold text-[#90B4E7]">18+</span> years of clinical & academic experience.
                      </p>
                    </div>
                  </div>

                  {/* Right Content - Hidden on mobile */}
                  <div className="hidden lg:flex order-3 lg:order-3 z-10 space-y-6 flex-col justify-center">
                    {[
                      { num: "10,000+", title: "Smiles Transformed", desc: "With Proven Results" },
                      { num: "18+", title: "Years of Clinical Experience", desc: "You Can Trust" },
                      { num: "98%", title: "Patient Satisfaction", desc: "Through Gentle, Personalised Care" },
                      { num: "ADVANCED & PAIN-FREE DENTISTRY", title: "", desc: "Using Modern Technology" }
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="shrink-0 mt-1">
                          <Image src="/tick.png" width={24} height={24} alt="tick" className="object-contain" />
                        </div>
                        <div>
                          <h3 className="text-lg leading-snug">
                            {point.num && <span className="font-bold text-[#F5F5F5]">{point.num} </span>}
                            {point.title && <span className="font-normal text-white/80">{point.title}</span>}
                          </h3>
                          <p className="text-white/70 font-normal text-[15px] mt-0.5">{point.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ════════════════════════════════════════
          STATS BAR — below hero
      ════════════════════════════════════════ */}
      {page === "home" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full border-t border-[#1a3a6b]/10 bg-white shadow-sm"
        >
          <div className="container-custom py-4 sm:py-8">
            <div className="grid grid-cols-4 sm:grid-cols-4 divide-x divide-gray-100">

              <div className="flex flex-col items-center justify-center px-1 py-1">
                <span className="text-xl sm:text-4xl lg:text-5xl font-black text-[#1A4996] tracking-tight">
                  <StatCounter value={18} suffix="+" />
                </span>
                <span className="text-[8px] sm:text-sm text-gray-500 font-bold tracking-widest uppercase mt-1 text-center leading-tight">Years Exp</span>
              </div>

              <div className="flex flex-col items-center justify-center px-1 py-1">
                <span className="text-xl sm:text-4xl lg:text-5xl font-black text-[#1A4996] tracking-tight">
                  <StatCounter value={10} suffix="k+" />
                </span>
                <span className="text-[8px] sm:text-sm text-gray-500 font-bold tracking-widest uppercase mt-1 text-center leading-tight">Happy Pts</span>
              </div>

              <div className="flex flex-col items-center justify-center px-1 py-1">
                <div className="flex items-baseline justify-center">
                  <span className="text-xl sm:text-4xl lg:text-5xl font-black text-[#1A4996] tracking-tight">
                    <StatCounter value={4.9} decimals={1} />
                  </span>
                  <span className="text-xs sm:text-2xl font-bold text-gray-300 ml-0.5">/5</span>
                </div>
                <span className="text-[8px] sm:text-sm text-gray-500 font-bold tracking-widest uppercase mt-1 text-center leading-tight">Rating</span>
              </div>

              <div className="flex flex-col items-center justify-center px-1 py-1">
                <span className="text-xl sm:text-4xl lg:text-5xl font-black text-[#1A4996] tracking-tight">
                  <StatCounter value={98} suffix="%" />
                </span>
                <span className="text-[8px] sm:text-sm text-gray-500 font-bold tracking-widest uppercase mt-1 text-center leading-tight">Success</span>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
