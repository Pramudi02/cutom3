'use client';
import { useEffect, useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';

function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('opacity-100', '!translate-y-0'), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

const PlaneIcon = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>);
const CalendarIcon = () => (<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>);

// ── Helper: merge base events + extraEvents into a flat array ──
function getAllEvents(config) {
  return [
    ...Object.values(config?.events || {}),
    ...(config?.extraEvents || [])
  ];
}

function ActionButtons({ event, config }) {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`${config?.couple?.displayNames || 'Wedding'}'s ${event?.title || 'Event'}`);
    const details = encodeURIComponent(`We would love to see you at our ${event?.title || 'Event'}! \n\nVenue: ${event?.venueName || ''}\nAddress: ${event?.address || ''}`);
    const location = encodeURIComponent(event?.address || event?.venueName || '');

    // Extract dates from config
    const dateStr = config?.wedding?.dateTimeISO || ''; // e.g. 2026-12-19T10:00:00
    const start = dateStr.replace(/[-:]/g, '').split('.')[0] || '';
    const end = start; // Same day usually

    const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;
    window.open(googleUrl, '_blank');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full mt-6">
      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[var(--colorTextDark)] text-[var(--colorBg)] font-sans text-[10px] font-bold tracking-widest uppercase hover:bg-[var(--colorPrimary)] transition-all duration-300 rounded-lg shadow-md"
      >
        <PlaneIcon /> Google Maps
      </a>
      <button
        onClick={handleAddToCalendar}
        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-[var(--colorTextDark)] text-[var(--colorTextDark)] font-sans text-[10px] font-bold tracking-widest uppercase hover:text-[var(--colorPrimary)] hover:border-[var(--colorPrimary)] transition-all duration-300 rounded-lg"
      >
        <CalendarIcon /> Add to Calendar
      </button>
    </div>
  );
}

// ── LAYOUT 6 — Watercolor Floral Events ──
function EventCard6({ event, delay, config }) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 bg-white/40 p-8 rounded-[60px_20px_60px_20px] border border-[var(--colorPrimary)]/10 text-center shadow-lg relative overflow-hidden group">
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-[var(--colorPrimary)]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      <span className="text-3xl mb-4 block">💮</span>
      <h3 className="font-script text-4xl text-[var(--colorPrimary)] mb-2">{event.title}</h3>
      <p className="font-sans text-[10px] tracking-widest uppercase font-bold text-[var(--colorTextDark)]/60 mb-6">{event.time}</p>
      <div className="space-y-2 mb-8">
        <p className="font-serif text-lg text-[var(--colorTextDark)]">{event.venueName}</p>
        <p className="font-sans text-[10px] uppercase text-[var(--colorTextDark)]/40 tracking-widest">{event.address}</p>
      </div>
      <ActionButtons event={event} config={config} />
    </div>
  );
}

function Layout6({ config, labels = {} }) {
  const allEvents = getAllEvents(config);
  return (
    <div className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">
      <div className="mb-16">
        <span className="text-2xl mb-4 block opacity-40">❦</span>
        <h2 className="font-serif text-5xl text-[var(--colorTextDark)] mb-2 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">The Celebration</h2>
        <p className="font-script text-3xl text-[var(--colorPrimary)] opacity-90 drop-shadow-sm">{labels.eventDetailsSubtitle || 'Lovely moments together'}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {allEvents.map((event, idx) => (
          <div key={idx} className="w-full max-w-sm">
            <EventCard6 event={event} delay={idx * 150} config={config} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EventDetails({ config, labels = {} }) {
  return (
    <section
      id="events"
      className="overflow-hidden transition-colors duration-500 relative"
      style={{ backgroundColor: 'var(--colorBg)' }}
    >
      {/* ── SECTION BACKGROUND IMAGE ── */}
      {config.sectionBackgrounds?.events && (
        <div
          className="absolute inset-x-0 inset-y-0 pointer-events-none transition-transform duration-1000 z-0"
          style={{
            backgroundImage: `url(${config.sectionBackgrounds.events})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(1px)',
            transform: 'scale(1.02)',
            opacity: 0.85
          }}
        />
      )}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-white/5" />
      <Layout6 config={config} labels={labels} />
    </section>
  );
}
