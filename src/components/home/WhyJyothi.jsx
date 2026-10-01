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
    <section className="py-10 md:py-24 relative overflow-hidden bg-jyothi-blue">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-jyothi-amber/5 rounded-full blur-[150px] -mr-64 -mb-64"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-center">
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 md:gap-12"
          >
            <div>
              <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-sm mb-4 block">Why Choose Us</span>
              <h2 className="text-2xl md:text-6xl font-black text-white leading-tight font-heading mb-6">
                Controlled Excellence <br />
                in Every <span className="text-jyothi-amber">Structure</span>
              </h2>
              <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium">
                Our philosophy of integrated construction allows us to maintain total control over quality and timelines.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {whyChooseUsData.map((item) => (
                <div key={item.id} className="flex flex-col gap-3 group cursor-pointer">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-jyothi-amber group-hover:border-jyothi-amber transition-all duration-300 shadow-sm group-hover:shadow-[0_10px_25px_rgba(243,156,18,0.25)]">
                    <item.Icon className="w-7 h-7 md:w-8 md:h-8 text-jyothi-amber group-hover:text-black transition-colors duration-300 transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1 font-heading group-hover:text-jyothi-amber transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 border border-jyothi-orange/20 rounded-3xl transform rotate-3 z-0"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/Jyothi/IMG_0271.JPG" 
                alt="Quality and Safety Standards - Jyothi Construction Engineering Excellence" 
                className="w-full h-[320px] md:h-[650px] aspect-video md:aspect-auto object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Achievement */}
            <div className="absolute top-12 -left-12 bg-jyothi-blue border border-white/10 p-6 rounded-2xl shadow-2xl z-20 backdrop-blur-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-jyothi-amber rounded-full flex items-center justify-center text-jyothi-blue">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <span className="block text-white font-black text-lg font-heading">ISO Certified</span>
                  <span className="block text-gray-500 text-xs uppercase tracking-widest font-bold">Standard of Quality</span>
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
