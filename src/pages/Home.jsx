import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import KeyVerticals from '../components/home/KeyVerticals';
import StatsSection from '../components/home/StatsSection';
import WhyJyothi from '../components/home/WhyJyothi';
import ProjectsGrid from '../components/home/ProjectsGrid';
import CTABanner from '../components/home/CTABanner';
import Testimonials from '../components/home/Testimonials';
import DroneShowcase from '../components/home/DroneShowcase';

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
    <section className="py-10 md:py-24 bg-jyothi-blue border-t border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-sm mb-4 block">Our Network</span>
          <h2 className="text-3xl md:text-5xl font-black text-white font-heading">Trusted by Industry Leaders</h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden group py-4">
        <div className="animate-scroll whitespace-nowrap flex items-center gap-6 md:gap-8 px-6">
          {duplicatedPartners.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-36 h-20 md:w-48 md:h-24 bg-white rounded-2xl p-3 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-2xl hover:border-jyothi-amber border border-white/20 transition-all duration-300 group/item overflow-hidden"
            >
              <img 
                src={logo} 
                alt={`Client ${index}`} 
                className="w-full h-full object-contain filter-none opacity-100 transition-all duration-300 transform group-hover/item:scale-105"
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
    <div className="flex flex-col w-full bg-jyothi-blue">
      <Hero />
      <AboutSection />
      <KeyVerticals />
      <ProjectsGrid />
      <DroneShowcase />
      <WhyJyothi />
      <StatsSection />
      <ClientsPartners />
      <Testimonials />
      <CTABanner />
    </div>
  );
};

export default Home;
