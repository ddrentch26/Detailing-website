import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Play } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Audi R8",
    image: "/images/audi-r8.jpeg",
  },
  {
    id: 2,
    title: "Exterior Wash",
    image: "/images/c63.jpeg",
  },
  {
    id: 3,
    title: "Premium Black Car",
    image: "/images/cyber.jpeg",
  },
  {
    id: 4,
    title: "Sports Car Detail",
    image: "/images/etron.jpeg",
  },
  {
    id: 5,
    title: "Interior Perfection",
    image: "/images/BMWfront.jpeg",
  },
  {
    id: 6,
    title: "Luxury SUV Detail",
    image: "/images/nav.jpeg",
  },
];

const beforeAfterItems = [
  {
    id: 1,
    title: "Exterior Transformation",
    before: "https://images.unsplash.com/photo-1691823445896-73a0ac9cbcc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMGNhciUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MDc3NjIyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    after: "https://images.unsplash.com/photo-1763291894075-33c686e1a72c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHNoaW55JTIwY2FyfGVufDF8fHx8MTc3MDY4OTYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Interior Deep Clean",
    before: "https://images.unsplash.com/photo-1727940334409-36a3407d623a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMGNhciUyMGludGVyaW9yJTIwc2VhdHN8ZW58MXx8fHwxNzcwNzc2MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    after: "https://images.unsplash.com/photo-1579317472773-4cacd2410eef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmlzdGluZSUyMGNhciUyMGludGVyaW9yJTIwbGVhdGhlcnxlbnwxfHx8fDE3NzA3NzYyMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Wheel Restoration and Shine",
    before: "https://images.unsplash.com/photo-1639395158686-f4abd831e424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2dneSUyMGNhciUyMGhlYWRsaWdodHN8ZW58MXx8fHwxNzcwNzc2MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    after: "https://images.unsplash.com/photo-1745766296989-0fff8d35e39e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhciUyMHJlc3RvcmVkJTIwaGVhZGxpZ2h0c3xlbnwxfHx8fDE3NzA3NzYyMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const videos = [
  {
    id: 1,
    title: "Full Detail Process - Luxury Sedan",
    thumbnail: "https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzcwNTYxMjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "#",
  },
  {
    id: 2,
    title: "Interior Detailing - Before & After",
    thumbnail: "https://images.unsplash.com/photo-1750563289628-72678be3228f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRldGFpbGluZ3xlbnwxfHx8fDE3NzA2NzE4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Detailing at Your Location",
    thumbnail: "https://images.unsplash.com/photo-1680102185549-9cf0af45c6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBkZXRhaWx8ZW58MXx8fHwxNzcwNTkwMjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    videoUrl: "#",
  },
];

// testimonials moved to Home.tsx

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

        {/* Before & After Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Before & After</h2>
            <p className="text-lg text-muted-foreground">
              See the incredible transformations we achieve
            </p>
          </div>

          <div className="space-y-12">
            {beforeAfterItems.map((item) => (
              <div key={item.id} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl mb-6 text-center">{item.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-red-500/10 text-red-500 px-3 py-1 rounded inline-block text-sm font-semibold">
                      BEFORE
                    </div>
                    <div className="aspect-video overflow-hidden rounded-lg border border-border">
                      <ImageWithFallback
                        src={item.before}
                        alt={`${item.title} - Before`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded inline-block text-sm font-semibold">
                      AFTER
                    </div>
                    <div className="aspect-video overflow-hidden rounded-lg border border-border">
                      <ImageWithFallback
                        src={item.after}
                        alt={`${item.title} - After`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Watch Our Work in Action</h2>
            <p className="text-lg text-muted-foreground">
              See our detailing process and results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="aspect-video overflow-hidden relative">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="bg-accent text-accent-foreground rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Click to watch</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Video placeholders - Upload your actual detailing videos by replacing the videoUrl links
            </p>
          </div>
        </div>

        {/* CTA removed per request */}
      </div>
    </div>
  );
}