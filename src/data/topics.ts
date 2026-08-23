export interface Topic {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  status: 'complete' | 'help-wanted';
  icon: string;
}

export const topics: Topic[] = [
  {
    slug: 'pnr-creation',
    eyebrow: '01 · Booking',
    title: 'PNR Creation',
    description: 'Availability, sell, name, contact, and end-of-transaction entries.',
    status: 'complete',
    icon: '/img/topics/pnr-creation.svg',
  },
  {
    slug: 'fare-and-pricing',
    eyebrow: '02 · Pricing',
    title: 'Fare & Pricing',
    description: 'Quoting and pricing an itinerary before it goes to ticketing.',
    status: 'complete',
    icon: '/img/topics/fare-and-pricing.svg',
  },
  {
    slug: 'ticketing',
    eyebrow: '03 · Ticketing',
    title: 'Ticketing',
    description: 'Pricing, form of payment, and issuing the ticket.',
    status: 'complete',
    icon: '/img/topics/ticketing.svg',
  },
  {
    slug: 'reissue-exchange',
    eyebrow: '04 · Post-ticketing',
    title: 'Reissue & Exchange',
    description: 'Changing a flight, date, or route on an already-ticketed PNR.',
    status: 'complete',
    icon: '/img/topics/reissue-exchange.svg',
  },
  {
    slug: 'refunds',
    eyebrow: '05 · Post-ticketing',
    title: 'Refunds',
    description: 'Cancelling a ticketed booking and processing a refund.',
    status: 'complete',
    icon: '/img/topics/refunds.svg',
  },
  {
    slug: 'seat-maps-ancillaries',
    eyebrow: '06 · Add-ons',
    title: 'Seat Maps & Ancillaries',
    description: 'Seat maps, bags, meals, and other paid extras.',
    status: 'complete',
    icon: '/img/topics/seat-maps-ancillaries.svg',
  },
  {
    slug: 'queue-management',
    eyebrow: '07 · Workflow',
    title: 'Queue Management',
    description: 'Placing, moving, and clearing PNRs on Amadeus queues.',
    status: 'complete',
    icon: '/img/topics/queue-management.svg',
  },
  {
    slug: 'error-codes',
    eyebrow: '08 · Troubleshooting',
    title: 'Error Codes',
    description: 'Flat lookup for common rejection messages and fixes.',
    status: 'complete',
    icon: '/img/topics/error-codes.svg',
  },
];
