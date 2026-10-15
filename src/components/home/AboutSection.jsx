import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../Image';

const AboutSection = () => {
  return (
    <section className="py-10 md:py-20 relative overflow-hidden bg-jyothi-blue">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.35 }}
            className="flex flex-col gap-5 md:gap-6 items-center md:items-start text-center md:text-left"
          >
            <div className="flex flex-col items-center md:items-start">
              <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-2 md:mb-3 block">Introducing Jyothi Construction</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight font-heading mb-3 md:mb-4">
                Shaping Skylines. <br className="hidden sm:inline" />
                <span className="text-jyothi-amber">Building Legacies.</span>
              </h2>
              <div className="w-20 h-1.5 bg-jyothi-amber rounded-full mx-auto md:mx-0"></div>
            </div>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
              At Jyothi Construction, we have been shaping skylines and building enduring structures for over five decades. With a strong foundation rooted in quality, innovation, and precision, we deliver projects that stand as benchmarks of excellence.
            </p>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
              Every structure we create is designed to enhance comfort, efficiency, and long-term value — reflecting our commitment to building not just spaces, but experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left w-full pt-1">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-jyothi-amber font-black text-base md:text-lg block">Quality</span>
                <p className="text-gray-400 text-xs">Uncompromising material & structural standards</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-jyothi-amber font-black text-base md:text-lg block">Innovation</span>
                <p className="text-gray-400 text-xs">Modern engineering & cutting-edge methods</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                <span className="text-jyothi-amber font-black text-base md:text-lg block">Precision</span>
                <p className="text-gray-400 text-xs">Meticulous planning and execution accuracy</p>
              </div>
            </div>

            <div className="pt-2 flex justify-center md:justify-start w-full">
              <Link to="/about" className="inline-flex items-center gap-3 px-8 md:px-9 py-3.5 md:py-4 bg-white text-jyothi-blue font-black rounded-xl hover:bg-jyothi-amber transition-all hover:scale-105 active:scale-95 font-heading tracking-widest uppercase text-xs md:text-sm group shadow-lg">
                Discover Our Story 
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Photo Content (Exact 3:2 Aspect Ratio - ZERO CROP) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.35 }}
            className="relative w-full"
          >
            <div className="absolute -inset-3 md:-inset-4 border border-jyothi-amber/30 rounded-2xl transform rotate-2 z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl bg-jyothi-blue/40 border border-white/10 w-full aspect-[3/2]">
              <Image 
                src="/Jyothi/IMG_0229.JPG" 
                alt="Jyothi Construction Leadership & Team" 
                className="w-full h-full"
                objectFit="object-contain"
                priority={true}
              />
            </div>
            
            <div className="absolute -bottom-5 -left-2 md:-bottom-6 md:-left-4 bg-jyothi-amber px-5 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-2xl z-20 hidden sm:block border-2 border-jyothi-blue">
              <div className="text-center">
                <span className="block text-3xl md:text-4xl font-black text-jyothi-blue font-heading leading-none">57+</span>
                <span className="block text-[10px] md:text-xs font-black text-jyothi-blue uppercase tracking-wider mt-0.5">Years of <br /> Legacy</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
