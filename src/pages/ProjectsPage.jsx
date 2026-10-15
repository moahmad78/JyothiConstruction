import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  ArrowRight, 
  Home, 
  Building2, 
  Factory, 
  Landmark, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Award,
  ChevronRight,
  HardHat,
  Ruler
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import SiteGallery from '../components/home/SiteGallery';

// Project Categories definition
const projectCategories = [
  {
    id: 'residential',
    title: 'Residential Projects',
    subtitle: 'Modern, durable, and thoughtfully designed homes built for comfort and long-term value.',
    highlight: 'We focus on quality construction, efficient planning, and reliable delivery.',
    icon: Home,
    image: '/assets/Residential/01.JPG',
    tag: 'Living Excellence'
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    subtitle: 'High-performance commercial spaces designed for functionality, strength, and efficiency.',
    highlight: 'From offices to retail developments, we deliver projects that support business growth.',
    icon: Building2,
    image: '/assets/Commercial/01.JPG',
    tag: 'Corporate & Retail'
  },
  {
    id: 'industrial',
    title: 'Industrial Projects',
    subtitle: 'Robust and scalable infrastructure built to meet demanding industrial requirements.',
    highlight: 'Engineered for durability, safety, and operational efficiency.',
    icon: Factory,
    image: '/assets/Industrial/02.JPG',
    tag: 'Heavy Infrastructure'
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Civil Works',
    subtitle: 'Large-scale civil and infrastructure projects executed with precision and strong engineering capabilities.',
    highlight: 'Ensuring long-term performance and structural reliability for generations.',
    icon: Landmark,
    image: '/assets/Others/02.JPG',
    tag: 'Civil Mastery'
  }
];

// Project Strengths
const projectStrengths = [
  {
    title: 'End-to-End Construction Solutions',
    desc: 'Complete turnkey ownership from foundational excavation to architectural commissioning.',
    icon: Layers
  },
  {
    title: 'In-House RMC & Aggregates',
    desc: 'Uncompromising quality control backed by our own automated batching plants and quarries.',
    icon: ShieldCheck
  },
  {
    title: 'Strong Execution & Management',
    desc: 'Rigorous engineering oversight and transparent milestones delivered by veteran project managers.',
    icon: HardHat
  },
  {
    title: 'Timely Delivery with Consistent Standards',
    desc: 'Disciplined timeline adherence and robust supply chains that eliminate project bottlenecks.',
    icon: Clock
  },
  {
    title: 'Focus on Safety & Durability',
    desc: 'Zero-compromise safety protocols and monolithic structural integrity built to last centuries.',
    icon: Award
  }
];

// Execution Approach Steps
const executionSteps = [
  {
    number: '01',
    step: '1. Planning & Design',
    desc: 'Detailed project planning with a focus on efficiency, architectural vision, and structural integrity.',
    icon: Ruler
  },
  {
    number: '02',
    step: '2. Material Control',
    desc: 'Direct integration of high-quality in-house materials, computerized RMC batching, and graded aggregates.',
    icon: ShieldCheck
  },
  {
    number: '03',
    step: '3. Construction & Execution',
    desc: 'Precision-driven on-site execution powered by skilled engineering teams and modern heavy equipment.',
    icon: HardHat
  },
  {
    number: '04',
    step: '4. Quality Assurance',
    desc: 'Strict multi-stage laboratory tests and structural quality checks at every construction phase.',
    icon: CheckCircle2
  },
  {
    number: '05',
    step: '5. Timely Delivery',
    desc: 'Unwavering commitment to delivery deadlines and reliable turnkey project handover.',
    icon: Clock
  }
];

