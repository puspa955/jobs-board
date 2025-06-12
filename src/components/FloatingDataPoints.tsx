import { useEffect, useState } from "react";

interface DataPoint {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  color: string;
  speed: number;
}

export const FloatingDataPoints = () => {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

  useEffect(() => {
    const colors = ['#00ffff', '#0088ff', '#00ff88', '#ff0088', '#ffaa00'];
    const initialPoints = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.2,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.1,
    }));

    setDataPoints(initialPoints);

    const animatePoints = () => {
      setDataPoints(prev => prev.map(point => ({
        ...point,
        y: point.y > 100 ? -5 : point.y + point.speed,
        opacity: Math.sin(Date.now() * 0.001 + point.id) * 0.3 + 0.4,
      })));
    };

    const interval = setInterval(animatePoints, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dataPoints.map(point => (
        <div
          key={point.id}
          className="absolute w-1 h-1 rounded-full transition-all duration-100"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            backgroundColor: point.color,
            opacity: point.opacity,
            width: `${point.size}px`,
            height: `${point.size}px`,
            boxShadow: `0 0 ${point.size * 2}px ${point.color}`,
          }}
        />
      ))}
    </div>
  );
};
