import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

interface CakeCanvasProps {
  onCandlesBlown: () => void;
}

export const CakeCanvas: React.FC<CakeCanvasProps> = ({ onCandlesBlown }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [candlesLit, setCandlesLit] = useState<boolean[]>([true, true, true]);
  const [isBlown, setIsBlown] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const render = () => {
      time += 0.04;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const cakeBaseY = 240;

      // 1. Ambient Warm Cake Glow
      const glowGrad = ctx.createRadialGradient(centerX, cakeBaseY - 40, 10, centerX, cakeBaseY - 40, 180);
      glowGrad.addColorStop(0, 'rgba(247, 226, 155, 0.4)');
      glowGrad.addColorStop(0.5, 'rgba(200, 109, 81, 0.2)');
      glowGrad.addColorStop(1, 'rgba(31, 25, 23, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, cakeBaseY - 40, 180, 0, Math.PI * 2);
      ctx.fill();

      // 2. Cake Stand / Plate
      ctx.fillStyle = '#d4af37';
      ctx.beginPath();
      ctx.ellipse(centerX, cakeBaseY + 50, 150, 20, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f7e29b';
      ctx.beginPath();
      ctx.ellipse(centerX, cakeBaseY + 45, 140, 16, 0, 0, Math.PI * 2);
      ctx.fill();

      // 3. Cake Bottom Layer (Terracotta & Cream frosting)
      ctx.fillStyle = '#96432d'; // Dark Terracotta base
      ctx.beginPath();
      ctx.ellipse(centerX, cakeBaseY + 30, 115, 30, 0, 0, Math.PI);
      ctx.fill();
      ctx.rect(centerX - 115, cakeBaseY - 30, 230, 60);
      ctx.fill();
      ctx.fillStyle = '#c86d51';
      ctx.beginPath();
      ctx.ellipse(centerX, cakeBaseY - 30, 115, 30, 0, 0, Math.PI * 2);
      ctx.fill();

      // Cream Frosting Dripping Effect
      ctx.fillStyle = '#fdfbf7';
      for (let i = 0; i < 9; i++) {
        const x = centerX - 100 + i * 25;
        const dripH = Math.sin(i * 1.5 + time * 0.5) * 6 + 18;
        ctx.beginPath();
        ctx.arc(x, cakeBaseY - 25, 13, 0, Math.PI);
        ctx.rect(x - 13, cakeBaseY - 38, 26, dripH);
        ctx.fill();
      }

      // 4. Cake Top Layer (Cream white & Gold decor)
      const topCakeY = cakeBaseY - 70;
      ctx.fillStyle = '#fdfbf7';
      ctx.beginPath();
      ctx.ellipse(centerX, topCakeY + 25, 80, 22, 0, 0, Math.PI);
      ctx.fill();
      ctx.rect(centerX - 80, topCakeY - 20, 160, 45);
      ctx.fill();
      ctx.fillStyle = '#fffdf9';
      ctx.beginPath();
      ctx.ellipse(centerX, topCakeY - 20, 80, 22, 0, 0, Math.PI * 2);
      ctx.fill();

      // Gold Piping Border around top layer
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(centerX, topCakeY - 20, 80, 22, 0, 0, Math.PI * 2);
      ctx.stroke();

      // 5. Three Candles
      const candlePositions = [centerX - 40, centerX, centerX + 40];
      const candleY = topCakeY - 20;

      candlePositions.forEach((x, idx) => {
        const isLit = candlesLit[idx];

        // Candle stick (Striped Cream & Terracotta)
        ctx.fillStyle = idx % 2 === 0 ? '#f3d3c8' : '#e88d72';
        ctx.fillRect(x - 5, candleY - 45, 10, 45);

        // Candle wick
        ctx.strokeStyle = '#1f1917';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, candleY - 45);
        ctx.lineTo(x, candleY - 53);
        ctx.stroke();

        if (isLit) {
          // Flame flickering animation
          const flickerX = Math.sin(time * 6 + idx * 2) * 2;
          const flickerY = Math.cos(time * 8 + idx * 2) * 2;

          // Outer flame halo
          const flameGrad = ctx.createRadialGradient(
            x + flickerX, candleY - 65 + flickerY, 2,
            x + flickerX, candleY - 65 + flickerY, 18
          );
          flameGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
          flameGrad.addColorStop(0.4, 'rgba(247, 226, 155, 0.9)');
          flameGrad.addColorStop(0.8, 'rgba(200, 109, 81, 0.5)');
          flameGrad.addColorStop(1, 'rgba(200, 109, 81, 0)');

          ctx.fillStyle = flameGrad;
          ctx.beginPath();
          ctx.arc(x + flickerX, candleY - 65 + flickerY, 18, 0, Math.PI * 2);
          ctx.fill();

          // Flame Core Shape
          ctx.fillStyle = '#fffdf7';
          ctx.beginPath();
          ctx.moveTo(x + flickerX, candleY - 74 + flickerY);
          ctx.quadraticCurveTo(x + 7 + flickerX, candleY - 62, x + flickerX, candleY - 54);
          ctx.quadraticCurveTo(x - 7 + flickerX, candleY - 62, x + flickerX, candleY - 74 + flickerY);
          ctx.fill();
        } else {
          // Smoke puff rising from blown candle
          ctx.fillStyle = 'rgba(253, 251, 247, 0.35)';
          const smokeY = candleY - 55 - (time * 15 % 30);
          const smokeX = x + Math.sin(smokeY * 0.1) * 6;
          ctx.beginPath();
          ctx.arc(smokeX, smokeY, 4, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [candlesLit]);

  const handleBlowCandles = () => {
    setCandlesLit([false, false, false]);
    setIsBlown(true);

    // Confetti celebration explosion strictly in terracotta, gold, and cream!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c86d51', '#d4af37', '#fdfbf7', '#e88d72', '#8a9a86'],
    });

    onCandlesBlown();
  };

  const handleRelight = () => {
    setCandlesLit([true, true, true]);
    setIsBlown(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center my-6">
      {/* HTML5 Canvas Cake */}
      <canvas
        ref={canvasRef}
        width={420}
        height={320}
        className="max-w-full cursor-pointer filter drop-shadow-[0_10px_25px_rgba(212,175,55,0.3)] transition-transform hover:scale-105"
        onClick={isBlown ? handleRelight : handleBlowCandles}
      />

      {/* Interactive CTA button below cake */}
      <div className="mt-2 text-center">
        {!isBlown ? (
          <button
            onClick={handleBlowCandles}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-terracotta-500 to-amberGold-500 text-cream-100 font-semibold text-sm shadow-[0_0_20px_rgba(200,109,81,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all transform hover:-translate-y-0.5 animate-pulse"
          >
            Click to Blow Out Candles 
          </button>
        ) : (
          <button
            onClick={handleRelight}
            className="px-5 py-2 rounded-full bg-cream-900/80 text-amberGold-300 border border-amberGold-500/40 text-xs font-medium hover:bg-cream-900 transition-all"
          >
            🕯️ Relight Candles
          </button>
        )}
      </div>
    </div>
  );
};
