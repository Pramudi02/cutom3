export const receptionConfig = {
  slug: 'rajitha-sayuri-reception',
  couple: {
    bride: { firstName: 'Sayuri', lastName: 'Maheesha Divyanjalee', fullName: 'SAYURI MAHEESHA DIVYANJALEE' },
    groom: { firstName: 'Rajitha', lastName: 'Nethmal', fullName: 'RAJITHA NETHMAL' },
    displayNames: 'Rajitha & Sayuri',
    tagline: 'Together Forever'
  },
  wedding: {
    dateTimeISO: '2026-08-29T11:30:00.000Z',
    displayDate: 'August 29, 2026',
    year: '2026'
  },
  story: null,
  events: {
    ceremony: {
      title: 'Reception',
      icon: '🎉',
      time: '05:00 PM',
      venueName: "Eagles' Lagoon View Banquet Hall",
      address: 'Bollywood style',
      mapsUrl: 'https://maps.app.goo.gl/8UkqtFP3iZ6gCQfV6',
      dressCode: 'Festive'
    }
  },
  extraEvents: [],
  audioUrl: '',
  heroImage: '/images/2ndInvitation/hero-new.png',
  heroVideo: '',
  heroLayout: 6,
  preEventImages: [
    {
      src: '/images/2ndInvitation/events.jpeg',
      alt: 'Reception event details'
    }
  ],
  postEventImages: [
    {
      src: '/images/2ndInvitation/dress.jpeg',
      alt: 'Reception dress details',
      textLines: [
        'Dress code: Bollywood Style!',
        'මෙය ඔබ මෙතෙක් අත්නොවිඳි ආකාරයේ විනෝදබර සාදයක් වනු ඇත. එබැවින් අධික බරැති ඇඳුම් වෙනුවට, බොලිවුඩ් විලාසිතාවන්ට ගැළපෙන, සැහැල්ලු මෙන්ම පහසු ඇඳුමකින් සැරසී අප හා එක්වන්න!'
      ],
      colors: ['#DD1F55', '#EB7D3D', '#E4911E', '#9C9851', '#E4C7A5']
    }
  ],
  revealStyle: 'elegant-photo',
  theme: {
    colorPrimary: '#D41065', // Vibrant Pink
    colorSecondary: '#F47E17', // Bright Orange
    colorAccent: '#DC9F18', // Mustard Yellow
    colorTextLight: '#E8D4B4', // Soft complementing tone
    colorTextDark: '#839950', // Olive Green
    colorBg: '#FFFCF8',
    colorSurface: '#FFFFFF',
    heroOverlayStart: 'rgba(212, 16, 101, 0.4)', // Pink overlay
    heroOverlayEnd: 'rgba(131, 153, 80, 0.6)' // Olive green overlay
  },
  rsvp: {
    whatsappNumber: '766155777',
    deadline: 'July 20, 2026',
    maxGuests: 2,
    dietaryTitle: null,
    dietaryItems: null,
    fields: undefined,
    // Send RSVP replies to a Google Sheet (via Apps Script webhook) instead of WhatsApp
    submissionDestination: 'google-sheet',
    googleSheetUrl: 'https://script.google.com/macros/s/AKfycbySaYHAhNpsffWqgFR-aamjlsFhqB8-kPYqQDPbPT-_aqYa16nhO30CbK6byjCoNnqZJg/exec'
  },
  envelope: {
    title: 'Reception Invitation',
    subtitle: 'Rajitha & Sayuri',
    buttonText: 'Open Invitation'
  },
  timeline: [],
  meta: {
    title: 'Rajitha & Sayuri Reception Invitation',
    description: 'You are invited to the reception of Rajitha Nethmal and Sayuri Maheesha Divyanjalee.',
    ogImage: ''
  },
  sectionBackgrounds: {
    hero: '/images/2ndInvitation/hero-bg.png',
    story: '/images/hero-bg.png',
    events: '/images/2ndInvitation/celebration-bg.png',
    rsvp: '/images/2ndInvitation/rsvp-bg.png',
    footer: ''
  },
  sharePreviewImageUrl: '',
  isActive: true,
  fallingPetals: true
};
