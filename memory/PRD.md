# Hilton Pharma Chem - PRD

## Original Problem Statement
Build a professional, SEO-friendly website for Hilton Pharma Chem - a third-party Ayurvedic manufacturing company based in India. Website should be AI screening and SEO friendly with professional, jargon-free, scientific tone.

## Architecture
- **Frontend**: React + Tailwind CSS + Shadcn UI (port 3000)
- **Backend**: FastAPI + MongoDB (port 8001)
- **Database**: MongoDB (inquiries, blogs collections)
- **Design**: Outfit + Manrope fonts, Deep green/saffron/brown/white color palette

## User Personas
1. **Brand Owners** - Looking for third-party manufacturing partner
2. **Exporters** - Need GMP/ISO certified manufacturer for international markets
3. **Startups** - Seeking cost-effective manufacturing for new products

## Core Requirements
- Company website with 5 pages (Home, About, Products, Blog, Contact)
- Functional contact inquiry form stored in MongoDB
- SEO-optimized content and meta tags
- Professional B2B manufacturing brand presentation
- Blog for content marketing and SEO

## What's Been Implemented (April 2026)
- Full 5-page website: Home, About Us, Products, Blog, Contact
- Hero section with company tagline and CTAs
- USP bento grid (300+ formulations, 25+ years, GMP/ISO, 100+ partners)
- 10-step process section: Enquiry to Dispatch
- Product categories: 6 categories with dedicated sub-pages
- About page with company story, partnership model, values, certifications, locations
- Products page with detailed category info and manufacturing highlights
- Blog with 4 seeded articles (Ayurvedic manufacturing industry content)
- Blog writing functionality with formatting toolbar and preview
- Blog post detail pages
- Functional contact form (name, company, email, phone, product interest dropdown, message)
- Contact info display with phone, email, locations
- Custom SVG brand logo in deep green + saffron (matching website color scheme)
- Fixed navbar with logo and Request Quote CTA
- Dark footer with quick links, product range, contact details
- SEO meta tags in index.html
- Product sub-pages with SEO-optimized content from catalog PDF
- Responsive design for mobile/tablet/desktop

### Product Sub-Pages (from catalog)
- /products/ointments-creams-gels - 13 products
- /products/syrups-liquids - 13 products
- /products/oils - 13 products
- /products/herbal-powders - 6 products
- /products/tablets-capsules - 15 products
- /products/winter-seasonal - 9 products

## Prioritized Backlog
- P1: Admin panel for managing blog posts and viewing inquiries
- P1: Schema.org structured data for better SEO
- P2: Image optimization and lazy loading
- P2: Sitemap.xml generation
- P2: Google Analytics / Tag Manager integration
- P3: WhatsApp chat widget for instant communication
- P3: Testimonials/client logos section
- P3: Multi-language support (Hindi)

## Next Tasks
- Add structured data markup (JSON-LD) for Organization, Products
- Create admin dashboard to manage blog posts and view inquiries
- Add sitemap.xml and robots.txt for search engines
- Integrate Google Analytics for traffic tracking
