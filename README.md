# Savorka Solar — React Website

Pixel-perfect React implementation of the Savorka Solar website design.

## Tech Stack
- React 18 (functional components + hooks)
- Tailwind CSS (utility-first styling)
- React Icons (FaFacebookF, FaXTwitter, etc.)
- Google Fonts: Montserrat + Open Sans

## Folder Structure
```
savorka/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TopBar.jsx          ← Black topbar with email + social icons
│   │   ├── Navbar.jsx          ← Sticky navbar with mobile menu
│   │   ├── SavorkaLogo.jsx     ← Reusable SVG logo (light/dark mode)
│   │   ├── HeroSection.jsx     ← Heading + CTA + expandable image strip
│   │   ├── GoGreenSection.jsx  ← Stats cards + animated leaf orb
│   │   ├── WhySolarSection.jsx ← 6-card why solar layout
│   │   ├── AboutSection.jsx    ← Features list + solar image
│   │   ├── ServicesSection.jsx ← 4 service cards on dark green bg
│   │   ├── TestimonialsSection.jsx ← Paginated testimonials
│   │   ├── ContactFormSection.jsx  ← Tabbed consultation form
│   │   ├── Footer.jsx          ← Dark footer with newsletter
│   │   └── SectionDivider.jsx  ← Green gradient divider
│   ├── pages/
│   │   └── HomePage.jsx        ← Assembles all sections
│   ├── styles/
│   │   └── index.css           ← Tailwind + custom animations
│   ├── App.js
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
```

### 3. Start development server
```bash
npm start
```

### 4. Build for production
```bash
npm run build
```

## Color Palette
| Token            | Value     | Usage                    |
|------------------|-----------|--------------------------|
| primary          | #2d7a27   | Main green               |
| primary-bright   | #76c442   | Accent green / cards     |
| navy             | #0d2137   | Headings, nav            |
| dark             | #1a1a1a   | Topbar, footer, buttons  |
| green-pale       | #eef7e0   | Form section background  |
| gray-soft        | #f5f5f0   | Why solar section bg     |

## Responsive Breakpoints
- Mobile: < 640px — single column, stacked layout
- Tablet: 640–1024px — 2-column grids
- Desktop: > 1024px — full layout as per design
