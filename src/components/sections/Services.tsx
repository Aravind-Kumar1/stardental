import Link from "next/link";
import Image from "next/image";
import { SearchCheck } from "lucide-react";
import { servicesData } from "@/lib/services-data";

const Services = () => {
  const renderCard = (service: (typeof servicesData)[number]) => (
    <div
      key={service.title}
      className="premium-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-secondary mb-3 transition-colors">{service.title}</h3>
        <p className="text-body mb-8 line-clamp-3">
          {service.description}
        </p>

        <div className="mt-auto pt-6 border-t border-border/40">
          <Link
            href={`/services/${service.slug}`}
            scroll={true}
            className="inline-flex items-center gap-3 text-primary text-[1rem] font-bold hover:gap-4 transition-all"
          >
            View Details
            <SearchCheck size={20} className="stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="section-padding bg-slate-50/30">
      <div className="container-custom">
        <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">
               Global Standards
            </p>
             <h2 className="heading-section">
                Comprehensive Dental Care for <span className="gradient-text italic">Your Perfect Smile</span>
             </h2>
           <p className="text-body">
             From routine checkups to complex oral surgeries, we offer a full spectrum of dental services using the latest technology and gentle care techniques in Manikonda.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => renderCard(service))}
        </div>
      </div>
    </section>
  );
};

export default Services;
