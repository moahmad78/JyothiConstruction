import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Briefcase, Plus, Edit2, Trash2, Lock, Unlock, RotateCcw, CheckCircle2 } from 'lucide-react';
import CareerForm from '../components/CareerForm';
import JobAdminModal from '../components/JobAdminModal';

const STORAGE_KEY = 'jyothi_careers_jobs';

const defaultJobs = [
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
  // Retrieve stored postings or fall back to default catalog
  const [jobs, setJobs] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Error loading jobs from localStorage:', e);
    }
    return defaultJobs;
  });

  const [activeCategory, setActiveCategory] = useState("All Roles");
  const [selectedJob, setSelectedJob] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Track admin authentication state
  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem('jyothi_admin_logged_in') === 'true';
  });

  const [adminModal, setAdminModal] = useState({
    isOpen: false,
    mode: 'login', // 'login' | 'create' | 'edit'
    job: null
  });

  // Persist modified jobs list to browser storage
  const saveJobsToStorage = (updatedJobs) => {
    setJobs(updatedJobs);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedJobs));
    } catch (e) {
      console.error('Error saving jobs to localStorage:', e);
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  // Admin auth session handlers
  const handleLoginSuccess = () => {
    sessionStorage.setItem('jyothi_admin_logged_in', 'true');
    setIsAdmin(true);
    showToast('Admin Mode Activated! You can now create, edit, or delete job roles.');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('jyothi_admin_logged_in');
    setIsAdmin(false);
    showToast('Admin logged out.');
  };

  // Create or update job posting
  const handleSaveJob = (jobData) => {
    if (adminModal.mode === 'edit') {
      const updated = jobs.map(j => j.id === jobData.id ? { ...j, ...jobData } : j);
      saveJobsToStorage(updated);
      showToast(`Job "${jobData.title}" updated successfully!`);
    } else {
      const newJob = { ...jobData, id: Date.now() };
      const updated = [newJob, ...jobs];
      saveJobsToStorage(updated);
      showToast(`New job "${jobData.title}" published!`);
    }
  };

  // Remove job posting
  const handleDeleteJob = (jobId, jobTitle) => {
    if (window.confirm(`Are you sure you want to delete the job role: "${jobTitle}"?`)) {
      const updated = jobs.filter(j => j.id !== jobId);
      saveJobsToStorage(updated);
      showToast(`Job "${jobTitle}" has been removed.`);
    }
  };

  // Revert to baseline company roles
  const handleResetDefaults = () => {
    if (window.confirm('Reset all job roles back to system defaults? Any custom roles will be replaced.')) {
      saveJobsToStorage(defaultJobs);
      showToast('All jobs reset to default listings.');
    }
  };

  // Compute unique departments for filter navigation
  const dynamicCategories = ["All Roles", ...Array.from(new Set(jobs.map(j => j.category))).filter(Boolean)];

  const filteredJobs = activeCategory === "All Roles" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  return (
    <>
      <div className="bg-jyothi-blue min-h-screen pt-24 md:pt-40 pb-12 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-jyothi-amber/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-jyothi-amber font-black uppercase tracking-[0.4em] text-xs block">Careers Portal</span>
              
              {!isAdmin ? (
                <button
                  onClick={() => setAdminModal({ isOpen: true, mode: 'login', job: null })}
                  title="HR Admin Login"
                  className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:border-jyothi-amber/50 text-gray-400 hover:text-jyothi-amber transition-colors flex items-center gap-1.5 text-[10px] font-bold tracking-wider"
                >
                  <Lock size={12} /> HR Admin
                </button>
              ) : null}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading mb-4 tracking-tighter">
              Join Our <span className="text-jyothi-amber">Legacy</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              Building the foundations of tomorrow starts with the right people. Explore our open positions.
            </p>
          </motion.div>

          <AnimatePresence>
            {isAdmin && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-jyothi-amber/20 via-jyothi-amber/10 to-transparent border border-jyothi-amber/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-jyothi-amber text-jyothi-blue flex items-center justify-center font-bold shadow-md">
                    <Unlock size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm md:text-base font-heading">
                      HR Job Management Mode Active
                    </h4>
                    <p className="text-gray-300 text-xs">
                      You can add new roles, edit requirements, or remove listed positions in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <button
                    onClick={() => setAdminModal({ isOpen: true, mode: 'create', job: null })}
                    className="flex-1 md:flex-none px-5 py-2.5 bg-jyothi-amber text-jyothi-blue rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-jyothi-orange hover:text-white transition-colors shadow-lg"
                  >
                    <Plus size={16} /> Post New Role
                  </button>
                  <button
                    onClick={handleResetDefaults}
                    title="Reset to default listings"
                    className="px-4 py-2.5 bg-white/5 border border-white/20 text-gray-300 hover:text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw size={14} /> Reset
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2.5 bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Exit Admin
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-24 right-6 z-50 px-5 py-3 rounded-2xl bg-jyothi-blue border border-jyothi-amber shadow-2xl text-white text-xs font-bold flex items-center gap-3"
              >
                <CheckCircle2 size={18} className="text-jyothi-amber shrink-0" />
                <span>{toastMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-row overflow-x-auto whitespace-nowrap gap-3 mb-10 pb-4 scrollbar-hide md:flex-wrap md:justify-center">
            {dynamicCategories.map((cat) => (
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

                    <div className="flex items-center gap-2">
                      <span className="px-3.5 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-300">
                        {job.type}
                      </span>

                      {isAdmin && (
                        <div className="flex items-center gap-1.5 ml-1">
                          <button
                            onClick={() => setAdminModal({ isOpen: true, mode: 'edit', job })}
                            title="Edit Job"
                            className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteJob(job.id, job.title)}
                            title="Delete Job"
                            className="p-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white font-heading mb-2 group-hover:text-jyothi-amber transition-colors">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-jyothi-amber" /> {job.location}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">
                      {job.category}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
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

          {filteredJobs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-dashed border-white/10"
            >
              <Briefcase size={48} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400 font-medium mb-3">No positions found in this category.</p>
              {isAdmin && (
                <button
                  onClick={() => setAdminModal({ isOpen: true, mode: 'create', job: null })}
                  className="px-6 py-3 bg-jyothi-amber text-jyothi-blue font-black rounded-xl text-xs uppercase tracking-wider hover:bg-jyothi-orange hover:text-white transition-colors"
                >
                  + Post a Role Now
                </button>
              )}
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

      <JobAdminModal
        isOpen={adminModal.isOpen}
        mode={adminModal.mode}
        jobToEdit={adminModal.job}
        onClose={() => setAdminModal({ isOpen: false, mode: 'login', job: null })}
        onLoginSuccess={handleLoginSuccess}
        onSaveJob={handleSaveJob}
      />
    </>
  );
};

export default CareersPage;
