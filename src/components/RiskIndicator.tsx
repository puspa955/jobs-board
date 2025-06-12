import { useState, useEffect } from "react";

interface RiskMetric {
  name: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  level: 'low' | 'medium' | 'high' | 'critical';
}

export const RiskIndicators = () => {
  const [metrics, setMetrics] = useState<RiskMetric[]>([
    { name: 'Global Stability', value: 72, trend: 'down', level: 'medium' },
    { name: 'Economic Risk', value: 45, trend: 'stable', level: 'low' },
    { name: 'Cyber Threats', value: 88, trend: 'up', level: 'high' },
    { name: 'Military Tensions', value: 63, trend: 'up', level: 'medium' },
    { name: 'Trade Disruption', value: 34, trend: 'down', level: 'low' },
    { name: 'Climate Impact', value: 76, trend: 'up', level: 'high' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(0, Math.min(100, metric.value + (Math.random() - 0.5) * 10)),
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'critical': return 'from-red-500 to-red-600';
      case 'high': return 'from-orange-500 to-orange-600';
      case 'medium': return 'from-yellow-500 to-yellow-600';
      case 'low': return 'from-green-500 to-green-600';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      case 'stable': return '→';
      default: return '→';
    }
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-purple-400">Risk Indicators</h3>
        <div className="text-xs text-slate-400">Updated: {new Date().toLocaleTimeString()}</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={metric.name} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-200">{metric.name}</span>
              <div className="flex items-center gap-1">
                <span className="text-lg">{getTrendIcon(metric.trend)}</span>
                <span className="text-sm text-slate-400">{metric.value}%</span>
              </div>
            </div>
            
            <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
              <div 
                className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(metric.level)} transition-all duration-1000`}
                style={{ width: `${metric.value}%` }}
              ></div>
            </div>
            
            <div className="flex justify-between text-xs">
              <span className="text-slate-400 capitalize">{metric.level} Risk</span>
              <span className="text-slate-500">0 - 100</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-3 bg-slate-800/30 rounded border border-cyan-500/20">
        <div className="text-sm text-cyan-400 font-medium mb-1">System Status</div>
        <div className="text-xs text-slate-300">All monitoring systems operational • AI analysis active • Data feeds synchronized</div>
      </div>
    </div>
  );
};
