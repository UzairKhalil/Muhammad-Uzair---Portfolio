/** Work history and education shown in the About section. Newest first. */

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  context: string;
  highlights: string[];
}

export const experience: Role[] = [
  {
    company: 'alignPX',
    title: 'Software Engineer — Backend & Integrations',
    period: 'Oct 2023 – Present',
    location: 'Remote',
    context: 'FreightDesk Online — a multi-carrier eCommerce shipping management SaaS',
    highlights: [
      'Architect and maintain backend services for order fulfilment, multi-carrier shipping and real-time data processing on a production SaaS platform.',
      'Engineer integrations with Shopify, WooCommerce, Magento 2, BigCommerce, Etsy and freight/parcel carrier APIs.',
      'Implemented queue-based processing for bulk order import, label generation and rate retrieval.',
      'Optimised slow MySQL queries and removed N+1 patterns across core fulfilment flows.',
      'Built webhook-driven sync for near real-time order, inventory and tracking updates.',
    ],
  },
  {
    company: 'Techxa Networks',
    title: 'Laravel Developer — Backend & Integrations',
    period: 'Aug 2020 – Oct 2023',
    location: 'Peshawar, Pakistan',
    context: 'Marketplace seller tools and business-management applications',
    highlights: [
      'Built Laravel applications for Amazon and eBay sellers, including an automated repricing engine and seller dashboards.',
      'Integrated Amazon SP-API and eBay APIs for listings, price updates, inventory sync and order downloads.',
      'Used background jobs and queues to process large catalogues and bulk CSV imports/exports without blocking the UI.',
      'Designed and optimised schemas for large product and order datasets.',
    ],
  },
];

export const education = {
  degree: 'BS, Computer Science',
  school: 'University of Peshawar',
  period: '2018 – 2022',
  note: 'Thesis: Real-time plant identification using machine learning.',
};

export const languages = [
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'Urdu', level: 'Native' },
  { name: 'Pashto', level: 'Native' },
];
