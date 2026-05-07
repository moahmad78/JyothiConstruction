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
    return `transition-colors text-sm font-semibold uppercase tracking-wider ${
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

  // Prevent background scrolling when mobile menu is open
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
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-jyothi-blue/95 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo - Left Aligned */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="Jyothi Construction Logo" className="h-10 md:h-16 lg:h-20 w-auto object-contain" />
          </Link>
          
          {/* Desktop Nav - Right Aligned */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
            
            <div className="group relative">
              <a href="#" className="flex items-center gap-1 transition-colors text-sm font-semibold uppercase tracking-wider text-white hover:text-jyothi-amber py-2">
                Services <ChevronDown size={14} />
              </a>
              {/* Mega Menu Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-72 bg-jyothi-blue border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden backdrop-blur-xl">
                <ul className="flex flex-col py-3">
                  <li><Link to="/services/construction" className="flex items-center gap-3 px-6 py-4 hover:bg-white/5 text-sm text-white font-medium transition-colors border-b border-white/5 last:border-0"><HardHat size={18} className="text-jyothi-amber" /> Construction Services</Link></li>
                  <li><Link to="/services/rmc" className="flex items-center gap-3 px-6 py-4 hover:bg-white/5 text-sm text-white font-medium transition-colors border-b border-white/5 last:border-0"><Truck size={18} className="text-jyothi-amber" /> Ready Mix Concrete</Link></li>
                  <li><Link to="/services/aggregates" className="flex items-center gap-3 px-6 py-4 hover:bg-white/5 text-sm text-white font-medium transition-colors border-b border-white/5 last:border-0"><Mountain size={18} className="text-jyothi-amber" /> Aggregates & Crushing</Link></li>
                  <li><Link to="/services/blocks" className="flex items-center gap-3 px-6 py-4 hover:bg-white/5 text-sm text-white font-medium transition-colors border-b border-white/5 last:border-0"><LayoutGrid size={18} className="text-jyothi-amber" /> Concrete Blocks</Link></li>
                  <li><Link to="/services/fabrication" className="flex items-center gap-3 px-6 py-4 hover:bg-white/5 text-sm text-white font-medium transition-colors border-b border-white/5 last:border-0"><Wrench size={18} className="text-jyothi-amber" /> Fabrication Works</Link></li>
                </ul>
              </div>
            </div>

            <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
            <Link to="/careers" className={getLinkClass('/careers')}>Careers</Link>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
            
            <button 
              onClick={openModal}
              className="px-8 py-3 bg-jyothi-amber text-jyothi-blue font-bold rounded-lg transition-all duration-300 text-sm shadow-xl hover:bg-jyothi-orange hover:text-white hover:scale-105 active:scale-95 uppercase tracking-wider"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-white hover:text-jyothi-amber transition-colors" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Sidebar Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1950] lg:hidden"
            />
            
            {/* Sidebar Drawer */}
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

              {/* Sidebar Links */}
              <div className="flex flex-col py-4 px-6 gap-0.5 flex-grow overflow-y-auto">
                <Link to="/" className={`text-lg font-bold font-heading py-3 border-b border-white/5 ${isActive('/') ? 'text-jyothi-amber' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className={`text-lg font-bold font-heading py-3 border-b border-white/5 ${isActive('/about') ? 'text-jyothi-amber' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                
                {/* Collapsible Services */}
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

              {/* Sidebar Footer */}
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
