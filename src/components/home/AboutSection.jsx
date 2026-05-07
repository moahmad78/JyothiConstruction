import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../Image';

const AboutSection = () => {
  return (
    <section className="py-10 md:py-24 relative overflow-hidden bg-jyothi-blue">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-jyothi-amber/30 rounded-2xl transform -rotate-3 z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                src="/assets/images/homepageinner.jpeg" 
                alt="Jyothi Construction Excellence" 
                className="w-full h-[300px] md:h-[600px] aspect-video md:aspect-auto object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue/60 to-transparent"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-jyothi-amber p-8 rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="text-center">
                <span className="block text-6xl font-black text-jyothi-blue font-heading leading-none">60+</span>
                <span className="block text-sm font-bold text-jyothi-blue uppercase tracking-widest mt-2">Years of <br /> Legacy</span>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-sm mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight font-heading mb-6">
                Pioneering the Future of <br />
                <span className="text-jyothi-amber">Construction</span>
              </h2>
              <div className="w-20 h-1.5 bg-jyothi-amber rounded-full"></div>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              Since our inception, Jyothi Construction has been at the forefront of architectural innovation and structural integrity. With over six decades of experience, we've built more than just buildings; we've built a legacy of trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="flex flex-col gap-2">
                <span className="text-white font-black text-lg">Integrated Excellence</span>
                <p className="text-gray-500 text-sm">We manage every stage of construction, from raw materials to final structural finishing.</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-white font-black text-lg">Precision Engineering</span>
                <p className="text-gray-500 text-sm">Our use of high-grade materials and advanced technology ensures unmatched durability.</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-4 px-10 py-5 bg-white text-jyothi-blue font-black rounded-xl hover:bg-jyothi-amber transition-all hover:scale-105 active:scale-95 font-heading tracking-widest uppercase text-sm group">
                Read More 
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
