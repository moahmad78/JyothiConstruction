import { CheckCircle2 } from 'lucide-react';
import Image from './../../components/Image';

const WhyJyothi = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Column */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-secondary/20 rounded-2xl transform rotate-3"></div>
            <Image 
              src="/assets/images/unsplash-8d09d6bf.jpg" 
              alt="Engineering Precision" 
              className="relative z-10 rounded-xl shadow-2xl object-cover h-[600px] w-full"
            />
            {/* Stats Card Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-brand-primary p-8 rounded-xl shadow-2xl border border-brand-primary/80 z-20 max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-brand-secondary mb-2 font-heading">50+</p>
              <p className="text-white font-medium mb-1 font-heading">Years of Legacy</p>
              <p className="text-sm text-gray-200 leading-tight">Delivering unmatched quality and timelines across generations.</p>
            </div>
          </div>

          {/* Content Column */}
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">Why Jyothi Construction</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-8 font-heading">
              Integrated Construction & Controlled Excellence
            </h3>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              We stand apart through our philosophy of <strong className="text-brand-secondary font-bold">Integrated Construction</strong>. By manufacturing and sourcing our own premium materials — from RMC and Aggregates to Concrete Blocks — we maintain total control over the supply chain. This translates to <strong className="text-brand-secondary font-bold">Controlled Excellence</strong>: unmatched quality, zero compromises, and strict adherence to project timelines.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-lg font-heading">In-House Material Production</h4>
                  <p className="text-gray-300 text-sm mt-1">Guarantees consistency and structural strength in every batch.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-lg font-heading">End-to-End Execution</h4>
                  <p className="text-gray-300 text-sm mt-1">Seamless project management from foundation to final finish.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-lg font-heading">Uncompromising Quality Control</h4>
                  <p className="text-gray-300 text-sm mt-1">Rigorous testing standards ensuring lasting durability.</p>
                </div>
              </li>
            </ul>

            <button className="px-8 py-4 bg-brand-primary text-white font-bold rounded shadow-lg hover:bg-brand-secondary transition-colors font-heading tracking-wide">
              Read Our 50-Year History
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyJyothi;
