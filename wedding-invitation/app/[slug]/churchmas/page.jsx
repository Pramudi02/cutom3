'use client';
import { hardcodedConfig } from '@/lib/hardcodedConfig';
import ClientHome from '@/app/ClientHome';

export default function ChurchMassPage() {
  return <ClientHome config={{ ...hardcodedConfig, audioUrl: '/images/song.mp3', skipReveal: true, openingPageUrl: '/rajitha-sayuri' }} />;
}
