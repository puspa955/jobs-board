import { MapPin, Clock, DollarSign } from 'lucide-react';
import { Job } from '../data/jobsData';

interface JobCardProps {
  job: Job;
  onApply: () => void;
}

export const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
            {job.logo}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {job.title}
            </h3>
            <p className="text-gray-600 text-sm">{job.company}</p>
          </div>
        </div>
        <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
          {job.type}
        </span>
      </div>

      {/* Job Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <MapPin className="h-4 w-4" />
          <span>{job.location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <DollarSign className="h-4 w-4" />
          <span>{job.salary}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Clock className="h-4 w-4" />
          <span>Posted {job.posted}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
        {job.description}
      </p>

      {/* Requirements */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
            >
              {req}
            </span>
          ))}
          {job.requirements.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-500">
              +{job.requirements.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={onApply}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Apply Now
      </button>
    </div>
  );
};