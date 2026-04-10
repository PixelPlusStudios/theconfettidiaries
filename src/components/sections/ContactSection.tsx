import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchContactInfo } from "@/lib/sanityQueries";

const fallbackContact = {
  email: "weddings.tcd@gmail.com",
  phones: ["+91 83009 66436", "+91 63743 98414"],
  location: "Chennai",
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { data: contact = fallbackContact } = useQuery({
    queryKey: ["contactInfo"],
    queryFn: fetchContactInfo,
  });

  const email = contact?.email || fallbackContact.email;
  const phones = contact?.phones || fallbackContact.phones;
  const location = contact?.location || fallbackContact.location;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ivory">
      <div className="container mx-auto max-w-4xl px-6" ref={ref}>
        <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <p className="text-sans text-xs font-medium tracking-[0.3em] text-primary uppercase">Get In Touch</p>
          <h2 className="text-display mt-4 text-4xl font-semibold text-foreground sm:text-5xl">Enquiry</h2>
          <div className="mx-auto mt-6 h-px w-24 gradient-gold" />
          <p className="text-body mt-8 text-lg text-muted-foreground">Ready to begin your celebration story? We'd love to hear from you.</p>
        </motion.div>

        <motion.div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="flex items-center gap-3 text-secondary-foreground">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-sans text-sm tracking-wider">{email}</span>
          </div>
          {phones.map((phone: string, i: number) => (
            <div key={i} className="flex items-center gap-3 text-secondary-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sans text-sm tracking-wider">{phone}</span>
            </div>
          ))}
          <div className="flex items-center gap-3 text-secondary-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sans text-sm tracking-wider">{location}</span>
          </div>
        </motion.div>

        <motion.form className="mx-auto mt-12 max-w-lg space-y-6" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Your Name" className="text-sans rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
            <input type="email" placeholder="Your Email" className="text-sans rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <textarea rows={4} placeholder="Tell us about your dream celebration..." className="text-sans w-full rounded-lg border border-border bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <button type="submit" className="gradient-gold text-sans w-full rounded-full py-3 text-sm font-medium tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">SEND MESSAGE</button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
