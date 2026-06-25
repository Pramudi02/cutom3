'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Gallery({ config }) {
  const gallery = config?.gallery || [];

  if (!gallery || gallery.length === 0) {
    return null;
  }

  const headerRef = useRef(null);

  const currentLayout = config?.heroLayout || 1;
  const layoutSettings = config?.layoutSettings?.[`layout_${currentLayout}`] || {};

  // Allow empty strings to hide text. Only fallback to defaults if strictly undefined.
  const titleText = layoutSettings.galleryTitle !== undefined ? layoutSettings.galleryTitle : "Captured Moments";
  const subtitleText = layoutSettings.gallerySubtitle !== undefined ? layoutSettings.gallerySubtitle : "A glimpse into our beautiful journey";

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('opacity-100', '!translate-y-0'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 transition-colors duration-500 relative overflow-hidden"
      style={{ backgroundColor: 'var(--colorBg)' }}
    >
      {/* ── SECTION BACKGROUND IMAGE ── */}
      {config.sectionBackgrounds?.gallery && (
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-1000 z-0"
          style={{
            backgroundImage: `url(${config.sectionBackgrounds.gallery})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)',
            transform: 'scale(1.02)',
            opacity: 0.85
          }}
        />
      )}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-white/5" />
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-700">
          <div className="relative inline-block">
            <span className="text-4xl absolute -top-10 -right-10 opacity-30">🌸</span>
            {titleText && <h2 className="font-script text-6xl md:text-8xl text-[var(--colorPrimary)] mb-2">{titleText}</h2>}
            {subtitleText && <p className="font-sans text-[10px] tracking-[0.5em] uppercase opacity-40">{subtitleText}</p>}
          </div>
        </div>
      </div>

      {/* Layout 6: Circular Floral Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-6 max-w-6xl mx-auto justify-items-center">
        {gallery.map((photo, idx) => (
          <div
            key={idx}
            className="group relative cursor-default focus:outline-none rounded-full overflow-hidden aspect-square shadow-2xl transition-all duration-700 hover:scale-105 border-4 border-white/30"
          >
            <Image src={photo.src} alt={photo.alt} width={800} height={800} loading="lazy" className="w-full h-full object-cover object-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 ring-inset ring-1 ring-white/40 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
