/**
 * @author Sahil Sheikh
 * @project Jyothi Construction
 * @link https://www.instagram.com/sahil_sheikh78/
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

const slides = [
  { id: 1, image: '/assets/images/2865.jpg' },
  { id: 2, image: '/assets/images/21.jpg' },
  { id: 3, image: '/assets/images/74095.jpg' },
  { id: 4, image: '/assets/images/14735.jpg' },
  { id: 5, image: '/assets/images/74054.jpg' }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[75vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden z-0">
      {/* Background Slider - Sirf Image Change Hogi */}
      <div className="absolute inset-0 z-[-1]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
          />
        </AnimatePresence>
        {/* Client's Dark Blue Overlay */}
        <div className="absolute inset-0 bg-jyothi-blue/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue via-transparent to-jyothi-blue/40"></div>
      </div>

      {/* Static Content Overlay - Ye Ruka Rahega */}
      <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center md:text-left flex flex-col justify-center py-12 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Static Heading as per PDF */}
          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter font-heading drop-shadow-2xl">
            Building Strong <br />
            <span className="text-jyothi-amber">Foundations</span> for <br />
            Tomorrow
          </h1>

          {/* Static Sub-text */}
          <p className="text-base md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium max-w-2xl font-sans drop-shadow-md">
            Delivering technical excellence and structural integrity with a legacy of 60+ years in modern infrastructure.
          </p>

          {/* Static CTA Buttons */}
          <div className="flex flex-row items-center justify-center md:justify-start gap-4 mt-8 md:mt-10 flex-wrap">
            <button 
              onClick={openModal}
              className="px-6 md:px-12 py-4 md:py-5 bg-jyothi-amber text-jyothi-blue font-black rounded-xl shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:bg-jyothi-orange hover:text-white transition-all hover:scale-105 active:scale-95 font-heading tracking-widest text-center whitespace-nowrap uppercase text-xs md:text-sm"
            >
              Get a Quote
            </button>
            <Link to="/services" className="px-6 md:px-12 py-4 md:py-5 bg-white/5 border border-white/20 text-white font-black rounded-xl hover:bg-white/10 hover:border-jyothi-amber hover:text-jyothi-amber transition-all hover:scale-105 active:scale-95 font-heading tracking-widest backdrop-blur-md text-center whitespace-nowrap uppercase text-xs md:text-sm">
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Side Progress Bar Logic - Intact rakha hai for premium feel */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 items-center z-20">
        <span className="text-white/20 font-black text-4xl rotate-90 tracking-[0.2em]">0{currentSlide + 1}</span>
        <div className="w-[2px] h-32 bg-white/10 relative overflow-hidden">
          <motion.div
            key={currentSlide}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute top-0 left-0 w-full bg-jyothi-amber"
          />
        </div>
        <span className="text-white/20 font-black text-4xl rotate-90 tracking-[0.2em]">0{slides.length}</span>
      </div>
    </section>
  );
};

export default Hero;