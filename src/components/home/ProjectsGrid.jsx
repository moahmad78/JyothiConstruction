import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../Image';

const projects = [
  {
    id: 1,
    title: 'Jyothi Conmix RMC Hub',
    location: 'Plant Operations, Karnataka',
    type: 'Ready Mix',
    image: '/Jyothi/IMG_0038.JPG'
  },
  {
    id: 2,
    title: 'Automated Blocks Facility',
    location: 'Manufacturing Yard',
    type: 'Concrete Blocks',
    image: '/Jyothi/IMG_9734.JPG'
  },
  {
    id: 3,
    title: 'Granite Quarry & Mining',
    location: 'Quarry Face',
    type: 'Aggregates',
    image: '/Jyothi/IMG_9528.JPG'
  },
  {
    id: 4,
    title: 'Crane Fleet & Logistics',
    location: 'Regional Distribution',
    type: 'Fleet Supply',
    image: '/Jyothi/IMG_0452.JPG'
  }
];

const ProjectsGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-10 md:py-24 bg-jyothi-blue relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-8 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-sm mb-4 block">Our Portfolio</span>
            <h2 className="text-3xl md:text-6xl font-black text-white leading-tight font-heading">
              Built on <span className="text-jyothi-amber">Trust</span> & <br />
              Excellence
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/projects" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-widest text-xs md:text-sm hover:text-jyothi-amber transition-colors group">
              View All Projects <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Expanding Accordion Cards on Hover */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-5 w-full items-stretch">
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            const hasAnyHovered = hoveredId !== null;

            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setHoveredId(isHovered ? null : project.id)}
                style={{
                  flex: isHovered ? '2.8 1 0%' : (hasAnyHovered ? '0.7 1 0%' : '1 1 0%')
                }}
                className={`group relative h-[360px] sm:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-out border ${
                  isHovered ? 'border-jyothi-amber shadow-[0_20px_50px_rgba(243,156,18,0.25)]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Background Image that smoothly expands to show full image */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay for High Legibility */}
                <div className={`absolute inset-0 bg-gradient-to-t from-jyothi-blue via-jyothi-blue/40 to-transparent transition-opacity duration-500 ${
                  isHovered ? 'opacity-85' : 'opacity-90'
                }`}></div>
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                  <span className="px-4 py-2 bg-jyothi-amber text-jyothi-blue text-xs font-black uppercase tracking-wider rounded-full shadow-xl">
                    {project.type}
                  </span>
                </div>

                {/* Card Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-10 flex flex-col justify-end">
                  <h3 className={`font-black text-white font-heading leading-snug transition-all duration-300 mb-1.5 ${
                    isHovered ? 'text-2xl md:text-3xl text-jyothi-amber' : 'text-lg md:text-xl line-clamp-2'
                  }`}>
                    {project.title}
                  </h3>

                  <div className="flex items-center text-gray-300 text-xs md:text-sm gap-2 mb-3">
                    <MapPin size={14} className="text-jyothi-amber flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  {/* Expandable CTA button */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    isHovered 
                      ? 'max-h-16 opacity-100 mt-2 translate-y-0' 
                      : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                  }`}>
                    <Link 
                      to="/projects" 
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-jyothi-amber text-jyothi-blue font-black text-xs uppercase tracking-widest shadow-xl hover:bg-jyothi-orange hover:text-white transition-all transform hover:scale-105 active:scale-95"
                    >
                      View Project <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
