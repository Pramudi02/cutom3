export const hardcodedConfig = {
  slug: 'rajitha-sayuri',
  couple: {
    bride: { firstName: 'Sayuri', lastName: 'Maheesha Divyanjalee', fullName: 'SAYURI MAHEESHA DIVYANJALEE' },
    groom: { firstName: 'Rajitha', lastName: 'Nethmal', fullName: 'RAJITHA NETHMAL' },
    displayNames: 'Rajitha & Sayuri',
    tagline: 'Together Forever'
  },
  wedding: {
    dateTimeISO: '2026-08-28T04:00:00.000Z',
    displayDate: 'August 28, 2026',
    year: '2026'
  },
  // story: {
  //   invitationText: 'Together with their families, we invite you to celebrate our joyful union.',
  //   paragraphs: [
  //     'We met in an unexpected way, and it turned into the most beautiful chapter of our lives.',
  //     'Now, we are excited to start our journey together forever.'
  //   ]
  // },
  events: {
    ceremony: {
      title: 'Wedding Ceremony',
      icon: '🌸',
      time: '09:30 AM',
      timeHighlight: true,
      venueName: 'St. Philip Neri\'s Church Thammita',
      address: 'Negombo, Sri Lanka',
      mapsUrl: 'https://maps.google.com/?q=St.Philip+Neri+Church+Thammita+Negombo',
      dressCode: 'Formal'
    }
  },
  extraEvents: [],
  audioUrl: '',
  heroImage: '',
  heroCouple: {
    groom: { parents: 'Son of Mr and Mrs Gamamedaliyanage', name: 'Rajitha Nethmal', image: '/images/groom.jpeg' },
    bride: { parents: 'Daughter of Mr and Mrs Ranasinghe', name: 'Sayuri Maheesha', image: '/images/bride.jpeg' }
  },
  heroVideo: '',
  heroLayout: 6,
  revealStyle: 'elegant-photo',
  theme: {
    colorPrimary: '#E75480',
    colorSecondary: '#F0D0E0',
    colorTextLight: '#E8E8E8',
    colorTextDark: '#516969',
    colorBg: '#FFFBF7',
    colorSurface: '#FFFFFF',
    heroOverlayStart: 'rgba(42, 107, 122, 0.6)',
    heroOverlayEnd: 'rgba(45, 80, 22, 0.8)'
  },
  rsvp: {
    whatsappNumber: '766155777',
    deadline: 'August 08, 2026',
    maxGuests: 2,
    dietaryTitle: null,
    dietaryItems: null,
    title: 'ඔබගේ පැමිණීම තහවුරු කරන්න',
    titleSub: '(Please Confirm Your Attendance / RSVP)',
    submitLabel: 'යොමු කරන්න (Submit)',
    deadlineLabel: 'කරුණාකර මෙම දිනයට පෙර ඔබගේ පැමිණීම තහවුරු කරන්න ',
    fields: [
      { id: 'guestName', type: 'text', label: 'අමුත්තාගේ නම (Guest Name)', placeholder: 'ඔබගේ නම ඇතුළත් කරන්න', required: true },
      { id: 'attending', type: 'button-group', label: 'ඔබ සහභාගී වන්නේද? (Will You Attend?)', options: 'සතුටින් සහභාගී වෙමි,සහභාගී විය නොහැක', required: true },
      { id: 'guestCount', type: 'select', label: 'අමුත්තන් සංඛ්‍යාව (Guest Count)', placeholder: '-- අමුත්තන් සංඛ්‍යාව තෝරන්න --', options: '1 අයෙකු (1 Guest),2 අයෙකු (2 Guests),3 අයෙකු (3 Guests),4 අයෙකු (4 Guests),5 හෝ ඊට වැඩි (5+ Guests)', required: true },
      { id: 'message', type: 'textarea', label: 'යුවළට සුබ පැතුම් පණිවිඩයක්', placeholder: 'ඔබගේ පණිවිඩය මෙහි සටහන් කරන්න...', required: false }
    ],
    // Send RSVP replies to a Google Sheet (via Apps Script webhook) instead of WhatsApp
    submissionDestination: 'google-sheet',
    googleSheetUrl: 'https://script.google.com/macros/s/AKfycbyX2Bvyd1vLC97KUtUYZCY7Evz7aRViLYZJWDefMmFVaEruwKLTrsjCqE6ETEr51cZc/exec'
  },
  envelope: {
    title: 'A Wedding Invitation',
    subtitle: 'Rajitha & Sayuri',
    buttonText: 'Open Invitation',
    bgImage: '/images/bg_hero_lotus.png',
    waxSealImage: '/images/wax-seal.png',
    premium: {
      waxSealColor: '#8a0303',
      envelopeColor: '#ffffff',
      liningColor: '#f3f4f6'
    }
  },
  // timeline: [
  //   { time: '09:30 AM', title: 'The Ceremony', description: 'Exchange of vows at the church', icon: '💍' },
  //   { time: '10:30 AM', title: 'Reception', description: 'Celebration with loved ones', icon: '🎉' },
  //   { time: '01:00 PM', title: 'Lunch', description: 'Delicious feast and toasts', icon: '🍽️' },
  //   { time: '03:00 PM', title: 'Celebration', description: 'Dancing and celebration', icon: '💃' }
  // ],
  meta: {
    title: 'Rajitha & Sayuri Wedding Invitation',
    description: 'You are invited to celebrate the wedding of Rajitha Nethmal and Sayuri Maheesha Divyanjalee.',
    ogImage: ''
  },
  sectionBackgrounds: {
    hero: '/images/h-bg.png',
    story: '/images/hero-bg.png',
    events: '/images/bgwater.png',
    rsvp: '/images/2ndInvitation/rsvp-bg.png',
    footer: ''
  },
  sharePreviewImageUrl: '',
  isActive: true,
  fallingPetals: true,
  fallingPetalsImage: '/images/bow.webp'
};
