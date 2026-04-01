import { 
  Smile, 
  Crown, 
  Droplet, 
  ShieldCheck, 
  Activity, 
  Sparkles
} from "lucide-react";

export const services = [
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description: "Transform your smile with veneers, bonding, and advanced aesthetic procedures designed for perfection.",
    longDescription: "Our cosmetic dentistry services go beyond fixing teeth; we craft beautiful, confident smiles. Using the latest in porcelain veneers, composite bonding, and gum contouring, we create results that are both stunning and natural-looking. Each treatment plan is customized to your facial features and aesthetic goals.",
    icon: Sparkles,
    color: "bg-blue-100/50",
    iconColor: "text-blue-500",
    benefits: ["Custom-designed porcelain veneers", "Minimally invasive composite bonding", "Gum contouring for a balanced smile", "Digital smile preview technology"]
  },
  {
    title: "Dental Implants",
    slug: "dental-implants",
    description: "Permanent, natural-looking tooth replacements that restore both function and your confidence.",
    longDescription: "Dental implants are the gold standard for tooth replacement. We use premium biocompatible materials and advanced 3D imaging to ensure precise placement and long-lasting results. Our implants feel, look, and function exactly like your natural teeth.",
    icon: ShieldCheck,
    color: "bg-cyan-100/50",
    iconColor: "text-cyan-500",
    benefits: ["High-grade titanium or zirconia implants", "Computer-guided implant surgery", "Natural-looking crown restorations", "Permanent solution for missing teeth"]
  },
  {
    title: "Orthodontics",
    slug: "orthodontics",
    description: "Straighten your teeth with modern solutions, including clear aligners and discreet braces.",
    longDescription: "Achieve the straight smile you've always wanted with our advanced orthodontic treatments. From nearly invisible clear aligners to efficient traditional braces, we offer solutions for children, teens, and adults that prioritize comfort and aesthetics.",
    icon: Activity,
    color: "bg-sky-100/50",
    iconColor: "text-sky-500",
    benefits: ["Clear aligner therapy (Invisalign)", "Discreet ceramic braces", "Short-term orthodontic options", "Comprehensive bite correction"]
  },
  {
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    description: "Professional Grade whitening that lifts stains and brightens your smile safely in just one visit.",
    longDescription: "Our professional teeth whitening treatments provide results that store-bought kits simply cannot match. Using safe, high-concentration gels and advanced activation lights, we can brighten your smile by several shades in a single comfortable appointment.",
    icon: Droplet,
    color: "bg-indigo-100/50",
    iconColor: "text-indigo-500",
    benefits: ["In-office power whitening", "Customized take-home whitening trays", "Low-sensitivity formula", "Instant, dramatic results"]
  },
  {
    title: "Full Smile Design",
    slug: "full-smile-design",
    description: "A comprehensive approach to oral aesthetics tailored to your unique facial features.",
    longDescription: "Full Smile Design is a holistic approach to creating your ideal smile. We analyze your facial symmetry, lip line, and skin tone to design a smile that looks completely natural and enhances your overall appearance. This often involves a combination of several cosmetic and restorative treatments.",
    icon: Smile,
    color: "bg-violet-100/50",
    iconColor: "text-violet-500",
    benefits: ["Comprehensive aesthetic analysis", "Multidisciplinary treatment planning", "Functional and aesthetic harmony", "Complete smile transformation"]
  },
  {
    title: "Restorative Care",
    slug: "restorative-care",
    description: "Crowns, bridges, and fillings that restore the health and integrity of your natural teeth.",
    longDescription: "We specialize in high-quality restorations that look and feel like natural tooth structure. Whether you need a simple filling or a complex bridge, we use the finest materials to restore strength, function, and aesthetics to your smile while preserving as much natural tooth as possible.",
    icon: Crown,
    color: "bg-slate-100/50",
    iconColor: "text-slate-500",
    benefits: ["Metal-free porcelain crowns", "Durable dental bridges", "Tooth-colored composite fillings", "Bio-mimetic conservative dentistry"]
  }
];
