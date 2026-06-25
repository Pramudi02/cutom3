#!/usr/bin/env node

/**
 * Image Generation Script for Lotus-themed Wedding Invitation
 * Generates all images and saves to public/images/
 *
 * Colors: Soft pink, gold, lotus green, cream backgrounds
 */

const fs = require('fs');
const path = require('path');

// Ensure public/images directory exists
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('✅ Created public/images directory');
}

/**
 * Create SVG images with lotus theme
 */

// 1. Hero Image - Couple with Lotus Frame
const heroImage = `<svg width="600" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFF8F0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFE8D6;stop-opacity:1" />
    </linearGradient>
    <filter id="blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
    </filter>
  </defs>

  <!-- Background gradient -->
  <rect width="600" height="800" fill="url(#heroGrad)"/>

  <!-- Soft gold accent -->
  <circle cx="300" cy="100" r="80" fill="#D4AF37" opacity="0.15"/>

  <!-- Lotus flowers - top corners -->
  <g opacity="0.4">
    <!-- Top left lotus -->
    <circle cx="80" cy="120" r="4" fill="#E91E63"/>
    <circle cx="75" cy="115" r="4" fill="#E91E63"/>
    <circle cx="85" cy="115" r="4" fill="#E91E63"/>
    <circle cx="70" cy="120" r="3" fill="#C2185B"/>
    <circle cx="90" cy="120" r="3" fill="#C2185B"/>
    <circle cx="80" cy="105" r="3" fill="#C2185B"/>
    <!-- Center -->
    <circle cx="80" cy="120" r="2" fill="#FFD700"/>
  </g>

  <!-- Top right lotus -->
  <g opacity="0.4">
    <circle cx="520" cy="120" r="4" fill="#E91E63"/>
    <circle cx="515" cy="115" r="4" fill="#E91E63"/>
    <circle cx="525" cy="115" r="4" fill="#E91E63"/>
    <circle cx="510" cy="120" r="3" fill="#C2185B"/>
    <circle cx="530" cy="120" r="3" fill="#C2185B"/>
    <circle cx="520" cy="105" r="3" fill="#C2185B"/>
    <circle cx="520" cy="120" r="2" fill="#FFD700"/>
  </g>

  <!-- Main content area - cream with border -->
  <rect x="40" y="150" width="520" height="550" rx="20" fill="#FFFBF7" stroke="#D4AF37" stroke-width="2"/>

  <!-- Decorative header -->
  <rect x="60" y="170" width="480" height="3" fill="#E91E63" opacity="0.3"/>

  <!-- Couple initials placeholder -->
  <g font-family="Georgia, serif" text-anchor="middle">
    <text x="300" y="320" font-size="48" font-weight="bold" fill="#2C3E50" opacity="0.7">R & S</text>
    <text x="300" y="360" font-size="24" fill="#E91E63" font-style="italic">Rajitha & Sayuri</text>
  </g>

  <!-- Decorative bottom -->
  <rect x="60" y="680" width="480" height="3" fill="#E91E63" opacity="0.3"/>

  <!-- Corner lotus flowers - bottom -->
  <g opacity="0.3">
    <!-- Bottom left -->
    <circle cx="100" cy="720" r="3" fill="#E91E63"/>
    <circle cx="95" cy="715" r="3" fill="#E91E63"/>
    <circle cx="105" cy="715" r="3" fill="#E91E63"/>
    <circle cx="100" cy="720" r="1.5" fill="#FFD700"/>
  </g>

  <g opacity="0.3">
    <!-- Bottom right -->
    <circle cx="500" cy="720" r="3" fill="#E91E63"/>
    <circle cx="495" cy="715" r="3" fill="#E91E63"/>
    <circle cx="505" cy="715" r="3" fill="#E91E63"/>
    <circle cx="500" cy="720" r="1.5" fill="#FFD700"/>
  </g>
</svg>`;

