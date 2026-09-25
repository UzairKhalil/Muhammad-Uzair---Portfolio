import type { IconName } from '@/components/icons';

/** Services shown in the Services section. */

export interface Service {
  title: string;
  icon: IconName;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    title: 'Marketplace & Store Integrations',
    icon: 'cart',
    description:
      'Connect your product to Amazon, Shopify, WooCommerce, BigCommerce, eBay or Etsy — with auth, rate limits and retries handled properly.',
    deliverables: ['OAuth2 app setup', 'Order import & fulfilment', 'Webhook handlers', 'Retry & error logging'],
  },
  {
    title: 'Inventory & Order Synchronisation',
    icon: 'refresh',
    description:
      'Keep stock levels, prices, orders and tracking consistent across every channel you sell on.',
    deliverables: ['Multi-channel stock sync', 'Price updates', 'Tracking push-back', 'Conflict handling'],
  },
  {
    title: 'Laravel SaaS Development',
    icon: 'layers',
    description:
      'Laravel SaaS applications, admin dashboards and APIs designed to be maintained for years.',
    deliverables: ['Feature development', 'REST / GraphQL APIs', 'Role & settings systems', 'Code reviews'],
  },
  {
    title: 'Performance & Queue Engineering',
    icon: 'gauge',
    description:
      'Find and fix slow queries, move heavy work into queues, and make bulk operations dependable.',
    deliverables: ['Query profiling & indexing', 'N+1 removal', 'Queue architecture', 'Bulk CSV pipelines'],
  },
];

/** Short description of how you work, shown under the services grid. */
export const process = [
  { step: '01', title: 'Understand', text: 'Clarify the workflow, the APIs involved and what “done” means.' },
  { step: '02', title: 'Plan', text: 'Agree on data model, integration points and edge cases up front.' },
  { step: '03', title: 'Build', text: 'Ship in small, reviewable increments with regular updates.' },
  { step: '04', title: 'Harden', text: 'Handle failures, retries and logging so it keeps running.' },
];
