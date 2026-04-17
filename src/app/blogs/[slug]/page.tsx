import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock3, ArrowLeft, CheckCircle2 } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/blogs";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="text-center max-w-xl">
            <h1 className="text-3xl font-bold text-secondary mb-4">Blog not found</h1>
            <Link href="/blogs" className="text-primary font-semibold hover:underline">
              Back to blogs
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <section className="pt-28 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-slate-50 to-white border-b border-border/40">
        <div className="container-custom px-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to blogs
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-bold mb-5">
                {post.category}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary tracking-tight leading-tight mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-muted-foreground mb-8">
                <span className="inline-flex items-center gap-2"><CalendarDays size={16} /> {post.date}</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={16} /> {post.readTime}</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-12 gap-12 lg:gap-16 px-6">
          <article className="lg:col-span-8">
            <div className="space-y-6 text-body text-[1.05rem]">
              {post.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="premium-card p-8 sticky top-28">
              <h2 className="text-2xl font-bold text-secondary mb-5">Key takeaways</h2>
              <ul className="space-y-4">
                {post.takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-secondary font-medium">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-border/40">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center w-full rounded-xl transition-all active:scale-[0.98] bg-primary text-white hover:bg-primary-dark shadow-premium px-6 py-4 text-base font-semibold"
                >
                  Book an appointment
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