// 2. Floral Background - Story Section
const storyBg = `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="storyGrad" cx="50%" cy="50%" r="70%">
      <stop offset="0%" style="stop-color:#FFF9F5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFE8D6;stop-opacity:1" />
    </radialGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#storyGrad)"/>

  <!-- Large lotus flowers scattered -->
  <g opacity="0.08">
    <!-- Left side large lotus -->
    <circle cx="200" cy="300" r="6" fill="#E91E63"/>
    <circle cx="190" cy="290" r="6" fill="#E91E63"/>
    <circle cx="210" cy="290" r="6" fill="#E91E63"/>
    <circle cx="180" cy="305" r="5" fill="#E91E63"/>
    <circle cx="220" cy="305" r="5" fill="#E91E63"/>
    <circle cx="200" cy="280" r="5" fill="#E91E63"/>
    <circle cx="200" cy="300" r="3" fill="#FFD700"/>
  </g>

  <!-- Right side -->
  <g opacity="0.08">
    <circle cx="1800" cy="800" r="6" fill="#E91E63"/>
    <circle cx="1790" cy="790" r="6" fill="#E91E63"/>
    <circle cx="1810" cy="790" r="6" fill="#E91E63"/>
    <circle cx="1780" cy="805" r="5" fill="#E91E63"/>
    <circle cx="1820" cy="805" r="5" fill="#E91E63"/>
    <circle cx="1800" cy="780" r="5" fill="#E91E63"/>
    <circle cx="1800" cy="800" r="3" fill="#FFD700"/>
  </g>

  <!-- Center accent -->
  <circle cx="960" cy="540" r="200" fill="#D4AF37" opacity="0.05"/>
</svg>`;

// 3. Venue Background - Garden Theme
const venueBackground = `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="venueBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFF3E0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFE0B2;stop-opacity:1" />
    </linearGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#venueBg)"/>

  <!-- Water ripples effect (lotus pond theme) -->
  <circle cx="960" cy="540" r="300" fill="none" stroke="#E91E63" stroke-width="1" opacity="0.1"/>
  <circle cx="960" cy="540" r="400" fill="none" stroke="#E91E63" stroke-width="1" opacity="0.08"/>
  <circle cx="960" cy="540" r="500" fill="none" stroke="#E91E63" stroke-width="1" opacity="0.06"/>

  <!-- Lotus leaves scattered -->
  <g opacity="0.12">
    <ellipse cx="300" cy="200" rx="60" ry="80" fill="#4CAF50" transform="rotate(-30 300 200)"/>
    <ellipse cx="1600" cy="800" rx="70" ry="90" fill="#4CAF50" transform="rotate(40 1600 800)"/>
    <ellipse cx="200" cy="900" rx="50" ry="70" fill="#4CAF50" transform="rotate(20 200 900)"/>
    <ellipse cx="1700" cy="200" rx="65" ry="85" fill="#4CAF50" transform="rotate(-50 1700 200)"/>
  </g>
</svg>`;

// 4. Gallery Background - Flowers
const galleryBg = `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="galleryGrad" cx="50%" cy="50%" r="60%">
      <stop offset="0%" style="stop-color:#FFF9F5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFE0CC;stop-opacity:1" />
    </radialGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#galleryGrad)"/>

  <!-- Lotus petals pattern -->
  <g opacity="0.1">
    <!-- Petals in circle -->
    <ellipse cx="960" cy="540" rx="120" ry="40" fill="#E91E63" transform="rotate(0 960 540)"/>
    <ellipse cx="960" cy="540" rx="120" ry="40" fill="#E91E63" transform="rotate(45 960 540)"/>
    <ellipse cx="960" cy="540" rx="120" ry="40" fill="#E91E63" transform="rotate(90 960 540)"/>
    <ellipse cx="960" cy="540" rx="120" ry="40" fill="#E91E63" transform="rotate(135 960 540)"/>
    <ellipse cx="960" cy="540" rx="120" ry="40" fill="#E91E63" transform="rotate(180 960 540)"/>
    <ellipse cx="960" cy="540" rx="120" ry="40" fill="#E91E63" transform="rotate(225 960 540)"/>
    <ellipse cx="960" cy="540" rx="120" ry="40" fill="#E91E63" transform="rotate(270 960 540)"/>
    <ellipse cx="960" cy="540" rx="120" ry="40" fill="#E91E63" transform="rotate(315 960 540)"/>

    <!-- Center -->
    <circle cx="960" cy="540" r="20" fill="#FFD700"/>
  </g>

  <!-- Corner decorations -->
  <circle cx="150" cy="150" r="100" fill="#D4AF37" opacity="0.05"/>
  <circle cx="1770" cy="930" r="100" fill="#D4AF37" opacity="0.05"/>
</svg>`;

