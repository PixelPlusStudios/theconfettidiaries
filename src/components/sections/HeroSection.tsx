import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import wedding1 from "@/assets/wedding-01.jpg";
import wedding2 from "@/assets/wedding-03.jpg";
import wedding3 from "@/assets/wedding-05.jpg";
import wedding4 from "@/assets/wedding-08.jpg";
import wedding5 from "@/assets/wedding-11.jpg";
import wedding6 from "@/assets/wedding-16.jpg";

const slides = [
  { img: wedding1, title: "Timeless Moments" },
  { img: wedding2, title: "Elegant Celebrations" },
  { img: wedding3, title: "Garden Dreams" },
  { img: wedding4, title: "Grand Receptions" },
  { img: wedding5, title: "Romantic Evenings" },
  { img: wedding6, title: "Royal Affairs" },
];

// Preload all slide images into browser cache
const preloadImages = () => {
  slides.forEach((slide) => {
    const img = new Image();
    img.src = slide.img;
  });
};
preloadImages();

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

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
    <section className="relative w-full overflow-hidden bg-foreground" style={{ paddingTop: "56.25%" }}>
      {/* 56.25% = 9/16 for 16:9 ratio, works on all screen sizes */}

      {/* Main Slide */}
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
            src={slides[current].img}
            alt={slides[current].title}
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </motion.div>
      </AnimatePresence>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.h2
            key={current}
            className="text-display text-2xl font-semibold text-primary-foreground sm:text-5xl lg:text-6xl tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {slides[current].title}
          </motion.h2>
        </AnimatePresence>
        <h1 className="shimmer-text text-display mt-3 text-sm font-bold tracking-[0.12em] sm:mt-4 sm:text-2xl whitespace-nowrap"
          style={{
            background: "linear-gradient(90deg, hsl(var(--primary-foreground)) 0%, hsl(var(--gold)) 50%, hsl(var(--primary-foreground)) 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 4s linear infinite",
          }}
        >
          THE CONFETTI DIARIES
        </h1>
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


      {/* Thumbnail Strip */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 z-20 -translate-x-1/2 flex gap-1.5 sm:gap-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`overflow-hidden rounded-md transition-all duration-300 border-2 ${
              i === current
                ? "border-primary-foreground w-10 h-7 sm:w-20 sm:h-14 scale-105"
                : "border-transparent w-8 h-5 sm:w-16 sm:h-11 opacity-60 hover:opacity-90"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;