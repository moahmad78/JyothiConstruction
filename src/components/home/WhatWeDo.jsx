import { motion } from 'framer-motion';
import { Building2, Factory, Briefcase, Ruler, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../Image';

const expertiseAreas = [
  {
    id: 1,
    title: 'Residential & Commercial Construction',
    subtitle: 'From modern residences to state-of-the-art commercial complexes.',
    description: 'We construct visionary high-rises, gated luxury communities, and premium corporate campuses built with structural integrity and sophisticated aesthetics.',
    icon: Building2,
    image: '/assets/Commercial/01.JPG',
    link: '/services/construction',
    points: ['Luxury Residential Enclaves', 'Commercial & Retail Centers', 'High-Rise Towers']
  },
  {
    id: 2,
    title: 'Industrial Infrastructure',
    subtitle: 'Heavy-duty industrial hubs, warehouses, and specialized facilities.',
    description: 'Engineered for high operational demands, precision fabrication, robust floorings, and long-term durability suited for manufacturing and logistics.',
    icon: Factory,
    image: '/assets/Industrial/02.JPG',
    link: '/services/rmc',
    points: ['Manufacturing Plants', 'Logistics & Warehousing Hubs', 'Heavy Engineering Facilities']
  },
  {
    id: 3,
    title: 'Turnkey Project Execution',
    subtitle: 'Comprehensive end-to-end delivery from concept to handover.',
    description: 'We streamline the entire lifecycle — architecture, engineering, in-house material procurement, contracting, and final commissioning with zero friction.',
    icon: Briefcase,
    image: '/assets/Commercial/03.JPG',
    link: '/services/fabrication',
    points: ['Concept-to-Keys Delivery', 'Total Project Management', 'Integrated Supply Chain']
  },
  {
    id: 4,
    title: 'Structural & Civil Engineering',
    subtitle: 'Precision civil works, reinforced foundations, and site engineering.',
    description: 'Leveraging five decades of geotechnical and structural mastery to engineer foundation systems, earthworks, and concrete structures built for centuries.',
    icon: Ruler,
    image: '/assets/Others/02.JPG',
    link: '/services/aggregates',
    points: ['Foundation & Deep Piling', 'Reinforced Concrete Frameworks', 'Site Grade Engineering']
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
