import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Heart, Camera, Sparkles, Music, Truck, type LucideIcon } from "lucide-react";
import { fetchServices } from "@/lib/sanityQueries";

const iconMap: Record<string, LucideIcon> = { Heart, Camera, Sparkles, Music, Truck };

const fallbackServices = [
  { _id: "1", icon: "Heart", title: "Wedding Planning", description: "Full-service coordination from concept to celebration, every detail crafted with love." },
  { _id: "2", icon: "Sparkles", title: "Decor & Design", description: "Bespoke floral arrangements, lighting, and styling that transform venues into dreamscapes." },
  { _id: "3", icon: "Camera", title: "Photography & Film", description: "Cinematic storytelling that captures every emotion, every glance, every joyful tear." },
  { _id: "4", icon: "Music", title: "Entertainment", description: "Curated music, performances, and experiences that keep your celebration alive all night." },
  { _id: "5", icon: "Truck", title: "Logistics", description: "Seamless transport, vendor coordination, and on-ground management so everything runs flawlessly." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: services = fallbackServices } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
  });

  const renderCard = (service: typeof fallbackServices[0], i: number, className?: string) => {
    const Icon = iconMap[service.icon] || Heart;
    return (
      <motion.div
        key={service._id}
        className={`rounded-xl bg-background/60 p-8 shadow-romantic backdrop-blur-sm transition-transform hover:scale-[1.02] ${className || ""}`}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: i * 0.15 }}
      >
        <Icon className="h-8 w-8 text-primary" />
        <h3 className="text-display mt-4 text-xl font-semibold text-foreground">{service.title}</h3>
        <p className="text-body mt-3 text-base leading-relaxed text-muted-foreground">{service.description}</p>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-24 sm:py-32 gradient-romantic">
      <div className="container mx-auto max-w-5xl px-6" ref={ref}>
        <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">What We Do</p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">Our Services</h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s, i) => renderCard(s, i))}
        </div>
        <div className="mt-8 hidden sm:flex justify-center gap-8">
          {services.slice(3).map((s, i) => renderCard(s, i + 3, "w-full max-w-xs"))}
        </div>
        <div className="mt-8 flex flex-col gap-8 sm:hidden">
          {services.slice(3).map((s, i) => renderCard(s, i + 3))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
