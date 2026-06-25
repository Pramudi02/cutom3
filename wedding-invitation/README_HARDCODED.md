# Rajitha & Sayuri - Wedding Invitation (Hardcoded)

## 🎉 Setup Complete!

The wedding invitation is fully configured with **Layout 6: Floral Garden** and all data is hardcoded. No database required!

### Wedding Details (Hardcoded)
- **Couple:** Rajitha Nethmal & Sayuri Maheesha Divyanjalee
- **Display:** Rajitha & Sayuri
- **Date:** Friday, August 28, 2026
- **Ceremony Time:** 09:30 AM
- **Venue:** St. Philip Neri's Church Thammita, Negombo
- **Reply Deadline:** July 20, 2026
- **RSVP WhatsApp:** 766155777
- **Theme:** Watercolor Floral Garden (Layout 6)

## 🚀 Quick Start (No Database Setup Needed!)

```bash
# 1. Navigate to project
cd wedding-invitation

# 2. Install dependencies (if not already done)
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# http://localhost:3000
# → Automatically redirects to → http://localhost:3000/rajitha-sayuri
```

That's it! 🎊

## 📝 Where the Data Lives

All wedding data is hardcoded in:
```
lib/hardcodedConfig.js
```

To modify the invitation details, edit this file directly:
- Couple names
- Dates & times
- Venue information
- RSVP details
- Colors & theme
- Timeline events
- Story text
- Gallery (when you add photos)

## 📱 What Visitors See

Opening `http://localhost:3000` shows:

1. **Floral Hero** - Watercolor corner decorations
2. **Couple Names** - "Rajitha & Sayuri" in elegant script
3. **Date & Time** - August 28, 2026 @ 09:30 AM
4. **Save to Calendar** - Google Calendar / Apple / Outlook integration
5. **Love Story** - Garden-themed story section with decorations
6. **Gallery** - Circular floral grid (add photos in hardcodedConfig.js)
7. **Event Details** - Ceremony info in floral cards
8. **Timeline** - Schedule of events
9. **RSVP** - WhatsApp-based guest responses
10. **Falling Petals** - Animated floral background

## ✏️ How to Customize

### Change Couple Names
Edit `lib/hardcodedConfig.js`:
```javascript
couple: {
  bride: { firstName: 'NEW_NAME', lastName: 'LAST_NAME', fullName: 'FULL NAME' },
  groom: { firstName: 'NEW_NAME', lastName: 'LAST_NAME', fullName: 'FULL NAME' },
  displayNames: 'Name1 & Name2'
}
```

### Change Wedding Date/Time
```javascript
wedding: {
  dateTimeISO: '2026-08-28T09:30:00.000Z',  // Change date & time here
  displayDate: 'August 28, 2026',            // Display format
  year: '2026'
}
```

### Change Venue
```javascript
events: {
  ceremony: {
    title: 'Wedding Ceremony',
    time: '09:30 AM',
    venueName: 'Your Church Name',
    address: 'City, Country',
    mapsUrl: 'https://maps.google.com/?q=your+venue'
  }
}
```

### Change Colors/Theme
```javascript
theme: {
  colorPrimary: '#C9956A',      // Main accent color
  colorSecondary: '#E8D5B7',    // Secondary color
  colorTextDark: '#2C2018',     // Text color
  colorBg: '#FAF7F2',           // Background color
  // ... other colors
}
```

### Add Photos to Gallery
```javascript
gallery: [
  { src: 'https://example.com/photo1.jpg', alt: 'Photo 1' },
  { src: 'https://example.com/photo2.jpg', alt: 'Photo 2' },
  // Add more photos...
]
```

### Change Story Text
```javascript
story: {
  invitationText: 'Your invitation text here',
  paragraphs: [
    'First paragraph',
    'Second paragraph',
    // Add more paragraphs
  ]
}
```

### Change Timeline Events
```javascript
timeline: [
  { time: '09:30 AM', title: 'The Ceremony', description: 'Exchange of vows', icon: '💍' },
  { time: '10:30 AM', title: 'Reception', description: 'Celebration starts', icon: '🎉' },
  // Add/modify events
]
```

