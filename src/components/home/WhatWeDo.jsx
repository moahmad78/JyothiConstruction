import { motion } from 'framer-motion';
import { Building2, Factory, Briefcase, Ruler, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../Image';

const expertiseAreas = [
  {
    id: 1,
    title: 'Jyothi Construction Services',
    subtitle: 'Comprehensive Turnkey & Civil Engineering Execution',
    description: 'Delivering visionary commercial complexes, residential landmarks, and turnkey infrastructure projects with unmatched structural precision and generational endurance.',
    icon: Building2,
    image: '/assets/Commercial/01.JPG',
    link: '/services/construction',
    points: ['Turnkey Civil Engineering', 'Commercial & Residential Landmarks', 'Integrated In-House Supply Chain']
  },
  {
    id: 2,
    title: 'Ready Mix Concrete (Jyothi ConMix)',
    subtitle: '100% Computerized High-Performance Batching',
    description: 'One of Bangalore’s fastest-growing RMC manufacturers since 2012, operating 18 transit mixers and 5 high-reach concrete pumps for uninterrupted site delivery.',
    icon: Factory,
    image: '/assets/images/conmix1.jpg',
    link: '/services/rmc',
    points: ['18 Transit Mixers & 5 Boom Pumps', 'Special & Self-Compacting Mixes', 'NABL-Aligned Laboratory Testing']
  },
  {
    id: 3,
    title: 'Jyothi Stone Crushers',
    subtitle: '250 TPH Crushing & Hydro-Cyclone Washing',
    description: 'Leader in aggregate manufacturing since 2000 across Dodderi & Madapatna units, equipped with Spanish hydro-cyclone washing for ultra-clean M-Sand and P-Sand.',
    icon: Factory,
    image: '/Jyothi/IMG_9641.JPG',
    link: '/services/aggregates',
    points: ['250 TPH Combined Plant Capacity', 'Hydro-Cyclone Washed M-Sand & P-Sand', '10mm, 20mm & Graded Aggregates']
  },
  {
    id: 4,
    title: 'Jyothi Concrete Blocks',
    subtitle: 'ISO 9001:2015 German Curing Technology',
    description: 'High-density engineered solid concrete blocks (4", 6", 8") with an annual capacity exceeding 10 million units, ensuring high compressive strength and low absorption.',
    icon: Ruler,
    image: '/Jyothi/IMG_9734.JPG',
    link: '/services/blocks',
    points: ['Solid Concrete Blocks (4", 6", 8")', 'German Automated Curing System', '10 Million+ Annual Capacity']
  },
  {
    id: 5,
    title: 'Sri Raghavendra Fabrication',
    subtitle: 'Structural Steel & Heavy Industrial Frameworks',
    description: 'Turnkey fabrication excellence specializing in custom structural steel, industrial PEB frameworks, PUF insulated panels, and curved truss-less roofing systems.',
    icon: Briefcase,
    image: '/Jyothi/fabrication_works_hero.jpg',
    link: '/services/fabrication',
    points: ['Industrial PEB & Heavy Steel Trusses', 'PUF Insulated Roof & Wall Panels', 'Truss-Less Self-Supported Roofing']
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-12 md:py-24 bg-jyothi-blue relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-jyothi-amber/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-jyothi-orange/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10 mb-12 md:mb-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-3 block">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight font-heading">
              Comprehensive Construction <br className="hidden sm:inline" />
              <span className="text-jyothi-amber">Expertise</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 max-w-md text-xs sm:text-sm leading-relaxed mx-auto md:mx-0"
          >
            Delivering technical excellence across residential, commercial, industrial, and turnkey infrastructure projects with unparalleled precision.
          </motion.p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expertiseAreas.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "150px" }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-jyothi-amber/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                {/* Visual Header Image */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue via-jyothi-blue/50 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-jyothi-blue/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-jyothi-amber group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all duration-300 shadow-lg">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl sm:text-2xl font-black text-white font-heading group-hover:text-jyothi-amber transition-colors leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {item.points.map((point, pIndex) => (
                      <div key={pIndex} className="flex items-center gap-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-jyothi-amber shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="pt-3">
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-jyothi-amber hover:text-white transition-colors group/link"
                    >
                      Explore Service
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1.5" />
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

export default WhatWeDo;
