import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, Factory, HardHat, Cog, ShieldCheck, Clock, TrendingDown } from 'lucide-react';
import Image from '../components/Image';

const processSteps = [
  {
    id: 1,
    title: "Raw Material Sourcing",
    description: "Premium Aggregates extracted and crushed under strict quality controls.",
    icon: <Cog className="w-8 h-8 text-brand-secondary" />
  },
  {
    id: 2,
    title: "In-House Manufacturing",
    description: "Production of high-grade Ready Mix Concrete (RMC) and durable Concrete Blocks.",
    icon: <Factory className="w-8 h-8 text-brand-secondary" />
  },
  {
    id: 3,
    title: "Custom Fabrication",
    description: "Precision structural and engineering solutions tailored for the specific project.",
    icon: <HardHat className="w-8 h-8 text-brand-secondary" />
  },
  {
    id: 4,
    title: "End-to-End Execution",
    description: "Seamless project management delivering the finished structure on time.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />
  }
];

const capabilities = [
  {
    title: "Advanced Infrastructure",
    description: "Equipped with state-of-the-art machinery and batching plants capable of handling mega-scale projects."
  },
  {
    title: "Skilled Workforce",
    description: "A dedicated team of experienced engineers, architects, and technical staff ensuring precision at every step."
  },
  {
    title: "In-House Production",
    description: "Total self-reliance for critical raw materials, eliminating third-party delays and ensuring consistent quality."
  }
];

const WhyJyothiPage = () => {
  return (
    <div className="bg-transparent min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-transparent">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-4 font-heading">The Jyothi Advantage</h1>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight font-heading mb-8 leading-tight">
              Integrated Construction. <br /> Controlled Excellence.
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed font-light">
              By owning and operating the entire supply chain—from raw Aggregates and RMC to Fabrication and final execution—we strategically minimize dependency on external vendors. This ensures unmatched control over quality, timelines, and cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Integration Flowchart */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white font-heading mb-4">
              The Integrated Process
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A seamless flow from raw materials to the finished structure.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-1 bg-white/20 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center group">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 border-4 border-white/20 backdrop-blur-md ${index === 3 ? 'bg-jyothi-green' : 'bg-white/10'}`}>
                    {step.icon}
                  </div>
                  <h4 className={`text-xl font-bold mb-3 font-heading ${index === 3 ? 'text-jyothi-green' : 'text-white'}`}>
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed px-4">
                    {step.description}
                  </p>
                  
                  {/* Mobile Connecting Arrow */}
                  {index !== 3 && (
                    <div className="md:hidden mt-8 text-gray-300">
                      <ArrowDown className="w-8 h-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars of Control */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
              <ShieldCheck className="w-12 h-12 text-brand-secondary mb-6" />
              <h4 className="text-2xl font-bold text-white mb-4 font-heading">Unmatched Quality</h4>
              <p className="text-white/80 leading-relaxed">
                Producing our own RMC, Blocks, and Aggregates means every batch undergoes our rigorous internal testing. We never compromise on structural integrity.
              </p>
            </div>
            
            <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
              <Clock className="w-12 h-12 text-brand-secondary mb-6" />
              <h4 className="text-2xl font-bold text-white mb-4 font-heading">Guaranteed Timelines</h4>
              <p className="text-white/80 leading-relaxed">
                By eliminating third-party suppliers for critical materials, we remove external bottlenecks. Our projects progress seamlessly, adhering strictly to schedules.
              </p>
            </div>

            <div className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
              <TrendingDown className="w-12 h-12 text-brand-secondary mb-6" />
              <h4 className="text-2xl font-bold text-white mb-4 font-heading">Optimized Costs</h4>
              <p className="text-white/80 leading-relaxed">
                Vertical integration creates significant economies of scale. We pass these efficiencies on, delivering premium quality without the inflated middleman margins.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Strength in Capability */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h3 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">Our Resources</h3>
              <h4 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8 font-heading">
                Strength in Capability
              </h4>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                Our philosophy of integrated construction is fully supported by our massive internal infrastructure. We don't just plan projects; we possess the tangible assets and human capital required to execute them flawlessly.
              </p>
              
              <div className="space-y-6">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-1" />
                    <div>
                      <h5 className="text-xl font-bold text-white font-heading mb-2">{cap.title}</h5>
                      <p className="text-gray-300 leading-relaxed">{cap.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="absolute -inset-4 bg-brand-secondary/20 rounded-2xl transform -rotate-3"></div>
              <Image 
                src="/assets/images/unsplash-16daff1e.jpg" 
                alt="Concrete Blocks Manufacturing" 
                className="relative z-10 rounded-xl shadow-2xl object-cover h-[300px] sm:h-[500px] w-full"
              />
              <Image 
                src="/assets/images/unsplash-5dbf3933.jpg" 
                alt="Aggregates Manufacturing" 
                className="relative z-10 rounded-xl shadow-2xl object-cover h-[300px] sm:h-[500px] w-full mt-0 sm:mt-12"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyJyothiPage;
