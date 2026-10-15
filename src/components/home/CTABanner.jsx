import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const CTABanner = () => {
  const { openModal } = useModal();
  return (
    <section className="py-10 md:py-20 bg-jyothi-blue relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-jyothi-amber/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-jyothi-orange/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl">
          <div className="max-w-xl lg:max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-amber/15 border border-jyothi-amber/30 text-jyothi-amber text-xs font-bold tracking-widest uppercase mb-3">
              Jyothi Construction
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-heading leading-tight mb-4">
              Crafting structures that stand strong <br className="hidden sm:inline" />
              <span className="text-jyothi-amber">for generations.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10 mt-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="text-jyothi-amber font-bold">Call:</span>
                <a href="tel:+919148578784" className="text-white hover:text-jyothi-amber font-bold transition-colors">+91 91485 78784</a>
                <span>/</span>
                <a href="tel:+919900900826" className="text-white hover:text-jyothi-amber font-bold transition-colors">+91 99009 00826</a>
              </div>
              <span className="hidden sm:inline text-white/30">•</span>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <span className="text-jyothi-amber font-bold">Email:</span>
                <a href="mailto:constructions@jyothigroups.com" className="text-white hover:text-jyothi-amber font-bold transition-colors">constructions@jyothigroups.com</a>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 shrink-0 mt-6 lg:mt-0">
            <button 
              onClick={openModal}
              className="px-6 md:px-8 py-3.5 md:py-4 bg-jyothi-amber text-jyothi-blue text-xs md:text-sm font-black rounded-xl shadow-lg hover:bg-jyothi-orange hover:text-white transition-all hover:scale-105 active:scale-95 font-heading tracking-widest uppercase flex items-center gap-2 whitespace-nowrap"
            >
              Get a Quote <ArrowRight size={16} />
            </button>
            <Link 
              to="/contact" 
              className="px-6 md:px-8 py-3.5 md:py-4 bg-white/5 border border-white/20 text-white text-xs md:text-sm font-black rounded-xl hover:bg-white/10 transition-all font-heading tracking-widest uppercase text-center whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
