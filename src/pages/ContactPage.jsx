import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-transparent min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-transparent">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-4 font-heading">Get in Touch</h1>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight font-heading mb-8">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed font-light">
              Whether you are planning a massive industrial hub or require high-grade raw materials, our team is ready to deliver unmatched quality and controlled excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/20">
              <h3 className="text-3xl font-extrabold text-white mb-8 font-heading">Request a Quote</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-white/10 text-white placeholder-white/50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Company Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-white/10 text-white placeholder-white/50" placeholder="Your Company" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-white/10 text-white placeholder-white/50" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-white/10 text-white placeholder-white/50" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">Sector / Project Type</label>
                  <select defaultValue="" className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-white/10 text-white appearance-none">
                    <option value="" disabled className="text-gray-900">Select a project type</option>
                    <option value="Residential Projects" className="text-gray-900">Residential Projects</option>
                    <option value="IT Parks" className="text-gray-900">IT Parks</option>
                    <option value="Industrial" className="text-gray-900">Industrial</option>
                    <option value="Hospitality" className="text-gray-900">Hospitality</option>
                    <option value="Construction Services" className="text-gray-900">Construction Services</option>
                    <option value="Ready Mix Concrete" className="text-gray-900">Ready Mix Concrete (RMC)</option>
                    <option value="Aggregates & Crushing" className="text-gray-900">Aggregates & Crushing</option>
                    <option value="Concrete Blocks" className="text-gray-900">Concrete Blocks</option>
                    <option value="Fabrication Works" className="text-gray-900">Fabrication Works</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Project Area</label>
                    <select defaultValue="" className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-white/10 text-white appearance-none">
                      <option value="" disabled className="text-gray-900">Select project area</option>
                      <option value="Below 5,000 sq ft" className="text-gray-900">Below 5,000 sq ft</option>
                      <option value="5,000 - 20,000 sq ft" className="text-gray-900">5,000 - 20,000 sq ft</option>
                      <option value="Above 20,000 sq ft" className="text-gray-900">Above 20,000 sq ft</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Budget Range</label>
                    <select defaultValue="" className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-white/10 text-white appearance-none">
                      <option value="" disabled className="text-gray-900">Select budget range</option>
                      <option value="Below ₹50 Lakhs" className="text-gray-900">Below ₹50 Lakhs</option>
                      <option value="₹50 Lakhs - ₹2 Crores" className="text-gray-900">₹50 Lakhs - ₹2 Crores</option>
                      <option value="₹2 Crores+" className="text-gray-900">₹2 Crores+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">Message Details</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-transparent focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-colors bg-white/10 text-white placeholder-white/50" placeholder="Tell us about your project requirements..."></textarea>
                </div>

                <button type="submit" className="w-full px-8 py-4 bg-white text-jyothi-green font-bold rounded-lg shadow-lg hover:bg-brand-secondary hover:text-white transition-all duration-300 font-heading tracking-wide">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="flex flex-col gap-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <MapPin className="text-brand-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-heading mb-2">Head Office</h4>
                    <p className="text-gray-300 leading-relaxed">
                      123 Corporate Avenue,<br />
                      Tech Park Phase II,<br />
                      Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                    <Phone className="text-brand-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-heading mb-2">Contact</h4>
                    <p className="text-gray-300 leading-relaxed">
                      +91 800 123 4567<br />
                      info@jyothiconstruction.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="flex-grow w-full rounded-2xl overflow-hidden shadow-lg border border-white/20 min-h-[300px] relative flex items-center justify-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/assets/images/unsplash-91ed2c46.jpg')"}}></div>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                <div className="z-10 flex flex-col items-center">
                  <MapPin className="text-white w-12 h-12 mb-2 drop-shadow-md" />
                  <span className="text-white font-bold font-heading drop-shadow-sm">Interactive Map Placeholder</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden text-center"
            >
              {/* Top Jyothi Green Bar */}
              <div className="bg-jyothi-green py-8 px-6 flex justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-10 h-10 text-jyothi-green" />
                </div>
              </div>
              
              <div className="p-8 pb-10">
                <h3 className="text-3xl font-extrabold text-jyothi-green mb-3 font-heading">Thank You for Reaching Out!</h3>
                <p className="text-brand-text mb-6">
                  Your request has been successfully submitted. We appreciate your interest in Jyothi Construction.
                </p>
                <div className="bg-brand-light p-4 rounded-lg mb-6 border border-gray-100">
                  <p className="text-sm font-bold text-jyothi-green">
                    One of our dedicated project executives will contact you within 1 hour to discuss your requirements.
                  </p>
                </div>
                <p className="text-sm text-gray-500 mb-8 border-t border-gray-100 pt-6">
                  For urgent inquiries, our 24x7 Support Line is always available:<br/>
                  <span className="font-bold text-brand-secondary mt-1 block">+91-800-123-4567</span>
                </p>
                
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-3 bg-brand-secondary text-white font-bold rounded-lg shadow-lg hover:bg-jyothi-green transition-colors font-heading tracking-wide w-full"
                >
                  Return to Home
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ContactPage;
