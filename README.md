# Prime Wood Global - Timber Supplier Website

A professional website for Prime Wood Global, a premium African timber supplier based in Cameroon.

## Overview

Prime Wood Global supplies quality hardwood from Cameroon including Iroko, Sapelli, Ayous, Sipo, Tali, Azobé, Bubinga, Padouk, and many more premium timber species for construction, furniture, and export.

## Features

### 🎨 Design
- **Custom Color Palette**: Earthy timber-inspired colors (browns, mahogany, cedar tones)
- **Responsive Design**: Mobile-first approach, works on all devices
- **Professional Typography**: Proxima Nova font family (same as asset-manager)
- **Modern UI Components**: Reusable button, header, footer components

### 📄 Page Sections

1. **Hero Section**
   - Prominent call-to-action with WhatsApp and email contact
   - Key statistics (20+ timber species, 1.2K+ followers)
   - Location badges (Cameroon, Douala & Kribi)
   - Contact information display

2. **Timber Species Section**
   - 12 detailed timber species cards
   - Scientific names and descriptions
   - Color characteristics
   - Common uses for each species
   - Expandable grid layout

3. **Products Section**
   - Logs & Timber Logs
   - Sawn Timber
   - Dimensioned Timber
   - Feature highlights for each product type

4. **Services Section**
   - Timber Supply & Sales
   - Wholesale Timber Supply
   - Furniture-Grade Wood
   - Wood Cutting & Processing
   - Construction Timber
   - Export & Logistics

5. **Sourcing Section**
   - Cameroon origin information
   - Douala & Kribi export logistics
   - Quality assurance details
   - Documentation & compliance

6. **About Section**
   - Company mission and values
   - Location information
   - Why choose Prime Wood Global
   - Contact details

7. **CTA Section**
   - Multiple contact methods
   - Request quote button
   - WhatsApp integration

### 🛠 Technology Stack

- **Framework**: Next.js 16.4.3 (App Router)
- **React**: 19.3.0
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Utilities**: clsx, tailwind-merge, class-variance-authority

### 📱 Components

**Layout Components:**
- `Header.tsx` - Fixed navigation with mobile menu
- `Footer.tsx` - Comprehensive footer with links and contact info

**UI Components:**
- `Button.tsx` - Variant-based button system (primary, mahogany, outline, ghost, dark, forest)

**Home Components:**
- `HeroSection.tsx`
- `TimberSpeciesSection.tsx`
- `ProductsSection.tsx`
- `ServicesSection.tsx`
- `SourcingSection.tsx`
- `AboutSection.tsx`
- `CTASection.tsx`

### 🎨 Color System

```css
--timber-brown: #5d4037
--timber-mahogany: #8b4513
--timber-cedar: #9c6644
--timber-walnut: #3e2723
--timber-oak: #d4a574
--accent-forest: #2e7d32
--accent-gold: #d4a574
```

### 📞 Contact Information

- **Phone**: +237 6 74 42 98 93
- **Email**: Support@primewoodglobal.com
- **WhatsApp**: +237 6 74 42 98 93
- **Locations**: 
  - Bipindi Kribi, Kribi, Cameroon
  - Douala, Cameroon

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
prime-wood-global-site/
├── app/
│   ├── globals.css        # Global styles with custom colors
│   ├── layout.tsx         # Root layout with header/footer
│   └── page.tsx           # Home page
├── components/
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── TimberSpeciesSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── SourcingSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── CTASection.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── Button.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── public/
    └── (images/fonts)
```

## Design Inspiration

- **Reference**: Spectrum Timber Ltd (spectrumtimberltd.lovable.app)
- **Style**: Professional B2B timber supplier
- **Components**: Based on asset-manager and tikari-site patterns
- **Content**: From Prime Wood Global Facebook page

## Key Features Implemented

✅ Responsive mobile-first design
✅ Custom timber-themed color palette
✅ Professional typography (Proxima Nova)
✅ 12 detailed timber species showcases
✅ Multiple contact methods (Phone, Email, WhatsApp)
✅ Export logistics information
✅ Product categorization
✅ Service highlights
✅ Company about section
✅ Strong call-to-action sections
✅ SEO-optimized metadata
✅ Accessibility considerations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2026 Prime Wood Global. All rights reserved.
