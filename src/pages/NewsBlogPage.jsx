import { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsArticles = [
  {
    id: 1,
    title: 'Precision Structural Concreting: Advancing High-Volume RMC Infrastructure in Bangalore',
    category: 'Technical Update',
    date: 'October 2026',
    author: 'Engineering Core',
    summary: 'An inside look into high-capacity monolithic pours, specialized mix designs, and automated batching protocols supporting urban transit expansions.',
    image: '/assets/site/3f34d0ea-fb6b-422e-a2ef-ee695a395778.jpg',
    readTime: '4 min read'
  },
  {
    id: 2,
    title: 'Sustainable Aggregate Manufacturing & Closed-Loop Water Recovery at Jyothi Stone Crushers',
    category: 'Sustainability',
    date: 'September 2026',
    author: 'Operations Team',
    summary: 'How advanced 5-stage hydro cyclone washing and closed-loop filtration minimize environmental footprint across our primary processing units.',
    image: '/assets/site/04b7afb2-8579-404a-9042-ab108687714e.jpg',
    readTime: '5 min read'
  },
  {
    id: 3,
    title: 'Sri Raghavendra Fabrication: Delivering Heavy Industrial PEB & Long-Span Steel Frameworks',
    category: 'Project Milestone',
    date: 'August 2026',
    author: 'Fabrication Division',
    summary: 'Expanding industrial structural capabilities with PUF insulated panels, truss-less roofing systems, and heavy erection for logistics hubs.',
    image: '/assets/site/108225e7-2684-4b16-957a-7f58fc480e37.jpg',
    readTime: '3 min read'
  },
  {
    id: 4,
    title: 'ISO 9001:2015 & Bureau Veritas Quality Governance Across 5 In-House Verticals',
    category: 'Corporate',
    date: 'July 2026',
    author: 'QA / QC Directorate',
    summary: 'Deep-dive into our zero-harm moral obligation, NABL-compliant batch testing, and compressive strength verification from quarry to handover.',
    image: '/assets/site/08901571-47d2-4c50-98ec-60cb43b4d24d.jpg',
    readTime: '6 min read'
  }
];

const categories = ['All News', 'Corporate', 'Technical Update', 'Project Milestone', 'Sustainability'];

const NewsBlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All News');

  const filteredArticles = activeCategory === 'All News' 
    ? newsArticles 
    : newsArticles.filter(a => a.category === activeCategory);

  return (
    <div className="bg-jyothi-blue min-h-screen pt-28 pb-20">
      
      {/* Hero Header */}
      <section className="relative py-12 md:py-16 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jyothi-amber/10 border border-jyothi-amber/30 text-jyothi-amber text-xs font-black uppercase tracking-[0.25em] mb-4">
                <Newspaper size={14} className="text-jyothi-amber" />
                Resources & Insights
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight leading-tight">
                News <span className="text-jyothi-amber">&amp; Insights</span>
              </h1>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-md leading-relaxed text-center md:text-left">
              Updates on our landmark projects, technical engineering innovations, and the standards driving Jyothi Construction forward.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar pt-8 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                  activeCategory === cat
                    ? 'bg-jyothi-amber text-jyothi-blue border-jyothi-amber shadow-lg shadow-jyothi-amber/20'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-jyothi-amber/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl bg-white/[0.03] border border-white/10 hover:border-jyothi-amber/50 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue via-jyothi-blue/40 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-jyothi-blue/80 backdrop-blur-md border border-white/20 text-jyothi-amber text-[10px] font-bold uppercase tracking-wider">
                      <Tag size={12} />
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4">
                    <span className="text-[11px] font-medium text-gray-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3 font-medium">
                      <Calendar size={13} className="text-jyothi-amber" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span className="text-gray-300">{article.author}</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-black text-white font-heading group-hover:text-jyothi-amber transition-colors leading-snug mb-3">
                      {article.title}
                    </h2>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-jyothi-amber uppercase tracking-wider inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      Read Full Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="container mx-auto px-6 max-w-7xl pt-8">
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-jyothi-amber text-xs font-black uppercase tracking-widest block mb-1">Stay Informed</span>
            <h3 className="text-2xl font-black text-white font-heading">Have project inquiries or technical questions?</h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Connect with our structural engineers and plant specialists.</p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl bg-jyothi-amber text-jyothi-blue font-bold text-xs uppercase tracking-wider hover:bg-jyothi-orange hover:text-white transition-all whitespace-nowrap shadow-lg"
          >
            Contact Our Team
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NewsBlogPage;
