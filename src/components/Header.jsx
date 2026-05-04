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
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6 border-transparent'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="Jyothi Construction Logo" className="lg:h-16 h-12 w-auto object-contain" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={getLinkClass('/')}>Home</Link>
            <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
            
            <div className="group relative">
              <a href="#" className="flex items-center gap-1 transition-colors text-sm font-medium py-2 text-white hover:text-brand-secondary">
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
          <button className="lg:hidden text-white hover:text-brand-secondary transition-colors" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-[#002B1B] z-[110] flex flex-col lg:hidden"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <img src="/logo.png" alt="Jyothi Construction Logo" className="h-12 w-auto object-contain" />
                <span className="text-xl font-extrabold text-white font-heading leading-none">Jyothi</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-brand-secondary bg-white/10 rounded-full p-2 transition-colors">
                <X size={28} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col items-center justify-center flex-grow px-6 py-12 gap-8 overflow-y-auto">
              <Link to="/" className={`text-4xl font-bold font-heading ${isActive('/') ? 'text-brand-secondary' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className={`text-4xl font-bold font-heading ${isActive('/about') ? 'text-brand-secondary' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              
              {/* Verticals Group */}
              <div className="flex flex-col items-center gap-4">
                <span className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-2">Our Verticals</span>
                <div className="flex flex-col items-center gap-4 text-center">
                  <Link to="/services/construction" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/80 hover:text-white">Construction</Link>
                  <Link to="/services/rmc" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/80 hover:text-white">Ready Mix Concrete</Link>
                  <Link to="/services/aggregates" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/80 hover:text-white">Aggregates & Crushing</Link>
                  <Link to="/services/blocks" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/80 hover:text-white">Concrete Blocks</Link>
                  <Link to="/services/fabrication" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium text-white/80 hover:text-white">Fabrication</Link>
                </div>
              </div>
              
              <Link to="/projects" className={`text-4xl font-bold font-heading ${isActive('/projects') ? 'text-brand-secondary' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <Link to="/why-jyothi" className={`text-4xl font-bold font-heading ${isActive('/why-jyothi') ? 'text-brand-secondary' : 'text-white'}`} onClick={() => setMobileMenuOpen(false)}>Why Jyothi</Link>
              
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-12 py-4 bg-brand-secondary text-[#002B1B] font-extrabold font-heading rounded-lg shadow-lg text-xl uppercase tracking-wider">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
