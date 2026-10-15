/**
 * @author Sahil Sheikh
 * @project Jyothi Construction
 * @link https://www.instagram.com/sahil_sheikh78/
 */
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

const Hero = () => {
  const { openModal } = useModal();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-[62vh] min-h-[460px] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden z-0">
      <div className="absolute inset-0 z-[-1] overflow-hidden bg-jyothi-blue">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/Jyothi/IMG_9715.JPG"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/Jyothi/hero_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle top edge gradient for navbar contrast */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-jyothi-blue/80 via-jyothi-blue/40 to-transparent pointer-events-none z-[1]"></div>

        {/* Gentle dark gradient across video for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/65 pointer-events-none"></div>

        {/* Subtle bottom edge gradient to blend smoothly */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-jyothi-blue to-transparent pointer-events-none"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col justify-center pt-16 sm:pt-24 md:pt-36 pb-6 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-2xl md:ml-auto mt-2 md:mt-8 text-center sm:text-left"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-jyothi-amber/50 text-jyothi-amber text-xs font-bold tracking-widest uppercase mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-jyothi-amber animate-pulse"></span>
            Established Legacy
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-3 md:mb-6 tracking-tight font-heading drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Building Landmarks. <br />
            <span className="text-jyothi-amber">Shaping Legacies.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 md:mb-8 leading-relaxed font-normal max-w-xl font-sans drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] mx-auto sm:mx-0">
            Over five decades of trusted construction excellence.
          </p>

          <div className="flex flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full">
            <button 
              onClick={openModal}
              className="flex-1 sm:flex-initial px-3 sm:px-6 md:px-9 py-3 sm:py-3.5 md:py-4 bg-jyothi-amber text-jyothi-blue font-black rounded-xl shadow-[0_15px_35px_rgba(212,170,91,0.35)] hover:bg-jyothi-orange hover:text-white transition-all hover:scale-105 active:scale-95 font-heading tracking-wider sm:tracking-widest text-center whitespace-nowrap uppercase text-[11px] sm:text-xs md:text-sm"
            >
              Get a Quote
            </button>
            <Link 
              to="/services" 
              className="flex-1 sm:flex-initial px-3 sm:px-6 md:px-9 py-3 sm:py-3.5 md:py-4 bg-black/50 border border-white/30 text-white font-black rounded-xl hover:bg-white/20 hover:border-jyothi-amber hover:text-jyothi-amber transition-all hover:scale-105 active:scale-95 font-heading tracking-wider sm:tracking-widest text-center whitespace-nowrap uppercase text-[11px] sm:text-xs md:text-sm shadow-lg"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;