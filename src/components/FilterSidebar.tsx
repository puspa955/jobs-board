import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSidebarProps {
  selectedFilters: {
    category: string;
    region: string;
    intensity: string;
  };
  onFiltersChange: (filters: any) => void;
}

export const FilterSidebar = ({ selectedFilters, onFiltersChange }: FilterSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const categories = ['all', 'military', 'economic', 'cyber', 'political', 'environmental'];
  const regions = ['all', 'europe', 'asia pacific', 'middle east', 'americas', 'africa'];
  const intensities = ['all', 'low', 'medium', 'high', 'critical'];

  const handleFilterChange = (filterType: string, value: string) => {
    onFiltersChange({
      ...selectedFilters,
      [filterType]: value
    });
  };

  return (
    <aside className={`fixed left-0 top-0 h-full bg-slate-900/80 backdrop-blur-md border-r border-cyan-500/20 transition-all duration-300 z-40 ${isCollapsed ? 'w-16' : 'w-80'} lg:w-80`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          {!isCollapsed && (
            <h2 className="text-lg font-bold text-cyan-400">Threat Filters</h2>
          )}
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 text-cyan-400 hover:bg-cyan-500/10 rounded lg:hidden"
          >
            {isCollapsed ? <ChevronDown /> : <ChevronUp />}
          </button>
        </div>

        {!isCollapsed && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Category</label>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleFilterChange('category', category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 capitalize text-sm ${
                      selectedFilters.category === category
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Region</label>
              <div className="space-y-2">
                {regions.map(region => (
                  <button
                    key={region}
                    onClick={() => handleFilterChange('region', region)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 capitalize text-sm ${
                      selectedFilters.region === region
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Intensity</label>
              <div className="space-y-2">
                {intensities.map(intensity => (
                  <button
                    key={intensity}
                    onClick={() => handleFilterChange('intensity', intensity)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 capitalize text-sm ${
                      selectedFilters.intensity === intensity
                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/50'
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                    }`}
                  >
                    {intensity}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <div className="text-xs text-slate-500 space-y-1">
                <div>Active Monitors: 247</div>
                <div>Data Sources: 156</div>
                <div>Last Update: {new Date().toLocaleTimeString()}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
