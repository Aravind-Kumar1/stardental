import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Blogs from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";

export const metadata = {
  title: "Blogs | Star Smiles Dental Care",
  description:
    "Read dental tips, preventive care insights, and treatment guidance from Star Smiles Dental Care.",
};

export default function BlogsPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero page="blog" />
      <Blogs showIntro={false} />
      <Footer />
    </main>
  );
}
