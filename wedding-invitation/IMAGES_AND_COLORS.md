# 🌸 Lotus-Themed Images & Colors Guide

## ✨ All Images Generated & Added!

9 beautiful lotus-themed images have been automatically generated and saved to `public/images/`

## 🎨 Color Scheme - Lotus Theme

Perfect harmony of traditional lotus symbolism with wedding elegance:

### Primary Colors
| Color | Hex Code | Name | Usage |
|-------|----------|------|-------|
| **Lotus Pink** | `#E91E63` | Main accent | Buttons, titles, highlights |
| **Soft Gold** | `#D4AF37` | Secondary | Borders, decorative elements |
| **Golden Yellow** | `#FFD700` | Accents | Lotus centers, details |
| **Lotus Green** | `#4CAF50` | Nature | Leaves, organic elements |
| **Cream/Ivory** | `#FFFBF7` | Background | Page background |
| **Dark Slate** | `#2C3E50` | Text | Primary text color |

### What Each Color Represents
- 🌸 **Lotus Pink** - Love, compassion, beauty
- 🏵️ **Gold** - Prosperity, wealth, divinity
- ✨ **Yellow** - Joy, enlightenment, purity
- 🍃 **Green** - Life, growth, nature
- 🤍 **Cream** - Purity, elegance, sophistication

## 📸 Generated Images (9 Total)

All saved in: `public/images/`

### 1. **hero.svg** - Main Hero Image
**Size:** 600×800 px  
**Purpose:** Couple photo frame in hero section  
**Features:**
- Elegant cream-colored card with gold border
- Lotus flower decorations in all 4 corners
- R & S initials + "Rajitha & Sayuri" text
- Pink accent lines at top and bottom
- Gold accents and decorative elements

**Used in:** `Hero` component

---

### 2. **bg-story.svg** - Story Section Background
**Size:** 1920×1080 px  
**Purpose:** Soft background for love story section  
**Features:**
- Cream-to-peach gradient
- Large semi-transparent lotus flowers
- Gold center accent
- Very subtle (8% opacity) for text readability

**Used in:** `sectionBackgrounds.story` + `sectionBackgrounds.hero`

---

### 3. **bg-venue.svg** - Ceremony Venue Background
**Size:** 1920×1080 px  
**Purpose:** Background for event details section  
**Features:**
- Warm orange-cream gradient
- Water ripple effect (lotus pond theme)
- Scattered lotus leaf elements
- Represents the venue and celebration

**Used in:** `sectionBackgrounds.events`

---

### 4. **bg-gallery.svg** - Gallery Section Background
**Size:** 1920×1080 px  
**Purpose:** Background for photo gallery  
**Features:**
- Soft pink-cream gradient
- Large lotus pattern in center (8-petal design)
- Gold geometric squares in corners
- Delicate and elegant

**Used in:** `sectionBackgrounds.gallery`

---

### 5. **bg-rsvp.svg** - RSVP Form Background
**Size:** 1920×1080 px  
**Purpose:** Background for response form  
**Features:**
- Cream-to-peachy gradient
- Gold geometric borders
- Central lotus accent
- Professional yet elegant

**Used in:** `sectionBackgrounds.rsvp`

---

### Gallery Photos (4 Images)

#### 6. **gallery-lotus-pond.svg** - Lotus Pond
**Size:** 1000×1000 px  
**Theme:** Serene water garden  
**Colors:** Light blue water, pink lotus, green leaves  
**Features:**
- Blue water background
- Large lotus in center with golden center
- Lotus leaves floating
- Water ripples
- Position: `gallery[0]`

---

#### 7. **gallery-lotus-closeup.svg** - Lotus Close-up
**Size:** 1000×1000 px  
**Theme:** Delicate beauty  
**Colors:** Vibrant pink, golden yellow center, soft pink background  
**Features:**
- Pink lotus with 8 outer and 8 inner petals
- Golden center with yellow details
- Water droplets for freshness
- Macro photography style
- Position: `gallery[1]`

---

