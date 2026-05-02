/**
 * @author Sahil Sheikh
 * @project Jyothi Construction
 * @link https://www.instagram.com/sahil_sheikh78/
 */
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, HardHat, Truck, Mountain, LayoutGrid, Wrench, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const getLinkClass = (path) => `transition-colors text-sm font-medium ${isActive(path) ? 'text-brand-secondary' : isScrolled ? 'text-jyothi-green hover:text-brand-secondary' : 'text-white hover:text-brand-secondary'}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6 border-transparent'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="Jyothi Construction Logo" className="h-12 w-auto object-contain" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
            
            <div className="group relative">
              <a href="#" className={`flex items-center gap-1 transition-colors text-sm font-medium py-2 ${isScrolled ? 'text-jyothi-green hover:text-brand-secondary' : 'text-white hover:text-brand-secondary'}`}>
                Key Verticals <ChevronDown size={16} />
              </a>
              {/* Mega Menu Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <ul className="flex flex-col py-2">
                  <li><Link to="/services/construction" className="flex items-center gap-3 px-6 py-3 hover:bg-brand-light hover:text-jyothi-green text-sm text-brand-text font-medium transition-colors"><HardHat size={16} className="text-brand-secondary" /> Construction Services</Link></li>
                  <li><Link to="/services/rmc" className="flex items-center gap-3 px-6 py-3 hover:bg-brand-light hover:text-jyothi-green text-sm text-brand-text font-medium transition-colors"><Truck size={16} className="text-brand-secondary" /> Ready Mix Concrete</Link></li>
                  <li><Link to="/services/aggregates" className="flex items-center gap-3 px-6 py-3 hover:bg-brand-light hover:text-jyothi-green text-sm text-brand-text font-medium transition-colors"><Mountain size={16} className="text-brand-secondary" /> Aggregates & Crushing</Link></li>
                  <li><Link to="/services/blocks" className="flex items-center gap-3 px-6 py-3 hover:bg-brand-light hover:text-jyothi-green text-sm text-brand-text font-medium transition-colors"><LayoutGrid size={16} className="text-brand-secondary" /> Concrete Blocks</Link></li>
                  <li><Link to="/services/fabrication" className="flex items-center gap-3 px-6 py-3 hover:bg-brand-light hover:text-jyothi-green text-sm text-brand-text font-medium transition-colors"><Wrench size={16} className="text-brand-secondary" /> Fabrication Works</Link></li>
                </ul>
              </div>
            </div>

            <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
            <Link to="/why-jyothi" className={getLinkClass('/why-jyothi')}>Why Jyothi</Link>
            <Link to="/contact" className="px-6 py-2.5 bg-white text-jyothi-green font-bold rounded hover:bg-brand-secondary hover:text-white transition-colors text-sm shadow-sm">Contact Us</Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className={`lg:hidden hover:text-brand-secondary transition-colors ${isScrolled ? 'text-jyothi-green' : 'text-white'}`} onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay & Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Sidebar Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white border-l-[3px] border-brand-secondary shadow-2xl z-50 flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                  <div className="bg-jyothi-green p-1.5 rounded shadow-sm">
                    <img src="/logo.png" alt="Jyothi Construction Logo" className="h-8 w-auto object-contain filter brightness-0 invert" />
                  </div>
                  <span className="text-xl font-extrabold text-jyothi-green font-heading leading-none">Jyothi</span>
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-brand-secondary bg-gray-50 rounded-full p-2 transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex flex-col py-6 px-6 gap-2 flex-grow">
                <Link to="/" className={`text-xl font-bold font-heading py-3 border-b border-gray-50 ${isActive('/') ? 'text-brand-secondary' : 'text-jyothi-green'}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className={`text-xl font-bold font-heading py-3 border-b border-gray-50 ${isActive('/about') ? 'text-brand-secondary' : 'text-jyothi-green'}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                
                {/* Accordion for Key Verticals */}
                <div className="border-b border-gray-50">
                  <button 
                    onClick={() => setMobileAccordionOpen(!mobileAccordionOpen)} 
                    className="w-full flex items-center justify-between text-xl font-bold font-heading py-3 text-jyothi-green"
                  >
                    Key Verticals
                    <ChevronDown size={20} className={`transform transition-transform duration-300 ${mobileAccordionOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAccordionOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="flex flex-col gap-2 pb-4 pl-4 pt-2">
                          <li><Link to="/services/construction" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2 text-brand-text hover:text-brand-secondary"><HardHat size={18} className="text-brand-secondary"/> Construction Services</Link></li>
                          <li><Link to="/services/rmc" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2 text-brand-text hover:text-brand-secondary"><Truck size={18} className="text-brand-secondary"/> Ready Mix Concrete</Link></li>
                          <li><Link to="/services/aggregates" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2 text-brand-text hover:text-brand-secondary"><Mountain size={18} className="text-brand-secondary"/> Aggregates & Crushing</Link></li>
                          <li><Link to="/services/blocks" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2 text-brand-text hover:text-brand-secondary"><LayoutGrid size={18} className="text-brand-secondary"/> Concrete Blocks</Link></li>
                          <li><Link to="/services/fabrication" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 py-2 text-brand-text hover:text-brand-secondary"><Wrench size={18} className="text-brand-secondary"/> Fabrication Works</Link></li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link to="/projects" className={`text-xl font-bold font-heading py-3 border-b border-gray-50 ${isActive('/projects') ? 'text-brand-secondary' : 'text-jyothi-green'}`} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
                <Link to="/why-jyothi" className={`text-xl font-bold font-heading py-3 border-b border-gray-50 ${isActive('/why-jyothi') ? 'text-brand-secondary' : 'text-jyothi-green'}`} onClick={() => setMobileMenuOpen(false)}>Why Jyothi</Link>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 bg-gray-50 mt-auto border-t border-gray-100">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 mb-6 bg-jyothi-green text-white font-bold font-heading rounded-lg flex items-center justify-center gap-2 hover:bg-brand-secondary transition-colors shadow-md text-lg">
                  Request a Quote
                </Link>
                <div className="flex items-center gap-4 text-jyothi-green bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-brand-light p-3 rounded-full">
                    <PhoneCall size={24} className="text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">24/7 Support Line</p>
                    <a href="tel:+918001234567" className="text-lg font-bold font-heading hover:text-brand-secondary transition-colors block">+91-800-123-4567</a>
                  </div>
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
