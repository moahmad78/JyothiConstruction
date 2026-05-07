import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Search, Filter, Briefcase } from 'lucide-react';
import CareerForm from '../components/CareerForm';

const jobCategories = ["All Roles", "Civil Engineering", "Project Management", "Site Supervision", "Administrative"];

const initialJobs = [
  {
    id: 1,
    title: 'Senior Civil Engineer',
    location: 'Bangalore, KA',
    type: 'Full-time',
    category: 'Civil Engineering',
    description: 'Lead structural design and oversee infrastructure projects with precision and quality control.'
  },
  {
    id: 2,
    title: 'Project Manager',
    location: 'Mumbai, MH',
    type: 'Full-time',
    category: 'Project Management',
    description: 'End-to-end management of large-scale commercial and residential landmarks.'
  },
  {
    id: 3,
    title: 'Site Supervisor',
    location: 'Pune, MH',
    type: 'Contract',
    category: 'Site Supervision',
    description: 'Ensure daily operations on-site meet our rigorous safety and quality standards.'
  },
  {
    id: 4,
    title: 'Design Coordinator',
    location: 'Bangalore, KA',
    type: 'Full-time',
    category: 'Civil Engineering',
    description: 'Coordinate between architectural designs and structural engineering requirements.'
  },
  {
    id: 5,
    title: 'Operations Lead',
    location: 'Hyderabad, TS',
    type: 'Full-time',
    category: 'Administrative',
    description: 'Streamline procurement and operational workflows for national projects.'
  },
  {
    id: 6,
    title: 'Safety Engineer',
    location: 'Chennai, TN',
    type: 'Full-time',
    category: 'Site Supervision',
    description: 'Implement and monitor world-class safety protocols across all construction sites.'
  }
];

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Roles");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = activeCategory === "All Roles" 
    ? initialJobs 
    : initialJobs.filter(job => job.category === activeCategory);

  return (
    <>
      <div className="bg-jyothi-blue min-h-screen pt-24 md:pt-40 pb-12 md:pb-24 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jyothi-amber/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.4em] text-xs mb-4 block">Careers Portal</span>
            <h1 className="text-4xl md:text-7xl font-black text-white font-heading mb-6 tracking-tighter">
              Join Our <span className="text-jyothi-amber">Legacy</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Building the foundations of tomorrow starts with the right people. Explore our open positions.
            </p>
          </motion.div>

          {/* Filter Bar - Horizontal Scroll on Mobile */}
          <div className="flex flex-row overflow-x-auto whitespace-nowrap gap-3 mb-10 pb-4 scrollbar-hide md:flex-wrap md:justify-center">
            {jobCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 md:px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 border shrink-0 ${
                  activeCategory === cat 
                  ? 'bg-jyothi-amber border-jyothi-amber text-jyothi-blue shadow-lg shadow-jyothi-amber/20' 
                  : 'bg-white/5 border-white/10 text-white hover:border-jyothi-amber/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredJobs.map((job) => (
                <motion.div 
                  key={job.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-jyothi-amber/50 transition-all duration-500 group relative flex flex-col h-full shadow-xl"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-jyothi-amber/10 p-3 rounded-2xl border border-jyothi-amber/20 group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all duration-500">
                      <Briefcase size={24} className="text-jyothi-amber group-hover:text-jyothi-blue" />
                    </div>
                    <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white font-heading mb-2 group-hover:text-jyothi-amber transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-gray-500 text-[10px] font-black uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><MapPin size={12} className="text-jyothi-amber" /> {job.location}</span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {job.description}
                  </p>

                  <button 
                    onClick={() => setSelectedJob(job)}
                    className="w-full py-4 bg-white/5 border border-white/20 text-white font-black rounded-xl hover:bg-jyothi-amber hover:text-jyothi-blue hover:border-jyothi-amber transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 group/btn"
                  >
                    Apply Now <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredJobs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-dashed border-white/10"
            >
              <Filter size={48} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400 font-medium">No positions found in this category. Try another filter.</p>
            </motion.div>
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedJob && (
          <CareerForm 
            job={selectedJob} 
            onClose={() => setSelectedJob(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CareersPage;
