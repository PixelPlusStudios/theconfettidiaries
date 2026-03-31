import { useEffect, useState, useCallback, useRef } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

const SparkleTrail = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const idRef = useRef(0);

  const addSparkle = useCallback((e: MouseEvent) => {
    const newSparkle: Sparkle = {
      id: idRef.current++,
      x: e.clientX + (Math.random() - 0.5) * 20,
      y: e.clientY + (Math.random() - 0.5) * 20,
      size: Math.random() * 6 + 3,
    };
    setSparkles((prev) => [...prev.slice(-15), newSparkle]);
  }, []);

  useEffect(() => {
    let throttle = false;
    const handleMove = (e: MouseEvent) => {
      if (throttle) return;
      throttle = true;
      setTimeout(() => { throttle = false; }, 50);
      addSparkle(e);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [addSparkle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => prev.filter((s) => Date.now() - s.id < 1000));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            background: `radial-gradient(circle, hsl(40, 80%, 65%) 0%, transparent 70%)`,
            boxShadow: `0 0 ${sparkle.size * 2}px hsl(40, 80%, 65%), 0 0 ${sparkle.size * 4}px hsl(345, 40%, 65%)`,
            animation: "sparkle 0.8s ease-out forwards",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default SparkleTrail;
