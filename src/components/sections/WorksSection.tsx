import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import wedding1 from "@/assets/wedding-07.jpg";
import wedding3 from "@/assets/wedding-12.jpg";
import wedding5 from "@/assets/wedding-19.jpg";

const works = [
  { img: wedding1, title: "Sarah & James", subtitle: "Golden Hour Romance" },
  { img: wedding3, title: "Elena & Marco", subtitle: "Garden Ceremony" },
  { img: wedding5, title: "Lily & Thomas", subtitle: "Elegant Reception" },
];

const WorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="works" className="py-24 sm:py-32 bg-blush">
      <div className="container mx-auto max-w-6xl px-6" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Captured Moments
          </p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            Our Works
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              className="group relative overflow-hidden rounded-lg shadow-romantic"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <img
                src={work.img}
                alt={work.title}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-72"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-foreground/60 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="text-display text-xl font-semibold text-primary-foreground">
                  {work.title}
                </h3>
                <p className="text-sans mt-1 text-xs tracking-widest text-primary-foreground/80">
                  {work.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/portfolio"
            className="gradient-gold text-sans inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            VIEW ALL
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;
