import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import dynamic from "next/dynamic";

const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const VideoGallery = dynamic(() => import("@/components/sections/VideoGallery"));
const Gallery = dynamic(() => import("@/components/sections/Gallery"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const WhatsAppButton = dynamic(() => import("@/components/ui/WhatsAppButton"));


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />

      <About />
      <Services />
      <WhyChooseUs />
      <VideoGallery />
      <Gallery />
      <Testimonials />
      <Contact />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
