import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918300966436?text=Hi%20Confetti%20Diaries%2C%20I%27d%20love%20to%20enquire%20about%20your%20services."
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 hover:shadow-xl md:bottom-8 md:right-8 md:h-16 md:w-16"
  >
    <FaWhatsapp className="h-7 w-7 md:h-8 md:w-8" />
    <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
  </a>
);

export default WhatsAppButton;
