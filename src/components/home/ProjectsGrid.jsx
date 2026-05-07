import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../Image';

const projects = [
  {
    id: 1,
    title: 'Tech Horizon IT Park',
    location: 'Bangalore, KA',
    type: 'Commercial',
    image: '/assets/images/8.jpg'
  },
  {
    id: 2,
    title: 'Aura Luxury Villas',
    location: 'Mumbai, MH',
    type: 'Residential',
    image: '/assets/images/unsplash-e551d6bb.jpg'
  },
  {
    id: 3,
    title: 'Apex Manufacturing',
    location: 'Chennai, TN',
    type: 'Industrial',
    image: '/assets/images/Fabrication images.jpeg'
  },
  {
    id: 4,
    title: 'Cyber Nexus Center',
    location: 'Hyderabad, TS',
    type: 'Commercial',
    image: '/assets/images/construction.jpeg'
  }
];

const ProjectsGrid = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue via-jyothi-blue/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <span className="px-3 md:px-4 py-1.5 md:py-2 bg-jyothi-amber text-jyothi-blue text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                  {project.type}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg md:text-2xl font-black text-white font-heading mb-1 md:mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-400 text-[10px] md:text-sm gap-2 mb-4 md:mb-6">
                  <MapPin size={14} className="text-jyothi-amber" />
                  {project.location}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/projects" className="flex items-center gap-2 text-jyothi-amber font-black text-[10px] uppercase tracking-widest">
                    View Project <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
