import Image from "next/image";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "THE BATH HOUSE",
    location: "Лондон, Гросвенор Гарденс, 1",
    desc: "Традиции русской бани напротив Букингемского дворца. №1 на TripAdvisor.",
    images: ["/images/london-1.jpg", "/images/london-2.jpg", "/images/london-3.jpg"],
  },
  // ... остальные проекты по аналогии
];

export default function PortfolioShowcase() {
  return (
    <section className="py-24 bg-[#121212] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-20 text-white/90">Портфолио</h2>
        {projects.map((p, idx) => (
          <div key={idx} className="mb-32">
            <div className="mb-10">
              <h3 className="text-3xl font-serif text-[#c8aa78] mb-2">{p.title}</h3>
              <div className="flex items-center text-white/50 text-sm"><MapPin className="w-4 h-4 mr-2" />{p.location}</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {p.images.map((img, i) => (
                <div key={i} className="aspect-[4/5] overflow-hidden bg-white/5">
                  <Image src={img} width={400} height={500} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" alt={p.title} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
