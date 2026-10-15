import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Eye, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const siteImages = [
  {
    id: 1,
    src: '/assets/site/04b7afb2-8579-404a-9042-ab108687714e.jpg',
    title: 'Deep Foundation & Earthwork Grading',
    tag: 'Foundation & Earthworks',
    location: 'Bangalore Project Site'
  },
  {
    id: 2,
    src: '/assets/site/08901571-47d2-4c50-98ec-60cb43b4d24d.jpg',
    title: 'Reinforced Column & Slab Casting',
    tag: 'Structural Concreting',
    location: 'Commercial Hub Site'
  },
  {
    id: 3,
    src: '/assets/site/108225e7-2684-4b16-957a-7f58fc480e37.jpg',
    title: 'Industrial Heavy PEB Framing',
    tag: 'Industrial Framing',
    location: 'Mysore Road Industrial Park'
  },
  {
    id: 4,
    src: '/assets/site/19bed19d-d7ce-4fc5-87db-04f4a8d19641.jpg',
    title: 'Commercial Multi-Level Superstructure',
    tag: 'Commercial Structure',
    location: 'Bangalore Urban'
  },
  {
    id: 5,
    src: '/assets/site/1cb2d366-0753-457b-936c-96d4cab0ce65.jpg',
    title: 'Structural Steel Girder Assembly',
    tag: 'Fabrication & Erection',
    location: 'Infrastructure Corridor'
  },
  {
    id: 6,
    src: '/assets/site/1e6bfd19-08bd-4a22-b49c-fd1dede0eb7a.jpg',
    title: 'Arterial Civil & Transit Link Execution',
    tag: 'Civil Infrastructure',
    location: 'State Transit Works'
  },
  {
    id: 7,
    src: '/assets/site/3f34d0ea-fb6b-422e-a2ef-ee695a395778.jpg',
    title: 'Monolithic Raft Foundation Pours',
    tag: 'High-Volume RMC',
    location: 'High-Rise Site'
  },
  {
    id: 8,
    src: '/assets/site/50b720bd-70d8-4d5d-b2db-fc5d4f254f27.jpg',
    title: 'Commercial Complex Exterior Masonry',
    tag: 'Precision Masonry',
    location: 'Retail Arcade Site'
  },
  {
    id: 9,
    src: '/assets/site/52ca2e9a-520d-4b2c-a1d9-2bdbee06c409.jpg',
    title: 'Industrial Floor Slab Laser Screeding',
    tag: 'Industrial Flooring',
    location: 'Logistics Facility'
  },
  {
    id: 10,
    src: '/assets/site/5bb958a9-8daa-49ba-8b02-2430bf235e82.jpg',
    title: 'Multi-Storey Core & Shear Wall Concrete',
    tag: 'Structural Engineering',
    location: 'Bangalore Central'
  },
  {
    id: 11,
    src: '/assets/site/95a5fb3f-89fe-4215-b465-c8c3e25d0bb2.jpg',
    title: 'Heavy Foundation Reinforcement Mesh',
    tag: 'Rebar Engineering',
    location: 'Industrial Plant'
  },
  {
    id: 12,
    src: '/assets/site/a497e2ef-c800-4848-bcbe-a371708ff48a.jpg',
    title: 'Turnkey Commercial Elevation Finishing',
    tag: 'Turnkey Delivery',
    location: 'Corporate Park'
  },
  {
    id: 13,
    src: '/assets/site/a86d68de-9430-40af-abe6-5773e74cde56.jpg',
    title: 'Substructure Excavation & Shoring Works',
    tag: 'Geotechnical & Shoring',
    location: 'Basement Works'
  },
  {
    id: 14,
    src: '/assets/site/ca80479e-f451-4b95-bc22-88160284558b.jpg',
    title: 'Large-Span Industrial Depot Assembly',
    tag: 'Heavy Infrastructure',
    location: 'Bangalore Rural'
  },
  {
    id: 15,
    src: '/assets/site/cd3e5042-2ab3-450d-86b0-e86ffcdc3730.jpg',
    title: 'Multi-Bay Warehouse Enclosure & Roofing',
    tag: 'PEB Construction',
    location: 'Logistics Hub'
  },
  {
    id: 16,
    src: '/assets/site/faa677f9-6fdf-421e-8292-bf922cd4d1fd.jpg',
    title: 'Site Progress & Quality Control Check',
    tag: 'Site Quality Audit',
    location: 'Project Site Office'
  }
];

const SiteGallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % siteImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + siteImages.length) % siteImages.length);
  };

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-jyothi-blue via-[#0d131a] to-jyothi-blue relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "150px" }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jyothi-amber/10 border border-jyothi-amber/30 text-jyothi-amber text-xs font-black tracking-widest uppercase mb-3">
              <HardHat size={14} className="text-jyothi-amber" />
              Real Ground Operations
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-heading leading-tight">
              On-Site Engineering in <span className="text-jyothi-amber">Action</span>
            </h2>
          </motion.div>

          <p className="text-gray-400 max-w-md text-xs sm:text-sm leading-relaxed mx-auto md:mx-0">
            A real-time glimpse into active excavation, monolithic concrete pours, heavy PEB erections, and structural execution across our live project sites.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {siteImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "150px" }}
              transition={{ duration: 0.25 }}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-jyothi-amber/50 cursor-pointer shadow-lg aspect-square"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-jyothi-blue/90 via-jyothi-blue/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md flex items-center justify-center text-jyothi-amber opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye size={16} />
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[10px] font-bold text-jyothi-amber uppercase tracking-wider block mb-0.5">
                  {img.tag}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-jyothi-amber transition-colors font-heading">
                  {img.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-gray-300 mt-1">
                  <MapPin size={11} className="text-jyothi-amber shrink-0" />
                  <span className="truncate">{img.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-jyothi-amber p-2 bg-white/10 rounded-full transition-colors z-20"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={prevImage}
                className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 text-white hover:text-jyothi-amber p-2.5 bg-black/60 rounded-full transition-colors z-20"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 text-white hover:text-jyothi-amber p-2.5 bg-black/60 rounded-full transition-colors z-20"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Container */}
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl max-h-[75vh] w-auto">
                <img 
                  src={siteImages[selectedImageIndex].src} 
                  alt={siteImages[selectedImageIndex].title}
                  className="max-h-[75vh] max-w-full object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <span className="text-xs font-bold text-jyothi-amber uppercase tracking-widest block">
                  {siteImages[selectedImageIndex].tag}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white font-heading mt-0.5">
                  {siteImages[selectedImageIndex].title}
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {siteImages[selectedImageIndex].location} • ({selectedImageIndex + 1} of {siteImages.length})
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default SiteGallery;
