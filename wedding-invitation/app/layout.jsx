import { Playfair_Display, Montserrat, Alex_Brush, Noto_Sans_Sinhala } from 'next/font/google';
import './globals.css';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import { hardcodedConfig } from '@/lib/hardcodedConfig';

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ['sinhala'],
  variable: '--font-sinhala',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export async function generateMetadata() {
  try {
    const config = hardcodedConfig;
    const title = config.meta?.title || 'Wedding Invitation';
    const description = config.meta?.description || 'You are invited!';
    const ogImage = config.sharePreviewImageUrl || '';

    return {
      metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
      title,
      description,
      openGraph: {
        title,
        description,
        images: ogImage ? [ogImage] : [],
      },
      icons: {
        icon: [
          { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
          { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
          { url: '/favicon.ico' },
        ],
        apple: [
          { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '192x192',
            url: '/android-chrome-192x192.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '512x512',
            url: '/android-chrome-512x512.png',
          },
        ],
      },
      manifest: '/site.webmanifest',
    };
  } catch {
    return { title: 'Wedding Invitation' };
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${alexBrush.variable} ${playfair.variable} ${montserrat.variable} ${notoSinhala.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden" suppressHydrationWarning>
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
