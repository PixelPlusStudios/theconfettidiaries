import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkleTrail from "@/components/SparkleTrail";
import { portfolioItems } from "@/data/portfolioData";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Flatten every album image once, preserving order
  const slides = portfolioItems.flatMap((item) =>
    item.album.map((src, idx) => ({
      src,
      alt: `${item.title} ${idx + 1}`,
      title: item.title,
      category: item.category,
    }))
  );

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <>
      <SparkleTrail />
      <Navbar />
      <main className="bg-ivory">
        {/* Page header */}
        <section className="pt-28 pb-10 sm:pt-32 sm:pb-14 px-6">
          <div className="mx-auto max-w-5xl text-center">
            <Link
              to="/"
              className="text-sans inline-flex items-center gap-2 text-xs font-medium tracking-widest text-foreground/70 hover:text-foreground uppercase transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
              Our Work
            </p>
            <h1 className="text-display mt-3 text-3xl font-semibold text-foreground sm:text-5xl lg:text-6xl tracking-wide">
              Moments We Styled
            </h1>
          </div>
        </section>

        {/* Full-width carousel */}
        <section
          className="relative w-full overflow-hidden bg-foreground"
          style={{ paddingTop: "56.25%" }}
        >
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              <img
                src={slides[current].src}
                alt={slides[current].alt}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>

          {/* Nav Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/20 p-1.5 sm:p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/20 p-1.5 sm:p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
