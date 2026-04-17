import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";



export default function ServicesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
