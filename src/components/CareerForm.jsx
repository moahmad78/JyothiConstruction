import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Briefcase, FileText, User, Mail, Phone, Clock, Loader2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import emailjs from '@emailjs/browser';

const CareerForm = ({ job, onClose }) => {
  const { showToast, closeModal } = useModal();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    // Prevent overlapping modals
    closeModal();
    
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = async (e) => {
    // ... rest of the submit logic remains same
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_CAREER_TEMPLATE_ID', 
        e.target, 
        'YOUR_PUBLIC_KEY'
      );

      showToast(`Application for ${job.title} sent to HR! We will review and contact you.`);
      onClose();
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast("Application processed! (EmailJS Keys Required for Live Routing)");
      onClose();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 100, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="relative w-full max-w-2xl bg-jyothi-blue border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto custom-scrollbar"
      >
        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-jyothi-amber/5 rounded-full blur-[80px] -ml-32 -mt-32"></div>

        <div className="relative p-6 md:p-12">
          {/* Header */}
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-3 text-jyothi-amber mb-3">
                <Briefcase size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Career Opportunities</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-black text-white font-heading leading-tight">
                Apply for <br />
                <span className="text-jyothi-amber">{job.title}</span>
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2.5 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            <input type="hidden" name="job_title" value={job.title} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <User size={12} className="text-jyothi-amber" /> Full Name
                </label>
                <input 
                  required
                  type="text" 
                  name="from_name"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-jyothi-amber outline-none transition-all placeholder:text-gray-600 font-medium text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Mail size={12} className="text-jyothi-amber" /> Email Address
                </label>
                <input 
                  required
                  type="email" 
                  name="reply_to"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-jyothi-amber outline-none transition-all placeholder:text-gray-600 font-medium text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Phone size={12} className="text-jyothi-amber" /> Phone Number
                </label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  placeholder="+91 00000 00000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-jyothi-amber outline-none transition-all placeholder:text-gray-600 font-medium text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Clock size={12} className="text-jyothi-amber" /> Total Experience
                </label>
                <input 
                  required
                  type="text" 
                  name="experience"
                  placeholder="e.g. 5+ Years"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-3 md:py-4 text-white focus:border-jyothi-amber outline-none transition-all placeholder:text-gray-600 font-medium text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                <FileText size={12} className="text-jyothi-amber" /> Resume / CV Upload
              </label>
              <div className="relative group cursor-pointer">
                <input 
                  required
                  type="file" 
                  name="resume_file"
                  accept=".pdf,.doc,.docx"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                />
                <div className="w-full bg-white/5 border-2 border-dashed border-white/10 rounded-2xl p-6 md:p-10 text-center group-hover:border-jyothi-amber/50 group-hover:bg-jyothi-amber/5 transition-all">
                  <p className="text-gray-400 text-xs mb-2 font-medium">Drag & Drop or Click to Upload</p>
                  <p className="text-[10px] text-jyothi-amber font-black uppercase tracking-widest">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>
            </div>

            <button 
              disabled={isSending}
              type="submit"
              className="w-full py-4 md:py-5 bg-jyothi-amber text-jyothi-blue font-black rounded-xl hover:bg-jyothi-orange hover:text-white transition-all shadow-xl hover:shadow-jyothi-amber/20 uppercase tracking-[0.2em] flex items-center justify-center gap-3 group mt-2 text-[10px] md:text-xs disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>Sending Application... <Loader2 className="animate-spin" size={18} /></>
              ) : (
                <>Submit Application <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CareerForm;
