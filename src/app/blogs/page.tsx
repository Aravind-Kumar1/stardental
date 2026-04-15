import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Blogs from "@/components/sections/Blogs";

export const metadata = {
  title: "Blogs | Star Smiles Dental Care",
  description:
    "Read dental tips, preventive care insights, and treatment guidance from Star Smiles Dental Care.",
};

export default function BlogsPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom px-6 text-center">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Blogs</p>
          <h1 className="text-secondary text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight max-w-4xl mx-auto">
            Helpful dental articles for patients and families
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore practical guidance on preventive dentistry, smile care, emergency response,
            and treatment choices designed to keep your oral health simple and clear.
          </p>
        </div>
      </section>
      <Blogs showIntro={false} />
      <Footer />
    </main>
  );
}
