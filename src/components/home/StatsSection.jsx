import { motion } from 'framer-motion';
import { HardHat, Briefcase, Calendar, Award } from 'lucide-react';

const stats = [
  {
    id: 1,
    label: 'Projects Completed',
    value: '500+',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'bg-jyothi-amber'
  },
  {
    id: 2,
    label: 'Skilled Workforce',
    value: '1200+',
    icon: <HardHat className="w-8 h-8" />,
    color: 'bg-jyothi-orange'
  },
  {
    id: 3,
    label: 'Years of Experience',
    value: '60+',
    icon: <Calendar className="w-8 h-8" />,
    color: 'bg-jyothi-amber'
  },
  {
    id: 4,
    label: 'Awards Won',
    value: '25+',
    icon: <Award className="w-8 h-8" />,
    color: 'bg-jyothi-orange'
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-jyothi-blue border-y border-white/5 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`${stat.color} w-20 h-20 rounded-3xl flex items-center justify-center text-jyothi-blue mb-6 shadow-2xl group-hover:rotate-6 transition-transform duration-500`}>
                {stat.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-4xl md:text-5xl font-black text-white font-heading tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
