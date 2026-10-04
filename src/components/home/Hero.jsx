/**
 * @author Sahil Sheikh
 * @project Jyothi Construction
 * @link https://www.instagram.com/sahil_sheikh78/
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

const Hero = () => {
  const { openModal } = useModal();

  return (
    <section className="relative h-[62vh] min-h-[460px] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden z-0">
      <div className="absolute inset-0 z-[-1] overflow-hidden bg-jyothi-blue">
        <video
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

        {/* Subtle bottom edge gradient to blend smoothly */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-jyothi-blue to-transparent pointer-events-none"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col justify-center pt-16 sm:pt-24 md:pt-36 pb-6 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl md:ml-auto bg-jyothi-blue/35 backdrop-blur-md p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] mt-2 md:mt-8 text-center sm:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-[1.15] mb-3 md:mb-6 tracking-tighter font-heading drop-shadow-md">
            Building Strong <br />
            <span className="text-jyothi-amber">Foundations</span> for <br />
            Tomorrow
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-gray-100 mb-5 md:mb-8 leading-relaxed font-normal max-w-xl font-sans drop-shadow-sm mx-auto sm:mx-0">
            Delivering technical excellence and structural integrity with a legacy of 60+ years in modern infrastructure.
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
              className="flex-1 sm:flex-initial px-3 sm:px-6 md:px-9 py-3 sm:py-3.5 md:py-4 bg-black/25 border border-white/25 text-white font-black rounded-xl hover:bg-white/20 hover:border-jyothi-amber hover:text-jyothi-amber transition-all hover:scale-105 active:scale-95 font-heading tracking-wider sm:tracking-widest backdrop-blur-md text-center whitespace-nowrap uppercase text-[11px] sm:text-xs md:text-sm shadow-sm"
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