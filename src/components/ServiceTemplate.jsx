import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceTemplate = ({ title, description, features, tagline }) => {
  return (
    <div className="bg-transparent min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-4 font-heading">{tagline}</h1>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight font-heading mb-8 leading-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed font-light">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-16 bg-white/5 backdrop-blur-md border-y border-white/10">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-jyothi-green font-heading mb-4">
            Controlled Excellence
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            By completely owning our production process and minimizing dependency on external vendors, we ensure unmatched quality, precision, and timely execution across all operations.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-transparent">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-brand-secondary tracking-widest uppercase mb-3 font-heading">Capabilities</h3>
            <h4 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading">
              Why Choose Our {title}?
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20 text-brand-secondary">
                  {feature.icon || <CheckCircle2 className="w-6 h-6" />}
                </div>
                <h5 className="text-xl font-bold text-white font-heading mb-3">{feature.title}</h5>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-jyothi-green font-bold rounded-lg hover:bg-brand-secondary hover:text-white transition-colors font-heading tracking-wide">
              Request a Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceTemplate;
