import KeyVerticals from '../components/home/KeyVerticals';

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight font-serif italic">
            Our <span className="text-brand-secondary">Verticals</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light font-sans">
            Discover our comprehensive suite of integrated construction solutions. From raw material extraction to final structural finishing, our integrated approach ensures quality control at every stage, minimizing dependency on external vendors.
          </p>
        </div>
      </div>
      
      {/* Reusing the KeyVerticals component for the overview */}
      <KeyVerticals />
    </div>
  );
};

export default ServicesPage;
