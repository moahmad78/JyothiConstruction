import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = {
  '/': [
    'https://images.unsplash.com/photo-1517646287270-a56b6378dbbb?q=80&w=2000&auto=format&fit=crop', // Subtle concrete/architecture texture
    'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?q=80&w=2000&auto=format&fit=crop', // Architectural details
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop'  // Structural lines
  ],
  '/about': [
    'https://images.unsplash.com/photo-1517646287270-a56b6378dbbb?q=80&w=2000&auto=format&fit=crop', // Vintage architecture / blueprints
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop', // Blueprint detail
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop'  // Architect working
  ],
  '/projects': [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop', // Glass skyscraper
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop', // Luxury residential
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop'  // Resort
  ],
  '/why-jyothi': [
    'https://images.unsplash.com/photo-1518640026210-910a3e813a35?q=80&w=2000&auto=format&fit=crop', // Architecture precision
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop', // Logistics warehouse
    'https://images.unsplash.com/photo-1588610534575-cf087e35b71c?q=80&w=2000&auto=format&fit=crop'  // Quality/texture
  ],
  '/contact': [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop', // Modern office glass
    'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop', // City view
    'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2000&auto=format&fit=crop'  // Corporate meeting
  ],
  '/services': [
    'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588610534575-cf087e35b71c?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop'
  ],
  '/services/construction': [
    'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2000&auto=format&fit=crop'
  ],
  '/services/rmc': [
    'https://images.unsplash.com/photo-1588610534575-cf087e35b71c?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2000&auto=format&fit=crop'
  ],
  '/services/aggregates': [
    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518640026210-910a3e813a35?q=80&w=2000&auto=format&fit=crop'
  ],
  '/services/blocks': [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop'
  ],
  '/services/fabrication': [
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
  ]
};

const AmbientBackground = () => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = backgrounds[location.pathname] || backgrounds['/'];

  useEffect(() => {
    setCurrentIndex(0);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 12000); // 12 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-jyothi-green">
      <AnimatePresence initial={false}>
        <motion.div
          key={`${location.pathname}-${currentIndex}`}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 2, ease: "easeInOut" },
            scale: { duration: 15, ease: "linear" } 
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${images[currentIndex]}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
    </div>
  );
};

export default AmbientBackground;
