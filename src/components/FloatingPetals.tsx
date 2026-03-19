import { useEffect, useState } from "react";

const PETAL_COLORS = [
  "hsl(38 65% 50% / 0.6)",
  "hsl(350 45% 45% / 0.5)",
  "hsl(38 70% 65% / 0.4)",
  "hsl(30 25% 72% / 0.5)",
];

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const FloatingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 6 + Math.random() * 10,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 20,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    }));
    setPetals(generated);
  }, []);

  return (
    <>
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50% 0 50% 0",
            backgroundColor: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
};

export default FloatingPetals;
