'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('opacity-100', '!translate-y-0'); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ── LAYOUT 6 — Watercolor Floral Story ──
function Layout6({ config, ref1, ref2, labels = {} }) {
  const { story } = config;
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <div ref={ref1} className="opacity-0 translate-y-8 transition-all duration-1000 mb-16">
        <span className="text-4xl mb-4 block">🌸</span>
        <h2 className="font-script text-6xl text-[var(--colorPrimary)] mb-2">{labels.storyHeading6 || 'Our Love Story'}</h2>
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--colorPrimary)]/20" />
          <div className="w-2 h-2 rounded-full bg-[var(--colorPrimary)]/40" />
          <div className="w-2 h-2 rounded-full bg-[var(--colorPrimary)]/60" />
        </div>
      </div>
      <div className="bg-white/40 backdrop-blur-sm p-10 md:p-16 rounded-[100px_20px_100px_20px] border border-[var(--colorPrimary)]/10 shadow-xl relative overflow-hidden">
        <div ref={ref2} className="opacity-0 translate-y-8 transition-all duration-1000 delay-300">
          <p className="font-serif text-2xl md:text-3xl text-[var(--colorTextDark)] mb-10 italic">
            {story?.invitationText || ''}
          </p>
          <div className="space-y-8 text-center max-w-2xl mx-auto">
            {(story?.paragraphs || []).map((p, i) => (
               <p key={i} className="font-sans text-sm md:text-base text-[var(--colorTextDark)]/70 leading-relaxed tracking-wide">
                  {p}
               </p>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">🌿</div>
        <div className="absolute bottom-0 left-0 p-8 opacity-10">🍃</div>
      </div>
    </div>
  );
}

export default function StorySection({ config, labels = {} }) {
  const ref1 = useReveal();
  const ref2 = useReveal();

  // Hide the entire section when no story content has been entered
  const hasStory =
    config?.story?.invitationText?.trim() ||
    (Array.isArray(config?.story?.paragraphs) && config.story.paragraphs.some(p => p?.trim()));
  if (!hasStory) return null;

  // The background color is handled globally by var(--colorBg)
  return (
    <section
      id="story"
      className="overflow-hidden transition-colors duration-500 relative"
      style={{ backgroundColor: 'var(--colorBg)' }}
    >
      {/* ── SECTION BACKGROUND IMAGE ── */}
      {config.sectionBackgrounds?.story && (
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-1000 z-0"
          style={{
            backgroundImage: `url(${config.sectionBackgrounds.story})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)',
            transform: 'scale(1.02)',
            opacity: 0.85
          }}
        />
      )}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-white/5" />
      <Layout6 config={config} ref1={ref1} ref2={ref2} labels={labels} />
    </section>
  );
}
