/** Serializable service content (no React / Lucide). Import this from client components to avoid bloating the bundle. */

export type ServiceData = {
  title: string;
  slug: string;
  detailHeading: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  heroImageUrl: string;
  color: string;
  iconColor: string;
  benefits: string[];
  benefitsHeading?: string;
};

export const servicesData: ServiceData[] = [
  {
    title: "Invisible Aligners & Braces",
    slug: "invisible-aligners-braces",
    detailHeading: "Invisible Aligners & Braces in Manikonda",
    description:
      "Clear, removable aligners and modern braces to straighten teeth comfortably—with aesthetics in mind.",
    longDescription:
      "Invisible aligners are a modern and discreet solution for straightening teeth. These clear, removable trays gradually move your teeth into the correct position, making them ideal for adults and teenagers. Unlike traditional braces, aligners are comfortable, removable, and nearly invisible. However, braces may still be recommended for complex cases. Aligners are custom-made and gradually shift teeth over time.",
    imageUrl: "/aligners.png",
    heroImageUrl: "/hero_3.svg",
    color: "bg-sky-100/50",
    iconColor: "text-sky-600",
    benefits: [
      "Invisible & aesthetic",
      "Removable for eating",
      "Comfortable treatment",
      "Improved oral hygiene",
    ],
  },
  {
    title: "Dental Implants",
    slug: "dental-implants",
    detailHeading: "Dental Implants in Manikonda",
    description:
      "Permanent replacement for missing teeth that look, feel, and function like natural teeth.",
    longDescription:
      "Dental implants are a permanent solution for missing teeth. They involve placing a titanium post into the jawbone, which acts as an artificial root to support a crown. Implants look, feel, and function like natural teeth and provide long-lasting results—replacing missing teeth with durable, natural-looking solutions.",
    imageUrl: "/dental_servi.png",
    heroImageUrl: "/hero_fourth.png",
    color: "bg-cyan-100/50",
    iconColor: "text-cyan-600",
    benefits: [
      "Permanent solution",
      "Natural appearance",
      "Strong and durable",
      "Improves chewing & speech",
    ],
  },
  {
    title: "Crowns & Bridges",
    slug: "crowns-bridges",
    detailHeading: "Dental Crowns & Bridges in Manikonda",
    description:
      "Restore damaged teeth and replace missing teeth for better function and a natural-looking smile.",
    longDescription:
      "Crowns and bridges are restorative treatments used to repair damaged teeth and replace missing teeth. Crowns restore the shape, strength, and appearance of damaged teeth. Bridges replace missing teeth by anchoring to adjacent teeth. These treatments improve both function and aesthetics of your smile—crowns protect damaged teeth while bridges replace missing ones.",
    imageUrl: "/crowns_servi.png",
    heroImageUrl: "/ser_crowns.png",
    color: "bg-blue-100/50",
    iconColor: "text-blue-600",
    benefits: [
      "Crowns restore shape, strength, and appearance",
      "Bridges replace missing teeth via adjacent support",
      "Improved chewing and comfort",
      "Natural-looking results",
    ],
  },
  {
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    detailHeading: "Kids Dental Clinic in Manikonda",
    description:
      "Gentle, preventive care for children—from infancy through adolescence—in a friendly environment.",
    longDescription:
      "Pediatric dentistry focuses on the oral health of children from infancy to adolescence. We provide preventive care, early diagnosis, and treatments tailored to children. Our clinic ensures a friendly and stress-free environment for kids. Pediatric care includes prevention, early treatment, and education.",
    imageUrl: "/pediastic_servi.png",
    heroImageUrl: "/ser_kids.png",
    color: "bg-indigo-100/50",
    iconColor: "text-indigo-600",
    benefitsHeading: "Services include",
    benefits: [
      "Fluoride treatment",
      "Dental sealants",
      "Cavity treatment",
      "Habit correction",
    ],
  },
  {
    title: "Emergency Dental Care",
    slug: "emergency-dental-care",
    detailHeading: "Emergency Dentist Near You in Manikonda",
    description:
      "Urgent care when you need it—to relieve pain, protect your teeth, and prevent complications.",
    longDescription:
      "Dental emergencies require immediate attention to relieve pain and prevent further complications. Emergency care provides immediate relief and helps prevent further damage. Contact us right away if you are in pain or have had trauma to the teeth or mouth.",
    imageUrl: "/emer_servi.png",
    heroImageUrl: "/ser_emer.png",
    color: "bg-rose-100/50",
    iconColor: "text-rose-600",
    benefitsHeading: "Common emergencies include",
    benefits: [
      "Severe tooth pain",
      "Broken or chipped teeth",
      "Knocked-out teeth",
      "Swelling or infection",
    ],
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    detailHeading: "Cosmetic Dentistry in Hyderabad",
    description:
      "Enhance the appearance of your smile with whitening, veneers, smile design, and more.",
    longDescription:
      "Cosmetic dentistry focuses on improving the appearance of your smile through advanced treatments. Whether you want a brighter smile or a full smile makeover, we plan care around your goals and oral health. Cosmetic treatments enhance smile aesthetics and confidence.",
    imageUrl: "/cosm_servi.png",
    heroImageUrl: "/ser_cosme.png",
    color: "bg-violet-100/50",
    iconColor: "text-violet-600",
    benefitsHeading: "Common procedures include",
    benefits: [
      "Teeth whitening",
      "Veneers",
      "Smile designing",
      "Gum contouring",
    ],
  },
  {
    title: "Teeth Cleaning & Whitening",
    slug: "teeth-cleaning-whitening",
    detailHeading: "Teeth Cleaning & Whitening in Manikonda",
    description:
      "Professional cleaning for healthier gums and safe whitening for a brighter, confident smile.",
    longDescription:
      "Routine professional cleaning removes plaque and tartar, helps prevent gum disease, and keeps your mouth healthy. Professional teeth whitening lifts many surface stains safely under dental supervision. Together, cleaning and whitening support both oral health and appearance—ideal as part of your regular care or before special occasions.",
    imageUrl: "/clean_servi.png",
    heroImageUrl: "/ser_clean.png",
    color: "bg-slate-100/50",
    iconColor: "text-slate-600",
    benefits: [
      "Thorough scaling & polishing",
      "Gum health support",
      "Safe in-office or supervised whitening options",
      "Fresher breath & brighter smile",
    ],
  },
];
