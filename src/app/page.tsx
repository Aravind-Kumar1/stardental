import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Cases />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
