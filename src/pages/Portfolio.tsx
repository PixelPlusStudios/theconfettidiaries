import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SparkleTrail from "@/components/SparkleTrail";
import { portfolioItems } from "@/data/portfolioData";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Flatten every album image once, preserving order
  const allImages = portfolioItems.flatMap((item) =>
    item.album.map((src, idx) => ({
      src,
      alt: `${item.title} ${idx + 1}`,
      key: `${item.id}-${idx}`,
    }))
  );

  // Duplicate once for a seamless infinite scroll loop
  const looped = [...allImages, ...allImages];

  return (
    <>
      <SparkleTrail />
      <Navbar />
      <main className="pt-24 pb-16 bg-ivory min-h-screen">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-6">
            <Link
              to="/"
              className="text-sans inline-flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground hover:text-primary uppercase transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
              Our Work
            </p>
            <h1 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
              Moments We Styled
            </h1>
            <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
            <p className="text-body mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              A curated collection of weddings and ceremonies we've had the honour of bringing to life.
            </p>
          </motion.div>
        </div>

        {/* Auto-scrolling carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 animate-scroll-left"
            style={{ width: "max-content" }}
          >
            {looped.map((img, i) => (
              <div
                key={`${img.key}-${i}`}
                className="flex-shrink-0 overflow-hidden rounded-lg shadow-romantic w-72 h-96 sm:w-80 sm:h-[28rem]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
