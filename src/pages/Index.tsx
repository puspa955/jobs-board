import { useState, useMemo } from 'react';
import { SearchInput } from '../components/SearchInput';
import { FilterPanel } from '../components/FilterPanel';
import { JobCard } from '../components/JobCard';
import { ApplyModal } from '../components/ApplyModal';
import { jobsData } from '../data/jobsData';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = !selectedLocation || job.location === selectedLocation;
      const matchesType = !selectedType || job.type === selectedType;
      
      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchTerm, selectedLocation, selectedType]);

  const locations = [...new Set(jobsData.map(job => job.location))];
  const types = [...new Set(jobsData.map(job => job.type))];

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Dream Jobs Board
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover your next career opportunity from top companies worldwide
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <div className="w-full lg:w-96">
              <SearchInput 
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search jobs or companies..."
              />
            </div>
            <FilterPanel
              locations={locations}
              types={types}
              selectedLocation={selectedLocation}
              selectedType={selectedType}
              onLocationChange={setSelectedLocation}
              onTypeChange={setSelectedType}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-gray-600 text-lg">
            Found <span className="font-semibold text-blue-600">{filteredJobs.length}</span> jobs
            {searchTerm && (
              <span> matching "<span className="font-medium">{searchTerm}</span>"</span>
            )}
          </p>
        </div>

        {/* Job Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={() => handleApply(job)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No jobs found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters</p>
            </div>
          </div>
        )}
      </div>

      {/* Apply Modal */}
      <ApplyModal
        job={selectedJob}
        isOpen={isApplyModalOpen}
        onClose={() => {
          setIsApplyModalOpen(false);
          setSelectedJob(null);
        }}
      />
    </div>
  );
};

export default Index;
