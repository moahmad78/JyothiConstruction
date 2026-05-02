import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = {
  '/': [
    '/assets/images/unsplash-6208b399.jpg', // Subtle concrete/architecture texture
    '/assets/images/unsplash-01ed7a00.jpg', // Architectural details
    '/assets/images/unsplash-ab23ff41.jpg'  // Structural lines
  ],
  '/about': [
    '/assets/images/unsplash-6208b399.jpg', // Vintage architecture / blueprints
    '/assets/images/unsplash-3d9bb42c.jpg', // Blueprint detail
    '/assets/images/unsplash-ab23ff41.jpg'  // Architect working
  ],
  '/projects': [
    '/assets/images/unsplash-27d7005c.jpg', // Glass skyscraper
    '/assets/images/unsplash-4955a12c.jpg', // Luxury residential
    '/assets/images/unsplash-34e86d0c.jpg'  // Resort
  ],
  '/why-jyothi': [
    '/assets/images/unsplash-f3fc22d9.jpg', // Architecture precision
    '/assets/images/unsplash-1b16a726.jpg', // Logistics warehouse
    '/assets/images/unsplash-b6b9f9eb.jpg'  // Quality/texture
  ],
  '/contact': [
    '/assets/images/unsplash-93aa798d.jpg', // Modern office glass
    '/assets/images/unsplash-ad7b2321.jpg', // City view
    '/assets/images/unsplash-4ec2ae05.jpg'  // Corporate meeting
  ],
  '/services': [
    '/assets/images/unsplash-bece700b.jpg',
    '/assets/images/unsplash-b6b9f9eb.jpg',
    '/assets/images/unsplash-d6d9bb7f.jpg'
  ],
  '/services/construction': [
    '/assets/images/unsplash-bece700b.jpg',
    '/assets/images/unsplash-5c4bd1a2.jpg'
  ],
  '/services/rmc': [
    '/assets/images/unsplash-b6b9f9eb.jpg',
    '/assets/images/unsplash-0a52a666.jpg'
  ],
  '/services/aggregates': [
    '/assets/images/unsplash-0d8d6eea.jpg',
    '/assets/images/unsplash-f3fc22d9.jpg'
  ],
  '/services/blocks': [
    '/assets/images/unsplash-d6d9bb7f.jpg',
    '/assets/images/unsplash-515791c6.jpg'
  ],
  '/services/fabrication': [
    '/assets/images/unsplash-1b16a726.jpg',
    '/assets/images/unsplash-27d7005c.jpg'
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
