import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Varma",
    role: "Project Director, Brigade Group",
    content: "Jyothi Construction has been our trusted partner for over a decade. Their commitment to quality and structural integrity is unmatched in the industry.",
    image: "/assets/images/client/1.png"
  },
  {
    id: 2,
    name: "Sandeep Hegde",
    role: "COO, DS-MAX Properties",
    content: "The level of precision they bring to their fabrication and RMC services is extraordinary. They truly understand the meaning of controlled excellence.",
    image: "/assets/images/client/2.png"
  },
  {
    id: 3,
    name: "Ananya Rao",
    role: "Lead Architect, Pride Group",
    content: "Working with Jyothi Construction is always a seamless experience. Their in-house manufacturing eliminates delays and ensures top-tier quality every time.",
    image: "/assets/images/client/3.png"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-10 md:py-24 bg-jyothi-blue relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-sm mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-heading">What Our Partners Say</h2>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-14 rounded-[2.5rem] relative group hover:border-jyothi-amber/50 transition-all duration-500"
              >
                <Quote className="text-jyothi-amber/20 w-16 h-16 md:w-24 md:h-24 absolute top-6 right-6 md:top-10 md:right-10" />
                <div className="relative z-10">
                  <p className="text-lg md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-12 italic font-medium">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-jyothi-amber rounded-2xl flex items-center justify-center font-black text-jyothi-blue text-xl shadow-xl shadow-jyothi-amber/20">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-black text-white font-heading">{testimonials[currentIndex].name}</h4>
                      <span className="text-jyothi-amber text-xs md:text-sm font-bold uppercase tracking-[0.2em]">{testimonials[currentIndex].role}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-10 md:mt-12">
            <button 
              onClick={prev}
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-jyothi-amber hover:text-jyothi-blue transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-jyothi-amber' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-jyothi-amber hover:text-jyothi-blue transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
