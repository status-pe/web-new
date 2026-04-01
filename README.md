# Status P-E Pte Ltd — Corporate Website

Corporate website for **Status P-E Pte Ltd**, a precision engineering solutions partner based in Singapore.

Built with [Next.js 16](https://nextjs.org), React 19, and Tailwind CSS 4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── enquiry/
│   │       └── route.ts      # POST endpoint — sends enquiry email via Resend
│   ├── layout.tsx            # Root layout with SEO metadata & JSON-LD
│   ├── page.tsx              # Home page (assembles all sections)
│   └── globals.css           # Theme, animations, custom styles
├── lib/
│   └── email-template.ts     # HTML email template builder for enquiry notifications
└── components/
    ├── Navbar.tsx         # Fixed navbar with mobile hamburger menu
    ├── Hero.tsx           # Hero banner with stats
    ├── About.tsx          # Company introduction
    ├── Services.tsx       # Service cards
    ├── Capabilities.tsx   # Capability highlights
    ├── Process.tsx        # Process steps
    ├── CtaBanner.tsx      # Call-to-action banner
    ├── Contact.tsx        # Contact info & enquiry form (submits to /api/enquiry)
    ├── Footer.tsx         # Site footer
    ├── Logo.tsx           # Company logo (PNG image)
    ├── ScrollAnimator.tsx # Intersection Observer scroll animations
    └── WhatsAppFloat.tsx  # Floating WhatsApp button (bottom-right)
```

## Environment Variables

Create a `.env.local` file in the project root:

```
RESEND_API_KEY=your_resend_api_key_here
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com/api-keys) for sending enquiry emails |

## Features

### SEO
- Open Graph and Twitter Card metadata
- JSON-LD structured data (`LocalBusiness` schema) with address, services, and geo coordinates
- Robots meta with generous snippet/preview settings
- Canonical URL via `alternates`
- Expanded keywords covering all services and Singapore-specific terms

### WhatsApp Floating Button
- Fixed bottom-right floating button, always visible on all pages
- Pulse/ripple animation to draw attention (inspired by [betawerkz.com.sg](https://www.betawerkz.com.sg))
- Links to `wa.me/6597373178` with a pre-filled greeting message
- Animation pauses on hover

### Google Maps Integration
- Address in the Contact section and Footer links to Google Maps
- Opens in a new tab (`target="_blank"`)

### Mobile Navigation
- Hamburger menu with slide-in panel and backdrop overlay
- Tapping the backdrop closes the menu
- Body scroll lock when menu is open
- Capped at `85vw` width on small screens
- Mobile menu drawer and backdrop rendered outside `<nav>` to avoid `backdrop-filter` creating a containing block (which would collapse the fixed drawer to the nav's 80px height)
- Sections with scroll animations (`fade-right`, `fade-left`) use `overflow-x-hidden` to prevent horizontal overflow from expanding the mobile viewport

### CNC Milling Description
- Updated to: "Precised CNC Milling process to achieve complex geometries and tight tolerances. Suitable for both low quantity R&D or high volume production."

### Logo & Favicon
- Logo component (`Logo.tsx`) renders the official company PNG (`public/images/logo-full.png`) — includes the S icon and "STATUS P-E PTE LTD" text
- Navbar and Footer use the logo image directly (no separate text labels)
- Favicon (`src/app/favicon.ico`), `icon.png` (192x192), and `apple-icon.png` (180x180) are generated from the circle S icon (`public/images/logo.png`)

### Enquiry Form & Email (Resend)
- Contact form submits to `/api/enquiry` API route
- On submission, two emails are sent simultaneously via [Resend](https://resend.com):
  1. **Admin notification** → `admin@statuspe.com.sg` with full enquiry details (Name, Company, Email, Phone, Service, Project Details), "Reply to" CTA button, and sign-off from Admin
  2. **Enquirer acknowledgement** → sent to the enquirer's email confirming receipt, showing their enquiry summary (Service & Details), expected 1–2 business day response time, and direct contact info (Phone, Email, WhatsApp)
- Both emails share consistent branding: company logo header with dark gradient, blue accent bar, clean typography, and company footer
- Form shows sending/sent/error states with user feedback
- Admin email failure returns an error; acknowledgement email failure is logged but does not fail the request
- Email templates source: `src/lib/email-template.ts` (`buildEnquiryEmail` + `buildAcknowledgementEmail`)
- API route: `src/app/api/enquiry/route.ts`

### Footer
- Contact items (address, mobile, email) include inline SVG icons for visual clarity

## Assets

All images are stored locally in `public/images/`.

| Image | Path | Source |
|---|---|---|
| Hero background | `public/images/hero-bg.jpg` | [Unsplash](https://unsplash.com/photos/photo-1647586028042-1de4d4a935e6) |
| CTA banner background | `public/images/cta-banner-bg.jpg` | [Unsplash](https://unsplash.com/photos/photo-1504328345606-18bbc8c9d7d1) |
| About section | `public/images/about-cnc.jpg` | [Unsplash](https://unsplash.com/photos/photo-1713371398485-7bde1bde9def) |
| Capabilities | `public/images/capabilities.jpg` | [Unsplash](https://unsplash.com/photos/photo-1758873263428-f4b2edb45fe1) |
| CNC Milling | `public/images/services/cnc-milling.jpg` | [Unsplash](https://unsplash.com/photos/photo-1689942007817-679c21614b25) |
| CNC Turning | `public/images/services/cnc-turning.jpg` | [Unsplash](https://unsplash.com/photos/photo-1666634157070-6fd830fb5672) |
| Precision Grinding | `public/images/services/precision-grinding.jpg` | [Unsplash](https://unsplash.com/photos/photo-1739206509849-016cb3112196) |
| Wire Cutting | `public/images/services/wire-cutting.jpg` | [Unsplash](https://unsplash.com/photos/photo-1504917595217-d4dc5ebe6122) |
| Waterjet Cutting | `public/images/services/waterjet-cutting.jpg` | [Unsplash](https://unsplash.com/photos/photo-1508465818649-14a170138405) |
| Laser Cutting | `public/images/services/laser-cutting.jpg` | [Unsplash](https://unsplash.com/photos/photo-1689961476752-cc6cc3a02f86) |
| Sheet Metal Bending | `public/images/services/sheet-metal-bending.jpg` | [Unsplash](https://unsplash.com/photos/photo-1758873263527-ca53b938fbd4) |
| Surface Treatment | `public/images/services/surface-treatment.jpg` | [Unsplash](https://unsplash.com/photos/photo-1731317734838-12da6c9a6139) |
| Logo (full with text) | `public/images/logo-full.png` | Company asset |
| Logo (circle icon) | `public/images/logo.png` | Company asset |

## Deployment

```bash
npm run build
npm start
```

Or deploy on [Vercel](https://vercel.com) for zero-config hosting.
