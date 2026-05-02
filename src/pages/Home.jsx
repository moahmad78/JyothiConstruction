import { ArrowRight } from 'lucide-react';
import Hero from '../components/home/Hero';
import KeyVerticals from '../components/home/KeyVerticals';
import WhyJyothi from '../components/home/WhyJyothi';
import Image from '../components/Image';

const ClientsPartners = () => {
  // Using placeholder company names to represent logos
  const partners = [
    "TechBuild India", "Global InfraCorp", "Apex Materials", 
    "Metro Foundations", "Skyline Developers", "Prime SteelWorks",
    "Urban Arch Studio", "Dynamic Logistics", "Core Aggregates"
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">Strategic Collaborations</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-jyothi-green font-heading">Our Trusted Partners</h3>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden group py-4">
        {/* Fade gradients on left and right for seamless look */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-scroll whitespace-nowrap flex items-center gap-12 px-6">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-48 h-20 bg-white shadow-sm border border-gray-100 rounded-lg flex items-center justify-center cursor-pointer opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-brand-secondary"
            >
              <span className="font-bold text-gray-800 font-heading text-center px-4 whitespace-normal">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResourcesBlog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Sustainable Concrete Production",
      category: "Industry Insights",
      image: "/assets/images/unsplash-87dd0877.jpg"
    },
    {
      id: 2,
      title: "How Integrated Supply Chains Reduce Project Delays",
      category: "Case Study",
      image: "/assets/images/unsplash-4bd6e84d.jpg"
    },
    {
      id: 3,
      title: "Advancements in Structural Fabrication Techniques",
      category: "Technology",
      image: "/assets/images/unsplash-634cf85b.jpg"
    }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">Knowledge Hub</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white font-heading">Resources & Insights</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold text-white hover:text-brand-secondary transition-colors">
            View All Articles <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
              <div className="rounded-xl overflow-hidden mb-6 h-64 relative">
                <Image src={blog.image} alt={blog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider shadow-sm border border-white/20">
                  {blog.category}
                </div>
              </div>
              <h4 className="text-xl font-bold text-white group-hover:text-brand-secondary transition-colors font-heading mb-3 leading-tight">
                {blog.title}
              </h4>
              <p className="text-gray-300 text-sm">Discover how Jyothi Construction is leading the way in modern building methodologies and innovative materials.</p>
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
      <ResourcesBlog />
    </div>
  );
};

export default Home;
