import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = {
  '/': [
    '/assets/images/homepageinner.jpeg',
    '/assets/images/construction.jpeg',
    '/assets/images/Agregator and crushing.jpeg'
  ],
  '/about': [
    '/assets/images/about_us.jpg',
    '/assets/images/unsplash-3d9bb42c.jpg',
    '/assets/images/JGROUP.jpg'
  ],
  '/projects': [
    '/assets/images/unsplash-27d7005c.jpg',
    '/assets/images/unsplash-4955a12c.jpg',
    '/assets/images/unsplash-34e86d0c.jpg'
  ],
  '/why-jyothi': [
    '/assets/images/Q&S.jpg',
    '/assets/images/unsplash-1b16a726.jpg',
    '/assets/images/unsplash-b6b9f9eb.jpg'
  ],
  '/contact': [
    '/assets/images/9.jpg',
    '/assets/images/unsplash-93aa798d.jpg',
    '/assets/images/unsplash-4ec2ae05.jpg'
  ],
  '/services': [
    '/assets/images/construction.jpeg',
    '/assets/images/unsplash-b6b9f9eb.jpg',
    '/assets/images/unsplash-d6d9bb7f.jpg'
  ],
  '/services/construction': [
    '/assets/images/construction.jpeg'
  ],
  '/services/rmc': [
    '/assets/images/concrete-batching.png'
  ],
  '/services/aggregates': [
    '/assets/images/Agregator and crushing.jpeg'
  ],
  '/services/blocks': [
    '/assets/images/3.jpg'
  ],
  '/services/fabrication': [
    '/assets/images/Fabrication images.jpeg'
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
