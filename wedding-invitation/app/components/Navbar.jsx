'use client';
import { useState, useEffect, useRef } from 'react';

export default function Navbar({ config, birthdayData = null, generalData = null, closeHref = null }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef(null);

  const displayName = birthdayData?.celebrantName
    || generalData?.eventTitle
    || generalData?.hostName
    || config?.couple?.displayNames
    || '';

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: [1.0], rootMargin: '-60px 0px 0px 0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const links = [];

  const closeMenu = () => setMenuOpen(false);

  const layout = config?.heroLayout ?? 1;
  const isLayout9 = false;

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-px pointer-events-none z-[-1]" />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
          px-6 md:px-12 transition-all duration-300
          ${scrolled
            ? (isLayout9 ? 'py-3 bg-slate-900/95 shadow-xl border-b border-white/5' : 'py-3 bg-[var(--colorBg)] shadow-sm')
            : 'py-5 bg-transparent'
          }`}
      >
        {/* Logo / Names */}
        <span
          className={`font-script text-2xl tracking-wide transition-colors duration-300
            ${scrolled 
              ? (isLayout9 ? 'text-white' : 'text-[var(--colorPrimary)]') 
              : (isLayout9 ? 'text-white' : 'text-[var(--colorTextDark)]')}`}
        >
          {displayName}
        </span>

        {/* Nav links + Close */}
        <ul className="flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-sans text-xs font-semibold tracking-[0.15em] uppercase
                  relative group transition-colors duration-300
                  ${isLayout9 ? 'text-white/70 hover:text-white' : 'text-[var(--colorTextDark)]/70 hover:text-[var(--colorPrimary)]'}`}
              >
                {l.label}
                <span className={`absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${isLayout9 ? 'bg-white' : 'bg-[var(--colorPrimary)]'}`} />
              </a>
            </li>
          ))}
          {closeHref && (
            <li>
              <a
                href={closeHref}
                className={`font-sans text-xs font-semibold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full border transition-colors duration-300
                  ${isLayout9
                    ? 'border-white/30 text-white/70 hover:text-white hover:border-white'
                    : 'border-[var(--colorPrimary)]/25 text-[var(--colorTextDark)]/70 hover:text-[var(--colorPrimary)] hover:border-[var(--colorPrimary)]'}`}
              >
                Close
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
