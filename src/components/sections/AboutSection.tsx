import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-ivory">
      <div className="container mx-auto max-w-4xl px-6 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Our Story
          </p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            About Us
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
        </motion.div>
        <motion.p
          className="text-body mt-10 text-lg leading-relaxed text-secondary-foreground sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Confetti Diaries — Founded in 2020 by Prince and Nikita, our journey began long before our business—back in our school days, where a friendship grew into love, and eventually into a lifelong partnership. As a real-life couple who chose each other, we understand the true meaning of weddings beyond the surface—it's about emotions, commitment, and beautiful beginnings.
        </motion.p>
        <motion.p
          className="text-body mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Bringing our dreams from the serene hills of the Nilgiris to the vibrant city of Chennai, we built this venture with passion, creativity, and a shared vision.
        </motion.p>
        <motion.p
          className="text-body mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We are a dedicated team of professionals who believe every wedding is more than just an event—it's a deeply personal experience filled with love, family, and unforgettable moments. We take pride in delivering exceptional quality without compromise.
        </motion.p>
        <motion.p
          className="text-body mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Over the years, we've had the privilege of being part of countless beautiful weddings, working closely with families and turning their dreams into reality. Every celebration we design carries our personal touch, heartfelt emotion, and attention to detail.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
