import { motion } from 'framer-motion';
import { Award, Target, Eye, Users, ChevronRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-jyothi-blue min-h-screen pt-24 md:pt-40">
      
      {/* Page Hero Banner */}
      <section className="relative h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Jyothi/IMG_9578.JPG" 
            alt="Jyothi Heavy Infrastructure & Granite Extraction" 
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jyothi-blue/85 via-jyothi-blue/70 to-jyothi-blue"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.4em] text-xs mb-4 block">
              60+ Years of Engineering & Trust
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white font-heading tracking-tight mb-4">
              Six Decades of Infrastructure <span className="text-jyothi-amber">Leadership</span>
            </h1>
            <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              Delivering architectural integrity, self-reliant manufacturing, and structural excellence across South India since 1965.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Content: Narrative & Full-Width Staff Team Showcase */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-jyothi-orange/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Header Narrative */}
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-jyothi-amber text-xs font-black uppercase tracking-[0.3em] mb-4 block">
                Building the Future
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white font-heading leading-tight mb-6">
                Technical Excellence in Every <span className="text-jyothi-amber">Structural</span> Foundation
              </h2>
              <p className="text-gray-300 text-base md:text-xl leading-relaxed font-medium max-w-3xl mx-auto mb-8">
                Founded with a deep-rooted commitment to structural integrity, Jyothi Construction has evolved into a premier vertically integrated construction powerhouse. From raw granite extraction and high-capacity batching to turnkey execution, we ensure total quality control.
              </p>

              {/* Key Highlights Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-2xl md:text-3xl font-black text-jyothi-amber font-heading">60+</span>
                  <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Years of Trust</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-2xl md:text-3xl font-black text-white font-heading">100%</span>
                  <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">In-House Supply</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-2xl md:text-3xl font-black text-jyothi-amber font-heading">500+</span>
                  <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Major Projects</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-2xl md:text-3xl font-black text-white font-heading">4</span>
                  <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Integrated Plants</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full-Width Authentic Team & Leadership Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-7xl mx-auto"
          >
            {/* Outer Accent Frame */}
            <div className="absolute -inset-2 md:-inset-4 border-2 border-jyothi-amber/25 rounded-3xl z-0 pointer-events-none"></div>

            {/* Panoramic Staff Card */}
            <div className="relative z-10 overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl bg-jyothi-blue/60 border border-white/15">
              <img 
                src="/Jyothi/IMG_0229.JPG" 
                alt="Jyothi Construction Leadership and Core Staff Team" 
                className="w-full h-auto object-contain block"
              />
              
              {/* Bottom Caption Bar */}
              <div className="p-4 md:p-6 bg-gradient-to-r from-jyothi-blue via-[#0d1c30] to-jyothi-blue border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-white font-black text-base md:text-xl font-heading flex items-center gap-2">
                    Jyothi Construction Leadership & Core Team
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm font-medium mt-0.5">
                    The engineers, directors, and technical workforce driving our engineering excellence across South India.
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-jyothi-amber/15 border border-jyothi-amber/30 text-jyothi-amber text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-jyothi-amber animate-pulse"></span>
                  Corporate Headquarters
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* On-Site Engineering & Operations Showcase */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-jyothi-amber text-xs font-black uppercase tracking-[0.3em] mb-3 block">Field Excellence</span>
              <h3 className="text-2xl md:text-4xl font-black text-white font-heading mb-6">
                On-Site Engineering & <span className="text-jyothi-amber">Plant Operations</span>
              </h3>
              <p className="text-gray-300 leading-relaxed font-medium mb-6">
                Our certified engineers, plant operators, and quality-control specialists work seamlessly at our automated batching and manufacturing facilities to guarantee punctual delivery and top-grade mix performance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-jyothi-blue/80 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-jyothi-amber">100%</div>
                  <div className="text-xs text-gray-400 font-bold uppercase mt-1">In-House Quality Control</div>
                </div>
                <div className="bg-jyothi-blue/80 p-4 rounded-xl border border-white/10">
                  <div className="text-2xl font-black text-jyothi-amber">24/7</div>
                  <div className="text-xs text-gray-400 font-bold uppercase mt-1">Operational Fleet</div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl group">
              <img 
                src="/Jyothi/IMG_0369.JPG" 
                alt="Jyothi Construction On-Site Technical Engineering & Quality Testing" 
                className="w-full h-80 md:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Grid */}
      <section className="py-10 md:py-16">
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
