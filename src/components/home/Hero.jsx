/**
 * @author Sahil Sheikh
 * @project Jyothi Construction
 * @link https://www.instagram.com/sahil_sheikh78/
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { ShieldCheck } from 'lucide-react';

const Hero = () => {
  const { openModal } = useModal();

  return (
    <section className="relative h-[80vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden z-0">
      {/* Background Video (Retaining natural picture/video without full mask) */}
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

        {/* Top cinematic dark fade for seamless navbar contrast */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-jyothi-blue via-jyothi-blue/70 to-transparent pointer-events-none z-[1]"></div>

        {/* Subtle bottom fade only to seamlessly blend into next section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-jyothi-blue to-transparent pointer-events-none"></div>
      </div>

      {/* Static Content Overlay with slight darker background only for the texts */}
      <div className="container relative z-10 px-6 max-w-7xl mx-auto flex flex-col justify-center pt-24 sm:pt-28 md:pt-36 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl bg-jyothi-blue/70 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.4)] mt-4 md:mt-8"
        >
          {/* Badge with Logo Green + Gold Harmony */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-jyothi-amber text-[11px] md:text-xs font-black uppercase tracking-[0.25em] mb-4 md:mb-6 shadow-sm">
            <ShieldCheck size={14} className="text-jyothi-green-light" />
            <span>Official Plant & Infrastructure Footage</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-[1.15] mb-4 md:mb-6 tracking-tighter font-heading drop-shadow-lg">
            Building Strong <br />
            <span className="text-jyothi-amber">Foundations</span> for <br />
            Tomorrow
          </h1>

          {/* Sub-text */}
          <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-6 md:mb-8 leading-relaxed font-normal max-w-2xl font-sans drop-shadow-sm">
            Delivering technical excellence and structural integrity with a legacy of 60+ years in modern infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-start gap-4 flex-wrap">
            <button 
              onClick={openModal}
              className="px-6 md:px-10 py-3.5 md:py-4 bg-jyothi-amber text-jyothi-blue font-black rounded-xl shadow-[0_20px_50px_rgba(245,158,11,0.3)] hover:bg-jyothi-orange hover:text-white transition-all hover:scale-105 active:scale-95 font-heading tracking-widest text-center whitespace-nowrap uppercase text-xs md:text-sm"
            >
              Get a Quote
            </button>
            <Link to="/services" className="px-6 md:px-10 py-3.5 md:py-4 bg-white/10 border border-white/20 text-white font-black rounded-xl hover:bg-white/20 hover:border-jyothi-amber hover:text-jyothi-amber transition-all hover:scale-105 active:scale-95 font-heading tracking-widest backdrop-blur-md text-center whitespace-nowrap uppercase text-xs md:text-sm">
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;