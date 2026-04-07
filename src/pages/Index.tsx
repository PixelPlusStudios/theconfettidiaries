import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import GallerySection from "@/components/sections/GallerySection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const ParallaxSection = ({ children, speed = 0.1 }: { children: React.ReactNode; speed?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ParallaxSection speed={0.05}>
          <AboutSection />
        </ParallaxSection>
        <ParallaxSection speed={0.04}>
          <GallerySection />
        </ParallaxSection>
        <ParallaxSection speed={0.06}>
          <ServicesSection />
        </ParallaxSection>
        <ParallaxSection speed={0.05}>
          <TestimonialsSection />
        </ParallaxSection>
        <ParallaxSection speed={0.03}>
          <ContactSection />
        </ParallaxSection>
      </main>
      <Footer />
    </>
  );
};

export default Index;
