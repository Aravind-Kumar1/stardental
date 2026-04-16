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
      <div className="relative aspect-[16/8.5] overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-secondary mb-1.5 transition-colors leading-tight">{service.title}</h3>
        <p className="text-body-small mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="mt-auto pt-1.5 border-t border-border/40">
          <Link
            href={`/services/${service.slug}`}
            scroll={true}
            className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all"
          >
            Details
            <SearchCheck size={16} className="stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="section-padding">
      <div className="container-custom px-6 lg:px-12">
        <div className="mb-14 text-left">
            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">
               Global Standards
            </p>
             <h2 className="heading-section">
                Comprehensive Dental Care for <span className="gradient-text italic">Your Perfect Smile</span>
             </h2>
           <p className="text-body text-sm">
             From routine checkups to complex oral surgeries, we offer a full spectrum of dental services using the latest technology and gentle care techniques in Manikonda.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => renderCard(service))}
        </div>
      </div>
    </section>
  );
};

export default Services;
