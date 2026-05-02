import { motion } from 'framer-motion';
import { Award, Target, Eye, Users } from 'lucide-react';
import Image from '../components/Image';

const AboutPage = () => {
  return (
    <div className="bg-transparent min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-transparent">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-4 font-heading">About Us</h1>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight font-heading mb-8">
              Pioneering Construction for Over 50 Years
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed font-light">
              From our humble beginnings to becoming an industry leader, Jyothi Construction has been synonymous with trust, quality, and architectural excellence across the nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Pull Quote */}
      <section className="py-20 text-center bg-transparent relative">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-6xl font-serif text-brand-secondary leading-none">"</span>
            <h3 className="text-3xl md:text-5xl font-serif italic text-white leading-tight mt-[-20px]">
              Build strong foundations today <br className="hidden md:block"/> for a better tomorrow.
            </h3>
            <span className="text-6xl font-serif text-brand-secondary leading-none block rotate-180 mt-[-40px]">"</span>
          </motion.div>
        </div>
      </section>

      {/* Legacy & Evolution */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <Image 
                src="/assets/images/unsplash-9aaa201e.jpg" 
                alt="Construction History" 
                className="rounded-2xl shadow-2xl object-cover h-[500px] w-full sepia hover:sepia-0 transition-all duration-700"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">Our Journey</h3>
              <h4 className="text-4xl font-extrabold text-white mb-6 font-heading leading-tight">Build strong foundations today for a better tomorrow</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded over 50 years ago, Jyothi Construction started with a simple vision: to elevate the standard of building infrastructures. Over the decades, our group has evolved from a local contractor into a vertically integrated construction powerhouse, serving the <strong>Residential, Commercial, and Infrastructure</strong> sectors.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, guided by a <strong>New Generation of Leadership</strong>, we are proud to combine our deep-rooted traditional values with cutting-edge contemporary practices. By manufacturing our own premium materials, we maintain total control over the supply chain, ensuring our legacy of trust and quality continues into the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-brand-secondary" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 font-heading">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To deliver integrated construction solutions with unmatched precision, ensuring absolute quality control across every phase of development while adhering to the highest standards of safety and sustainability.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-jyothi-green/80 backdrop-blur-md p-12 rounded-2xl shadow-lg border border-jyothi-green/50"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-brand-secondary" />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-4 font-heading">Our Vision</h3>
              <p className="text-white/90 leading-relaxed text-lg">
                To be the most trusted and vertically integrated construction group in the nation, continuously innovating the way we build the future and shaping landscapes that stand the test of time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Certifications */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h3 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">The Foundation</h3>
          <h4 className="text-4xl font-extrabold text-white mb-16 font-heading">Leadership & Industry Certifications</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Leadership Placeholder */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-white/10 border-4 border-white/30 shadow-xl">
                <Image src="/assets/images/unsplash-61766d1b.jpg" alt="Leadership" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <h5 className="text-2xl font-bold text-white font-heading">Founder / MD Name</h5>
              <p className="text-brand-secondary font-bold mb-4 uppercase tracking-widest text-sm">Managing Director</p>
              <p className="text-gray-300 max-w-md">
                Guiding the company with decades of hands-on experience and an unyielding commitment to engineering perfection.
              </p>
            </div>

            {/* Certifications Placeholder */}
            <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <Award className="w-10 h-10 text-brand-secondary" />
                  <span className="font-bold text-white text-sm font-heading">ISO 9001:2015</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <Award className="w-10 h-10 text-brand-secondary" />
                  <span className="font-bold text-white text-sm font-heading">Safety Excellence</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <Award className="w-10 h-10 text-brand-secondary" />
                  <span className="font-bold text-white text-sm font-heading">Green Building</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <Users className="w-10 h-10 text-brand-secondary" />
                  <span className="font-bold text-white text-sm font-heading">IGBC Member</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
