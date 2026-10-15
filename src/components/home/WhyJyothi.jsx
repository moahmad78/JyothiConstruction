import { Award, ShieldCheck, Clock, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from './../../components/Image';

const strengthsData = [
  {
    id: 1,
    title: '50+ Years of Industry Legacy',
    description: 'Over five decades of continuous operation, technical mastery, and trusted client partnerships.',
    Icon: Users
  },
  {
    id: 2,
    title: 'Proven Track Record of Delivering Excellence',
    description: 'Hundreds of landmark projects completed across residential, industrial, and infrastructure domains.',
    Icon: Award
  },
  {
    id: 3,
    title: 'Strong Design & Execution Capabilities',
    description: 'Seamless integration of architectural foresight, structural engineering, and on-site precision.',
    Icon: CheckCircle2
  },
  {
    id: 4,
    title: 'Focus on Durability and Precision',
    description: 'Engineered with high-grade materials and rigorous standards to endure for generations.',
    Icon: Clock
  },
  {
    id: 5,
    title: 'Commitment to Safety and Innovation',
    description: 'Zero-compromise safety protocols combined with modern engineering and construction technologies.',
    Icon: ShieldCheck
  }
];

const WhyJyothi = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-jyothi-blue border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-jyothi-amber/5 rounded-full blur-[150px] -mr-64 -mb-64 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left"
          >
            <div>
              <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-3 block">Our Strength</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight font-heading mb-4">
                Driven by Experience. <br className="hidden sm:inline" />
                <span className="text-jyothi-amber">Defined by Quality.</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                Our legacy is built on structural integrity, meticulous craftsmanship, and an enduring commitment to delivering projects that stand the test of time.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {strengthsData.map((item, index) => (
                <div 
                  key={item.id} 
                  className="flex items-start gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-jyothi-amber/40 transition-all duration-300 group text-left"
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-jyothi-amber/10 border border-jyothi-amber/30 rounded-xl flex items-center justify-center text-jyothi-amber group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all duration-300 shrink-0">
                    <item.Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white font-heading group-hover:text-jyothi-amber transition-colors mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-jyothi-orange/20 rounded-3xl transform rotate-2 z-0"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/Jyothi/IMG_0271.JPG" 
                alt="Quality and Safety Standards - Jyothi Construction Engineering Excellence" 
                className="w-full h-[260px] md:h-[420px] aspect-video md:aspect-auto"
                imgClassName="object-cover [object-position:78%_38%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue/60 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <div className="absolute bottom-5 -left-4 md:-left-6 bg-jyothi-blue/95 border border-white/10 p-3.5 rounded-xl shadow-2xl z-20 backdrop-blur-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-jyothi-amber rounded-full flex items-center justify-center text-jyothi-blue shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <span className="block text-white font-black text-sm font-heading">ISO Certified</span>
                  <span className="block text-gray-400 text-[10px] uppercase tracking-widest font-bold">Standard of Quality</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyJyothi;
