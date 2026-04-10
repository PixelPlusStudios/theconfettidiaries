import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchTestimonials } from "@/lib/sanityQueries";

const fallbackTestimonials = [
  { _id: "1", name: "Ananya & Rohan", text: "The Confetti Diaries turned our wedding into a fairytale. Every detail was absolutely perfect — we still get compliments from our guests!" },
  { _id: "2", name: "Charlotte & William", text: "Working with this team felt like magic. They understood our vision instantly and created something beyond our wildest dreams." },
  { _id: "3", name: "Mei & Daniel", text: "From the first meeting to the last dance, everything was seamless. They don't just plan weddings — they create unforgettable experiences." },
  { _id: "4", name: "Sofia & James", text: "We couldn't have imagined a more perfect day. The attention to detail, the creativity — everything was beyond what we hoped for." },
  { _id: "5", name: "Priya & Arjun", text: "A truly world-class team. They handled every element with grace and made our celebration feel effortless and spectacular." },
  { _id: "6", name: "Lara & Ethan", text: "Every moment was curated with such love and care. Our guests are still talking about how beautiful everything was." },
];

const useCardsPerView = () => {
  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 640 ? 1 : 3
  );
  const ref = useRef(false);
  if (!ref.current && typeof window !== "undefined") {
    ref.current = true;
    window.addEventListener("resize", () => setCardsPerView(window.innerWidth < 640 ? 1 : 3));
  }
  return cardsPerView;
};

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const cardsPerView = useCardsPerView();

  const { data: testimonials = fallbackTestimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });

  const totalPages = Math.ceil(testimonials.length / cardsPerView);
  const safePage = page >= totalPages ? 0 : page;

  const next = () => { setDirection(1); setPage((p) => (p + 1) % totalPages); };
  const prev = () => { setDirection(-1); setPage((p) => (p - 1 + totalPages) % totalPages); };

  const currentCards = testimonials.slice(safePage * cardsPerView, safePage * cardsPerView + cardsPerView);

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-blush">
      <div className="container mx-auto max-w-6xl px-6" ref={sectionRef}>
        <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">Love Letters</p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">Testimonials</h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
        </motion.div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`${safePage}-${cardsPerView}`}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-3"
              >
                {currentCards.map((t) => (
                  <div key={t._id} className="rounded-xl bg-background/70 p-8 shadow-romantic backdrop-blur-sm flex flex-col items-center text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, j) => (<Star key={j} className="h-4 w-4 fill-gold text-gold" />))}
                    </div>
                    <p className="text-body mt-5 text-sm italic leading-relaxed text-secondary-foreground sm:text-base">"{t.text}"</p>
                    <p className="text-sans mt-6 text-xs font-semibold tracking-widest text-primary uppercase">— {t.name}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-14 rounded-full bg-background p-2 shadow-romantic text-foreground transition-colors hover:bg-muted" aria-label="Previous testimonials">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-14 rounded-full bg-background p-2 shadow-romantic text-foreground transition-colors hover:bg-muted" aria-label="Next testimonials">
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => { setDirection(i > safePage ? 1 : -1); setPage(i); }}
                className={`h-2 rounded-full transition-all duration-300 ${i === safePage ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
                aria-label={`Go to page ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
