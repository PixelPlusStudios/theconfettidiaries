import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-foreground py-12 text-center">
    <p className="text-display text-lg font-semibold tracking-[0.15em] text-primary-foreground">
      THE CONFETTI DIARIES
    </p>

    <div className="mt-6 flex justify-center gap-5">
      <a href="https://www.instagram.com/the_confetti_diaries?igsh=MXB6cjBpYmlweGFxeg==" target="_blank" rel="noreferrer">
        <FaInstagram className="h-5 w-5 text-primary-foreground/60 hover:text-primary-foreground" />
      </a>

      <a href="https://www.youtube.com/@theconfettidiaries518" target="_blank" rel="noreferrer">
        <FaYoutube className="h-5 w-5 text-primary-foreground/60 hover:text-primary-foreground" />
      </a>

      <a href="https://www.facebook.com/share/1AvzGmb6SX/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
        <FaFacebook className="h-5 w-5 text-primary-foreground/60 hover:text-primary-foreground" />
      </a>
    </div>

    <p className="text-sans mt-4 text-xs tracking-wider text-primary-foreground/60">
      © {new Date().getFullYear()} The Confetti Diaries
    </p>
  </footer>
);

export default Footer;

//aljdbcsobcwoucbwiCB;Wbcy