import type { ImageMetadata } from 'astro';

/**
 * Projects shown in the Projects section.
 *
 * To add a screenshot: put the image in /src/assets/projects/, import it at
 * the top of this file and set `image` on the project. Without an image, a
 * clearly labelled placeholder is rendered instead.
 *
 * Only describe what you actually built. Leave `outcome` empty until you have
 * a real, shareable result — nothing is rendered for it when empty.
 */

export interface Project {
  slug: string;
  title: string;
  kind: string;
  period?: string;
  summary: string;
  /** What you built / were responsible for. */
  contributions: string[];
  stack: string[];
  /** A real, verifiable result. Leave empty if you don't have one. */
  outcome?: string;
  image?: ImageMetadata;
  imageAlt?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'freightdesk-online',
    title: 'FreightDesk Online',
    kind: 'Multi-carrier eCommerce shipping SaaS',
    period: '2023 – Present · alignPX',
    summary:
      'Backend services and integrations for a shipping platform that connects online merchants to multiple sales channels and freight/parcel carriers.',
    contributions: [
      'Store integrations for Shopify, WooCommerce, Magento 2, BigCommerce and Etsy',
      'Freight and parcel carrier API integrations for rates, labels and tracking',
      'Queue workers for bulk order import, label generation and rate retrieval',
      'Webhook-driven sync of orders, inventory and tracking between stores and the platform',
      'MySQL query optimisation and N+1 removal across fulfilment flows',
    ],
    stack: ['Laravel', 'MySQL', 'REST APIs', 'Webhooks', 'Queues', 'OAuth2'],
    links: [{ label: 'freightdesk.online', href: 'https://freightdesk.online' }],
    featured: true,
  },
  {
    slug: 'amazon-repricer',
    title: 'Amazon Repricer',
    kind: 'Automated Buy Box repricing engine',
    period: 'Techxa Networks',
    summary:
      'Downloads seller listings, analyses competitor pricing and adjusts prices from user-defined rules to win and hold the Buy Box — replacing manual repricing.',
    contributions: [
      'Amazon SP-API integration for listings and price updates',
      'Rule engine that applies seller-defined pricing strategies',
      'Background jobs and queues to reprice large catalogues',
    ],
    stack: ['Laravel', 'Amazon SP-API', 'Queues', 'MySQL'],
    featured: true,
  },
  {
    slug: 'amazon-seller-management',
    title: 'Amazon Seller Management System',
    kind: 'Centralised seller operations dashboard',
    period: 'Techxa Networks',
    summary:
      'One dashboard for listings, pricing, inventory, orders, customer messages and feedback, driven by Amazon APIs.',
    contributions: [
      'Inventory synchronisation and order downloads via SP-API',
      'Listing and pricing management screens',
      'Buyer messages and feedback handling',
    ],
    stack: ['Laravel', 'Amazon SP-API', 'AJAX', 'MySQL'],
  },
  {
    slug: 'ebay-seller-management',
    title: 'eBay Seller Management System',
    kind: 'Seller operations tool',
    period: 'Techxa Networks',
    summary: 'Automates listing, pricing, inventory and order management for eBay sellers.',
    contributions: [
      'eBay API integration for listings and orders',
      'Inventory and price synchronisation',
    ],
    stack: ['Laravel', 'eBay API', 'MySQL'],
  },
  {
    slug: 'business-management-apps',
    title: 'Business & Accounting Applications',
    kind: 'Internal business tools',
    period: 'Techxa Networks',
    summary:
      'Business-management and accounting web applications for oil-distribution and bookkeeping workflows.',
    contributions: ['Laravel applications for oil-distribution operations', 'Bookkeeping and accounting workflows'],
    stack: ['Laravel', 'MySQL'],
  },
];
