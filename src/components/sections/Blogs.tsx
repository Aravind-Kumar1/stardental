import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Clock3, Newspaper } from "lucide-react";
import { blogPosts } from "@/lib/blogs";

type BlogsProps = {
  limit?: number;
  showIntro?: boolean;
};

const Blogs = ({ limit, showIntro = true }: BlogsProps) => {
  const posts = typeof limit === "number" ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section id="blogs" className="section-padding bg-background">
      <div className="container-custom">
        {showIntro && (
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">
              <Newspaper size={16} />
              Latest Blogs
            </div>
            <h2 className="heading-section">
              Dental insights for a healthier, brighter smile
            </h2>
            <p className="text-body max-w-2xl">
              Read practical tips from our clinic on preventive care, cosmetic treatments,
              emergency guidance, and family dentistry.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="premium-card overflow-hidden group flex flex-col h-full">
              <Link href={`/blogs/${post.slug}`} className="relative aspect-[16/10] overflow-hidden block">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-secondary shadow-lg">
                  {post.category}
                </div>
              </Link>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1.5"><CalendarDays size={14} /> {post.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock3 size={14} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-body mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-5 border-t border-border/40">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Read more
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
