import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAboutSection } from "@/lib/sanityQueries";
import { urlFor } from "@/lib/sanity";
import aboutImgFallback from "@/assets/about-us.jpg";

const fallbackAbout = {
  title: "About Us",
  image: null,
  paragraphs: [
    "The Confetti Diaries — Founded in 2020 by Prince and Nikita, our journey began long before our business—back in our school days, where a friendship grew into love, and eventually into a lifelong partnership.",
    "Bringing our dreams from the serene hills of the Nilgiris to the vibrant city of Chennai, we built this venture with passion, creativity, and a shared vision.",
    "We are a dedicated team of professionals who believe every wedding is more than just an event—it's a deeply personal experience filled with love, family, and unforgettable moments.",
  ],
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: about = fallbackAbout } = useQuery({
    queryKey: ["aboutSection"],
    queryFn: fetchAboutSection,
  });

  const imageUrl = about?.image ? urlFor(about.image).width(600).height(800).url() : aboutImgFallback;
  const paragraphs = about?.paragraphs || fallbackAbout.paragraphs;

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-ivory">
      <div className="container mx-auto max-w-5xl px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center">
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">Our Story</p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">About Us</h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
        </motion.div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
          <motion.div className="w-full md:w-2/5 flex-shrink-0" initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src={imageUrl} alt="Prince and Nikita - Founders of The Confetti Diaries" className="w-full rounded-2xl shadow-lg object-cover aspect-[3/4]" loading="lazy" />
          </motion.div>

          <div className="w-full md:w-3/5 text-center md:text-left">
            {paragraphs.map((p: string, i: number) => (
              <motion.p
                key={i}
                className={`text-body ${i === 0 ? "" : "mt-5"} text-lg leading-relaxed ${i === 0 ? "text-secondary-foreground" : "text-muted-foreground"} sm:text-xl`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
