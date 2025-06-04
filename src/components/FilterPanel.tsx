import { MapPin, Briefcase, X } from 'lucide-react';

interface FilterPanelProps {
  locations: string[];
  types: string[];
  selectedLocation: string;
  selectedType: string;
  onLocationChange: (location: string) => void;
  onTypeChange: (type: string) => void;
}

export const FilterPanel = ({
  locations,
  types,
  selectedLocation,
  selectedType,
  onLocationChange,
  onTypeChange,
}: FilterPanelProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Location Filter */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
          <MapPin className="h-4 w-4 text-gray-400" />
        </div>
        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="pl-9 pr-8 py-3 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer min-w-[150px]"
        >
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Type Filter */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
          <Briefcase className="h-4 w-4 text-gray-400" />
        </div>
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="pl-9 pr-8 py-3 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer min-w-[130px]"
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters */}
      {(selectedLocation || selectedType) && (
        <button
          onClick={() => {
            onLocationChange('');
            onTypeChange('');
          }}
          className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <X className="h-4 w-4" />
          <span className="text-sm font-medium">Clear</span>
        </button>
      )}
    </div>
  );
};