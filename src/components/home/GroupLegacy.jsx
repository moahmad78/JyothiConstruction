import { motion } from 'framer-motion';
import { Building, Factory, Layers, Truck, ShieldCheck, CheckCircle } from 'lucide-react';
import Image from '../Image';

const groupDivisions = [
  {
    name: 'Jyothi Construction',
    role: 'Civil, Commercial & Infrastructure Execution',
    icon: Building
  },
  {
    name: 'Jyothi Conmix (RMC)',
    role: 'Computerized Concrete Batching Plants',
    icon: Factory
  },
  {
    name: 'Jyothi Concrete Blocks',
    role: 'High-Density Hydraulic Cured Masonry',
    icon: Layers
  },
  {
    name: 'Jyothi Aggregates & Mining',
    role: 'Granite Quarries, Crushing & M-Sand',
    icon: ShieldCheck
  },
  {
    name: 'Jyothi Heavy Logistics',
    role: 'Boom Crane Fleets & Rapid Distribution',
    icon: Truck
  }
];

const GroupLegacy = () => {
  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-jyothi-blue via-[#0d131a] to-jyothi-blue relative overflow-hidden border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-jyothi-amber/[0.04] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative rounded-3xl md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-8 sm:p-12 lg:p-16 backdrop-blur-xl shadow-2xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "150px" }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left"
            >
              <div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jyothi-amber/10 border border-jyothi-amber/30 text-jyothi-amber text-xs font-black tracking-widest uppercase mb-4">
                  Group Legacy
                </span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading leading-tight mb-4">
                  Jyothi Group of <br className="hidden sm:inline" />
                  <span className="text-jyothi-amber">Companies</span>
                </h2>
              </div>

              <div className="relative pl-0 lg:pl-6 border-l-0 lg:border-l-2 lg:border-jyothi-amber/40">
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed font-sans font-normal">
                  Over the past five decades, Jyothi Group has built a reputation for growth and high standards through consistent design excellence and quality. Our work has made a meaningful difference to the ease, comfort, and efficiency of the lives that interact with the spaces we create.
                </p>
              </div>

              {/* Group Ecosystem Pillars */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3 text-center lg:text-left">
                  Integrated Group Ecosystem:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {groupDivisions.map((division, idx) => {
                    const DivIcon = division.icon;
                    return (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-jyothi-amber/30 transition-all text-left"
                      >
                        <div className="w-8 h-8 rounded-lg bg-jyothi-amber/10 flex items-center justify-center text-jyothi-amber shrink-0">
                          <DivIcon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <span className="text-white text-xs font-bold block truncate">{division.name}</span>
                          <span className="text-gray-400 text-[10px] block truncate">{division.role}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Visual Image & Emblem */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "150px" }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                <Image 
                  src="/Jyothi/IMG_0257.JPG" 
                  alt="Jyothi Group Legacy and Operations" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue/80 via-transparent to-transparent"></div>
                
                {/* Emblem Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-jyothi-blue/90 backdrop-blur-md border border-white/10 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-jyothi-amber flex items-center justify-center text-jyothi-blue font-black text-xl font-heading shrink-0 shadow-lg">
                    50+
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm font-heading leading-tight">Decades of Trust</h4>
                    <p className="text-gray-400 text-[11px] leading-tight mt-0.5">Shaping Karnataka’s skyline and infrastructure</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GroupLegacy;
