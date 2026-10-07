import React, { useEffect, useRef } from 'react';

interface AmbientRoomCanvasProps {
  intensity?: 'full' | 'subtle';
}

export const AmbientRoomCanvas: React.FC<AmbientRoomCanvasProps> = ({ intensity = 'full' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Warm bokeh circles
    const bokehs = Array.from({ length: intensity === 'full' ? 22 : 12 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 90 + 40,
      baseAlpha: Math.random() * 0.25 + 0.08,
      alphaPulseSpeed: Math.random() * 0.002 + 0.001,
      alphaPhase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      // Colors strictly terracotta, warm amber gold, soft cream
      color: Math.random() > 0.5 
        ? 'rgba(212, 175, 55,'  // Warm Amber Gold
        : (Math.random() > 0.5 ? 'rgba(200, 109, 81,' : 'rgba(232, 141, 114,') // Terracotta
    }));

    // Floating embers / string light sparks
    const particles = Array.from({ length: intensity === 'full' ? 45 : 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.8,
      vy: -Math.random() * 0.4 - 0.15,
      vx: Math.sin(Math.random() * Math.PI) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      sparklePhase: Math.random() * Math.PI * 2
    }));

    // Warm hanging string lights curves
    const stringLightNodes = Array.from({ length: 9 }, (_, i) => ({
      x: (width / 8) * i,
      y: Math.sin((i / 8) * Math.PI) * 45 + 35,
      bulbGlow: Math.random() * 0.5 + 0.5,
      pulseSpeed: Math.random() * 0.03 + 0.01
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Rich dark warm room background gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2, height / 2, 10,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, '#2e1c18'); // Warm mahogany brown center
      bgGrad.addColorStop(0.5, '#221512'); // Terracotta shadow
      bgGrad.addColorStop(1, '#170e0c'); // Intimate room corner shadow

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Soft Bokeh Lights
      bokehs.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.radius) b.x = width + b.radius;
        if (b.x > width + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = height + b.radius;
        if (b.y > height + b.radius) b.y = -b.radius;

        const currentAlpha = b.baseAlpha + Math.sin(time * b.alphaPulseSpeed * 50 + b.alphaPhase) * 0.06;
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        grad.addColorStop(0, `${b.color}${Math.max(0, currentAlpha)})`);
        grad.addColorStop(0.7, `${b.color}${Math.max(0, currentAlpha * 0.3)})`);
        grad.addColorStop(1, `${b.color}0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Romantic Hanging String Lights across top
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.moveTo(0, 20);
      for (let i = 1; i < stringLightNodes.length; i++) {
        const prev = stringLightNodes[i - 1];
        const curr = stringLightNodes[i];
        const cpX = (prev.x + curr.x) / 2;
        const cpY = Math.max(prev.y, curr.y) + 15;
        ctx.quadraticCurveTo(cpX, cpY, curr.x, curr.y);
      }
      ctx.stroke();

      // String light glowing bulbs
      stringLightNodes.forEach((node) => {
        const glow = 0.5 + Math.sin(time * node.pulseSpeed * 4) * 0.3;
        
        // Bulb outer warm glow
        const bulbGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 22);
        bulbGrad.addColorStop(0, 'rgba(255, 235, 170, 0.9)');
        bulbGrad.addColorStop(0.3, `rgba(212, 175, 55, ${0.4 * glow})`);
        bulbGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');

        ctx.fillStyle = bulbGrad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 22, 0, Math.PI * 2);
        ctx.fill();

        // Bulb core
        ctx.fillStyle = '#fffdf5';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Floating candle embers / dust motes
      particles.forEach((p) => {
        p.y += p.vy;
        p.x += Math.sin(time + p.sparklePhase) * 0.3;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        const sparkleAlpha = p.alpha * (0.6 + Math.sin(time * 3 + p.sparklePhase) * 0.4);
        
        ctx.fillStyle = `rgba(247, 226, 155, ${sparkleAlpha})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
};
