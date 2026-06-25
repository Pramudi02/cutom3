# 🚀 Quick Start - Rajitha & Sayuri Wedding Invitation

## ✅ Everything is Ready!

Your wedding invitation is completely set up with hardcoded data. No database, no setup needed.

## 🎯 Run It Right Now

```bash
cd wedding-invitation
npm run dev
```

Then open: **http://localhost:3000**

→ It will automatically show your invitation!

## 📝 The Data

All wedding information is in one file:

**`lib/hardcodedConfig.js`**

Currently configured with:
- **Names:** Rajitha Nethmal & Sayuri Maheesha Divyanjalee
- **Date:** Friday, August 28, 2026
- **Time:** 09:30 AM
- **Venue:** St. Philip Neri's Church Thammita, Negombo
- **RSVP:** 766155777 (WhatsApp)
- **Deadline:** July 20, 2026
- **Theme:** Watercolor Floral Garden (Layout 6)

## 🔧 Want to Change Something?

Just edit `lib/hardcodedConfig.js`:

| What to Change | Where to Edit |
|---|---|
| Couple Names | `couple.groom/bride.firstName` |
| Date & Time | `wedding.dateTimeISO` |
| Venue Address | `events.ceremony.venueName/address` |
| RSVP WhatsApp | `rsvp.whatsappNumber` |
| Reply Deadline | `rsvp.deadline` |
| Story Text | `story.paragraphs` |
| Colors | `theme.colorPrimary/Secondary/etc` |
| Hero Photo | `heroImage: 'https://...'` |
| Background Music | `audioUrl: 'https://...'` |
| Gallery Photos | `gallery: [{ src, alt }, ...]` |

Save the file → Refresh browser → Done! ✨

## 🎨 What It Shows

- ✨ Floral corner decorations
- 👰💍 Couple names prominently displayed
- 📅 Date, time, and venue info
- 📸 Gallery section (add photos in config)
- 🌸 Love story section with garden theme
- 📋 Event timeline
- 📲 RSVP via WhatsApp
- 🎵 Optional background music
- 💃 Animated falling petals

## 📂 Files Changed

| File | What Changed |
|---|---|
| `lib/hardcodedConfig.js` | ✨ NEW - All wedding data hardcoded here |
| `app/[slug]/page.jsx` | Updated to use hardcoded config (no MongoDB) |
| `app/page.jsx` | Redirects `/` → `/rajitha-sayuri` |
| `app/components/Hero.jsx` | Cleaned - Layout 6 only |
| `app/components/EventDetails.jsx` | Cleaned - Layout 6 only |
| `app/components/StorySection.jsx` | Cleaned - Layout 6 only |
| `app/components/Gallery.jsx` | Cleaned - Layout 6 only |

## 🚫 What Was Removed

- ❌ All Layouts 1-5, 7-9, 11 code (keep only Layout 6)
- ❌ MongoDB setup and database code
- ❌ Admin panel database integration
- ❌ 80% of component code (now much smaller)

## 💾 No Database Needed!

- ✅ Works locally without any setup
- ✅ No MongoDB, no environment variables
- ✅ Just plain JavaScript hardcoded data
- ✅ Edit, save, refresh - that's it!

## 🎯 Layout 6: Floral Garden Features

**Hero Section:**
- Watercolor floral corner decorations
- Elegant script font couple names
- "Save to Calendar" with Google/Apple/Outlook
- Optional couple photo

**Events:**
- "The Celebration" header
- Floral-styled cards for each event
- Venue, address, time
- Location and calendar buttons

**Story:**
- "Our Love Story" with flower emoji
- Invitation text + story paragraphs
- Rounded container with garden theme
- Corner flower/leaf decorations

**Gallery:**
- Circular images (2-4 columns responsive)
- Grayscale effect → hover to colorize
- Perfect for wedding photos

## 🌐 Ready to Deploy?

### Vercel (1 minute)
```bash
npm install -g vercel
vercel
# Follow prompts
# Your invitation is live!
```

### Any Other Host
Works with: Netlify, Railway, Heroku, GitHub Pages, AWS, etc.

Just push to GitHub and deploy!

## ❓ FAQ

**Q: Where do I edit the couple names?**
A: `lib/hardcodedConfig.js` → `couple.groom.firstName` and `couple.bride.firstName`

**Q: How do I add photos?**
A: Add URLs to `gallery` array in `hardcodedConfig.js`

**Q: Can I change the date/time?**
A: Yes, edit `wedding.dateTimeISO` in `hardcodedConfig.js`

**Q: Do I need to set up a database?**
A: No! Everything is hardcoded. Just edit the file and save.

**Q: Can I use the admin panel?**
A: Yes, but changes won't persist (hardcoded data takes priority). Better to just edit the config file.

**Q: How do I deploy?**
A: Use Vercel, Netlify, or any Node.js hosting. `npm run build` → deploy.

**Q: What colors are being used?**
A: See `theme` in `hardcodedConfig.js`. Edit the hex colors to change look.

## 🎊 You're All Set!

Everything is hardcoded, Layout 6 is the only layout, and the invitation is ready to show!

```bash
npm run dev
# → Open http://localhost:3000
# → See your invitation!
```

That's it! Happy wedding! 💍✨

---

**Data File:** `lib/hardcodedConfig.js`
**View:** `http://localhost:3000/rajitha-sayuri`
**Layout:** 6 (Floral Garden - Watercolor Blooms)
**Status:** ✅ Ready to run, edit, and deploy!
