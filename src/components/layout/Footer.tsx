import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/services";

const SOCIAL_LINKS = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/StarSmilesDentalCare/",
    label: "Facebook",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/starsmilesdentalcare/?next=%2F",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-secondary text-white overflow-hidden border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 px-4">
          {/* Brand Info */}
          <div className="flex flex-col gap-8 max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-40 h-10">
                <Image
                  src="/images/Logo Blue.png"
                  alt="Star Smiles Dental Care"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed italic">
              Redefining dental excellence with a fusion of advanced technology and personalized aesthetic vision.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href === "#" ? undefined : "_blank"}
                  rel={href === "#" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8">
            <div className="font-bold text-xl mb-4">Quick Navigation</div>
            <div className="flex flex-col gap-6 text-slate-400 font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Blogs", href: "/blogs" },
                { name: "Cases", href: "/cases" },
                { name: "FAQ", href: "/faq" },
                { name: "Book Appointment", href: "/book-appointment" },
                { name: "Contact Us", href: "/#contact" }
              ].map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                   {link.name}
                   <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-8">
            <div className="font-bold text-xl mb-4">Our Services</div>
            <div className="flex flex-col gap-4 text-slate-400 font-medium">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={`/services/${service.slug}`}
                  className="hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  {service.title}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="font-bold text-xl mb-4">Visit Our Clinic</div>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110 mt-0.5">
                    <MapPin size={22} />
                 </div>
                <div className="min-w-0">
                  <div className="font-bold mb-1 text-base">Clinic Address</div>
                  <div className="text-slate-400 text-sm leading-6 max-w-[18rem]">
                   Alkapur Township, Huda, Mahalneknapur, Manikonda, Hyderabad, Telangana - 500089
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110 mt-0.5">
                    <Phone size={22} />
                 </div>
                <div className="min-w-0">
                  <div className="font-bold mb-1 text-base">Direct Help</div>
                  <a href="tel:+919030271023" className="text-slate-400 hover:text-primary transition-colors block text-sm leading-6">
                      +91-9030271023
                    </a>
                  <a href="tel:+917416860888" className="text-slate-400 hover:text-primary transition-colors block text-sm leading-6">
                      +91-7416860888
                    </a>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-primary shrink-0 transition-transform hover:scale-110 mt-0.5">
                    <Mail size={22} />
                 </div>
                <div className="min-w-0">
                  <div className="font-bold mb-1 text-base">Official Support</div>
                  <a href="mailto:starsmilesdentalcare@gmail.com" className="text-slate-400 hover:text-primary transition-colors block text-sm leading-6 whitespace-nowrap">
                      starsmilesdentalcare@gmail.com
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-medium">
          <div>© {new Date().getFullYear()} Dental Clinic Manikonda. All rights reserved.</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
