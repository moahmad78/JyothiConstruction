import { ArrowRight } from 'lucide-react';
import Hero from '../components/home/Hero';
import KeyVerticals from '../components/home/KeyVerticals';
import WhyJyothi from '../components/home/WhyJyothi';
import Image from '../components/Image';

const ClientsPartners = () => {
  // Using generic client placeholders with premium grayscale styling
  const partners = [
    "Client 1", "Client 2", "Client 3", "Client 4", "Client 5", 
    "Client 6", "Client 7", "Client 8", "Client 9"
  ];

  // Duplicate the array for a seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-10 md:py-16 bg-white/5 border-y border-white/10 overflow-hidden relative backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">Our Trusted Network</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white font-heading">Trusted by Industry Leaders</h3>
        </div>
      </div>

      <div className="relative w-full overflow-hidden group py-4">
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#002B1B] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#002B1B] to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-scroll whitespace-nowrap flex items-center gap-12 px-6">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-56 h-28 bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-brand-secondary/30 hover:shadow-[0_0_40px_rgba(197,160,89,0.1)] transition-all duration-500 group/item overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
              <span className="font-extrabold text-white/20 group-hover/item:text-brand-secondary font-heading text-2xl tracking-tighter uppercase italic transition-all group-hover/item:scale-110 drop-shadow-sm">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col w-full bg-transparent">
      <Hero />
      <KeyVerticals />
      <WhyJyothi />
      <ClientsPartners />
      {/* <ResourcesBlog /> */}
    </div>
  );
};

export default Home;
