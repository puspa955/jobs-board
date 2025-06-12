import { useState, useEffect } from "react";

interface Alert {
  id: string;
  title: string;
  category: string;
  region: string;
  intensity: string;
  timestamp: string;
  description: string;
}

interface AlertsPanelProps {
  filters: {
    category: string;
    region: string;
    intensity: string;
  };
}

export const AlertsPanel = ({ filters }: AlertsPanelProps) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const generateAlerts = () => {
    const categories = ['Military', 'Economic', 'Cyber', 'Political', 'Environmental'];
    const regions = ['Europe', 'Asia-Pacific', 'Middle East', 'Americas', 'Africa'];
    const intensities = ['Low', 'Medium', 'High', 'Critical'];
    
    const sampleTitles = [
      'Border Tensions Escalating',
      'Economic Sanctions Imposed',
      'Cyber Attack Detected',
      'Political Unrest Reported',
      'Supply Chain Disruption',
      'Military Exercise Detected',
      'Trade Agreement Suspended',
      'Infrastructure Failure',
    ];

    return Array.from({ length: 12 }, (_, i) => ({
      id: `alert-${i}`,
      title: sampleTitles[Math.floor(Math.random() * sampleTitles.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      region: regions[Math.floor(Math.random() * regions.length)],
      intensity: intensities[Math.floor(Math.random() * intensities.length)],
      timestamp: new Date(Date.now() - Math.random() * 86400000).toLocaleTimeString(),
      description: 'Detailed analysis pending. Monitoring situation developments.',
    }));
  };

  useEffect(() => {
    setAlerts(generateAlerts());
    const interval = setInterval(() => {
      setAlerts(prev => {
        const newAlert = generateAlerts()[0];
        return [newAlert, ...prev.slice(0, 11)];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredAlerts = alerts.filter(alert => {
    return (filters.category === 'all' || alert.category.toLowerCase() === filters.category) &&
           (filters.region === 'all' || alert.region.toLowerCase().replace('-', ' ') === filters.region) &&
           (filters.intensity === 'all' || alert.intensity.toLowerCase() === filters.intensity);
  });

  const getIntensityColor = (intensity: string) => {
    switch (intensity.toLowerCase()) {
      case 'critical': return 'text-red-400 border-red-500/50';
      case 'high': return 'text-orange-400 border-orange-500/50';
      case 'medium': return 'text-yellow-400 border-yellow-500/50';
      case 'low': return 'text-green-400 border-green-500/50';
      default: return 'text-slate-400 border-slate-500/50';
    }
  };

  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-cyan-400">Live Alerts</h3>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/30">
        {filteredAlerts.map((alert, index) => (
          <div 
            key={alert.id}
            className={`p-4 bg-slate-800/50 border rounded-lg transition-all duration-300 hover:border-cyan-400/50 ${getIntensityColor(alert.intensity)} ${index === 0 ? 'animate-fade-in' : ''}`}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-sm">{alert.title}</h4>
              <span className="text-xs text-slate-400">{alert.timestamp}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="px-2 py-1 bg-slate-700 rounded">{alert.category}</span>
              <span className="px-2 py-1 bg-slate-700 rounded">{alert.region}</span>
              <span className={`px-2 py-1 rounded ${getIntensityColor(alert.intensity)}`}>
                {alert.intensity}
              </span>
            </div>
            <p className="text-xs text-slate-300">{alert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
