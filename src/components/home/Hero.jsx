/**
 * @author Sahil Sheikh
 * @project Jyothi Construction
 * @link https://www.instagram.com/sahil_sheikh78/
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: '/assets/images/homepageinner.jpeg',
    headline: 'A Legacy of Strength',
    subtext: 'A Future of Possibilities — building modern infrastructure with 60+ years of trusted excellence.'
  },
  {
    id: 2,
    image: '/assets/images/2.jpg',
    headline: 'Precision in Concrete',
    subtext: 'Delivering high-grade Ready Mix Concrete with unmatched quality control and on-time delivery across every project.'
  },
  {
    id: 3,
    image: '/assets/images/3.jpg',
    headline: 'Built for Durability',
    subtext: 'Standardized and custom Concrete Blocks engineered for high-load bearing capacity and architectural excellence.'
  },
  {
    id: 4,
    image: '/assets/images/fabricationbanner.png',
    headline: 'Engineered to Perfection',
    subtext: 'Expert Structural Fabrication and customized engineering solutions for complex industrial and commercial needs.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds autoplay
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden z-0">
      {/* Eager load the first hero image to prevent black screen lag */}
      <img src={slides[0].image} fetchPriority="high" loading="eager" className="hidden" alt="preload" />
      
      {/* Dedicated Hero Slider Background */}
      <div className="absolute inset-0 z-[-1]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center md:text-left flex flex-col justify-center py-28 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl pointer-events-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 tracking-tighter font-serif italic drop-shadow-2xl">
              {slides[currentSlide].headline}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl font-sans drop-shadow-md">
              {slides[currentSlide].subtext}
            </p>
            
            <div className="flex flex-row gap-4 justify-center md:justify-start pointer-events-auto mt-10 md:mt-12">
              <Link to="/projects" className="px-5 py-4 md:px-10 md:py-5 bg-brand-primary text-white text-sm md:text-lg font-bold rounded shadow-xl hover:bg-brand-secondary transition-all hover:scale-105 active:scale-95 font-heading tracking-wide text-center whitespace-nowrap">
                Explore Projects
              </Link>
              <Link to="/services" className="px-5 py-4 md:px-10 md:py-5 bg-transparent border-2 border-white text-white text-sm md:text-lg font-bold rounded hover:bg-white/10 hover:border-brand-secondary hover:text-brand-secondary transition-all hover:scale-105 active:scale-95 font-heading tracking-wide backdrop-blur-md text-center whitespace-nowrap">
                Our Verticals
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls - Absolute Bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-20 hidden md:flex justify-center items-center gap-8">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Dots */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#C5A059] w-8' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-white transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
