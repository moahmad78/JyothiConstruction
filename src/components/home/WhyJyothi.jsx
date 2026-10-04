import { Award, ShieldCheck, Clock, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from './../../components/Image';

const whyChooseUsData = [
  {
    id: 1,
    title: 'Unmatched Quality',
    description: 'We source and manufacture our own premium materials to ensure structural perfection.',
    Icon: Award
  },
  {
    id: 2,
    title: 'Decades of Experience',
    description: 'Over 60 years of building trust and delivering excellence across diverse projects.',
    Icon: Users
  },
  {
    id: 3,
    title: 'Safety First',
    description: 'Strict adherence to international safety standards protecting our workforce and clients.',
    Icon: ShieldCheck
  },
  {
    id: 4,
    title: 'Timely Delivery',
    description: 'Precision planning and integrated supply chain management for on-schedule completion.',
    Icon: Clock
  }
];

const WhyJyothi = () => {
  return (
    <section className="py-8 md:py-14 relative overflow-hidden bg-jyothi-blue">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-jyothi-amber/5 rounded-full blur-[150px] -mr-64 -mb-64"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 md:gap-6 items-center md:items-start text-center md:text-left"
          >
            <div>
              <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs mb-2 block">Why Choose Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight font-heading mb-3 max-w-xl mx-auto md:mx-0">
                <span className="block sm:whitespace-nowrap">Controlled Excellence</span>
                <span className="block sm:whitespace-nowrap">in Every <span className="text-jyothi-amber">Structure</span></span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
                Our philosophy of integrated construction allows us to maintain total control over quality and timelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 w-full">
              {whyChooseUsData.map((item) => (
                <div key={item.id} className="flex flex-col items-center md:items-start text-center md:text-left gap-2 group cursor-pointer">
                  <div className="w-11 h-11 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-jyothi-amber group-hover:border-jyothi-amber transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_25px_rgba(243,156,18,0.25)]">
                    <item.Icon className="w-5 h-5 md:w-6 md:h-6 text-jyothi-amber group-hover:text-black transition-colors duration-300 transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-0.5 font-heading group-hover:text-jyothi-amber transition-colors">{item.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-xs md:max-w-none">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
