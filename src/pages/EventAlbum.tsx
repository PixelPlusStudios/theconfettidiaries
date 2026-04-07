import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkleTrail from "@/components/SparkleTrail";
import { portfolioItems } from "@/data/portfolioData";
import { useEffect, useState } from "react";

const EventAlbum = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const event = portfolioItems.find((item) => item.id === eventId);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-16 bg-ivory min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-display text-3xl font-semibold text-foreground">Event not found</h1>
            <Link to="/portfolio" className="text-primary mt-4 inline-block underline">
              Back to Captured Moments
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const total = event.album.length;

  const goTo = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => goTo(current === 0 ? total - 1 : current - 1);
  const next = () => goTo(current === total - 1 ? 0 : current + 1);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <>
      <SparkleTrail />
      <Navbar />
      <main className="pt-24 pb-16 bg-ivory min-h-screen pt-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-6">
            <Link
              to="/portfolio"
              className="text-sans inline-flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground hover:text-primary uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Captured Moments
            </Link>
          </div>

          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
              {event.category}
            </p>
            <h1 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
              {event.title}
            </h1>
            <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
          </motion.div>

          {/* Full-view Carousel */}
          <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden bg-muted shadow-romantic">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={current}
                src={event.album[current]}
                alt={`${event.title} - Photo ${current + 1}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-background/70 backdrop-blur-sm rounded-full px-4 py-1.5 text-sans text-xs font-medium tracking-widest text-foreground">
              {current + 1} / {total}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-6 flex gap-2 justify-center flex-wrap">
            {event.album.map((img, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  i === current ? "border-primary scale-105" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventAlbum;
