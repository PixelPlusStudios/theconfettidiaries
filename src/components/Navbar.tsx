import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Youtube, Facebook } from "lucide-react";

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
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 mr-12">
          <img
            src="./src/assets/TCD logo.png"
            alt="Logo"
            className="h-10 full object-cover"
          />
          <span className="text-display text-lg font-bold tracking-[0.15em] text-foreground">
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
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col gap-4 bg-ivory/95 px-6 pb-6 md:hidden backdrop-blur-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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

            {/* Social links */}
            <div className="mt-4 border-t border-border pt-4">
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
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
