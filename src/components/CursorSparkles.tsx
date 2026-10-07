import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

export const CursorSparkles: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let count = 0;
    const colors = ['#d4af37', '#e88d72', '#fdfbf7', '#f7e29b'];

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      // Throttle particle creation
      if (Math.random() > 0.4) return;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const newSparkle: Sparkle = {
        id: count++,
        x: clientX + (Math.random() - 0.5) * 16,
        y: clientY + (Math.random() - 0.5) * 16,
        size: Math.random() * 8 + 4,
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setSparkles((prev) => [...prev.slice(-15), newSparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);

    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((s) => ({ ...s, opacity: s.opacity - 0.08, y: s.y - 0.8 }))
          .filter((s) => s.opacity > 0)
      );
    }, 30);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-75"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            opacity: s.opacity,
          }}
        >
          <svg
            width={s.size}
            height={s.size}
            viewBox="0 0 24 24"
            fill={s.color}
            className="filter drop-shadow-[0_0_6px_rgba(212,175,55,0.8)]"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};
