import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Filter, X, Home, Building2, Factory, Hotel, LayoutGrid } from 'lucide-react';
import Image from '../components/Image';

const projectsData = [
  {
    id: 1,
    title: 'Tech Horizon IT Park',
    status: 'Ongoing',
    sector: 'IT Parks',
    subSector: 'Corporate Offices',
    location: 'Bangalore, Karnataka',
    image: '/assets/images/unsplash-9aaa201e.jpg'
  },
  {
    id: 2,
    title: 'Pinnacle Industrial Hub',
    status: 'Completed',
    sector: 'Industrial',
    subSector: 'Warehouses',
    location: 'Pune, Maharashtra',
    image: '/assets/images/unsplash-f56ee29e.jpg'
  },
  {
    id: 3,
    title: 'Oasis Luxury Resorts',
    status: 'Ongoing',
    sector: 'Hospitality',
    subSector: 'Luxury Resorts',
    location: 'Goa',
    image: '/assets/images/unsplash-9a890cba.jpg'
  },
  {
    id: 4,
    title: 'Cyber Nexus Center',
    status: 'Completed',
    sector: 'IT Parks',
    subSector: 'Data Centers',
    location: 'Hyderabad, Telangana',
    image: '/assets/images/unsplash-2772f525.jpg'
  },
  {
    id: 5,
    title: 'Apex Manufacturing Facility',
    status: 'Ongoing',
    sector: 'Industrial',
    subSector: 'Manufacturing Units',
    location: 'Chennai, Tamil Nadu',
    image: '/assets/images/unsplash-8885e333.jpg'
  },
  {
    id: 6,
    title: 'Grand Heritage Hotel',
    status: 'Completed',
    sector: 'Hospitality',
    subSector: 'Boutique Hotels',
    location: 'Jaipur, Rajasthan',
    image: '/assets/images/unsplash-a61062d8.jpg'
  },
  {
    id: 7,
    title: 'Aura Luxury Villas',
    status: 'Ongoing',
    sector: 'Residential',
    subSector: 'Luxury Villas',
    location: 'Mumbai, Maharashtra',
    image: '/assets/images/unsplash-e551d6bb.jpg'
  },
  {
    id: 8,
    title: 'Skyline Heights',
    status: 'Completed',
    sector: 'Residential',
    subSector: 'Apartments',
    location: 'Noida, UP',
    image: '/assets/images/unsplash-b78410a1.jpg'
  },
  {
    id: 9,
    title: 'Green Meadows Estate',
    status: 'Ongoing',
    sector: 'Residential',
    subSector: 'Gated Communities',
    location: 'Pune, Maharashtra',
    image: '/assets/images/unsplash-9356d126.jpg'
  }
];

const subFiltersMap = {
  'Residential': ['All', 'Luxury Villas', 'Apartments', 'Gated Communities'],
  'Industrial': ['All', 'Manufacturing Units', 'Warehouses', 'Logistics Hubs'],
  'IT Parks': ['All', 'Corporate Offices', 'Data Centers'],
  'Hospitality': ['All', 'Boutique Hotels', 'Luxury Resorts']
};

