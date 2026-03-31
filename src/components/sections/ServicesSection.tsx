import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Camera, Sparkles, Music, Truck } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Full-service coordination from concept to celebration, every detail crafted with love.",
  },
  {
    icon: Sparkles,
    title: "Decor & Design",
    description: "Bespoke floral arrangements, lighting, and styling that transform venues into dreamscapes.",
  },
  {
    icon: Camera,
    title: "Photography & Film",
    description: "Cinematic storytelling that captures every emotion, every glance, every joyful tear.",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Curated music, performances, and experiences that keep your celebration alive all night.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Seamless transport, vendor coordination, and on-ground management so everything runs flawlessly.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 sm:py-32 gradient-romantic">
      <div className="container mx-auto max-w-5xl px-6" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
            What We Do
          </p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            Our Services
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.title}
              className="rounded-xl bg-background/60 p-8 shadow-romantic backdrop-blur-sm transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <service.icon className="h-8 w-8 text-primary" />
              <h3 className="text-display mt-4 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-body mt-3 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center gap-8">
          {services.slice(3).map((service, i) => (
            <motion.div
              key={service.title}
              className="w-full max-w-xs rounded-xl bg-background/60 p-8 shadow-romantic backdrop-blur-sm transition-transform hover:scale-[1.02]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (i + 3) * 0.15 }}
            >
              <service.icon className="h-8 w-8 text-primary" />
              <h3 className="text-display mt-4 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-body mt-3 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