### Add Hero Image
```javascript
heroImage: 'https://your-image-url.com/photo.jpg'  // URL to couple photo
```

### Add Background Music
```javascript
audioUrl: 'https://your-audio-url.com/music.mp3'  // URL to audio file
```

## 🎨 Layout 6 Features

This invitation uses **Layout 6: Floral Garden** exclusively:

✅ **Hero Section**
- Watercolor floral corner decorations (4 corners)
- Elegant script font for couple names
- "Save the Date" button with calendar integration
- Rounded image border for couple photo

✅ **Events Section**
- "The Celebration" header
- Floral-styled event cards (60px/20px border radius)
- Venue, address, and time information
- Google Maps & Add to Calendar buttons

✅ **Story Section**
- Flower emoji decorations (🌸, 🌿, 🍃)
- "Our Love Story" heading
- Rounded container with invitation text
- Garden-themed styling

✅ **Gallery**
- Circular images with grayscale on load
- Hover effect: removes grayscale
- White border with subtle shadow
- 2-4 column responsive grid

## 📁 File Structure

```
wedding-invitation/
├── lib/
│   └── hardcodedConfig.js          ← All data hardcoded here
├── app/
│   ├── page.jsx                    ← Redirects to /rajitha-sayuri
│   ├── [slug]/page.jsx             ← Loads hardcoded config
│   ├── components/
│   │   ├── Hero.jsx                ← Layout 6 hero section
│   │   ├── EventDetails.jsx        ← Layout 6 events
│   │   ├── StorySection.jsx        ← Layout 6 story
│   │   ├── Gallery.jsx             ← Layout 6 gallery
│   │   ├── Countdown.jsx
│   │   ├── RSVP.jsx
│   │   ├── Timeline.jsx
│   │   └── ... other components
│   ├── ClientHome.jsx              ← Main layout
│   └── layout.jsx
└── public/
    └── images/                     ← Static images
```

## 🔧 No Database, No Admin Panel

Since everything is hardcoded:
- ✅ No MongoDB setup needed
- ✅ No environment variables required
- ✅ No admin panel to manage (keep it simple!)
- ✅ Just edit `hardcodedConfig.js` and save
- ✅ Changes take effect on page refresh

## 🎯 Next Steps

1. **Run the app** - `npm run dev`
2. **Visit** - `http://localhost:3000`
3. **Edit** - Modify `lib/hardcodedConfig.js` as needed
4. **Refresh** - See changes instantly
5. **Share** - Deploy to production when ready

## 🚀 Deployment

To deploy to production:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Follow prompts, it will deploy automatically
# Your invitation will be live at: yourdomain.com/rajitha-sayuri
```

### Other Platforms
Works on any Node.js hosting:
- Netlify
- Railway
- Heroku
- AWS Amplify
- GitHub Pages (static export)

## ⚠️ Important Notes

- **Admin Panel** exists but doesn't persist changes (hardcoded data takes priority)
- **No login required** - Just open the URL
- **No data validation** - Edit carefully
- **Changes require code edit** - Edit `hardcodedConfig.js` → Save → Refresh

## 🎊 Customization Examples

### Make it minimal (just essential info)
Remove unused fields from `hardcodedConfig.js`

### Add multiple events
Add more objects to `events.ceremony` array

### Change reveal style
Edit `revealStyle: 'envelope'` to other options:
- 'envelope' (opens like envelope)
- 'cover' (fade-in)
- 'couple' (couple reveal)
- 'fade' (simple fade)

### Enable/disable features
```javascript
fallingPetals: true,    // Toggle flower animation
audioUrl: '',           // Remove to disable music
gallery: [],            // Empty to hide gallery
timeline: [],           // Empty to hide timeline
```

## 📞 Support

Everything is self-contained. No databases, no servers, no complicated setup. Just pure React + Next.js with hardcoded data!

---

**Invitation Slug:** `/rajitha-sayuri`
**Layout:** 6 (Floral Garden)
**Data Source:** `lib/hardcodedConfig.js`
**Status:** 🟢 Ready to run locally and deploy!

