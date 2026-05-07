import { Home, Building2, Factory, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../Image';

const verticals = [
  {
    id: 1,
    title: 'Residential',
    description: 'Bespoke luxury villas and modern apartments designed for elevated living.',
    icon: <Home className="w-10 h-10 text-jyothi-amber" />,
    image: '/assets/images/unsplash-e551d6bb.jpg',
    link: '/services/residential'
  },
  {
    id: 2,
    title: 'Commercial',
    description: 'State-of-the-art office complexes and retail spaces built for business growth.',
    icon: <Building2 className="w-10 h-10 text-jyothi-amber" />,
    image: '/assets/images/8.jpg',
    link: '/services/commercial'
  },
  {
    id: 3,
    title: 'Industrial',
    description: 'High-performance manufacturing units and heavy-duty industrial infrastructure.',
    icon: <Factory className="w-10 h-10 text-jyothi-amber" />,
    image: '/assets/images/Fabrication images.jpeg',
    link: '/services/industrial'
  },
  {
    id: 4,
    title: 'Turnkey',
    description: 'End-to-end design and build solutions with absolute precision and quality control.',
    icon: <ShieldCheck className="w-10 h-10 text-jyothi-amber" />,
    image: '/assets/images/construction.jpeg',
    link: '/services/turnkey'
  }
];

const KeyVerticals = () => {
  return (
    <section className="py-10 md:py-24 bg-jyothi-blue relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-8 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-6xl font-black text-white leading-tight font-heading">
              Vertical Integrated <br /> Solutions
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed"
          >
            From conceptual design to structural execution, we deliver excellence across diverse sectors with uncompromising quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {verticals.map((vertical, index) => (
            <motion.div 
              key={vertical.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-jyothi-amber/50 transition-all duration-500 h-[300px] md:h-[500px]"
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={vertical.image} 
                  alt={vertical.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue via-jyothi-blue/60 to-transparent"></div>
              </div>
              
              <div className="relative p-6 md:p-8 h-full flex flex-col justify-end z-10">
                <div className="mb-4 md:mb-6 w-14 h-14 md:w-20 md:h-20 bg-jyothi-amber/10 border border-jyothi-amber/20 rounded-2xl flex items-center justify-center group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all duration-500 group-hover:-translate-y-2">
                  <div className="group-hover:scale-110 transition-transform duration-500 scale-65 md:scale-100">
                    {vertical.icon}
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-4 font-heading group-hover:text-jyothi-amber transition-colors">
                  {vertical.title}
                </h4>
                <p className="text-gray-400 text-[10px] md:text-sm leading-relaxed mb-6 md:mb-8 line-clamp-2 md:line-clamp-none">
                  {vertical.description}
                </p>
                <Link to={vertical.link} className="flex items-center gap-2 text-white font-bold text-xs md:text-sm group/btn">
                  Learn More <ArrowRight size={14} className="text-jyothi-amber group-hover/btn:translate-x-2 transition-transform md:w-4 md:h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyVerticals;
