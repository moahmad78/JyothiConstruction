import { motion } from 'framer-motion';
import { ChevronRight, FileText, Download, Phone, Mail, CheckCircle2, Factory, ShieldCheck, Zap, Truck, Microscope, ClipboardList } from 'lucide-react';
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
      title: 'Precision Batching Control',
      desc: 'Real-time monitoring of raw materials and moisture content for optimal workability.',
      img: '/assets/images/rmc-expert.png'
    },
    {
      title: 'Structural QA Testing',
      desc: 'Rigorous 7-day and 28-day strength verification protocols for every batch.',
      img: '/assets/images/unsplash-515791c6.jpg'
    },
    {
      title: 'Site Delivery Logistics',
      desc: 'Optimized routing and GPS tracking to ensure concrete reaches the site on time.',
      img: '/assets/images/Construction.jpeg'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/assets/images/rmc-expert.png" 
          alt="Ready Mix Concrete Production" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading"
          >
            Ready Mix Concrete (RMC)
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
            Precision Manufacturing for unmatched structural durability.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Content Column (Left) */}
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#006837] mb-6 font-heading">
                  High-Performance Concrete Solutions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With over <strong className="text-[#006837]">60+ Years of Legacy</strong>, Jyothi Construction delivers industrial-grade Ready Mix Concrete (RMC) designed for modern engineering challenges. Our fully automated batching plants provide absolute control over the mixing process, ensuring structural strength in every cubic meter.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We specialize in high-strength formulations, fiber-reinforced concrete, and temperature-controlled mixes, providing a complete solution from the batching plant to the final structural pour.
                </p>
              </div>

              {/* Service Offerings Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {offerings.map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-brand-secondary/30 transition-colors">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-secondary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#006837] mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Strategic Stages */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-[#006837] mb-8 font-heading">Our RMC Workflow</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {stages.map((stage, i) => (
                    <div key={i} className="group overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <div className="h-40 overflow-hidden">
                        <Image src={stage.img} alt={stage.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                        <h5 className="font-bold text-[#006837] mb-2 text-sm uppercase tracking-wider">{stage.title}</h5>
                        <p className="text-xs text-gray-600 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exceptional Service Benefits */}
              <div className="bg-[#006837] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <Image src="/assets/images/unsplash-5c4bd1a2.jpg" alt="RMC Quality Control" className="w-full h-full object-cover min-h-[300px]" />
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
                        <CheckCircle2 size={20} className="text-brand-secondary shrink-0" />
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
                  <h4 className="text-xl font-bold text-[#006837] mb-6 font-heading">Services</h4>
                  <ul className="space-y-3">
                    {['Standard Grade Concrete', 'High Strength Mixes', 'Fiber Reinforced Concrete', 'Special Application Mixes'].map((cat, i) => (
                      <li key={i}>
                        <Link to="#" className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:border-brand-secondary hover:text-[#006837] transition-all group">
                          <span className="font-medium">{cat}</span>
                          <ChevronRight size={18} className="text-gray-300 group-hover:text-brand-secondary" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Download Brochure */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <h4 className="text-xl font-bold text-[#006837] mb-6 font-heading">RMC Brochure</h4>
                  <p className="text-sm text-gray-600 mb-6">Download our mix catalog and quality certificate reports.</p>
                  <div className="space-y-4">
                    <button className="w-full py-4 bg-[#C5A059] text-white font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-[#B38E48] transition-colors shadow-lg">
                      <FileText size={20} /> Download PDF
                    </button>
                    <button className="w-full py-4 bg-white border-2 border-[#C5A059] text-[#C5A059] font-bold rounded-lg flex items-center justify-center gap-3 hover:bg-[#C5A059] hover:text-white transition-colors">
                      <Download size={20} /> Technical DOC
                    </button>
                  </div>
                </div>

                {/* Need Help Box */}
                <div className="bg-[#002B1B] rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-full -mr-16 -mt-16"></div>
                  <h4 className="text-2xl font-bold text-white mb-4 relative z-10 font-heading">Need Concrete?</h4>
                  <p className="text-gray-300 mb-8 relative z-10">Connect with our mix engineers to finalize your structural requirements.</p>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-secondary/20 rounded-full flex items-center justify-center text-brand-secondary">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Call Expert</p>
                        <p className="text-lg font-bold text-white">+91 9008 777 742</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-secondary/20 rounded-full flex items-center justify-center text-brand-secondary">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Email Us</p>
                        <p className="text-lg font-bold text-white">rmc@jyothi.com</p>
                      </div>
                    </div>

                    <Link to="/contact" className="block w-full py-4 bg-[#C5A059] text-white font-bold rounded-lg text-center hover:bg-[#B38E48] transition-colors shadow-xl mt-4">
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
