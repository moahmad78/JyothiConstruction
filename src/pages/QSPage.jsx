import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const QSPage = () => {
  return (
    <div className="bg-jyothi-blue min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl w-full text-center p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-jyothi-amber/15 border border-jyothi-amber/30 flex items-center justify-center text-jyothi-amber mx-auto mb-6">
          <ShieldCheck size={32} />
        </div>
        
        <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs mb-2 block">
          Quality & Safety
        </span>
        
        <h1 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mb-4">
          Q&S Standards
        </h1>
        
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
          Our zero-compromise quality assurance protocols, site safety guidelines, and engineering compliance standards will be updated here shortly.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-jyothi-amber hover:text-jyothi-blue text-white text-xs font-bold uppercase tracking-wider transition-all"
        >
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default QSPage;
