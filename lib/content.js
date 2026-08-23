// ============================================================
//  THE SIGNATURE SUITE — CONTENT SOURCE OF TRUTH
// ------------------------------------------------------------
//  This file is the single boundary between code and content.
//  Its shape mirrors the Sanity schemas that will replace it
//  in Phase 2B. Components must NEVER contain hardcoded copy;
//  they read exclusively from this module.
//
//  Swap plan (Phase 2B): replace each export with a GROQ query
//  result. Component contracts do not change.
// ============================================================

export const site = {
  name: 'The Signature Suite',
  tagline: 'Serviced Residences',
  bookingUrl: '#book',
  whatsappUrl: 'https://wa.me/919999999999',
  socials: {
    instagram: 'https://instagram.com/thesignaturesuite',
    facebook: '',
    linkedin: '',
  },
  navigation: [
    { label: 'Suites', href: '#suites' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const hero = {
  enabled: true,
  badge: 'Est. 2025 \u00b7 A Quiet Luxury Collection',
  headingLine1: 'Where stillness',
  headingLine2: 'meets substance.',
  subtitle:
    'A boutique collection of serviced residences composed with architectural calm, warm materiality, and considered hospitality.',
  primaryCta: { label: 'Reserve a Suite', href: '#book' },
  secondaryCta: { label: 'Explore Residences', href: '#suites' },
  poster: 'https://images.pexels.com/photos/33599113/pexels-photo-33599113.jpeg',
  videoDesktop:
    'https://videos.pexels.com/video-files/6853348/6853348-hd_1920_1080_30fps.mp4',
  videoMobile:
    'https://videos.pexels.com/video-files/6853338/6853338-hd_1280_720_30fps.mp4',
  overlayOpacity: 0.35,
};

export const about = {
  enabled: true,
  eyebrow: 'The Philosophy',
  headingLine1: 'A residence,',
  headingLine2: 'not a room.',
  lead:
    'Every corner is composed with intention \u2014 from the slow curve of morning light across linen, to the warmth of stone underfoot. The Signature Suite is designed for the traveller who understands that the finest luxuries are quiet ones.',
  body:
    'Seven residences. Two collections. One consistent belief: hospitality is what remains once everything unnecessary has been removed.',
  stats: [
    { value: '07', label: 'Residences' },
    { value: '02', label: 'Collections' },
    { value: '24h', label: 'Concierge' },
  ],
};

export const experience = {
  enabled: true,
  eyebrow: 'The Signature Experience',
  headingLine1: 'Hospitality,',
  headingLine2: 'unhurried.',
  intro:
    'Four quiet gestures that shape every stay. None of them announce themselves. All of them are felt.',
  pillars: [
    {
      no: '01',
      title: 'Private Concierge',
      body: 'A single point of contact, awake at whichever hour you are. Reservations, transfers, tailoring \u2014 arranged before you ask.',
    },
    {
      no: '02',
      title: 'Curated Interiors',
      body: 'Every material selected by hand: Indian marble, hand-loomed linen, patinated brass. Nothing to look at, everything to notice.',
    },
    {
      no: '03',
      title: 'Culinary Program',
      body: 'An in-residence chef on request. A larder stocked to your preference. Breakfast the way it is at home, only better.',
    },
    {
      no: '04',
      title: 'Wellness at Rest',
      body: 'Turndown rituals, oil massages in-suite, quiet mornings with fresh linen. The kind of care that requires no announcement.',
    },
  ],
};

export const suites = [
  {
    slug: 'the-ivory-suite',
    collection: 'Executive Collection',
    name: 'The Ivory Suite',
    tagline: 'Corner residence \u00b7 south light',
    area: '62 sqm',
    beds: '1 King',
    priceFrom: 18500,
    image: 'https://images.unsplash.com/photo-1653564906654-9f2484215e94',
  },
  {
    slug: 'the-atelier-suite',
    collection: 'Executive Collection',
    name: 'The Atelier Suite',
    tagline: 'Studio residence \u00b7 walk-in wardrobe',
    area: '54 sqm',
    beds: '1 Queen',
    priceFrom: 16500,
    image: 'https://images.unsplash.com/photo-1570427224050-b080ad19e3c4',
  },
  {
    slug: 'the-linen-suite',
    collection: 'Executive Collection',
    name: 'The Linen Suite',
    tagline: 'Garden view \u00b7 soaking tub',
    area: '58 sqm',
    beds: '1 King',
    priceFrom: 17500,
    image: 'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg',
  },
  {
    slug: 'the-marble-suite',
    collection: 'Executive Collection',
    name: 'The Marble Suite',
    tagline: 'Skyline view \u00b7 private terrace',
    area: '66 sqm',
    beds: '1 King',
    priceFrom: 19500,
    image: 'https://images.pexels.com/photos/33599113/pexels-photo-33599113.jpeg',
  },
  {
    slug: 'the-cormorant-residence',
    collection: 'Livoraa \u00d7 The Signature Suite',
    name: 'The Cormorant Residence',
    tagline: 'Two bedroom \u00b7 signature interiors',
    area: '108 sqm',
    beds: '2 King',
    priceFrom: 32000,
    image: 'https://images.pexels.com/photos/14547138/pexels-photo-14547138.jpeg',
  },
  {
    slug: 'the-champagne-penthouse',
    collection: 'Livoraa \u00d7 The Signature Suite',
    name: 'The Champagne Penthouse',
    tagline: 'Top floor \u00b7 panoramic residence',
    area: '142 sqm',
    beds: '2 King + Study',
    priceFrom: 46000,
    image: 'https://images.pexels.com/photos/6903157/pexels-photo-6903157.jpeg',
  },
  {
    slug: 'the-editor-residence',
    collection: 'Livoraa \u00d7 The Signature Suite',
    name: 'The Editor Residence',
    tagline: 'Curated art \u00b7 media lounge',
    area: '124 sqm',
    beds: '2 King',
    priceFrom: 38000,
    image: 'https://images.pexels.com/photos/36916378/pexels-photo-36916378.jpeg',
  },
];

export const amenities = {
  enabled: true,
  eyebrow: 'In Residence',
  headingLine1: 'The essentials,',
  headingLine2: 'quietly perfected.',
  intro:
    'A short list, obsessively considered. Everything you would expect, nothing you would not.',
  items: [
    { icon: 'BellRing', name: '24-Hour Concierge', description: 'A single point of contact for every arrangement.' },
    { icon: 'ChefHat', name: 'In-Residence Chef', description: 'Private meals prepared on request in your suite.' },
    { icon: 'Wifi', name: 'Fibre Internet', description: '1 Gbps hard-wired and mesh Wi-Fi across the residence.' },
    { icon: 'Sparkles', name: 'Daily Turndown', description: 'Twice-daily housekeeping with linen refresh.' },
    { icon: 'Waves', name: 'Wellness Suite', description: 'Steam, sauna and in-suite massage on appointment.' },
    { icon: 'Dumbbell', name: 'Private Gymnasium', description: 'Technogym equipment, resident-only, 24 hours.' },
    { icon: 'Car', name: 'Valet & Transfers', description: 'Airport pickups and chauffeur on request.' },
    { icon: 'Shirt', name: 'Laundry & Pressing', description: 'Same-day service by an in-house atelier.' },
    { icon: 'Wine', name: 'Curated Minibar', description: 'Stocked to your preferences before arrival.' },
    { icon: 'Briefcase', name: 'Workspace', description: 'Ergonomic desk, printing and quiet-hour service.' },
    { icon: 'ShieldCheck', name: 'Discretion & Security', description: 'Keyless entry, discreet staff, 24-hour surveillance.' },
    { icon: 'HeartHandshake', name: 'Bespoke Requests', description: 'From florists to physiotherapists \u2014 arranged.' },
  ],
};

export const gallery = {
  enabled: true,
  eyebrow: 'The Portfolio',
  headingLine1: 'A closer',
  headingLine2: 'look inside.',
  categories: ['All', 'Suites', 'Bathrooms', 'Architecture', 'Dining'],
  images: [
    { category: 'Bathrooms', src: 'https://images.unsplash.com/photo-1594873672629-61079318a5fd', alt: 'Marble bath with brass fittings', h: 5 },
    { category: 'Suites', src: 'https://images.unsplash.com/photo-1653564906654-9f2484215e94', alt: 'The Ivory Suite bedroom', h: 6 },
    { category: 'Architecture', src: 'https://images.pexels.com/photos/8092431/pexels-photo-8092431.jpeg', alt: 'Staircase & chandelier', h: 7 },
    { category: 'Suites', src: 'https://images.pexels.com/photos/7749046/pexels-photo-7749046.jpeg', alt: 'The Linen Suite', h: 4 },
    { category: 'Bathrooms', src: 'https://images.unsplash.com/photo-1656214286228-08fdbf520d1e', alt: 'Marble vanity detail', h: 5 },
    { category: 'Dining', src: 'https://images.pexels.com/photos/18471540/pexels-photo-18471540.jpeg', alt: 'Candlelit dining', h: 5 },
    { category: 'Architecture', src: 'https://images.pexels.com/photos/33685861/pexels-photo-33685861.jpeg', alt: 'Interior stonework', h: 6 },
    { category: 'Suites', src: 'https://images.unsplash.com/photo-1570427224050-b080ad19e3c4', alt: 'The Atelier Suite', h: 5 },
    { category: 'Bathrooms', src: 'https://images.pexels.com/photos/8910757/pexels-photo-8910757.jpeg', alt: 'Bathroom composition', h: 7 },
    { category: 'Architecture', src: 'https://images.pexels.com/photos/33685863/pexels-photo-33685863.jpeg', alt: 'Marble facade', h: 5 },
    { category: 'Suites', src: 'https://images.pexels.com/photos/14547138/pexels-photo-14547138.jpeg', alt: 'Living room', h: 6 },
    { category: 'Suites', src: 'https://images.pexels.com/photos/6903157/pexels-photo-6903157.jpeg', alt: 'Bedroom detail', h: 4 },
  ],
};

export const givingBack = {
  enabled: true,
  eyebrow: 'Stay With Purpose',
  headingLine1: 'Every stay,',
  headingLine2: 'a small kindness.',
  intro:
    'A share of every reservation is directed to the Gaushala and rural welfare initiatives we support. Quietly, monthly, without ceremony.',
  quote:
    '\u201cWe do not talk about it often. But every guest who chooses us is, in a small way, choosing them too.\u201d',
  attribution: 'Founders, The Signature Suite',
  partners: [
    {
      name: 'Shree Krishna Gaushala',
      cause: 'Care & shelter for retired and rescued cattle',
      description:
        'A community-run sanctuary near the property caring for over 240 rescued cows and calves. Our contribution supports feed, veterinary care and shelter.',
      image: 'https://images.pexels.com/photos/38422340/pexels-photo-38422340.jpeg',
      website: '',
    },
    {
      name: 'Village Welfare Circle',
      cause: 'Rural education and women\u2019s livelihood',
      description:
        'A local circle supporting after-school learning for children and skill programs for women in the villages surrounding the estate.',
      image: 'https://images.pexels.com/photos/25020306/pexels-photo-25020306.jpeg',
      website: '',
    },
  ],
  cta: { label: 'Read Our Impact Note', href: '#contact' },
};

export const location = {
  enabled: true,
  eyebrow: 'The Setting',
  headingLine1: 'A quiet address,',
  headingLine2: 'in easy reach.',
  address: '14 Ridgewood Estate, MG Road, Gurugram, Haryana 122002, India',
  coordinates: { lat: 28.4595, lng: 77.0266 },
  intro:
    'Twenty minutes from the airport, five from the metro, worlds away from the noise.',
  nearby: [
    { name: 'Indira Gandhi International Airport', distance: '18 km', time: '25 min drive' },
    { name: 'Cyber Hub', distance: '4.2 km', time: '9 min drive' },
    { name: 'Ambience Mall', distance: '2.8 km', time: '6 min drive' },
    { name: 'Golf Course Road', distance: '3.1 km', time: '7 min drive' },
    { name: 'HUDA City Centre Metro', distance: '2.4 km', time: '5 min drive' },
    { name: 'DLF Golf & Country Club', distance: '6.5 km', time: '12 min drive' },
  ],
  cta: { label: 'Get Directions', href: 'https://maps.google.com/?q=28.4595,77.0266' },
};

export const reviews = {
  enabled: true,
  eyebrow: 'In Their Words',
  headingLine1: 'Quiet praise,',
  headingLine2: 'from quiet travellers.',
  items: [
    {
      name: 'Anaïs Laurent',
      source: 'Private guest \u00b7 Paris',
      rating: 5,
      body: 'Rarely does a stay feel this composed. Everything I did not know I wanted was already thought through. The concierge remembered my coffee order by the second morning.',
    },
    {
      name: 'Rohan Mehta',
      source: 'Returning guest \u00b7 Mumbai',
      rating: 5,
      body: 'The interiors are exceptional \u2014 restrained, warm, and made for actually living in. I have stayed at Aman properties that felt less considered.',
    },
    {
      name: 'Elena Whitaker',
      source: 'Private guest \u00b7 London',
      rating: 5,
      body: 'A residence rather than a room, exactly as promised. Every material felt honest. Every gesture from the team, quietly generous.',
    },
    {
      name: 'Kabir Ahluwalia',
      source: 'Extended stay \u00b7 Delhi',
      rating: 5,
      body: 'I moved in for four nights and stayed for eleven. That, in itself, is the review.',
    },
    {
      name: 'Sarah Kim',
      source: 'Private guest \u00b7 Seoul',
      rating: 5,
      body: 'It is expensive to make things feel this effortless. The Signature Suite has done it. I will not stay anywhere else in the city again.',
    },
  ],
};

export const faqs = {
  enabled: true,
  eyebrow: 'Practical Notes',
  headingLine1: 'Answers,',
  headingLine2: 'before the questions.',
  items: [
    {
      question: 'What is included in a stay?',
      answer:
        'All residences include daily housekeeping, high-speed internet, 24-hour concierge, breakfast provisions, and airport transfer on stays of three nights or more.',
    },
    {
      question: 'Can I book a residence for an extended stay?',
      answer:
        'Yes. Monthly rates apply to bookings of 28 nights or more. We tailor the residence \u2014 stocked larder, laundry cadence, personal preferences \u2014 to your routine.',
    },
    {
      question: 'Is there a minimum stay?',
      answer:
        'Executive suites are available from one night. Livoraa \u00d7 The Signature Suite residences require a two-night minimum.',
    },
    {
      question: 'What is the cancellation policy?',
      answer:
        'Complimentary cancellation up to 72 hours before arrival. Late cancellations are charged one night. Extended stays follow a bespoke policy shared at booking.',
    },
    {
      question: 'Do you accommodate special requests?',
      answer:
        'That is, quite simply, the job. Florists, physiotherapists, private chefs, celebration dressings \u2014 arranged through the concierge in advance.',
    },
    {
      question: 'How do I book?',
      answer:
        'Reserve directly through the Book Now button, WhatsApp our concierge, or write to reservations@thesignaturesuite.com. Direct bookings receive the best available rate.',
    },
  ],
};

export const contact = {
  enabled: true,
  eyebrow: 'Reservations',
  headingLine1: 'Speak with',
  headingLine2: 'our concierge.',
  intro:
    'A member of the team will respond within the hour, between 07:00 and 23:00 IST. Overnight requests are handled at first light.',
  phone: '+91 99999 99999',
  whatsapp: '+91 99999 99999',
  email: 'reservations@thesignaturesuite.com',
  hours: 'Concierge desk \u00b7 07:00 to 23:00 IST',
  address: '14 Ridgewood Estate, MG Road, Gurugram 122002',
};

export const footer = {
  description:
    'A boutique collection of serviced residences. Composed with restraint. Delivered with care.',
  columns: [
    {
      title: 'The Residences',
      links: [
        { label: 'Executive Collection', href: '#suites' },
        { label: 'Livoraa \u00d7 The Signature Suite', href: '#suites' },
        { label: 'Extended Stays', href: '#contact' },
      ],
    },
    {
      title: 'The House',
      links: [
        { label: 'The Philosophy', href: '#about' },
        { label: 'The Experience', href: '#experience' },
        { label: 'Giving Back', href: '#giving-back' },
      ],
    },
    {
      title: 'Practical',
      links: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#contact' },
        { label: 'Location', href: '#location' },
      ],
    },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
};
