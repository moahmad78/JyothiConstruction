import { motion } from 'framer-motion';
import { ChevronRight, FileText, Download, Phone, Mail, CheckCircle2, Factory, ShieldCheck, Zap, Truck, Microscope, ClipboardList } from 'lucide-react';
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
      title: 'Structural Integrity First',
      desc: 'Focusing on deep foundations and load-bearing strength using premium in-house materials.',
      img: '/assets/images/construction.jpeg'
    },
    {
      title: 'Precision Site Execution',
      desc: 'Real-time project tracking and modular construction techniques for faster delivery.',
      img: '/assets/images/rmc-expert.png'
    },
    {
      title: 'Integrated Supply Chain',
      desc: 'Reducing project delays through immediate access to our RMC and aggregate plants.',
      img: '/assets/images/aggregates-expert.png'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/assets/images/construction.jpeg" 
          alt="Active Construction Site Execution" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-heading"
          >
            Construction Services
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-brand-secondary mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto font-sans"
          >
            Controlled Excellence from foundation to final finish.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Content Column (Left) */}
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

              {/* Service Offerings Grid */}
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

              {/* Strategic Stages */}
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

              {/* Exceptional Service Benefits */}
              <div className="bg-jyothi-blue rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <Image src="/assets/images/8.jpg" alt="Construction Site" className="w-full h-full object-cover min-h-[300px]" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-6 font-heading">Why Choose Jyothi?</h3>
                  <ul className="space-y-4">
                    {[
                      'Generations of structural expertise.',
                      'In-house material quality control.',
                      'Strict adherence to global safety.',
                      'On-time project delivery records.'
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

            {/* Sticky Sidebar (Right) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Categories Widget */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-jyothi-blue mb-6 font-heading">Focus Areas</h4>
                  <ul className="space-y-3">
                    {['Residential Construction', 'Commercial Infrastructure', 'Industrial Engineering', 'Infrastructure Projects'].map((cat, i) => (
                      <li key={i}>
                        <Link to="#" className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:border-jyothi-amber hover:text-jyothi-blue transition-all group">
                          <span className="font-medium">{cat}</span>
                          <ChevronRight size={18} className="text-gray-300 group-hover:text-jyothi-amber" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Brochure */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-jyothi-blue mb-6 font-heading">Our Portfolio</h4>
                  <p className="text-sm text-gray-600 mb-6">Explore our iconic projects and engineering capability profile.</p>
                  <div className="space-y-4">
                    <button className="w-full py-4 bg-jyothi-amber text-jyothi-blue font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-jyothi-orange hover:text-white transition-colors shadow-lg">
                      <FileText size={20} /> Download PDF
                    </button>
                    <button className="w-full py-4 bg-white border-2 border-jyothi-amber text-jyothi-amber font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-jyothi-amber hover:text-white transition-colors">
                      <Download size={20} /> Corporate DOC
                    </button>
                  </div>
                </div>

                {/* Need Help Box */}
                <div className="bg-jyothi-blue rounded-2xl p-8 relative overflow-hidden group/callback">
                  <div className="absolute inset-0 opacity-20 group-hover/callback:scale-110 transition-transform duration-700">
                    <img src="/assets/images/callback.jpg" alt="Support" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-jyothi-blue via-jyothi-blue/90 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-jyothi-amber/10 rounded-full -mr-16 -mt-16"></div>
                  <h4 className="text-2xl font-bold text-white mb-4 relative z-10 font-heading">Start Your Project?</h4>
                  <p className="text-gray-300 mb-8 relative z-10">Discuss your engineering vision with our senior project consultants.</p>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-jyothi-amber/20 rounded-full flex items-center justify-center text-jyothi-amber">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Connect Directly</p>
                        <p className="text-lg font-bold text-white">+91 9008 777 742</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-jyothi-amber/20 rounded-full flex items-center justify-center text-jyothi-amber">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Project Inquiry</p>
                        <p className="text-lg font-bold text-white">build@jyothi.com</p>
                      </div>
                    </div>

                    <Link to="/contact" className="block w-full py-4 bg-jyothi-amber text-jyothi-blue font-bold rounded-lg text-center hover:bg-jyothi-orange hover:text-white transition-all shadow-xl mt-4">
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
