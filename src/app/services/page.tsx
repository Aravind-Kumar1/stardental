import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero page="services" />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
