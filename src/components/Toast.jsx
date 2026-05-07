import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

const Toast = ({ isVisible, message, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100000] flex items-center gap-4 bg-jyothi-blue border border-jyothi-amber/30 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl"
        >
          <div className="w-10 h-10 bg-jyothi-amber/10 rounded-full flex items-center justify-center">
            <CheckCircle className="text-jyothi-amber" size={20} />
          </div>
          <div className="pr-8">
            <h4 className="text-white font-bold text-sm">Success!</h4>
            <p className="text-gray-400 text-xs font-medium">{message}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
