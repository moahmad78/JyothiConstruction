import { ArrowRight } from 'lucide-react';
import Hero from '../components/home/Hero';
import KeyVerticals from '../components/home/KeyVerticals';
import WhyJyothi from '../components/home/WhyJyothi';
import Image from '../components/Image';

const ClientsPartners = () => {
  const partners = [
    '/assets/images/client/brigade.png',
    '/assets/images/client/hiranandani.png',
    '/assets/images/client/ds-max.png',
    '/assets/images/client/bosch_logo.png',
    '/assets/images/client/JMC-Projects.jpg',
    '/assets/images/client/LW.png',
    '/assets/images/client/mfar.png',
    '/assets/images/client/pride.png',
    '/assets/images/client/sowparnika.png',
    '/assets/images/client/triveni.jpg',
    '/assets/images/client/bhadra.jpg',
    '/assets/images/new-2024/clients/1.png',
    '/assets/images/new-2024/clients/2.png',
    '/assets/images/new-2024/clients/3.png',
    '/assets/images/new-2024/clients/4.png',
    '/assets/images/new-2024/clients/5.png',
    '/assets/images/new-2024/clients/6.png',
    '/assets/images/new-2024/clients/7.png',
    '/assets/images/new-2024/clients/8.png',
    '/assets/images/new-2024/clients/9.png',
    '/assets/images/new-2024/clients/10.png',
    '/assets/images/new-2024/clients/11.png',
    '/assets/images/new-2024/clients/12.png',
    '/assets/images/new-2024/clients/13.png',
    '/assets/images/new-2024/clients/14.png',
    '/assets/images/new-2024/clients/15.png',
    '/assets/images/new-2024/clients/16.png',
  ];

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
        {/* Gradients to mask the edges */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-jyothi-green to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-jyothi-green to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-scroll whitespace-nowrap flex items-center gap-12 px-6">
          {duplicatedPartners.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-48 h-24 bg-white/5 backdrop-blur-md border border-white/5 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-brand-secondary/30 transition-all duration-500 group/item overflow-hidden"
            >
              <img 
                src={logo} 
                alt={`Client ${index}`} 
                className="w-32 h-16 object-contain grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500 transform group-hover/item:scale-110"
              />
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
