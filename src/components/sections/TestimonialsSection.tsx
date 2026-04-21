import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const defaultTestimonials = [
  {
    name: "Anita Talwar",
    text: "TCD are very professional decorators. I am very happy with Nikita and her team\’s execution and attention to each and every detail. Kudos to Nikita and her team for creating a romantic and beautiful ambience for my daughter\’s reception. Her team did a complete make over to the hall and it exceeded my expectations.",
  },
  {
    name: "Preethi Dvaz & Terence Dvaz",
    text: "I recently had the pleasure of working with Confetti Diaries for my son\’s wedding, and I highly recommend them. The planning process was seamless and reduced our burden. On the day of the wedding, everything was flawlessly executed. The team managed the event expertly, allowing us to focus on celebrating our special day. If you're looking for a planner who can take you through the process and let you enjoy your celebration, look no further than Confetti Diaries!",
  },
  {
    name: "AP Srinivasan",
    text: "Nikita and Prince were amazing. They put up with our constant changes and requests patiently and communicated very well and transparently. On the day the venue (Primrose 131) was mind blowing. It was exactly how we had imagined it. Every guest there was blown away. Also they helped fully sort other ancillary items like drinks, DJ, tables for caterers etc. which was a massive help. I ca\’t recommend them enough!",
  },
  {
    name: "Neelanjana",
    text: "Chose TCD for my engagement, the team was very professional, special mention to nikita who was extremely patient and cooperative to the client needs, made all the necessary changes and had good suggestions to give out as well. Elated how beautifully the decor has reflected in pictures as well. Overall kudos and best wishes to the team. Will 10/10 recommend.",
  },
  {
    name: "Anuya & Pranav",
    text: "Nikita & Prince and the entire time of The Confetti Diaries made our wedding dream a reality! Every single guest was in awe of how the entire bit was planned and executed. The decor for every function was exactly the way we had imagined it and the main wedding day especially was beyond expectation. They treated our wedding as their own. They treated us like family. They were thorough professionals and managed to pull off everything flawlessly. They are flexible and took charge of everything that came up even at the last minute. They both compliment each other really well. They love what they are doing and it shows in the way they operate. We would recommend them 💯 to anyone looking to plan a special, memorable life event.",
  },
  {
    name: "Faristha K",
    text: "TCD was a name among many that I stumbled upon during the hunt for an event planner in Chennai for my brother\’s wedding reception. While the stellar reviews on WedMeGood initially drew me to TCD, it was Prince\’s and Nikita\’s proactive can-do attitude as well as swift communication that sealed the deal for me. Prince and Nikita were very quick to understand our vision for the wedding reception and shared their professional suggestions for table centrepieces to stage set-up and everything in between. They were also extremely resourceful and connected us with make-up artists, henna artists, and hamper packaging services among other creatives in the wedding industry, which honestly made the chaotic days leading up to the wedding a lot easier. The icing on the cake was TCD’s ability to get things done efficiently with minimal supervision, which is definitely an edge they have over other event planners in Chennai. They never once put us in a position where we felt the need  to constantly remind them of what needed to be done and follow up to see whether those things had been done or not. If anything, they went above and beyond to ensure that we provided what they needed to make the event a success. If I had to plan my brother\’s wedding reception all over again, I\’d definitely do it with TCD by my side.",
  },
];

const useCardsPerView = () => {
  const [cardsPerView, setCardsPerView] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 640 ? 1 : 3
  );

  const ref = useRef(false);
  if (!ref.current && typeof window !== "undefined") {
    ref.current = true;
    const onResize = () => setCardsPerView(window.innerWidth < 640 ? 1 : 3);
    window.addEventListener("resize", onResize);
  }

  return cardsPerView;
};

const CHAR_LIMIT = 220;

const TestimonialCard = ({ name, text }: { name: string; text: string }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > CHAR_LIMIT;
  const displayed = !isLong || expanded ? text : text.slice(0, CHAR_LIMIT).trimEnd() + "…";

  return (
    <div className="rounded-xl bg-background/70 p-8 shadow-romantic backdrop-blur-sm flex flex-col items-center text-center min-h-[340px]">
      <div className="flex justify-center gap-1">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-body mt-5 text-sm italic leading-relaxed text-secondary-foreground sm:text-base">
        "{displayed}"
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-sans mt-3 text-xs font-semibold tracking-widest text-primary hover:underline uppercase"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
      <p className="text-sans mt-auto pt-6 text-xs font-semibold tracking-widest text-primary uppercase">
        — {name}
      </p>
    </div>
  );
};

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formName, setFormName] = useState("");
  const [formText, setFormText] = useState("");
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const { toast } = useToast();
  const cardsPerView = useCardsPerView();
  const totalPages = Math.ceil(testimonials.length / cardsPerView);

  const safePage = page >= totalPages ? 0 : page;

  const next = () => {
    setDirection(1);
    setPage((p) => (p + 1) % totalPages);
  };

  const prev = () => {
    setDirection(-1);
    setPage((p) => (p - 1 + totalPages) % totalPages);
  };

  const currentCards = testimonials.slice(
    safePage * cardsPerView,
    safePage * cardsPerView + cardsPerView
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;

    setSubmitting(true);
    try {
      setTestimonials((prev) => [...prev, { name: formName.trim(), text: formText.trim() }]);
      setFormName("");
      setFormText("");
      setShowModal(false);
      toast({ title: "Thank you!", description: "Your testimonial has been submitted." });
    } catch {
      toast({ title: "Error", description: "Could not submit. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-blush">
      <div className="container mx-auto max-w-6xl px-6" ref={sectionRef}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Love Letters
          </p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            Testimonials
          </h2>
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
                  <TestimonialCard key={t.name} name={t.name} text={t.text} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 sm:-translate-x-14 rounded-full bg-background p-2 shadow-romantic text-foreground transition-colors hover:bg-muted"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 sm:translate-x-14 rounded-full bg-background p-2 shadow-romantic text-foreground transition-colors hover:bg-muted"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > safePage ? 1 : -1);
                  setPage(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === safePage ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Share Your Experience Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={() => setShowModal(true)}
            className="gradient-gold text-sans inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-medium tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <Plus className="h-4 w-4" />
            SHARE YOUR EXPERIENCE
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative w-full max-w-md rounded-2xl bg-background p-8 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
              <h3 className="text-display text-2xl font-semibold text-foreground text-center">
                Share Your Experience
              </h3>
              <div className="mx-auto mt-3 h-px w-16 gradient-gold" />
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name (e.g. Priya & Arjun)"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="text-sans w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your experience..."
                  value={formText}
                  onChange={(e) => setFormText(e.target.value)}
                  required
                  className="text-sans w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="gradient-gold text-sans w-full rounded-full py-3 text-sm font-medium tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT TESTIMONIAL"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSection;