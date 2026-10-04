import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../Image';

const AboutSection = () => {
  return (
    <section className="py-10 md:py-24 relative overflow-hidden bg-jyothi-blue">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between gap-6 md:gap-8 items-center md:items-start text-center md:text-left h-full"
          >
            <div className="flex flex-col items-center md:items-start">
              <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-3 md:mb-4 block">About Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight font-heading mb-4 md:mb-6">
                Pioneering the Future of <br className="hidden sm:inline" />
                <span className="text-jyothi-amber"> Construction</span>
              </h2>
              <div className="w-20 h-1.5 bg-jyothi-amber rounded-full mx-auto md:mx-0"></div>
            </div>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-medium max-w-xl mx-auto md:mx-0">
              Since our inception, Jyothi Construction has been at the forefront of architectural innovation and structural integrity. With over six decades of experience, we've built more than just buildings; we've built a legacy of trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-center md:text-left w-full">
              <div className="flex flex-col gap-1.5 md:gap-2 items-center md:items-start">
                <span className="text-white font-black text-base md:text-lg">Integrated Excellence</span>
                <p className="text-gray-400 text-xs md:text-sm max-w-xs md:max-w-none">We manage every stage of construction, from raw materials to final structural finishing.</p>
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2 items-center md:items-start">
                <span className="text-white font-black text-base md:text-lg">Precision Engineering</span>
                <p className="text-gray-400 text-xs md:text-sm max-w-xs md:max-w-none">Our use of high-grade materials and advanced technology ensures unmatched durability.</p>
              </div>
            </div>

            <div className="pt-2 md:pt-4 flex justify-center md:justify-start w-full">
              <Link to="/about" className="inline-flex items-center gap-4 px-8 md:px-10 py-4 md:py-4.5 bg-white text-jyothi-blue font-black rounded-xl hover:bg-jyothi-amber transition-all hover:scale-105 active:scale-95 font-heading tracking-widest uppercase text-xs md:text-sm group shadow-lg">
                Read More 
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Photo Content (Equal Height with Text) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col h-full min-h-[350px] md:min-h-[460px]"
          >
            <div className="absolute -inset-4 border border-jyothi-amber/30 rounded-2xl transform rotate-3 z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl bg-jyothi-blue/40 border border-white/10 w-full h-full flex flex-col">
              <Image 
                src="/Jyothi/IMG_0229.JPG" 
                alt="Jyothi Construction Leadership & Team" 
                className="w-full h-full flex-grow min-h-[350px] md:min-h-full"
                objectFit="object-cover"
                imgClassName="[object-position:center_25%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue/50 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-2 md:-bottom-8 md:-left-4 bg-jyothi-amber px-6 py-4 md:px-8 md:py-5 rounded-2xl shadow-2xl z-20 hidden sm:block border-2 border-jyothi-blue">
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-black text-jyothi-blue font-heading leading-none">60+</span>
                <span className="block text-xs md:text-sm font-black text-jyothi-blue uppercase tracking-widest mt-1">Years of <br /> Legacy</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
