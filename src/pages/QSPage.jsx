import { motion } from 'framer-motion';
import { ShieldCheck, Award, Microscope, HeartHandshake, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const operatingPrinciples = [
  {
    title: 'Safety First',
    desc: '"Safety is a moral obligation." The stated goal across every plant, project, and site is zero harm — no exceptions.',
    icon: ShieldCheck
  },
  {
    title: 'Integrity & Transparency',
    desc: 'Every vertical is expected to act with honesty, fairness and accountability — with customers, regulators and each other.',
    icon: Award
  },
  {
    title: 'Passion for Innovation',
    desc: 'A standing mandate to keep improving existing standards, rather than settle for what already passes inspection.',
    icon: Microscope
  },
  {
    title: 'Customer Centricity',
    desc: 'Quality decisions are made from the site\'s point of view — materials and methods that make the customer\'s build easier and stronger.',
    icon: Users
  },
  {
    title: 'Teamwork',
    desc: 'The best results come from collaboration across staff, customers, partners, communities, subcontractors and suppliers.',
    icon: HeartHandshake
  },
  {
    title: 'People',
    desc: 'Jyothi Groups invests in employees as partners in success, within a respectful, diverse, and healthy workplace.',
    icon: CheckCircle2
  }
];

const certifications = [
  {
    title: 'ISO 9001:2015 Certified',
    subtitle: 'Bureau Veritas Audited',
    desc: 'Total quality management system across precast concrete blocks, RMC batching, and stone crushing.'
  },
  {
    title: 'RMC Capability Certified',
    subtitle: 'QCI Aligned Batching',
    desc: 'Certified computerized concrete plants ensuring precise water-cement ratio and continuous slump monitoring.'
  },
  {
    title: 'IS Standards Compliance',
    subtitle: 'Bureau of Indian Standards',
    desc: 'Adherence to IS 456 (Concrete), IS 383 (Aggregates), IS 2185 (Blocks), and IS 10262 (Mix Design).'
  }
];

const QSPage = () => {
  return (
    <div className="bg-jyothi-blue min-h-screen pt-24 md:pt-36">
      
      {/* Hero Banner */}
      <section className="relative min-h-[46vh] md:min-h-[52vh] py-16 md:py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Jyothi/IMG_0369.JPG" 
            alt="Jyothi Construction Quality & Safety Field Operations" 
            className="w-full h-full object-cover object-[center_35%] brightness-105 contrast-105"
          />
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-jyothi-blue to-transparent pointer-events-none"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-jyothi-blue/70 backdrop-blur-md px-6 py-6 sm:px-12 sm:py-8 rounded-2xl md:rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs mb-2 block">
              Group Assurance Framework
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white font-heading tracking-tight mb-3 drop-shadow-md">
              Every Batch Tested. <br />
              <span className="text-jyothi-amber">Every Worker Brought Home.</span>
            </h1>
            <div className="w-20 h-1 bg-jyothi-amber mx-auto mb-3 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base text-gray-100 max-w-2xl mx-auto font-sans font-normal leading-relaxed drop-shadow-sm">
              Since 1967, quality at Jyothi Group has never been a checkbox — it is a stated group value, tested at every stage from quarry to final dispatch with one uncompromising goal: zero harm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-20 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-jyothi-amber text-xs font-black uppercase tracking-[0.3em] mb-2 block">Certified Excellence</span>
            <h2 className="text-2xl md:text-4xl font-black text-white font-heading">Our Quality & Safety Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-jyothi-amber/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-jyothi-amber/15 text-jyothi-amber flex items-center justify-center mb-6">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-white font-heading mb-1">{cert.title}</h3>
                <span className="text-jyothi-amber text-xs font-bold uppercase tracking-wider block mb-3">{cert.subtitle}</span>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Operating Principles */}
      <section className="py-12 md:py-24 bg-jyothi-blue border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-jyothi-amber text-xs font-black uppercase tracking-[0.3em] mb-2 block">Operating Principles</span>
            <h2 className="text-2xl md:text-4xl font-black text-white font-heading">Values That Govern Every Site</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingPrinciples.map((op, idx) => {
              const Icon = op.icon;
              return (
                <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-jyothi-amber/40 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-jyothi-amber/10 text-jyothi-amber flex items-center justify-center mb-5 group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-jyothi-amber transition-colors">{op.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{op.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-jyothi-amber text-jyothi-blue font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white transition-all shadow-xl"
            >
              Consult with Our Safety Engineers
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default QSPage;
