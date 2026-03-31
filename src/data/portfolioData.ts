import wedding1 from "@/assets/wedding-01.jpg";
import wedding2 from "@/assets/wedding-05.jpg";
import wedding3 from "@/assets/wedding-10.jpg";
import wedding4 from "@/assets/wedding-16.jpg";
import wedding5 from "@/assets/wedding-19.jpg";
import wedding6 from "@/assets/wedding-24.jpg";

export interface PortfolioItem {
  id: string;
  img: string;
  title: string;
  category: string;
  height: string;
  album: string[];
}

export const portfolioItems: PortfolioItem[] = [
  { id: "sarah-james", img: wedding1, title: "Sarah & James", category: "Wedding", height: "h-72", album: [wedding1, wedding3, wedding5, wedding2, wedding6] },
  { id: "elena-marco", img: wedding2, title: "Elena & Marco", category: "Reception", height: "h-96", album: [wedding2, wedding4, wedding6, wedding1, wedding3] },
  { id: "priya-arjun", img: wedding3, title: "Priya & Arjun", category: "Ceremony", height: "h-80", album: [wedding3, wedding5, wedding1, wedding4, wedding2] },
  { id: "lily-thomas", img: wedding4, title: "Lily & Thomas", category: "Engagement", height: "h-64", album: [wedding4, wedding2, wedding6, wedding3, wedding5] },
  { id: "mei-daniel", img: wedding5, title: "Mei & Daniel", category: "Wedding", height: "h-96", album: [wedding5, wedding1, wedding3, wedding6, wedding4] },
  { id: "charlotte-william", img: wedding6, title: "Charlotte & William", category: "Reception", height: "h-72", album: [wedding6, wedding2, wedding4, wedding1, wedding5] },
  { id: "ava-noah", img: wedding1, title: "Ava & Noah", category: "Ceremony", height: "h-80", album: [wedding1, wedding4, wedding6, wedding3, wedding2] },
  { id: "sofia-liam", img: wedding3, title: "Sofia & Liam", category: "Destination", height: "h-96", album: [wedding3, wedding1, wedding5, wedding2, wedding6] },
  { id: "zara-ethan", img: wedding5, title: "Zara & Ethan", category: "Engagement", height: "h-64", album: [wedding5, wedding3, wedding1, wedding4, wedding6] },
  { id: "olivia-lucas", img: wedding2, title: "Olivia & Lucas", category: "Wedding", height: "h-80", album: [wedding2, wedding6, wedding4, wedding5, wedding1] },
  { id: "mia-sebastian", img: wedding4, title: "Mia & Sebastian", category: "Reception", height: "h-96", album: [wedding4, wedding1, wedding3, wedding6, wedding2] },
  { id: "isabella-henry", img: wedding6, title: "Isabella & Henry", category: "Ceremony", height: "h-72", album: [wedding6, wedding3, wedding5, wedding2, wedding4] },
];
