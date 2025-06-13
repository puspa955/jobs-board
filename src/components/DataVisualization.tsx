import { useEffect, useRef, useState } from "react";

export const DataVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.3);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.clearRect(0, 0, width, height);

    const websites = [
      { angle: 0, radius: 180, name: 'E-commerce', color: '#00ff88' },
      { angle: 72, radius: 200, name: 'Social Media', color: '#0088ff' },
      { angle: 144, radius: 170, name: 'Real Estate', color: '#ff0088' },
      { angle: 216, radius: 190, name: 'News Sites', color: '#ffaa00' },
      { angle: 288, radius: 175, name: 'Forums', color: '#88ff00' },
    ];

    // Draw central hub
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, 2 * Math.PI);
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.fill();

    // Draw center label
    ctx.fillStyle = '#00ffff';
    ctx.font = 'bold 16px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('LATERICAL', centerX, centerY + 6);

    websites.forEach((site, index) => {
      const angle = (site.angle + rotation) * Math.PI / 180;
      const x = centerX + Math.cos(angle) * site.radius;
      const y = centerY + Math.sin(angle) * site.radius;

      // Lines
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = `${site.color}40`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Nodes
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.strokeStyle = site.color;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = `${site.color}20`;
      ctx.fill();

      // Particles
      const particleAngle = angle + Math.sin(Date.now() * 0.005 + index) * 0.5;
      const particleDistance = site.radius * 0.7;
      const particleX = centerX + Math.cos(particleAngle) * particleDistance;
      const particleY = centerY + Math.sin(particleAngle) * particleDistance;

      ctx.beginPath();
      ctx.arc(particleX, particleY, 4, 0, 2 * Math.PI);
      ctx.fillStyle = site.color;
      ctx.fill();

      // Glow effect
      ctx.shadowColor = site.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(particleX, particleY, 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw extraction indicators
    for (let i = 0; i < 10; i++) {
      const angle = (i * 36 + rotation * 2) * Math.PI / 180;
      const distance = 80 + Math.sin(Date.now() * 0.003 + i) * 15;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = '#00ffff';
      ctx.fill();
    }

  }, [rotation]);

  return (
    <div className="relative flex justify-center items-center">
      <div className="">
        <canvas 
          ref={canvasRef}
          width={800} // <-- Actual canvas pixel width
          height={600} // <-- Actual canvas pixel height
          className="w-[800px] h-[600px] opacity-90"
        />
      </div>
    </div>
  );
};