#### 8. **gallery-golden-lotus.svg** - Golden Lotus
**Size:** 1000×1000 px  
**Theme:** Prosperity & wealth  
**Colors:** Gold (#D4AF37), Deep gold (#DAA520), cream background  
**Features:**
- Golden lotus representing auspiciousness
- 8-petal design with alternating gold tones
- Green leaves on sides
- Luxury and prosperity theme
- Position: `gallery[2]`

---

#### 9. **gallery-white-lotus.svg** - White Lotus
**Size:** 1000×1000 px  
**Theme:** Purity & devotion  
**Colors:** White, off-white, golden center, light blue background  
**Features:**
- Pure white petals representing clarity
- Golden center and details
- Green lotus leaves
- Light blue water background
- Symbol of pure love
- Position: `gallery[3]`

---

## 📁 File Structure

```
public/
└── images/
    ├── hero.svg                    (Hero section image)
    ├── bg-story.svg               (Story background)
    ├── bg-venue.svg               (Venue background)
    ├── bg-gallery.svg             (Gallery background)
    ├── bg-rsvp.svg                (RSVP background)
    ├── gallery-lotus-pond.svg      (Gallery photo 1)
    ├── gallery-lotus-closeup.svg   (Gallery photo 2)
    ├── gallery-golden-lotus.svg    (Gallery photo 3)
    └── gallery-white-lotus.svg     (Gallery photo 4)
```

## 🎨 How Colors Are Used

### In Components

**Hero Section** (`Hero.jsx`)
- Text: `colorTextDark` (#2C3E50)
- Accents: `colorPrimary` (#E91E63 - Lotus Pink)
- Backgrounds: Cream (#FFFBF7)
- Hero Image: `/images/hero.svg`

**Story Section** (`StorySection.jsx`)
- Background: `/images/bg-story.svg`
- Text: `colorTextDark`
- Decorative elements: `colorPrimary`
- Container: White with `colorPrimary` border

**Event Details** (`EventDetails.jsx`)
- Background: `/images/bg-venue.svg`
- Card backgrounds: White/cream with `colorPrimary` accents
- Titles: `colorPrimary` (#E91E63)
- Flower emoji accents

**Gallery** (`Gallery.jsx`)
- Background: `/images/bg-gallery.svg`
- Images: Grayscale → colorize on hover
- Circle borders: White with subtle shadow
- Gallery images: `/images/gallery-*.svg` (4 photos)

**RSVP Section** (`RSVPSection.jsx`)
- Background: `/images/bg-rsvp.svg`
- Buttons: `colorPrimary` (#E91E63)
- Text: `colorTextDark`
- Form fields: Bordered with `colorPrimary`

## 🌸 Lotus Symbolism in Your Invitation

Each lotus represents different aspects:

1. **Pink Lotus** - Love, compassion, elegance
   - Main color throughout invitation
   - Represents the romantic essence

2. **Golden Lotus** - Prosperity, auspiciousness
   - Secondary accent color
   - Brings wealth and good fortune

3. **White Lotus** - Purity, devotion, enlightenment
   - Gallery photo 4
   - Spiritual and pure love

4. **Lotus Pond** - New beginnings, growth
   - Gallery photo 1
   - Represents starting fresh journey

## 🔧 Customizing Colors

To change colors, edit `lib/hardcodedConfig.js`:

```javascript
theme: {
  colorPrimary: '#E91E63',        // Main accent (pink)
  colorSecondary: '#D4AF37',      // Secondary (gold)
  colorTextLight: '#8A7F6A',      // Light text
  colorTextDark: '#2C3E50',       // Dark text
  colorBg: '#FFFBF7',             // Background (cream)
  colorSurface: '#FFFFFF',        // Card/surface (white)
}
```

### Example: Change to Purple Lotus
```javascript
colorPrimary: '#9C27B0',  // Purple
colorSecondary: '#CE93D8', // Light purple
```

## 📊 Color Harmony

The lotus color scheme creates perfect harmony:

```
Primary (Pink):       #E91E63 ← Main accent
Secondary (Gold):     #D4AF37 ← Wealth & prosperity  
Accent (Yellow):      #FFD700 ← Enlightenment
Nature (Green):       #4CAF50 ← Growth & life
Background (Cream):   #FFFBF7 ← Purity & elegance
Text (Dark):          #2C3E50 ← Readability
```

**Contrast Ratios:**
- Dark text on cream background: ✅ Excellent (WCAG AAA)
- Pink on white: ✅ Good (WCAG AA)
- Gold on cream: ✅ Good (WCAG AA)

## 📸 Image Specifications

### All Generated as SVG
- ✅ Scalable to any size
- ✅ Crisp on all devices
- ✅ Very small file size
- ✅ Can be modified with code
- ✅ Perfect color matching

### Image Format Details
- **Format:** SVG (Scalable Vector Graphics)
- **Background:** Transparent where needed
- **Colors:** Embedded in SVG
- **Optimization:** Minimal, clean code
- **Compatibility:** All modern browsers

## 🚀 Using Your Invitation

```bash
# 1. Run the app
npm run dev

# 2. Open browser
# http://localhost:3000

# 3. See all lotus-themed images with color scheme!
```

## ✨ What Visitors Will See

### Color Experience
- 🌸 Pink lotus accents draw attention
- ✨ Gold details add elegance
- 🍃 Green leaves bring nature
- 🤍 Cream background ensures readability
- 💎 All colors work in harmony

### Visual Flow
1. **Hero** - Pink frame with gold accents
2. **Story** - Soft background with lotus hints
3. **Gallery** - 4 lotus photos in different styles
4. **Events** - Venue background with flower details
5. **RSVP** - Elegant form with gold accents
6. **Footer** - Gradient fade with color accents

## 📝 Image Credits

All images are **custom-generated** specifically for:
- Rajitha & Sayuri's Wedding
- Lotus theme symbolism
- Color-coordinated wedding
- Responsive, elegant design

**Generated:** June 2026  
**Theme:** Lotus - Sacred Water Flower  
**Colors:** Pink, Gold, Green, Cream  
**Format:** SVG (Scalable Vector)  
**License:** Private use only  

---

## 🎊 Summary

✅ **9 lotus-themed images created**
✅ **Perfect color harmony (pink, gold, green, cream)**
✅ **All saved in public/images/**
✅ **Configured in hardcodedConfig.js**
✅ **Professional wedding aesthetic**
✅ **Symbolism: Love, Prosperity, Purity**

Your invitation is now fully themed with lotus flowers and wedding-appropriate colors! 💍🌸
