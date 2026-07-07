'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ElegantPhotoEnvelope({ config, onOpenInvitation, onOpenReception }) {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const router = useRouter();

  const couple = config.couple || {};
  const bride = couple.bride || {};
  const groom = couple.groom || {};

  // Get names from config
  const brideName = bride.fullName || bride.firstName || 'Bride';
  const groomName = groom.fullName || groom.firstName || 'Groom';

  const handleChurchMassClick = () => {
    router.push('/rajitha-sayuri/churchmas');
  };

  const handleReceptionClick = () => {
    setPlayVideo(true);
  };

  const handleVideoEnded = () => {
    router.push('/rajitha-sayuri/reception');
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] w-screen h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Outer Container with White Border */}
      <div className="w-full h-full md:w-11/12 md:h-11/12 md:max-w-2xl md:aspect-[9/16] lg:max-w-3xl relative border-2 md:border-8 border-white/80 shadow-2xl overflow-hidden">

        {/* Full Height Image Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/opening.jpeg"
            alt="Wedding Invitation"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for bottom half text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
        </div>

        {/* Content Container - Bottom Aligned Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-24 md:pb-12 px-8 md:px-12 z-10"
        >
          {/* Couple Names */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center -mt-1"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light tracking-widest text-white leading-tight">
              {brideName}
              <br />
              <span className="font-thin text-xl md:text-3xl lg:text-4xl mx-1">&</span>
              <br />
              {groomName}
            </h1>
          </motion.div>

          {/* Invitation Text */}
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-xs md:text-sm lg:text-base font-light tracking-widest text-white/90 uppercase mt-0.5"
          >
            Invite You To Celebrate Their Wedding
          </motion.p>

          {/* Buttons Container */}
          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-3 w-full max-w-sm mt-3"
          >
            {/* Church Mass Button */}
            <button
              onClick={handleChurchMassClick}
              onMouseEnter={() => setHoveredButton('church')}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98, y: 2 }}
                className="px-8 py-3 md:py-4 bg-[#839950] text-white font-semibold text-sm md:text-base rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_20px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer relative"
              >
                <span className="relative z-10">Church Mass</span>
                {/* Inner highlight */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
              </motion.div>
            </button>

            {/* Reception Button */}
            <button
              onClick={handleReceptionClick}
              onMouseEnter={() => setHoveredButton('reception')}
              onMouseLeave={() => setHoveredButton(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98, y: 2 }}
                className="px-8 py-3 md:py-4 bg-[#839950] text-white font-semibold text-sm md:text-base rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.3),inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_20px_rgba(0,0,0,0.4),inset_0_-2px_4px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer relative"
              >
                <span className="relative z-10">Reception</span>
                {/* Inner highlight */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {playVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          >
            <video
              src="/reception-video-new.mp4"
              autoPlay
              playsInline
              onEnded={handleVideoEnded}
              onError={handleVideoEnded}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <button 
              onClick={handleVideoEnded}
              className="absolute top-8 right-8 z-[10001] bg-white/20 hover:bg-white/40 text-white rounded-full px-6 py-2 backdrop-blur-sm transition-all border border-white/30 text-sm font-medium tracking-wider uppercase"
            >
              Skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
