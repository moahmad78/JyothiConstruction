import { motion } from 'framer-motion';
import KeyVerticals from '../components/home/KeyVerticals';

const ServicesPage = () => {
  return (
    <div className="bg-jyothi-blue min-h-screen pt-24 md:pt-36">
      
      {/* Services Hero Section with Background Image */}
      <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Jyothi/IMG_9632.JPG" 
            alt="Jyothi Construction Services & Verticals" 
            className="w-full h-full object-cover opacity-25 scale-105 transform motion-safe:animate-pulse duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jyothi-blue/90 via-jyothi-blue/80 to-jyothi-blue"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.4em] text-xs mb-4 block">
              Integrated Capabilities
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-white font-heading tracking-tighter mb-6">
              Our Key <span className="text-jyothi-amber">Verticals</span>
            </h1>
            <div className="w-24 h-1 bg-jyothi-amber mx-auto mb-6"></div>
            <p className="text-base md:text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
              Discover our comprehensive suite of vertically integrated construction solutions. From raw granite extraction and crushing to automated RMC and precision solid blocks, we ensure unmatched quality control at every stage.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Key Verticals Grid Component */}
      <KeyVerticals />
    </div>
  );
};

export default ServicesPage;
