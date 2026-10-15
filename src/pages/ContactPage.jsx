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
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "150px" }}
              transition={{ duration: 0.3 }}
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "150px" }}
                transition={{ duration: 0.3 }}
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
                  <h4 className="text-xl font-bold text-white font-heading mb-3 tracking-tight">Direct Inquiries</h4>
                  <div className="text-sm leading-relaxed font-medium space-y-1">
                    <a href="tel:+919148578784" className="text-white hover:text-jyothi-amber transition-colors font-bold block">
                      +91 91485 78784
                    </a>
                    <a href="tel:+919900900826" className="text-white hover:text-jyothi-amber transition-colors font-bold block">
                      +91 99009 00826
                    </a>
                    <a href="mailto:constructions@jyothigroups.com" className="text-gray-300 hover:text-jyothi-amber transition-colors block pt-1">
                      constructions@jyothigroups.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "150px" }}
                transition={{ duration: 0.3 }}
                className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative min-h-[300px] h-[320px]"
              >
                <iframe 
                  title="Jyothi Construction Corporate Headquarters Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0543669601445!2d77.6166185!3d13.0321946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176395b058c1%3A0x6b107e324ef20f4c!2sVeeranna%20Palya%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka%20560045!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-[1.1] opacity-85 hover:opacity-100 transition-opacity"
                />
              </motion.div>

              <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10">
                <span className="text-jyothi-amber text-[10px] font-black uppercase tracking-widest block mb-3">Operational Plant Locations</span>
                <div className="space-y-3 text-xs text-gray-300">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <strong className="text-white block font-bold">Site 01 • Jyothi Stone Crushers</strong>
                    <span className="text-gray-400">No.26/P-55, Donnenahalli Village, Bangalore South Taluk, Bangalore Urban</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <strong className="text-white block font-bold">Site 02 • Jyothi Concrete Blocks</strong>
                    <span className="text-gray-400">No. 107/1, 107/2 & Sy No 73, Koluru Village, Tavarekere Hobli, Bangalore South</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <strong className="text-white block font-bold">Site 03 • Jyothi ConMix (RMC Plant)</strong>
                    <span className="text-gray-400">No.132, Kumbalgud Industrial Area, Mysore Road, Kengeri Hobli, Bangalore – 560074</span>
                  </div>
                </div>
              </div>

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
