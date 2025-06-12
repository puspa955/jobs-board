import { useEffect, useRef, useState } from "react";

export const DataVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      setRotation(prev => prev + 0.3);
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw data extraction visualization
    const websites = [
      { angle: 0, radius: 120, name: 'E-commerce', color: '#00ff88' },
      { angle: 72, radius: 140, name: 'Social Media', color: '#0088ff' },
      { angle: 144, radius: 110, name: 'Real Estate', color: '#ff0088' },
      { angle: 216, radius: 130, name: 'News Sites', color: '#ffaa00' },
      { angle: 288, radius: 125, name: 'Forums', color: '#88ff00' },
    ];

    // Draw central hub
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.fill();

    // Draw LATERICAL text in center
    ctx.fillStyle = '#00ffff';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('LATERICAL', centerX, centerY + 4);

    websites.forEach((site, index) => {
      const angle = (site.angle + rotation) * Math.PI / 180;
      const x = centerX + Math.cos(angle) * site.radius;
      const y = centerY + Math.sin(angle) * site.radius;

      // Draw data connection lines
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = `${site.color}40`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw website nodes
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, 2 * Math.PI);
      ctx.strokeStyle = site.color;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = `${site.color}20`;
      ctx.fill();

      // Draw data particles
      const particleAngle = angle + Math.sin(Date.now() * 0.005 + index) * 0.5;
      const particleDistance = site.radius * 0.7;
      const particleX = centerX + Math.cos(particleAngle) * particleDistance;
      const particleY = centerY + Math.sin(particleAngle) * particleDistance;

      ctx.beginPath();
      ctx.arc(particleX, particleY, 3, 0, 2 * Math.PI);
      ctx.fillStyle = site.color;
      ctx.fill();

      // Add glow effect
      ctx.shadowColor = site.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(particleX, particleY, 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw extraction indicators
    for (let i = 0; i < 8; i++) {
      const angle = (i * 45 + rotation * 2) * Math.PI / 180;
      const distance = 60 + Math.sin(Date.now() * 0.003 + i) * 10;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fillStyle = '#00ffff';
      ctx.fill();
    }

  }, [rotation]);

  return (
    <div className="relative flex justify-center items-center">
      <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,255,255,0.2)]">
        <canvas 
          ref={canvasRef}
          width={400}
          height={300}
          className="max-w-full h-auto opacity-80"
        />
        <div className="text-center mt-4">
          <div className="text-cyan-400 font-mono text-sm">Real-time Data Extraction</div>
          <div className="text-slate-400 text-xs mt-1">5 Active Sources • 1.2M Records/Hour</div>
        </div>
      </div>
    </div>
  );
};
