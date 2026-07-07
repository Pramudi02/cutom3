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
      style={{
        background:
          'linear-gradient(145deg, color-mix(in srgb, var(--colorTextLight) 55%, white) 0%, var(--colorBg) 38%, color-mix(in srgb, var(--colorAccent) 14%, var(--colorBg)) 72%, color-mix(in srgb, var(--colorSecondary) 20%, var(--colorBg)) 100%)'
      }}
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
            transform: 'scale(1.05)',
            opacity: 0.6
          }}
        />
      )}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 12% 18%, color-mix(in srgb, var(--colorPrimary) 28%, transparent) 0%, transparent 26%), radial-gradient(circle at 88% 24%, color-mix(in srgb, var(--colorSecondary) 32%, transparent) 0%, transparent 28%), radial-gradient(circle at 50% 92%, color-mix(in srgb, var(--colorAccent) 24%, transparent) 0%, transparent 34%), linear-gradient(to bottom, rgba(255,255,255,0.16), rgba(255,255,255,0.02))'
        }}
      />
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
          background: 'linear-gradient(135deg, var(--colorPrimary), var(--colorSecondary), var(--colorAccent))',
          opacity: 0.2,
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))'
        }} 
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   LAYOUT 6 — Helper: Framed portrait with parents + name
───────────────────────────────────────────────────────── */
function HeroPersonCard({ person, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: 'easeOut' }}
      className="flex flex-col items-center"
    >
      <p className="font-serif italic text-sm md:text-base text-[var(--colorTextDark)] mb-1">{person.parents}</p>
      <h1 className="font-script text-[clamp(38px,8vw,60px)] leading-tight drop-shadow-sm mb-4" style={{ color: 'var(--colorPrimary)' }}>
        {person.name}
      </h1>
      <div className="w-56 md:w-64 aspect-[3/4] p-1.5 relative">
        <div className="absolute inset-0 rounded-t-[7rem] rounded-b-[1.5rem] border-[3px] border-dashed border-[var(--colorPrimary)] opacity-50 -z-10 scale-[1.05]" />
        <div className="w-full h-full overflow-hidden shadow-2xl relative rounded-t-[7rem] rounded-b-[1.2rem] bg-white p-2">
          <div className="absolute inset-0 rounded-t-[7rem] rounded-b-[1.2rem] border-[3px] border-[var(--colorPrimary)] pointer-events-none z-10" />
          <div className="absolute inset-[5px] rounded-t-[6.8rem] rounded-b-[1rem] border-[2px] border-dashed border-[var(--colorPrimary)] opacity-80 pointer-events-none z-10" />
          <div className="w-full h-full overflow-hidden relative rounded-t-[6.6rem] rounded-b-[0.8rem]">
            <Image src={person.image} alt={person.name} fill priority sizes="(max-width: 768px) 60vw, 30vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   LAYOUT 6 — Watercolor Floral (Garden Theme)
