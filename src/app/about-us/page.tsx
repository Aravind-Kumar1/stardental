import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutFull from "@/components/sections/about/AboutFull";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero page="about" />
      <AboutFull />
      <CTA />
      <Footer />
    </main>
  );
}
