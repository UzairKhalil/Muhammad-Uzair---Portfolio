import type { IconName } from '@/components/icons';

/** Skill groups shown in the Skills section. */

export interface SkillGroup {
  title: string;
  icon: IconName;
  description: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'server',
    description: 'Laravel applications built to stay maintainable as they grow.',
    items: ['PHP', 'Laravel', 'REST API design', 'SaaS architecture', 'Composer'],
  },
  {
    title: 'Integrations',
    icon: 'plug',
    description: 'Talking to third-party platforms reliably, at volume.',
    items: ['REST APIs', 'GraphQL', 'Webhooks', 'OAuth2', 'JSON', 'Web scraping'],
  },
  {
    title: 'Data & Performance',
    icon: 'database',
    description: 'Schemas and queries that hold up under large catalogues.',
    items: ['MySQL', 'Query optimisation', 'Indexing', 'Schema design', 'N+1 elimination'],
  },
  {
    title: 'Async Processing',
    icon: 'layers',
    description: 'Heavy work moved off the request so the UI stays fast.',
    items: ['Queue jobs', 'Background workers', 'Bulk CSV import/export', 'Large file processing'],
  },
  {
    title: 'Frontend',
    icon: 'code',
    description: 'Practical, responsive interfaces for admin and merchant tools.',
    items: ['JavaScript (ES6)', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'AJAX'],
  },
  {
    title: 'Workflow',
    icon: 'git',
    description: 'Shipping in teams with clear process.',
    items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'OpenProject', 'Agile / Scrum'],
  },
];

/** Platforms and APIs integrated in production work (from the résumé). */
export const platforms: { name: string; detail: string }[] = [
  { name: 'Amazon SP-API', detail: 'Listings, pricing, inventory, orders' },
  { name: 'Shopify', detail: 'Orders, fulfilment, webhooks' },
  { name: 'WooCommerce', detail: 'Store integration' },
  { name: 'BigCommerce', detail: 'Store integration' },
  { name: 'Magento 2', detail: 'Store integration' },
  { name: 'eBay', detail: 'Listings, pricing, orders' },
  { name: 'Etsy', detail: 'Store integration' },
  { name: 'HubSpot', detail: 'CRM integration' },
  { name: 'Freight & parcel carriers', detail: 'Rates, labels, tracking' },
];
