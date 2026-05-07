import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, LayoutGrid, Home, Building2, Factory, Zap } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    name: 'Jyothi Residency',
    location: 'Gorakhpur, UP',
    type: 'Residential',
    image: '/assets/images/8.jpg'
  },
  {
    id: 2,
    name: 'Pinnacle Corporate Hub',
    location: 'Bengaluru, KA',
    type: 'Commercial',
    image: '/assets/images/homepageinner.jpeg'
  },
  {
    id: 3,
    name: 'Industrial Excellence Park',
    location: 'Pune, MH',
    type: 'Industrial',
    image: '/assets/images/1.jpg'
  },
  {
    id: 4,
    name: 'Cyber Nexus Center',
    location: 'Hyderabad, TS',
    type: 'Commercial',
    image: '/assets/images/construction.jpeg'
  },
  {
    id: 5,
    name: 'Apex Manufacturing Unit',
    location: 'Chennai, TN',
    type: 'Industrial',
    image: '/assets/images/Fabrication images.jpeg'
  },
  {
    id: 6,
    name: 'Heritage Turnkey Project',
    location: 'Jaipur, RJ',
    type: 'Turnkey',
    image: '/assets/images/unsplash-a61062d8.jpg'
  },
  {
    id: 7,
    name: 'Elite Sky Villas',
    location: 'Mumbai, MH',
    type: 'Residential',
    image: '/assets/images/unsplash-e551d6bb.jpg'
  },
  {
    id: 8,
    name: 'Green Field Township',
    location: 'Noida, UP',
    type: 'Turnkey',
    image: '/assets/images/unsplash-b78410a1.jpg'
  },
  {
    id: 9,
    name: 'Urban Edge Plaza',
    location: 'Kolkata, WB',
    type: 'Commercial',
    image: '/assets/images/unsplash-9356d126.jpg'
  }
];

const categories = ["All", "Residential", "Commercial", "Industrial", "Turnkey"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.type === activeFilter);

  return (
    <div className="bg-jyothi-blue min-h-screen pt-24 md:pt-40">
      
      {/* Page Header Banner */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/2.jpg" 
            alt="Our Projects" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jyothi-blue/90 to-jyothi-blue"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.4em] text-xs mb-4 block">Portfolio</span>
            <h1 className="text-3xl md:text-7xl font-black text-white font-heading tracking-tighter">
              Our Featured <span className="text-jyothi-amber">Projects</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar - Horizontal Scroll on Mobile */}
      <section className="sticky top-20 z-50 bg-jyothi-blue/80 backdrop-blur-xl border-y border-white/5 py-3 md:py-4">
        <div className="container mx-auto px-6 max-w-7xl flex flex-row overflow-x-auto whitespace-nowrap gap-3 scrollbar-hide md:flex-wrap md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 md:px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all duration-300 border shrink-0 ${
                activeFilter === cat 
                ? 'bg-jyothi-amber border-jyothi-amber text-jyothi-blue shadow-lg' 
                : 'bg-white/5 border-white/10 text-white hover:border-jyothi-amber/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 md:py-12 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-jyothi-amber/50 transition-all duration-500 shadow-2xl h-auto flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-48 md:h-[60%] aspect-video md:aspect-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-jyothi-blue/20 group-hover:bg-transparent transition-all"></div>
                    
                    {/* Floating Type Badge */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-jyothi-amber/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-jyothi-blue">
                      {project.type}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="relative p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/20">
                    <div className="flex items-center gap-2 text-jyothi-amber text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                      <Zap size={12} /> Featured Project
                    </div>
                    <h3 className="text-2xl font-black text-white font-heading mb-3 group-hover:text-jyothi-amber transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                      <MapPin size={14} className="text-jyothi-amber" /> {project.location}
                    </div>

                    {/* Hover Pop-up Button */}
                    <div className="mt-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button className="w-full py-4 bg-jyothi-amber text-jyothi-blue font-black rounded-xl hover:bg-jyothi-orange hover:text-white transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-xl">
                        View Details <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-40 bg-white/5 rounded-[2.5rem] border border-dashed border-white/10">
              <LayoutGrid size={48} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400 font-medium">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
