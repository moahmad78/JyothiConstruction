import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, LayoutGrid, Home, Building2, Factory, Zap } from 'lucide-react';

const projectsData = [
  // Commercial Projects
  {
    id: 1,
    name: 'High-Rise Commercial & Residential Towers',
    location: 'Bangalore, Karnataka',
    type: 'Commercial',
    desc: 'Multi-storey structural execution featuring high-performance concrete pumping and precision batching.',
    image: '/assets/images/our_works/2.jpg'
  },
  {
    id: 2,
    name: 'Corporate Tech Park & Campus Infrastructure',
    location: 'Bangalore, Karnataka',
    type: 'Commercial',
    desc: 'Extensive heavy-duty interlocking paver installation and architectural landscaping for commercial IT campus.',
    image: '/assets/images/our_works/14.jpg'
  },
  {
    id: 3,
    name: 'Commercial Automobile Showroom & Service Hub',
    location: 'Karnataka',
    type: 'Commercial',
    desc: 'Comprehensive commercial facility development including service workshops, high-load paving, and administrative blocks.',
    image: '/assets/images/our_works/13.jpg'
  },
  {
    id: 4,
    name: 'Commercial Sports & Multipurpose Arena',
    location: 'Karnataka',
    type: 'Commercial',
    desc: 'Large-scale institutional structure execution with high-volume continuous concrete pumping and heavy structural blocks.',
    image: '/assets/images/our_works/21.jpg'
  },
  {
    id: 5,
    name: 'Structural Steel Cantilever Framework',
    location: 'Bangalore, Karnataka',
    type: 'Commercial',
    desc: 'Custom fabricated structural steel cantilever parking framework with high-durability coated roofing.',
    image: '/assets/images/our_works/8.jpg'
  },

  // Industrial Projects
  {
    id: 6,
    name: 'Innomac Engineering Industrial Facility',
    location: 'Industrial Corridor, Karnataka',
    type: 'Industrial',
    desc: 'Engineered pre-engineered steel building (PEB) shed fabrication and high-strength industrial concrete flooring.',
    image: '/assets/images/our_works/9.jpg'
  },
  {
    id: 7,
    name: 'Multi-Bay Industrial Logistics & Warehousing Hub',
    location: 'Karnataka',
    type: 'Industrial',
    desc: 'Large-span industrial distribution facility with specialized heavy vehicle paving and load-bearing loading bays.',
    image: '/assets/images/our_works/18.jpg'
  },
  {
    id: 8,
    name: 'Jyothi Conmix RMC Automated Batching Plant',
    location: 'Karnataka',
    type: 'Industrial',
    desc: 'Automated computerized high-capacity batching plant supplying custom grade concrete.',
    image: '/Jyothi/IMG_0038.JPG'
  },
  {
    id: 9,
    name: 'Granite Quarry Extraction & Mining Zone',
    location: 'Quarry Face',
    type: 'Industrial',
    desc: 'Self-owned heavy granite mining zone supplying aggregate raw materials across Karnataka.',
    image: '/Jyothi/IMG_9528.JPG'
  },
  {
    id: 10,
    name: 'VSI & High-Capacity Crushing Plant',
    location: 'Crushing Division',
    type: 'Industrial',
    desc: 'Advanced cone crushers producing cubic M-Sand and precision-graded aggregates.',
    image: '/Jyothi/IMG_9632.JPG'
  },
  {
    id: 11,
    name: 'Automated Concrete Block Manufacturing Yard',
    location: 'Main Yard Facility',
    type: 'Industrial',
    desc: 'Massive automated curing yard producing precision solid blocks with superior compressive strength.',
    image: '/Jyothi/IMG_9734.JPG'
  },

  // Turnkey Projects
  {
    id: 12,
    name: 'Urban Metro Rail Viaduct & Transit Infrastructure',
    location: 'Bangalore, Karnataka',
    type: 'Turnkey',
    desc: 'High-grade specialized concrete supply and on-site pumping for elevated metro viaduct and station framework.',
    image: '/assets/images/our_works/20.jpg'
  },
  {
    id: 13,
    name: 'State Highway Corridor & Kerb Infrastructure',
    location: 'Karnataka',
    type: 'Turnkey',
    desc: 'Direct mechanized placement of high-density concrete kerb stones and edge barriers with specialized crane trucks.',
    image: '/assets/images/our_works/19.jpg'
  },
  {
    id: 14,
    name: 'Deep Basement & High-Volume Foundation Concreting',
    location: 'Bangalore, Karnataka',
    type: 'Turnkey',
    desc: 'Complex deep foundation excavation and monolithic concrete raft foundation casting using mobile boom pumps.',
    image: '/assets/images/our_works/3a.jpg'
  }
];

const categories = ["All", "Industrial", "Commercial", "Turnkey"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.type === activeFilter);

  return (
    <div className="bg-jyothi-blue min-h-screen">
      
      <section className="relative h-[48vh] md:h-[56vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Jyothi/IMG_9644.JPG" 
            alt="Our Featured Infrastructure Projects - Jyothi Construction" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle top & bottom edge gradients for smooth contrast transition */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-jyothi-blue/80 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-jyothi-blue to-transparent pointer-events-none"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-jyothi-blue/45 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-8 rounded-2xl md:rounded-3xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] max-w-3xl"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.4em] text-xs mb-3 block">
              Portfolio & Engineering Showcase
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading tracking-tighter drop-shadow-md">
              Our Featured <span className="text-jyothi-amber">Projects</span>
            </h1>
            <div className="w-20 h-1 bg-jyothi-amber mx-auto my-3 rounded-full"></div>
            <p className="text-gray-100 text-sm md:text-base max-w-2xl mx-auto font-sans font-normal leading-relaxed drop-shadow-sm">
              Monumental civil engineering, ready-mix infrastructure, and industrial landmarks delivered across Karnataka.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="sticky top-20 z-50 bg-jyothi-blue/80 backdrop-blur-xl border-y border-white/5 py-3 md:py-4">
        <div className="container mx-auto px-6 max-w-7xl flex flex-row overflow-x-auto whitespace-nowrap gap-3 scrollbar-hide md:flex-wrap md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 md:px-8 py-3 rounded-xl font-black uppercase tracking-wider text-xs md:text-sm transition-all duration-300 border shrink-0 ${
                activeFilter === cat 
                ? 'bg-jyothi-amber border-jyothi-amber text-jyothi-blue shadow-xl scale-105' 
                : 'bg-white/5 border-white/10 text-white hover:border-jyothi-amber/50 hover:text-jyothi-amber'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

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
                  <div className="relative h-48 md:h-[60%] aspect-video md:aspect-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-jyothi-blue/20 group-hover:bg-transparent transition-all"></div>
                    
                    <div className="absolute top-5 left-5 px-5 py-2 bg-jyothi-amber text-jyothi-blue rounded-full text-xs md:text-sm font-black uppercase tracking-wider shadow-2xl border border-amber-200/50 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-jyothi-blue"></span>
                      {project.type}
                    </div>
                  </div>

                  <div className="relative p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/20">
                    <div className="flex items-center gap-2 text-jyothi-amber text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                      <Zap size={12} /> Featured Project
                    </div>
                    <h3 className="text-2xl font-black text-white font-heading mb-2 group-hover:text-jyothi-amber transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">
                      <MapPin size={14} className="text-jyothi-amber" /> {project.location}
                    </div>
                    {project.desc && (
                      <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-2">
                        {project.desc}
                      </p>
                    )}

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
