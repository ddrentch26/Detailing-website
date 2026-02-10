import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const galleryItems = [
  {
    id: 1,
    title: "Luxury Car Detail",
    image: "https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzcwNTYxMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Interior Deep Clean",
    image: "https://images.unsplash.com/photo-1750563289628-72678be3228f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRldGFpbGluZ3xlbnwxfHx8fDE3NzA2NzE4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Exterior Wash & Polish",
    image: "https://images.unsplash.com/photo-1564597010688-2af5f0fdb41b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBleHRlcmlvciUyMHdhc2h8ZW58MXx8fHwxNzcwNjcxODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Premium Black Car",
    image: "https://images.unsplash.com/photo-1770364276122-f1e2add1c6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpc2hlZCUyMGJsYWNrJTIwY2FyfGVufDF8fHx8MTc3MDY3MTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: "Sports Car Detail",
    image: "https://images.unsplash.com/photo-1680102185549-9cf0af45c6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBkZXRhaWx8ZW58MXx8fHwxNzcwNTkwMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    title: "Interior Perfection",
    image: "https://images.unsplash.com/photo-1682858110563-3f609263d418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGNhciUyMGludGVyaW9yfGVufDF8fHx8MTc3MDY3MTg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    title: "Mirror Finish Wax",
    image: "https://images.unsplash.com/photo-1755279217102-947755911799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXglMjBzaGluZXxlbnwxfHx8fDE3NzA2OTgyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 8,
    title: "Luxury SUV Detail",
    image: "https://images.unsplash.com/photo-1768024175221-845ba4106e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzcwNjk4MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 9,
    title: "Headlight Restoration",
    image: "https://images.unsplash.com/photo-1527457021552-0d973c75b24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpc2hlZCUyMGNhciUyMGhlYWRsaWdodHxlbnwxfHx8fDE3NzA2OTgyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function OurWork() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Our Work</h1>
          <p className="text-xl text-muted-foreground">
            See the quality and care we put into every detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-accent text-accent-foreground p-12 rounded-lg">
          <h2 className="text-3xl mb-4">Ready to Transform Your Vehicle?</h2>
          <p className="text-lg mb-6">
            Join our satisfied customers and experience the Apex Precision difference
          </p>
          <a
            href="/booking"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </div>
  );
}