import { motion } from 'framer-motion';
import KeyVerticals from '../components/home/KeyVerticals';

const ServicesPage = () => {
  return (
    <div className="bg-jyothi-blue min-h-screen pt-24 md:pt-36">
      
      <section className="relative min-h-[46vh] md:min-h-[52vh] py-16 md:py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Jyothi/IMG_9632.JPG" 
            alt="Jyothi Construction Services & Verticals" 
            className="w-full h-full object-cover object-[center_40%] brightness-105 contrast-105"
          />
          {/* Gentle edge contrast gradients ensuring full image visibility */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-jyothi-blue to-transparent pointer-events-none"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-jyothi-blue/65 backdrop-blur-md px-6 py-5 sm:px-10 sm:py-6 rounded-2xl md:rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-2 block">
              Integrated Capabilities
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading tracking-tight mb-2 drop-shadow-md">
              Our Key <span className="text-jyothi-amber">Verticals</span>
            </h1>
            <div className="w-16 h-1 bg-jyothi-amber mx-auto mb-3 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed font-normal max-w-2xl mx-auto drop-shadow-sm">
              Discover our comprehensive suite of vertically integrated construction solutions. From raw granite extraction and crushing to automated RMC and precision solid blocks, we ensure unmatched quality control at every stage.
            </p>
          </motion.div>
        </div>
      </section>
      
      <KeyVerticals />
    </div>
  );
};

export default ServicesPage;
