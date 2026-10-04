/**
 * @author Sahil Sheikh
 * @project Jyothi Construction
 * @link https://www.instagram.com/sahil_sheikh78/
 */
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, HardHat, Truck, Mountain, LayoutGrid, Wrench, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  const isActive = (path) => location.pathname === path;
  
  const getLinkClass = (path) => {
    return `transition-colors text-sm font-bold uppercase tracking-wider ${
      isActive(path) ? 'text-jyothi-amber' : 'text-white hover:text-jyothi-amber'
    }`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    console.log("%c🛡️ PRECISION ENGINEERED BY SAHIL SHEIKH | IG: @SAHIL_SHEIKH78", "color: #F59E0B; font-weight: bold; font-size: 12px;");
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock viewport scroll while mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-black/15 ${
      isScrolled 
        ? 'py-2.5 shadow-[0_12px_35px_rgba(0,0,0,0.6)]' 
        : 'py-3 md:py-4 shadow-[0_4px_25px_rgba(0,0,0,0.4)]'
    }`}>
      <div 
        className="absolute inset-0 pointer-events-none -z-10 backdrop-blur-xl"
        style={{
          background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 18%, #fcfdfd 20%, #eeeff0 22%, #daddde 24%, #b3b6bb 26%, #888c94 28%, #696f78 30%, #50565f 32%, #3c424a 34%, #30373f 36%, #282f38 38%, #202831 40%, #1b222b 42%, #151d25 44%, #131b24 46%, #121820 100%)'
        }}
      />

      <div className="absolute top-0 inset-x-0 h-[1px] bg-black/10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <img 
              src="/logo.png" 
              alt="Jyothi Construction Logo" 
              className="h-10 md:h-14 lg:h-16 w-auto object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`${getLinkClass('/')} relative py-1`}>
              Home
              {isActive('/') && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-jyothi-amber rounded-full" />
              )}
            </Link>
            <Link to="/about" className={`${getLinkClass('/about')} relative py-1`}>
              About Us
              {isActive('/about') && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-jyothi-amber rounded-full" />
              )}
            </Link>
            
            <div className="group relative">
              <button className={`flex items-center gap-1.5 transition-colors text-sm font-bold uppercase tracking-wider py-2 relative ${
                location.pathname.startsWith('/services') 
                  ? 'text-jyothi-amber' 
                  : 'text-white hover:text-jyothi-amber'
              }`}>
                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                {location.pathname.startsWith('/services') && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-jyothi-amber rounded-full" />
                )}
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#121820] border border-white/15 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-['']">
                <div className="px-4 py-2.5 border-b border-white/10 bg-white/[0.03] flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-jyothi-amber">Our Core Verticals</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-jyothi-amber animate-pulse"></span>
                </div>
                <ul className="flex flex-col py-1.5">
                  <li>
                    <Link to="/services/construction" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 text-sm text-gray-100 hover:text-jyothi-amber font-medium transition-colors border-b border-white/5 last:border-0 group/item">
                      <div className="w-7 h-7 rounded-lg bg-jyothi-amber/15 group-hover/item:bg-jyothi-amber flex items-center justify-center text-jyothi-amber group-hover/item:text-jyothi-blue transition-colors shrink-0">
                        <HardHat size={15} />
                      </div>
                      <span>Construction Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/rmc" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 text-sm text-gray-100 hover:text-jyothi-amber font-medium transition-colors border-b border-white/5 last:border-0 group/item">
                      <div className="w-7 h-7 rounded-lg bg-jyothi-amber/15 group-hover/item:bg-jyothi-amber flex items-center justify-center text-jyothi-amber group-hover/item:text-jyothi-blue transition-colors shrink-0">
                        <Truck size={15} />
                      </div>
                      <span>Ready Mix Concrete</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/aggregates" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 text-sm text-gray-100 hover:text-jyothi-amber font-medium transition-colors border-b border-white/5 last:border-0 group/item">
                      <div className="w-7 h-7 rounded-lg bg-jyothi-amber/15 group-hover/item:bg-jyothi-amber flex items-center justify-center text-jyothi-amber group-hover/item:text-jyothi-blue transition-colors shrink-0">
                        <Mountain size={15} />
                      </div>
                      <span>Aggregates & Crushing</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/blocks" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 text-sm text-gray-100 hover:text-jyothi-amber font-medium transition-colors border-b border-white/5 last:border-0 group/item">
                      <div className="w-7 h-7 rounded-lg bg-jyothi-amber/15 group-hover/item:bg-jyothi-amber flex items-center justify-center text-jyothi-amber group-hover/item:text-jyothi-blue transition-colors shrink-0">
                        <LayoutGrid size={15} />
                      </div>
                      <span>Concrete Blocks</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/fabrication" className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 text-sm text-gray-100 hover:text-jyothi-amber font-medium transition-colors group/item">
                      <div className="w-7 h-7 rounded-lg bg-jyothi-amber/15 group-hover/item:bg-jyothi-amber flex items-center justify-center text-jyothi-amber group-hover/item:text-jyothi-blue transition-colors shrink-0">
                        <Wrench size={15} />
                      </div>
                      <span>Fabrication Works</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/projects" className={`${getLinkClass('/projects')} relative py-1`}>
              Projects
              {isActive('/projects') && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-jyothi-amber rounded-full" />
              )}
            </Link>
            <Link to="/careers" className={`${getLinkClass('/careers')} relative py-1`}>
              Careers
              {isActive('/careers') && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-jyothi-amber rounded-full" />
              )}
            </Link>
            <Link to="/contact" className={`${getLinkClass('/contact')} relative py-1`}>
              Contact
              {isActive('/contact') && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-jyothi-amber rounded-full" />
              )}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center">
            <button 
              onClick={openModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-jyothi-amber via-[#f9b83f] to-amber-500 text-jyothi-blue font-black rounded-full transition-all duration-300 text-xs shadow-[0_0_22px_rgba(245,158,11,0.45)] hover:shadow-[0_0_30px_rgba(245,158,11,0.65)] hover:scale-105 active:scale-95 uppercase tracking-wider font-heading border border-amber-300/40"
            >
              <PhoneCall size={14} className="text-jyothi-blue stroke-[2.5]" />
              <span>Get a Quote</span>
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button 
              onClick={openModal}
              className="px-3.5 py-1.5 bg-jyothi-amber text-jyothi-blue font-bold rounded-lg text-xs uppercase tracking-wider shadow-md"
            >
              Quote
            </button>
            <button 
              className="p-2 text-white hover:text-jyothi-amber transition-colors" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle Navigation"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1950] lg:hidden"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[400px] bg-jyothi-blue z-[2000] flex flex-col lg:hidden shadow-[-10px_0_50px_rgba(0,0,0,0.5)] border-l border-white/10"
            >
          
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <img src="/logo.png" alt="Jyothi Construction Logo" className="h-10 w-auto object-contain" />
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-jyothi-amber bg-white/5 rounded-full p-2.5 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col py-4 px-6 gap-0.5 flex-grow overflow-y-auto">
                <Link to="/" className={`text-lg font-bold font-heading py-3 border-b border-white/5 ${isActive('/') ? 'text-jyothi-amber' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className={`text-lg font-bold font-heading py-3 border-b border-white/5 ${isActive('/about') ? 'text-jyothi-amber' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                
                <div className="border-b border-white/5">
                  <button 
                    onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)} 
                    className="w-full flex items-center justify-between text-lg font-bold font-heading py-3 text-white"
                  >
                    Services
                    <ChevronDown size={18} className={`transform transition-transform duration-300 ${mobileAccordionOpen ? 'rotate-180 text-jyothi-amber' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAccordionOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white/5 rounded-xl mb-2"
                      >
                        <ul className="flex flex-col py-0.5 px-3">
                          <li><Link to="/services/construction" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2.5 text-gray-300 hover:text-jyothi-amber text-sm font-medium border-b border-white/5 last:border-0"><HardHat size={16} className="text-jyothi-amber"/> Construction Services</Link></li>
                          <li><Link to="/services/rmc" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2.5 text-gray-300 hover:text-jyothi-amber text-sm font-medium border-b border-white/5 last:border-0"><Truck size={16} className="text-jyothi-amber"/> Ready Mix Concrete</Link></li>
                          <li><Link to="/services/aggregates" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2.5 text-gray-300 hover:text-jyothi-amber text-sm font-medium border-b border-white/5 last:border-0"><Mountain size={16} className="text-jyothi-amber"/> Aggregates & Crushing</Link></li>
                          <li><Link to="/services/blocks" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2.5 text-gray-300 hover:text-jyothi-amber text-sm font-medium border-b border-white/5 last:border-0"><LayoutGrid size={16} className="text-jyothi-amber"/> Concrete Blocks</Link></li>
                          <li><Link to="/services/fabrication" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2.5 text-gray-300 hover:text-jyothi-amber text-sm font-medium border-b border-white/5 last:border-0"><Wrench size={16} className="text-jyothi-amber"/> Fabrication Works</Link></li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/projects" className={`text-lg font-bold font-heading py-3 border-b border-white/5 ${isActive('/projects') ? 'text-jyothi-amber' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                <Link to="/careers" className={`text-lg font-bold font-heading py-3 border-b border-white/5 ${isActive('/careers') ? 'text-jyothi-amber' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>Careers</Link>
                <Link to="/contact" className={`text-lg font-bold font-heading py-3 ${isActive('/contact') ? 'text-jyothi-amber' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </div>

              <div className="p-6 bg-white/5 border-t border-white/10 mt-auto">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }} 
                  className="w-full py-4 bg-jyothi-amber text-jyothi-blue font-bold font-heading rounded-xl flex items-center justify-center gap-2 hover:bg-jyothi-orange hover:text-white transition-all shadow-2xl mb-4 text-base uppercase tracking-widest"
                >
                  Get a Quote
                </button>
                <div className="text-center">
                  <span className="text-[10px] font-bold text-jyothi-amber tracking-[0.2em] uppercase">60+ YEARS OF LEGACY</span>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
