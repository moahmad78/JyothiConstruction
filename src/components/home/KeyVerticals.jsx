import { HardHat, Truck, Mountain, LayoutGrid, Wrench } from 'lucide-react';
import Image from '../Image';

const verticals = [
  {
    id: 1,
    title: 'Construction Services',
    description: 'End-to-end project execution with unmatched precision and quality.',
    icon: <HardHat className="w-10 h-10 text-brand-secondary" />,
    image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Ready Mix Concrete (RMC)',
    description: 'Precision-engineered concrete solutions for robust structural integrity.',
    icon: <Truck className="w-10 h-10 text-brand-secondary" />,
    image: 'https://images.unsplash.com/photo-1588610534575-cf087e35b71c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Aggregates & Crushing',
    description: 'High-quality raw materials sourced and processed for optimal building performance.',
    icon: <Mountain className="w-10 h-10 text-brand-secondary" />,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Concrete Blocks',
    description: 'Durable, efficient, and standardized building components for every scale.',
    icon: <LayoutGrid className="w-10 h-10 text-brand-secondary" />,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Fabrication Works',
    description: 'Structural and customized engineering solutions tailored to your requirements.',
    icon: <Wrench className="w-10 h-10 text-brand-secondary" />,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  }
];

const KeyVerticals = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">Our Core Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              Integrated Construction <br className="hidden md:block" /> Solutions
            </h3>
          </div>
          <p className="text-gray-300 max-w-md text-right hidden md:block text-lg">
            From raw material extraction to final structural finishing, our integrated approach ensures quality control at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((vertical, index) => (
            <div 
              key={vertical.id}
              className={`group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:scale-105 hover:shadow-[0_20px_50px_rgba(197,160,89,0.3)] hover:border-brand-secondary transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0">
                <Image 
                  src={vertical.image} 
                  alt={vertical.title} 
                  className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
              </div>
              
              <div className="relative p-8 h-full flex flex-col justify-end min-h-[320px] z-10">
                <div className="mb-4 bg-white/10 backdrop-blur-md border border-white/20 w-16 h-16 rounded-full flex items-center justify-center text-brand-secondary shadow-lg">
                  {vertical.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2 font-heading">
                  {vertical.title}
                </h4>
                <p className="text-white font-medium text-base">
                  {vertical.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyVerticals;
