import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle, Send, Globe } from 'lucide-react';

const ContactPage = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="bg-jyothi-blue min-h-screen pt-24 md:pt-40">
      
      {/* Page Header Banner */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/fabricationbanner.png" 
            alt="Contact Us Banner" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jyothi-blue/90 to-jyothi-blue"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.4em] text-xs mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-7xl font-black text-white font-heading tracking-tighter">
              Contact <span className="text-jyothi-amber">Us</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-8 md:py-12 relative">
        {/* Background Accents */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-jyothi-amber/5 rounded-full blur-[150px] -ml-300 -mb-300"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Form - Dark Tech Design */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:border-jyothi-amber/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-jyothi-amber/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
              
              <div className="relative z-10">
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-black text-white font-heading mb-4">Send a Message</h2>
                  <p className="text-gray-400 font-medium">Our technical consultants are ready to assist with your inquiries.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Jane Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-jyothi-amber focus:ring-1 focus:ring-jyothi-amber outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="jane@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-jyothi-amber focus:ring-1 focus:ring-jyothi-amber outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-jyothi-amber focus:ring-1 focus:ring-jyothi-amber outline-none transition-all cursor-pointer appearance-none">
                      <option className="bg-jyothi-blue">General Inquiry</option>
                      <option className="bg-jyothi-blue">Project Consultation</option>
                      <option className="bg-jyothi-blue">Material Supply (RMC/Blocks)</option>
                      <option className="bg-jyothi-blue">Partnership Opportunities</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Message Details</label>
                    <textarea 
                      required
                      rows="5"
                      placeholder="Describe your project or inquiry..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-jyothi-amber focus:ring-1 focus:ring-jyothi-amber outline-none transition-all placeholder:text-gray-600 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-jyothi-amber text-jyothi-blue font-black rounded-xl hover:bg-jyothi-orange hover:text-white transition-all shadow-xl hover:shadow-jyothi-amber/20 uppercase tracking-[0.2em] flex items-center justify-center gap-3 group mt-4"
                  >
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Information Grid & Map */}
            <div className="flex flex-col gap-12">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Office Info */}
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 group hover:border-jyothi-amber/30 transition-all">
                  <div className="w-12 h-12 bg-jyothi-amber/10 rounded-xl flex items-center justify-center text-jyothi-amber mb-6 group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all">
                    <MapPin size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading mb-3 tracking-tight">Main Office</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    123 Corporate Avenue, Tech Park Phase II, Bangalore, Karnataka 560001
                  </p>
                </div>

                {/* Direct Contact */}
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 group hover:border-jyothi-amber/30 transition-all">
                  <div className="w-12 h-12 bg-jyothi-amber/10 rounded-xl flex items-center justify-center text-jyothi-amber mb-6 group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all">
                    <Phone size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading mb-3 tracking-tight">Technical Support</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    +91 9008 777 742<br />
                    info@jyothiconstruction.com
                  </p>
                </div>
              </motion.div>

              {/* Interactive Map Integration Placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-grow min-h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group"
              >
                <div className="absolute inset-0 z-0">
                  <img src="/assets/images/9.jpg" alt="Map View" className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-jyothi-blue/40"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center p-8">
                  <div className="w-20 h-20 bg-jyothi-amber/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-jyothi-amber/30 group-hover:scale-110 transition-transform">
                    <MapPin size={40} className="text-jyothi-amber" />
                  </div>
                  <h5 className="text-white font-black font-heading uppercase tracking-widest text-sm mb-2">Locate Our Headquarters</h5>
                  <p className="text-gray-300 text-xs font-bold uppercase tracking-[0.2em]">Open in Google Maps</p>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-jyothi-blue border border-white/10 rounded-[2.5rem] p-12 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-24 h-24 bg-jyothi-amber/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-jyothi-amber/20">
                <CheckCircle size={48} className="text-jyothi-amber" />
              </div>
              <h3 className="text-3xl font-black text-white font-heading mb-4 tracking-tighter">SUCCESS!</h3>
              <p className="text-gray-400 font-medium mb-10 leading-relaxed">
                Your message has been successfully encrypted and sent. Our technical team will reach out within 24 business hours.
              </p>
              <button 
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full py-4 bg-jyothi-amber text-jyothi-blue font-black rounded-xl uppercase tracking-widest text-xs hover:bg-jyothi-orange hover:text-white transition-all shadow-xl"
              >
                Close Portal
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ContactPage;
