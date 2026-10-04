import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Video, Sparkles, ShieldCheck } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Quarry & Heavy Extraction Tour',
    subtitle: 'Aerial Drone Flyover of Granite Quarry & Crushing Operations',
    src: '/Jyothi/DJI_0134.MP4',
    poster: '/Jyothi/IMG_9528.JPG',
    tag: 'Aerial Flyover 1'
  },
  {
    id: 2,
    title: 'Plant Infrastructure & Facilities',
    subtitle: 'Panoramic Overview of Conmix Batching, Silos & Block Yards',
    src: '/Jyothi/DJI_0135.MP4',
    poster: '/Jyothi/IMG_9715.JPG',
    tag: 'Aerial Flyover 2'
  }
];

const DroneShowcase = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const currentVideo = videos[activeVideoIndex];

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleSwitchVideo = (index) => {
    setActiveVideoIndex(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-jyothi-blue via-[#06172d] to-jyothi-blue relative overflow-hidden border-t border-white/10">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-jyothi-amber/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-8 md:mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl flex flex-col items-center md:items-start"
          >
            <div className="flex items-center justify-center md:justify-start gap-2 text-jyothi-amber text-xs font-black uppercase tracking-[0.3em] mb-2 md:mb-3">
              <Sparkles size={16} /> Live Infrastructure Tour
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight font-heading">
              Aerial Drone <span className="text-jyothi-amber">Site Tour</span>
            </h2>
          </motion.div>

          <div className="flex flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-3 w-full sm:w-auto">
            {videos.map((vid, idx) => (
              <button
                key={vid.id}
                onClick={() => handleSwitchVideo(idx)}
                className={`flex-1 sm:flex-initial px-3 sm:px-5 md:px-6 py-2.5 rounded-xl font-bold uppercase tracking-wider text-[11px] sm:text-xs transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 border whitespace-nowrap ${
                  activeVideoIndex === idx
                    ? 'bg-jyothi-amber text-jyothi-blue border-jyothi-amber shadow-lg shadow-jyothi-amber/20 scale-[1.02] sm:scale-105'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-jyothi-amber/40 hover:text-white'
                }`}
              >
                <Video size={13} className="shrink-0" />
                <span>{vid.tag}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group"
        >
          <div className="relative aspect-video max-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black">
            <video
              ref={videoRef}
              key={currentVideo.src}
              src={currentVideo.src}
              poster={currentVideo.poster}
              playsInline
              preload="metadata"
              muted={isMuted}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />

            {!isPlaying && (
              <div 
                onClick={handleTogglePlay}
                className="absolute inset-0 bg-jyothi-blue/40 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-jyothi-blue/30"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-jyothi-amber text-jyothi-blue flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 pl-1">
                  <Play size={36} fill="currentColor" />
                </div>
                <p className="mt-4 text-white font-bold text-sm md:text-base uppercase tracking-widest drop-shadow-md">
                  Click to Watch Drone Tour
                </p>
                <p className="text-gray-300 text-xs md:text-sm mt-1 max-w-md text-center px-4">
                  {currentVideo.subtitle}
                </p>
              </div>
            )}

            <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleTogglePlay}
                  className="w-10 h-10 rounded-xl bg-jyothi-amber text-jyothi-blue flex items-center justify-center hover:bg-jyothi-orange hover:text-white transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" className="pl-0.5" />}
                </button>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base font-heading drop-shadow-md">
                    {currentVideo.title}
                  </h4>
                  <p className="text-gray-400 text-xs hidden sm:block">
                    {currentVideo.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleMute}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button
                  onClick={handleFullscreen}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>

            <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 md:px-4 py-1.5 md:py-2 bg-jyothi-blue/80 backdrop-blur-md rounded-full border border-white/20 text-[10px] md:text-xs font-black uppercase tracking-widest text-jyothi-amber flex items-center gap-2">
              <ShieldCheck size={14} /> Official Site Footage
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DroneShowcase;
