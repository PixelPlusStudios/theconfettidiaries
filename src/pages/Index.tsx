import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTarget = location.state?.scrollTo as string | undefined;

  useEffect(() => {
    if (!scrollTarget) return;

    const timer = setTimeout(() => {
      document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth" });
      navigate(location.pathname, { replace: true, state: undefined });
    }, 0);

    return () => clearTimeout(timer);
  }, [scrollTarget, location.pathname, navigate]);
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