───────────────────────────────────────────────────────── */
function Layout6({ config, labels = {}, birthdayData = null, generalData = null }) {
  const { couple = {}, wedding = {}, events = {}, heroImage, heroCouple } = config;
  const [showOptions, setShowOptions] = useState(false);
  const names = resolveNames(config, birthdayData, generalData);
  const isReception = config?.slug === 'rajitha-sayuri-reception';

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
    <div
      className={`flex flex-col items-center w-full min-h-[70vh] justify-end pb-12 md:pb-24 pt-8 px-0 relative overflow-hidden ${isReception ? 'shadow-[inset_0_0_100px_rgba(228,145,30,0.1)]' : 'shadow-[0_30px_90px_rgba(221,31,85,0.14)]'}`}
      style={{
        background: isReception 
          ? 'linear-gradient(180deg, transparent 0%, transparent 20%, rgba(255,255,255,0.95) 50%, color-mix(in srgb, var(--colorPrimary) 8%, white) 100%)'
          : 'linear-gradient(180deg, transparent 0%, transparent 20%, rgba(255,255,255,0.95) 50%, color-mix(in srgb, var(--colorSecondary) 13%, white) 100%)'
      }}
    >
      {/* ── CUSTOM FLORAL CORNERS ── */}
      <SvgFloralCorner path="/images/flowers/top-left.svg" className="-top-12 -left-12 rotate-[-5deg]" delay={0} />
      <SvgFloralCorner path="/images/flowers/top-right.svg" className="-top-12 -right-12 rotate-[5deg]" delay={0.3} />
      <SvgFloralCorner path="/images/flowers/bottom-left.svg" className="-bottom-12 -left-12 rotate-[5deg]" delay={0.6} />
      <SvgFloralCorner path="/images/flowers/bottom-right.svg" className="-bottom-12 -right-12 rotate-[-5deg]" delay={0.9} />

      {/* ── COUPLE AREA (parents + names + individual portraits) ── */}
      {heroCouple && (
        <div className="w-full max-w-4xl px-6 text-center z-10 mt-4 mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="text-[var(--colorAccent)] text-lg">✧</span>
            <div className="h-0.5 w-8 md:w-12 bg-[var(--colorAccent)]" />
            <p className="font-sans text-[8px] md:text-[9px] tracking-[0.4em] uppercase font-bold" style={{ color: 'var(--colorPrimary)' }}>The Wedding Mass of</p>
            <div className="h-0.5 w-8 md:w-12 bg-[var(--colorAccent)]" />
            <span className="text-[var(--colorAccent)] text-lg">✧</span>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <HeroPersonCard person={heroCouple.groom} delay={0.3} />
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="font-script text-6xl md:text-7xl drop-shadow-sm"
              style={{ color: 'var(--colorPrimary)' }}
            >
              &
            </motion.span>
            <HeroPersonCard person={heroCouple.bride} delay={0.6} />
          </div>
        </div>
      )}

      {/* ── PHOTO AREA ── */}
      {!heroCouple && heroImage && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="mt-2 mb-8 w-full max-w-sm aspect-[3/4] p-1.5 relative"
        >
          <div className="absolute inset-0 rounded-t-[10rem] rounded-b-[2rem] border-[3px] border-dashed border-[var(--colorPrimary)] opacity-50 -z-10 scale-[1.05]" />
          <div className="w-full h-full overflow-hidden shadow-2xl relative group rounded-t-[10rem] rounded-b-[1.5rem] bg-white p-2">
            
            {/* Katayam (Ornate) Multi-layered Border Effect */}
            {/* Outer solid frame */}
            <div className="absolute inset-0 rounded-t-[10rem] rounded-b-[1.5rem] border-[3px] border-[var(--colorPrimary)] pointer-events-none z-10" />
            {/* Inner dashed intricate line */}
            <div className="absolute inset-[4px] rounded-t-[9.8rem] rounded-b-[1.2rem] border-[2px] border-dashed border-[var(--colorPrimary)] opacity-80 pointer-events-none z-10" />
            {/* Inner solid thin line */}
            <div className="absolute inset-[8px] rounded-t-[9.5rem] rounded-b-[1rem] border-[1px] border-[var(--colorPrimary)] pointer-events-none z-10" />
            {/* Innermost dotted filigree line */}
            <div className="absolute inset-[11px] rounded-t-[9.2rem] rounded-b-[0.8rem] border-[2px] border-dotted border-[var(--colorPrimary)] opacity-70 pointer-events-none z-10" />

            <div className="w-full h-full overflow-hidden relative rounded-t-[9.5rem] rounded-b-[1.2rem]">
              <Image src={heroImage || '/images/placeholder.png'} alt="Hero" fill priority sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} className="transition-transform duration-[3000ms] group-hover:scale-110" />
              <div className="absolute inset-0 mix-blend-overlay opacity-50 transition-opacity duration-1000 group-hover:opacity-70" style={{ background: 'linear-gradient(to top, var(--colorPrimary), transparent 48%, var(--colorAccent))' }} />
            </div>
          </div>
        </motion.div>
      )}

      {/* ── CONTENT AREA ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-center z-10 w-full max-w-2xl px-6"
      >


        {!heroCouple && (
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex items-center gap-3 mb-3 group">
            <span className="text-[var(--colorAccent)] text-lg">✧</span>
            <div className="h-0.5 w-8 md:w-12 transition-all group-hover:w-16 bg-[var(--colorAccent)]" />
            
            {names.showBoth
              ? <p className="font-sans text-[8px] md:text-[9px] tracking-[0.4em] uppercase font-bold" style={{ color: 'var(--colorPrimary)' }}>{isReception ? 'The Wedding Reception of' : 'The Wedding Mass of'}</p>
              : <p className="font-sans text-[8px] md:text-[9px] tracking-[0.4em] uppercase font-bold" style={{ color: 'var(--colorPrimary)' }}>You are invited</p>
            }
            
            <div className="h-0.5 w-8 md:w-12 transition-all group-hover:w-16 bg-[var(--colorAccent)]" />
            <span className="text-[var(--colorAccent)] text-lg">✧</span>
          </div>
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.6, ease: "easeOut", type: "spring", bounce: 0.2 }}
            className="font-script text-[clamp(50px,10vw,80px)] mb-1 leading-[0.7] drop-shadow-sm" 
            style={{ color: 'var(--colorPrimary)' }}
          >
            {names.name1}
          </motion.h1>
          {names.showBoth && (
            <>
              <div className="flex items-center gap-2 my-1">
                 <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--colorAccent)' }} />
                 <span className={`font-serif text-xl italic font-light lowercase ${isReception ? 'text-[var(--colorPrimary)]' : 'text-[var(--colorSecondary)]'}`}>and</span>
                 <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--colorAccent)' }} />
              </div>
              <motion.h1 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.6, ease: "easeOut", type: "spring", bounce: 0.2 }}
                className="font-script text-[clamp(50px,10vw,80px)] leading-[0.7] drop-shadow-sm" 
                style={{ color: 'var(--colorPrimary)' }}
              >
                {names.name2}
              </motion.h1>
            </>
          )}
        </div>
        )}

        {/* Elegant Garden Plaque with Calendar trigger */}
        <motion.div 
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
          className="relative inline-block group"
        >
          <div className="absolute inset-0 backdrop-blur-sm rounded-[50px_15px_50px_15px] shadow-[0_16px_34px_rgba(228,145,30,0.18)] -z-10 transition-colors duration-500" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.78), color-mix(in srgb, var(--colorTextLight) 30%, white))' }} />
          <div className="px-8 md:px-12 py-4 md:py-6 rounded-[50px_15px_50px_15px] relative">
            <p className="font-serif text-xl md:text-2xl text-[var(--colorTextDark)] tracking-wider mb-1">{wedding?.displayDate}</p>
            <div className="h-px w-12 mx-auto my-2" style={{ background: 'linear-gradient(to right, var(--colorPrimary), var(--colorSecondary), var(--colorAccent))' }} />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSaveToCalendar}
              className="px-4 py-1 rounded-full border font-sans text-[9px] tracking-[0.2em] uppercase font-black flex items-center gap-2 mx-auto transition-all shadow-sm"
              style={{
                borderColor: 'color-mix(in srgb, var(--colorPrimary) 35%, transparent)',
                color: 'var(--colorPrimary)',
                background: 'color-mix(in srgb, var(--colorTextLight) 22%, white)'
              }}
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
        </motion.div>
      </motion.div>
    </div>
  );
}
