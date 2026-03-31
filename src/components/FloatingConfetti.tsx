import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const COLORS = [
  "hsl(345, 40%, 65%)",
  "hsl(38, 60%, 70%)",
  "hsl(40, 70%, 50%)",
  "hsl(345, 50%, 85%)",
  "hsl(10, 40%, 90%)",
];

const FloatingConfetti = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const p: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      p.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 8 + 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        duration: Math.random() * 6 + 8,
        delay: Math.random() * 10,
      });
    }
    setParticles(p);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            borderRadius: 1,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: "infinite",
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingConfetti;
