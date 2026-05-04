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
    image: '/assets/images/Construction.jpeg', // Precision engineered construction site
    headline: (
      <>
        A Legacy of <span className="text-brand-secondary">Strength.</span><br />
        A Future of <span className="text-white">Possibilities.</span>
      </>
    ),
    subtext: '60+ Years of Legacy in delivering trusted excellence across the construction value chain.'
  },
  {
    id: 2,
    image: '/assets/images/unsplash-f7a7a789.jpg', // Concrete batching plant or machinery
    headline: (
      <>
        Integrated Construction.<br />
        <span className="text-brand-secondary">Controlled Excellence.</span>
      </>
    ),
    subtext: 'Ensuring unmatched control over quality, timelines, and cost efficiency.'
  },
  {
    id: 3,
    image: '/assets/images/unsplash-4955a12c.jpg', // Modern residential luxury apartment
    headline: (
      <>
        Building the Foundations<br />
        of <span className="text-brand-secondary">Tomorrow.</span>
      </>
    ),
    subtext: 'Shaping infrastructure with strength, precision, and unwavering trust.'
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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden z-0">
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
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center md:text-left pt-20 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl pointer-events-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight font-serif italic drop-shadow-lg">
              {slides[currentSlide].headline}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl font-sans drop-shadow-md">
              {slides[currentSlide].subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-start justify-center pointer-events-auto">
              <Link to="/projects" className="px-8 py-4 bg-brand-primary text-white font-bold rounded shadow-lg hover:bg-brand-secondary transition-colors font-heading tracking-wide text-center">
                Explore Our Projects
              </Link>
              <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white/10 hover:border-brand-secondary hover:text-brand-secondary transition-colors font-heading tracking-wide backdrop-blur-sm text-center">
                Our Verticals
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center items-center gap-6">
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
