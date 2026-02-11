import { Sparkles, Shield, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const services = [
  {
    title: "Exterior Detailing",
    description: "Complete exterior wash, clay bar treatment, polish, and wax to restore your car's shine and protect the paint.",
    icon: Sparkles,
  },
  {
    title: "Interior Detailing",
    description: "Deep cleaning of carpets, seats, dashboard, and all interior surfaces. Leather conditioning and odor removal included.",
    icon: Shield,
  },
  {
    title: "Full Detail Package",
    description: "Our complete service combining exterior and interior detailing for the ultimate car care experience.",
    icon: Clock,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Michael S.",
    role: "Tesla Model S Owner",
    quote:
      "Amazing attention to detail — my car looked brand new. Friendly staff and quick turnaround.",
  },
  {
    id: 2,
    name: "Samantha R.",
    role: "Luxury SUV Owner",
    quote:
      "Professional, thorough, and worth every penny. The interior smells fresh and looks spotless.",
  },
  {
    id: 3,
    name: "Carlos D.",
    role: "Daily Driver",
    quote:
      "Reliable mobile service — they came to my work and my car was transformed in hours.",
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzcwNTYxMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Car detailing"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl mb-4">Apex Precision</h1>
          <p className="text-xl mb-2">GTA Mobile Car Detailing Service</p>
          <p className="text-lg mb-8 text-white/90">Premium Service at Your Location</p>
          <Link
            to="/booking"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">What We Offer</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl mb-2">Client Testimonials</h3>
            <p className="text-muted-foreground">What our customers are saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-card border border-border rounded-lg p-6">
                <p className="mb-4">“{t.quote}”</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}