'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function resolveNames(config, birthdayData, generalData) {
  if (birthdayData?.celebrantName) {
    return { name1: birthdayData.celebrantName, name2: null, showBoth: false };
  }
  if (generalData?.eventTitle || generalData?.hostName) {
    return { name1: generalData.eventTitle || generalData.hostName, name2: null, showBoth: false };
  }
  return {
    name1: config?.couple?.groom?.firstName || 'Groom',
    name2: config?.couple?.bride?.firstName || 'Bride',
    showBoth: true,
  };
}

export default function Hero({ config, isOpened, labels = {}, birthdayData = null, generalData = null }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500"
      style={{ backgroundColor: 'var(--colorBg)' }}
    >
      {/* ── HERO VIDEO BACKGROUND ── */}
      {config.heroVideo && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
            preload="metadata"
            onError={(e) => {
              console.warn('Hero video failed to load:', e);
              e.target.style.display = 'none';
            }}
          >
            <source src={config.heroVideo} type="video/mp4" />
            <source src={config.heroVideo.replace('.mp4', '.webm')} type="video/webm" />
          </video>
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `linear-gradient(to bottom, ${config.theme?.heroOverlayStart || 'rgba(0,0,0,0.3)'}, ${config.theme?.heroOverlayEnd || 'rgba(0,0,0,0.1)'})`
            }}
          />
        </div>
      )}

      {/* ── BLURRED BACKGROUND LAYER (Fallback or secondary) ── */}
      {config.sectionBackgrounds?.hero && !config.heroVideo && (
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-1000 z-0"
          style={{
            backgroundImage: `url(${config.sectionBackgrounds.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)',
            transform: 'scale(1.05)',
            opacity: 0.6
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/10 z-[1] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: 'radial-gradient(circle at 50% 50%, var(--colorPrimary) 0%, transparent 60%)', opacity: 0.03 }} />
      <div className="relative z-10 w-full flex justify-center py-20 px-4">
        <Layout6 config={config} labels={labels} birthdayData={birthdayData} generalData={generalData} />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   LAYOUT 6 — Helper: Floral Corner decoration
───────────────────────────────────────────────────────── */
function SvgFloralCorner({ path, className, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay }}
      className={`absolute w-64 md:w-96 h-64 md:h-96 -z-10 pointer-events-none ${className}`}
    >
      <div 
        className="w-full h-full"
        style={{ 
          maskImage: `url('${path}')`,
          WebkitMaskImage: `url('${path}')`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          backgroundColor: 'var(--colorPrimary)',
          opacity: 0.15,
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
        }} 
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   LAYOUT 6 — Watercolor Floral (Garden Theme)
───────────────────────────────────────────────────────── */
function Layout6({ config, labels = {}, birthdayData = null, generalData = null }) {
  const { couple = {}, wedding = {}, events = {}, heroImage } = config;
  const [showOptions, setShowOptions] = useState(false);
  const names = resolveNames(config, birthdayData, generalData);

  const handleSaveToCalendar = () => {
    setShowOptions(!showOptions);
  };

  const generateGoogleUrl = () => {
    const start = wedding?.dateTimeISO?.replace(/[-:]/g, '').split('.')[0] + 'Z' || '';
    const end = start; // Same for simplicity or handle duration
    const title = encodeURIComponent(`Wedding of ${couple?.groom?.firstName} & ${couple?.bride?.firstName}`);
    const location = encodeURIComponent(events?.ceremony?.location || 'Wedding Venue');
    const details = encodeURIComponent('Looking forward to seeing you there!');
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}&sf=true&output=xml`;
  };

  const handleIcsDownload = () => {
    const start = wedding?.dateTimeISO?.replace(/[-:]/g, '').split('.')[0] + 'Z' || '';
    const title = `Wedding of ${couple?.groom?.firstName} & ${couple?.bride?.firstName}`;
    const location = events?.ceremony?.location || 'Wedding Venue';
    
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `DTSTART:${start}`,
      `DTEND:${start}`,
      `SUMMARY:${title}`,
      `LOCATION:${location}`,
      `DESCRIPTION:${labels.heroFamiliesIcal || 'Together with their families\\, invite you to their wedding.'}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'wedding-save-the-date.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-[70vh] justify-start pt-12 md:pt-20 pb-8 px-0 relative bg-white/40 overflow-hidden">
      {/* ── CUSTOM FLORAL CORNERS ── */}
      <SvgFloralCorner path="/images/flowers/top-left.svg" className="-top-12 -left-12 rotate-[-5deg]" delay={0} />
      <SvgFloralCorner path="/images/flowers/top-right.svg" className="-top-12 -right-12 rotate-[5deg]" delay={0.3} />
      <SvgFloralCorner path="/images/flowers/bottom-left.svg" className="-bottom-12 -left-12 rotate-[5deg]" delay={0.6} />
      <SvgFloralCorner path="/images/flowers/bottom-right.svg" className="-bottom-12 -right-12 rotate-[-5deg]" delay={0.9} />

      {/* ── CONTENT AREA ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-center z-10 w-full max-w-2xl px-6"
      >
        {/* Decorative Bow */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-6"
        >
          <img
            src="/images/bow.webp"
            alt="Decorative Bow"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto drop-shadow-md"
          />
        </motion.div>

        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex items-center gap-3 mb-3 group">
            <div className="h-px w-5 md:w-10 bg-[var(--colorPrimary)]/20 transition-all group-hover:w-14" />
            {names.showBoth
              ? <p className="font-sans text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-[var(--colorTextDark)]/60 font-bold">The Wedding of</p>
              : <p className="font-sans text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-[var(--colorTextDark)]/60 font-bold">You are invited</p>
            }
          </div>
          <h1 className="font-script text-[clamp(50px,10vw,80px)] text-[var(--colorPrimary)] mb-1 leading-[0.7]">
            {names.name1}
          </h1>
          {names.showBoth && (
            <>
              <div className="flex items-center gap-2 my-1">
                 <div className="w-1 h-1 rounded-full border border-[var(--colorSecondary)]/30" />
                 <span className="font-serif text-xl text-[var(--colorSecondary)]/40 italic font-light lowercase">and</span>
                 <div className="w-1 h-1 rounded-full border border-[var(--colorSecondary)]/30" />
              </div>
              <h1 className="font-script text-[clamp(50px,10vw,80px)] text-[var(--colorPrimary)] leading-[0.7]">
                {names.name2}
              </h1>
            </>
          )}
        </div>

        {/* Elegant Garden Plaque with Calendar trigger */}
        <div className="relative inline-block group">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[50px_15px_50px_15px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] -z-10 group-hover:bg-white/60 transition-colors duration-500" />
          <div className="px-8 md:px-12 py-4 md:py-6 border border-[var(--colorPrimary)]/10 rounded-[50px_15px_50px_15px] relative">
            <p className="font-serif text-xl md:text-2xl text-[var(--colorTextDark)] tracking-wider mb-1">{wedding?.displayDate}</p>
            <div className="h-px w-8 bg-[var(--colorPrimary)]/30 mx-auto my-2" />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSaveToCalendar}
              className="px-4 py-1 rounded-full border border-[var(--colorPrimary)]/20 font-sans text-[9px] tracking-[0.2em] uppercase text-[var(--colorPrimary)] font-black flex items-center gap-2 mx-auto hover:bg-[var(--colorPrimary)]/5 transition-all"
            >
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              Save the Date
            </motion.button>

            {/* Options Overlay */}
            <AnimatePresence>
              {showOptions && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 5 }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-[110%] mb-2 bg-white/95 backdrop-blur-md border border-[var(--colorPrimary)]/10 rounded-2xl p-2 flex items-center gap-2 shadow-xl z-20 whitespace-nowrap"
                >
                  <a 
                    href={generateGoogleUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest text-[var(--colorPrimary)] hover:bg-[var(--colorPrimary)]/5 flex items-center gap-2"
                  >
                    Google
                  </a>
                  <div className="w-px h-4 bg-gray-200" />
                  <button 
                    onClick={handleIcsDownload}
                    className="px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest text-[var(--colorTextDark)]/70 hover:bg-black/5 flex items-center gap-2"
                  >
                    Apple / Outlook
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Corner Decorative Dots */}
            <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-[var(--colorPrimary)]/20" />
            <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-[var(--colorPrimary)]/20" />
          </div>
        </div>
      </motion.div>

      {/* ── PHOTO AREA ── */}
      {heroImage && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-2 w-full max-w-sm aspect-[3/4] p-3 relative"
        >
          <div className="absolute inset-0 border border-[var(--colorPrimary)]/10 rounded-[3rem] scale-[1.02] -z-10" />
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] border-[6px] border-white relative group">
            <Image src={heroImage || '/images/placeholder.png'} alt="Hero" fill style={{ objectFit: 'cover' }} className="transition-transform duration-[3000ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--colorPrimary)]/20 to-transparent mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
