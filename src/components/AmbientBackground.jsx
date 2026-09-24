import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = {
  '/': [
    '/Jyothi/IMG_9715.JPG',
    '/Jyothi/IMG_0361.JPG',
    '/Jyothi/IMG_9528.JPG'
  ],
  '/about': [
    '/Jyothi/IMG_0229.JPG',
    '/Jyothi/IMG_0361.JPG'
  ],
  '/projects': [
    '/Jyothi/IMG_9715.JPG',
    '/Jyothi/IMG_9528.JPG',
    '/Jyothi/IMG_9632.JPG'
  ],
  '/why-jyothi': [
    '/Jyothi/IMG_0361.JPG',
    '/Jyothi/IMG_9824.JPG'
  ],
  '/contact': [
    '/Jyothi/IMG_0229.JPG',
    '/Jyothi/IMG_9715.JPG'
  ],
  '/services': [
    '/Jyothi/IMG_0361.JPG',
    '/Jyothi/IMG_9715.JPG',
    '/Jyothi/IMG_9528.JPG'
  ],
  '/services/construction': [
    '/Jyothi/IMG_9715.JPG'
  ],
  '/services/rmc': [
    '/Jyothi/IMG_0361.JPG'
  ],
  '/services/aggregates': [
    '/Jyothi/IMG_9528.JPG'
  ],
  '/services/blocks': [
    '/Jyothi/IMG_9749.JPG'
  ],
  '/services/fabrication': [
    '/Jyothi/IMG_9632.JPG'
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
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-jyothi-blue">
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
