'use client';
import { useState, useEffect, useRef, useSyncExternalStore, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Envelope from './components/Envelope';
import CoupleReveal from './components/CoupleReveal';
import CoverReveal from './components/CoverReveal';
import FadeReveal from './components/FadeReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import PremiumEnvelope from './components/PremiumEnvelope';
import RoyalEnvelope from './components/RoyalEnvelope';
import MintEnvelope from './components/MintEnvelope';
import ElegantPhotoEnvelope from './components/ElegantPhotoEnvelope';
import UniversalPreloader from './components/UniversalPreloader';

// Lazy load heavy components that are below the fold
const StorySection = lazy(() => import('./components/StorySection'));
const Gallery = lazy(() => import('./components/Gallery'));
const EventDetails = lazy(() => import('./components/EventDetails'));
const RSVPSection = lazy(() => import('./components/RSVPSection'));
const Timeline = lazy(() => import('./components/Timeline'));
const Footer = lazy(() => import('./components/Footer'));
const LayoutEight = lazy(() => import('./components/LayoutEight'));
const LayoutTen = lazy(() => import('./components/LayoutTen'));
const LayoutEleven = lazy(() => import('./components/LayoutEleven'));
const FallingPetals = lazy(() => import('./components/FallingPetals'));

import { PRESET_THEMES } from '../lib/themes';
import { getLabels } from '../lib/eventLabels';
import { ensureBackgroundMusic, getBackgroundMusic } from '../lib/backgroundMusic';

function ImageOnlySections({ images = [] }) {
  return images.map((image, index) => (
    <section key={image.src || index} className="relative w-full bg-[var(--colorBg)] overflow-hidden">
      <img
        src={image.src}
        alt={image.alt || ''}
        className="block w-full h-auto object-contain"
        loading={index === 0 ? 'eager' : 'lazy'}
      />
      {(image.textLines || image.colors) && (
        <div className="absolute inset-0 pt-6 md:pt-8 px-6 flex flex-col items-center justify-start text-center gap-3 md:gap-4" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 30%, transparent 60%)' }}>
          {image.textLines && image.textLines.map((line, i) => (
            <p key={i} className={i === 0 ? 'font-serif text-2xl md:text-4xl font-bold text-[var(--colorPrimary)] drop-shadow-md' : 'font-sans text-xs md:text-sm text-gray-900 font-semibold max-w-md drop-shadow-sm leading-relaxed'}>
              {line}
            </p>
          ))}
          {image.colors && (
            <div className="flex justify-center gap-2 md:gap-3">
              {image.colors.map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md border-2 border-white transform transition-transform hover:scale-110"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
          {image.colorsNote && (
            <p className="font-sans text-xs md:text-sm text-gray-900 font-semibold max-w-md drop-shadow-sm leading-relaxed">
              {image.colorsNote}
            </p>
          )}
        </div>
      )}
    </section>
  ));
}

export default function ClientHome({ config }) {
  const interactionHandledRef = useRef(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [hasOpened, setHasOpened] = useState(Boolean(config.skipReveal));

  // Use useSyncExternalStore for robust hydration handling
  const mounted = useSyncExternalStore(() => () => {}, () => true, () => false);

  // Adopt the shared background track (started on the opening page's "open
  // invite" button). If it's already playing, unmuting needs no new gesture,
  // so the song is audible the instant this invitation appears.
  useEffect(() => {
    if (!config.audioUrl) return;
    const el = ensureBackgroundMusic(config.audioUrl);
    if (!el) return;

    el.muted = false;
    el.play()
      .then(() => {
        interactionHandledRef.current = true;
        setAudioPlaying(true);
      })
      .catch(() => {
        // Opened directly with no prior user gesture: buffer silently and let
        // the first interaction unmute it.
        el.muted = true;
        el.play().catch(() => {});
        setAudioPlaying(false);
      });
  }, [config.audioUrl]);

  // Fallback: unmute on the first interaction if autoplay-with-sound was blocked.
  useEffect(() => {
    if (!config.audioUrl) return;

    const startAudio = () => {
      if (interactionHandledRef.current) return;
      const el = getBackgroundMusic() || ensureBackgroundMusic(config.audioUrl);
      if (!el) return;
      interactionHandledRef.current = true;

      el.muted = false;
      el.play().catch(() => {});
      setAudioPlaying(true);

      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('keydown', startAudio);
    };

    window.addEventListener('click', startAudio, { passive: true });
    window.addEventListener('touchstart', startAudio, { passive: true });
    window.addEventListener('scroll', startAudio, { passive: true });
    window.addEventListener('keydown', startAudio);

    return () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('keydown', startAudio);
    };
  }, [config.audioUrl]);

  // Play audio after user opens invitation (envelope reveal styles)
  const handleOpen = () => {
    setHasOpened(true);
    interactionHandledRef.current = true;
    if (config.audioUrl) {
      const el = ensureBackgroundMusic(config.audioUrl);
      if (el) {
        el.muted = false;
        el.play().catch(() => {});
        setAudioPlaying(true);
      }
    }
  };

  const toggleAudio = () => {
    const el = getBackgroundMusic() || ensureBackgroundMusic(config.audioUrl);
    if (!el) return;

    // Explicit toggle logic ensures manual interaction takes precedence
    interactionHandledRef.current = true;

    if (audioPlaying) {
      el.pause();
      setAudioPlaying(false);
    } else {
      el.muted = false;
      el.play().catch(() => {});
      setAudioPlaying(true);
    }
  };

  const revealStyle = config.revealStyle || 'envelope';
  const themeId = config.themeId || config.theme || 'gold';
  const baseLabels = getLabels(config.eventType);
  const labels = config.labelOverrides
    ? { ...baseLabels, ...Object.fromEntries(Object.entries(config.labelOverrides).filter(([, v]) => v)) }
    : baseLabels;
  const birthdayData = config.birthdayData || null;
  const generalData = config.generalData || null;

  // Safe theme color resolution
  const resolvedColors = PRESET_THEMES.find(t => t.id === themeId)?.colors || config.theme || PRESET_THEMES[0].colors;
  const theme = {
    colorPrimary: resolvedColors?.colorPrimary || '#C9956A',
    colorSecondary: resolvedColors?.colorSecondary || '#E8D5B7',
    colorTextLight: resolvedColors?.colorTextLight || '#8A7F6A',
    colorTextDark: resolvedColors?.colorTextDark || '#2C2018',
    colorBg: resolvedColors?.colorBg || '#FAF7F2',
    colorSurface: resolvedColors?.colorSurface || '#FFFFFF',
    colorAccent: resolvedColors?.colorAccent || resolvedColors?.colorSecondary || '#E4911E',
    heroOverlayStart: resolvedColors?.heroOverlayStart || 'rgba(18, 12, 6, 0.55)',
    heroOverlayEnd: resolvedColors?.heroOverlayEnd || 'rgba(18, 12, 6, 0.25)',
  };

  if (!mounted) return null;

  const themeStyles = `
    :root {
      --colorPrimary: ${theme.colorPrimary};
      --colorSecondary: ${theme.colorSecondary};
      --colorTextLight: ${theme.colorTextLight};
      --colorTextDark: ${theme.colorTextDark};
      --colorBg: ${theme.colorBg};
      --colorSurface: ${theme.colorSurface};
      --colorAccent: ${theme.colorAccent};
      --heroOverlayStart: ${theme.heroOverlayStart};
      --heroOverlayEnd: ${theme.heroOverlayEnd};
    }
  `;

  // Loading fallback for lazy components
  const LoadingFallback = () => (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[var(--colorPrimary)] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const mainContent = (
    <main className={`min-h-screen theme-${themeId} ${!hasOpened ? 'h-screen overflow-hidden' : 'bg-[var(--colorBg)] text-[var(--colorTextDark)]'}`}>
      {config.heroLayout === 8 ? (
        <Suspense fallback={<LoadingFallback />}>
          <LayoutEight config={config} labels={labels} birthdayData={birthdayData} generalData={generalData} />
        </Suspense>
      ) : config.heroLayout === 10 ? (
        <Suspense fallback={<LoadingFallback />}>
          <LayoutTen config={config} labels={labels} birthdayData={birthdayData} generalData={generalData} />
        </Suspense>
      ) : config.heroLayout === 11 ? (
        <Suspense fallback={<LoadingFallback />}>
          <LayoutEleven config={config} labels={labels} birthdayData={birthdayData} generalData={generalData} />
        </Suspense>
      ) : (
        <>
          <Navbar config={config} birthdayData={birthdayData} generalData={generalData} closeHref={config.skipReveal ? (config.openingPageUrl || '/rajitha-sayuri') : null} />
          <Hero config={config} isOpened={hasOpened} labels={labels} birthdayData={birthdayData} generalData={generalData} />
          <Countdown config={config} labels={labels} />
          <Suspense fallback={<LoadingFallback />}>
            <StorySection config={config} labels={labels} />
          </Suspense>
          {config?.gallery && config.gallery.length > 0 && (
            <Suspense fallback={<LoadingFallback />}>
              <Gallery config={config} />
            </Suspense>
          )}
          <Suspense fallback={<LoadingFallback />}>
            <Timeline config={config} labels={labels} />
          </Suspense>
          {(config?.preEventImages?.length > 0 || config?.afterCountdownImages?.length > 0) && (
            <ImageOnlySections images={config.preEventImages || config.afterCountdownImages} />
          )}
          <Suspense fallback={<LoadingFallback />}>
            <EventDetails config={config} labels={labels} />
          </Suspense>
          {config?.postEventImages?.length > 0 && (
            <ImageOnlySections images={config.postEventImages} />
          )}
          <Suspense fallback={<LoadingFallback />}>
            <RSVPSection config={config} labels={labels} />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Footer config={config} birthdayData={birthdayData} generalData={generalData} />
          </Suspense>
        </>
      )}
    </main>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
      <UniversalPreloader config={config} onReveal={handleOpen}>
        <AnimatePresence mode="wait">
          {!hasOpened && (
            revealStyle === 'cover' ? (
              <CoverReveal key="cover-reveal" config={config} onOpen={handleOpen} labels={labels} birthdayData={birthdayData} generalData={generalData} />
            ) : (revealStyle === 'couple' || revealStyle === 'couple_rose') ? (
              <CoupleReveal key="couple-reveal" config={config} onOpen={handleOpen} labels={labels} birthdayData={birthdayData} generalData={generalData} />
            ) : revealStyle === 'fade' ? (
              <FadeReveal key="fade-reveal" config={config} onOpen={handleOpen} />
            ) : (revealStyle === 'premium-envelope' || revealStyle === 'premium_envelope') ? (
              <div key="premium-envelope-placeholder" /> // Handled by UniversalPreloader wrapper
            ) : (revealStyle === 'royal-envelope' || revealStyle === 'royal_envelope') ? (
              <RoyalEnvelope key="royal-envelope" config={config} onOpen={handleOpen} birthdayData={birthdayData} generalData={generalData} />
            ) : (revealStyle === 'mint-envelope' || revealStyle === 'mint_envelope') ? (
              <MintEnvelope key="mint-envelope" config={config} onOpenInvitation={handleOpen} />
            ) : (revealStyle === 'elegant-photo' || revealStyle === 'elegant_photo') ? (
              <ElegantPhotoEnvelope key="elegant-photo-envelope" config={config} onOpenInvitation={handleOpen} onOpenReception={handleOpen} />
            ) : (
              <Envelope key="envelope-layer" config={config} onOpen={handleOpen} labels={labels} birthdayData={birthdayData} generalData={generalData} />
            )
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hasOpened ? 1 : 0 }}
          transition={{ duration: 1 }}
          className={!hasOpened ? "opacity-0 pointer-events-none fixed inset-0 z-[-1]" : ""}
        >
        {mainContent}

        {/* Floating audio toggle */}
        {config.audioUrl && (
          <button
            onClick={toggleAudio}
            className="fixed bottom-8 right-8 z-[9999] bg-white/90 backdrop-blur-md rounded-full p-4 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-[var(--colorPrimary)]/20"
            aria-label={audioPlaying ? 'Pause background music' : 'Play background music'}
          >
            {audioPlaying ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--colorPrimary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--colorTextDark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
                <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
              </svg>
            )}
          </button>
        )}
      </motion.div>
      </UniversalPreloader>
      
      {/* Falling petals - separated from motion.div to prevent animation conflicts */}
      {config.fallingPetals && hasOpened && (
        <Suspense fallback={null}>
          <FallingPetals color={theme.colorPrimary} imageSrc={config.fallingPetalsImage} />
        </Suspense>
      )}
    </>
  );
}
