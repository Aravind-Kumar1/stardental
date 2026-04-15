import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

const CONTACT = {
  clinic: "Star Smiles Dental Care",
  address:
    "Alkapur Township, Huda, Mahalneknapur, Manikonda, Hyderabad, Telangana - 500089",
  phones: ["+91-9030271023", "+91-7416860888"],
  email: "starsmilesdentalcare@gmail.com",
};

type AppointmentPageProps = {
  searchParams?: Promise<{ service?: string }>;
};

export default async function BookAppointmentPage({ searchParams }: AppointmentPageProps) {
  const params = (await searchParams) ?? {};
  const selectedService = params.service ?? "";

  return (
    <main className="relative min-h-screen bg-slate-50/40">
      <Navbar />

      <section className="pt-28 pb-16 lg:pt-32 lg:pb-20 px-6 lg:px-12">
        <div className="container-custom">
          <div className="mb-10">
            <Link
              href="/"
              className="text-sm font-semibold text-primary hover:underline"
            >
              Back to Home
            </Link>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight">
              Book an Appointment
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Fill in the form below and our team will contact you to confirm your slot.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7 premium-card p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                <Calendar size={22} className="text-primary" />
                Appointment Form
              </h2>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-secondary outline-none ring-0 focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-secondary outline-none ring-0 focus:border-primary"
                    placeholder="Enter your phone number"
                  />
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Email</span>
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-secondary outline-none ring-0 focus:border-primary"
                    placeholder="Enter your email"
                  />
                </label>

                <label className="sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Preferred Date</span>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-secondary outline-none ring-0 focus:border-primary"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Service</span>
                  <input
                    type="text"
                    name="service"
                    defaultValue={selectedService}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-secondary outline-none ring-0 focus:border-primary"
                    placeholder="Treatment you are looking for"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-secondary outline-none ring-0 focus:border-primary"
                    placeholder="Tell us your concern"
                  />
                </label>

                <div className="sm:col-span-2 pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl transition-all active:scale-[0.98] bg-primary text-white hover:bg-primary-dark shadow-premium px-8 py-3.5 text-base font-semibold"
                  >
                    Submit Appointment Request
                  </button>
                </div>
              </form>
            </div>

            <aside className="lg:col-span-5 premium-card p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-secondary mb-6">Contact Us</h2>
              <h3 className="text-lg font-bold text-secondary mb-2">{CONTACT.clinic}</h3>

              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                  <p>{CONTACT.address}</p>
                </div>

                <div>
                  <p className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <Phone size={18} className="text-primary" />
                    Phone
                  </p>
                  <div className="space-y-2 pl-7">
                    <a href="tel:+919030271023" className="block hover:text-primary transition-colors">
                      +91-9030271023
                    </a>
                    <a href="tel:+917416860888" className="block hover:text-primary transition-colors">
                      +91-7416860888
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <Mail size={18} className="text-primary" />
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="pl-7 block hover:text-primary transition-colors break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
