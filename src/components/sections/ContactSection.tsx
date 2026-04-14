import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ivory">
      <div className="container mx-auto max-w-4xl px-6" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">
            Get In Touch
          </p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            Enquiry
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
          <p className="text-body mt-8 text-lg text-muted-foreground">
            Ready to begin your celebration story? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="mailto:weddings.tcd@gmail.com" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-sans text-sm tracking-wider">weddings.tcd@gmail.com</span>
          </a>
          <a href="tel:+918300966436" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-sans text-sm tracking-wider">+91 83009 66436</span>
          </a>
          <a href="tel:+916374398414" className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-sans text-sm tracking-wider">+91 63743 98414</span>
          </a>
          <div className="flex items-center gap-3 text-secondary-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sans text-sm tracking-wider">Chennai</span>
          </div>
        </motion.div>

        <motion.form
          className="mx-auto mt-12 max-w-lg space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="text-sans rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="text-sans rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Tell us about your dream celebration..."
            className="text-sans w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            className="gradient-gold text-sans w-full rounded-full py-3 text-sm font-medium tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            SEND MESSAGE
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
