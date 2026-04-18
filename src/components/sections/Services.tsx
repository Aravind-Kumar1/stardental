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
      <div className="relative aspect-[16/9] sm:aspect-[16/11] overflow-hidden">
        <Image
          src={service.imageUrl}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 scale-[1.01] overflow-hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1 bg-gradient-to-r from-[#030A14] to-[#1A4996] text-white">
        <h3 className="text-lg font-bold text-white mb-1.5 transition-colors leading-tight">{service.title}</h3>
        <p className="text-white/80 text-[13px] mb-3 sm:mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="mt-auto pt-1.5 border-t border-white/10">
          <Link
            href={`/services/${service.slug}`}
            scroll={true}
            className="inline-flex items-center gap-2 text-white text-sm font-bold hover:gap-3 transition-all"
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
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-[#030A14] to-[#1A4996] text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] shadow-premium">
               Global Standards
            </span>
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
