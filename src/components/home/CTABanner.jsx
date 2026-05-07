import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

const CTABanner = () => {
  const { openModal } = useModal();
  return (
    <section className="py-10 md:py-20 bg-jyothi-blue relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jyothi-amber/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-jyothi-orange/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-2xl md:text-6xl font-black text-white font-heading leading-tight mb-6">
              Ready to Start Your <br />
              <span className="text-jyothi-amber">Next Landmark?</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-400 leading-relaxed font-medium">
              Join hands with the industry leaders. Let's discuss your project and build something extraordinary together.
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 shrink-0 mt-8 lg:mt-0">
            <button 
              onClick={openModal}
              className="px-6 md:px-12 py-3 md:py-5 bg-jyothi-amber text-jyothi-blue text-xs md:text-lg font-black rounded-xl shadow-lg hover:bg-jyothi-orange hover:text-white transition-all hover:scale-105 active:scale-95 font-heading tracking-widest uppercase flex items-center gap-2 md:gap-3 whitespace-nowrap"
            >
              Get a Quote <ArrowRight size={16} className="md:w-5 md:h-5" />
            </button>
            <Link 
              to="/contact" 
              className="px-6 md:px-12 py-3 md:py-5 bg-white/5 border border-white/20 text-white text-xs md:text-lg font-black rounded-xl hover:bg-white/10 transition-all font-heading tracking-widest uppercase text-center whitespace-nowrap"
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
