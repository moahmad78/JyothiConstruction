import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Clock, Award } from 'lucide-react';

const highlights = [
  {
    id: 1,
    title: 'High-Quality Construction Standards',
    description: 'Precision engineering with stringent quality checks at every phase.',
    icon: ShieldCheck,
    tag: 'Quality First'
  },
  {
    id: 2,
    title: 'Thoughtful Design & Planning',
    description: 'Architectural foresight optimizing space, utility, and environmental harmony.',
    icon: Compass,
    tag: 'Architectural Vision'
  },
  {
    id: 3,
    title: 'Reliable Project Delivery',
    description: 'Disciplined scheduling and seamless execution ensuring timely milestones.',
    icon: Clock,
    tag: 'On-Time Execution'
  },
  {
    id: 4,
    title: 'Built for Long-Term Performance',
    description: 'Enduring durability that delivers compounding value for generations.',
    icon: Award,
    tag: 'Generational Value'
  }
];

const HighlightsStrip = () => {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 md:-mt-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-jyothi-blue/90 backdrop-blur-xl border border-white/15 rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 0.25 }}
                  className="group relative p-4 md:p-5 rounded-xl md:rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-jyothi-amber/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3.5 mb-2.5">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-jyothi-amber/10 border border-jyothi-amber/30 flex items-center justify-center text-jyothi-amber group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all duration-300 shrink-0 shadow-inner">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <span className="text-[10px] md:text-[11px] font-bold text-jyothi-amber uppercase tracking-wider block mb-0.5">
                        {item.tag}
                      </span>
                      <h3 className="text-white font-bold text-sm md:text-base font-heading group-hover:text-jyothi-amber transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs md:text-[13px] leading-relaxed pl-0 sm:pl-[52px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsStrip;
