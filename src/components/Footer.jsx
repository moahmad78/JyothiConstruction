/**
 * @author Sahil Sheikh
 * @project Jyothi Construction
 * @link https://www.instagram.com/sahil_sheikh78/
 */
import { Link } from 'react-router-dom';
import { MapPin, Phone, Send, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-jyothi-green py-16 mt-auto text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand & Legacy */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Jyothi Construction Logo" className="h-14 w-auto object-contain bg-white/10 rounded p-1" />
             
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Serving the construction industry with a legacy of over 60+ Years of Excellence, integrity, and architectural precision.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-secondary mt-1 shrink-0" />
                <span className="text-sm text-white/80 leading-relaxed">123 Corporate Avenue, Tech Park Phase II, Bangalore, 560001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand-secondary shrink-0" />
                <span className="text-sm text-white/80 font-bold"><a href="tel:+918001234567" className="hover:text-brand-secondary transition-colors">+91-800-123-4567</a> <span className="font-normal text-xs text-brand-secondary ml-1">(24/7 Helpline)</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand-secondary shrink-0" />
                <a href="mailto:info@jyothiconstruction.com" className="text-sm text-white/80 font-bold hover:text-brand-secondary transition-colors">info@jyothiconstruction.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-white font-heading relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-brand-secondary">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> Home</Link>
              <Link to="/about" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> About Us</Link>
              <Link to="/why-jyothi" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> Why Jyothi</Link>
              <Link to="/projects" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> Projects</Link>
              <Link to="/contact" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> Contact Us</Link>
            </nav>
          </div>

          {/* Col 3: Key Verticals */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-white font-heading relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-brand-secondary">Key Verticals</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/services/construction" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> Construction Services</Link>
              <Link to="/services/rmc" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> Ready Mix Concrete (RMC)</Link>
              <Link to="/services/aggregates" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> Aggregates & Crushing</Link>
              <Link to="/services/blocks" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> Concrete Blocks</Link>
              <Link to="/services/fabrication" className="text-white/80 hover:text-brand-secondary transition-colors text-sm flex items-center gap-2"><span className="text-brand-secondary text-xs">▸</span> Fabrication Works</Link>
            </nav>
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-white font-heading relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-brand-secondary">Stay Updated</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest project updates and industry insights.
            </p>
            <form className="flex flex-col gap-3 mt-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-white/50 focus:outline-none focus:border-brand-secondary transition-colors"
                required
              />
              <button 
                type="submit" 
                className="w-full px-4 py-3 bg-brand-secondary text-jyothi-green font-bold rounded flex items-center justify-center gap-2 hover:bg-white hover:text-jyothi-green transition-colors text-sm font-heading tracking-wide"
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Social & Copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/jyothiconstruction" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-brand-secondary border-2 border-transparent hover:border-brand-secondary transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://instagram.com/jyothiconstruction" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-brand-secondary border-2 border-transparent hover:border-brand-secondary transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://linkedin.com/company/jyothiconstruction" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-brand-secondary border-2 border-transparent hover:border-brand-secondary transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://youtube.com/jyothiconstruction" target="_blank" rel="noreferrer" aria-label="YouTube" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-brand-secondary border-2 border-transparent hover:border-brand-secondary transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>

          <div className="text-center md:text-right flex flex-col gap-1 pb-16 md:pb-0 md:pr-20">
            <span className="text-white/80 text-sm">© 2026 Jyothi Construction. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
