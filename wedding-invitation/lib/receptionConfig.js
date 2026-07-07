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
      time: '5:00 PM - 10:00 PM',
      timeHighlight: true,
      note: 'විනෝද ක්‍රීඩා හා රසවත් සන්ධ්‍යා ආහාරය සමඟ ප්‍රීතිමත් සැන්දෑවක් අප සමඟ ගත කරන්න එක්වන්න!',
      venueName: "Eagles' Lagoon View Banquet Hall",
      address: '',
      mapsUrl: 'https://maps.app.goo.gl/8UkqtFP3iZ6gCQfV6',
      dressCode: 'Festive'
    }
  },
  extraEvents: [],
  audioUrl: '',
  heroImage: '/images/2ndInvitation/hero-new.jpeg',
  heroVideo: '',
  heroLayout: 6,
  preEventImages: [
    {
      src: '/images/2ndInvitation/events.png',
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
      colors: ['#DD1F55', '#EB7D3D', '#E4911E', '#9C9851', '#E4C7A5'],
      colorsNote: 'අපගේ වර්ණ තේමාවට ගැළපෙන පරිදි ඉහත වර්ණවලින් සැරසී එන්න'
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
    title: 'ඔබගේ පැමිණීම තහවුරු කරන්න',
    titleSub: '(Please Confirm / RSVP)',
    submitLabel: 'යොමු කරන්න (Submit)',
    deadlineLabel: 'කරුණාකර මෙම දිනයට පෙර ඔබගේ පැමිණීම තහවුරු කරන්න',
    fields: [
      { id: 'guestName', type: 'text', label: 'ඔබගේ නම (Guest Name)', placeholder: 'ඔබගේ නම ඇතුළත් කරන්න', required: true },
      { id: 'attending', type: 'button-group', label: 'ඔබ සහභාගී වන්නේද? (Attending?)', options: 'සතුටින් සහභාගී වෙමි,සහභාගී විය නොහැක', required: true },
      { id: 'adults', type: 'select', label: 'වැඩිහිටියන් සංඛ්‍යාව (Adults)', placeholder: '-- කරුණාකර තෝරන්න --', options: '1,2,3,4,5', required: true },
      { id: 'children', type: 'select', label: 'ළමුන් සංඛ්‍යාව (Children)', placeholder: '-- කරුණාකර තෝරන්න --', options: '0,1,2,3,4', required: false },
      { id: 'kids', type: 'select', label: 'අවුරුදු 10ට අඩු ළමුන් (Kids Below 10)', placeholder: '-- කරුණාකර තෝරන්න --', options: '0,1,2,3,4', required: false },
      { id: 'menu', type: 'checkbox-group', label: 'ආහාර තේරීම (Menu Choice)', options: 'චිකන් (Chicken),මාළු (Fish),නිර්මාංශ (Vegetarian)', required: false },
      { id: 'message', type: 'textarea', label: 'යුවළට සුබ පැතුම් පණිවිඩයක්', placeholder: 'ඔබගේ පණිවිඩය මෙහි ලියන්න...', required: false }
    ],
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
