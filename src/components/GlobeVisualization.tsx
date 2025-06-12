import { useEffect, useRef, useState } from "react";

export const GlobeVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      setRotation(prev => prev + 0.5);
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
    const radius = 150;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw globe outline
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#00D4FF';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw latitude lines
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + i * 40, radius, 20, 0, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(0, 212, 255, ${0.3 - Math.abs(i) * 0.05})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw longitude lines
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI / 4) + (rotation * Math.PI / 180);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, Math.abs(Math.cos(angle)) * radius, radius, 0, 0, 2 * Math.PI);
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 + Math.abs(Math.cos(angle)) * 0.3})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw threat points
    const threats = [
      { lat: 30, lng: rotation + 45, level: 'high' },
      { lat: -20, lng: rotation + 120, level: 'medium' },
      { lat: 50, lng: rotation + 200, level: 'low' },
      { lat: -40, lng: rotation + 300, level: 'high' },
    ];

    threats.forEach(threat => {
      const x = centerX + Math.cos(threat.lng * Math.PI / 180) * Math.cos(threat.lat * Math.PI / 180) * radius * 0.8;
      const y = centerY + Math.sin(threat.lat * Math.PI / 180) * radius * 0.8;
      
      const colors = {
        high: '#FF0080',
        medium: '#FFAA00',
        low: '#00FF80'
      };

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = colors[threat.level as keyof typeof colors];
      ctx.fill();
      
      // Pulse effect
      ctx.beginPath();
      ctx.arc(x, y, 8 + Math.sin(Date.now() * 0.01) * 3, 0, 2 * Math.PI);
      ctx.strokeStyle = colors[threat.level as keyof typeof colors];
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1;
    });

  }, [rotation]);

  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-30">
      <canvas 
        ref={canvasRef}
        width={400}
        height={400}
        className="max-w-full h-auto"
      />
    </div>
  );
};