// Featured Projects (curated from folder-wise assets: Residential, Commercial, Industrial, Others)
const featuredProjectsData = [
  // Residential Projects (from /assets/Residential)
  {
    id: 1,
    name: 'Residential Development',
    location: 'Bangalore, Karnataka',
    category: 'Residential',
    desc: 'Contemporary residential development built with premium concrete masonry, spacious layouts, and long-term durability.',
    image: '/assets/Residential/01.JPG',
    badge: 'Residential'
  },
  {
    id: 2,
    name: 'Luxury Residential Gated Enclave',
    location: 'Bangalore Region, Karnataka',
    category: 'Residential',
    desc: 'Thoughtfully planned residential community engineered for peace of mind, acoustic insulation, and enduring aesthetic elegance.',
    image: '/assets/Residential/02.JPG',
    badge: 'Residential'
  },

  // Commercial Projects (from /assets/Commercial)
  {
    id: 3,
    name: 'Commercial Complex',
    location: 'Bangalore Region, Karnataka',
    category: 'Commercial',
    desc: 'High-performance commercial retail and business development designed for functionality, strength, and commercial growth.',
    image: '/assets/Commercial/01.JPG',
    badge: 'Commercial'
  },
  {
    id: 4,
    name: 'Corporate Office & Tech Hub',
    location: 'Bangalore, Karnataka',
    category: 'Commercial',
    desc: 'State-of-the-art office infrastructure with high-load interlock paving, modern structural spans, and precision finishing.',
    image: '/assets/Commercial/03.JPG',
    badge: 'Commercial'
  },
  {
    id: 5,
    name: 'Integrated Retail & Commercial Plaza',
    location: 'Bangalore Urban, Karnataka',
    category: 'Commercial',
    desc: 'Multi-tenant commercial complex engineered to accommodate high footfall density with reinforced columns and slabs.',
    image: '/assets/Commercial/04.JPG',
    badge: 'Commercial'
  },
  {
    id: 6,
    name: 'Multi-Storey Commercial Development',
    location: 'Karnataka',
    category: 'Commercial',
    desc: 'Modern multi-level commercial space delivering maximum floor utility, structural durability, and low maintenance overheads.',
    image: '/assets/Commercial/05.JPG',
    badge: 'Commercial'
  },
  {
    id: 7,
    name: 'Commercial Logistics & Operations Office',
    location: 'Karnataka',
    category: 'Commercial',
    desc: 'Integrated administrative and logistics facility built with computerized concrete mixes and heavy foundation frameworks.',
    image: '/assets/Commercial/06.jpg',
    badge: 'Commercial'
  },
  {
    id: 8,
    name: 'Corporate Enterprise Facility',
    location: 'Bangalore, Karnataka',
    category: 'Commercial',
    desc: 'Corporate regional headquarters designed with precision engineering, sustainable concrete blocks, and elegant civil works.',
    image: '/assets/Commercial/07.jpg',
    badge: 'Commercial'
  },
  {
    id: 9,
    name: 'Executive Commercial Towers',
    location: 'Karnataka',
    category: 'Commercial',
    desc: 'High-rise commercial towers with advanced seismic-resistant frames and precision-engineered structural floorings.',
    image: '/assets/Commercial/09.jpg',
    badge: 'Commercial'
  },
  {
    id: 10,
    name: 'Commercial Service & Retail Arcade',
    location: 'Bangalore Region, Karnataka',
    category: 'Commercial',
    desc: 'Specialized commercial showroom and workshop facility featuring wide clear-span steel and concrete construction.',
    image: '/assets/Commercial/10.jpg',
    badge: 'Commercial'
  },

  // Industrial Projects (from /assets/Industrial)
  {
    id: 11,
    name: 'Industrial Facility',
    location: 'Mysore Road, Karnataka',
    category: 'Industrial',
    desc: 'Robust and scalable infrastructure built to meet demanding industrial manufacturing and heavy equipment loading needs.',
    image: '/assets/Industrial/02.JPG',
    badge: 'Industrial'
  },
  {
    id: 12,
    name: 'Heavy Manufacturing & PEB Industrial Plant',
    location: 'Industrial Corridor, Karnataka',
    category: 'Industrial',
    desc: 'Industrial pre-engineered steel structure with reinforced heavy-duty monolithic concrete flooring and gantry bays.',
    image: '/assets/Industrial/04.jpg',
    badge: 'Industrial'
  },
  {
    id: 13,
    name: 'Industrial Logistics & Warehousing Hub',
    location: 'Karnataka',
    category: 'Industrial',
    desc: 'Extensive multi-bay logistics distribution warehouse engineered with laser-screed concrete floors and rapid access portals.',
    image: '/assets/Industrial/06.jpg',
    badge: 'Industrial'
  },
  {
    id: 14,
    name: 'Specialized Industrial Production Unit',
    location: 'Bangalore Rural, Karnataka',
    category: 'Industrial',
    desc: 'Heavy processing facility constructed with high chemical-resistant concrete and vibration-isolated equipment foundations.',
    image: '/assets/Industrial/07.jpg',
    badge: 'Industrial'
  },
  {
    id: 15,
    name: 'Automated Industrial Production Complex',
    location: 'Industrial Estate, Karnataka',
    category: 'Industrial',
    desc: 'Integrated industrial complex with high-capacity curing yards, production bays, and administrative blocks.',
    image: '/assets/Industrial/08.JPG',
    badge: 'Industrial'
  },

  // Infrastructure Works (from /assets/Others)
  {
    id: 16,
    name: 'Infrastructure Works',
    location: 'Karnataka',
    category: 'Infrastructure',
    desc: 'Large-scale civil and infrastructure works executed with precision and strong engineering capabilities, ensuring generational reliability.',
    image: '/assets/Others/02.JPG',
    badge: 'Infrastructure'
  },

  // Additional Landmark Projects (from /assets/images/our_works)
  {
    id: 17,
    name: 'High-Rise Commercial & Residential Towers',
    location: 'Bangalore, Karnataka',
    category: 'Commercial',
    desc: 'Multi-storey structural execution featuring high-performance concrete pumping and precision batching.',
    image: '/assets/images/our_works/2.jpg',
    badge: 'Commercial'
  },
  {
    id: 18,
    name: 'Corporate Tech Park & Campus Infrastructure',
    location: 'Bangalore, Karnataka',
    category: 'Commercial',
    desc: 'Extensive heavy-duty interlocking paver installation and architectural landscaping for commercial IT campus.',
    image: '/assets/images/our_works/14.jpg',
    badge: 'Commercial'
  },
  {
    id: 19,
    name: 'Innomac Engineering Industrial Facility',
    location: 'Industrial Corridor, Karnataka',
    category: 'Industrial',
    desc: 'Engineered pre-engineered steel building (PEB) shed fabrication and high-strength industrial concrete flooring.',
    image: '/assets/images/our_works/9.jpg',
    badge: 'Industrial'
  },
  {
    id: 20,
    name: 'Multi-Bay Industrial Logistics Hub',
    location: 'Karnataka',
    category: 'Industrial',
    desc: 'Large-span industrial distribution facility with specialized heavy vehicle paving and load-bearing loading bays.',
    image: '/assets/images/our_works/18.jpg',
    badge: 'Industrial'
  },
  {
    id: 21,
    name: 'Urban Metro Rail Viaduct & Transit Infrastructure',
    location: 'Bangalore, Karnataka',
    category: 'Infrastructure',
    desc: 'High-grade specialized concrete supply and on-site pumping for elevated metro viaduct and station framework.',
    image: '/assets/images/our_works/20.jpg',
    badge: 'Infrastructure'
  },
  {
    id: 22,
    name: 'State Highway Corridor & Kerb Infrastructure',
    location: 'Karnataka',
    category: 'Infrastructure',
    desc: 'Direct mechanized placement of high-density concrete kerb stones and edge barriers with specialized crane trucks.',
    image: '/assets/images/our_works/19.jpg',
    badge: 'Infrastructure'
  },
  {
    id: 23,
    name: 'Deep Foundation & Raft Concreting Works',
    location: 'Bangalore, Karnataka',
    category: 'Infrastructure',
    desc: 'Complex deep foundation excavation and monolithic concrete raft foundation casting using mobile boom pumps.',
    image: '/assets/images/our_works/3a.jpg',
    badge: 'Infrastructure'
  },
  {
    id: 24,
    name: 'Commercial Automobile Showroom & Service Hub',
    location: 'Karnataka',
    category: 'Commercial',
    desc: 'Comprehensive commercial facility development including service workshops, high-load paving, and administrative blocks.',
    image: '/assets/images/our_works/13.jpg',
    badge: 'Commercial'
  },
  {
    id: 25,
    name: 'Sports & Multipurpose Arena',
    location: 'Karnataka',
    category: 'Commercial',
    desc: 'Large-scale institutional structure execution with high-volume continuous concrete pumping and heavy structural blocks.',
    image: '/assets/images/our_works/21.jpg',
    badge: 'Commercial'
  }
];

