// Site configuration constants
export const SITE_CONFIG = {
  name: 'Branding Agency',
  description:
    'Professional branding services including strategy, naming, voice development, and copywriting',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.jpg',
};

// Navigation menu items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Service types
export const SERVICE_TYPES = {
  BRAND_STRATEGY: 'brand-strategy',
  BRAND_NAMING: 'brand-naming',
  BRAND_VOICE: 'brand-voice',
  COPYWRITING: 'copywriting',
};
