import { Home, Building2, Factory, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../Image';

const verticals = [
  {
    id: 1,
    title: 'Ready Mix Concrete (RMC)',
    description: 'Fully automated computerized batching plant delivering high-grade concrete with zero compromise.',
    icon: <Factory className="w-10 h-10 text-jyothi-amber" />,
    image: '/Jyothi/IMG_0038.JPG',
    link: '/services/rmc'
  },
  {
    id: 2,
    title: 'Solid Concrete Blocks',
    description: 'Precision molded high-density cement blocks and pavers manufactured on high-capacity curing yards.',
    icon: <Building2 className="w-10 h-10 text-jyothi-amber" />,
    image: '/Jyothi/IMG_9734.JPG',
    link: '/services/blocks'
  },
  {
    id: 3,
    title: 'Aggregates & Crushing',
    description: 'Heavy-duty crushing and screening plants producing graded aggregates, M-Sand, and P-Sand.',
    icon: <Factory className="w-10 h-10 text-jyothi-amber" />,
    image: '/Jyothi/IMG_9641.JPG',
    link: '/services/aggregates'
  },
  {
    id: 4,
    title: 'Quarry & Logistics Fleet',
    description: 'Direct quarry extraction and self-loading boom crane fleet for swift regional delivery.',
    icon: <ShieldCheck className="w-10 h-10 text-jyothi-amber" />,
    image: '/Jyothi/IMG_9490.JPG',
    link: '/why-jyothi'
  }
];

const KeyVerticals = () => {
  return (
    <section className="py-10 md:py-24 bg-jyothi-blue relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10 mb-8 md:mb-20 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-3 block">Our Expertise</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight font-heading">
              Vertical Integrated <br className="hidden sm:inline" /> Solutions
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-md text-xs sm:text-sm leading-relaxed mx-auto md:mx-0"
          >
            From conceptual design to structural execution, we deliver excellence across diverse sectors with uncompromising quality.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto pb-4 pt-1 gap-4 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:pb-0">
          {verticals.map((vertical, index) => (
            <motion.div 
              key={vertical.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 hover:border-jyothi-amber/50 transition-all duration-500 min-h-[320px] h-[320px] md:h-[400px] w-[80vw] max-w-[300px] sm:w-[320px] md:w-auto md:max-w-none shrink-0 snap-center md:shrink"
            >
              <div className="absolute inset-0 z-0">
                <Image 
                  src={vertical.image} 
                  alt={vertical.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue via-jyothi-blue/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-80"></div>
              </div>
              
              <div className="relative p-5 md:p-6 h-full flex flex-col justify-end z-10">
                <div className="mb-3 md:mb-4 w-11 h-11 md:w-14 md:h-14 bg-black/40 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all duration-500 group-hover:-translate-y-1 flex-shrink-0 shadow-lg">
                  <div className="group-hover:scale-110 transition-transform duration-500 scale-75 md:scale-90">
                    {vertical.icon}
                  </div>
                </div>

                <div className="min-h-[2.5rem] md:min-h-[2.75rem] flex items-end mb-1.5 md:mb-2">
                  <h4 className="text-base md:text-lg font-black text-white font-heading group-hover:text-jyothi-amber transition-colors leading-snug drop-shadow-md">
                    {vertical.title}
                  </h4>
                </div>

                <div className="min-h-[2.5rem] md:min-h-[3rem] flex items-start mb-3 md:mb-4">
                  <p className="text-gray-200 text-xs leading-snug line-clamp-3 drop-shadow-sm font-medium">
                    {vertical.description}
                  </p>
                </div>

                <div className="pt-1">
                  <Link to={vertical.link} className="inline-flex items-center gap-1.5 text-white font-bold text-xs group/btn hover:text-jyothi-amber transition-colors drop-shadow">
                    Learn More <ArrowRight size={13} className="text-jyothi-amber group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-2 md:hidden">
          {verticals.map((v) => (
            <div key={v.id} className="w-1.5 h-1.5 rounded-full bg-white/30" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyVerticals;
