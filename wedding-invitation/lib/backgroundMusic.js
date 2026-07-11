'use client';

/**
 * A single <audio> instance shared across route navigations.
 *
 * Next.js App Router does client-side navigation (no full page reload), so a
 * module-level Audio object keeps playing when the user moves from the opening
 * page into an invitation. This is what lets the song start on the "open invite"
 * button and carry over — without the browser blocking it as fresh autoplay.
 */

export const WEDDING_SONG = '/images/song.mp3';

let audio = null;

/** Create (once) and return the shared audio element, pointed at `src`. */
export function ensureBackgroundMusic(src = WEDDING_SONG) {
  if (typeof window === 'undefined') return null;
  if (!audio) {
    audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
  }
  if (src) {
    const resolved = new URL(src, window.location.href).href;
    if (audio.src !== resolved) audio.src = resolved;
  }
  return audio;
}

/** The shared audio element if it has been created, else null. */
export function getBackgroundMusic() {
  return audio;
}

/**
 * Start the shared track. Call this from a user gesture (e.g. the open-invite
 * button). Pass `{ muted: true }` to buffer/play silently under the gesture so
 * it can be unmuted later (on another page) without needing a new gesture.
 */
export function startBackgroundMusic(src = WEDDING_SONG, { muted = false } = {}) {
  const el = ensureBackgroundMusic(src);
  if (!el) return null;
  el.muted = muted;
  el.play().catch(() => {});
  return el;
}
