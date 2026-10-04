import { motion } from 'framer-motion';
import { ChevronRight, Phone, Mail, CheckCircle2, Factory, ShieldCheck, Zap, Truck, Microscope, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';

const RMC = () => {
  const offerings = [
    { title: 'Custom Mix Designs', icon: <ClipboardList className="w-5 h-5" />, desc: 'Engineered formulations for M20 to M80 grade requirements.' },
    { title: 'Automated Batching', icon: <Zap className="w-5 h-5" />, desc: 'Fully computerized plant for consistent water-cement ratios.' },
    { title: 'Quality Assurance', icon: <Microscope className="w-5 h-5" />, desc: 'In-house lab for cube testing and chemical analysis.' },
    { title: 'Transit Fleet', icon: <Truck className="w-5 h-5" />, desc: 'Large fleet of transit mixers ensuring fresh delivery.' },
    { title: 'Concrete Pumping', icon: <Factory className="w-5 h-5" />, desc: 'High-reach stationary and mobile boom pumps.' },
    { title: 'Site Supervision', icon: <ShieldCheck className="w-5 h-5" />, desc: 'Expert technical support during casting and pouring.' }
  ];

  const stages = [
    {
      title: 'Automated Conmix Batching',
      desc: 'Computerized batching plant with twin-shaft mixers for exact water-cement ratio and slump consistency.',
      img: '/Jyothi/IMG_0433.JPG'
    },
    {
      title: 'Rigorous On-Site & Lab QA',
      desc: 'Precision cube mould casting and compressive strength testing in our certified testing laboratory.',
      img: '/Jyothi/IMG_9985.JPG'
    },
    {
      title: 'Transit Mixer Fleet Logistics',
      desc: 'High-capacity transit mixer fleet deployed with computerized dispatch for punctual delivery to casting sites.',
      img: '/Jyothi/IMG_0038.JPG'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-[48vh] md:h-[56vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Jyothi/IMG_0061.JPG" 
            alt="Real Jyothi Transit Mixer Fleet & Quality Casting Operations" 
            className="w-full h-full object-cover object-[center_42%] brightness-105 contrast-105"
          />
          {/* Gentle edge contrast gradients ensuring full image visibility */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-jyothi-blue/65 backdrop-blur-md px-6 py-5 sm:px-10 sm:py-6 rounded-2xl md:rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] max-w-2xl"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-2 block">
              High-Performance Batching
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 font-heading tracking-tight drop-shadow-md">
              Ready Mix <span className="text-jyothi-amber">Concrete (RMC)</span>
            </h1>
            <div className="w-16 h-1 bg-jyothi-amber mx-auto mb-3 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base text-gray-100 max-w-xl mx-auto font-sans font-normal leading-relaxed drop-shadow-sm">
              Precision Manufacturing for unmatched structural durability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-jyothi-blue mb-6 font-heading">
                  High-Performance Concrete Solutions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                   With over <strong className="text-jyothi-amber font-extrabold">60+ Years of Legacy</strong>, Jyothi Construction delivers industrial-grade <strong className="text-jyothi-amber font-extrabold">Ready Mix Concrete (RMC)</strong> designed for modern engineering challenges. Our fully automated batching plants provide absolute control over the mixing process, ensuring structural strength in every cubic meter.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialize in high-strength formulations, fiber-reinforced concrete, and temperature-controlled mixes, providing a complete solution from the batching plant to the final structural pour.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {offerings.map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-jyothi-amber/30 transition-colors">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-jyothi-amber">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-jyothi-blue mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-bold text-jyothi-blue mb-8 font-heading">Our RMC Workflow</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stages.map((stage, i) => (
                    <div key={i} className="group overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <div className="h-40 overflow-hidden">
                        <Image src={stage.img} alt={stage.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                        <h5 className="font-bold text-jyothi-blue mb-2 text-sm uppercase tracking-wider">{stage.title}</h5>
                        <p className="text-xs text-gray-600 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-jyothi-blue rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <Image src="/Jyothi/IMG_0038.JPG" alt="Computerized RMC Batching Plant & Transit Loading - Jyothi Construction" className="w-full h-full object-cover min-h-[300px]" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-heading">Why Choose Jyothi RMC?</h3>
                  <ul className="space-y-4">
                    {[
                      'Computerized precision in every mix.',
                      'Guaranteed high compressive strength.',
                      'Zero-compromise material sourcing.',
                      'Rapid, localized site delivery.'
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/90">
                        <CheckCircle2 size={20} className="text-jyothi-amber shrink-0" />
                        <span className="text-base">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-jyothi-blue mb-6 font-heading">Services</h4>
                  <ul className="space-y-3">
                    {['Standard Grade Concrete', 'High Strength Mixes', 'Fiber Reinforced Concrete', 'Special Application Mixes'].map((cat, i) => (
                      <li key={i}>
                        <Link to="#" className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:border-jyothi-amber hover:text-jyothi-blue transition-all group shadow-sm">
                          <span className="font-semibold text-gray-800 group-hover:text-jyothi-blue">{cat}</span>
                          <ChevronRight size={18} className="text-gray-400 group-hover:text-jyothi-amber" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-jyothi-blue rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-jyothi-amber/10 rounded-full -mr-16 -mt-16"></div>
                  <h4 className="text-2xl font-bold text-white mb-4 relative z-10 font-heading">Need Concrete?</h4>
                  <p className="text-gray-300 mb-8 relative z-10">Connect with our mix engineers to finalize your structural requirements.</p>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-jyothi-amber/20 rounded-full flex items-center justify-center text-jyothi-amber">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Call Expert</p>
                        <p className="text-lg font-bold text-white">+91 9008 777 742</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-jyothi-amber/20 rounded-full flex items-center justify-center text-jyothi-amber">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Email Us</p>
                        <p className="text-lg font-bold text-white">rmc@jyothi.com</p>
                      </div>
                    </div>

                    <Link to="/contact" className="block w-full py-4 bg-jyothi-amber text-jyothi-blue font-bold rounded-lg text-center hover:bg-jyothi-orange hover:text-white transition-all shadow-xl mt-4">
                      Get RMC Quote
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default RMC;
