import { motion } from 'framer-motion';
import { Award, Target, Eye, Users, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-jyothi-blue min-h-screen pt-24 md:pt-40">
      
      {/* Page Hero Banner */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/1.jpg" 
            alt="About Our Legacy" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jyothi-blue/80 to-jyothi-blue"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.4em] text-xs mb-4 block">Our Story</span>
            <h1 className="text-3xl md:text-7xl font-black text-white font-heading tracking-tighter">
              About Our <span className="text-jyothi-amber">Legacy</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Core Content: Left Image | Right Text */}
      <section className="py-10 md:py-12 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-jyothi-orange/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side: High-quality site image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 border-2 border-jyothi-amber/20 rounded-3xl group-hover:border-jyothi-amber/40 transition-colors duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/assets/images/homepageinner.jpeg" 
                  alt="Construction Site Excellence" 
                  className="w-full h-64 md:h-[600px] aspect-video md:aspect-auto object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-jyothi-blue/10 group-hover:bg-transparent transition-all"></div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-8 -right-8 bg-jyothi-amber p-8 rounded-2xl shadow-2xl hidden md:block">
                <span className="text-jyothi-blue font-black text-4xl block leading-none">60+</span>
                <span className="text-jyothi-blue font-bold text-xs uppercase tracking-widest">Years of Excellence</span>
              </div>
            </motion.div>

            {/* Right side: Company Intro Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-jyothi-amber text-xs font-black uppercase tracking-[0.3em] mb-4 block">Building the Future</span>
              <h2 className="text-3xl md:text-6xl font-black text-white font-heading leading-[1.1] mb-8">
                Technical Excellence in <br />
                Every <span className="text-jyothi-amber">Structural</span> Foundation
              </h2>
              <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  Founded with a deep-rooted commitment to structural integrity, Jyothi Construction has evolved into a premier vertically integrated construction powerhouse. Our legacy spans over six decades of delivering architectural masterpieces and industrial hubs.
                </p>
                <p>
                  Today, we combine traditional engineering values with cutting-edge construction technology. By manufacturing our own high-grade materials—from Ready Mix Concrete to precision-engineered blocks—we ensure total quality control across every phase of development.
                </p>
              </div>

              {/* Read More Button */}
              {/* <button className="mt-12 px-12 py-5 bg-jyothi-amber text-jyothi-blue font-black rounded-xl shadow-xl hover:bg-jyothi-orange hover:text-white transition-all hover:scale-105 active:scale-95 uppercase tracking-widest text-xs flex items-center gap-3">
                Read More <ChevronRight size={18} />
              </button> */}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Values Grid */}
      <section className="py-10 md:py-12 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 hover:border-jyothi-amber/30 transition-all group">
              <Target className="text-jyothi-amber w-10 md:w-12 h-10 md:h-12 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-black text-white font-heading mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">To deliver integrated construction solutions with unmatched precision and sustainability.</p>
            </div>
            <div className="bg-jyothi-amber p-8 md:p-12 rounded-3xl shadow-2xl">
              <Eye className="text-jyothi-blue w-10 md:w-12 h-10 md:h-12 mb-8" />
              <h3 className="text-xl md:text-2xl font-black text-jyothi-blue font-heading mb-4">Our Vision</h3>
              <p className="text-jyothi-blue/80 leading-relaxed font-bold text-sm md:text-base">To be the most trusted and innovative vertically integrated construction group in the nation.</p>
            </div>
            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 hover:border-jyothi-amber/30 transition-all group">
              <Users className="text-jyothi-amber w-10 md:w-12 h-10 md:h-12 mb-8 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl md:text-2xl font-black text-white font-heading mb-4">Core Values</h3>
              <p className="text-gray-400 leading-relaxed font-medium text-sm md:text-base">Integrity, Quality, Safety, and Innovation drive every foundation we build.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