const ProjectsPage = () => {
  const [activeStatus, setActiveStatus] = useState('All');
  const [activeSector, setActiveSector] = useState('All');
  const [activeSubSector, setActiveSubSector] = useState('All');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleSectorChange = (sector) => {
    setActiveSector(sector);
    setActiveSubSector('All');
  };

  const filteredProjects = projectsData.filter(project => {
    const matchStatus = activeStatus === 'All' || project.status === activeStatus;
    const matchSector = activeSector === 'All' || project.sector === activeSector;
    const matchSubSector = activeSubSector === 'All' || project.subSector === activeSubSector;
    return matchStatus && matchSector && matchSubSector;
  });

  // Prevent scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileFiltersOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileFiltersOpen]);

  const SubFilterList = () => (
    <ul className="space-y-2">
      {subFiltersMap[activeSector]?.map(sub => (
        <li key={sub}>
          <button
            onClick={() => setActiveSubSector(sub)}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeSubSector === sub 
                ? 'bg-jyothi-green text-white shadow-md' 
                : 'bg-white/10 text-white hover:bg-white/20 hover:text-brand-secondary border border-transparent hover:border-white/30'
            }`}
          >
            {sub === 'All' ? `All ${activeSector}` : sub}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-transparent min-h-screen pt-24 pb-24">
      
      {/* Page Header */}
      <div className="container mx-auto px-6 max-w-7xl mb-12 text-center md:text-left">
        <h1 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">Our Portfolio</h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
          Projects Built on Trust
        </h2>
        <p className="text-gray-300 max-w-2xl mt-4 text-lg hidden md:block">
          Explore our extensive portfolio of world-class constructions across diverse sectors.
        </p>
      </div>

      {/* Top Filter Bar */}
      <div className="container mx-auto px-6 max-w-7xl mb-10">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/20 gap-4">
          
          {/* Status Filters */}
          <div className="flex space-x-2 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 hide-scrollbar">
            {['All', 'Ongoing', 'Completed'].map(status => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                  activeStatus === status 
                    ? 'bg-jyothi-green text-white shadow-md' 
                    : 'bg-white/10 text-white hover:text-brand-secondary border border-white/20 hover:bg-white/20'
                }`}
              >
                {status === 'All' ? 'All Status' : `${status} Projects`}
              </button>
            ))}
          </div>

          {/* Sector Filters & Mobile Sidebar Toggle */}
          <div className="flex justify-between w-full xl:w-auto gap-4 items-center">
            <div className="flex space-x-2 overflow-x-auto pb-2 xl:pb-0 hide-scrollbar flex-grow">
              {['All', 'IT Parks', 'Industrial', 'Hospitality', 'Residential'].map(sector => {
                const Icon = sector === 'IT Parks' ? Building2 :
                             sector === 'Industrial' ? Factory :
                             sector === 'Hospitality' ? Hotel :
                             sector === 'Residential' ? Home : LayoutGrid;
                return (
                <button
                  key={sector}
                  onClick={() => handleSectorChange(sector)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-colors whitespace-nowrap ${
                    activeSector === sector 
                      ? 'bg-brand-secondary text-white shadow-md' 
                      : 'bg-white/10 text-white hover:text-brand-secondary border border-white/20 hover:bg-white/20'
                  }`}
                >
                  <Icon size={16} className={activeSector === sector ? 'text-white' : 'text-brand-secondary'} />
                  {sector === 'All' ? 'All Sectors' : sector}
                </button>
              )})}
            </div>

            {/* Mobile Filter Toggle Button */}
            {activeSector !== 'All' && (
              <button 
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-jyothi-green text-white rounded-lg font-bold text-sm shadow-md whitespace-nowrap"
              >
                <Filter size={16} /> Filters
              </button>
            )}
          </div>
          
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row gap-8">
        
        {/* Desktop Sidebar Sub-filters */}
        <AnimatePresence>
          {activeSector !== 'All' && (
            <motion.aside 
              initial={{ width: 0, opacity: 0, marginRight: 0 }}
              animate={{ width: 256, opacity: 1, marginRight: 32 }}
              exit={{ width: 0, opacity: 0, marginRight: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block shrink-0 overflow-hidden"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 w-64">
                <h3 className="font-bold text-white mb-4 font-heading border-b border-white/20 pb-2">{activeSector} Categories</h3>
                <SubFilterList />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Grid */}
        <main className="flex-1">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gray-100"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jyothi-green/90 via-jyothi-green/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-4">
                    <span className="bg-white/90 backdrop-blur text-jyothi-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {project.subSector}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-white backdrop-blur shadow-sm ${project.status === 'Ongoing' ? 'bg-brand-secondary/90' : 'bg-gray-800/80'}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white font-heading mb-2">{project.title}</h3>
                    <div className="flex items-center text-gray-200 text-sm mb-4">
                      <MapPin size={16} className="mr-1 text-brand-secondary" />
                      {project.location}
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 text-sm font-bold text-jyothi-green bg-brand-secondary px-5 py-2.5 rounded-lg hover:bg-white transition-colors shadow-lg">
                        View Details <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/10 backdrop-blur-md rounded-2xl border border-dashed border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">No projects found</h3>
              <p className="text-gray-300">Try adjusting your filters to see more results.</p>
            </motion.div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Drawer for Sub-filters */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85%] bg-white shadow-2xl z-50 flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="text-xl font-extrabold text-jyothi-green font-heading">Filters</span>
                <button onClick={() => setMobileFiltersOpen(false)} className="text-gray-400 hover:text-brand-secondary bg-gray-50 rounded-full p-2 transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 overflow-y-auto flex-grow">
                <h3 className="font-bold text-brand-secondary mb-4 uppercase tracking-wider text-sm">{activeSector} Categories</h3>
                <SubFilterList />
              </div>
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <button 
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full py-3 bg-jyothi-green text-white font-bold rounded-lg hover:bg-brand-secondary transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Hide scrollbar utility class injected globally or locally */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default ProjectsPage;
