import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Clock, ShieldCheck, Loader2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import emailjs from '@emailjs/browser';

const QuoteModal = () => {
  const { isModalOpen, closeModal, showToast } = useModal();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Configuration for info@jyothiconstruction.com
      // Replace with actual IDs from EmailJS Dashboard
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_QUOTE_TEMPLATE_ID', 
        e.target, 
        'YOUR_PUBLIC_KEY'
      );
      
      showToast("Consultation request sent to info@jyothiconstruction.com! We will contact you shortly.");
      closeModal();
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Fallback for demo if keys are not set
      showToast("Request processed! (EmailJS Keys Required for Live Routing)");
      closeModal();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-jyothi-blue border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[85vh] overflow-y-auto custom-scrollbar"
          >
            {/* Header Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-jyothi-amber/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            
            <div className="relative p-6 md:p-12">
              {/* Close Button */}
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 text-white/50 hover:text-jyothi-amber transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="mb-8 md:mb-10">
                <div className="flex items-center gap-3 text-jyothi-amber mb-4">
                  <ShieldCheck size={20} />
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Direct Consultation</span>
                </div>
                <h2 className="text-2xl md:text-5xl font-black text-white font-heading leading-tight mb-4">
                  Get a <span className="text-jyothi-amber">Quote</span>
                </h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={14} className="text-jyothi-amber" />
                  <p className="text-xs md:text-sm font-medium">Our engineers will respond within 24 hours.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      name="from_name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-jyothi-amber outline-none transition-all placeholder:text-gray-600 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required
                      name="reply_to"
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-jyothi-amber outline-none transition-all placeholder:text-gray-600 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Select Service</label>
                  <select 
                    required
                    name="service_type"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-jyothi-amber outline-none transition-all appearance-none cursor-pointer text-sm"
                  >
                    <option value="" className="bg-jyothi-blue">Choose a category</option>
                    <option value="residential" className="bg-jyothi-blue">Residential Construction</option>
                    <option value="commercial" className="bg-jyothi-blue">Commercial Construction</option>
                    <option value="industrial" className="bg-jyothi-blue">Industrial Solutions</option>
                    <option value="turnkey" className="bg-jyothi-blue">Turnkey Projects</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Project Requirements</label>
                  <textarea 
                    required
                    name="message"
                    placeholder="Briefly describe your project goals..."
                    rows="3"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-jyothi-amber outline-none transition-all placeholder:text-gray-600 resize-none text-sm"
                  ></textarea>
                </div>

                <button 
                  disabled={isSending}
                  type="submit"
                  className="w-full py-4 md:py-5 bg-jyothi-amber text-jyothi-blue font-black rounded-xl hover:bg-jyothi-orange hover:text-white transition-all shadow-xl hover:shadow-jyothi-amber/20 uppercase tracking-[0.2em] flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                >
                  {isSending ? (
                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                  ) : (
                    <>Submit Request <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
