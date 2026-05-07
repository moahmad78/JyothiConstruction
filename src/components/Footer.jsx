/**
 * @author Sahil Sheikh
 * @project Jyothi Construction
 * @link https://www.instagram.com/sahil_sheikh78/
 */
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jyothi-blue pt-20 pb-8 mt-auto text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jyothi-amber/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-jyothi-orange/5 rounded-full blur-[120px] -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand & Legacy */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Jyothi Construction Logo" className="h-20 md:h-24 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving the construction industry with a legacy of over 60+ Years of Excellence, integrity, and architectural precision. Building the future with integrated solutions.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-jyothi-amber hover:text-jyothi-blue transition-all border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-jyothi-amber hover:text-jyothi-blue transition-all border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-jyothi-amber hover:text-jyothi-blue transition-all border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-bold text-white font-heading relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-jyothi-amber">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> About Us</Link>
              <Link to="/projects" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> Projects</Link>
              <Link to="/careers" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> Careers</Link>
              <Link to="/contact" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> Contact Us</Link>
            </nav>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-bold text-white font-heading relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-jyothi-amber">Core Services</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/services/construction" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> Construction Services</Link>
              <Link to="/services/rmc" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> Ready Mix Concrete</Link>
              <Link to="/services/aggregates" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> Aggregates & Crushing</Link>
              <Link to="/services/blocks" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> Concrete Blocks</Link>
              <Link to="/services/fabrication" className="text-gray-400 hover:text-jyothi-amber transition-colors text-sm flex items-center gap-2 group"><span className="text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">→</span> Fabrication Works</Link>
            </nav>
          </div>

          {/* Col 4: Contact Details */}
          <div className="flex flex-col gap-8">
            <h4 className="text-xl font-bold text-white font-heading relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-jyothi-amber">Contact Us</h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-jyothi-amber/10 rounded-lg flex items-center justify-center text-jyothi-amber shrink-0 border border-jyothi-amber/20">
                  <MapPin size={20} />
                </div>
                <span className="text-sm text-gray-400 leading-relaxed pt-1">123 Corporate Avenue, Tech Park Phase II, Bangalore, 560001</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-jyothi-amber/10 rounded-lg flex items-center justify-center text-jyothi-amber shrink-0 border border-jyothi-amber/20">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+919008777742" className="text-sm text-white font-bold hover:text-jyothi-amber transition-colors">+91 9008 777 742</a>
                  <span className="text-[10px] text-jyothi-amber uppercase font-bold tracking-widest mt-1">24/7 Helpline</span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-jyothi-amber/10 rounded-lg flex items-center justify-center text-jyothi-amber shrink-0 border border-jyothi-amber/20">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@jyothiconstruction.com" className="text-sm text-white font-bold hover:text-jyothi-amber transition-colors pt-2">info@jyothiconstruction.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-gray-500 text-sm">© 2026 Jyothi Construction. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
