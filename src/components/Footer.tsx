import { Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12 text-center">
    <p className="text-display text-lg font-semibold tracking-[0.15em] text-primary-foreground">
      THE CONFETTI DIARIES
    </p>

    {/* Social links */}
    <div className="mt-6 flex justify-center gap-5">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
        <Instagram className="h-5 w-5" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
        <Youtube className="h-5 w-5" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
        <Facebook className="h-5 w-5" />
      </a>
    </div>

    <p className="text-sans mt-4 text-xs tracking-wider text-primary-foreground/60">
      © {new Date().getFullYear()} The Confetti Diaries. All rights reserved.
    </p>
  </footer>
);

export default Footer;
