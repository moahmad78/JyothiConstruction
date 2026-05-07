import { Award, ShieldCheck, Clock, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from './../../components/Image';

const whyChooseUsData = [
  {
    id: 1,
    title: 'Unmatched Quality',
    description: 'We source and manufacture our own premium materials to ensure structural perfection.',
    icon: <Award className="w-8 h-8 text-jyothi-amber" />
  },
  {
    id: 2,
    title: 'Decades of Experience',
    description: 'Over 60 years of building trust and delivering excellence across diverse projects.',
    icon: <Users className="w-8 h-8 text-jyothi-amber" />
  },
  {
    id: 3,
    title: 'Safety First',
    description: 'Strict adherence to international safety standards protecting our workforce and clients.',
    icon: <ShieldCheck className="w-8 h-8 text-jyothi-amber" />
  },
  {
    id: 4,
    title: 'Timely Delivery',
    description: 'Precision planning and integrated supply chain management for on-schedule completion.',
    icon: <Clock className="w-8 h-8 text-jyothi-amber" />
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
                <div key={item.id} className="flex flex-col gap-3 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-jyothi-amber transition-all duration-300">
                    <div className="group-hover:text-jyothi-blue group-hover:scale-110 transition-all duration-300 scale-75 md:scale-100">
                      {item.icon}
                    </div>
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
                src="/assets/images/Q&S.jpg" 
                alt="Quality and Safety Standards" 
                className="w-full h-[300px] md:h-[700px] aspect-video md:aspect-auto object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue/80 via-transparent to-transparent"></div>
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