// 5. RSVP Background - Elegant
const rsvpBg = `<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="rsvpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFFBF7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFE8D6;stop-opacity:1" />
    </linearGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#rsvpGrad)"/>

  <!-- Gold geometric pattern -->
  <rect x="100" y="100" width="400" height="400" fill="none" stroke="#D4AF37" stroke-width="2" opacity="0.1"/>
  <rect x="1420" y="580" width="400" height="400" fill="none" stroke="#D4AF37" stroke-width="2" opacity="0.1"/>

  <!-- Lotus center -->
  <g opacity="0.08">
    <circle cx="960" cy="540" r="5" fill="#E91E63"/>
    <circle cx="945" cy="525" r="4" fill="#E91E63"/>
    <circle cx="975" cy="525" r="4" fill="#E91E63"/>
    <circle cx="935" cy="545" r="4" fill="#E91E63"/>
    <circle cx="985" cy="545" r="4" fill="#E91E63"/>
    <circle cx="960" cy="515" r="4" fill="#E91E63"/>
    <circle cx="960" cy="540" r="2" fill="#FFD700"/>
  </g>
</svg>`;

// 6. Gallery Photo 1 - Lotus Pond
const galPhoto1 = `<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="water" cx="50%" cy="40%" r="60%">
      <stop offset="0%" style="stop-color:#B3E5FC;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4FC3F7;stop-opacity:1" />
    </radialGradient>
  </defs>

  <!-- Water background -->
  <rect width="1000" height="1000" fill="url(#water)"/>

  <!-- Sky -->
  <rect y="0" width="1000" height="300" fill="#E1F5FE"/>

  <!-- Lotus pond with floating flowers -->
  <g>
    <!-- Large lotus in center -->
    <circle cx="500" cy="600" r="8" fill="#E91E63"/>
    <circle cx="480" cy="580" r="8" fill="#E91E63"/>
    <circle cx="520" cy="580" r="8" fill="#E91E63"/>
    <circle cx="470" cy="610" r="7" fill="#E91E63"/>
    <circle cx="530" cy="610" r="7" fill="#E91E63"/>
    <circle cx="500" cy="570" r="7" fill="#E91E63"/>
    <circle cx="500" cy="600" r="4" fill="#FFD700"/>

    <!-- Lotus leaf -->
    <ellipse cx="500" cy="700" rx="80" ry="100" fill="#4CAF50" opacity="0.6"/>
  </g>

  <!-- Left lotus -->
  <g opacity="0.7">
    <circle cx="250" cy="750" r="6" fill="#E91E63"/>
    <circle cx="235" cy="735" r="6" fill="#E91E63"/>
    <circle cx="265" cy="735" r="6" fill="#E91E63"/>
    <circle cx="250" cy="750" r="3" fill="#FFD700"/>
    <ellipse cx="250" cy="820" rx="60" ry="80" fill="#4CAF50" opacity="0.5"/>
  </g>

  <!-- Right lotus -->
  <g opacity="0.7">
    <circle cx="750" cy="650" r="6" fill="#E91E63"/>
    <circle cx="735" cy="635" r="6" fill="#E91E63"/>
    <circle cx="765" cy="635" r="6" fill="#E91E63"/>
    <circle cx="750" cy="650" r="3" fill="#FFD700"/>
    <ellipse cx="750" cy="720" rx="60" ry="80" fill="#4CAF50" opacity="0.5"/>
  </g>

  <!-- Water ripples -->
  <circle cx="500" cy="600" r="50" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.3"/>
  <circle cx="500" cy="600" r="80" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.2"/>
</svg>`;

