import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Varma",
    role: "Project Director, Brigade Group",
    content: "Jyothi Construction has been our trusted partner for over a decade. Their commitment to quality is unmatched.",
    image: "/assets/images/client/1.png"
  },
  {
    id: 2,
    name: "Sandeep Hegde",
    role: "COO, DS-MAX Properties",
    content: "The level of precision they bring to their fabrication and RMC services is extraordinary. Controlled excellence.",
    image: "/assets/images/client/2.png"
  },
  {
    id: 3,
    name: "Ananya Rao",
    role: "Lead Architect, Pride Group",
    content: "Working with Jyothi Construction is always a seamless experience. Their in-house manufacturing eliminates delays.",
    image: "/assets/images/client/3.png"
  },
  {
    id: 4,
    name: "Vikram Mehta",
    role: "MD, Prestige Group",
    content: "Their attention to structural detail and timing is what sets them apart. A truly reliable partner for large scale works.",
    image: "/assets/images/client/4.png"
  },
  {
    id: 5,
    name: "Suresh Raina",
    role: "Structural Consultant",
    content: "I have rarely seen such consistency in RMC quality. Jyothi Construction is definitely the gold standard.",
    image: "/assets/images/client/1.png"
  },
  {
    id: 6,
    name: "Meera Iyer",
    role: "Urban Planner",
    content: "Their integrated approach to construction materials and execution makes project management much easier.",
    image: "/assets/images/client/2.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleCards(4);
      else if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleCards + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - visibleCards + 1)) % (testimonials.length - visibleCards + 1));
  };

  // Safe Index logic to prevent empty space at the end
  const maxIndex = testimonials.length - visibleCards;
  const safeIndex = Math.min(currentIndex, maxIndex);

  return (
    <section className="py-10 md:py-24 bg-jyothi-blue relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-sm mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-heading">What Our Partners Say</h2>
        </div>

        <div className="relative group">
          <div className="overflow-hidden">
            <motion.div 
              animate={{ x: `-${safeIndex * (100 / visibleCards)}%` }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="flex gap-6"
            >
              {testimonials.map((t) => (
                <div 
                  key={t.id}
                  style={{ minWidth: `calc(${(100 / visibleCards)}% - ${(visibleCards - 1) * 24 / visibleCards}px)` }}
                  className="h-full"
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] relative group/card hover:border-jyothi-amber/50 transition-all duration-500 h-full flex flex-col min-h-[280px]">
                    <Quote className="text-jyothi-amber/10 w-12 h-12 absolute top-6 right-6" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 italic font-medium flex-grow">
                        "{t.content}"
                      </p>
                      
                      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                        <div className="w-12 h-12 bg-jyothi-amber rounded-xl flex items-center justify-center font-black text-jyothi-blue shadow-lg shadow-jyothi-amber/20">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-white font-bold font-heading text-sm md:text-base">{t.name}</h4>
                          <span className="text-jyothi-amber text-[10px] md:text-xs font-bold uppercase tracking-widest">{t.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls - Desktop Only */}
          <div className="hidden md:block">
            <button 
              onClick={prev}
              disabled={safeIndex === 0}
              className="absolute -left-6 top-1/2 -translate-y-1/2 p-4 bg-jyothi-blue/80 border border-white/10 rounded-full text-white hover:bg-jyothi-amber hover:text-jyothi-blue transition-all disabled:opacity-0 z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              disabled={safeIndex >= maxIndex}
              className="absolute -right-6 top-1/2 -translate-y-1/2 p-4 bg-jyothi-blue/80 border border-white/10 rounded-full text-white hover:bg-jyothi-amber hover:text-jyothi-blue transition-all disabled:opacity-0 z-20"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-10 md:mt-12">
            {Array.from({ length: testimonials.length - visibleCards + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === safeIndex ? 'w-8 bg-jyothi-amber' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
