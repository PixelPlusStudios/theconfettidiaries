import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube, Facebook } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import tcdLogo from "@/assets/TCD logo.png";

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 mr-4 sm:mr-12 shrink-0">
            <img
              src={tcdLogo}
              alt="The Confetti Diaries Logo"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <span className="text-display text-xs sm:text-lg font-bold tracking-[0.1em] sm:tracking-[0.15em] text-foreground whitespace-nowrap">
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
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile side overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-foreground/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            {/* Side panel */}
            <motion.div
              className="fixed top-0 right-0 z-[70] h-full w-72 bg-ivory shadow-2xl md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <span className="text-display text-sm font-bold tracking-[0.1em] text-foreground">
                  MENU
                </span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>

              <div className="flex flex-col gap-5 px-6 py-8 flex-1">
                {links.map((l) =>
                  l.href.startsWith("/") && !l.href.startsWith("/#") ? (
                    <Link
                      key={l.label}
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="text-sans text-xs font-medium tracking-widest text-muted-foreground hover:text-primary uppercase"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={() => handleClick(l.href)}
                      className="text-sans text-xs font-medium tracking-widest text-muted-foreground hover:text-primary uppercase"
                    >
                      {l.label}
                    </a>
                  )
                )}
              </div>

              {/* Social links */}
              <div className="px-6 py-6 border-t border-border">
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
    </>
  );
};

export default Navbar;