// 7. Gallery Photo 2 - Lotus Close Up
const galPhoto2 = `<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="floralCenter" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#FFE082;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFD54F;stop-opacity:1" />
    </radialGradient>
  </defs>

  <!-- Soft pink background -->
  <rect width="1000" height="1000" fill="#FCE4EC"/>

  <!-- Large lotus flower - center -->
  <g>
    <!-- Outer petals -->
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#E91E63" transform="rotate(0 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#EC407A" transform="rotate(45 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#E91E63" transform="rotate(90 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#EC407A" transform="rotate(135 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#E91E63" transform="rotate(180 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#EC407A" transform="rotate(225 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#E91E63" transform="rotate(270 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#EC407A" transform="rotate(315 500 500)"/>

    <!-- Inner petals -->
    <ellipse cx="500" cy="500" rx="100" ry="140" fill="#F06292" transform="rotate(22.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="100" ry="140" fill="#F06292" transform="rotate(67.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="100" ry="140" fill="#F06292" transform="rotate(112.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="100" ry="140" fill="#F06292" transform="rotate(157.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="100" ry="140" fill="#F06292" transform="rotate(202.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="100" ry="140" fill="#F06292" transform="rotate(247.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="100" ry="140" fill="#F06292" transform="rotate(292.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="100" ry="140" fill="#F06292" transform="rotate(337.5 500 500)"/>

    <!-- Center -->
    <circle cx="500" cy="500" r="60" fill="url(#floralCenter)"/>
    <circle cx="500" cy="500" r="30" fill="#FFF59D"/>
    <circle cx="500" cy="500" r="15" fill="#FFD700"/>
  </g>

  <!-- Small water droplets -->
  <circle cx="300" cy="300" r="8" fill="#FFFFFF" opacity="0.4"/>
  <circle cx="700" cy="250" r="6" fill="#FFFFFF" opacity="0.3"/>
  <circle cx="750" cy="700" r="7" fill="#FFFFFF" opacity="0.35"/>
</svg>`;

// 8. Gallery Photo 3 - Golden Lotus
const galPhoto3 = `<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="goldenCenter" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#FFEB3B;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FBC02D;stop-opacity:1" />
    </radialGradient>
  </defs>

  <!-- Cream background -->
  <rect width="1000" height="1000" fill="#FFFACD"/>

  <!-- Lotus in golden tones -->
  <g>
    <!-- Outer petals in gold -->
    <ellipse cx="500" cy="500" rx="140" ry="190" fill="#D4AF37" transform="rotate(0 500 500)"/>
    <ellipse cx="500" cy="500" rx="140" ry="190" fill="#DAA520" transform="rotate(45 500 500)"/>
    <ellipse cx="500" cy="500" rx="140" ry="190" fill="#D4AF37" transform="rotate(90 500 500)"/>
    <ellipse cx="500" cy="500" rx="140" ry="190" fill="#DAA520" transform="rotate(135 500 500)"/>
    <ellipse cx="500" cy="500" rx="140" ry="190" fill="#D4AF37" transform="rotate(180 500 500)"/>
    <ellipse cx="500" cy="500" rx="140" ry="190" fill="#DAA520" transform="rotate(225 500 500)"/>
    <ellipse cx="500" cy="500" rx="140" ry="190" fill="#D4AF37" transform="rotate(270 500 500)"/>
    <ellipse cx="500" cy="500" rx="140" ry="190" fill="#DAA520" transform="rotate(315 500 500)"/>

    <!-- Inner circle -->
    <circle cx="500" cy="500" r="80" fill="url(#goldenCenter)"/>
    <circle cx="500" cy="500" r="40" fill="#FFD700"/>
  </g>

  <!-- Leaves on sides -->
  <ellipse cx="150" cy="600" rx="50" ry="80" fill="#4CAF50" opacity="0.5" transform="rotate(-40 150 600)"/>
  <ellipse cx="850" cy="400" rx="50" ry="80" fill="#4CAF50" opacity="0.5" transform="rotate(40 850 400)"/>
</svg>`;

