import wedding1 from "@/assets/portfolio/wedding-13.jpg";
import wedding2 from "@/assets/portfolio/wedding-14.jpg";
import wedding3 from "@/assets/portfolio/wedding-15.jpg";
import wedding4 from "@/assets/portfolio/wedding-22.jpg";
import wedding5 from "@/assets/portfolio/wedding-23.jpg";
import wedding6 from "@/assets/portfolio/wedding-24.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "priya-arjun",
    title: "A Love Story Written in the Stars — Priya & Arjun",
    excerpt: "From a chance meeting at a coffee shop to a grand celebration under fairy lights, Priya and Arjun's wedding was nothing short of magical.",
    image: wedding1,
    date: "March 15, 2025",
    category: "Client Story",
    content: [
      "Some love stories feel like they were written in the stars — and Priya & Arjun's is one of them. They first met at a quiet little coffee shop in Chennai, where a shared love for filter coffee sparked a conversation that never really ended.",
      "When they approached us to plan their wedding, they had one simple wish: they wanted the night sky to be part of their celebration. And so, we crafted a celestial-themed wedding that turned their dream into a breathtaking reality.",
      "The venue was transformed into a starlit wonderland — deep navy drapes adorned with golden constellations, hanging fairy lights mimicking the Milky Way, and tables named after their favourite stars. The entrance featured a crescent moon arch wrapped in white roses and soft golden lights.",
      "Priya walked down an aisle lit by hundreds of floating candles, wearing a stunning ivory lehenga with celestial embroidery. Arjun, in a classic navy sherwani with gold accents, waited under a mandap designed to look like an open sky — complete with a canopy of twinkling LED stars.",
      "The reception was equally magical. A live band played their favourite songs as guests danced under a ceiling of suspended lanterns. The couple's first dance was choreographed to perfection, with a surprise confetti shower in gold and silver.",
      "Every detail — from the star-shaped menu cards to the constellation cocktail bar — reflected their story. It wasn't just a wedding; it was a universe they built together, and we were honoured to bring it to life."
    ],
  },
  {
    id: "meera-karthik",
    title: "The Rustic Romance of Meera & Karthik",
    excerpt: "Nestled in the lush greenery of Ooty, this intimate wedding brought together tradition and modern elegance.",
    image: wedding2,
    date: "February 28, 2025",
    category: "Client Story",
    content: [
      "Meera and Karthik always knew they wanted something different — a wedding that felt like a warm hug rather than a grand spectacle. So when they told us they wanted to get married in the misty hills of Ooty, surrounded by just their closest family and friends, we knew this was going to be special.",
      "The venue was a charming heritage bungalow wrapped in ivy and surrounded by tea gardens. We kept the decor minimal yet stunning — wild flowers in mason jars, wooden signage hand-painted with love quotes, and jute runners along the aisle.",
      "The ceremony took place in the garden, with the Nilgiri hills as the most magnificent backdrop. Meera wore a beautiful pastel pink saree with fresh jasmine in her hair, while Karthik kept it classic in a cream kurta with a rose boutonnière.",
      "What made this wedding truly unique was the 'memory wall' — a collection of photographs tracing Meera and Karthik's journey from childhood friends to soulmates. Guests were moved to tears as they walked through a timeline of love.",
      "The dinner was a farm-to-table affair with locally sourced ingredients, served family-style on long wooden tables under string lights. The evening ended with a bonfire, hot chocolate, and stories shared by loved ones.",
      "Meera and Karthik's wedding reminded us why we do what we do — because love, in its simplest form, is the most beautiful celebration of all."
    ],
  },
  {
    id: "ananya-vikram",
    title: "Colors of Joy — Ananya & Vikram's Grand Celebration",
    excerpt: "A three-day extravaganza filled with vibrant decor, heartfelt rituals, and unforgettable moments.",
    image: wedding3,
    date: "January 20, 2025",
    category: "Client Story",
    content: [
      "If there's one word to describe Ananya & Vikram's wedding, it would be 'vibrant.' This was a celebration that embraced colour, culture, and joy in every possible way — a three-day extravaganza that left everyone with memories for a lifetime.",
      "Day one was the Mehendi and Sangeet — a riot of marigolds, fuchsia fabrics, and Rajasthani folk art installations. The couple surprised their families with a choreographed dance-off that had the entire crowd on their feet.",
      "Day two brought the Haldi ceremony, held in a sunlit courtyard decorated with yellow marigold curtains and turmeric-toned fabrics. It was intimate, emotional, and full of laughter as both families came together in joyful chaos.",
      "The main wedding on day three was nothing short of spectacular. A grand mandap adorned with thousands of red roses and gold accents stood at the centre of a palace-inspired venue. Ananya looked regal in a deep red Sabyasachi lehenga, while Vikram complemented her perfectly in a gold sherwani.",
      "The reception was a glamorous affair with a black-and-gold theme, crystal chandeliers, and a live orchestra. The couple entered to a shower of rose petals and sparklers, setting the tone for an unforgettable evening.",
      "Every moment was curated to reflect who Ananya and Vikram are — bold, joyful, and deeply in love. This wedding was a reminder that when you pour your heart into a celebration, magic happens."
    ],
  },
  {
    id: "sneha-rohit",
    title: "An Intimate Beach Affair — Sneha & Rohit",
    excerpt: "With the waves as their witness and the sunset as their backdrop, Sneha and Rohit exchanged vows in a ceremony that was as serene as it was beautiful.",
    image: wedding4,
    date: "December 10, 2024",
    category: "Client Story",
    content: [
      "Sneha and Rohit wanted their wedding to feel like a breath of fresh air — literally. As beach lovers who bonded over their shared passion for sunsets and ocean waves, a seaside ceremony was the only option that felt right.",
      "We chose a pristine stretch of beach in Mahabalipuram, where the golden sand met the turquoise sea. The setup was elegantly simple — a bamboo mandap draped in white chiffon and adorned with tropical flowers, surrounded by lanterns nestled in the sand.",
      "As the sun began its descent, painting the sky in shades of orange and pink, Sneha walked barefoot down an aisle of scattered rose petals. She wore a flowing ivory gown with delicate floral embroidery, her hair loose and adorned with a single orchid. Rohit, in a linen suit, couldn't hold back his tears.",
      "The ceremony was intimate — just 50 of their closest loved ones, seated on cushions in the sand. Personalised vows, a guitar rendition of their favourite song, and the sound of waves crashing in the background made it unforgettable.",
      "The reception transitioned seamlessly into a beach party under the stars. Fairy lights strung between palm trees, a seafood feast, and a bonfire with acoustic music created the most magical evening.",
      "Sneha and Rohit's wedding proved that you don't need grandeur to create something extraordinary — sometimes, all you need is love, sand, and a beautiful sunset."
    ],
  },
  {
    id: "divya-siddharth",
    title: "Heritage & Heart — Divya & Siddharth's Palace Wedding",
    excerpt: "A royal venue, timeless traditions, and a love story that felt like it was pulled from the pages of history.",
    image: wedding5,
    date: "November 5, 2024",
    category: "Client Story",
    content: [
      "Divya and Siddharth's love story reads like a modern fairy tale — and they wanted their wedding to reflect exactly that. When they chose a stunning heritage palace in Rajasthan as their venue, we knew we had the perfect canvas for something truly royal.",
      "The palace, with its intricate Mughal architecture and sprawling courtyards, needed minimal transformation. We enhanced its natural beauty with cascading flower arrangements, vintage brass lanterns, and rich velvet drapes in jewel tones.",
      "The Baraat was a spectacle — Siddharth arrived on a decorated horse, accompanied by a brass band and fireworks that lit up the evening sky. The energy was infectious, with guests dancing and celebrating as if the festivities would never end.",
      "Divya made a grand entrance from the palace's central staircase, a vision in a heavily embroidered gold and maroon lehenga, with a dupatta trail that flowed behind her like a royal cape. The mandap, set in the palace courtyard under a canopy of jasmine and roses, was a sight to behold.",
      "The reception dinner was served in the palace's grand hall — a sit-down affair with crystal-ware, gold cutlery, and a menu curated by a Michelin-trained chef. The couple's first dance took place under a dome of fairy lights and suspended floral chandeliers.",
      "This wedding was a tribute to heritage, tradition, and the timeless beauty of two families coming together. Divya and Siddharth didn't just have a wedding — they had a coronation of love."
    ],
  },
  {
    id: "lakshmi-arun",
    title: "The Garden of Dreams — Lakshmi & Arun",
    excerpt: "Floral arches, fairy lights, and a love that bloomed beautifully — Lakshmi and Arun's garden wedding was a dreamy affair.",
    image: wedding6,
    date: "October 18, 2024",
    category: "Client Story",
    content: [
      "Lakshmi had always dreamed of a garden wedding — one surrounded by flowers, soft music, and the people she loved most. When she and Arun came to us with this vision, we set out to create nothing less than a living fairy tale.",
      "The venue was a sprawling botanical garden on the outskirts of Chennai, with century-old trees, manicured hedges, and a natural pond that became the centrepiece of our design. We built a floral arch at the entrance — a towering structure of white roses, peonies, and trailing ivy that took guests' breath away.",
      "The ceremony space was set beside the pond, with floating candles and lotus flowers on the water's surface. Wooden chairs lined a petal-strewn aisle, and the mandap was a gorgeous open structure wrapped in wisteria and soft pink roses.",
      "Lakshmi wore a stunning blush pink lehenga with silver threadwork, perfectly complementing the garden's palette. Arun, in an off-white sherwani with a rose boutonnière, waited at the mandap with a smile that said everything words couldn't.",
      "As evening fell, the garden transformed — thousands of fairy lights illuminated the trees, and paper lanterns floated into the sky as the couple took their pheras. The dinner tables were adorned with low floral centrepieces and vintage glass candle holders, creating an intimate and romantic ambiance.",
      "The night ended with a surprise from Arun — a private serenade under a gazebo lit by candles, where he sang Lakshmi's favourite song. There wasn't a dry eye in the garden. This wedding was a testament to the beauty of dreaming big and the magic that happens when love leads the way."
    ],
  },
];
