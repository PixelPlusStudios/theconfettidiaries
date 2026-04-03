import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/TCD logo.png";

const links = [
  { label: "About Us", href: "/#about" },
  { label: "Captured Moments", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Enquiry", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && location.pathname === "/") {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link to="/" className="flex items-center gap-2 md:gap-3 mr-4 md:mr-12 min-w-0">
          <img
            src={logo}
            alt="Logo"
            className="h-8 md:h-10 w-auto object-contain flex-shrink-0"
          />
          <span className="text-display text-xs md:text-lg font-bold tracking-[0.1em] md:tracking-[0.15em] text-foreground whitespace-nowrap">
            THE CONFETTI DIARIES
          </span>
        </Link>
        {/* Desktop */}
        <div className="hidden gap-8 md:flex">
          {links.map((l) =>
            l.href.startsWith("/") && !l.href.startsWith("/#") ? (
              <Link
                key={l.label}
                to={l.href}
                className="text-sans text-xs font-medium tracking-widest text-muted-foreground transition-colors hover:text-primary uppercase"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={() => handleClick(l.href)}
                className="text-sans text-xs font-medium tracking-widest text-muted-foreground transition-colors hover:text-primary uppercase"
              >
                {l.label}
              </a>
            )
          )}
        </div>
        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground flex-shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile side overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-foreground/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            {/* Side panel */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-72 bg-ivory shadow-2xl flex flex-col px-6 pt-16 pb-8 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-foreground"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col gap-6">
                {links.map((l) =>
                  l.href.startsWith("/") && !l.href.startsWith("/#") ? (
                    <Link
                      key={l.label}
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="text-sans text-sm font-medium tracking-widest text-muted-foreground hover:text-primary uppercase"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => handleClick(l.href)}
                      className="text-sans text-sm font-medium tracking-widest text-muted-foreground hover:text-primary uppercase"
                    >
                      {l.label}
                    </a>
                  )
                )}
              </div>

              {/* Social links */}
              <div className="mt-auto border-t border-border pt-6">
                <p className="text-sans text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase mb-3">
                  Let's Get Social
                </p>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
