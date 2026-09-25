/**
 * Global site content. Edit this file to change your name, headline,
 * contact links and SEO defaults. Every section reads from /src/data.
 */

export const site = {
  name: 'Muhammad Uzair',
  role: 'Laravel / PHP Developer',
  /** Hero headline. `emphasis` renders in the accent serif. */
  headline: {
    before: 'I build the backend that keeps',
    emphasis: 'stores, marketplaces',
    after: 'and carriers in sync.',
  },
  /** Short line under the hero headline. */
  tagline:
    'with 6 years of experience in SaaS, eCommerce and third-party API integrations — from Amazon SP-API and Shopify to queues and MySQL tuning.',
  intro:
    'Full-stack web developer with 6 years of experience building SaaS and eCommerce platforms in Laravel. I specialise in high-volume API integrations — Amazon SP-API, Shopify, WooCommerce, BigCommerce, eBay, Etsy and freight/parcel carriers — and in the queues and database work that keep them reliable.',
  location: 'Peshawar, Pakistan',
  timezone: 'PKT (UTC+5)',
  availability: 'Open to remote roles and freelance projects',
  yearsExperience: 6,

  email: 'uzairm2607@gmail.com',
  /** Shown on the page only when showPhone is true. */
  phone: '+92 348 939 1449',
  showPhone: false,

  social: {
    github: 'https://github.com/UzairKhalil',
    linkedin: 'https://www.linkedin.com/in/muhammad-uzair-21a8111b4',
  },

  /**
   * Optional: path to a résumé in /public (e.g. '/muhammad-uzair-resume.pdf').
   * Leave empty to hide the "Download résumé" button.
   */
  resumeUrl: '',

  /**
   * Optional: a form endpoint (Formspree, Getform, Basin, your own API …).
   * When empty, the contact form opens the visitor's email client instead.
   */
  contactFormEndpoint: '',

  seo: {
    title: 'Muhammad Uzair — Laravel / PHP Developer & API Integration Engineer',
    description:
      'Laravel/PHP developer with 6 years of experience building SaaS and eCommerce platforms, marketplace integrations (Amazon SP-API, Shopify, WooCommerce, BigCommerce, eBay, Etsy), queues and MySQL optimisation.',
    ogImage: '/og-image.png',
    keywords: [
      'Laravel developer',
      'PHP developer',
      'Amazon SP-API',
      'Shopify integration',
      'WooCommerce integration',
      'BigCommerce',
      'eBay API',
      'Etsy API',
      'SaaS development',
      'inventory synchronization',
      'MySQL optimization',
    ],
  },
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const;
