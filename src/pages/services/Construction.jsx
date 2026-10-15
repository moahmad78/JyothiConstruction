import { motion } from 'framer-motion';
import { ChevronRight, Phone, Mail, CheckCircle2, Factory, ShieldCheck, Zap, Truck, Microscope, ClipboardList, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';

const Construction = () => {
  const offerings = [
    { title: 'Project Management', icon: <ClipboardList className="w-5 h-5" />, desc: 'End-to-end planning, scheduling, and budget management.' },
    { title: 'Civil Engineering', icon: <Zap className="w-5 h-5" />, desc: 'Expert structural design and site preparation services.' },
    { title: 'Quality Audits', icon: <Microscope className="w-5 h-5" />, desc: 'Rigorous third-party and internal quality verification.' },
    { title: 'Integrated Supply', icon: <Truck className="w-5 h-5" />, desc: 'In-house RMC and material sourcing for efficiency.' },
    { title: 'Site Finishing', icon: <Factory className="w-5 h-5" />, desc: 'Premium architectural finishing and landscape integration.' },
    { title: 'Safety Compliance', icon: <ShieldCheck className="w-5 h-5" />, desc: 'Zero-compromise safety protocols for every worker.' }
  ];

  const stages = [
    {
      title: 'Commercial & Corporate Execution',
      desc: 'Precision site inspections, rebar verification, and strict adherence to structural design parameters.',
      img: '/assets/Commercial/01.JPG'
    },
    {
      title: 'Residential Landmarks',
      desc: 'Thoughtfully planned residential community developments built for enduring generational value.',
      img: '/assets/Residential/01.JPG'
    },
    {
      title: 'Industrial & Heavy Infrastructure',
      desc: 'Immediate access to in-house RMC, aggregates, and block manufacturing ensuring unmatched build speed.',
      img: '/assets/Industrial/02.JPG'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32">
      <section className="relative min-h-[50vh] md:min-h-[56vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Jyothi/IMG_0229.JPG" 
            alt="The Full Jyothi Construction Engineering & Leadership Team" 
            className="w-full h-full object-cover object-[center_30%] brightness-105 contrast-105"
          />
          {/* Gentle edge contrast gradients ensuring full image visibility */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
        <div className="container relative z-10 px-6 max-w-5xl mx-auto text-center py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block w-full bg-jyothi-blue/75 backdrop-blur-md px-6 py-8 sm:px-12 sm:py-10 rounded-2xl md:rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 block">
              Turnkey & Civil Engineering Excellence
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 font-heading tracking-tight drop-shadow-md">
              Construction <span className="text-jyothi-amber">Services</span>
            </h1>
            <div className="w-20 h-1.5 bg-jyothi-amber mx-auto mb-4 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl mx-auto font-sans font-normal leading-relaxed drop-shadow-sm">
              Controlled Excellence from foundation to final finish. Comprehensive residential, commercial, and industrial turnkey execution backed by our in-house supply chain.
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
                  Integrated Construction & Engineering
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With over <strong className="text-jyothi-amber">60+ Years of Legacy</strong>, Jyothi Construction has redefined building standards through an integrated approach. By manufacturing our own premium materials, we maintain unmatched control over project quality, costs, and timelines.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our portfolio ranges from large-scale industrial complexes to high-end residential projects, each executed with a commitment to structural integrity and engineering precision.
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
                <h3 className="text-2xl font-bold text-jyothi-blue mb-8 font-heading">Execution Philosophy</h3>
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
                  <Image src="/assets/images/conmix1.jpg" alt="Jyothi ConMix Concrete Transit Mixer" className="w-full h-full object-cover min-h-[300px]" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-heading">Integrated Supply Chain</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Our direct integration with Jyothi ConMix automated batching plants, heavy aggregate crushers, and concrete block manufacturing eliminates third-party dependencies, ensuring high-strength concrete delivered on time.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Computerized concrete batching (Jyothi ConMix).',
                      '18 truck transit mixers & 5 high-pressure pumps.',
                      'In-house NABL-aligned testing & quality verification.',
                      'On-time pour scheduling for zero cold joints.'
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/90">
                        <CheckCircle2 size={20} className="text-jyothi-amber shrink-0" />
                        <span className="text-sm font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-jyothi-blue mb-6 font-heading">Focus Areas</h4>
                  <ul className="space-y-3">
                    {[
                      { name: 'Residential Construction', desc: 'Luxury homes, villas & gated communities' },
                      { name: 'Commercial Infrastructure', desc: 'Corporate tech parks & retail hubs' },
                      { name: 'Industrial Engineering', desc: 'Warehouses, PEB sheds & factories' },
                      { name: 'Infrastructure & Turnkey', desc: 'End-to-end civil execution & foundations' }
                    ].map((cat, i) => (
                      <li key={i}>
                        <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                          <span className="font-semibold text-gray-800 block text-sm">{cat.name}</span>
                          <span className="text-gray-500 text-xs block mt-0.5">{cat.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-jyothi-blue rounded-2xl p-8 relative overflow-hidden group/callback">
                  <div className="absolute inset-0 opacity-20 group-hover/callback:scale-110 transition-transform duration-700">
                    <img src="/assets/images/conmix3.jpg" alt="Support" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-jyothi-blue via-jyothi-blue/90 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-jyothi-amber/10 rounded-full -mr-16 -mt-16"></div>
                  <h4 className="text-2xl font-bold text-white mb-2 relative z-10 font-heading">Start Your Project?</h4>
                  <p className="text-gray-300 text-xs sm:text-sm mb-6 relative z-10 leading-relaxed">Discuss your architectural and engineering vision with our senior project consultants.</p>
                  
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 bg-jyothi-amber/20 rounded-xl flex items-center justify-center text-jyothi-amber shrink-0 mt-0.5">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Corporate Office</p>
                        <p className="text-xs text-white leading-relaxed mt-0.5 font-medium">
                          #19, 1st Cross, Veerannapalya, Near SBI Bank, AC Post, Bangalore - 560045
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 bg-jyothi-amber/20 rounded-xl flex items-center justify-center text-jyothi-amber shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Connect Directly</p>
                        <a href="tel:+919148578784" className="text-xs sm:text-sm font-bold text-white hover:text-jyothi-amber block">+91 91485 78784</a>
                        <a href="tel:+919900900826" className="text-xs sm:text-sm font-bold text-white hover:text-jyothi-amber block">+91 99009 00826</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 bg-jyothi-amber/20 rounded-xl flex items-center justify-center text-jyothi-amber shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Project Inquiry</p>
                        <a href="mailto:constructions@jyothigroups.com" className="text-xs font-bold text-white hover:text-jyothi-amber block break-all">constructions@jyothigroups.com</a>
                      </div>
                    </div>

                    <Link to="/contact" className="block w-full py-3.5 bg-jyothi-amber text-jyothi-blue font-bold rounded-xl text-center hover:bg-white hover:text-jyothi-blue transition-all shadow-xl mt-3 text-xs sm:text-sm uppercase tracking-wider">
                      Request Consultation
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

export default Construction;
