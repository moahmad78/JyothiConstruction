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
    <div className="bg-jyothi-blue min-h-screen">
      
      <section className="relative h-[45vh] md:h-[54vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Jyothi/IMG_0257.JPG" 
            alt="Contact Jyothi Construction Leadership" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle top & bottom edge gradients for smooth contrast transition */}
          <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-jyothi-blue/80 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-jyothi-blue to-transparent pointer-events-none"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-jyothi-blue/45 backdrop-blur-md px-6 py-6 sm:px-10 sm:py-8 rounded-2xl md:rounded-3xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.4)] max-w-3xl"
          >
            <span className="text-jyothi-amber font-black uppercase tracking-[0.4em] text-xs mb-3 block">Direct Consultation</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading tracking-tighter drop-shadow-md">
              Contact <span className="text-jyothi-amber">Us</span>
            </h1>
            <div className="w-20 h-1 bg-jyothi-amber mx-auto my-3 rounded-full"></div>
            <p className="text-gray-100 text-sm md:text-base max-w-2xl mx-auto font-sans font-normal leading-relaxed drop-shadow-sm">
              Connect directly with our engineering leadership and senior project consultants.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12 relative">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-jyothi-amber/5 rounded-full blur-[150px] -ml-300 -mb-300"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
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

            <div className="flex flex-col gap-12">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 group hover:border-jyothi-amber/30 transition-all">
                  <div className="w-12 h-12 bg-jyothi-amber/10 rounded-xl flex items-center justify-center text-jyothi-amber mb-6 group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all">
                    <MapPin size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white font-heading mb-3 tracking-tight">Main Office</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    #19, 1st Cross, Veerannapalya,<br />
                    Near SBI Bank, AC Post,<br />
                    Bangalore - 560045
                  </p>
                </div>

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

              <motion.a 
                href="https://maps.google.com/?q=Jyothi+Construction+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-grow min-h-[400px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group block cursor-pointer"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src="/Jyothi/IMG_0478.JPG" 
                    alt="Jyothi Groups Headquarters & Facility" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-jyothi-blue/50 group-hover:bg-jyothi-blue/30 transition-colors"></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center p-8">
                  <div className="w-20 h-20 bg-jyothi-amber/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-jyothi-amber/30 group-hover:scale-110 transition-transform">
                    <MapPin size={40} className="text-jyothi-amber" />
                  </div>
                  <h5 className="text-white font-black font-heading uppercase tracking-widest text-base mb-2">Locate Our Headquarters</h5>
                  <p className="text-jyothi-amber text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-1.5 bg-black/40 px-4 py-1.5 rounded-full border border-jyothi-amber/30">
                    Open in Google Maps →
                  </p>
                </div>
              </motion.a>

            </div>

          </div>
        </div>
      </section>

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
