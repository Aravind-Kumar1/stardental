import React from "react";

export interface Slide {
  id: number;
  badge: string;
  heading: React.ReactElement;
  sub: string;
  img: string;
  imgAlt: string;
  imgFit: "contain" | "cover";
  imgPos: string;
  isCustom?: boolean;
  cta1Text?: string;
  cta1Href?: string;
  cta2Text?: string;
  cta2Href?: string;
  hideCta1?: boolean;
  hideCta2?: boolean;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  icon?: string;
  details?: string[];
  longDescription?: string;
  detailHeading?: string;
  heroImageUrl?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  body: string[];
  takeaways: string[];
}
