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
        {/* Full-screen carousel */}
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
              <div className="absolute inset-0 bg-foreground/30" />
            </motion.div>
          </AnimatePresence>

          {/* Title overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary-foreground/90 uppercase">
                  Our Work
                </p>
                <h1 className="text-display mt-3 text-3xl font-semibold text-primary-foreground sm:text-5xl lg:text-6xl tracking-wide">
                  Moments We Styled
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Back link */}
          <div className="absolute top-20 sm:top-24 left-4 sm:left-6 z-20">
            <Link
              to="/"
              className="text-sans inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary-foreground/90 hover:text-primary-foreground uppercase transition-colors bg-background/20 backdrop-blur-sm rounded-full px-4 py-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

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

          {/* Slide counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 z-20 -translate-x-1/2 text-sans text-xs sm:text-sm tracking-widest text-primary-foreground/90 bg-background/20 backdrop-blur-sm rounded-full px-4 py-1.5">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