// Stats Section
const projectStats = [
  {
    value: '50+',
    label: 'Years of Group Legacy',
    desc: 'Continuous structural leadership & trust'
  },
  {
    value: '500+',
    label: 'Multiple Completed Projects',
    desc: 'Across residential, commercial & industrial'
  },
  {
    value: '3+',
    label: 'Manufacturing Units',
    desc: 'RMC plants, block yards & quarries'
  },
  {
    value: '100%',
    label: 'End-to-End Construction',
    desc: 'Total integrated turnkey capability'
  }
];

const categories = ["All", "Residential", "Commercial", "Industrial", "Infrastructure"];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { openModal } = useModal();

  const filteredProjects = activeFilter === "All"
    ? featuredProjectsData
    : featuredProjectsData.filter(p => p.category === activeFilter);

  return (
    <div className="bg-jyothi-blue min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <section className="relative h-[48vh] md:h-[58vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Jyothi/IMG_9644.JPG" 
            alt="Our Projects - Jyothi Construction" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle top & bottom edge gradients for smooth contrast transition */}
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-jyothi-blue/90 via-jyothi-blue/50 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-jyothi-blue to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-jyothi-blue/40"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-jyothi-blue/50 backdrop-blur-md px-6 py-6 sm:px-12 sm:py-9 rounded-2xl md:rounded-3xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.45)] max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jyothi-amber/20 border border-jyothi-amber/40 text-jyothi-amber text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-jyothi-amber animate-pulse"></span>
              Portfolio Showcase
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight drop-shadow-md mb-3">
              Our <span className="text-jyothi-amber">Projects</span>
            </h1>
            <div className="w-20 h-1 bg-jyothi-amber mx-auto my-3 rounded-full"></div>
            <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-medium leading-relaxed drop-shadow-sm">
              Building excellence across every sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="py-12 md:py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jyothi-amber/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "150px" }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 flex flex-col gap-5 text-center lg:text-left"
            >
              <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm block">
                Integrated Construction Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading leading-tight">
                Structures Engineered for <br className="hidden sm:inline" />
                <span className="text-jyothi-amber">Durability & Performance</span>
              </h2>
              <div className="w-20 h-1 bg-jyothi-amber rounded-full mx-auto lg:mx-0"></div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                At Jyothi Construction, every project reflects our commitment to quality, precision, and durability. From residential developments to large-scale industrial infrastructure, we deliver structures that stand strong and perform over time.
              </p>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
                Our integrated approach — combining construction, RMC, aggregates, and fabrication — ensures consistent quality, faster execution, and reliable outcomes across all projects.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "150px" }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/3]">
                <img 
                  src="/Jyothi/IMG_0433.JPG" 
                  alt="Jyothi Construction Site Excellence" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-jyothi-blue/90 backdrop-blur-md border border-white/10 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-jyothi-amber text-jyothi-blue flex items-center justify-center font-black font-heading text-xl shrink-0 shadow-lg">
                    50+
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm font-heading">Five Decades of Trust</h4>
                    <p className="text-gray-400 text-xs">Quality, Precision & Enduring Value</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. PROJECT CATEGORIES */}
      <section className="py-14 md:py-24 relative overflow-hidden bg-[#0d131a]">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-3 block">
              Diverse Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-heading leading-tight mb-4">
              Project <span className="text-jyothi-amber">Categories</span>
            </h2>
            <div className="w-20 h-1 bg-jyothi-amber mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Delivering specialized engineering and construction across four foundational verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projectCategories.map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "150px" }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-jyothi-amber/50 transition-all duration-500 shadow-2xl flex flex-col justify-between"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue via-jyothi-blue/60 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-jyothi-blue/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-jyothi-amber group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all duration-300 shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-jyothi-amber">
                        {cat.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-xl sm:text-2xl font-black text-white font-heading group-hover:text-jyothi-amber transition-colors leading-snug drop-shadow-md">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-4">
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {cat.subtitle}
                    </p>
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
                      <p className="text-jyothi-amber text-xs font-semibold leading-relaxed flex items-center gap-2">
                        <CheckCircle2 size={16} className="shrink-0 text-jyothi-amber" />
                        <span>{cat.highlight}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. OUR PROJECT STRENGTHS */}
      <section className="py-14 md:py-24 relative overflow-hidden bg-jyothi-blue border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-3 block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-heading leading-tight mb-4">
              Our Project <span className="text-jyothi-amber">Strengths</span>
            </h2>
            <div className="w-20 h-1 bg-jyothi-amber mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Why clients trust Jyothi Construction to deliver projects on time, on budget, and built for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {projectStrengths.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "150px" }}
                  transition={{ duration: 0.3 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-jyothi-amber/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-jyothi-amber/10 border border-jyothi-amber/30 flex items-center justify-center text-jyothi-amber group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all duration-300 mb-4 shadow-sm">
                      <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base font-heading group-hover:text-jyothi-amber transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. EXECUTION APPROACH */}
      <section className="py-14 md:py-24 relative overflow-hidden bg-gradient-to-b from-jyothi-blue via-[#0d131a] to-jyothi-blue border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-3 block">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-heading leading-tight mb-4">
              Execution <span className="text-jyothi-amber">Approach</span>
            </h2>
            <div className="w-20 h-1 bg-jyothi-amber mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Our 5-stage precision workflow guaranteeing benchmark quality, structural reliability, and punctual delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {executionSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "150px" }}
                  transition={{ duration: 0.3 }}
                  className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-jyothi-amber/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black font-heading text-jyothi-amber/40 group-hover:text-jyothi-amber transition-colors">
                        {step.number}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-jyothi-amber/10 flex items-center justify-center text-jyothi-amber group-hover:bg-jyothi-amber group-hover:text-jyothi-blue transition-all">
                        <StepIcon size={18} />
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base font-heading group-hover:text-jyothi-amber transition-colors mb-2 leading-snug">
                      {step.step}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. FEATURED PROJECTS SECTION */}
      <section className="py-14 md:py-24 relative overflow-hidden bg-jyothi-blue border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-10 text-center md:text-left">
            <div>
              <span className="text-jyothi-amber font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-3 block">
                Portfolio In Action
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-heading leading-tight">
                Featured <span className="text-jyothi-amber">Projects</span>
              </h2>
            </div>
            
            {/* Category Filter Pills */}
            <div className="flex flex-row overflow-x-auto whitespace-nowrap gap-2 py-1 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 border shrink-0 ${
                    activeFilter === cat 
                      ? 'bg-jyothi-amber border-jyothi-amber text-jyothi-blue shadow-lg scale-105' 
                      : 'bg-white/5 border-white/10 text-white hover:border-jyothi-amber/50 hover:text-jyothi-amber'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-jyothi-amber/50 transition-all duration-500 shadow-2xl flex flex-col justify-between"
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue via-jyothi-blue/40 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-jyothi-amber text-jyothi-blue text-xs font-black uppercase tracking-wider shadow-lg">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-xl font-black text-white font-heading group-hover:text-jyothi-amber transition-colors leading-snug drop-shadow-md">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-gray-300 text-xs mt-1">
                        <MapPin size={13} className="text-jyothi-amber shrink-0" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between gap-4 flex-1">
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-jyothi-amber">
                        Benchmark Project
                      </span>
                      <button 
                        onClick={openModal}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-jyothi-amber transition-colors"
                      >
                        Inquire Project <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Real Ground Site Execution Gallery */}
      <SiteGallery />

      {/* 7. STATS SECTION */}
      <section className="py-12 md:py-16 bg-[#0d131a] border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "150px" }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-jyothi-amber font-heading mb-1">
                  {stat.label}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 max-w-[180px] leading-tight">
                  {stat.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOSING SECTION & CALL TO ACTION */}
      <section className="py-14 md:py-24 bg-jyothi-blue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jyothi-amber/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-jyothi-orange/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 shadow-2xl">
            
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-jyothi-amber/15 border border-jyothi-amber/30 text-jyothi-amber text-xs font-bold tracking-widest uppercase mb-3">
                Built on Trust
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-heading leading-tight mb-4">
                Looking to build your <br className="hidden sm:inline" />
                <span className="text-jyothi-amber">next project?</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-200 font-medium mb-3">
                Every project we build is a reflection of our commitment to strength, quality, and trust.
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                Partner with Jyothi Construction today to turn your architectural vision into an enduring landmark.
              </p>
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 shrink-0">
              <button 
                onClick={openModal}
                className="px-6 md:px-8 py-3.5 md:py-4 bg-jyothi-amber text-jyothi-blue text-xs md:text-sm font-black rounded-xl shadow-lg hover:bg-jyothi-orange hover:text-white transition-all hover:scale-105 active:scale-95 font-heading tracking-widest uppercase flex items-center gap-2 whitespace-nowrap"
              >
                Get a Quote <ArrowRight size={16} />
              </button>
              <Link 
                to="/contact" 
                className="px-6 md:px-8 py-3.5 md:py-4 bg-white/5 border border-white/20 text-white text-xs md:text-sm font-black rounded-xl hover:bg-white/10 hover:border-jyothi-amber transition-all font-heading tracking-widest uppercase text-center whitespace-nowrap"
              >
                Partner With Us
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