// 9. Gallery Photo 4 - White Lotus (Symbol of Purity)
const galPhoto4 = `<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="whiteCenter" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#FFF9C4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFF59D;stop-opacity:1" />
    </radialGradient>
  </defs>

  <!-- Light blue water background -->
  <rect width="1000" height="1000" fill="#E3F2FD"/>

  <!-- White lotus -->
  <g>
    <!-- Outer petals -->
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#FFFFFF" transform="rotate(0 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#F5F5F5" transform="rotate(45 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#FFFFFF" transform="rotate(90 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#F5F5F5" transform="rotate(135 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#FFFFFF" transform="rotate(180 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#F5F5F5" transform="rotate(225 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#FFFFFF" transform="rotate(270 500 500)"/>
    <ellipse cx="500" cy="500" rx="150" ry="200" fill="#F5F5F5" transform="rotate(315 500 500)"/>

    <!-- Inner petals in off-white -->
    <ellipse cx="500" cy="500" rx="110" ry="150" fill="#FAFAFA" transform="rotate(22.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="110" ry="150" fill="#FAFAFA" transform="rotate(67.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="110" ry="150" fill="#FAFAFA" transform="rotate(112.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="110" ry="150" fill="#FAFAFA" transform="rotate(157.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="110" ry="150" fill="#FAFAFA" transform="rotate(202.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="110" ry="150" fill="#FAFAFA" transform="rotate(247.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="110" ry="150" fill="#FAFAFA" transform="rotate(292.5 500 500)"/>
    <ellipse cx="500" cy="500" rx="110" ry="150" fill="#FAFAFA" transform="rotate(337.5 500 500)"/>

    <!-- Golden center -->
    <circle cx="500" cy="500" r="70" fill="url(#whiteCenter)"/>
    <circle cx="500" cy="500" r="35" fill="#FFD700"/>
  </g>

  <!-- Green leaves floating -->
  <ellipse cx="200" cy="800" rx="60" ry="90" fill="#4CAF50" opacity="0.6" transform="rotate(-35 200 800)"/>
  <ellipse cx="800" cy="300" rx="60" ry="90" fill="#4CAF50" opacity="0.6" transform="rotate(35 800 300)"/>
</svg>`;

/**
 * Write all SVG files to public/images/
 */
const images = {
  'hero.svg': heroImage,
  'bg-story.svg': storyBg,
  'bg-venue.svg': venueBackground,
  'bg-gallery.svg': galleryBg,
  'bg-rsvp.svg': rsvpBg,
  'gallery-lotus-pond.svg': galPhoto1,
  'gallery-lotus-closeup.svg': galPhoto2,
  'gallery-golden-lotus.svg': galPhoto3,
  'gallery-white-lotus.svg': galPhoto4,
};

let created = 0;
for (const [filename, content] of Object.entries(images)) {
  const filepath = path.join(imagesDir, filename);
  fs.writeFileSync(filepath, content);
  console.log(`✅ Created: ${filename}`);
  created++;
}

console.log(`\n✨ Successfully created ${created} lotus-themed images!`);
console.log(`📁 Location: public/images/`);
console.log('\n📸 Image files created:');
console.log('  - hero.svg (Main couple photo frame)');
console.log('  - bg-story.svg (Love story background)');
console.log('  - bg-venue.svg (Ceremony venue background)');
console.log('  - bg-gallery.svg (Gallery section background)');
console.log('  - bg-rsvp.svg (RSVP form background)');
console.log('  - gallery-lotus-pond.svg (Gallery photo 1)');
console.log('  - gallery-lotus-closeup.svg (Gallery photo 2)');
console.log('  - gallery-golden-lotus.svg (Gallery photo 3)');
console.log('  - gallery-white-lotus.svg (Gallery photo 4)');
console.log('\n🎨 Color Scheme:');
console.log('  - Primary: Lotus Pink (#E91E63)');
console.log('  - Secondary: Soft Gold (#D4AF37)');
console.log('  - Accent: Golden Yellow (#FFD700)');
console.log('  - Nature: Lotus Green (#4CAF50)');
console.log('  - Background: Cream/Ivory (#FFFBF7)');
